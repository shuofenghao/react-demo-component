import React from 'react';

import OverFlowTipsComponent from '@/Components/OverFlowTips';
import style from './index.less';

interface IndexProps {}

const Index: React.FC<IndexProps> = () => {
  const str = '测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本';
  const keyword = '文本';
  const replaceStr = str.replaceAll(keyword, `<span class="${style.keyword}">${keyword}</span>`);
  const replaceDom = <span dangerouslySetInnerHTML={{ __html: replaceStr }} />;
  return <OverFlowTipsComponent tips={{ overlay: str }}> {replaceDom}</OverFlowTipsComponent>;
};
export default Index;
