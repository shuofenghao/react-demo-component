import React from 'react';
import { Button } from 'antd';

import style from './index.less';

interface IndexProps {}

let counter = 0;

const Index: React.FC<IndexProps> = () => {
  const [count, setCount] = React.useState(0);
  const [demo, setDemo] = React.useState(false);
  counter += 1;
  console.log(counter, 'counter', demo);

  return (
    <div className={style.wrapper}>
      <Button
        onClick={() => {
          setCount((origin) => origin + 1);
          setDemo((origin) => !origin);
        }}
      >
        11
      </Button>
      <div>{count}</div>
    </div>
  );
};
export default Index;
