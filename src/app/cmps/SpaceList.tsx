import SpacePreview from "./SpacePreview"
import { Space } from '../types'

export default function SpaceList({ spaces: spaces }: { spaces: Space[] | null }) {
    return (
        <ul className="space-list">
            {spaces?.map((space) => (
                <SpacePreview key={space._id} space={space} />
            ))}
        </ul>
    )
}

