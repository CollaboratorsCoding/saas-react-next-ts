import React from 'react';
import { DatePicker, Rate } from 'antd';
import TestButton from '../src/components/Button';

const Home: React.FC = () => {
  return (
    <div className="mainContainer">
      <div className="container">
        <DatePicker />
        <h1 className="heading">Welcome</h1>
        <TestButton name="test" />
        <Rate />
      </div>
    </div>
  );
};

export default Home;
