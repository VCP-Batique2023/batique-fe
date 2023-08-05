export default function ImageHeader({ path, height='60vh' }) {
    const headerContainer = {
        backgroundImage: `url(${path})`,
        height: `${height}`,
    }    
    return (
        <div className="imageHeader" style={headerContainer}>
        </div>
    )
}