import React, { useCallback } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'umi';
import * as Icon from '@ant-design/icons';

import { MenuData } from '@/utils/route';
import style from './index.less';

const { MenuFoldOutlined, MenuUnfoldOutlined } = Icon;

interface SideProps {
  menuData: MenuData[];
}

const Side: React.FC<SideProps> = ({ menuData }) => {
  const [collapsed, setCollapsed] = React.useState(false);

  React.useEffect(() => {
    console.log(menuData);
  }, [menuData]);
  const toggle = React.useCallback(() => {
    setCollapsed((origin) => !origin);
  }, []);

  const createDom = useCallback((data: MenuData[]) => {
    function createChild(data: MenuData): React.ReactNode {
      // @ts-ignore
      const IconComponent = data.icon ? Icon[data.icon!] : null;

      if (data.children) {
        return (
          <Menu.SubMenu title={data.title} key={data.key} icon={IconComponent && <IconComponent />}>
            {data.children.map((dataItem) => createChild(dataItem))}
          </Menu.SubMenu>
        );
      }

      return (
        <Menu.Item key={data.key} icon={IconComponent && <IconComponent />}>
          <Link to={data.key}>{data.title}</Link>
        </Menu.Item>
      );
    }
    const parentPath = window.location.pathname.split('/').reduce((acc, cur) => {
      if (acc.length) {
        acc.push(`${acc[acc.length - 1] === '/' ? '/' : `${acc[acc.length - 1]}/`}${cur}`);
      } else {
        acc.push(cur === '/' ? cur : `/${cur}`);
      }
      return acc;
    }, [] as string[]);

    return (
      <Menu defaultSelectedKeys={[window.location.pathname]} defaultOpenKeys={parentPath} mode="inline" theme="dark">
        {data.map((dataItem) => createChild(dataItem))}
      </Menu>
    );
  }, []);

  return (
    <Layout.Sider
      className={style.sider}
      collapsible
      collapsed={collapsed}
      trigger={React.createElement(collapsed ? MenuFoldOutlined : MenuUnfoldOutlined, {
        className: style.toggle,
        onClick: toggle,
      })}
    >
      <div className="logo" />
      {createDom(menuData)}
    </Layout.Sider>
  );
};

export default Side;
