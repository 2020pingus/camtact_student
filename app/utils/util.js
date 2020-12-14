/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */
import io from 'socket.io-client';
import SimplePeer from 'simple-peer';

class TesterConnection {
  constructor() {
    this.connected = false;
  }

  async connect(tid) {
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
      socket.on('connect', () => {
        console.log('s connected');
        socket.emit('client', { name, tid });
      });

      p.on('connect', () => {
        console.log('connected!');
        this.connected = true;
        resolve(p);
        // window.onbeforeunload = () => p.destroy();
      });

      p.on('close', () => {
        console.log('closed!');
      });

      p.on('signal', (data) => {
        // console.log(data);
        socket.emit('signal', data);
      });

      socket.on('signal', (data) => p.signal(data));

      socket.on('disconnect', () => p.destroy());
    });
  }
}
let testerInstance = null;
export const getTesterInstance = () => {
  if (testerInstance) return testerInstance;
  testerInstance = new TesterConnection();
  return testerInstance;
};
