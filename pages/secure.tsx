import React from 'react';
import { DatePicker } from 'antd';
import { withAuth } from '@HOC/withAuth';

const Secure: React.FC = () => {
  return (
    <div className="mainContainer">
      <div className="container">
        <DatePicker />
        <h1 className="heading">Secure Page</h1>
      </div>
    </div>
  );
};

export default withAuth(Secure);
