import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../common-pages/home';
import PublicLayout from '../../common/layout/public.layout';



const PublicRoutes = () => {

  return (
    <PublicLayout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </PublicLayout>
  );
}

export default PublicRoutes