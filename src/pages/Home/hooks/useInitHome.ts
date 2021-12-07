import { useState, useRef } from 'react';
import { useMount } from '@umijs/hooks';
import { getTree, formate } from './utils.js';

const useInitHome = () => {
  const [tree, setTree] = useState([]);
  const [tree2, setTree2] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const worker = useRef(new Worker('./worker.js'));
  const worker2 = useRef(new Worker('./worker.js'));
  useMount(() => {
    // getTree().then(async (res) => {
    //   const result = await format(res);
    //   setTree(result);
    //   setLoading(false);
    // });
    // getTree().then(async (res) => {
    //   const result = await format(res);
    //   setTree2(result);
    //   setLoading2(false);
    // });
    worker.current.postMessage({
      fun: 'getTree',
    });
    worker.current.addEventListener('message', (e) => {
      const { data: { data = [], fun = '' } = {} } = e;
      switch (fun) {
        case 'getTree': {
          worker.current.postMessage({
            fun: 'format',
            data,
          });
          break;
        }
        case 'format': {
          setTree(data);
          setLoading(false);
          worker.current.terminate();
          break;
        }
        default: {
          break;
        }
      }
    });

    worker2.current.postMessage({
      fun: 'getTree',
    });
    worker2.current.addEventListener('message', (e) => {
      const { data: { data = [], fun = '' } = {} } = e;
      switch (fun) {
        case 'getTree': {
          worker2.current.postMessage({
            fun: 'format',
            data,
          });
          break;
        }
        case 'format': {
          setTree2(data);
          setLoading2(false);
          worker2.current.terminate();
          break;
        }
        default: {
          break;
        }
      }
    });
  });

  return { tree, loading, loading2, tree2 };
};
export default useInitHome;
