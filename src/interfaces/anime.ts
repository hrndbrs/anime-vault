export interface AnimeProp {
	id: string;
	name: string;
	image: {
		original: string;
	};
	kind: string;
	episodes: number;
	episodes_aired: number;
	score: string;
	from: string;
}

export interface AnimeCardProp {
	anime: AnimeProp;
	index: number;
}
