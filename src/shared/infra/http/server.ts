import { app } from './app';

app.listen(process.env.PORT, () => {
  console.log('[SERVER] Running on http://localhost:3232');
});
