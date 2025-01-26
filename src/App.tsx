import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";

function App() {
    return (
        <BrowserRouter>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* Redirect all unknown routes to home */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
