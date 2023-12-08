'use client';
import { Space } from '@/app/types'

export default function HostMini({ space }: { space: Space }) {

    const handleImgEror = (event: React.SyntheticEvent<HTMLImageElement>) => event.currentTarget.src = 'https://randomuser.me/api/portraits/women/1.jpg';

    return (
        <div className="host-mini">
            <img src={space.host.imgUrl} onError={handleImgEror} alt="" />
            <div>
                <h1>{space.host.fullname}</h1>
                <small>host history</small>
            </div>
        </div>
    )
}