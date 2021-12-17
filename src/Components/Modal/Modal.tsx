import React from 'react';
import { Button } from 'antd';

import style from './Modal.less';

interface ModalProps {
  setVisible: (visible: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ setVisible }) => {
  return (
    <div className={style.modalWrapper}>
      <div className={style.mask} />
      <div className={style.inner}>
        <div className={style.title}>Title</div>
        <div className={style.body}>Body</div>
        <div className={style.footer}>
          <Button onClick={() => setVisible(false)}>setVisible</Button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
