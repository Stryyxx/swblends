import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AnimatePresence } from "framer-motion";

// Layout
import Layout from "./components/layout/Layout";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";

function App() {
	return (
		<HelmetProvider>
			<Router>
				<AnimatePresence mode="wait">
					<Layout>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/services" element={<Services />} />
							<Route path="/about" element={<About />} />
							<Route path="/booking" element={<Booking />} />
							<Route path="/contact" element={<Contact />} />
							<Route path="/gallery" element={<Gallery />} />
							<Route path="*" element={<NotFound />} />
						</Routes>
					</Layout>
				</AnimatePresence>
			</Router>
		</HelmetProvider>
	);
}

export default App;
