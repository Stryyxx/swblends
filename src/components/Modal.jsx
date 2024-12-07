import React from "react";
import { motion } from "framer-motion";

const Modal = ({ isModalOpen, setIsModalOpen }) => {
	if (!isModalOpen) return null;

	const handleClose = () => {
		setIsModalOpen(false);
	};

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm">
			<div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center z-60 flex flex-col gap-4">
				<h2 className="text-2xl font-bold text-white">Choose Your Cut</h2>
				<div className="flex flex-col gap-4">
					<a href="https://booktrybe.com/barber/1e7cebd1-9a82-4167-bf0c-d8c62dd44b5e">
						<motion.button
							className="bg-accent text-gray-900 px-6 py-2 rounded-full font-semibold w-full"
							whileHover={{ scale: 1.1, backgroundColor: "#879df5" }}
							transition={{ type: "spring", stiffness: 150 }}
						>
							Home Cuts
						</motion.button>
					</a>
					<a href="https://www.fresha.com/a/bar-x-bar-pty-ltd-manly-11-25-wentworth-street-svwlgcbn">
						<motion.button
							className="bg-accent text-gray-900 px-6 py-2 rounded-full font-semibold w-full"
							whileHover={{ scale: 1.1, backgroundColor: "#879df5" }}
							transition={{ type: "spring", stiffness: 150 }}
						>
							BarxBar Cuts
						</motion.button>
					</a>
				</div>
				<button className=" text-gray-400 hover:text-white" onClick={handleClose}>
					Close
				</button>
			</div>
		</div>
	);
};

export default Modal;
