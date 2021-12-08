import React from 'react';
import { connect } from 'umi';
import { Button } from 'antd';
import { useMount } from '@umijs/hooks';

import LazyComponent from './components/LazyComponent';
import style from './index.less';

interface IndexProps {}

const Index: React.FC<IndexProps> = (props) => {
  const { dispatch } = props;
  useMount(() => {
    dispatch({
      type: 'home/query',
      payload: { name: 1 },
    });
  });
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
      <Button
        onClick={() => {
          dispatch({
            type: 'home/query',
            payload: { name: 1 },
          });
        }}
      >
        11
      </Button>
      <div>123</div>
      <LazyComponent config={config} />
    </div>
  );
};
export default connect((state) => ({ ...state }))(Index);
