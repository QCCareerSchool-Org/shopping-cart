import { faCcMastercard } from '@fortawesome/free-brands-svg-icons/faCcMastercard';
import { faCcVisa } from '@fortawesome/free-brands-svg-icons/faCcVisa';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons/faCalendarAlt';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons/faCreditCard';
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons/faShieldAlt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import { useStateContext } from '../../hooks/useStateContext';
import { createInstance, PaysafeInstance, tokenize, TokenizeOptions } from '../../lib/paysafe';

export type PaysafeCompany = 'CA' | 'US' | 'GB';

type Props = {
  company: PaysafeCompany;
  isOpen: boolean;
  toggle: () => void;
  charge: (token: string, compay: PaysafeCompany) => Promise<boolean>;
};

type Status = {
  instance?: PaysafeInstance;
  panValid: boolean;
  expValid: boolean;
  cvvValid: boolean;
  panFilled: boolean;
  expFilled: boolean;
  cvvFilled: boolean;
  submitted?: boolean;
  errors?: { displayMessage?: string };
};

const apiKeys = {
  CA: 'T1QtMjM2NjU0OkItcDEtMC01OWY5ZTIzNS0wLTMwMmMwMjE0MzAzYTA1ZDYzNTYwMGMyMzBhNzdhMzk4MDU4NDkzY2I2NTFhOGI2NTAyMTQxOTBjMzM3NzhlZGFkMGVmNzQ4NDkzYjE5NDEyMzk2NGNkYjU3NGFh',
  US: 'T1QtMjM2NjU0OkItcDEtMC01OWY5ZTIzNS0wLTMwMmMwMjE0MzAzYTA1ZDYzNTYwMGMyMzBhNzdhMzk4MDU4NDkzY2I2NTFhOGI2NTAyMTQxOTBjMzM3NzhlZGFkMGVmNzQ4NDkzYjE5NDEyMzk2NGNkYjU3NGFh',
  GB: 'T1QtMzEyOTc0OkItcDEtMC01ZDFlMDAwYS0wLTMwMmMwMjE0NTY4ZmM1MjE4M2MyYTI3YWQ1MWMxNzA2NGVjM2Y1NjEwZDIwNjc0OTAyMTQ2ZTQ5OTBkOGM0MTY3NDlkZWZlYThiZGU2NDY3MDA2NGJlNDA1Njc3',
};

const accounts = {
  CA: {
    CAD: 1002521124, // eslint-disable-line @typescript-eslint/no-magic-numbers
    NZD: 1002567684, // eslint-disable-line @typescript-eslint/no-magic-numbers
    AUD: 1002567744, // eslint-disable-line @typescript-eslint/no-magic-numbers
    GBP: 1002567754, // eslint-disable-line @typescript-eslint/no-magic-numbers
  },
  US: {
    USD: 1002704564, // eslint-disable-line @typescript-eslint/no-magic-numbers
  },
  GB: {
    GBP: 1002659124, // eslint-disable-line @typescript-eslint/no-magic-numbers
    AUD: 1002649432, // eslint-disable-line @typescript-eslint/no-magic-numbers
    NZD: 1002818994, // eslint-disable-line @typescript-eslint/no-magic-numbers
  },
};

/**
 * When isOpen is set to true for the first time, we need to initialize a paysafe instance, but we can't do it until after all the DOM elements are rendered.
 * The initialized state will only be set to true after the first render where isOpen is true. After that we can create the instance.
 */
export const PaymentModal: React.FC<Props> = ({ company, isOpen, toggle, charge }) => {
  const { address, price } = useStateContext();
  const [ status, setStatus ] = useState<Status>({
    panValid: false,
    expValid: false,
    cvvValid: false,
    panFilled: false,
    expFilled: false,
    cvvFilled: false,
    submitted: false,
  });
  const [ initialized, setInitialized ] = useState(false);
  const [ submitting, setSubmitting ] = useState(false);

  useEffect(() => {
    if (isOpen) {
      if (!initialized) {
        setInitialized(true);
      } else if (!status.instance) {
        const options = {
          environment: 'LIVE',
          fields: {
            cardNumber: { selector: `#cardNumber${company}`, placeholder: 'Card Number' },
            expiryDate: { selector: `#expiryDate${company}`, placeholder: 'Exp. Date' },
            cvv: { selector: `#cvv${company}`, placeholder: 'CSC' },
          },
          style: {
            input: {
              'font-family': 'Helvetica,Arial,sans-serif',
              'font-weight': 'normal',
              'font-size': '14px',
              'color': 'black',
            },
          },
        };
        createInstance(apiKeys[company], options).then(instance => {
          instance.fields('cardNumber').valid(() => setStatus(s => ({ ...s, panValid: true })));
          instance.fields('expiryDate').valid(() => setStatus(s => ({ ...s, expValid: true })));
          instance.fields('cvv').valid(() => setStatus(s => ({ ...s, cvvValid: true })));
          instance.fields('cardNumber').invalid(() => setStatus(s => ({ ...s, panValid: false })));
          instance.fields('expiryDate').invalid(() => setStatus(s => ({ ...s, expValid: false })));
          instance.fields('cvv').invalid(() => setStatus(s => ({ ...s, cvvValid: false })));
          instance.fields('cardNumber expiryDate cvv').on('FieldValueChange', () => setStatus(s => ({ ...s, submitted: false, errors: undefined })));
          instance.fields('cardNumber').on('Blur', () => setStatus(s => ({ ...s, panFilled: true })));
          instance.fields('expiryDate').on('Blur', () => setStatus(s => ({ ...s, expFilled: true })));
          instance.fields('cvv').on('Blur', () => setStatus(s => ({ ...s, cvvFilled: true })));
          setStatus(s => ({ ...s, instance }));
        });
      }
    }
  }, [ company, isOpen, initialized, status.instance ]);

  if (!price) {
    return null;
  }

  const submit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    if (submitting) {
      return;
    }
    setSubmitting(true);
    try {
      if (!status.instance) {
        throw Error('instance not defined');
      }
      let options: TokenizeOptions | undefined;
      if (company === 'GB' && price.currency.code === 'GBP') {
        const accountId = (accounts[company] as { [key: string]: number })[price.currency.code];
        if (typeof accountId === 'undefined') {
          throw Error(`Currency ${price.currency.code} not supported by ${company} company`);
        }
        options = {
          threeDS: {
            amount: 0,
            currency: price.currency.code,
            accountId,
            useThreeDSecureVersion2: true,
          },
          vault: {
            holderName: `${address.firstName} ${address.lastName}`,
            shippingAddress: {
              recipientName: `${address.firstName} ${address.lastName}`,
              street: address.address1,
              street2: address.address2 || undefined,
              city: address.city,
              country: address.countryCode,
              zip: address.postalCode || '0',
              state: address.provinceCode ?? undefined,
              shipMethod: 'S',
            },
          },
        };
      }
      setStatus(s => ({ ...s, submitted: true }));
      const token = await tokenize(status.instance, options);
      const chargeResult = await charge(token, company);
      if (chargeResult === false) {
        toggle();
      }
    } catch (err) {
      setStatus(s => ({ ...s, errors: err }));
    } finally {
      setSubmitting(false);
    }
  };

  const buttonDisabled = submitting || !status.panValid || !status.expValid || !status.cvvValid;

  return (
    <Modal size="sm" isOpen={isOpen} toggle={toggle} unmountOnClose={false}>
      <ModalHeader toggle={toggle}>Payment Details</ModalHeader>
      <ModalBody>
        <form id="payment-form" method="POST" onSubmit={submit}>
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <label htmlFor={'cardNumber' + company}>Card Number</label>
                <div className="input-group">
                  <div className={'form-control' + ((status.submitted || status.panFilled) && !status.panValid ? ' is-invalid' : '')} style={{ height: '36px', paddingTop: 0, paddingBottom: 0, paddingRight: 0 }} id={'cardNumber' + company}></div>
                  <div className="input-group-append">
                    <span className="input-group-text"><FontAwesomeIcon icon={faCreditCard} /></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-7">
              <div className="form-group">
                <label htmlFor="expiryDate"><span className="d-none d-small-inline">Expiration</span><span className="d-inline d-small-none">Exp</span> Date</label>
                <div className="input-group">
                  <div className={'form-control' + ((status.submitted || status.expFilled) && !status.expValid ? ' is-invalid' : '')} style={{ height: '36px', paddingTop: 0, paddingBottom: 0, paddingRight: 0 }} id={'expiryDate' + company}></div>
                  <div className="input-group-append">
                    <span className="input-group-text"><FontAwesomeIcon icon={faCalendarAlt} /></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-5">
              <div className="form-group">
                <label htmlFor="cvv">CSC</label>
                <div className="input-group">
                  <div className={'form-control' + ((status.submitted || status.cvvFilled) && !status.cvvValid ? ' is-invalid' : '')} style={{ height: '36px', paddingTop: 0, paddingBottom: 0, paddingRight: 0 }} id={'cvv' + company}></div>
                  <div className="input-group-append">
                    <span className="input-group-text"><FontAwesomeIcon icon={faShieldAlt} /></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <button className={`btn ${buttonDisabled ? 'btn-secondary' : 'btn-success'} btn-lg btn-block`} disabled={buttonDisabled}>Enroll Now</button>
              <div className="d-flex align-items-center mt-3">
                <FontAwesomeIcon size="2x" icon={faCcVisa} className="mr-2 text-dark" />
                <FontAwesomeIcon size="2x" icon={faCcMastercard} className="mr-2 text-dark" />
              </div>
            </div>
          </div>
        </form>

        {status.errors && (
          <div className="alert alert-danger mt-3 mb-0">
            {status.errors.displayMessage ?? 'Unknown Error'}
          </div>
        )}

      </ModalBody>
    </Modal>
  );
};
