"use server";
import AnimeCard from "@/components/AnimeCard";
import { AnimeProp } from "@/interfaces/anime";

const BASE_URL = "https://shikimori.one";

export default async function fetchAnime(page: number) {
	const res = await fetch(
		`${BASE_URL}/api/animes?page=${page}&limit=8&order=popularity`
	);
	const data = await res.json();
	data.forEach((anime: AnimeProp) => {
		anime.from = BASE_URL;
	});

	return data.map((anime: AnimeProp, idx: number) => (
		<AnimeCard key={anime.id} anime={anime} index={idx} />
	));
}
