module.exports = {
  all: async ctx => {
    const data = await [{ id: 1, name: "nodejs in action" }]; // mock data
    ctx.body = data;
  },
  query: async ctx => {
    const data = await { id: 1, name: "nodejs in action" };
    ctx.body = data;
  }
};
