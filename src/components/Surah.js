import fethcQuran from "@/utils/fetchAll"
import Card from "./Card"

const Surah = async ({ id }) => {
	const { chapter } = await fethcQuran(`chapters/${id}`)
	return (
		<div>
			<Card name={chapter.name_simple} id={chapter.id} arabic={chapter.name_arabic} ayahs={chapter.verses_count} newName={chapter.translated_name.name} place={chapter.revelation_place} />
		</div>
	)
}

export default Surah 