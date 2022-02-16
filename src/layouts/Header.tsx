import React from 'react';
import { Avatar, Layout } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import style from './index.less';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <Layout.Header className={style.header} style={{ padding: 0 }}>
      <div className={style.logo}>
        <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="logo" />
        <div className={style['logo-text']}>Ant Design Pro</div>
      </div>
      <div>
        <Avatar icon={<UserOutlined />} />
      </div>
    </Layout.Header>
  );
};

export default Header;
