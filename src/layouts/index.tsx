import React from 'react';
import { Layout } from 'antd';

import Side from './Side';
import Header from './Header';
import Breadcrumb from './Breadcrumb';
import style from './index.less';
import { createMenu } from '@/utils/route';
import router from '../../config/router';

interface IndexProps {}

const menuData = createMenu(router[0]!.routes![0]!.routes!);

const Index: React.FC<IndexProps> = ({ children }) => {
  return (
    <Layout className={style.wrapper}>
      <Header />
      <Side menuData={menuData} />
      <Layout className={style['child-wrapper']}>
        <Breadcrumb menuData={menuData} />
        <Layout.Content className={style.content}>{children}</Layout.Content>
      </Layout>
    </Layout>
  );
};
export default Index;
