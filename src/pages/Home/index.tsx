import React from 'react';

import Progress from './components/Progress';
import style from './index.less';

interface IndexProps {}

const Index: React.FC<IndexProps> = () => {
  return (
    <div className={style.wrapper}>
      <Progress />
    </div>
  );
};
export default Index;
