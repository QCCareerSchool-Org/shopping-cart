import React from 'react';

export const DefaultPromo: React.FC = () => (
  <section id="promoSection">
    <div className="container">
      <h1 className="text-center">Enroll Online</h1>
      <div className="row align-items-center">
        <div className="col-12 col-lg-6 order-lg-2">
          <h2 className="mb-3 text-left">Get Six Free Books</h2>
          <p>When you enroll you&apos;ll receive six bonus books that will help you accelerate your career as a professional writer. Written by Winghill&apos;s very own tutors, these books are sure to inform and inspire you! You&apos;ll receive the following books:</p>
          <ul>
            <li><i>A Novel Approach</i></li>
            <li><i>How to Write Fiction For Cash</i></li>
            <li><i>How to Write For Cash</i></li>
            <li><i>Writing and Selling Articles</i></li>
            <li><i>Writing For Love and Money</i></li>
            <li><i>A Novelist&apos;s Commonplace Book</i></li>
          </ul>
        </div>
        <div className="col-12 col-lg-6 mb-4 mb-lg-0 text-left text-lg-center order-lg-1">
          <img className="img-fluid" src={require('./bonus-books.jpg')} width="464" height="218" alt="Six free books" />
        </div>
      </div>
    </div>
  </section>
);
