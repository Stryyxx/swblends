import { motion } from "framer-motion";

export default function CTASection() {
	return (
		<section className="bg-primary text-primary-content">
			<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
				<motion.div
					initial={{ opacity: 0, x: -30 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
						<span className="block">Ready for a fresh cut?</span>
					</h2>
					<p className="mt-4 text-lg opacity-90">Book your appointment today and experience the SW Blends difference.</p>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, x: 30 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mt-8 flex lg:mt-0 lg:flex-shrink-0"
				>
					<div className="rounded-md shadow">
						<a href="https://trybe.au/swblends" target="_blank" rel="noopener noreferrer" className="btn btn-accent btn-lg">
							Book Now
						</a>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
