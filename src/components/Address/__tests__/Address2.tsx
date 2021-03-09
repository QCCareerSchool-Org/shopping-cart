import { render, fireEvent } from '@testing-library/react';
import faker from 'faker';
import React from 'react';

import { useDispatchContext } from '../../../hooks/useDispatchContext';
import { useStateContext } from '../../../hooks/useStateContext';
import { AddressState } from '../../../state/address';
import { Address2 } from '../Address2';

jest.mock('../../../hooks/useDispatchContext');
jest.mock('../../../hooks/useStateContext');

describe('Address2', () => {

  it('should have an input that displays the correct data', () => {
    // mock useStateContext hook
    const address2 = faker.address.secondaryAddress();
    const address: Partial<AddressState> = { address2 };
    const enrollmentErrors = {};
    (useStateContext as jest.Mock).mockReturnValue({ address, enrollmentErrors });

    const { getByLabelText } = render(<Address2 />);
    expect(getByLabelText(/address line 2/i)).toHaveValue(address2);
  });

  it('should add the is-invalid class to the input when the address is invalid', () => {
    // mock useStateContext hook
    const address: Partial<AddressState> = { address2: faker.address.secondaryAddress() };
    const enrollmentErrors = { address2: true };
    (useStateContext as jest.Mock).mockReturnValue({ address, enrollmentErrors });

    const { getByLabelText } = render(<Address2 />);
    expect(getByLabelText(/address line 2/i)).toHaveClass('is-invalid');
  });

  it('should not add the is-invalid class to the input when the address is not invalid', () => {
    // mock useStateContext hook
    const address: Partial<AddressState> = { address2: faker.address.secondaryAddress() };
    const enrollmentErrors = { address2: false };
    (useStateContext as jest.Mock).mockReturnValue({ address, enrollmentErrors });

    const { getByLabelText } = render(<Address2 />);
    expect(getByLabelText(/address line 2/i)).not.toHaveClass('is-invalid');
  });

  it('should not add the is-invalid class to the input when the address validity is undefined', () => {
    // mock useStateContext hook
    const address: Partial<AddressState> = { address2: faker.address.secondaryAddress() };
    const enrollmentErrors = {};
    (useStateContext as jest.Mock).mockReturnValue({ address, enrollmentErrors });

    const { getByLabelText } = render(<Address2 />);
    expect(getByLabelText(/address line 2/i)).not.toHaveClass('is-invalid');
  });

  it('should call dipatch on input change event', () => {
    // mock useStateContext hook
    const address: Partial<AddressState> = { address2: '' };
    const enrollmentErrors = {};
    (useStateContext as jest.Mock).mockReturnValue({ address, enrollmentErrors });

    // mock useDispatchContext hook
    const dispatch = jest.fn();
    (useDispatchContext as jest.Mock).mockReturnValue(dispatch);

    const newValue = faker.address.secondaryAddress();
    const { getByLabelText } = render(<Address2 />);
    fireEvent.change(getByLabelText(/address line 2/i), { target: { value: newValue } });
    expect(dispatch).toHaveBeenCalledWith({ type: 'SET_ADDRESS2', payload: newValue });
  });
});
