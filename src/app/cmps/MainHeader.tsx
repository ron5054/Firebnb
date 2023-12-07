import Logo from './Logo'
import SearchBar from './SearchBar'
import Profile from './Profile'

export default function MainHeader({ params }: { params: { spaceId: string } }) {

    return (
        <header className={`main-header-container ${params.spaceId ? 'narrow-layout' : 'main-layout'}`}>
            <div className="main-header">
                <Logo />
                <SearchBar />
                <Profile />
            </div>
        </header>
    )
}

