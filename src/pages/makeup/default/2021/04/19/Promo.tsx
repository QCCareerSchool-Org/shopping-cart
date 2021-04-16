import React from 'react';

import { useDispatchContext } from '../../../../../../hooks/useDispatchContext';
import { usePreloadImage } from '../../../../../../hooks/usePreloadImage';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';

import couponButtonEliteSrc from './ELITE-choose-offer-btn.png';
import couponButtonSave50Src from './SAVE50-choose-offer-btn.png';
import couponButtonSpring21Src from './SPRING21-choose-offer-btn.png';
import couponButtonActiveSrc from './choose-offer-btn-active.png';

type Props = {
  date: Date;
  currencyCode: string;
}

export const Promo20210419: React.FC<Props> = ({ date, currencyCode }) => {
  usePreloadImage(couponButtonActiveSrc);

  return (
    <>
      <div style={{ backgroundColor: '#000', backgroundImage: `url(${require('./bg-1.jpg')})`, backgroundPosition: 'top center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
        <section id="promoSection">
          <div className="container text-center">
            <img src={require('./title.svg')} className="img-fluid mb-4" alt="Enroll in Master Makeup Artisty and Choose Your Offer" />
            <div className="row">
              <div className="col-12 col-md-4 mb-4 mb-md-0">
                <Card
                  code="ELITE"
                  backgroundImgSrc={require('./ELITE-coupon-card.png')}
                  textImgSrc={require('./ELITE-text.png')}
                  codeImgSrc={require('./ELITE-code.png')}
                  buttonImgSrc={couponButtonEliteSrc}
                  buttonActiveImgSrc={couponButtonActiveSrc}
                />
              </div>
              <div className="col-12 col-md-4 mb-4 mb-md-0">
                <Card
                  code="SAVE50"
                  backgroundImgSrc={require('./SAVE50-coupon-card.png')}
                  textImgSrc={require('./SAVE50-text.png')}
                  codeImgSrc={require('./SAVE50-code.png')}
                  buttonImgSrc={couponButtonSave50Src}
                  buttonActiveImgSrc={couponButtonActiveSrc}
                />
              </div>
              <div className="col-12 col-md-4 mb-0">
                <Card
                  code="SPRING21"
                  backgroundImgSrc={require('./SPRING21-coupon-card.png')}
                  textImgSrc={require('./SPRING21-text.png')}
                  codeImgSrc={require('./SPRING21-code.png')}
                  buttonImgSrc={couponButtonSpring21Src}
                  buttonActiveImgSrc={couponButtonActiveSrc}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <section style={{ padding: 0 }}></section>
    </>
  );
};

type CardProps = {
  code: string;
  backgroundImgSrc: string;
  textImgSrc: string;
  codeImgSrc: string;
  buttonImgSrc: string;
  buttonActiveImgSrc: string;
}

const Card: React.FC<CardProps> = ({ code, backgroundImgSrc, textImgSrc, codeImgSrc, buttonImgSrc, buttonActiveImgSrc }) => {
  const screenWidth = useScreenWidthContext();
  const { price } = useStateContext();
  const dispatch = useDispatchContext();

  const buttonClick = () => {
    dispatch({ type: 'ADD_COURSE', payload: { courseCode: 'MZ', internal: false } });
    dispatch({ type: 'SET_PROMO_CODE', payload: code });
  };

  const breakpoint = screenWidth >= 1200 ? 'xl' : screenWidth >= 992 ? 'lg' : screenWidth >= 768 ? 'md' : screenWidth >= 576 ? 'sm' : 'xs';

  let cardPadding: string;
  let tagWidth: number;
  let tagHeight: number;
  let textWidth: number;
  let textHeight: number;
  let textMarginBottom: string;

  if (breakpoint === 'md') {
    cardPadding = '2.25rem 1rem 1rem';
    tagWidth = 209;
    tagHeight = 243;
    textWidth = 117;
    textHeight = 88;
    textMarginBottom = '2.25rem';
  } else {
    cardPadding = '2.75rem 1rem 1rem';
    tagWidth = 243;
    tagHeight = 289;
    textWidth = 136;
    textHeight = 102;
    textMarginBottom = '3rem';
  }

  return (
    <div style={{ padding: cardPadding, margin: '0 auto', backgroundImage: `url(${backgroundImgSrc})`, backgroundSize: '100% 100%', width: tagWidth, height: tagHeight }}>
      <img src={textImgSrc} style={{ marginBottom: textMarginBottom }} width={textWidth} height={textHeight} />
      <img src={codeImgSrc} style={{ marginBottom: '1em' }} alt={code} />
      {price?.promoCode === code
        ? <img src={buttonActiveImgSrc} width="172" height="36" className="img-fluid" alt={`${code} Promo Code Applied`} />
        : <button onClick={buttonClick} className="btn btn-link p-0 border-0 btn-no-hover-shadow"><img src={buttonImgSrc} width="172" height="36" className="img-fluid" alt={`Apply ${code} Promo Code`} /></button>
      }
    </div>
  );
};
