/* eslint-disable */
importScripts('./utils.js');

self.addEventListener('message', (e) => {
  const { data: { fun = '', data = [] } = {} } = e;
  if (fun && Object.keys(self).indexOf(fun) && typeof self[fun] === 'function') {
    self[fun](data).then((res) => {
      self.postMessage({
        fun,
        data: res,
      });
    });
  }
});
