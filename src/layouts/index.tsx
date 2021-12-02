import React, { useState } from 'react';
import { history } from 'umi';
import { Avatar } from 'antd';
import type { ProSettings, MenuDataItem } from '@ant-design/pro-layout';
import ProLayout, { ProBreadcrumb, SettingDrawer } from '@ant-design/pro-layout';

import { UserOutlined } from '@ant-design/icons';

import style from './index.less';

interface IndexProps {}

const defaultMenus: MenuDataItem[] = [
  {
    path: '/home',
    name: '首页',
    icon: 'icon-shoucang1',
  },
  {
    path: '/demo',
    name: '测试',
  },
  {
    path: '/components',
    name: '自定义实现组件',
    icon: 'icon-facebook',
    children: [
      {
        path: '/components/progress',
        name: 'Progress·进度条',
        icon: 'icon-twitter',
      },
    ],
  },
];

const Index: React.FC<IndexProps> = ({ children, location }) => {
  const [pathname, setPathname] = useState('/home');
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({ fixSiderbar: true });

  return (
    <div id="pro-layout" className={style.wrapper}>
      <ProLayout
        {...settings}
        title="Antd Design"
        iconfontUrl="//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js"
        location={{
          pathname,
        }}
        route={{ routes: defaultMenus }}
        menu={{ defaultOpenAll: true, ignoreFlatMenu: true }}
        headerContentRender={() => <ProBreadcrumb />}
        menuItemRender={(item, dom) => {
          return (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a
              onClick={() => {
                history.push(item.path || '/home');
                setPathname(item.path || '/home');
              }}
            >
              {dom}
            </a>
          );
        }}
        rightContentRender={() => (
          <div>
            <Avatar shape="square" size="small" icon={<UserOutlined />} />
          </div>
        )}
      >
        <div>{children}</div>
      </ProLayout>
      <SettingDrawer
        pathname={pathname}
        getContainer={() => document.getElementById('pro-layout')}
        settings={settings}
        onSettingChange={(changeSetting) => {
          setSetting(changeSetting);
        }}
        disableUrlParams
      />
    </div>
  );
};
export default Index;
