import { render, fireEvent } from '@testing-library/react';
import faker from 'faker';
import React from 'react';

import { useDispatchContext } from '../../../hooks/useDispatchContext';
import { useStateContext } from '../../../hooks/useStateContext';
import { AddressState } from '../../../state/address';
import { Address1 } from '../Address1';

jest.mock('../../../hooks/useDispatchContext');
jest.mock('../../../hooks/useStateContext');

describe('Address1', () => {

  it('should have an input that displays the correct data', () => {
    // mock useStateContext hook
    const address1 = faker.address.streetAddress();
    const address: Partial<AddressState> = { address1 };
    const enrollmentErrors = {};
    (useStateContext as jest.Mock).mockReturnValue({ address, enrollmentErrors });

    const { getByLabelText } = render(<Address1 />);
    expect(getByLabelText(/address line 1/i)).toHaveValue(address1);
  });

  it('should add the is-invalid class to the input when the address is invalid', () => {
    // mock useStateContext hook
    const address: Partial<AddressState> = { address1: faker.address.streetAddress() };
    const enrollmentErrors = { address1: true };
    (useStateContext as jest.Mock).mockReturnValue({ address, enrollmentErrors });

    const { getByLabelText } = render(<Address1 />);
    expect(getByLabelText(/address line 1/i)).toHaveClass('is-invalid');
  });

  it('should not add the is-invalid class to the input when the address is not invalid', () => {
    // mock useStateContext hook
    const address: Partial<AddressState> = { address1: faker.address.streetAddress() };
    const enrollmentErrors = { address1: false };
    (useStateContext as jest.Mock).mockReturnValue({ address, enrollmentErrors });

    const { getByLabelText } = render(<Address1 />);
    expect(getByLabelText(/address line 1/i)).not.toHaveClass('is-invalid');
  });

  it('should not add the is-invalid class to the input when the address validity is undefined', () => {
    // mock useStateContext hook
    const address: Partial<AddressState> = { address1: faker.address.streetAddress() };
    const enrollmentErrors = {};
    (useStateContext as jest.Mock).mockReturnValue({ address, enrollmentErrors });

    const { getByLabelText } = render(<Address1 />);
    expect(getByLabelText(/address line 1/i)).not.toHaveClass('is-invalid');
  });

  it('should call dipatch on input change event', () => {
    // mock useStateContext hook
    const address: Partial<AddressState> = { address1: '' };
    const enrollmentErrors = {};
    (useStateContext as jest.Mock).mockReturnValue({ address, enrollmentErrors });

    // mock useDispatchContext hook
    const dispatch = jest.fn();
    (useDispatchContext as jest.Mock).mockReturnValue(dispatch);

    const newValue = faker.address.streetAddress();
    const { getByLabelText } = render(<Address1 />);
    fireEvent.change(getByLabelText(/address line 1/i), { target: { value: newValue } });
    expect(dispatch).toHaveBeenCalledWith({ type: 'SET_ADDRESS1', payload: newValue });
  });
});
