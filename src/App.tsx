import React from "react";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import { FAQ } from "./components/FAQ";
import CommunityBanner from "./components/CommunityBanner";

function App() {
    return (
        <>
            <BrowserRouter>
                <FAQ />
                <CommunityBanner />
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
