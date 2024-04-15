const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log('wait =  ',ms)
});

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(8000,()=>{
  console.log("running port 8000")
});