'use client'
import useIcons from '../services/svg.service'
import { Space } from '@/app/types'
export default function Amenities({ space }: { space: Space }) {
    const { getIcon } = useIcons()
    return (
        <section className="amenities">
            <h1>What this place offers</h1>
            <ul className="amenities-list">
                {space.amenities.slice(0, 10).map((amenity) => (
                    <li key={amenity}>
                        <span>{getIcon(amenity)}</span>
                        {amenity}
                    </li>
                ))}
            </ul>
        </section>
    )
}