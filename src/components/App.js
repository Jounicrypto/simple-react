import React from "react";
import Header from "./Header";
import Social from "./Social";
import Text from './Text'
import Footer from "./Footer";


function App(){
    return(
        <div className="container">
            <Header/>
            <Text/>
            <Social/>
            <Footer/>
        </div>
    ); 
}

export default App