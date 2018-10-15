const Router = require('koa-router');
const userService = require('../services/user');
const router = new Router({});

router.get('/hello', () => {
  const data = userService.hello();
  ctx.body = data;
});

router.get('/sleep', async ctx => {
  const data = await userService.sleep();
  ctx.body = data;
});

router.post('/login', async ctx => {
  const data = await userService.login();
  ctx.body = data;
});

module.exports = router;
