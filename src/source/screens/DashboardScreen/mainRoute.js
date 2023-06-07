import React, { useEffect, useState } from 'react';

import { Routes, Route } from 'react-router-dom';

import Login from './login';
import { QuantumDashboard } from '.';


const MainRoute = () => {





  return (
    <>
    <div className='font-gilroy AppWidth100'>


    
    	   <Routes>
         
		<Route path='/' element={<Login/>}/>
		<Route path='dashboard/*' element={<QuantumDashboard/>}/>

	
     	</Routes>
    </div>
    
    </>

  );
};

export default MainRoute;