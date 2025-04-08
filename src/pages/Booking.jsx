import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Calendar, Clock, Info, ArrowRight, Scissors } from "lucide-react";
import CTASection from "../components/sections/CTASection";

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

const Booking = () => {
	return (
		<>
			<Helmet>
				<title>Book an Appointment | SW Blends Barbershop</title>
				<meta
					name="description"
					content="Book your haircut appointment with SW Blends. Choose between our main shop with Sander Woodward or at barXbar for your convenience."
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
						<h1 className="text-4xl font-bold text-base-content">Book Your Appointment</h1>
						<p className="mt-4 text-xl text-base-content opacity-70 max-w-3xl mx-auto">
							Choose your preferred location for a precision cut and style
						</p>
					</motion.div>
				</div>
			</section>

			{/* Booking Options Section */}
			<section className="py-12 bg-base-100">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						variants={containerVariants}
						initial="hidden"
						animate="visible"
						className="grid grid-cols-1 lg:grid-cols-2 gap-8"
					>
						{/* Main Shop Booking */}
						<motion.div
							variants={itemVariants}
							className="card bg-base-200 shadow-md hover:shadow-lg transition-shadow duration-300"
						>
							<div className="card-body">
								<div className="flex items-center mb-2">
									<MapPin className="h-5 w-5 text-primary mr-2" />
									<h3 className="card-title text-base-content">Main Shop</h3>
								</div>

								<p className="text-base-content opacity-80 mb-6">
									Book with Sander Woodward at our original location in Manly. Experience personalized attention and
									precision cuts in a classic barbershop environment.
								</p>

								<div className="space-y-3 mb-6">
									<div className="flex items-center">
										<Calendar className="h-5 w-5 text-primary mr-2" />
										<span className="text-base-content">Available Friday only</span>
									</div>
									<div className="flex items-center">
										<Clock className="h-5 w-5 text-primary mr-2" />
										<span className="text-base-content">4:00 PM - 7:00 PM</span>
									</div>
									<div className="flex items-center">
										<Scissors className="h-5 w-5 text-primary mr-2" />
										<span className="text-base-content">All cuts $30, 30 minutes</span>
									</div>
								</div>

								<div className="divider">Location</div>

								<p className="text-base-content font-medium">
									16 Laurence Street
									<br />
									Manly, Sydney, NSW
								</p>

								<div className="card-actions justify-end mt-6">
									<a
										href="https://trybe.au/swblends"
										target="_blank"
										rel="noopener noreferrer"
										className="btn btn-primary"
									>
										Book with Sander
										<ArrowRight className="ml-2 h-4 w-4" />
									</a>
								</div>
							</div>
						</motion.div>

						{/* barXbar Booking */}
						<motion.div
							variants={itemVariants}
							className="card bg-base-200 shadow-md hover:shadow-lg transition-shadow duration-300"
						>
							<div className="card-body">
								<div className="flex items-center mb-2">
									<MapPin className="h-5 w-5 text-secondary mr-2" />
									<h3 className="card-title text-base-content">barXbar</h3>
								</div>

								<p className="text-base-content opacity-80 mb-6">
									Get your cut at our barXbar location. Experience quality haircuts in the vibrant setting of one of
									Manly's popular establishments.
								</p>

								<div className="space-y-3 mb-6">
									<div className="flex items-center">
										<Calendar className="h-5 w-5 text-secondary mr-2" />
										<span className="text-base-content">Available 7 days a week</span>
									</div>
									<div className="flex items-center">
										<Clock className="h-5 w-5 text-secondary mr-2" />
										<span className="text-base-content">
											Mon-Wed: 9:30am-6pm, Thu: 9:30am-8pm, Fri: 8:30am-5pm, Sat: 7:30am-4pm, Sun: 9:30am-2:30pm
										</span>
									</div>
									<div className="flex items-center">
										<Scissors className="h-5 w-5 text-secondary mr-2" />
										<span className="text-base-content">See our barXbar menu for pricing</span>
									</div>
								</div>

								<div className="divider">Location</div>

								<p className="text-base-content font-medium">
									11-25 Wentworth Street
									<br />
									Manly, Sydney, NSW
								</p>

								<div className="card-actions justify-end mt-6">
									<a
										href="https://www.fresha.com/a/bar-x-bar-pty-ltd-manly-11-25-wentworth-street-svwlgcbn"
										target="_blank"
										rel="noopener noreferrer"
										className="btn btn-secondary"
									>
										Book at barXbar
										<ArrowRight className="ml-2 h-4 w-4" />
									</a>
								</div>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* Services Overview Section */}
			<section className="py-12 bg-base-200">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="text-center mb-12"
					>
						<h2 className="text-3xl font-bold text-base-content">Our Services</h2>
						<p className="mt-4 text-base-content opacity-70 max-w-2xl mx-auto">Quality haircuts for every style</p>
					</motion.div>

					<motion.div
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-3xl mx-auto"
					>
						{/* Main Shop Service Card */}
						<motion.div
							variants={itemVariants}
							className="card bg-base-100 shadow-sm hover:shadow-md transition-shadow duration-300"
						>
							<div className="card-body">
								<h3 className="card-title text-base-content">Main Shop Services</h3>
								<div className="divider mt-0 mb-4"></div>
								<div className="space-y-4">
									<div className="flex justify-between items-center">
										<span className="font-medium">All Haircuts</span>
										<div className="flex flex-col items-end">
											<span className="text-primary font-semibold">$30</span>
											<span className="text-sm text-base-content opacity-70">30 mins</span>
										</div>
									</div>
								</div>
								<p className="text-base-content opacity-70 mt-4">
									All haircuts with Sander Woodward at the Main Shop are the same flat rate. This includes consultation,
									precision cutting, and styling to achieve your desired look.
								</p>
								<div className="card-actions justify-end mt-4">
									<a
										href="https://trybe.au/swblends"
										target="_blank"
										rel="noopener noreferrer"
										className="btn btn-sm btn-primary"
									>
										Book Now
									</a>
								</div>
							</div>
						</motion.div>

						{/* barXbar Service Card */}
						<motion.div
							variants={itemVariants}
							className="card bg-base-100 shadow-sm hover:shadow-md transition-shadow duration-300"
						>
							<div className="card-body">
								<h3 className="card-title text-base-content">barXbar Services</h3>
								<div className="divider mt-0 mb-4"></div>
								<div className="space-y-4">
									<div className="flex justify-between items-center">
										<span className="font-medium">Standard Haircut</span>
										<div className="flex flex-col items-end">
											<span className="text-secondary font-semibold">from $50</span>
											<span className="text-sm text-base-content opacity-70">30-45 mins</span>
										</div>
									</div>
									<div className="flex justify-between items-center">
										<span className="font-medium">Buzz Cuts</span>
										<div className="flex flex-col items-end">
											<span className="text-secondary font-semibold">from $40</span>
											<span className="text-sm text-base-content opacity-70">30-45 mins</span>
										</div>
									</div>
									<div className="flex justify-between items-center">
										<span className="font-medium">High School Cut</span>
										<div className="flex flex-col items-end">
											<span className="text-secondary font-semibold">from $40</span>
											<span className="text-sm text-base-content opacity-70">30 mins</span>
										</div>
									</div>
									<div className="flex justify-between items-center">
										<span className="font-medium">Concession Cuts</span>
										<div className="flex flex-col items-end">
											<span className="text-secondary font-semibold">from $45</span>
											<span className="text-sm text-base-content opacity-70">30 mins</span>
										</div>
									</div>
									<div className="flex justify-between items-center">
										<span className="font-medium">Beard Fade/Sculpt</span>
										<div className="flex flex-col items-end">
											<span className="text-secondary font-semibold">from $45</span>
											<span className="text-sm text-base-content opacity-70">30 mins</span>
										</div>
									</div>
								</div>
								<div className="card-actions justify-end mt-4">
									<a
										href="https://www.fresha.com/a/bar-x-bar-pty-ltd-manly-11-25-wentworth-street-svwlgcbn"
										target="_blank"
										rel="noopener noreferrer"
										className="btn btn-sm btn-secondary"
									>
										Book Now
									</a>
								</div>
							</div>
						</motion.div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="text-center mt-10"
					>
						<Link to="/services" className="btn btn-primary">
							See Full Service Details
						</Link>
					</motion.div>
				</div>
			</section>

			{/* Booking Information Section */}
			<section className="py-12 bg-base-100">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="text-center mb-12"
					>
						<h2 className="text-3xl font-bold text-base-content">Booking Information</h2>
						<p className="mt-4 text-base-content opacity-70 max-w-2xl mx-auto">
							Important details to know before your appointment
						</p>
					</motion.div>

					<motion.div
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						className="max-w-3xl mx-auto"
					>
						<div className="space-y-6">
							<motion.div variants={itemVariants} className="card bg-base-200 shadow-sm">
								<div className="card-body">
									<h3 className="card-title text-base-content">Cancellation Policy</h3>
									<p className="text-base-content opacity-80">
										We understand that plans can change. We kindly request 24 hours notice for cancellations or
										rescheduling. Cancellations with less than 24 hours notice may incur a fee.
									</p>
								</div>
							</motion.div>

							<motion.div variants={itemVariants} className="card bg-base-200 shadow-sm">
								<div className="card-body">
									<h3 className="card-title text-base-content">Arrival Time</h3>
									<p className="text-base-content opacity-80">
										Please arrive 5-10 minutes before your scheduled appointment time. This allows time for check-in and
										consultation before your cut. Late arrivals may result in a shortened service time to accommodate
										other scheduled appointments.
									</p>
								</div>
							</motion.div>

							<motion.div variants={itemVariants} className="card bg-base-200 shadow-sm">
								<div className="card-body">
									<h3 className="card-title text-base-content">Walk-ins</h3>
									<p className="text-base-content opacity-80">
										While we welcome walk-ins, availability cannot be guaranteed. For the best experience and to ensure
										you get your preferred time, we recommend booking in advance through our online booking platforms.
									</p>
								</div>
							</motion.div>

							<motion.div variants={itemVariants} className="card bg-base-200 shadow-sm">
								<div className="card-body">
									<h3 className="card-title text-base-content">Payment Methods</h3>
									<p className="text-base-content opacity-80">
										We accept all major credit cards, EFTPOS, and mobile payment methods. Cash is also accepted at both
										locations.
									</p>
								</div>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* CTA Section */}
			<CTASection />
		</>
	);
};

export default Booking;
