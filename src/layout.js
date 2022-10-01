import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, Navigate, } from 'react-router-dom'
// import Navbar from './components/navbar'
import Home from './pages/home/homePage'
import Footer from './components/footer/index'
import Subscribe from '../src/pages/subscribe'
import Addservices from '../src/pages/AddServices/Addservices'
import Login from '../src/pages/Login/login'
import Navbar from './components/navbar/navbar2.js'

import { themeColor, themeBackground } from './globalConstants/constant';
import { useSelector } from 'react-redux'
import { selectUser } from './features/useSlice'
import Logout from './pages/Logout/Logout'
import { ThemeProvider } from 'styled-components'
import Header from './components/navbar/Header'
import HomePage from './pages/home/homePage'
import Signup from './pages/signup/signup'
import ResetPassword from './pages/resetpassword/resetPassword'
import BasicInformation from './pages/addToCartPages/BasicInformation/basicInformation'
import Adressinformation from './pages/addToCartPages/adressInformation/adressInformation'


const Layout = () => {
  const user = useSelector(state => state);

  
  return (
    <div>
        <BrowserRouter>
        <Header/>

            <div>
             
                <Routes>
              <Route exact path='/home' element={<HomePage/>}/>
              <Route exact path='/subscribe' element={<Subscribe/>}/>
              <Route exact path='/services' element={<Addservices/>}/>
              <Route exact path='/' element={<Navigate to='/home'/>}/>
               <Route exact path='/login' element={<Login/>}/> 
               <Route exact path='/signup' element={<Signup/>}/> 
               <Route exact path='/resetpassword' element={<ResetPassword/>}/> 
               <Route exact path='/Basicinformation' element={<BasicInformation/>}/> 
               <Route exact path='/addressinfo' element={<Adressinformation />}/> 


                </Routes>
                  
              
                
                   
              </div>
          <Footer />
          </BrowserRouter>
          {/* </ThemeProvider> */}
    </div>
  )
}

export default Layout

// export default class Layout extends Component {
//   constructor(props){
//     super(props)
    
//     console.log('props in layout: ',this.props)
//   }
//   // user= useSelector(selectUser)
//   render() {
//     return (
//         <div>
//             <BrowserRouter>
//             <Navbar />
//                 <div style={{height:'80vh'}}>
                  
//                     <Routes>
//                         <Route {...this.props} exact path='/home' element={<Home/>}/>
//                         <Route exact path='/subscribe' element={<Subscribe/>}/>
//                         <Route exact path='/services' element={<Addservices/>}/>
//                         <Route exact path='/' element={<Navigate to='/home'/>}/>
//                         <Route exact path='/login' element={<Login/>}/>
//                     </Routes>
//                 </div>
//             <Footer styles={{backgroundColor:themeColor,height:'10vh'}} />
//             </BrowserRouter>
            
//       </div>
//     )
//   }
// }

