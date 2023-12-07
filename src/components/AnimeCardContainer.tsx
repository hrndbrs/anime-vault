export default function AnimeCardContainer({ data }: { data: JSX.Element[] }) {
	return (
		<section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 ">
			{data}
		</section>
	);
}
