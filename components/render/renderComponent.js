import { createElement } from 'react';
import { Div } from './Div';
import { Li } from './Li';
import { P } from './P';
import { Button } from './Button';
import { VerticalDots } from './VerticalDots';

const keysToComponentMap = {
  div: Div,
  li: Li,
  p: P,
  button: Button,
  verticalDots: VerticalDots,
};

const stylesMap = (styles) => {
  let mappedStyles = {};
  styles.forEach((style) => {
    mappedStyles[style.name] = style.value;
  });
  return mappedStyles;
};

export const renderComponent = (config) => {
  if (typeof keysToComponentMap[config.component] !== 'undefined') {
    return createElement(
      keysToComponentMap[config.component],
      {
        id: config.id,
        key: config.id,
        className: config.className ? config.className : null,
        ariaHidden: config.ariaHidden ? config.ariaHidden : null,
        style: config.styles ? stylesMap(config.styles) : null,
      },
      config.children &&
        (typeof config.children === 'string'
          ? config.children
          : config.children.map((c) => renderComponent(c)))
    );
  }
};
