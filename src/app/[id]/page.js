import Sidebar from "@/components/Sidebar"
import fetchQuran from '@/utils/fetchAll'
import { Aside, Heading, Loading } from "../Index"
import { Suspense } from "react"

export async function generateMetadata({ params }) {
  // read route params
  const id = params.id
  // fetch data
  const titlename = await fetchQuran(`chapters/${id}`)
  return {
    title: titlename?.chapter?.name_simple,
  }
}

const page = ({ params }) => {
  const { id } = params;
  return (
    <div className="flex justify-between w-full h-screen overflow-hidden ">
      <div className="z-10">
        <Sidebar id={id} />
      </div>
      <div className="w-full overflow-scroll h-screen">
        <Suspense fallback={<Loading />}>
          <Aside id={id} />
        </Suspense>
      </div>
    </div>
  )
}

export default page