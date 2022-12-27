/*  
    Author      -   Shivam Gupta
    Usage       -   Main app file
*/
import React from "react"
import { BrowserRouter, Link } from "react-router-dom";

function App() {
    return (
        <>
            <h1>Hey</h1>
            <Link to={"/gta"}> my link </Link>
        </>
    );
}

export default App;