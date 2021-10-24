import React, { useState, useEffect } from 'react'
import image404src from "../images/404image.png";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import Header from "components/headers/light.js";
import "./404.css";

const NotFoundComponent = () => {
    return (<Container>
        <Header />
        <div class="content-block">
                <img src={image404src} class="image" alt="woman meditating" />
                <div class="headline-wrapper">
                    <h1 class="headline">404 Page Not Found, <br />But Thankfully You Are Not</h1>
                    <p class="headline-copy">
                        <h3>Something's wrong here.</h3>
                        This is a 404 error, which means you've clicked on a bad link or entered an invalid URL.
                </p>
            </div>
        </div>
        </Container>);
    return (
    <div class="container">
        <Header />
        <div class="content-block">
            <img src={image404src} class="image" alt="woman meditating" />
            <div class="headline-wrapper">
                <h1 class="headline">404 Page Not Found, <br />But Thankfully You Are Not</h1>
                <p class="headline-copy">
                    <h3>Something's wrong here.</h3>
                    This is a 404 error, which means you've clicked on a bad link or entered an invalid URL.
            </p>
        </div>
    </div></div>);
}



export default NotFoundComponent;