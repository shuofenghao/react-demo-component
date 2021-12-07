export default {
  // 支持值为 Object 和 Array
  'GET /api/users': (req, res) => {
    const { query: { search = '' } = {} } = req;
    if (search === '张') {
      setTimeout(() => {
        res.end(
          JSON.stringify({
            status: 1,
            message: '成功',
            data: {
              user: '张',
            },
          }),
        );
      }, 5000);
    } else {
      res.end(
        JSON.stringify({
          status: 1,
          message: '成功',
          data: {
            user: search,
          },
        }),
      );
    }
  },
};
