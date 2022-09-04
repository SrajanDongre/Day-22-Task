import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Footer from "./components/Footer";
import { useContext } from "react";
import { CartContext } from "./Context";

export default function Home(){
    const context = useContext(CartContext);
    return (
    <>
    <Navbar />
    <Header />
    <Footer/>

    {context.AllProducts.map((value)=> {
        return <Product value = {value} />
    })}
    </>
    );
}