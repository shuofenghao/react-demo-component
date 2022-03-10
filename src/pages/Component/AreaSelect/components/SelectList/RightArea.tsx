import React from 'react';
import classNames from 'classnames';

import style from './index.less';
import { IndexContext } from './index';

interface RightAreaProps {
  data: string[];
}

const RightArea: React.FC<RightAreaProps> = ({ data }) => {
  const { activeType } = React.useContext(IndexContext);

  const handleScrollIntoView = React.useCallback((type) => {
    const dom = document.querySelector(`.${style.list_type}[data-type='${type}']`);
    if (dom) {
      dom.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className={style.right_area}>
      {data.map((i) => (
        <div
          key={i}
          onClick={() => handleScrollIntoView(i)}
          data-type={i}
          className={classNames(style.right_area_item, {
            [style.right_area_item_active]: activeType === i,
          })}
        >
          {i}
        </div>
      ))}
    </div>
  );
};

export default RightArea;
