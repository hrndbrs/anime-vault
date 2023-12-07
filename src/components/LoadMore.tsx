"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import fetchAnime from "@/app/action";
import AnimeCardContainer from "./AnimeCardContainer";
import { AnimeProp } from "@/interfaces/anime";

let page = 2;

export default function LoadMore() {
	const [data, setData] = useState<JSX.Element[]>([]);
	const { ref, inView } = useInView();

	useEffect(() => {
		if (inView) {
			fetchAnime(page).then((res) => {
				page++;
				setData((prev) => [...prev, ...res]);
			});
		}
	}, [inView]);
	return (
		<>
			<AnimeCardContainer data={data} />
			<section className="flex justify-center items-center w-full">
				<div ref={ref}>
					<Image
						src="/spinner.svg"
						alt="spinner"
						width={56}
						height={56}
						className="object-contain"
					/>
				</div>
			</section>
		</>
	);
}
