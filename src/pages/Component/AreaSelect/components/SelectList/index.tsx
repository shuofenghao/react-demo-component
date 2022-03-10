import React from 'react';

import { AreaData } from '../../index';
import List from './List';
import RightArea from './RightArea';
import style from './index.less';

interface IndexProps {}

interface IndexContextType {
  activeType: string;
  setActiveType: (data: string) => void;
}

export const IndexContext = React.createContext<IndexContextType>({
  activeType: 'A',
  setActiveType: () => {},
});

const mockData: AreaData[] = Array(10)
  .fill(65)
  .map((i, index) => {
    return {
      type: String.fromCharCode(i + index),
      children: Array(10)
        .fill(86)
        .map((item, childIndex) => {
          return {
            area: `+${item + childIndex}`,
            areaName: `mock地区${index + 1}-${childIndex + 1}`,
          };
        }),
    };
  });

const Index: React.FC<IndexProps> = () => {
  const [activeType, setActiveType] = React.useState('A');

  return (
    <div className={style.wrapper}>
      <IndexContext.Provider
        value={{
          activeType,
          setActiveType,
        }}
      >
        <List data={mockData} />
        <RightArea data={mockData.map((i) => i.type)} />
      </IndexContext.Provider>
    </div>
  );
};

export default Index;
