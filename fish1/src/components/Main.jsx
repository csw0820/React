import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import Header from './header/header';
import Home from './home/home';
import Info from './info/info';
import License from './license/license';
import Wheather from './weather/weather';
import Photoreview from './photoreview/photoreview';

function Main() {
  return (
    <>
      <Header />
      <Home />
      <Info />
      <Photoreview />
      <Wheather />
      <License />
    </>
  );
}

export default Main;
