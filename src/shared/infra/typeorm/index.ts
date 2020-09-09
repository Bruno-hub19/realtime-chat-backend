import { createConnection } from 'typeorm';

createConnection().then(connection => {
  console.log('[DATABASE] Is connected: ', connection.isConnected);
});
