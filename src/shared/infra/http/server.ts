import { server } from './app';

server.listen(process.env.PORT, () => {
  console.log('[SERVER] Running on http://localhost:3232');
});
