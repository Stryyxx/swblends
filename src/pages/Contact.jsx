import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, ExternalLink, Instagram, Clock } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for the missing default icon in Leaflet
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIconRetina from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import CTASection from "../components/sections/CTASection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";

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
		<MapContainer center={manlyPosition} zoom={15} style={{ height: "100%", width: "100%", minHeight: "400px" }}>
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

const Contact = () => {
	return (
		<>
			<Helmet>
				<title>Contact Us | SW Blends Barbershop</title>
				<meta
					name="description"
					content="Get in touch with SW Blends Barbershop. Find our locations in Manly, Sydney and book your appointment today."
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
						<h1 className="text-4xl font-bold text-base-content">Contact Us</h1>
						<p className="mt-4 text-xl text-base-content opacity-70 max-w-3xl mx-auto">
							Get in touch or book your next appointment at one of our Manly locations
						</p>
					</motion.div>
				</div>
			</section>

			{/* Contact Information Section */}
			<section className="py-12 bg-base-100">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						variants={containerVariants}
						initial="hidden"
						animate="visible"
						className="grid grid-cols-1 lg:grid-cols-2 gap-8"
					>
						{/* Contact Details */}
						<motion.div variants={itemVariants} className="card bg-base-200 shadow-sm">
							<div className="card-body">
								<h2 className="card-title text-2xl text-base-content mb-6">Get In Touch</h2>
								<div className="space-y-6">
									<div className="flex items-start">
										<Mail className="w-6 h-6 text-primary mt-1 mr-4" />
										<div>
											<h3 className="font-medium text-base-content">Email</h3>
											<a href="mailto:contact@swblends.com" className="text-primary hover:underline">
												contact@swblends.com
											</a>
										</div>
									</div>

									<div className="flex items-start">
										<Phone className="w-6 h-6 text-primary mt-1 mr-4" />
										<div>
											<h3 className="font-medium text-base-content">Phone</h3>
											<p className="text-base-content opacity-80">Please email for phone details</p>
										</div>
									</div>

									<div className="flex items-start">
										<MapPin className="w-6 h-6 text-primary mt-1 mr-4" />
										<div>
											<h3 className="font-medium text-base-content">Main Shop Location</h3>
											<p className="text-base-content opacity-80">16 Laurence Street</p>
											<p className="text-base-content opacity-80">Manly, Sydney, NSW</p>
										</div>
									</div>

									<div className="flex items-start">
										<MapPin className="w-6 h-6 text-secondary mt-1 mr-4" />
										<div>
											<h3 className="font-medium text-base-content">barXbar Location</h3>
											<p className="text-base-content opacity-80">11-25 Wentworth Street</p>
											<p className="text-base-content opacity-80">Manly, Sydney, NSW</p>
										</div>
									</div>
								</div>

								<div className="divider my-6">Social Media</div>

								<div className="flex space-x-4">
									<a
										href="https://instagram.com/sw_blends_/"
										target="_blank"
										rel="noopener noreferrer"
										className="btn btn-outline btn-primary"
									>
										<Instagram className="w-5 h-5 mr-2" />
										Instagram
									</a>
									<a
										href="https://www.tiktok.com/@sw.blends"
										target="_blank"
										rel="noopener noreferrer"
										className="btn btn-outline btn-primary"
									>
										<FontAwesomeIcon icon={faTiktok} className="w-7 h-7 mr-1" />
										TikTok
									</a>
								</div>

								<div className="divider my-6">Book Your Appointment</div>

								<div className="space-y-4">
									<div className="flex items-center">
										<ExternalLink className="w-5 h-5 text-primary mr-2" />
										<a
											href="https://trybe.au/swblends"
											target="_blank"
											rel="noopener noreferrer"
											className="text-primary hover:underline"
										>
											Book at Main Shop via Trybe
										</a>
									</div>

									<div className="flex items-center">
										<ExternalLink className="w-5 h-5 text-secondary mr-2" />
										<a
											href="https://www.fresha.com/a/bar-x-bar-pty-ltd-manly-11-25-wentworth-street-svwlgcbn"
											target="_blank"
											rel="noopener noreferrer"
											className="text-secondary hover:underline"
										>
											Book at barXbar via Fresha
										</a>
									</div>
								</div>
							</div>
						</motion.div>

						{/* Map */}
						<motion.div variants={itemVariants} className="card bg-base-200 shadow-sm overflow-hidden">
							<div className="card-body p-0">
								<div className="h-full">
									<LocationsMap />
								</div>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* Hours Section */}
			<section className="py-12 bg-base-200">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="text-center mb-12"
					>
						<h2 className="text-3xl font-bold text-base-content">Business Hours</h2>
						<p className="mt-4 text-base-content opacity-70 max-w-2xl mx-auto">When you can find us at our locations</p>
					</motion.div>

					<motion.div
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						className="max-w-3xl mx-auto"
					>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{/* Main Shop Hours */}
							<motion.div variants={itemVariants} className="card bg-base-100 shadow-sm">
								<div className="card-body">
									<h3 className="card-title text-base-content">Main Shop</h3>
									<div className="overflow-x-auto">
										<table className="table table-zebra w-full">
											<tbody>
												<tr>
													<td className="font-medium">Monday</td>
													<td>Closed</td>
												</tr>
												<tr>
													<td className="font-medium">Tuesday</td>
													<td>Closed</td>
												</tr>
												<tr>
													<td className="font-medium">Wednesday</td>
													<td>Closed</td>
												</tr>
												<tr>
													<td className="font-medium">Thursday</td>
													<td>Closed</td>
												</tr>
												<tr>
													<td className="font-medium">Friday</td>
													<td>4:00 PM - 7:00 PM</td>
												</tr>
												<tr>
													<td className="font-medium">Saturday</td>
													<td>Closed</td>
												</tr>
												<tr>
													<td className="font-medium">Sunday</td>
													<td>Closed</td>
												</tr>
											</tbody>
										</table>
									</div>
									<p className="text-sm text-base-content opacity-70 mt-4">
										* Sander Woodward is the exclusive barber at our Main Shop location
									</p>
								</div>
							</motion.div>

							{/* barXbar Hours */}
							<motion.div variants={itemVariants} className="card bg-base-100 shadow-sm">
								<div className="card-body">
									<h3 className="card-title text-base-content">barXbar</h3>
									<div className="overflow-x-auto">
										<table className="table table-zebra w-full">
											<tbody>
												<tr>
													<td className="font-medium">Monday</td>
													<td>9:30 AM - 6:00 PM</td>
												</tr>
												<tr>
													<td className="font-medium">Tuesday</td>
													<td>9:30 AM - 6:00 PM</td>
												</tr>
												<tr>
													<td className="font-medium">Wednesday</td>
													<td>9:30 AM - 6:00 PM</td>
												</tr>
												<tr>
													<td className="font-medium">Thursday</td>
													<td>9:30 AM - 8:00 PM</td>
												</tr>
												<tr>
													<td className="font-medium">Friday</td>
													<td>8:30 AM - 5:00 PM</td>
												</tr>
												<tr>
													<td className="font-medium">Saturday</td>
													<td>7:30 AM - 4:00 PM</td>
												</tr>
												<tr>
													<td className="font-medium">Sunday</td>
													<td>9:30 AM - 2:30 PM</td>
												</tr>
											</tbody>
										</table>
									</div>
									<p className="text-sm text-base-content opacity-70 mt-4">
										* Hours at barXbar are subject to venue operating hours and availability
									</p>
								</div>
							</motion.div>
						</div>
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
						<h2 className="text-3xl font-bold text-base-content">Common Questions</h2>
						<p className="mt-4 text-base-content opacity-70 max-w-2xl mx-auto">
							Find quick answers to frequently asked questions
						</p>
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
									question: "How do I book an appointment?",
									answer: "You can book appointments through our online booking platforms. For Main Shop appointments with Sander Woodward, use Trybe, and for barXbar appointments, use Fresha. Links to both platforms are available on our website.",
								},
								{
									question: "What should I do if I need to cancel?",
									answer: "If you need to cancel or reschedule your appointment, please do so at least 24 hours in advance through the booking platform you used. For last-minute cancellations, please contact us directly via email.",
								},
								{
									question: "Is parking available?",
									answer: "Limited street parking is available near both locations. We recommend using public transportation when possible, as Manly can get busy, especially during summer months.",
								},
								{
									question: "Do you accept walk-ins?",
									answer: "We primarily operate by appointment to ensure we can provide the best service. However, you're welcome to check for same-day availability through our booking platforms or via email.",
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

export default Contact;
