import { render } from '@testing-library/react';

import NameBadge from './name-badge';

describe('NameBadge', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NameBadge />);
    expect(baseElement).toBeTruthy();
  });
});
