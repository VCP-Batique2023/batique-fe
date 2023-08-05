export default function ImageHeader({ path, height='60vh' }) {
//   return <img src={path} alt="" className="imagerHeader" style={{height: `${height}`}} />;
    const headerContainer = {
        backgroundImage: `url(${path})`,
        height: `${height}`,
    }    
    return (
        <div className="imagerHeader" style={headerContainer}>
        </div>
    )
}