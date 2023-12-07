import { PiMagnifyingGlassBold } from "react-icons/pi";

export default function SearchBar() {
    return (
        <div className="search-bar">
            <button className="btn">
                <div>Anywhere</div>
            </button>
            <button className="btn">
                <div>Any week</div>
            </button >
            <button className="btn">
                <div>Add guests</div >
            </button >
            <button className="btn">
                <div><PiMagnifyingGlassBold /></div>
            </button>
        </div >
    )
}