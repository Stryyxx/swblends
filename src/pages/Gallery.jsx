import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
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

// Mock gallery items - in a real implementation, these would be actual images
const galleryItems = [
	{
		id: 1,
		category: "main-shop",
		title: "Main Shop Interior",
		description: "The classic, welcoming interior of our main shop location in Manly.",
		placeholderColor: "bg-primary",
	},
	{
		id: 2,
		category: "main-shop",
		title: "Barber Station",
		description: "Sander's dedicated workspace featuring premium tools and equipment.",
		placeholderColor: "bg-secondary",
	},
	{
		id: 3,
		category: "barxbar",
		title: "barXbar Setting",
		description: "Our barXbar location offers a unique atmosphere for your haircut experience.",
		placeholderColor: "bg-accent",
	},
	{
		id: 4,
		category: "haircuts",
		title: "Classic Cut",
		description: "A timeless style that works for any occasion.",
		placeholderColor: "bg-primary",
	},
	{
		id: 5,
		category: "haircuts",
		title: "Modern Fade",
		description: "Precision graduated fading for a contemporary look.",
		placeholderColor: "bg-secondary",
	},
	{
		id: 6,
		category: "haircuts",
		title: "Beard Sculpting",
		description: "Expert beard shaping and styling for a defined look.",
		placeholderColor: "bg-accent",
	},
	{
		id: 7,
		category: "barxbar",
		title: "barXbar Interior",
		description: "The vibrant space where our barXbar services are offered.",
		placeholderColor: "bg-primary",
	},
	{
		id: 8,
		category: "haircuts",
		title: "Textured Crop",
		description: "A popular style featuring textured top with clean sides.",
		placeholderColor: "bg-secondary",
	},
	{
		id: 9,
		category: "main-shop",
		title: "Main Shop Exterior",
		description: "The street view of our main shop on Laurence Street.",
		placeholderColor: "bg-accent",
	},
];

const Gallery = () => {
	const [filter, setFilter] = useState("all");
	const [selectedImage, setSelectedImage] = useState(null);

	const filteredItems = filter === "all" ? galleryItems : galleryItems.filter((item) => item.category === filter);

	const handleImageClick = (item) => {
		setSelectedImage(item);
	};

	const closeModal = () => {
		setSelectedImage(null);
	};

	return (
		<>
			<Helmet>
				<title>Gallery | SW Blends Barbershop</title>
				<meta
					name="description"
					content="View our gallery showcasing haircut styles, our locations, and the SW Blends barbershop experience in Manly, Sydney."
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
						<h1 className="text-4xl font-bold text-base-content">Gallery</h1>
						<p className="mt-4 text-xl text-base-content opacity-70 max-w-3xl mx-auto">
							Browse through our haircut styles and shop locations
						</p>
					</motion.div>
				</div>
			</section>

			{/* Gallery Section */}
			<section className="py-12 bg-base-100">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					{/* Filter Buttons */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="flex flex-wrap justify-center gap-2 mb-8"
					>
						<button
							onClick={() => setFilter("all")}
							className={`btn ${filter === "all" ? "btn-primary" : "btn-outline btn-primary"}`}
						>
							All
						</button>
						<button
							onClick={() => setFilter("main-shop")}
							className={`btn ${filter === "main-shop" ? "btn-primary" : "btn-outline btn-primary"}`}
						>
							Main Shop
						</button>
						<button
							onClick={() => setFilter("barxbar")}
							className={`btn ${filter === "barxbar" ? "btn-primary" : "btn-outline btn-primary"}`}
						>
							barXbar
						</button>
						<button
							onClick={() => setFilter("haircuts")}
							className={`btn ${filter === "haircuts" ? "btn-primary" : "btn-outline btn-primary"}`}
						>
							Haircut Styles
						</button>
					</motion.div>

					{/* Gallery Grid */}
					<motion.div
						variants={containerVariants}
						initial="hidden"
						animate="visible"
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
					>
						{filteredItems.map((item) => (
							<motion.div
								key={item.id}
								variants={itemVariants}
								whileHover={{ y: -5 }}
								transition={{ duration: 0.2 }}
								className="card bg-base-200 shadow-sm overflow-hidden cursor-pointer"
								onClick={() => handleImageClick(item)}
							>
								<figure>
									{/* In a real implementation, this would be a LazyLoadImage with actual image paths */}
									<div className={`w-full h-64 ${item.placeholderColor} opacity-70`}></div>
								</figure>
								<div className="card-body">
									<h3 className="card-title text-base-content">{item.title}</h3>
									<p className="text-base-content opacity-70">{item.description}</p>
									<div className="card-actions justify-end">
										<div className="badge badge-outline badge-primary">{item.category.replace("-", " ")}</div>
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>

					{/* Empty State */}
					{filteredItems.length === 0 && (
						<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
							<p className="text-xl text-base-content opacity-70">
								No images found for this category. Please try another filter.
							</p>
						</motion.div>
					)}
				</div>
			</section>

			{/* Image Modal */}
			{selectedImage && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
					onClick={closeModal}
				>
					<div className="relative max-w-4xl w-full bg-base-100 rounded-box overflow-hidden" onClick={(e) => e.stopPropagation()}>
						<button
							className="absolute top-4 right-4 btn btn-circle btn-sm bg-base-100 hover:bg-base-200 z-10"
							onClick={closeModal}
						>
							<X className="h-5 w-5 text-base-content" />
						</button>

						<div className="p-2">
							{/* In a real implementation, this would show the actual high-res image */}
							<div className={`w-full h-96 ${selectedImage.placeholderColor} rounded-t-box`}></div>
						</div>

						<div className="p-6">
							<h3 className="text-2xl font-bold text-base-content mb-2">{selectedImage.title}</h3>
							<p className="text-base-content opacity-80">{selectedImage.description}</p>
						</div>
					</div>
				</motion.div>
			)}

			{/* Style Guide Section */}
			<section className="py-12 bg-base-200">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="text-center mb-12"
					>
						<h2 className="text-3xl font-bold text-base-content">Haircut Inspiration</h2>
						<p className="mt-4 text-base-content opacity-70 max-w-2xl mx-auto">Popular styles you can request</p>
					</motion.div>

					<motion.div
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						className="grid grid-cols-1 md:grid-cols-3 gap-6"
					>
						{/* Style 1 */}
						<motion.div variants={itemVariants} className="card bg-base-100 shadow-sm">
							<figure>
								<div className="w-full h-64 bg-primary opacity-70"></div>
							</figure>
							<div className="card-body">
								<h3 className="card-title text-base-content">Classic Side Part</h3>
								<p className="text-base-content opacity-80">
									A timeless style that's clean, professional, and versatile. Features a defined part with longer top and
									tapered sides.
								</p>
							</div>
						</motion.div>

						{/* Style 2 */}
						<motion.div variants={itemVariants} className="card bg-base-100 shadow-sm">
							<figure>
								<div className="w-full h-64 bg-secondary opacity-70"></div>
							</figure>
							<div className="card-body">
								<h3 className="card-title text-base-content">Modern Fade</h3>
								<p className="text-base-content opacity-80">
									Contemporary and stylish with a gradual blend from very short sides to a longer top. Multiple fade
									heights available.
								</p>
							</div>
						</motion.div>

						{/* Style 3 */}
						<motion.div variants={itemVariants} className="card bg-base-100 shadow-sm">
							<figure>
								<div className="w-full h-64 bg-accent opacity-70"></div>
							</figure>
							<div className="card-body">
								<h3 className="card-title text-base-content">Textured Crop</h3>
								<p className="text-base-content opacity-80">
									A modern style featuring a textured top with short sides. Perfect for adding volume and dimension to
									your hair.
								</p>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="py-12 bg-base-100">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="text-center mb-12"
					>
						<h2 className="text-3xl font-bold text-base-content">Client Experiences</h2>
						<p className="mt-4 text-base-content opacity-70 max-w-2xl mx-auto">Hear what our clients have to say</p>
					</motion.div>

					<motion.div
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						className="grid grid-cols-1 md:grid-cols-3 gap-6"
					>
						{/* Testimonial Cards */}
						{[
							{
								name: "James L.",
								quote: "Sander is the only person I trust with my hair. I've been going to him for over a year now and every cut is consistently perfect.",
								rating: 5,
							},
							{
								name: "Alex T.",
								quote: "The barXbar location is such a cool spot to get a cut. Great atmosphere and excellent service every time.",
								rating: 5,
							},
							{
								name: "Mark R.",
								quote: "After trying several barbers in Manly, I've finally found my go-to spot. Sander understood exactly what I wanted and executed it perfectly.",
								rating: 5,
							},
						].map((testimonial, index) => (
							<motion.div key={index} variants={itemVariants} className="card bg-base-200 shadow-sm">
								<div className="card-body">
									<div className="flex justify-center mb-4">
										{[...Array(testimonial.rating)].map((_, i) => (
											<svg
												key={i}
												xmlns="http://www.w3.org/2000/svg"
												className="h-5 w-5 text-warning fill-current"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
										))}
									</div>
									<p className="text-base-content opacity-80 italic text-center mb-4">"{testimonial.quote}"</p>
									<div className="text-center font-medium text-base-content">{testimonial.name}</div>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* CTA Section */}
			<CTASection />
		</>
	);
};

export default Gallery;
