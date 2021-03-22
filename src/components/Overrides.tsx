import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import { useStateContext } from '../hooks/useStateContext';
import { useDispatchContext } from '../hooks/useDispatchContext';

export const Overrides: React.FC = () => {
  const { price, overrides } = useStateContext();
  const dispatch = useDispatchContext();

  const handleCourseChange = (value: number, code: string) => {
    dispatch({ type: 'SET_OVERRIDE_COURSE_VALUE', payload: { code, value } });
  };

  const handleChange = (value: number) => {
    dispatch({ type: 'SET_OVERRIDE_VALUE', payload: { value } });
  };

  const handleReset = () => {
    dispatch({ type: 'RESET_OVERRIDES' });
  };

  const handleInstallmentsChange = (installments: number) => {
    dispatch({ type: 'SET_OVERRIDE_INSTALLMENTS', payload: { installments } });
  };

  return (
    <section className="bg-dark text-white">
      <div className="container">
        <h2 className="h1 text-white">Overrides</h2>

      <div className="row">

        <div className="col-12 col-lg-6">
          <div className="form-group">
            <div className="alert alert-primary">
              <label htmlFor="totalDeposit">Total Deposit</label>
              <div className="row">
                <div className="col-7 col-sm-9 col-lg-8">
                  <Slider
                    min={overrides.min}
                    max={overrides.max}
                    step={0.01}
                    defaultValue={overrides.default}
                    value={overrides.value}
                    marks={{
                      [overrides.default]: overrides.default.toFixed(2),
                      [overrides.max]: overrides.max.toFixed(2),
                    }}
                    onChange={handleChange}
                    className="mb-3"
                    trackStyle={{ backgroundColor: '#007bff' }}
                    handleStyle={{ borderColor: '#007bff' }}
                    activeDotStyle={{ borderColor: '#007bff' }}
                  />
                </div>
                <div className="col-5 col-sm-3 col-lg-4">
                  <input type="number" id="totalDeposit" className="form-control d-inline-block mx-2" value={overrides.value} min={overrides.min} max={overrides.max} onChange={e => handleChange(parseFloat(e.target.value))} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {overrides.courses.filter(d => d.max > 0).length > 1 && (
          <div className="col-12 col-lg-6 order-lg-3">
            <div className="alert alert-secondary">
              {overrides.courses.filter(d => d.max > 0).map(d => (
                <div className="form-group" key={d.code}>
                  <label htmlFor={'depositOverride' + d.code}>{d.name} Deposit</label>
                  <div className="row">
                    <div className="col-7 col-sm-9 col-lg-8">
                      <Slider
                        min={d.min}
                        max={d.max}
                        step={0.01}
                        defaultValue={d.default}
                        value={d.value}
                        marks={{
                          [d.default]: d.default.toFixed(2),
                          [d.max]: d.max.toFixed(2),
                        }}
                        onChange={(value: number) => handleCourseChange(value, d.code)}
                        className="mb-3"
                      />
                    </div>
                    <div className="col-5 col-sm-3 col-lg-4">
                      <input type="number" id={'depositOverride' + d.code} className="form-control d-inline-block mx-2" value={d.value} min={d.min} max={d.max} onChange={e => handleCourseChange(parseFloat(e.target.value), d.code)} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="col-12 col-lg-6 order-lg-2">
          <div className="form-group">
            <div className="alert alert-primary">
              <label htmlFor="totalDeposit">Installments</label>
              <div className="row">
                <div className="col-8 col-sm-10 col-lg-9">
                  <Slider
                    min={1}
                    max={overrides.maxInstallments}
                    step={1}
                    defaultValue={overrides.defaultInstallments}
                    value={overrides.installments}
                    marks={{
                      1: '1',
                      [overrides.defaultInstallments.toFixed(0)]: overrides.defaultInstallments.toFixed(0),
                      [overrides.maxInstallments.toFixed(0)]: overrides.maxInstallments.toFixed(0),
                    }}
                    onChange={handleInstallmentsChange}
                    className="mb-3"
                    trackStyle={{ backgroundColor: '#007bff' }}
                    handleStyle={{ borderColor: '#007bff' }}
                    activeDotStyle={{ borderColor: '#007bff' }}
                  />
                </div>
                <div className="col-4 col-sm-2 col-lg-3">
                  <input type="number" id="totalDeposit" className="form-control d-inline-block mx-2" value={overrides.installments.toFixed(0)} step={1} min={1} max={overrides.maxInstallments} onChange={e => handleChange(parseFloat(e.target.value))} />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <button type="button" className="btn btn-secondary" onClick={handleReset}>Reset Overrides</button>

      </div>
    </section>
  );
};
