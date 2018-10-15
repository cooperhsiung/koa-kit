const Router = require('koa-router');
const bookService = require('../services/book');
const router = new Router({});

router.get('/book', async ctx => {
  const data = await bookService.all();
  ctx.body = data;
});

router.get('/query', async ctx => {
  const data = await bookService.query();
  ctx.body = data;
});

module.exports = router;
