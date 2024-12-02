/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
export default function LandingPage() {
	return (
		<div
			data-scroll
			data-scroll-section
			data-scroll-speed="-.3"
			className="w-full bg-[#f1f1f1] h-screen pt-1"
		>
			<div className="textstructure mt-40 px-20">
	{["We Create", "Eye-Opening", "Presentations"].map((item, index) => {
		return (
			<motion.div
				initial={{ opacity: 0, filter: "blur(10px)" }} // {{ edit_1 }}
				animate={{ opacity: 1, filter: "blur(0px)" }} // {{ edit_2 }}
				transition={{ delay: index * 0.5, duration: 1 }} // {{ edit_3 }}
				className="masker"
			>
				<div className="w-fit flex">
					{index === 1 && (
						<motion.div
							initial={{ width: 0, y: -50 }} // {{ edit_4 }}
							animate={{ width: "9vw", y: 0 }} // {{ edit_5 }}
							transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.4, delay: 2 }} // {{ edit_6 }}
							className="mr-[1vw] w-[9vw] h-[6vw] relative top-[1vw]"
						>
							<img
								className="w-full h-full rounded-md"
								src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
							/>
						</motion.div>
					)}
					<h1 className="flex items-center uppercase h-full text-[8vw] leading-[7.5vw] font-['Anton'] tracking-tight">
						{item}
					</h1>
				</div>
			</motion.div>
		);
	})}
</div>
			<div className="border-t-[1px] border-[#bababa] mt-36 flex justify-between items-center py-4 px-20 font-['Bebas Neue']">
				{[
					"For public and private companies",
					"From the first pitch to IPO",
				].map((item, index) => (
					<p className="text-md font-normal tracking-tight leading-none">
						{item}
					</p>
				))}
				<div className="start flex items-center gap-1 ">
					<button className="px-4 py-1  uppercase border-[1px] border-[#3b3b3b] rounded-full font-normal text-md ">
						Start the Project
					</button>
					<button className="w-8 h-8 flex items-center justify-center rounded-full border-[2px] border-zinc-500">
						<span className="rotate-[45deg]">
							<FaArrowUpLong />
						</span>
					</button>
				</div>
			</div>
		</div>
	);
}
