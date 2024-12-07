import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./assets/images/swblends_logo.png";
import Client1 from "./assets/images/client1.jpg";
import Client2 from "./assets/images/client2.jpg";
import Client3 from "./assets/images/client3.jpg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "./components/Modal";

function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	// Smooth scroll function
	const smoothScroll = (id) => {
		document.querySelector(id).scrollIntoView({ behavior: "smooth" });
		setIsMenuOpen(false); // Close the menu after clicking
	};

	// Parallelogram animations for loading screen
	const parallelogramVariants1 = {
		initial: { x: "-150vw", skewX: "30deg" },
		animate: { x: "150vw", skewX: "30deg", transition: { duration: 1.5, ease: "easeInOut" } },
	};

	const parallelogramVariants2 = {
		initial: { x: "-150vw", skewX: "30deg" },
		animate: { x: "150vw", skewX: "30deg", transition: { duration: 1.5, ease: "easeInOut", delay: 0.3 } },
	};

	// Staggered animation variants
	const fadeInVariants = (delay = 0) => ({
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { duration: 0.8, delay } },
	});

	const staggeredVariants = (delay = 0) => ({
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
	});

	// Slide-in menu variants
	const slideInVariants = {
		hidden: { x: "100%" },
		visible: { x: 0, transition: { duration: 0.5, ease: "easeInOut" } },
		exit: { x: "100%", transition: { duration: 0.5, ease: "easeInOut" } },
	};

	return (
		<div className="App min-h-screen bg-gray-900 text-white flex flex-col items-center">
			{/* Loading Screen */}
			{isLoading && (
				<div className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50">
					<h1 className="z-10 font-extrabold text-4xl">SWBlends</h1>
					<motion.div
						className="absolute top-0 left-0 w-full h-full bg-accent"
						variants={parallelogramVariants1}
						initial="initial"
						animate="animate"
					/>
					<motion.div
						className="absolute top-0 left-0 w-full h-full bg-gray-700"
						variants={parallelogramVariants2}
						initial="initial"
						animate="animate"
						onAnimationComplete={() => setIsLoading(false)}
					/>
				</div>
			)}

			{/* Main Content */}
			{!isLoading && (
				<>
					{/* Navbar */}
					<motion.nav
						className="w-full max-w-7xl flex justify-between items-center py-4 px-6 fixed top-0"
						variants={staggeredVariants(0.2)}
						initial="hidden"
						animate="visible"
					>
						<div className="text-lg font-bold w-1/5">
							<img
								src={Logo}
								alt="SWBlends Logo"
								className="md:max-h-24 md:max-w-24 cursor-pointer max-h-16 max-w-16"
								onClick={() => smoothScroll("#home")}
							/>
						</div>
						{/* Hamburger Menu Icon for Mobile */}
						<div className="md:hidden flex justify-end">
							<button
								onClick={() => setIsMenuOpen(!isMenuOpen)}
								className="focus:outline-none text-accent text-3xl flex items-center"
							>
								{isMenuOpen ? <CloseIcon /> : <MenuIcon />}
							</button>
						</div>

						{/* Desktop Menu */}
						<div className="hidden md:flex gap-12 rounded-full py-3 px-6 items-center justify-center w-3/5">
							<div className="flex bg-[#22212E] border-slate-600 border gap-12 rounded-full py-3 px-6">
								<motion.a
									onClick={() => smoothScroll("#services")}
									className="hover:text-slate-400 transition duration-200 cursor-pointer"
									variants={fadeInVariants(0.35)}
									initial="hidden"
									animate="visible"
								>
									Services
								</motion.a>
								<motion.a
									onClick={() => smoothScroll("#gallery")}
									className="hover:text-slate-400 transition duration-200 cursor-pointer"
									variants={fadeInVariants(0.4)}
									initial="hidden"
									animate="visible"
								>
									Gallery
								</motion.a>
								<motion.a
									onClick={() => smoothScroll("#contact")}
									className="hover:text-slate-400 transition duration-200 cursor-pointer"
									variants={fadeInVariants(0.45)}
									initial="hidden"
									animate="visible"
								>
									Contact
								</motion.a>
							</div>
						</div>

						{/* Book Now Button for Desktop */}
						<div className="hidden md:flex w-1/5 justify-end">
							<motion.button
								className="bg-accent text-gray-900 px-6 py-2 rounded-full font-semibold"
								whileHover={{ scale: 1.1, backgroundColor: "#879df5" }}
								transition={{ type: "spring", stiffness: 150 }}
								variants={staggeredVariants(0.4)}
								onClick={() => setIsModalOpen(true)}
							>
								Book Now
							</motion.button>
						</div>
					</motion.nav>

					{/* Mobile Slide-in Menu */}
					<AnimatePresence>
						{isMenuOpen && (
							<motion.div
								initial="hidden"
								animate="visible"
								exit="exit"
								variants={slideInVariants}
								className="fixed top-0 right-0 bottom-0 w-3/5 bg-gray-800 p-6"
							>
								<div className="flex flex-col items-end gap-6 ">
									<button
										onClick={() => setIsMenuOpen(!isMenuOpen)}
										className="focus:outline-none text-accent text-3xl "
									>
										{isMenuOpen ? <CloseIcon /> : <MenuIcon />}
									</button>
									<motion.a
										onClick={() => smoothScroll("#services")}
										className="text-accent hover:text-slate-400 transition duration-200 cursor-pointer text-2xl"
									>
										Services
									</motion.a>
									<motion.a
										onClick={() => smoothScroll("#gallery")}
										className="text-accent hover:text-slate-400 transition duration-200 cursor-pointer text-2xl"
									>
										Gallery
									</motion.a>
									<motion.a
										onClick={() => smoothScroll("#contact")}
										className="text-accent hover:text-slate-400 transition duration-200 cursor-pointer text-2xl"
									>
										Contact
									</motion.a>
									<motion.button
										className="bg-accent text-gray-900 px-6 py-2 rounded-full font-semibold mt-4 block text-center"
										whileHover={{ scale: 1.1, backgroundColor: "#879df5" }}
										transition={{ type: "spring", stiffness: 150 }}
										onClick={() => setIsModalOpen(true)}
									>
										Book Now
									</motion.button>
								</div>
							</motion.div>
						)}
					</AnimatePresence>

					{/* Hero Section */}
					<motion.div
						id="home"
						className="text-center pt-72 mb-16 px-6 max-w-3xl mx-auto"
						variants={staggeredVariants(0.6)}
						initial="hidden"
						animate="visible"
					>
						<h1 className="text-5xl font-extrabold mb-4 leading-tight">
							Crafting Styles, <span className="text-accent">Confidently</span>
						</h1>
						<p className="text-lg text-gray-400 max-w-lg mx-auto mb-10">
							Premium barbering services for gentlemen looking for a clean, sharp look. SWBlends provides top-notch
							styles and shaves with finesse.
						</p>
						<div className="flex justify-center space-x-4">
							<motion.button
								className="border border-accent text-accent px-6 py-2 rounded-full font-semibold"
								whileHover={{ scale: 1.1, backgroundColor: "#7692FF", color: "#111827" }}
								transition={{ type: "spring", stiffness: 150 }}
								onClick={() => setIsModalOpen(true)}
							>
								Book Now
							</motion.button>
						</div>
					</motion.div>

					{/* Services Section */}
					<motion.div
						className="pt-24 px-6 max-w-6xl text-center"
						id="services"
						variants={staggeredVariants(0.75)}
						initial="hidden"
						animate="visible"
					>
						<h2 className="text-3xl font-bold mb-8">Our Services</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							<motion.div
								className="bg-gray-800 rounded-lg p-6"
								variants={staggeredVariants(0.8)}
								initial="hidden"
								animate="visible"
							>
								<h3 className="text-xl font-semibold mb-2 text-accent">Classic Haircut</h3>
								<p className="text-gray-400">A timeless look for any occasion.</p>
							</motion.div>
							<motion.div
								className="bg-gray-800 rounded-lg p-6"
								variants={staggeredVariants(0.85)}
								initial="hidden"
								animate="visible"
							>
								<h3 className="text-xl font-semibold mb-2 text-accent">Beard Trim & Shape</h3>
								<p className="text-gray-400">Perfectly groomed beard tailored to your style.</p>
							</motion.div>
							<motion.div
								className="bg-gray-800 rounded-lg p-6"
								variants={staggeredVariants(0.9)}
								initial="hidden"
								animate="visible"
							>
								<h3 className="text-xl font-semibold mb-2 text-accent">Modern Fade</h3>
								<p className="text-gray-400">Stay sharp with a stylish fade and precise lines.</p>
							</motion.div>
						</div>
					</motion.div>

					{/* Gallery Section */}
					<motion.div
						className="pt-24 px-6 max-w-6xl text-center"
						id="gallery"
						variants={staggeredVariants(0.75)}
						initial="hidden"
						animate="visible"
					>
						<h2 className="text-3xl font-bold mb-8">Gallery</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							<motion.div
								className="bg-gray-800 rounded-lg overflow-hidden p-4"
								variants={staggeredVariants(0.8)}
								initial="hidden"
								animate="visible"
							>
								<img src={Client1} alt="Client 1 Haircut" className="w-full h-96 object-cover rounded-lg" />
							</motion.div>
							<motion.div
								className="bg-gray-800 rounded-lg overflow-hidden p-4"
								variants={staggeredVariants(0.9)}
								initial="hidden"
								animate="visible"
							>
								<img src={Client2} alt="Client 2 Haircut" className="w-full h-96 object-cover rounded-lg" />
							</motion.div>
							<motion.div
								className="bg-gray-800 rounded-lg overflow-hidden p-4"
								variants={staggeredVariants(1.0)}
								initial="hidden"
								animate="visible"
							>
								<img src={Client3} alt="Client 3 Haircut" className="w-full h-96 object-cover rounded-lg" />
							</motion.div>
						</div>
					</motion.div>

					{/* Testimonials Section */}
					<motion.div
						className="pt-24 px-6 max-w-4xl text-center"
						id="testimonials"
						variants={staggeredVariants(1.1)}
						initial="hidden"
						animate="visible"
					>
						<h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
						<p className="text-gray-400">Hear from some of our satisfied customers.</p>
						<div className="mt-8 flex flex-col lg:flex-row gap-8">
							<div className="bg-gray-800 p-6 rounded-lg max-w-96">
								<p>"Best barber experience I've had. Loved the scissor cut!"</p>
								<p className="text-accent font-semibold mt-2">– Oisin D</p>
							</div>
							<div className="bg-gray-800 p-6 rounded-lg max-w-96">
								<p>"Amazing service and quality cuts. I always leave feeling fresh and confident."</p>
								<p className="text-accent font-semibold mt-2">– Leo B</p>
							</div>
						</div>
					</motion.div>

					{/* Contact Section */}
					<motion.div
						className="mt-16 px-6 max-w-6xl text-center"
						id="contact"
						variants={staggeredVariants(1.2)}
						initial="hidden"
						animate="visible"
					>
						<h2 className="text-3xl font-bold mb-4">Contact Us</h2>
						<p className="text-gray-400 mb-2">SWBlends Barbershop</p>
						<p className="text-gray-400">16 Laurence Street Manly</p>
						<p className="text-gray-400">Sydney, Australia</p>
						<p className="text-gray-400">
							Phone:{" "}
							<a href="tel:+61420352509" className="hover:text-white transition duration-200">
								+61420352509
							</a>
						</p>
						<p className="text-gray-400">
							Email:{" "}
							<a href="mailto:contact@swblends.com" className="hover:text-white transition duration-200">
								contact@swblends.com
							</a>
						</p>
					</motion.div>

					{/* Footer */}
					<motion.footer
						className="w-full mt-16 py-8 bg-gray-800"
						variants={staggeredVariants(1.4)}
						initial="hidden"
						animate="visible"
					>
						<div className="flex flex-col md:flex-row justify-between items-center max-w-6xl px-6 mx-auto text-gray-400">
							<p>&copy; 2024 SWBlends. All rights reserved.</p>
							<div className="flex space-x-6 mt-4 md:mt-0">
								<a href="#services" className="hover:underline">
									Services
								</a>
								<a href="#gallery" className="hover:underline">
									Gallery
								</a>
								<a href="#contact" className="hover:underline">
									Contact
								</a>
							</div>
						</div>
					</motion.footer>
				</>
			)}
			<Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
		</div>
	);
}

export default App;
