import React from 'react';

interface DivProps {}

const Div: React.FC<DivProps> = ({ children, text }) => {
  return (
    <div>
      {text}
      {children && children}
    </div>
  );
};
export default Div;
