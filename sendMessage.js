// eslint-disable-next-line @typescript-eslint/no-var-requires
const Socket = require('ws');
async function openSocket () {
  return new Promise((resolve) => {
    const ws = new Socket('ws://localhost:3000/');
    ws.on('open', () => {
      resolve(ws);
    });
  });
}

async function wsPromise (socket, message, data) {
  return new Promise((resolve, reject) => {
    socket.send(JSON.stringify({ event: message }), data, (res) => { if (res) resolve(res); });
    socket.on('message', (data) => resolve (data));
    socket.on('error', (err) => reject(err));
    socket.on('exception', (data) => reject(data));
  });
}

async function callSocket(message, data) {
  const ws = await openSocket();
  return wsPromise(ws, message, data);
}

callSocket('message', {}).then(data => console.log(data)).catch(err => console.error(err));