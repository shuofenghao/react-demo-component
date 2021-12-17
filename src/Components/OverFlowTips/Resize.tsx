import React, { useState, useRef, useMemo } from 'react';
import { useMount, useUnmount } from '@umijs/hooks';
import { Tooltip } from 'antd';

import './index.less';

interface MockData {
  appId: string;
  name: string;
  user: string;
  users: string[];
}

interface IndexProps {
  data: MockData;
}

const Index: React.FC<IndexProps> = ({ data = {} }) => {
  const [overflow, setOverflow] = useState(false);
  const divRef = useRef<HTMLDivElement>();
  const wrapper = useRef<HTMLDivElement>();
  const { user = '-' } = data;
  const { current: resizeRef } = React.useRef(
    new ResizeObserver((entries) => {
      const { target } = entries[0] || {};
      if (target) {
        const innerDom = target.children[0];
        if (innerDom) {
          setOverflow(innerDom.clientWidth < innerDom.scrollWidth);
        }
      }
    }),
  );

  useMount(() => {
    resizeRef.observe(wrapper.current);
  });

  useUnmount(() => {
    resizeRef.disconnect();
  });

  const content = useMemo(() => <div ref={divRef}>{user}</div>, [user]);

  // if (overflow) {
  //   return (
  //     <Tooltip overlayClassName={`${prefix}-tooltip`} placement="left" mode="light" overlay={tooltipOverLay}>
  //       {content}
  //     </Tooltip>
  //   );
  // }

  return (
    <div ref={wrapper}>
      {overflow ? (
        <Tooltip placement="left" overlay={content}>
          {content}
        </Tooltip>
      ) : (
        content
      )}
    </div>
  );
};
export default React.memo(Index);
