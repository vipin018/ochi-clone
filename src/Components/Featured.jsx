/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */

import { motion, useAnimation } from "framer-motion";
import React from "react";

function Feature() {
	const cards = [useAnimation(), useAnimation()];
	const handleHover = (index) => {
		cards[index].start({ y: "0" });
	};
	const handleHoverEnd = (index) => {
		cards[index].start({ y: "100%" });
	};
	return (
		<div className="w-full py-20 bg-[#f1f1f1]">
			<div className="px-20">
				<div className="card w-full flex gap-10 mt-10">
					<motion.div
						onHoverStart={() => handleHover(0)}
						onHoverEnd={() => handleHoverEnd(0)}
						className="cardcontainer relative w-1/2 h-[75vh] rounded-xl"
					>
						<p className="pb-1 list-disc ">
							<li className="font-normal">TRAWA</li>
						</p>
						<h1 className="absolute flex text-[#CDEA68] overflow-hidden right-0 top-1/2 translate-x-1/2 -translate-y-1/2 z-[9] text-[120px] leading-none tracking-tighter font-['Bebas Neue'] font-extrabold">
							{"TRAWA".split("").map((item, index) => (
								<motion.span
									initial={{ y: "100%" }}
									animate={cards[0]}
									transition={{
										ease: [0.22, 1, 0.36, 1],
										delay: index * 0.054,
									}}
									className="inline-block"
								>
									{item}
								</motion.span>
							))}
						</h1>
						<div className=" card w-full h-full rounded-xl overflow-hidden">
							<img
								className="w-full h-full bg-cover"
								src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
							/>
						</div>
						<div className="py-[1vw] flex gap-2 capitalize">
							{["Brand Identiti", "Design Research", "Investor Deck"].map(
								(item, index) => (
									<button className="px-4 py-1 uppercase border-[1px] border-[#3b3b3b] rounded-full font-normal text-md ">
										{item}
									</button>
								)
							)}
						</div>
					</motion.div>
					<motion.div
						onHoverStart={() => handleHover(1)}
						onHoverEnd={() => handleHoverEnd(1)}
						className="cardcontainer relative w-1/2 h-[75vh] rounded-xl"
					>
						<p className="pb-1 font-normal list-disc">
							<li>PREMIUM BLEND</li>
						</p>
						<h1 className="absolute flex overflow-hidden text-[#CDEA68] left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[9] text-[120px] leading-none tracking-tighter font-extrabold font-['Bebas Neue']">
							{"PREMIUMBLEND".split("").map((item, index) => (
								// eslint-disable-next-line react/jsx-key
								<motion.span
									initial={{ y: "100%" }}
									animate={cards[1]}
									transition={{
										ease: [0.22, 1, 0.36, 1],
										delay: index * 0.054,
									}}
									className="inline-block"
								>
									{item}
								</motion.span>
							))}
						</h1>
						<div className="card w-full h-full overflow-hidden rounded-xl">
							<img
								className="w-full h-full bg-cover"
								src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
							/>
						</div>
						<div className="py-[1vw] flex gap-2 capitalize">
							{["Branded template"].map((item, index) => (
								<button className="px-4 py-1  uppercase border-[1px] border-[#3b3b3b] rounded-full font-normal text-md ">
									{item}
								</button>
							))}
						</div>
					</motion.div>
				</div>
				<div className="flex mt-[5vw] items-center justify-center">
					<button className="flex gap-10 uppercase items-center justify-center px-5 py-4 mt-[2vw] rounded-full text-white bg-zinc-900">
						View all case studies
						<div className="w-2 h-2 bg-zinc-200 rounded-full"></div>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Feature;
