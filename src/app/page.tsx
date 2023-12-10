import MainHeader from "./cmps/MainHeader"
import CategoryCarousel from "./cmps/CategoryCarousel"
import SpaceIndex from "./views/SpaceIndex"
import Footer from "./cmps/Footer"
import { airbnbService } from "./services/airbnb.service"

export default async function Home({ params }: { params: { spaceId: string } }) {
  const spaces = await airbnbService.getSpaces()

  return (
    <main className="main-layout">
      <MainHeader params={params} />
      <CategoryCarousel />
      <SpaceIndex spaces={spaces} />
      <Footer />
    </main>
  )
}
