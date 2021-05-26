/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import Image from 'next/image';
const request = {
  arrangeDate: '12/13/2012',
  downPayment: 130,
  total: 190,
  status: 'Completed',
  description: 'Build a ecommerce about clothing ',
};

const props = {
  logosrc: '#',
  title: 'Web design ecommerce project',
  description: 'Design a complete ecommerce with a backend capabilities.',
  clientInfo: 'ClientInfoObject',
  requestinfo: 'RequestFetchedInfo',
  downPayment: 123,
  totalPayment: 150,
  status: 'Pending client payment',
};

const Request = () => {
  return (
    <div sx={{ variant: 'Request' }}>
      <div className="Logo">
        <Image
          src="/images/profile.jpg"
          width={'60px'}
          height={'60px'}
          alt="Picture of the author"
          sx={{ borderRadius: '50%' }}
        />
      </div>
      <div className="middlePart">
        <div className="Title">Web design ecommerce project</div>
        <div className="description">
          {' '}
          Tryinsbdasdsdnkajsndkjasnd
          kjasndsakjdnsdnaksjndaksjndaksjndaksjndakjsdnaskjndaksjndaksjndaskjnkjng
          t
        </div>
      </div>
      <div className="downPayment">{props.downPayment}</div>
      <div className="totalPayment">{props.totalPayment}</div>
    </div>
  );
};

export default Request;
