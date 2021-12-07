function getTree() {
  function createTree(deep, index, length) {
    if (deep === 1) {
      return {
        children: [],
        isLeaf: true,
        key: `${index}`,
        title: `mock data${index}`,
      };
    } else if (deep > 1) {
      return {
        children: Array(length)
          .fill(null)
          .map((_, childrenIndex) => createTree(deep - 1, `${index}-${childrenIndex}`)),
        isLeaf: false,
        title: `mock data${index}`,
        key: `${index}`,
      };
    } else {
      return {};
    }
  }
  return new Promise((resolve) => {
    const tree = Array(1000)
      .fill(null)
      .map((_, index) => createTree(5, `${index}`, 1000));
    resolve(tree);
  });
}
function format(data) {
  function traverse(data, callback) {
    return data.map((i) => {
      if (i.children) {
        i.children = traverse(i.children, callback);
      }
      return callback(i);
    });
  }
  return new Promise((resolve) => {
    resolve(traverse(data, (i) => ({ ...i, value: i.title })));
  });
}
