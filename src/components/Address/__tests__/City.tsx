import { fireEvent, render } from '@testing-library/react';
import faker from 'faker';
import React from 'react';

import { useDispatchContext } from '../../../hooks/useDispatchContext';
import { useStateContext } from '../../../hooks/useStateContext';
import { AddressState } from '../../../state/address';
import { City } from '../City';

jest.mock('../../../hooks/useDispatchContext');
jest.mock('../../../hooks/useStateContext');

describe('City', () => {

  it('should have an input that displays the correct data', () => {
    // mock useStateContext hook
    const city = faker.address.city();
    const address: Partial<AddressState> = { city };
    const enrollmentErrors = {};
    (useStateContext as jest.Mock).mockReturnValue({ address, enrollmentErrors });

    const { getByLabelText } = render(<City />);
    expect(getByLabelText(/city/iu)).toHaveValue(city);
  });

  it('should add the is-invalid class to the input when the city is invalid', () => {
    // mock useStateContext hook
    const address: Partial<AddressState> = { city: faker.address.city() };
    const enrollmentErrors = { city: true };
    (useStateContext as jest.Mock).mockReturnValue({ address, enrollmentErrors });

    const { getByLabelText } = render(<City />);
    expect(getByLabelText(/city/iu)).toHaveClass('is-invalid');
  });

  it('should not add the is-invalid class to the input when the city is not invalid', () => {
    // mock useStateContext hook
    const address: Partial<AddressState> = { city: faker.address.city() };
    const enrollmentErrors = { city: false };
    (useStateContext as jest.Mock).mockReturnValue({ address, enrollmentErrors });

    const { getByLabelText } = render(<City />);
    expect(getByLabelText(/city/iu)).not.toHaveClass('is-invalid');
  });

  it('should not add the is-invalid class to the input when the city validity is undefined', () => {
    // mock useStateContext hook
    const address: Partial<AddressState> = { city: faker.address.city() };
    const enrollmentErrors = {};
    (useStateContext as jest.Mock).mockReturnValue({ address, enrollmentErrors });

    const { getByLabelText } = render(<City />);
    expect(getByLabelText(/city/iu)).not.toHaveClass('is-invalid');
  });

  it('should call dipatch on input change event', () => {
    // mock useStateContext hook
    const address: Partial<AddressState> = { city: '' };
    const enrollmentErrors = {};
    (useStateContext as jest.Mock).mockReturnValue({ address, enrollmentErrors });

    // mock useDispatchContext hook
    const dispatch = jest.fn();
    (useDispatchContext as jest.Mock).mockReturnValue(dispatch);

    const newValue = faker.address.city();
    const { getByLabelText } = render(<City />);
    fireEvent.change(getByLabelText(/city/iu), { target: { value: newValue } });
    expect(dispatch).toHaveBeenCalledWith({ type: 'SET_CITY', payload: newValue });
  });
});
