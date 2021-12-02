import React, { Suspense, lazy } from 'react';

import LazyComponent from './components/LazyComponent';
import style from './index.less';

interface IndexProps {}

const Index: React.FC<IndexProps> = () => {
  const config = {
    type: 'div',
    text: '123123123',
    body: [
      {
        type: 'div',
        text: '111324235934747xkchsdgfdghs',
      },
    ],
  };

  return (
    <div className={style.wrapper}>
      <LazyComponent config={config} />
    </div>
  );
};
export default Index;
