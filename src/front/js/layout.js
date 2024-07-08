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

import Accion1 from "./pages/Accion1";
import Accion2 from "./pages/Accion2";
import Accion3 from "./pages/Accion3";
import Accion4 from "./pages/Accion4";

import Brochazos1 from "./pages/Brochazos1";
import Brochazos2 from "./pages/Brochazos2";
import Brochazos3 from "./pages/Brochazos3";
import Brochazos4 from "./pages/Brochazos4";

import Caballeros1 from "./pages/Caballeros1";
import Caballeros2 from "./pages/Caballeros2";
import Caballeros3 from "./pages/Caballeros3";
import Caballeros4 from "./pages/Caballeros4";

import Cueva1 from "./pages/Cueva1";
import Cueva2 from "./pages/Cueva2";
import Cueva3 from "./pages/Cueva3";
import Cueva4 from "./pages/Cueva4";

import Despegamos1 from "./pages/Despegamos1";
import Despegamos2 from "./pages/Despegamos2";
import Despegamos3 from "./pages/Despegamos3";
import Despegamos4 from "./pages/Despegamos4";

import Directo1 from "./pages/Directo1";
import Directo2 from "./pages/Directo2";
import Directo3 from "./pages/Directo3";
import Directo4 from "./pages/Directo4";

import Dulce1 from "./pages/Dulce1";
import Dulce2 from "./pages/Dulce2";
import Dulce3 from "./pages/Dulce3";
import Dulce4 from "./pages/Dulce4";

import Iglu1 from "./pages/Iglu1";
import Iglu2 from "./pages/Iglu2.js";
import Iglu3 from "./pages/Iglu3";
import Iglu4 from "./pages/Iglu4";

import Teduele1 from "./pages/Teduele1";
import Teduele2 from "./pages/Teduele2";
import Teduele3 from "./pages/Teduele3";
import Teduele4 from "./pages/Teduele4";

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

                        <Route element={<Accion1 />} path="/accion1" />
                        <Route element={<Accion2 />} path="/accion2" />
                        <Route element={<Accion3 />} path="/accion3" />
                        <Route element={<Accion4 />} path="/accion4" />

                        <Route element={<Brochazos1 />} path="/brochazos1" />
                        <Route element={<Brochazos2 />} path="/brochazos2" />
                        <Route element={<Brochazos3 />} path="/brochazos3" />
                        <Route element={<Brochazos4 />} path="/brochazos4" />

                        <Route element={<Caballeros1 />} path="/caballeros1" />
                        <Route element={<Caballeros2 />} path="/caballeros2" />
                        <Route element={<Caballeros3 />} path="/caballeros3" />
                        <Route element={<Caballeros4 />} path="/caballeros4" />

                        <Route element={<Cueva1 />} path="/cueva1" />
                        <Route element={<Cueva2 />} path="/cueva2" />
                        <Route element={<Cueva3 />} path="/cueva3" />
                        <Route element={<Cueva4 />} path="/cueva4" />
                    
                        <Route element={<Despegamos1 />} path="/despegamos1" />
                        <Route element={<Despegamos2 />} path="/despegamos2" />
                        <Route element={<Despegamos3 />} path="/despegamos3" />
                        <Route element={<Despegamos4 />} path="/despegamos4" />

                        <Route element={<Directo1 />} path="/directo1" />
                        <Route element={<Directo2 />} path="/directo2" />
                        <Route element={<Directo3 />} path="/directo3" />
                        <Route element={<Directo4 />} path="/directo4" />

                        <Route element={<Dulce1 />} path="/dulce1" />
                        <Route element={<Dulce2 />} path="/dulce2" />
                        <Route element={<Dulce3 />} path="/dulce3" />
                        <Route element={<Dulce4 />} path="/dulce4" />

                        <Route element={<Iglu1 />} path="/iglu1" />
                        <Route element={<Iglu2 />} path="/iglu2" />
                        <Route element={<Iglu3 />} path="/iglu3" />
                        <Route element={<Iglu4 />} path="/iglu4" />

                        <Route element={<Teduele1 />} path="/teduele1" />
                        <Route element={<Teduele2 />} path="/teduele2" />
                        <Route element={<Teduele3 />} path="/teduele3" />
                        <Route element={<Teduele4 />} path="/teduele4" />

                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
