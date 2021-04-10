import React from 'react';

import {
  create,
  render,
  fireEvent,
  renderToHtml,
  axe,
} from '@utils/test-utils';

import { Button } from '.';

describe('Button', () => {
  describe('styles', () => {
    it('should render with default style', () => {
      const actual = create(<Button>Button</Button>);

      expect(actual).toMatchSnapshot();
    });
  });

  describe('Behavior', () => {
    it('should accept a working ref for a Button', () => {
      const buttonRef = React.createRef<HTMLButtonElement>();
      const { container } = render(<Button ref={buttonRef}>Button</Button>);
      const button = container.querySelector('button');

      expect(buttonRef.current).toBe(button);
    });

    it('should call onClick handler when clicked', () => {
      const props = {
        onClick: jest.fn(),
        'data-testid': 'button',
      };
      const { getByTestId } = render(<Button {...props}>Button</Button>);

      fireEvent.click(getByTestId('button'));

      expect(props.onClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Acessibility', () => {
    it('should meet accessibility guidelines', async () => {
      const wrapper = renderToHtml(<Button>Button</Button>);
      const results = await axe(wrapper);

      expect(results).toHaveNoViolations();
    });
  });
});
