module.exports = (opts = {}) => async (ctx, next) => {
  const start = Date.now();
  await next();
  ctx.set("X-Response-Time", `${Date.now() - start}ms`);
};
