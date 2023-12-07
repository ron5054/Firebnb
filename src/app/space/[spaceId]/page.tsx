import { airbnbService } from "@/app/services/airbnb.service"
import MainHeader from "../../cmps/MainHeader"
import HostMini from "@/app/cmps/HostMini"
export default function SpaceDetails({ params }: { params: { spaceId: string } }) {
    const space = airbnbService.getSpaceById(params.spaceId)

    return (
        <section className="space-details-container narrow-layout">
            <MainHeader params={params} />
            <section className="space-details">
                <h1>{space.name}</h1>
                <section className="images-grid">
                    <img className="main-img" src={space.imgUrls[0]} alt="main-img" />
                    <img className="img-1" src={space.imgUrls[1]} alt="img-1" />
                    <img className="img-2" src={space.imgUrls[2]} alt="img-2" />
                    <img className="img-3" src={space.imgUrls[3]} alt="img-3" />
                    <img className="img-4" src={space.imgUrls[4]} alt="img-4" />
                </section>
                <h1>{space.roomType} in {space.loc.city}, {space.loc.country} </h1>
                <ul className="df">
                    <li>{space.capacity} {space.capacity > 1 ? 'guests' : 'guest'} ·</li>
                    <li>{space.bedrooms} {space.bedrooms > 1 ? 'bedrooms' : 'bedroom'} ·</li>
                    <li>{space.bathrooms} {space.bathrooms > 1 ? 'bathrooms' : 'bathroom'}</li>
                </ul>
                <HostMini space={space} />

            </section>
        </section>
    )
}