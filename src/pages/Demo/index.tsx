import React from 'react';

import OverFlowTips from '@/pages/Component/OverFlowTips';
import style from './index.less';

interface IndexProps {
  text: string;
}

const Index: React.FC<IndexProps> = () => {
  const str =
    '测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本';

  const keyword = '文本';
  const replaceStr = str.replaceAll(keyword, `<span class="${style.keyword}">${keyword}</span>`);
  const replaceDom = <span dangerouslySetInnerHTML={{ __html: replaceStr }} />;
  return (
    <div className={style.content}>
      <OverFlowTips tips={{ overlay: str }}>{replaceDom}</OverFlowTips>
    </div>
  );
};
export default Index;
