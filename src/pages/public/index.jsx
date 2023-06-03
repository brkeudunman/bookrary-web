import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../common-pages/home';
import PublicLayout from '../../common/layout/public.layout';
import SignUp from './auth/signup';



const PublicRoutes = () => {

  return (
    <PublicLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </PublicLayout>
  );
}

export default PublicRoutes