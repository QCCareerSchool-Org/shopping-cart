import { render } from '@testing-library/react';
import faker from 'faker';
import React from 'react';

import { getSite } from '../lib/getSite';
import { useHostname } from './useHostname';
import { useSite } from './useSite';

jest.mock('./useHostname');
jest.mock('../lib/getSite');

describe('useSite', () => {

  it('should call useHostName', () => {
    (useHostname as jest.Mock).mockReturnValue('');
    render(<TestComponent />);
    expect(useHostname).toHaveBeenCalled();
  });

  it('should call getSite with the result of useHostName', () => {
    const domain = faker.internet.domainName();
    (useHostname as jest.Mock).mockReturnValue(domain);
    render(<TestComponent />);
    expect(getSite).toHaveBeenCalledWith(domain);
  });

  it('should return the result of getSite', () => {
    const site = faker.random.alphaNumeric(32);
    (getSite as jest.Mock).mockReturnValue(site);
    const { getByText } = render(<TestComponent />);
    expect(getByText(site)).toBeDefined();
  });
});

export const TestComponent: React.FC = () => {
  const site = useSite();
  return <div>{site}</div>;
};
