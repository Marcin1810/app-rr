import React from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePage from'../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';
import ContactsPage from '../pages/ContactsPage';
import AdminPage from '../pages/AdminPage';
import ErrorsPage from '../pages/ErrorsPage';

const Page = () => {
    return ( 
        <div>
          <Routes>
            <Route path="/start" element={<HomePage/>}/>
            <Route path="/products" element={<ProductsPage/>}/>
            <Route path="/contacts" element={<ContactsPage/>}/>
            <Route path="/admin" element={<AdminPage/>}/>
            <Route element={<ErrorsPage/>}/>
          </Routes>
        </div>
     );
}
 
export default Page;