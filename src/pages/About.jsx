import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Scissors, Users, Clock, Coffee, MapPin } from "lucide-react";
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
		<MapContainer center={manlyPosition} zoom={15} style={{ height: "100%", width: "100%", minHeight: "300px" }}>
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

const About = () => {
	return (
		<>
			<Helmet>
				<title>About Us | SW Blends Barbershop</title>
				<meta
					name="description"
					content="Learn about SW Blends, our barbers, and our commitment to providing premium haircuts and grooming services in Manly, Sydney."
				/>
			</Helmet>

			{/* Hero Section */}
			<section className="bg-base-200 py-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="text-center"
					>
						<h1 className="text-4xl font-bold text-base-content">About SW Blends</h1>
						<p className="mt-4 text-xl text-base-content opacity-70 max-w-3xl mx-auto">
							Where traditional barbering meets modern style
						</p>
					</motion.div>
				</div>
			</section>

			{/* Story Section */}
			<section className="py-12 bg-base-100">
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
								Our Story
							</motion.h2>

							<motion.p variants={itemVariants} className="mt-4 text-base-content opacity-80">
								SW Blends was founded by Sander Woodward in 2023 with a vision to create more than just another barbershop
								in Manly. Sander set out to establish a destination where men could not only get exceptional haircuts but
								also experience a sense of community and relaxation.
							</motion.p>

							<motion.p variants={itemVariants} className="mt-4 text-base-content opacity-80">
								What began as a small operation quickly grew into a local favorite thanks to Sander's commitment to quality
								cuts, personalized service, and creating an atmosphere where clients feel like friends. Today, Sander
								Woodward serves the Manly community from two locations, while maintaining the same dedication to craft and
								experience that defined it from day one.
							</motion.p>

							<motion.p variants={itemVariants} className="mt-4 text-base-content opacity-80">
								The name, SW Blends, represents both Sander's initials and the seamless blend of traditional barbering
								techniques with contemporary styles – a philosophy that guides every cut he delivers.
							</motion.p>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Values Section */}
			<section className="py-12 bg-base-200">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="text-center mb-12"
					>
						<h2 className="text-3xl font-bold text-base-content">Our Values</h2>
						<p className="mt-4 text-base-content opacity-70 max-w-2xl mx-auto">The principles that guide our work</p>
					</motion.div>

					<motion.div
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
					>
						{/* Value 1 */}
						<motion.div variants={itemVariants} className="card bg-base-100 shadow-sm">
							<div className="card-body items-center text-center">
								<div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4">
									<Scissors size={32} className="text-primary-content" />
								</div>
								<h3 className="card-title text-base-content">Craftsmanship</h3>
								<p className="text-base-content opacity-70">
									We're committed to excellence in our craft, continuously honing our skills and techniques to deliver the
									best cuts possible.
								</p>
							</div>
						</motion.div>

						{/* Value 2 */}
						<motion.div variants={itemVariants} className="card bg-base-100 shadow-sm">
							<div className="card-body items-center text-center">
								<div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
									<Clock size={32} className="text-secondary-content" />
								</div>
								<h3 className="card-title text-base-content">Attention to Detail</h3>
								<p className="text-base-content opacity-70">
									We believe the difference between a good haircut and a great one lies in the details. We take the time
									to get every aspect right.
								</p>
							</div>
						</motion.div>

						{/* Value 3 */}
						<motion.div variants={itemVariants} className="card bg-base-100 shadow-sm">
							<div className="card-body items-center text-center">
								<div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-4">
									<Users size={32} className="text-accent-content" />
								</div>
								<h3 className="card-title text-base-content">Community</h3>
								<p className="text-base-content opacity-70">
									We're more than a business – we're part of the Manly community, creating a space where connections are
									made and strengthened.
								</p>
							</div>
						</motion.div>

						{/* Value 4 */}
						<motion.div variants={itemVariants} className="card bg-base-100 shadow-sm">
							<div className="card-body items-center text-center">
								<div className="w-16 h-16 rounded-full bg-info flex items-center justify-center mb-4">
									<Coffee size={32} className="text-info-content" />
								</div>
								<h3 className="card-title text-base-content">Experience</h3>
								<p className="text-base-content opacity-70">
									We believe a visit to the barbershop should be an experience – a time to relax, socialize, and leave
									feeling and looking your best.
								</p>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* Team Section */}
			<section className="py-12 bg-base-100">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="text-center mb-12"
					>
						<h2 className="text-3xl font-bold text-base-content">Meet The Barber</h2>
						<p className="mt-4 text-base-content opacity-70 max-w-2xl mx-auto">
							The skilled professional behind your great cuts
						</p>
					</motion.div>

					<motion.div
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						className="max-w-3xl mx-auto"
					>
						{/* Barber */}
						<motion.div variants={itemVariants} className="card lg:card-side bg-base-200 shadow-sm">
							<figure className="lg:w-1/3">
								<div className="h-full w-full bg-base-300"></div>
							</figure>
							<div className="card-body lg:w-2/3">
								<h3 className="card-title text-base-content">Sander Woodward</h3>
								<div className="badge badge-primary mb-2">Founder & Master Barber</div>
								<p className="text-base-content opacity-80">
									With multiple years of experience in barbering, Sander founded SW Blends to create a destination that
									blends traditional techniques with modern styles. His precision, attention to detail, and commitment to
									client satisfaction have made him one of Manly's most sought-after barbers.
								</p>
								<p className="text-base-content opacity-80 mt-2">
									Sander specializes in all types of men's cuts, from classic styles to modern fades, and is particularly
									known for his expert designs and styling. Every client receives his undivided attention and expertise
									for a truly personalized experience.
								</p>
								<div className="card-actions justify-end mt-4">
									<a
										href="https://trybe.au/swblends"
										target="_blank"
										rel="noopener noreferrer"
										className="btn btn-primary"
									>
										Book with Sander
									</a>
								</div>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* Locations Section */}
			<section className="py-12 bg-base-200">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="text-center mb-12"
					>
						<h2 className="text-3xl font-bold text-base-content">Our Locations</h2>
						<p className="mt-4 text-base-content opacity-70 max-w-2xl mx-auto">Find us in two convenient locations in Manly</p>
					</motion.div>

					<motion.div
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						className="grid grid-cols-1 md:grid-cols-2 gap-8"
					>
						{/* Location 1 */}
						<motion.div variants={itemVariants} className="card bg-base-100 shadow-sm">
							<div className="card-body">
								<h3 className="card-title text-base-content">Main Shop</h3>
								<div className="mt-2 mb-4">
									<div className="flex items-center mb-2">
										<MapPin size={18} className="text-primary mr-2" />
										<p className="text-base-content font-medium">16 Laurence Street, Manly, Sydney, NSW</p>
									</div>
									<div className="flex items-center">
										<Clock size={18} className="text-primary mr-2" />
										<p className="text-base-content opacity-80">Fri: 4pm-7pm, Mon-Thur: Closed, Sat-Sun: Closed</p>
									</div>
								</div>
								<p className="text-base-content opacity-80 mb-4">
									Our original location offers a relaxed atmosphere with the classic barbershop experience. Comfortable
									seating, quality cuts, and friendly conversation make this a Manly favorite.
								</p>
								<div className="h-48 rounded-box overflow-hidden bg-base-300">
									<LocationsMap />
								</div>
								<div className="card-actions justify-end mt-4">
									<a
										href="https://trybe.au/swblends"
										target="_blank"
										rel="noopener noreferrer"
										className="btn btn-primary"
									>
										Book at Main Shop
									</a>
								</div>
							</div>
						</motion.div>

						{/* Location 2 */}
						<motion.div variants={itemVariants} className="card bg-base-100 shadow-sm">
							<div className="card-body">
								<h3 className="card-title text-base-content">barXbar</h3>
								<div className="mt-2 mb-4">
									<div className="flex items-center mb-2">
										<MapPin size={18} className="text-secondary mr-2" />
										<p className="text-base-content font-medium">11-25 Wentworth Street, Manly, Sydney, NSW</p>
									</div>
									<div className="flex items-center">
										<Clock size={18} className="text-secondary mr-2" />
										<p className="text-base-content opacity-80">
											Mon-Wed: 9:30am-6pm, Thu: 9:30am-8pm, Fri: 8:30am-5pm, Sat: 7:30am-4pm, Sun: 9:30am-2:30pm
										</p>
									</div>
								</div>
								<p className="text-base-content opacity-80 mb-4">
									Our barXbar location combines great cuts with a vibrant atmosphere. Get a fresh look in this unique
									setting that brings together quality barbering and Manly's social scene.
								</p>
								<div className="h-48 rounded-box overflow-hidden bg-base-300">
									<LocationsMap />
								</div>
								<div className="card-actions justify-end mt-4">
									<a
										href="https://www.fresha.com/a/bar-x-bar-pty-ltd-manly-11-25-wentworth-street-svwlgcbn"
										target="_blank"
										rel="noopener noreferrer"
										className="btn btn-secondary"
									>
										Book at barXbar
									</a>
								</div>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className="py-12 bg-base-100">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="text-center mb-12"
					>
						<h2 className="text-3xl font-bold text-base-content">Frequently Asked Questions</h2>
						<p className="mt-4 text-base-content opacity-70 max-w-2xl mx-auto">Common questions about our services</p>
					</motion.div>

					<motion.div
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						className="max-w-3xl mx-auto"
					>
						<div className="space-y-4">
							{[
								{
									question: "Do I need to make an appointment?",
									answer: "While we accept walk-ins when possible, we recommend booking an appointment to ensure you get your preferred time and barber. Our weekend slots fill up quickly!",
								},
								{
									question: "How long does a typical haircut take?",
									answer: "Most of our standard haircuts take around 30-45 minutes, depending on the style and complexity. Beard services typically take 30 minutes.",
								},
								{
									question: "What's the difference between your two locations?",
									answer: "Our Main Shop offers a traditional barbershop experience in a relaxed environment. The barXbar location brings our services to a vibrant social setting for a unique experience.",
								},
								{
									question: "Do you offer any student discounts?",
									answer: "Yes, we offer our High School Cut service which is specially priced for students. Just bring your student ID when you visit.",
								},
							].map((faq, index) => (
								<motion.div key={index} variants={itemVariants} className="collapse collapse-arrow bg-base-200 shadow-sm">
									<input type="radio" name="faq-accordion" />
									<div className="collapse-title text-xl font-medium text-base-content">{faq.question}</div>
									<div className="collapse-content text-base-content opacity-80">
										<p>{faq.answer}</p>
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</section>

			{/* CTA Section */}
			<CTASection />
		</>
	);
};

export default About;
