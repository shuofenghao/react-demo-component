import React from 'react';
import { Button, Modal } from 'antd';

import SelectList from './components/SelectList';

interface IndexProps {}

interface IndexContextType {
  selectValue: AreaDataItem | null;
  visible: boolean;
  setSelectValue: (data: AreaDataItem | null) => void;
  setVisible: (data: boolean) => void;
}

export const IndexContext = React.createContext<IndexContextType>({
  selectValue: null,
  visible: false,
  setSelectValue: () => {},
  setVisible: () => {},
});

export interface AreaDataItem {
  area: string;
  areaName: string;
}
export interface AreaData {
  type: string;
  children: AreaDataItem[];
}

const Index: React.FC<IndexProps> = () => {
  const [visible, setVisible] = React.useState(false);
  const [selectValue, setSelectValue] = React.useState<AreaDataItem | null>(null);
  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        测试
      </Button>
      <Modal visible={visible}>
        <IndexContext.Provider value={{ selectValue, setSelectValue, visible, setVisible }}>
          <SelectList />
        </IndexContext.Provider>
      </Modal>
    </div>
  );
};

export default Index;
