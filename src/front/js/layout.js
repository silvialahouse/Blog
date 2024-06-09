import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import Capitulo1 from "./pages/Capitulo1";
import Capitulo2 from "./pages/Capitulo2";
import Capitulo3 from "./pages/Capitulo3";
import Capitulo4 from "./pages/Capitulo4";
import Capitulo5 from "./pages/Capitulo5";
import Capitulo6 from "./pages/Capitulo6";
import Capitulo7 from "./pages/Capitulo7";
import Capitulo8 from "./pages/Capitulo8";
import Capitulo9 from "./pages/Capitulo9";
import Capitulo10 from "./pages/Capitulo10";
import Capitulo11 from "./pages/Capitulo11";
import Capitulo12 from "./pages/Capitulo12";
import Capitulo13 from "./pages/Capitulo13";
import Capitulo14 from "./pages/Capitulo14";
import Capitulo15 from "./pages/Capitulo15";
import Capitulo16 from "./pages/Capitulo16";

import { Home } from "./pages/home";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Capitulo1 />} path="/capitulo1" />
                        <Route element={<Capitulo2 />} path="/capitulo2" />
                        <Route element={<Capitulo3 />} path="/capitulo3" />
                        <Route element={<Capitulo4 />} path="/capitulo4" />
                        <Route element={<Capitulo5 />} path="/capitulo5" />
                        <Route element={<Capitulo6 />} path="/capitulo6" />
                        <Route element={<Capitulo7 />} path="/capitulo7" />
                        <Route element={<Capitulo8 />} path="/capitulo8" />
                        <Route element={<Capitulo9 />} path="/capitulo9" />
                        <Route element={<Capitulo10 />} path="/capitulo10" />
                        <Route element={<Capitulo11 />} path="/capitulo11" />
                        <Route element={<Capitulo12 />} path="/capitulo12" />
                        <Route element={<Capitulo13 />} path="/capitulo13" />
                        <Route element={<Capitulo14 />} path="/capitulo14" />
                        <Route element={<Capitulo15 />} path="/capitulo15" />
                        <Route element={<Capitulo16 />} path="/capitulo16" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
