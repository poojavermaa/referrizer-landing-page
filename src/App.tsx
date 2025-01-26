import React from "react";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import { FAQ } from "./components/FAQ";
import CommunityBanner from "./components/CommunityBanner";
import SuccessStory from "./components/SuccessStory";
import Testimonial from "./components/Testimonial";
import DevDocs from "./components/DevDocs";
import Tools from "./components/Tools";
import AppPartner from "./components/AppPartner";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Header />
                <AppPartner />
                <Tools />
                <DevDocs />
                <Testimonial />
                <FAQ />
                <CommunityBanner />
                <SuccessStory />
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
