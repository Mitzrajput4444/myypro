import './App.css';
// import logo from './logo.svg';
// import ClassComp from './componets/compo';
// import { ClassProps } from './componets/compoprops';
// import { Student } from './componets/compincomp';
// import { ConstructrClass } from './componets/consturcutrecom';
// import FunctinInComponet from './componets/function/funincom';
// import { MainFunction } from './componets/function/funincomincom';
// import FunProps from './componets/function/funprops';
// import StateMange from './componets/statemanage';
// import Lyfcycle from './componets/lyfcycle';
// import ClickEvent from './componets/events/ClickEvent';
// import SubAndChang from './componets/events/SubAndChang';
// import ConRender from './componets/ConRender';
// import MyChild from './componets/MyChild';
// import UseState from './componets/Hooks/UseState';
// import UseEffect from './componets/Hooks/UseEffect';
// import A from './componets/Hooks/PropsDrilling/A';
// import Second from './componets/Hooks/Context/Second';
// import First from './componets/Hooks/Context/First';
// import Third from './componets/Hooks/Context/Third';
// import UseRef from './componets/Hooks/UseRef';
// import UseMemo from './componets/Hooks/UseMemo';
// import UseReducer from './componets/Hooks/CustomHooks/UseReducer';
// import CallHook from './componets/Hooks/CustomHooks/CallHook';
// import Callhook2 from './componets/Hooks/CustomHooks/CallHook2';
// import Footer from './MyApp/Footer';
// import Home from './MyApp/Home';
// import Header from './MyApp/Header';
// import Product from './MyApp/Product';
// import Categ from './MyApp/Categ';
 import Header1 from './MyApp2/Header1';
 import Home1 from './MyApp2/Home1';
 import Product1 from './MyApp2/Product1';
 import Footer1 from './MyApp2/Footer1';
 import { BrowserRouter, BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
 import React, { Component } from 'react';
import About1 from './MyApp2/About1';
import ContactUs1 from './MyApp2/ContactUs1';
import Login1 from './MyApp2/Login1';
import SignUp1 from './MyApp2/SignUp1';



function App() {
  return (
    <div className="App">
     {/* <h1>My App</h1> */}
        {/* <ClassComp/>
      <ClassProps name="mitz"/>
      <ClassProps name="gohil"/>
      <Student/>
      <ConstructrClass/>
      <FunctinInComponet/>
      <MainFunction name="Rajput"/>
      <FunProps name="12345"/>
      <StateMange/>

      <Lyfcycle/> */}
     
     {/* <ClickEvent/>
      <SubAndChang/> */}

      
      {/* <ConRender/>
      {/* <MyChild>
        <h1>hi my child.....1</h1>
        <h1>hi my child.....2</h1>
        <h1>hi my child.....3</h1>
      </MyChild> */}
      {/* <UseState/>
      <UseEffect/> */}
      {/* <A name="mitu" /> */}
    {/* <First/> */}
    {/* <UseRef/> */}
    {/* <UseMemo/>*/}
    {/* <UseReducer/>  */}
    {/* <CallHook/>
    <Callhook2/> */}
    {/* <Header/>
    <Home/>
  <Product/>
  <Categ/>
    <Footer/> */}
    <BrowserRouter>
          <Header1/>
      <Routes>
        <Route path='/' element={<Home1/>}  />
        <Route path='/About1' element={<About1/>} />
        <Route path='/Login1' element={<Login1/>} />
        <Route path='/SignUp1' element={<SignUp1/>} />
        <Route path='/Product1' element={<Product1/>}/> 
        <Route path='/ContactUs1' element={<ContactUs1/>}/> 
      </Routes>    
          <Footer1/>
    </BrowserRouter>

    </div>
  );
}

export default App;
