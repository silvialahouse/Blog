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
import Capitulo13 from "./pages/Capitulo13.js";
import Capitulo14 from "./pages/Capitulo14.js";
import Capitulo15 from "./pages/Capitulo15.js";
import Capitulo16 from "./pages/Capitulo16.js";
import Capitulo17 from "./pages/Capitulo17.js";
import Capitulo18 from "./pages/Capitulo18.js";
import Capitulo19 from "./pages/Capitulo19.js";
import Capitulo20 from "./pages/Capitulo20.js";
import Capitulo21 from "./pages/Capitulo21.js";
import Capitulo22 from "./pages/Capitulo22.js";
import Capitulo23 from "./pages/Capitulo23.js";
import Capitulo24 from "./pages/Capitulo24.js";
import Capitulo25 from "./pages/Capitulo25.js";
import Capitulo26 from "./pages/Capitulo26.js";
import Capitulo27 from "./pages/Capitulo27.js";
import Capitulo28 from "./pages/Capitulo28.js";
import Capitulo29 from "./pages/Capitulo29.js";
import Capitulo30 from "./pages/Capitulo30.js";
import Capitulo31 from "./pages/Capitulo31.js";
import Capitulo32 from "./pages/Capitulo32.js";
import Capitulo33 from "./pages/Capitulo33.js";
import Capitulo34 from "./pages/Capitulo34.js";
import Capitulo35 from "./pages/Capitulo35.js";
import Capitulo36 from "./pages/Capitulo36.js";
import Capitulo37 from "./pages/Capitulo37.js";
import Capitulo38 from "./pages/Capitulo38.js";
import Capitulo39 from "./pages/Capitulo39.js";
import Capitulo40 from "./pages/Capitulo40.js";
import Capitulo41 from "./pages/Capitulo41.js";
import Capitulo42 from "./pages/Capitulo42.js";
import Capitulo43 from "./pages/Capitulo43.js";
import Capitulo44 from "./pages/Capitulo44.js";

import { Home } from "./pages/home";

import { Accion } from "./pages/accion";
import { Brochazos } from "./pages/brochazos";
import { Caballeros } from "./pages/caballeros";
import { Cueva } from "./pages/cueva";
import { Despegamos } from "./pages/despegamos";
import { Directo } from "./pages/directo";
import { Dulce } from "./pages/dulce";
import { Iglu } from "./pages/iglu";
import { Oceano } from "./pages/oceano";
import { Teduele } from "./pages/teduele";

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
                        <Route element={<Accion />} path="/accion" />
                        <Route element={<Brochazos />} path="/brochazos" />
                        <Route element={<Caballeros />} path="/caballeros" />
                        <Route element={<Cueva />} path="/cueva" />
                        <Route element={<Despegamos />} path="/despegamos" />
                        <Route element={<Directo />} path="/directo" />
                        <Route element={<Dulce />} path="/dulce" />
                        <Route element={<Iglu />} path="/iglu" />
                        <Route element={<Oceano />} path="/oceano" />
                        <Route element={<Teduele />} path="/teduele" />

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
                        <Route element={<Capitulo17 />} path="/capitulo17" />
                        <Route element={<Capitulo18 />} path="/capitulo18" />
                        <Route element={<Capitulo19 />} path="/capitulo19" />
                        <Route element={<Capitulo20 />} path="/capitulo20" />
                        <Route element={<Capitulo21 />} path="/capitulo21" />
                        <Route element={<Capitulo22 />} path="/capitulo22" />
                        <Route element={<Capitulo23 />} path="/capitulo23" />
                        <Route element={<Capitulo24 />} path="/capitulo24" />
                        <Route element={<Capitulo25 />} path="/capitulo25" />
                        <Route element={<Capitulo26 />} path="/capitulo26" />
                        <Route element={<Capitulo27 />} path="/capitulo27" />
                        <Route element={<Capitulo28 />} path="/capitulo28" />
                        <Route element={<Capitulo29 />} path="/capitulo29" />
                        <Route element={<Capitulo30 />} path="/capitulo30" />
                        <Route element={<Capitulo31 />} path="/capitulo31" />
                        <Route element={<Capitulo32 />} path="/capitulo32" />
                        <Route element={<Capitulo33 />} path="/capitulo33" />
                        <Route element={<Capitulo34 />} path="/capitulo34" />
                        <Route element={<Capitulo35 />} path="/capitulo35" />
                        <Route element={<Capitulo36 />} path="/capitulo36" />
                        <Route element={<Capitulo37 />} path="/capitulo37" />
                        <Route element={<Capitulo38 />} path="/capitulo38" />
                        <Route element={<Capitulo39 />} path="/capitulo39" />
                        <Route element={<Capitulo40 />} path="/capitulo40" />
                        <Route element={<Capitulo41 />} path="/capitulo41" />
                        <Route element={<Capitulo42 />} path="/capitulo42" />
                        <Route element={<Capitulo43 />} path="/capitulo43" />
                        <Route element={<Capitulo44 />} path="/capitulo44" />
                        
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
