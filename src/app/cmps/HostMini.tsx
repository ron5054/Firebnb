import { Space } from '@/app/types'

export default function HostMini({ space }: { space: Space }) {
    return (
        <div className="host-mini">
            <img src={space.host.imgUrl} alt="" />
            <div>
                <h1>{space.host.fullname}</h1>
                <small>host history</small>
            </div>
        </div>
    )
}