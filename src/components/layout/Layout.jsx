// Layout.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Scissors } from "lucide-react";
import { AnimatePresence } from "framer-motion";

const navigation = [
	{ name: "Home", path: "/" },
	{ name: "Services", path: "/services" },
	{ name: "About", path: "/about" },
	{ name: "Booking", path: "/booking" },
	{ name: "Gallery", path: "/gallery" },
	{ name: "Contact", path: "/contact" },
];

const Layout = ({ children }) => {
	const location = useLocation();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="flex flex-col min-h-screen bg-base-100" data-theme="nord">
			<header className="bg-base-200 shadow-sm">
				<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between h-16">
						<div className="flex items-center">
							<Link to="/" className="flex-shrink-0 flex items-center">
								<Scissors className="h-6 w-6 text-primary mr-2" />
								<span className="text-xl font-bold text-primary">SW Blends</span>
							</Link>
						</div>

						{/* Desktop menu */}
						<div className="hidden md:flex items-center space-x-4">
							{navigation.map((item) => (
								<NavLink
									key={item.name}
									to={item.path}
									className={({ isActive }) =>
										`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
											isActive ? "bg-primary text-primary-content" : "text-base-content hover:bg-base-300"
										}`
									}
								>
									{item.name}
								</NavLink>
							))}
						</div>

						{/* Mobile menu button */}
						<div className="flex md:hidden items-center">
							<button
								onClick={() => setIsOpen(!isOpen)}
								className="inline-flex items-center justify-center p-2 rounded-md text-base-content hover:text-primary hover:bg-base-300 focus:outline-none"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								{isOpen ? <X size={24} /> : <Menu size={24} />}
							</button>
						</div>
					</div>
				</nav>

				{/* Mobile menu */}
				<AnimatePresence>
					{isOpen && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							transition={{ duration: 0.2 }}
							className="md:hidden bg-base-100"
						>
							<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
								{navigation.map((item) => (
									<NavLink
										key={item.name}
										to={item.path}
										onClick={() => setIsOpen(false)}
										className={({ isActive }) =>
											`block px-3 py-2 rounded-md text-base font-medium ${
												isActive ? "bg-primary text-primary-content" : "text-base-content hover:bg-base-300"
											}`
										}
									>
										{item.name}
									</NavLink>
								))}
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</header>

			<motion.main
				key={location.pathname}
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: -20 }}
				transition={{ duration: 0.3 }}
				className="flex-grow"
			>
				{children}
			</motion.main>

			<footer className="bg-neutral text-neutral-content">
				<div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div>
							<h3 className="text-xl font-bold mb-4">SW Blends</h3>
							<p className="text-neutral-content opacity-80">Premium barbershop in Manly, Sydney.</p>
						</div>

						<div>
							<h3 className="text-lg font-semibold mb-4">Contact Information</h3>
							<ul className="space-y-2 text-neutral-content opacity-80">
								<li className="flex items-center">
									<span>16 Laurence Street Manly, Sydney, NSW</span>
								</li>
								<li className="flex items-center">
									<a href="mailto:contact@swblends.com" className="hover:text-white">
										contact@swblends.com
									</a>
								</li>
							</ul>
						</div>

						<div>
							<h3 className="text-lg font-semibold mb-4">Book Now</h3>
							<ul className="space-y-2 text-neutral-content opacity-80">
								<li>
									<a
										href="https://trybe.au/swblends"
										target="_blank"
										rel="noopener noreferrer"
										className="hover:text-white"
									>
										Book at Home
									</a>
								</li>
								<li>
									<a
										href="https://www.fresha.com/a/bar-x-bar-pty-ltd-manly-11-25-wentworth-street-svwlgcbn"
										target="_blank"
										rel="noopener noreferrer"
										className="hover:text-white"
									>
										Book at barXbar
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div className="mt-8 border-t border-neutral-content border-opacity-20 pt-8">
						<p className="text-neutral-content opacity-60 text-sm text-center">
							© {new Date().getFullYear()} SW Blends. All rights reserved.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Layout;
