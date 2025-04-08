import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, ArrowLeft, Scissors } from "lucide-react";

const NotFound = () => {
	return (
		<>
			<Helmet>
				<title>Page Not Found | SW Blends Barbershop</title>
				<meta name="description" content="The page you're looking for doesn't exist." />
			</Helmet>

			<section className="py-20 bg-base-100">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="text-center"
					>
						<Scissors className="h-16 w-16 text-primary mx-auto mb-6" />
						<h1 className="text-6xl font-bold text-primary mb-4">404</h1>
						<h2 className="text-3xl font-semibold text-base-content mb-6">Page Not Found</h2>
						<p className="text-xl text-base-content opacity-70 max-w-lg mx-auto mb-10">
							Sorry, we couldn't find the page you're looking for. It seems this style has been trimmed from our collection.
						</p>

						<div className="flex flex-col sm:flex-row justify-center gap-4">
							<Link to="/" className="btn btn-primary">
								<Home className="mr-2 h-5 w-5" />
								Back to Home
							</Link>
							<button onClick={() => window.history.back()} className="btn btn-outline btn-primary">
								<ArrowLeft className="mr-2 h-5 w-5" />
								Go Back
							</button>
						</div>
					</motion.div>

					{/* Suggestions */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="mt-16 text-center"
					>
						<h3 className="text-xl font-medium text-base-content mb-6">You might be interested in:</h3>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
							<Link to="/services" className="card bg-base-200 hover:shadow-md transition-shadow duration-300">
								<div className="card-body items-center text-center">
									<h4 className="card-title text-base-content">Our Services</h4>
									<p className="text-base-content opacity-70">Explore our range of haircuts and styles</p>
								</div>
							</Link>

							<Link to="/booking" className="card bg-base-200 hover:shadow-md transition-shadow duration-300">
								<div className="card-body items-center text-center">
									<h4 className="card-title text-base-content">Book an Appointment</h4>
									<p className="text-base-content opacity-70">Schedule your next cut with us</p>
								</div>
							</Link>

							<Link to="/contact" className="card bg-base-200 hover:shadow-md transition-shadow duration-300">
								<div className="card-body items-center text-center">
									<h4 className="card-title text-base-content">Contact Us</h4>
									<p className="text-base-content opacity-70">Get in touch with our team</p>
								</div>
							</Link>
						</div>
					</motion.div>
				</div>
			</section>
		</>
	);
};

export default NotFound;
