module.exports = {
  all: async () => {
    return [{ id: 1, name: 'nodejs in action' }]; // mock data
  },
  query: async () => {
    return { id: 1, name: 'nodejs in action' };
  },
};
