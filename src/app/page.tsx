import AnimeCard from "@/components/AnimeCard";
import { AnimeProp } from "@/interfaces/anime";
import fetchAnime from "./action";

export default async function Home() {
	try {
		const data = await fetchAnime(1);
		return (
			<div className="sm:p-16 py-16 px-8 flex flex-col gap-10">
				<h2 className="text-3xl text-white font-bold">Explore Anime</h2>
				<section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 ">
					{data.map((anime: AnimeProp) => (
						<AnimeCard key={anime.id} anime={anime} />
					))}
				</section>
			</div>
		);
	} catch (err) {
		return (
			<div>
				<h2>Something went wrong</h2>
			</div>
		);
	}
}
