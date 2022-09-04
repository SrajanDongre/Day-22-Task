import Cart from "./Cart";
import Provider from "./Provider";
import "./styles.css";
import {BrowserRouter , Route , Routes} from "react-router-dom";
import Home from "./Home";

export default function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element= {<Home/>}></Route>
          <Route exact path='/cartList' element= {<Cart/>}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>                
  );
}