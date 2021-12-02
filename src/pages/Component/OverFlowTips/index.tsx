import React, { useState, useRef, useCallback } from 'react';
import { useMount, useUnmount } from '@umijs/hooks';
import { Tooltip } from 'antd';
import { TooltipPropsWithOverlay } from 'antd/lib/tooltip/index';

import style from './index.less';

interface IndexProps {
  line?: number;
  tips?: TooltipPropsWithOverlay;
}

const Index: React.FC<IndexProps> = ({ line = 1, children, tips = {} as TooltipPropsWithOverlay }) => {
  const [overflow, setOverflow] = useState(false);
  const divRef = useRef<HTMLDivElement>();

  const judgeOverflow = useCallback(() => {
    if (divRef.current) {
      if (divRef.current?.clientHeight < divRef.current?.scrollHeight) {
        divRef.current.style.setProperty('-webkit-line-clamp', line.toString());
        setOverflow(true);
      } else {
        setOverflow(false);
      }
    }
  }, [divRef, line]);

  useMount(() => {
    judgeOverflow();
    window.addEventListener('resize', judgeOverflow);
  });

  useUnmount(() => {
    window.removeEventListener('resize', judgeOverflow);
  });

  if (overflow) {
    return (
      <Tooltip {...tips}>
        <div className={style.content} style={{ WebkitLineClamp: line }}>
          {children}
        </div>
      </Tooltip>
    );
  }

  return (
    <div ref={divRef} className={style.content}>
      {children}
    </div>
  );
};
export default Index;
