/* eslint-disable no-param-reassign */
/* eslint-disable max-classes-per-file */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */
import io from 'socket.io-client';
import SimplePeer from 'simple-peer';
import { EventEmitter } from 'events';

class TesterConnection {
  constructor(tid, onRemote) {
    this.connected = false;
    this.connecting = false;
    this.tid = tid;
    this.events = new EventEmitter();
    this.stream = null;
    this.datachannel = null;
    this.onRemote = onRemote;
  }

  async connect() {
    const name = 'broadcaster';
    return new Promise((resolve, reject) => {
      const socket = io('https://hia.chocola.moe:443');
      const p = new SimplePeer({
        initiator: true,
        config: {
          iceServers: [
            {
              urls: 'turn:49.247.133.224:3478?transport=tcp',
              username: 'test',
              credential: 'test',
            },
          ],
        },
      });
      this.p = p;
      this.socket = socket;
      this.connecting = true;
      socket.on('connect', () => {
        console.log('s connected');
        socket.emit('client', { name, tid: this.tid });
      });

      p.on('connect', () => {
        console.log('connected!');
        this.connected = true;
        this.events.emit('connected');
        resolve(p);
        // window.onbeforeunload = () => p.destroy();
      });
      p.on('data', (data) => {
        data = data.toString();
        data = JSON.parse(data);
        console.log(data);
        if (data.type === 'remote') {
          this.onRemote(data.direction);
        }
      });
      p.on('close', () => {
        console.log('closed!');
      });

      p.on('signal', (data) => {
        // console.log(data);
        socket.emit('signal', data);
      });

      socket.on('signal', (data) => p.signal(data));

      socket.on('disconnect', () => {
        this.events.emit('disconnected');
        p.destroy();
      });
    });
  }
}

const testerInstances = new Map();
export const getTesterInstance = (tid, ...arg) => {
  tid = tid.toString();
  if (!testerInstances.has(tid))
    testerInstances.set(tid, new TesterConnection(tid, ...arg));
  return testerInstances.get(tid);
};

class SupervisorConnection {
  constructor(tid) {
    this.connected = false;
    this.connecting = false;
    this.tid = tid;
    this.events = new EventEmitter();
    this.stream = null;
    this.datachannel = null;
  }

  async connect() {
    const name = 'viewer';
    return new Promise((resolve, reject) => {
      const socket = io('https://hia.chocola.moe:443');
      const p = new SimplePeer({
        initiator: true,
        config: {
          iceServers: [
            {
              urls: 'turn:49.247.133.224:3478?transport=tcp',
              username: 'test',
              credential: 'test',
            },
          ],
        },
      });
      this.p = p;
      this.socket = socket;
      this.connecting = true;
      socket.on('connect', () => {
        console.log('s connected');
        socket.emit('client', { name, tid: this.tid });
      });

      p.on('connect', () => {
        console.log(`${this.tid} connected!`);
        this.connected = true;
        this.events.emit('connected');
        resolve(p);
        // window.onbeforeunload = () => p.destroy();
      });

      p.on('close', () => {
        console.log('closed!');
      });

      p.on('stream', (stream) => {
        this.events.emit('stream', stream);
        this.stream = stream;
      });

      p.on('data', (data) => {
        this.datachannel = data;
      });

      p.on('signal', (data) => {
        // console.log(data);
        socket.emit('signal', data);
      });

      socket.on('signal', (data) => p.signal(data));

      socket.on('disconnect', () => {
        this.events.emit('disconnected');
        p.destroy();
      });
    });
  }

  disconnect() {
    this.p.destroy();
    this.socket.close();
  }
}

const supervisorInstances = new Map();
export const getSupervisorInstance = (tid) => {
  // eslint-disable-next-line no-param-reassign
  tid = tid.toString();
  if (!supervisorInstances.has(tid))
    supervisorInstances.set(tid, new SupervisorConnection(tid));
  return supervisorInstances.get(tid);
};
