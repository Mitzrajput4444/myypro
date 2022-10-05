import logo from './logo.svg';
import './App.css';
import ClassComp from './componets/compo';
import { ClassProps } from './componets/compoprops';
import { Student } from './componets/compincomp';
import { ConstructrClass } from './componets/consturcutrecom';
import FunctinInComponet from './componets/function/funincom';
import { MainFunction } from './componets/function/funincomincom';
import FunProps from './componets/function/funprops';
import StateMange from './componets/statemanage';
import Lyfcycle from './componets/lyfcycle';
import ClickEvent from './componets/events/ClickEvent';
import SubAndChang from './componets/events/SubAndChang';
import ConRender from './componets/ConRender';
import MyChild from './componets/MyChild';
import UseState from './componets/Hooks/UseState';
import UseEffect from './componets/Hooks/UseEffect';
import A from './componets/Hooks/PropsDrilling/A';
import Second from './componets/Hooks/Context/Second';
import First from './componets/Hooks/Context/First';
import Third from './componets/Hooks/Context/Third';
import UseRef from './componets/Hooks/UseRef';
import UseMemo from './componets/Hooks/UseMemo';
import UseReducer from './componets/Hooks/CustomHooks/UseReducer';
import CallHook from './componets/Hooks/CustomHooks/CallHook';
import Callhook2 from './componets/Hooks/CustomHooks/CallHook2';
import Footer from './MyApp/Footer';
import Home from './MyApp/Home';
import Header from './MyApp/Header';
import Product from './MyApp/Product';
import Categ from './MyApp/Categ';
import Header1 from './MyApp2/Header1';
import Home1 from './MyApp2/Home1';
import Product1 from './MyApp2/Product1';
import Footer1 from './MyApp2/Footer1';



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
    <Header1/>
    <Home1/>
    <Product1/>
    <Footer1/>

    </div>
  );
}

export default App;
