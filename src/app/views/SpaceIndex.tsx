import SpaceList from "../cmps/SpaceList"
import { Space } from '../types'

export default function SpaceIndex({ spaces }: { spaces: Space[] | null }): JSX.Element {
    return (
        <section className="space-index">
            <SpaceList spaces={spaces} />
        </section>
    )
}