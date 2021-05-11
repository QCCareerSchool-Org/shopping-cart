import { fireEvent, render } from '@testing-library/react';
import faker from 'faker';
import React from 'react';

import { useDispatchContext } from '../../../hooks/useDispatchContext';
import { useFetchImproved } from '../../../hooks/useFetchImproved';
import { useStateContext } from '../../../hooks/useStateContext';
import { AddressState } from '../../../state/address';
import { CountryCode } from '../CountryCode';

jest.mock('../../../hooks/useDispatchContext');
jest.mock('../../../hooks/useFetchImproved');
jest.mock('../../../hooks/useStateContext');

describe('CountryCode', () => {

  it('should have a select that displays the correct data', () => {
    // mock useStateContext hook
    const countryCode = faker.address.countryCode();
    const address: Partial<AddressState> = { countryCode };
    const enrollmentErrors = {};
    (useStateContext as jest.Mock).mockReturnValue({ address, enrollmentErrors });

    // mock useFetchImproved hook
    const countries = [
      { code: 'DE', name: 'Germany' },
      { code: countryCode, name: 'Random Country' },
    ];
    (useFetchImproved as jest.Mock).mockReturnValue([ countries, undefined, false ]);

    const { getByLabelText } = render(<CountryCode />);
    expect(getByLabelText(/country/iu)).toHaveValue(countryCode);
  });

  it('should have a select with the correct options when isLoading is true', () => {
    // mock useStateContext hook
    const countryCode = faker.address.countryCode();
    const address: Partial<AddressState> = { countryCode };
    const enrollmentErrors = {};
    (useStateContext as jest.Mock).mockReturnValue({ address, enrollmentErrors });

    // mock useFetchImproved hook
    (useFetchImproved as jest.Mock).mockReturnValue([ undefined, undefined, true ]);

    const { getByLabelText } = render(<CountryCode />);

    const select = getByLabelText(/country/iu);

    expect(select.childNodes).toHaveLength(1);
    expect(select.childNodes[0]).toHaveTextContent('---');
    expect(select.childNodes[0]).toHaveAttribute('value', '');
  });

  it('should have a select with the correct options when isLoading is false', () => {
    // mock useStateContext hook
    const countryCode = faker.address.countryCode();
    const address: Partial<AddressState> = { countryCode };
    const enrollmentErrors = {};
    (useStateContext as jest.Mock).mockReturnValue({ address, enrollmentErrors });

    // mock useFetchImproved hook
    const countries = [
      { code: 'DE', name: 'Germany' },
      { code: 'RU', name: 'Russia' },
      { code: 'FR', name: 'France' },
      { code: 'BE', name: 'Belgium' },
      { code: 'JA', name: 'Japan' },
    ];
    (useFetchImproved as jest.Mock).mockReturnValue([ countries, undefined, false ]);

    const { getByLabelText } = render(<CountryCode />);

    const select = getByLabelText(/country/iu);

    expect(select.childNodes).toHaveLength(6 + countries.length);
    expect(select.childNodes[0]).toHaveTextContent('Australia');
    expect(select.childNodes[0]).toHaveAttribute('value', '_AU');
    expect(select.childNodes[1]).toHaveTextContent('Canada');
    expect(select.childNodes[1]).toHaveAttribute('value', '_CA');
    expect(select.childNodes[2]).toHaveTextContent('New Zealand');
    expect(select.childNodes[2]).toHaveAttribute('value', '_NZ');
    expect(select.childNodes[3]).toHaveTextContent('United Kingdom');
    expect(select.childNodes[3]).toHaveAttribute('value', '_GB');
    expect(select.childNodes[4]).toHaveTextContent('United States');
    expect(select.childNodes[4]).toHaveAttribute('value', '_US');
    expect(select.childNodes[5]).toHaveTextContent('---');
    expect(select.childNodes[5]).toHaveAttribute('value', '');
    countries.forEach((country, i) => {
      expect(select.childNodes[6 + i]).toHaveTextContent(country.name);
      expect(select.childNodes[6 + i]).toHaveAttribute('value', country.code);
    });
  });

  it('should add the is-invalid class to the input when the address is invalid', () => {
    // mock useStateContext hook
    const address: Partial<AddressState> = { countryCode: faker.address.countryCode() };
    const enrollmentErrors = { countryCode: true };
    (useStateContext as jest.Mock).mockReturnValue({ address, enrollmentErrors });

    const { getByLabelText } = render(<CountryCode />);
    expect(getByLabelText(/country/iu)).toHaveClass('is-invalid');
  });

  it('should not add the is-invalid class to the input when the address is not invalid', () => {
    // mock useStateContext hook
    const address: Partial<AddressState> = { countryCode: faker.address.countryCode() };
    const enrollmentErrors = { countryCode: false };
    (useStateContext as jest.Mock).mockReturnValue({ address, enrollmentErrors });

    const { getByLabelText } = render(<CountryCode />);
    expect(getByLabelText(/country/iu)).not.toHaveClass('is-invalid');
  });

  it('should not add the is-invalid class to the input when the address validity is undefined', () => {
    // mock useStateContext hook
    const address: Partial<AddressState> = { countryCode: faker.address.countryCode() };
    const enrollmentErrors = {};
    (useStateContext as jest.Mock).mockReturnValue({ address, enrollmentErrors });

    const { getByLabelText } = render(<CountryCode />);
    expect(getByLabelText(/country/iu)).not.toHaveClass('is-invalid');
  });

  it('should call dipatch with the correct parameters on input change event to a default country', () => {
    // mock useStateContext hook
    const address: Partial<AddressState> = { countryCode: '' };
    const enrollmentErrors = {};
    (useStateContext as jest.Mock).mockReturnValue({ address, enrollmentErrors });

    // mock useDispatchContext hook
    const dispatch = jest.fn();
    (useDispatchContext as jest.Mock).mockReturnValue(dispatch);

    // mock useFetchImproved hook
    const countries = [
      { code: 'DE', name: 'Germany' },
      { code: 'FR', name: 'France' },
    ];
    (useFetchImproved as jest.Mock).mockReturnValue([ countries, undefined, false ]);

    const { getByLabelText } = render(<CountryCode />);
    fireEvent.change(getByLabelText(/country/iu), { target: { value: '_CA' } });
    expect(dispatch).toHaveBeenCalledWith({ type: 'SET_COUNTRY_CODE', payload: { countryCode: 'CA', manual: true } });
  });

  it('should call dipatch with the correct parameters on input change event to a non-default country', () => {
    // mock useStateContext hook
    const address: Partial<AddressState> = { countryCode: '' };
    const enrollmentErrors = {};
    (useStateContext as jest.Mock).mockReturnValue({ address, enrollmentErrors });

    // mock useDispatchContext hook
    const dispatch = jest.fn();
    (useDispatchContext as jest.Mock).mockReturnValue(dispatch);

    const newValue = faker.address.countryCode();

    // mock useFetchImproved hook
    const countries = [
      { code: 'DE', name: 'Germany' },
      { code: newValue, name: 'Random Country' }, // we need the option to exist before we can change the select's value
    ];
    (useFetchImproved as jest.Mock).mockReturnValue([ countries, undefined, false ]);

    const { getByLabelText } = render(<CountryCode />);
    fireEvent.change(getByLabelText(/country/iu), { target: { value: newValue } });
    expect(dispatch).toHaveBeenCalledWith({ type: 'SET_COUNTRY_CODE', payload: { countryCode: newValue, manual: true } });
  });
});
