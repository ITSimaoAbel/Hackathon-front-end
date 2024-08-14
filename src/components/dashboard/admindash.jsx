import React from 'react';
import { Header } from './header';
import { Aside } from './aside';

export const Dashboard = () => {
  return (
    <>
      <Aside />
      <div className="ml-64">
        <Header />
      </div>
    </>
  );
};


 