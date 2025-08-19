"use client";

import { useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import StarCommitIcon from "@/app/components/icons/StarCommitIcon";

const testimonials = [
	{
		text:
			"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
		name: "mohammad al halabi",
		role: "Customer",
		avatar: "/man.jpg",
	},
	{
		text:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries.",
		name: "sara ahmad",
		role: "Guest",
		avatar: "/man.jpg",
	},
	{
		text:
			"Great service and wonderful staff.tsx. Highly recommended for a relaxing stay!",
		name: "ali yousef",
		role: "Visitor",
		avatar: "/man.jpg",
	},
];

const Commint = () => {
	const autoplay = useMemo(
		() =>
			Autoplay({
				delay: 3000,
				stopOnInteraction: false,
			}),
		[]
	);
	const [emblaRef] = useEmblaCarousel(
		{
			loop: true,
			align: "start",
			slidesToScroll: 1,
		},
		[autoplay]
	);

	return (
		<div className={"w-full h-[50vh] md:h-[70vh] bg-gray-100 flex justify-center items-center"}>
			<div className="w-[85%] flex justify-between">
				<div className="w-[45%] hidden md:block relative">
					<img
						className="w-full h-full object-cover rounded-2xl"
						src={
							"https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg"
						}
						alt="..."
					></img>
					<img
						className="absolute border-2 border-white top-1/2 -right-20 w-[30%] h-[30%] object-cover rounded-2xl"
						src={
							"https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg"
						}
						alt="..."
					></img>
				</div>
				<div className={"w-full md:w-[40%]"}>
					<div className={"bg-white w-fit py-1 px-2 sm:px-3 rounded-md text-darkGreen font-bold"}>
						<p className="text-xs sm:text-sm md:text-base">TESTIMONIAL</p>
					</div>
					<h2 className={"text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"}>
						Amazing Feedback Say About Services
					</h2>
					<div className="overflow-hidden" ref={emblaRef}>
						<div className="flex">
							{testimonials.map((t, idx) => (
								<div className="min-w-full shrink-0 p-1" key={idx}>
									<div className={"w-full p-10 bg-lightGreen rounded-2xl flex flex-col gap-6"}>
										<div className={"flex gap-1"}>
											<StarCommitIcon />
											<StarCommitIcon />
											<StarCommitIcon />
											<StarCommitIcon />
											<StarCommitIcon />
										</div>
										<p className="w-[80%]">{t.text}</p>
										<hr />
										<div className={"flex gap-4"}>
											<img
												src={t.avatar}
												className={"w-16 h-16 rounded-full object-cover"}
												alt={".."}
											></img>
											<div className={"flex flex-col justify-center "}>
												<p className={"font-bold"}>{t.name}</p>
												<p>{t.role}</p>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Commint;