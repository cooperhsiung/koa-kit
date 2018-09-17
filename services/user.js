module.exports = {
  hello: async ctx => {
    ctx.body = "hello";
  },
  sleep: async ctx => {
    await sleep();
    ctx.body = "sleep 1s";
  },
  login: async ctx => {
    const data = await { code: 0, name: "bob" };
    ctx.body = data;
  }
};

function sleep() {
  return new Promise(resolve => setTimeout(resolve, 1000));
}
