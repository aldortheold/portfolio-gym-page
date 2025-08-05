import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Splits from "./pages/Splits";
import Diet from "./pages/Diet";
import Motivation from "./pages/Motivation";

export default function App() {
    const location = useLocation();

    const fade = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.3 }
    };

    return (
        <>
            <Navbar />
            <AnimatePresence exitBeforeEnter>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<motion.div {...fade}><Splits /></motion.div>} />
                    <Route path="/diet" element={<motion.div {...fade}><Diet /></motion.div>} />
                    <Route path="/motivation" element={<motion.div {...fade}><Motivation /></motion.div>} />
                </Routes>
            </AnimatePresence>
        </>
    );
}
