/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-destructuring */
/* eslint-disable import/prefer-default-export */
/* eslint-disable class-methods-use-this */
import { EventEmitter } from 'events';
import WebSocketAsPromised from 'websocket-as-promised';

export class HardwarePeer {
  constructor(onStream) {
    this.pc = new RTCPeerConnection();
    this.events = new EventEmitter();
    this.remoteDirection = 'stop';
    this.cnt = 0;
    this.pc.onicecandidate = async ({ candidate }) => {
      if (candidate) {
        const request = {
          what: 'addIceCandidate',
          data: JSON.stringify(candidate),
        };
        await this.sendSocket(request);
      }
    };

    this.pc.ondatachannel = (event) => {
      console.log('data channel available');
      this.remoteId = setInterval(() => {
        this.sendDatachannel(this.remoteDirection);
        console.log(this.remoteDirection);
      }, 10);
      this.datachannel = event.channel;
      this.datachannel.onmessage = console.log;
    };

    this.pc.ontrack = (event) => {
      // onStream(event.track);
      // console.log(event);
      // this.stream.addTrack(event.track);
      // if (this.cnt++ == 1) {
      onStream(event.streams[0]);
      // }
    };
  }

  async onMessage(message) {
    const { what, data } = message;

    if (what === 'offer') {
      await this.pc.setRemoteDescription(
        new RTCSessionDescription(JSON.parse(data))
      );
      await this.pc.setLocalDescription(await this.pc.createAnswer());
      const answer = {
        what: 'answer',
        data: JSON.stringify(this.pc.localDescription),
      };
      await this.sendSocket(answer);
    }

    if (what === 'iceCandidate') {
      if (!data) return;
      const candidate = new RTCIceCandidate(JSON.parse(data));
      await this.pc.addIceCandidate(candidate);
    }

    if (what === 'message') {
      console.log(message);
    }
  }

  async init(url) {
    this.url = url;
    this.socket = new WebSocketAsPromised(url, {
      packMessage: (data) => JSON.stringify(data),
      unpackMessage: (message) => JSON.parse(message),
    });
    this.socket.onUnpackedMessage.addListener((arg) => this.onMessage(arg));
    await this.socket.open();
    await this.sendSocket({
      what: 'call',
      options: {
        force_hw_vcodec: true,
        vformat: 30,
        trickle_ice: true,
      },
    });
  }

  sendDatachannel(data) {
    if (!this.datachannel) return;
    this.datachannel.send(data);
    // this.datachannel.send(JSON.stringify(data));
  }

  async sendSocket(request) {
    this.socket.sendPacked(request);
  }

  async close() {
    await this.socket.close();
  }
}
