import { faLock } from '@fortawesome/free-solid-svg-icons/faLock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import React from 'react';

import { usePopup } from '../../hooks/usePopup';
import { useStateContext } from '../../hooks/useStateContext';
import { PriceResult } from '../../state/price';
import { Notes } from './Notes';
import { PaymentModal, PaysafeCompany } from './PaymentModal';
import { DetailedBreakdown } from './DetailedBreakdown';

type Props = {
  addToDatabase: () => Promise<boolean>;
  charge: (token: string, company: PaysafeCompany) => Promise<boolean>;
  guarantee: () => JSX.Element;
  scrollToPosition: (section: 'courses' | 'shipping' | 'plan') => void;
  agreementLink: string;
  agreementLinkGB: string;
  showSubmitMessage?: () => boolean;
  submitMessage?: () => JSX.Element;
  submitTitle?: string;
}

const getCompany = (currencyCode: string): PaysafeCompany => {
  if ([ 'GBP', 'AUD', 'NZD' ].includes(currencyCode)) {
    return 'GB';
  }
  if (currencyCode === 'USD') {
    return 'US';
  }
  if (currencyCode === 'CAD') {
    return 'CA';
  }
  throw Error('unknown currency');
};

export const Summary: React.FC<Props> = props => {
  const { addToDatabase, charge, guarantee, scrollToPosition, agreementLink, agreementLinkGB, showSubmitMessage, submitMessage, submitTitle } = props;
  const { price, payment } = useStateContext();
  const [ popupCA, toggleCA ] = usePopup(false);
  const [ popupUS, toggleUS ] = usePopup(false);
  const [ popupGB, toggleGB ] = usePopup(false);
  const [ detailsPopup, detailsToggle ] = usePopup(false);
  const [ confirmPopup, confirmToggle ] = usePopup(false);

  if (!price) {
    return null;
  }

  const submit = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (showSubmitMessage?.()) {
      confirmToggle();
    } else {
      showPaymentForm();
    }
  };

  const showPaymentForm = () => {
    addToDatabase().then(result => {
      if (result) {
        const company = getCompany(price.currency.code);
        if (company === 'CA') {
          toggleCA();
        } else if (company === 'US') {
          toggleUS();
        } else if (company === 'GB') {
          toggleGB();
        }
      }
    });
  };

  const enrollmentAgreementUrl = price?.currency.code === 'GBP' ? agreementLinkGB : agreementLink;

  return (
    <section id="submitSection">
      <div className="container">
        <h2 className="h1">Complete Your Enrollment</h2>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-8 mb-4 mb-md-0">
            <Notes />
            {price.courses.length >= 2 && <p><button type="button" className="btn btn-link p-0 btn-no-hover-shadow" onClick={detailsToggle}>Detailed Payment Breakdown</button></p>}
            {price.disclaimers.length > 0 && <Disclaimers price={price} />}
            <p>By clicking &quot;Proceed to Payment&quot; below, you agree to the terms of the <a rel="noopener noreferrer" target="_blank" href={enrollmentAgreementUrl}>Enrollment Agreement</a>.</p>
            <div className="text-center text-sm-left">
              <div className="mb-4">
                <button onClick={submit} className="btn btn-primary"><FontAwesomeIcon icon={faLock} /> Proceed to Payment</button>
              </div>
              {price && price.courses.length === 0 && <div className="mb-4 alert alert-secondary" style={{ maxWidth: 520 }}>Please <button type="button" className="btn btn-link p-0 align-baseline btn-no-hover-shadow" onClick={() => scrollToPosition('courses')}>select one or more courses</button> before proceeding to payment.</div>}
              <img src={require('../../images/visa.svg')} className="mr-2" style={{ height: 32 }} alt="Visa" />
              <img src={require('../../images/mastercard.svg')} className="mr-2" style={{ height: 32 }} alt="Mastercard" />
              <img src={require('../../images/trusted-site-seal.png')} alt="Trusted Site Seal" />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            {guarantee()}
          </div>
        </div>
      </div>

      <PaymentModal company="CA" isOpen={popupCA} toggle={toggleCA} charge={charge} />
      <PaymentModal company="US" isOpen={popupUS} toggle={toggleUS} charge={charge} />
      <PaymentModal company="GB" isOpen={popupGB} toggle={toggleGB} charge={charge} />

      <DetailedBreakdown isOpen={detailsPopup} toggle={detailsToggle} price={price} payment={payment} />

      <Modal size="lg" isOpen={confirmPopup} toggle={confirmToggle}>
        <ModalHeader toggle={confirmToggle}>{submitTitle || 'Confirmation Required'}</ModalHeader>
        <ModalBody>
          {submitMessage?.()}
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={() => { confirmToggle(); showPaymentForm(); }}>Proceed Anyway</button>
          <button className="btn btn-success" onClick={() => confirmToggle()}>Let Me Go Back</button>
        </ModalFooter>
      </Modal>
    </section>
  );
};

const Disclaimers: React.FC<{ price: PriceResult }> = ({ price }) => (
  <div className="alert alert-info">
    <h6 className={price.disclaimers.length > 1 ? 'mb-3' : ''}>Please Note</h6>
    {price.disclaimers.map((d, i) => <p
      key={i}
      className="mt-3 mb-0"
      dangerouslySetInnerHTML={{ __html: d }}
    ></p>)}
    {price.noShippingMessage && <p className="mt-3 mb-0" dangerouslySetInnerHTML={{ __html: price.noShippingMessage }}></p>}
  </div>
);
