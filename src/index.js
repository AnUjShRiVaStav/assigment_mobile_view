import { StrictMode } from "react";
import ReactDOM from "react-dom";
import data from '../src/Component/data'
import Navbar from "./Component/Navbar";
import App from "./App";
import Cart from '../src/Component/Cart';
import P from '../src/Component/P';


const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
  <Navbar />
    <App />
  
    {data.map((val) => {
      
      return <Cart imgsrc={val.imgsrc} name={val.name}
       />;
    })}
    <P />
  </StrictMode>,
  rootElement
);
