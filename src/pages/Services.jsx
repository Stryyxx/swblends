import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, Check, ArrowRight, Scissors } from "lucide-react";
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

const haircuts = [
	{
		id: "haircut",
		name: "Haircut",
		duration: {
			mainShop: "30 mins",
			barXbar: "30 mins - 45 mins",
		},
		price: {
			mainShop: "$30",
			barXbar: "from $50",
		},
		description:
			"Our standard haircut service includes a consultation, precision cut, and styling to suit your face shape and personal style.",
		features: ["Consultation with your barber", "Precision scissor cut", "Classic styling", "Product recommendations"],
		image: "/placeholder",
	},
	{
		id: "buzz",
		name: "Buzz Cuts",
		duration: {
			mainShop: "30 mins",
			barXbar: "30 mins - 45 mins",
		},
		price: {
			mainShop: "$30",
			barXbar: "from $40",
		},
		description: "Quick and efficient buzz cuts with various guard lengths to achieve your desired short style.",
		features: ["Consultation on length", "Even, all-over cut", "Clean neckline", "Edge detailing"],
		image: "/placeholder",
	},
	{
		id: "highschool",
		name: "High School Cut",
		duration: {
			mainShop: "30 mins",
			barXbar: "30 mins",
		},
		price: {
			mainShop: "$30",
			barXbar: "from $40",
		},
		description: "Tailored cuts for students with styles that are both age-appropriate and on-trend.",
		features: ["Student-friendly styles", "Clean lines", "Low-maintenance options", "Styling tips for daily wear"],
		image: "/placeholder",
	},
	{
		id: "concession",
		name: "Concession Cuts",
		duration: {
			mainShop: "30 mins",
			barXbar: "30 mins",
		},
		price: {
			mainShop: "$30",
			barXbar: "from $45",
		},
		description: "Special rate cuts for seniors, veterans, and other concession card holders.",
		features: ["Classic or modern styles", "Attention to specific needs", "Relaxed service", "Expert advice"],
		image: "/placeholder",
	},
	{
		id: "beard",
		name: "Beard Fade / Sculpt",
		duration: {
			mainShop: "30 mins",
			barXbar: "30 mins",
		},
		price: {
			mainShop: "$30",
			barXbar: "from $45",
		},
		description: "Expert beard styling with precise fading and shaping for a well-defined, structured look.",
		features: ["Beard line definition", "Graduated fading technique", "Shape customization", "Maintenance tips"],
		image: "/placeholder",
	},
];

const Services = () => {
	return (
		<>
			<Helmet>
				<title>Our Services | SW Blends Barbershop</title>
				<meta
					name="description"
					content="Explore our range of premium haircuts and grooming services at SW Blends. From classic cuts to beard trims, we have options for every style."
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
						<h1 className="text-4xl font-bold text-base-content">Our Services</h1>
						<p className="mt-4 text-xl text-base-content opacity-70 max-w-3xl mx-auto">
							Precision cuts and expert grooming services tailored to your style. Each service includes a consultation to
							ensure you get exactly what you want.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Services List */}
			<section className="py-12 bg-base-100">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-16">
						{haircuts.map((haircut, index) => (
							<motion.div
								key={haircut.id}
								variants={itemVariants}
								className={`flex flex-col lg:flex-row gap-8 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
							>
								{/* Haircut Image */}
								<div className="lg:w-1/2">
									<div className="h-64 sm:h-80 lg:h-full bg-base-300 rounded-box"></div>
								</div>

								{/* Haircut Details */}
								<div className="lg:w-1/2">
									<h2 className="text-3xl font-bold text-base-content">{haircut.name}</h2>

									<div className="flex flex-col sm:flex-row gap-4 mt-4 mb-6">
										<div className="card bg-base-200 p-4 flex-1">
											<h3 className="text-lg font-semibold text-primary mb-2">Main Shop</h3>
											<div className="flex items-center mb-2">
												<Clock size={16} className="mr-1 text-base-content opacity-70" />
												<span className="text-base-content opacity-70">{haircut.duration.mainShop}</span>
											</div>
											<div className="text-lg font-medium">{haircut.price.mainShop}</div>
										</div>

										<div className="card bg-base-200 p-4 flex-1">
											<h3 className="text-lg font-semibold text-secondary mb-2">barXbar</h3>
											<div className="flex items-center mb-2">
												<Clock size={16} className="mr-1 text-base-content opacity-70" />
												<span className="text-base-content opacity-70">{haircut.duration.barXbar}</span>
											</div>
											<div className="text-lg font-medium">{haircut.price.barXbar}</div>
										</div>
									</div>

									<p className="mt-4 text-base-content opacity-80">{haircut.description}</p>

									<div className="mt-6">
										<h3 className="text-lg font-semibold text-base-content mb-3">Includes:</h3>
										<ul className="space-y-2">
											{haircut.features.map((feature, i) => (
												<li key={i} className="flex items-start">
													<Check size={18} className="text-success mr-2 mt-1 flex-shrink-0" />
													<span className="text-base-content opacity-80">{feature}</span>
												</li>
											))}
										</ul>
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>

					{/* Booking CTA */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="mt-16 text-center"
					>
						<h2 className="text-2xl font-bold text-base-content mb-4">Ready to book your cut?</h2>
						<p className="text-base-content opacity-70 max-w-2xl mx-auto mb-6">
							Choose your preferred location and book your appointment
						</p>
						<div className="flex flex-col sm:flex-row justify-center gap-4">
							<a href="https://trybe.au/swblends" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
								Book at Main Shop
								<ArrowRight size={16} className="ml-2" />
							</a>
							<a
								href="https://www.fresha.com/a/bar-x-bar-pty-ltd-manly-11-25-wentworth-street-svwlgcbn"
								target="_blank"
								rel="noopener noreferrer"
								className="btn btn-secondary"
							>
								Book at barXbar
								<ArrowRight size={16} className="ml-2" />
							</a>
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
						<h2 className="text-3xl font-bold text-base-content">Frequently Asked Questions</h2>
						<p className="mt-4 text-base-content opacity-70 max-w-2xl mx-auto">
							Find answers to common questions about our services
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
									question: "How early should I arrive for my appointment?",
									answer: "We recommend arriving 5-10 minutes before your scheduled time to check in and discuss your desired style with your barber.",
								},
								{
									question: "Do you take walk-ins?",
									answer: "We accept walk-ins based on availability, but appointments are recommended to ensure you get your preferred time slot and barber.",
								},
								{
									question: "What's your cancellation policy?",
									answer: "We appreciate 24 hours notice for cancellations. This allows us to offer the slot to another client. Repeated no-shows may affect future booking privileges.",
								},
								{
									question: "Are there any styles you specialize in?",
									answer: "Our team excels in a wide range of styles from classic cuts to modern fades, textured crops, and beard styling. Feel free to bring reference photos of styles you like.",
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

export default Services;
