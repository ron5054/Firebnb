'use client'
import { useState } from 'react'
import { Space } from '../types'
import { BsFillStarFill } from "react-icons/bs"
import { utilsService } from '../services/utils.service'
import useIcons from '../services/svg.service';

export default function SpacePreview({ space }: { space: Space }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    console.log(space);
    const { getIcon } = useIcons()

    const distance = () => {
        const lat1 = 31.9618
        const lon1 = 34.8124
        const lat2 = space.loc.lat
        const lon2 = space.loc.lan
        return utilsService.calculateDistance(lat1, lon1, lat2, lon2)
    }

    const rating = () => {
        return utilsService.calculateRating(space.reviews)
    }

    const handlePrevImage = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? space.imgUrls.length - 1 : prevIndex - 1));
    }

    const handleNextImage = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setCurrentImageIndex((prevIndex) => (prevIndex === space.imgUrls.length - 1 ? 0 : prevIndex + 1));
    }

    return (
        <article className="space-preview">
            <a href={`/space/${space._id}`}>
                <section className="images-wrapper">
                    <button className='btn back-btn' onClick={handlePrevImage}>🡠</button>
                    <button className='btn next-btn' onClick={handleNextImage}>🡢</button>
                    <button className="btn heart-btn">{getIcon('heart')}</button>
                    <img src={space.imgUrls[currentImageIndex]} alt="" />
                </section>
                <section className="space-header">
                    <h4>{space.loc.city}, {space.loc.country}</h4>
                    <span className="rating"><BsFillStarFill />{rating()}</span>
                </section>
                <span>{distance()} kilometers away</span>
                <span>dec 23-28</span>
                <div>${space.price} night</div>
            </a>
        </article>
    )
}

