import Footer from "./component/Footer";
import Header from "./component/Header";
import Info from "./component/Info";
import ReactDOM from "react-dom";
import React from "react";
import "./style.css"

ReactDOM.render(
    <div className="fullContent">
        <Header />
        <Info />
        <Footer />
    </div>,
    document.getElementById("root")
)