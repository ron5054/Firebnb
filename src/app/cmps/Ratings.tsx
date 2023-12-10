'use client'
import { Space } from "../types"
import { utilsService } from "../services/utils.service"
import useIcons from '../services/svg.service'
export default function Ratings({ space }: { space: Space }) {
    const ratings: { [key: string]: string } = utilsService.calcAvgCategories(space.reviews)
    const { getIcon } = useIcons()

    return (
        <section className="ratings">
            <div className="ratings-header">
                <span className="star">{getIcon('bStar')}</span>
                <h2>{utilsService.calculateRating(space.reviews)} • {space.reviews.length} reviews</h2>
            </div>
            <ul className="ratings-list df">
                {Object.keys(ratings).map((key) => (
                    <li key={key}>
                        <div>
                            <div>{key}</div>
                            <div>{ratings[key]}</div>
                        </div>
                        <div>{getIcon(key)}</div>

                    </li>
                ))}
            </ul>
        </section>
    )
}