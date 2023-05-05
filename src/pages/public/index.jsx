import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './home';
import { Input } from 'antd';
import DropdownRouteMenu from '../../common/components/dropdown';
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