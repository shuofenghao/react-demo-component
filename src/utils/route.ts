import { IRoute } from 'umi';
import React from 'react';

export interface MenuData {
  type: 'item' | 'subMenu';
  key: string;
  title: string;
  icon: React.ReactNode;
  children?: MenuData[];
}

export const createMenu = <T extends IRoute>(route: T[]): MenuData[] => {
  function each<T extends IRoute>(data: T[]): MenuData[] {
    const temp: MenuData[] = [];
    if (Array.isArray(data)) {
      data.forEach((dataItem) => {
        if (!dataItem.redirect) {
          const tempData: MenuData = {
            type: Array.isArray(dataItem.routes!) ? 'subMenu' : 'item',
            key: dataItem.path!,
            title: dataItem.menuTitle,
            icon: dataItem.icon,
          };
          if (dataItem.routes) {
            tempData.children = each(dataItem.routes);
          }
          temp.push(tempData);
        }
      });
    }
    return temp;
  }
  return each(route);
};
