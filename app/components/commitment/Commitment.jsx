import Image from "next/image";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import CommitmentStyle from "./Commitment.module.css";

const Commitment = () => {
    const images = [
        {
            original: "/image/interior01.jpg",
            thumbnail: "/image/interior01.jpg",
        },
        {
            original: "/image/interior02.jpg",
            thumbnail: "/image/interior02.jpg",
        },
        {
            original: "/image/interior03.jpg",
            thumbnail: "/image/interior03.jpg",
        },
    ];

    return (
        <div className={CommitmentStyle.body}>
            <ImageGallery
                items={images}
                showThumbnails={false}
                showNav={false}
                showFullscreenButton={false}
                showPlayButton={false}
                infinite={true}
                autoPlay={true}
                slideInterval={4000}
                slideDuration={1500}
            />
        </div>
    );
};

export default Commitment;
