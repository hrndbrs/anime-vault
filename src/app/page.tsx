import AnimeCardContainer from "@/components/AnimeCardContainer";
import LoadMore from "@/components/LoadMore";
import fetchAnime from "./action";

export default async function Home() {
	try {
		const data = await fetchAnime(1);
		return (
			<div className="sm:p-16 py-16 px-8 flex flex-col gap-10">
				<h2 className="text-3xl text-white font-bold">Explore Anime</h2>
				<AnimeCardContainer data={data} />
				<LoadMore />
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
