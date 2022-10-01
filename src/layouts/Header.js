import React from 'react';
import '../styles/Header.css';
import img1 from '../images/header1.jpg';
import img2 from '../images/header2.jpg';
import img3 from '../images/header3.jpg';
import {Route, Routes} from 'react-router-dom';

const Img1 = () => (
    <img src={img1} alt="city" />
)

const Img2 = () => (
    <img src={img2} alt="city1" />
)

const Img3 = () => (
    <img src={img3} alt="city2" />
)


const Header = ()=> {
    return ( 
    <Routes>
    <Route path='/start' element={<Img1/>}/>
    <Route path='/products' element={<Img2/>}/>
    <Route path='/contacts' element={<Img3/>}/>
    <Route path='/admin' element={<Img1/>}/>  
    </Routes>
    
     );
}
 
export default Header;