const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const timer = require("./middlewares/timer");
const userRouter = require("./routes/user");
const bookRouter = require("./routes/book");

const app = new Koa();

// middlewares
app.use(timer());
app.use(bodyParser());

// routes
app.use(userRouter.routes());
app.use(bookRouter.routes());

module.exports = app;
if (!module.parent) app.listen(3000);
