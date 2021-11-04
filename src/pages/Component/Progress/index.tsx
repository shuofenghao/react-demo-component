import React, { useState } from 'react';
import { useMount } from '@umijs/hooks';

import style from './index.less';

interface IndexProps {}

const Index: React.FC<IndexProps> = () => {
  const [progress, setProgress] = useState(0);

  useMount(() => {
    const timeInterval = setInterval(() => {
      setProgress((origin) => {
        if (origin >= 100) {
          clearInterval(timeInterval);
          return 100;
        }
        return origin + 20;
      });
    }, 1000);
  });

  return (
    <div className={style.progress} style={{ '--progress': `${100 - progress}%` } as React.CSSProperties}>
      50%
    </div>
  );
};
export default Index;
