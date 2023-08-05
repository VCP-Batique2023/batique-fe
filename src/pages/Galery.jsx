import { useState, useEffect } from 'react';
import ImageHeader from '@/components/ImageHeader';
import ImageGrid from '@/components/ImageGrid';
import GaleryHeader from '@/assets/img/1.jpg';



// Image Dummy Data
const imageUrl = [
    "https://storage.googleapis.com/batique-images/30.jpg",
    "https://storage.googleapis.com/batique-images/31.jpg",
    "https://storage.googleapis.com/batique-images/33.jpg",
    "https://storage.googleapis.com/batique-images/34.jpg",
    "https://storage.googleapis.com/batique-images/35.jpg",
    "https://storage.googleapis.com/batique-images/36.jpg",
    "https://storage.googleapis.com/batique-images/37.jpg",
    "https://storage.googleapis.com/batique-images/38.jpg",
    "https://storage.googleapis.com/batique-images/39.jpg",
    "https://storage.googleapis.com/batique-images/40.jpg",
    "https://storage.googleapis.com/batique-images/a%20(1).jpg",
    "https://storage.googleapis.com/batique-images/a%20(2).jpg",
    "https://storage.googleapis.com/batique-images/a%20(3).jpg",
    "https://storage.googleapis.com/batique-images/a%20(4).jpg",
    "https://storage.googleapis.com/batique-images/a%20(5).jpg",
    "https://storage.googleapis.com/batique-images/a%20(6).jpg",
    "https://storage.googleapis.com/batique-images/a%20(7).jpg",
    "https://storage.googleapis.com/batique-images/a%20(8).jpg",
    "https://storage.googleapis.com/batique-images/a%20(9).jpg",
    "https://storage.googleapis.com/batique-images/a%20(10).jpg",
    "https://storage.googleapis.com/batique-images/a%20(11).jpg",
    "https://storage.googleapis.com/batique-images/a%20(12).jpg",
    "https://storage.googleapis.com/batique-images/a%20(13).jpg",
    "https://storage.googleapis.com/batique-images/a%20(14).jpg",
    "https://storage.googleapis.com/batique-images/a%20(15).jpg",
    "https://storage.googleapis.com/batique-images/a%20(16).jpg",
    "https://storage.googleapis.com/batique-images/a%20(17).jpg",
    "https://storage.googleapis.com/batique-images/a%20(18).jpg",
    "https://storage.googleapis.com/batique-images/a%20(19).jpg",
    "https://storage.googleapis.com/batique-images/a%20(20).jpg",
]

export default function Galery() {
    const [screenWidth, setScreenWidth] = useState((window.innerWidth >= 992) ? '60vh' : '30vh');

    // For Image Header component (responsive) --> Start
    const resizeScreenHandler = () => {
        if (window.innerWidth >= 992) {
            setScreenWidth('60vh');
        } else {
            setScreenWidth('40vh');
        }
    }

    useEffect(() => {
        window.addEventListener('resize', resizeScreenHandler);

        return () => {
            window.removeEventListener('resize', resizeScreenHandler);
        };
    }, []);
    // For Image Header component (responsive) <-- end

    return (
        <>
            <ImageHeader path={GaleryHeader} height={screenWidth} />
            <ImageGrid images={imageUrl} />
        </>
    )
}