import React, { useCallback } from 'react';
import { Breadcrumb as AntdBreadcrumb } from 'antd';
import { history } from 'umi';
import * as Icon from '@ant-design/icons';

import { useMount } from '@umijs/hooks';
import { MenuData } from '@/utils/route';

interface BreadcrumbProps {
  menuData: MenuData[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ menuData = [] }) => {
  const [breadDom, setBreadDom] = React.useState<React.ReactNode>(null);
  const createBreadcrumb = useCallback((data: MenuData) => {
    const { pathname = '' } = window.location;
    // @ts-ignore
    const iconComponent = data.icon ? React.createElement(Icon[data.icon]) : null;

    const temp = [
      <AntdBreadcrumb.Item key={data.key} href={data.children ? undefined : data.key}>
        {iconComponent}
        <span style={{ paddingLeft: 2 }}>{data.title}</span>
      </AntdBreadcrumb.Item>,
    ];
    if (data.children) {
      data.children.forEach((i) => {
        if (pathname.includes(i.key)) {
          temp.push(...createBreadcrumb(i));
        }
      });
    }
    return temp;
  }, []);

  const createBread = React.useCallback((): React.ReactNode => {
    const { pathname = '' } = window.location;
    if (pathname === '/') {
      return null;
    }
    const breadcrumbData = menuData.filter((i) => i.key !== '/');
    const currentPath = breadcrumbData.find((i) => pathname.includes(i.key));
    if (currentPath) {
      return (
        <div style={{ marginBottom: 15 }}>
          <AntdBreadcrumb>{createBreadcrumb(currentPath)}</AntdBreadcrumb>
        </div>
      );
    }
  }, []);

  console.log(breadDom, 'asdasd');

  useMount(() => {
    setBreadDom(createBread());
    history.listen(() => {
      setBreadDom(createBread());
    });
  });
  return breadDom;
};

export default Breadcrumb;
