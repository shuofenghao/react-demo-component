import { useMount } from '@umijs/hooks';
import React from 'react';

interface LazyComponentProps {}

const LazyComponent: React.FC<LazyComponentProps> = ({ config }) => {
  const { type, ...otherProps } = config;
  const typeMap = new Map([['div', 'Div']]);
  const [Component, setComponent] = React.useState();

  useMount(() => {
    if (typeMap.has(config.type)) {
      import(`./${typeMap.get(config.type)}`).then((res) => {
        const Com = res.default;
        setComponent(<Com {...otherProps} />);
      });
    }
  });
  if (Component) {
    return Component;
  }
  return null;
};
export default LazyComponent;
