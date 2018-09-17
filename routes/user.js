const Router = require("koa-router");
const userService = require("../services/user");
const router = new Router({});

router.get("/hello", userService.hello);
router.get("/sleep", userService.sleep);
router.post("/login", userService.login);

module.exports = router;
