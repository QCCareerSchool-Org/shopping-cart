import React from 'react';

type Props = {
  guarantee: () => JSX.Element;
}

export const Summary: React.FC<Props> = ({ guarantee }) => {
  return (
    <section>
      <div className="container">
        <h2>Complete Your Enrollment</h2>
        {guarantee()}
      </div>
    </section>
  );
};
