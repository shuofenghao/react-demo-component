import React from 'react';
import { Button } from 'antd';

import Modal from '@/Components/Modal';

interface IndexProps {}

const Index: React.FC<IndexProps> = () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <div>
      <Button onClick={() => setVisible((origin) => !origin)}>弹窗</Button>
      <Modal visible={visible} setVisible={setVisible} />
    </div>
  );
};
export default Index;
