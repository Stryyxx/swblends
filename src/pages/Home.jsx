import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, MapPin, Scissors, Coffee, Users } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for the missing default icon in Leaflet
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIconRetina from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import CTASection from "../components/sections/CTASection";

// Set up the default icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
	iconRetinaUrl: markerIconRetina,
	iconUrl: markerIcon,
	shadowUrl: markerShadow,
});

// Animation variants
const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const itemVariants = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
		},
	},
};

// Locations Map Component
const LocationsMap = () => {
	// Manly, Sydney coordinates (center of map)
	const manlyPosition = [-33.797040371278634, 151.28360757273393]; // Approximate center of Manly

	// Our two locations
	const mainShopPosition = [-33.797605883494896, 151.2784535445087]; // Approximate for 16 Laurence Street
	const barXbarPosition = [-33.7983078888148, 151.28761299686425]; // Approximate for 11-25 Wentworth Street

	return (
		<MapContainer center={manlyPosition} zoom={15} style={{ height: "100%", width: "100%", minHeight: "250px" }}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>

			{/* Main Shop Marker */}
			<Marker position={mainShopPosition}>
				<Popup>
					<div className="p-1">
						<h3 className="font-bold text-base">Main Shop</h3>
						<p className="text-sm">16 Laurence Street, Manly</p>
						<a
							href="https://trybe.au/swblends"
							target="_blank"
							rel="noopener noreferrer"
							className="text-primary text-sm hover:underline"
						>
							Book with Sander
						</a>
					</div>
				</Popup>
			</Marker>

			{/* barXbar Marker */}
			<Marker position={barXbarPosition}>
				<Popup>
					<div className="p-1">
						<h3 className="font-bold text-base">barXbar</h3>
						<p className="text-sm">11-25 Wentworth Street, Manly</p>
						<a
							href="https://www.fresha.com/a/bar-x-bar-pty-ltd-manly-11-25-wentworth-street-svwlgcbn"
							target="_blank"
							rel="noopener noreferrer"
							className="text-secondary text-sm hover:underline"
						>
							Book here
						</a>
					</div>
				</Popup>
			</Marker>
		</MapContainer>
	);
};

const Home = () => {
	return (
		<>
			<Helmet>
				<title>SW Blends | Premium Barbershop in Manly, Sydney</title>
				<meta
					name="description"
					content="SW Blends offers premium men's haircuts and grooming services in Manly, Sydney. Book your appointment today for a fresh look."
				/>
				<meta property="og:title" content="SW Blends | Premium Barbershop in Manly, Sydney" />
				<meta
					property="og:description"
					content="Premium men's haircuts and grooming services in Manly, Sydney. Book your appointment today."
				/>
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://swblends.com" />
			</Helmet>

			{/* Hero Section */}
			<section className="bg-base-200 py-16 md:py-24">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						className="text-center"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<h1 className="text-4xl font-extrabold tracking-tight text-base-content sm:text-5xl md:text-6xl">
							<span className="block">Classic Cuts.</span>
							<span className="block text-primary">Modern Style.</span>
						</h1>
						<p className="mt-6 max-w-lg mx-auto text-xl text-base-content opacity-80 sm:max-w-2xl">
							Experience premium barbering in the heart of Manly, Sydney. Where tradition meets contemporary style.
						</p>
						<div className="mt-10 sm:flex sm:justify-center">
							<div className="rounded-box">
								<a
									href="https://trybe.au/swblends"
									target="_blank"
									rel="noopener noreferrer"
									className="btn btn-primary btn-lg"
								>
									Book Now
								</a>
							</div>
							<div className="mt-3 sm:mt-0 sm:ml-3">
								<Link to="/services" className="btn btn-outline btn-primary btn-lg">
									Our Services
								</Link>
							</div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Featured Services Section */}
			<section className="py-12 bg-base-100">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.2 }}
						variants={containerVariants}
						className="text-center mb-12"
					>
						<motion.h2 variants={itemVariants} className="text-3xl font-extrabold text-base-content">
							Our Signature Cuts
						</motion.h2>
						<motion.p variants={itemVariants} className="mt-4 max-w-2xl text-xl text-base-content opacity-70 mx-auto">
							Precision cuts tailored to your style
						</motion.p>
					</motion.div>

					<motion.div
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.1 }}
						className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
					>
						{/* Service Card 1 */}
						<motion.div variants={itemVariants}>
							<div className="card bg-base-200 hover:shadow-lg transition-shadow duration-300">
								<figure className="h-48 bg-base-300"></figure>
								<div className="card-body">
									<h3 className="card-title text-base-content">Classic Cut</h3>
									<p className="text-base-content opacity-70">
										Traditional barbering with modern techniques for a timeless look.
									</p>
									<div className="card-actions justify-end">
										<Link to="/services" className="btn btn-sm btn-primary">
											Learn more
										</Link>
									</div>
								</div>
							</div>
						</motion.div>

						{/* Service Card 2 */}
						<motion.div variants={itemVariants}>
							<div className="card bg-base-200 hover:shadow-lg transition-shadow duration-300">
								<figure className="h-48 bg-base-300"></figure>
								<div className="card-body">
									<h3 className="card-title text-base-content">Fade & Beard Trim</h3>
									<p className="text-base-content opacity-70">
										Precision fades paired with expert beard shaping for a clean, sharp look.
									</p>
									<div className="card-actions justify-end">
										<Link to="/services" className="btn btn-sm btn-primary">
											Learn more
										</Link>
									</div>
								</div>
							</div>
						</motion.div>

						{/* Service Card 3 */}
						<motion.div variants={itemVariants}>
							<div className="card bg-base-200 hover:shadow-lg transition-shadow duration-300">
								<figure className="h-48 bg-base-300"></figure>
								<div className="card-body">
									<h3 className="card-title text-base-content">Signature Style</h3>
									<p className="text-base-content opacity-70">
										Full service cut, style and grooming experience for the modern gentleman.
									</p>
									<div className="card-actions justify-end">
										<Link to="/services" className="btn btn-sm btn-primary">
											Learn more
										</Link>
									</div>
								</div>
							</div>
						</motion.div>
					</motion.div>

					<motion.div
						variants={itemVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						className="text-center mt-12"
					>
						<Link to="/services" className="btn btn-secondary">
							View All Services
						</Link>
					</motion.div>
				</div>
			</section>

			{/* About Section */}
			<section className="py-12 bg-base-200">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="lg:flex lg:items-center lg:gap-12">
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="lg:w-1/2"
						>
							<div className="aspect-[4/3] bg-base-300 rounded-box"></div>
						</motion.div>

						<motion.div
							variants={containerVariants}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							className="mt-8 lg:mt-0 lg:w-1/2"
						>
							<motion.h2 variants={itemVariants} className="text-3xl font-bold text-base-content">
								About SW Blends
							</motion.h2>

							<motion.p variants={itemVariants} className="mt-4 text-base-content opacity-80">
								SW Blends is more than just a barbershop – it's a destination for men who appreciate quality grooming in a
								relaxed, contemporary environment. Founded by master barber Sander Woodward on the principles of exceptional
								craftsmanship and personalized service, SW Blends has quickly become Manly's go-to spot for premium cuts and
								styling.
							</motion.p>

							<motion.p variants={itemVariants} className="mt-4 text-base-content opacity-80">
								With his skilled approach and attention to detail, Sander combines traditional techniques with modern trends
								to create looks that are both timeless and fresh. Whether you're in for a quick trim or a complete style
								transformation, he's dedicated to delivering a result that exceeds your expectations.
							</motion.p>

							<motion.div variants={itemVariants} className="mt-6">
								<Link to="/about" className="btn btn-primary">
									Learn More About Us
								</Link>
							</motion.div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="py-12 bg-base-100">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={containerVariants}
						className="text-center mb-12"
					>
						<motion.h2 variants={itemVariants} className="text-3xl font-extrabold text-base-content">
							What Our Clients Say
						</motion.h2>
						<motion.p variants={itemVariants} className="mt-4 max-w-2xl text-xl text-base-content opacity-70 mx-auto">
							Real reviews from satisfied customers
						</motion.p>
					</motion.div>

					<motion.div
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.1 }}
						className="grid grid-cols-1 gap-8 md:grid-cols-2"
					>
						{/* Testimonial 1 */}
						<motion.div variants={itemVariants}>
							<div className="card bg-base-200 shadow">
								<div className="card-body">
									<div className="flex items-center mb-4">
										<div className="avatar placeholder mr-4">
											<div className="bg-primary text-primary-content rounded-full w-12">
												<span>MJ</span>
											</div>
										</div>
										<div>
											<p className="font-medium text-base-content">Mike J.</p>
											<div className="flex mt-1">
												{[...Array(5)].map((_, i) => (
													<svg
														key={i}
														xmlns="http://www.w3.org/2000/svg"
														className="h-4 w-4 text-warning fill-current"
														viewBox="0 0 20 20"
													>
														<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
													</svg>
												))}
											</div>
										</div>
									</div>
									<p className="text-base-content opacity-80">
										"Found my go-to barber in Manly. The attention to detail Sander provides at SW Blends is unmatched.
										He took the time to understand exactly what I wanted and delivered perfectly."
									</p>
								</div>
							</div>
						</motion.div>

						{/* Testimonial 2 */}
						<motion.div variants={itemVariants}>
							<div className="card bg-base-200 shadow h-full">
								<div className="card-body">
									<div className="flex items-center mb-4">
										<div className="avatar placeholder mr-4">
											<div className="bg-secondary text-secondary-content rounded-full w-12">
												<span>DS</span>
											</div>
										</div>
										<div>
											<p className="font-medium text-base-content">David S.</p>
											<div className="flex mt-1">
												{[...Array(5)].map((_, i) => (
													<svg
														key={i}
														xmlns="http://www.w3.org/2000/svg"
														className="h-4 w-4 text-warning fill-current"
														viewBox="0 0 20 20"
													>
														<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
													</svg>
												))}
											</div>
										</div>
									</div>
									<p className="text-base-content opacity-80">
										"Great atmosphere, skilled barbers, and always consistent results. The barXbar location is perfect
										for grabbing a drink after a fresh cut. Highly recommend!"
									</p>
								</div>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* Location Section */}
			<section className="py-12 bg-base-200">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={containerVariants}
						className="text-center mb-12"
					>
						<motion.h2 variants={itemVariants} className="text-3xl font-extrabold text-base-content">
							Find Us
						</motion.h2>
						<motion.p variants={itemVariants} className="mt-4 max-w-2xl text-xl text-base-content opacity-70 mx-auto">
							Two convenient locations in Manly
						</motion.p>
					</motion.div>

					<motion.div
						variants={itemVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						className="card bg-base-100 shadow-md"
					>
						<div className="card-body">
							<div className="flex items-center mb-4">
								<MapPin size={24} className="text-primary mr-2" />
								<h3 className="card-title">Our Locations</h3>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div className="p-4 bg-base-200 rounded-box">
									<h4 className="font-semibold text-lg mb-2">Main Shop</h4>
									<p className="text-base-content opacity-80 mb-4">16 Laurence Street Manly, Sydney, NSW</p>
									<a
										href="https://trybe.au/swblends"
										target="_blank"
										rel="noopener noreferrer"
										className="btn btn-sm btn-primary"
									>
										Book at Main Shop
									</a>
								</div>

								<div className="p-4 bg-base-200 rounded-box">
									<h4 className="font-semibold text-lg mb-2">barXbar</h4>
									<p className="text-base-content opacity-80 mb-4">11-25 Wentworth Street, Manly</p>
									<a
										href="https://www.fresha.com/a/bar-x-bar-pty-ltd-manly-11-25-wentworth-street-svwlgcbn"
										target="_blank"
										rel="noopener noreferrer"
										className="btn btn-sm btn-secondary"
									>
										Book at barXbar
									</a>
								</div>
							</div>

							<div className="mt-6 h-64 rounded-box overflow-hidden">
								<LocationsMap />
							</div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Unique Features Section */}
			<section className="py-12 bg-base-100">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={containerVariants}
						className="text-center mb-12"
					>
						<motion.h2 variants={itemVariants} className="text-3xl font-extrabold text-base-content">
							The SW Blends Experience
						</motion.h2>
						<motion.p variants={itemVariants} className="mt-4 max-w-2xl text-xl text-base-content opacity-70 mx-auto">
							What sets us apart
						</motion.p>
					</motion.div>

					<motion.div
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						className="grid grid-cols-1 md:grid-cols-3 gap-6"
					>
						<motion.div variants={itemVariants} className="card bg-base-200">
							<div className="card-body items-center text-center">
								<Scissors className="h-12 w-12 text-primary mb-4" />
								<h3 className="card-title">Precision Cuts</h3>
								<p className="text-base-content opacity-70">
									Expert barbers trained in the latest techniques to give you the perfect cut every time.
								</p>
							</div>
						</motion.div>

						<motion.div variants={itemVariants} className="card bg-base-200">
							<div className="card-body items-center text-center">
								<Coffee className="h-12 w-12 text-secondary mb-4" />
								<h3 className="card-title">Premium Experience</h3>
								<p className="text-base-content opacity-70">
									Complimentary beverages and a relaxed atmosphere to enhance your visit.
								</p>
							</div>
						</motion.div>

						<motion.div variants={itemVariants} className="card bg-base-200">
							<div className="card-body items-center text-center">
								<Users className="h-12 w-12 text-accent mb-4" />
								<h3 className="card-title">Community</h3>
								<p className="text-base-content opacity-70">
									A welcoming space where locals connect and everyone leaves looking their best.
								</p>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* CTA Section */}
			<CTASection />
		</>
	);
};

export default Home;
