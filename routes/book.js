const Router = require("koa-router");
const bookService = require("../services/book");
const router = new Router({});

router.get("/book", bookService.all);
router.get("/query", bookService.query);

module.exports = router;
