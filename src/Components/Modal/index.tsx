import React from 'react';
import { createPortal } from 'react-dom';

import Modal from './Modal';

interface IndexProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

const Index: React.FC<IndexProps> = ({ visible, setVisible }) => {
  if (!visible) {
    return null;
  }
  return createPortal(<Modal visible={visible} setVisible={setVisible} />, document.body);
};
export default Index;
