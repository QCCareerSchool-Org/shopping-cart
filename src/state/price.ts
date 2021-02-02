export type NoShipping = 'ALLOWED' | 'APPLIED' | 'REQUIRED' | 'FORBIDDEN';

export type CurrencyCode = 'CAD' | 'USD' | 'GBP' | 'AUD' | 'NZD';

export type PriceQueryOptions = {
  noShipping?: boolean;
  discountAll?: boolean;
  discount?: { [d in CurrencyCode]?: number } & { default: number };
  discountSignature?: string;
  MMFreeMW?: boolean;
  deluxeKit?: boolean;
  portfolio?: boolean;
  depositOverrides?: { [code: string]: number };
  installmentsOverride?: number;
  studentDiscount?: boolean;
}

export interface PriceQuery {
  courses: string[];
  countryCode: string;
  provinceCode?: string;
  options?: PriceQueryOptions;
}

interface Plan {
  /** the discount based on the payment plan */
  discount: number;
  /** the amount to be paid today */
  deposit: number;
  /** the size of the installments  */
  installmentSize: number;
  /** the number of installments */
  installments: number;
  /** any amount left over due to rounding */
  remainder: number;
  /** the final price after discounts */
  total: number;
  /** the original deposit, before overrides */
  originalDeposit: number;
  /** the original number of installments, before overrides */
  originalInstallments: number;
}

interface Price {
  /** the base price before any discounts */
  cost: number;
  /** the discount on courses after the first course */
  multiCourseDiscount: number;
  /** additional promotional discount */
  promoDiscount: number;
  /** the discount for not shipping materials */
  shippingDiscount: number;
  /** the discounted price (before payment plan discount) */
  discountedCost: number;
  /** the payment plans */
  plans: { full: Plan; part: Plan };
  /** what our cost for shipping would be if we shipped */
  shipping: number;
}

export type PriceResult = {
  countryCode: string;
  provinceCode?: string;
  currency: Currency;
  disclaimers: string[];
  notes: string[];
  noShipping: NoShipping;
  noShippingMessage?: string;
  courses: CourseResult[];
} & Price;

export type CourseResult = {
  code: string;
  name: string;
  primary: boolean;
  free: boolean;
} & Price;

export interface Currency {
  code: string;
  symbol: string;
  name: string;
  exchangeRate: number;
}

export interface PriceRow {
  noShipping: number;
  currencyCode: string;
  cost: number;
  multiCourseDiscountRate: number;
  deposit: number;
  discount: number;
  installments: number;
  courseCode: string;
  courseName: string;
  shipping: number;
}

export type PriceState = PriceResult | null;

export type PriceAction =
  | { type: 'SET_PRICE'; payload: PriceState }

export const initialPriceState: PriceState = null;

export function priceReducer(state: PriceState, action: PriceAction): PriceState {
  switch (action.type) {
    case 'SET_PRICE':
      return action.payload;
    default:
      return state;
  }
}
