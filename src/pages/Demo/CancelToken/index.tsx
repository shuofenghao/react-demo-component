/*
 * @Author: ZhangHao
 * @Date: 2021-12-17 16:59:20
 * @LastEditTime: 2021-12-17 17:04:59
 * @LastEditors: Zhanghao
 */
import React, { useRef } from 'react';
import { Input } from 'antd';
import { useDebounceFn } from '@umijs/hooks';
import Request from 'umi-request';

import style from './index.less';

const Index: React.FC = () => {
  const [searchValue, setSearchValue] = React.useState('');
  const [data, setData] = React.useState({});
  const tokenSource = useRef();

  const { run: handleSearch } = useDebounceFn((text) => {
    if (tokenSource.current) {
      const { cancel } = tokenSource.current;
      cancel();
    }
    // 每次请求前都把之前的请求取消掉
    const CancelToken = Request.CancelToken;
    const newSource = CancelToken.source();
    tokenSource.current = newSource;
    const { token } = newSource;
    Request.get('/api/users', { params: { search: text }, cancelToken: token })
      .then((res) => {
        if (res.status === 1) {
          setData(res.data);
        }
      })
      .catch();
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
