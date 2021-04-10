import '@testing-library/jest-dom/extend-expect';
import { ReactElement, FunctionComponent } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import {
  render as renderTest,
  waitFor,
  waitForElementToBeRemoved,
  act,
  fireEvent,
  RenderResult,
} from '@testing-library/react';
import { renderHook, act as actHook } from '@testing-library/react-hooks';
import userEvent from '@testing-library/user-event';
import { configureAxe } from 'jest-axe';
import { ThemeProvider } from '@emotion/react';

import { light } from '@styles/theme';

type RenderFn<T = any> = (component: ReactElement, ...rest: any) => T;

const WithProviders: FunctionComponent = ({ children }) => (
  <ThemeProvider theme={light}>{children}</ThemeProvider>
);

const render: RenderFn<RenderResult> = (component, options) =>
  renderTest(component, {
    wrapper: WithProviders,
    ...options,
  });

const renderToHtml: RenderFn<string> = (component) =>
  renderToStaticMarkup(<WithProviders>{component}</WithProviders>);

const create = (...args: Parameters<RenderFn<RenderResult>>) => {
  const { container } = render(...args);

  return container.children.length > 1
    ? container.children
    : container.firstChild;
};

const axe = configureAxe({
  rules: {
    /*
     * Disabled landmark rules when testing isolated components.
     * NOTE: https://dequeuniversity.com/rules/axe/3.5/region?application=axeAPI
     */
    region: {
      enabled: false,
    },
  },
});

export {
  axe,
  create,
  render,
  renderToHtml,
  renderHook,
  act,
  actHook,
  fireEvent,
  userEvent,
  waitFor,
  waitForElementToBeRemoved,
};
