import { scroller } from 'react-scroll';

const scrollProps = {
  duration: 500,
  smooth: true,
};

export const scrollToPosition = (section: 'courses' | 'shipping' | 'plan' | 'billing'): void => {
  if (section === 'courses') {
    scroller.scrollTo('courses-section', scrollProps);
  } else if (section === 'shipping') {
    scroller.scrollTo('address-section', scrollProps);
  } else if (section === 'plan') {
    scroller.scrollTo('payment-section', scrollProps);
  } else if (section === 'billing') {
    scroller.scrollTo('billing-section', scrollProps);
  }
};
