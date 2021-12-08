import React from 'react';
import { Input } from 'antd';
import { useDebounceFn } from '@umijs/hooks';
import Request from 'umi-request';
import 'yet-another-abortcontroller-polyfill';

import style from './index.less';

const Index: React.FC = () => {
  const [searchValue, setSearchValue] = React.useState('');
  const [data, setData] = React.useState({});
  const oldController = React.useRef();

  const { run: handleSearch } = useDebounceFn((text) => {
    // 每次请求前都把之前的请求取消掉
    if (oldController.current) {
      oldController.current.abort();
    }
    const controller = new AbortController();
    const { signal } = controller;
    // 更新controlle
    oldController.current = controller;
    Request.get('/api/users', { params: { search: text }, signal }).then((res) => {
      if (res.status === 1) {
        setData(res.data);
      }
    });
  }, 500);

  return (
    <div className={style.wrapper}>
      <section className={style.inner}>
        <div className={style.innerTitle}>
          Abort: 查询张三这个用户时，先输入张再输入三，接口请求时会将查询张的这个接口取消掉。
        </div>
        <Input
          placeholder="请输入要搜索的名字"
          value={searchValue}
          onChange={(e) => {
            const searchText = e.target.value || '';
            setSearchValue(searchText);
            handleSearch(searchText.trim());
          }}
        />
        <div className={style.content}>下面会显示data的数据</div>
        <div>data.user: {data.user || '--'}</div>
      </section>
    </div>
  );
};
export default Index;
