import React from 'react';
import { throttle } from 'lodash';

import classNames from 'classnames';
import { IndexContext } from './index';
import { AreaData, AreaDataItem, IndexContext as AddContext } from '../../index';

import style from './index.less';

interface ListProps {
  data: AreaData[];
}

interface ItemProps {
  data: AreaDataItem[];
}

const Item: React.FC<ItemProps> = ({ data }) => {
  const { selectValue, setSelectValue, setVisible } = React.useContext(AddContext);
  return (
    <>
      {data.map((i) => (
        <div
          className={classNames(style.list_item, {
            [style.list_item_active]: selectValue?.areaName === i.areaName,
          })}
          key={i.area}
          onClick={() => {
            setSelectValue(i);
            setVisible(false);
          }}
        >
          <div className={style.list_item_area}>{i.area}</div>
          <div className={style.list_item_area_name}>{i.areaName}</div>
        </div>
      ))}
    </>
  );
};

const List: React.FC<ListProps> & { Item: typeof Item } = ({ data }) => {
  const listRef = React.useRef<HTMLDivElement>();
  const { setActiveType } = React.useContext(IndexContext);
  React.useEffect(() => {
    const handleScroll = throttle((e) => {
      const wrapper = e.target;
      const typeList = wrapper.getElementsByClassName(style.list_wrapper_item);

      const scrollTop = wrapper.scrollTop;
      for (let i = 0; i < typeList.length; i++) {
        const list = typeList[i];
        const listOffsetTop = list.offsetTop;
        const listClientHeight = list.clientHeight;
        if (listOffsetTop + listClientHeight > scrollTop) {
          const listType = list.getElementsByClassName(style.list_type)[0];
          if (listType) {
            const activeDataType = listType.getAttribute('data-type');
            setActiveType(activeDataType);
          }
          break;
        }
      }
    }, 150);
    const dom = listRef.current;
    if (dom) {
      dom.addEventListener('scroll', handleScroll);
    }
    return () => {
      const dom = listRef.current;
      if (dom) {
        dom.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    // @ts-ignore
    <div ref={listRef} className={style.list_wrapper}>
      {data.map((i) => {
        return (
          <div key={i.type} className={style.list_wrapper_item}>
            <div className={style.list_type} data-type={i.type}>
              {i.type}
            </div>
            <div>
              <List.Item data={i.children} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

List.Item = Item;

export default List;
