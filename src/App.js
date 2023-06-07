import React, { useEffect, useState } from 'react';
import "./App.css"
import { FooterComponent, NavBarComponent } from './source/components';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { ContactUs, HomeScreen, QuantumDashboard } from './source/screens';
import { VendorScreen } from './source/screens/Vendors';
import { AboutUsScreen } from './source/screens/AboutUsScreen';
import { WhyUsScreen } from './source/screens/WhyUsScreen';
import { Services } from './source/screens/Services';
import LayoutHome from './source/screens/layout';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { GetItServices, GetSecurityServices, GetVendors } from './source/services/Redux/UserSlice';
import MainRoute from './source/screens/DashboardScreen/mainRoute';

const { Header, Content, Footer } = Layout;

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

const dispatch = useDispatch()
useEffect(() => {
  dispatch(GetVendors())
  dispatch(GetItServices())
  dispatch(GetSecurityServices())


}, [])



  return (
    <>
    <div className='font-gilroy AppWidth100'>


    
    	   <Routes>
         
		<Route path='/*' element={<LayoutHome/>}/>
		<Route path='/dashboard/*' element={<MainRoute/>}/>

	
     	</Routes>
    </div>
    
    </>

  );
};

export default App;