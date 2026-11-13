// Мини-сервер сигналов PeerJS. Хостинг: Render / Railway / Fly.io и т.п.
const { PeerServer } = require('peer');
const port = Number(process.env.PORT) || 9000;
PeerServer({ port, path: '/', proxied: true, allow_discovery: false, corsOptions: { origin: true } });
console.log('PeerJS server on :' + port);
