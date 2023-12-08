import { airbnbService } from "@/app/services/airbnb.service"
import { utilsService } from "@/app/services/utils.service"
import MainHeader from "../../cmps/MainHeader"
import HostMini from "@/app/cmps/HostMini"
import Amenities from "@/app/cmps/Amenities"
export default function SpaceDetails({ params }: { params: { spaceId: string } }) {
    const space = airbnbService.getSpaceById(params.spaceId)
    const avgRating = utilsService.calculateRating(space.reviews)

    return (
        <section className="space-details-container narrow-layout">
            <MainHeader params={params} />
            <section className="space-details">
                <h1 className="space-name">{space.name}</h1>
                <section className="images-grid">
                    <img className="main-img" src={space.imgUrls[0]} alt="main-img" />
                    <img className="img-1" src={space.imgUrls[1]} alt="img-1" />
                    <img className="img-2" src={space.imgUrls[2]} alt="img-2" />
                    <img className="img-3" src={space.imgUrls[3]} alt="img-3" />
                    <img className="img-4" src={space.imgUrls[4]} alt="img-4" />
                </section>
                <section className="wrapper">
                    <section className="space-info">
                        <h1>{space.roomType} in {space.loc.city}, {space.loc.country}</h1>
                        <ul>
                            <li>{space.capacity} {space.capacity > 1 ? 'guests' : 'guest'} ·</li>
                            <li>{space.bedrooms} {space.bedrooms > 1 ? 'bedrooms' : 'bedroom'} ·</li>
                            <li>{space.bathrooms} {space.bathrooms > 1 ? 'bathrooms' : 'bathroom'}</li>
                        </ul>
                    </section>
                    <HostMini space={space} />
                    <p>{space.summary}</p>
                    <Amenities space={space} />

                    {/* {parseFloat(avgRating) > 3.8 && (
                        <>
                            <section className="best-space">
                                <img src="https://a0.muscache.com/pictures/ec500a26-609d-440f-b5d0-9e5f92afd478.jpg" alt="" />
                                <span>{utilsService.calculateRating(space.reviews)}</span>
                                <img src="https://a0.muscache.com/pictures/65bb2a6c-0bdf-42fc-8e1c-38cec04b2fa5.jpg" alt="" />
                            </section>
                            <div>One of the most loved homes on Airbnb based on ratings, reviews, and reliability</div>
                        </>
                    )} */}

                </section>
            </section>
        </section>
    )
}