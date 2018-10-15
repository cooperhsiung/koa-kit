module.exports = {
  hello: () => {
    return 'hello';
  },
  sleep: async () => {
    await sleep();
    return 'sleep 1s';
  },
  login: async () => {
    return await { code: 0, name: 'bob' };
  },
};

function sleep() {
  return new Promise(resolve => setTimeout(resolve, 1000));
}
