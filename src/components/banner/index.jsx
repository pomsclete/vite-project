
import "./banner.css"
import IMG_BANNER from "../../assets/images/source1.svg"
function Banner () {
    return (
        <div className="banner">
            <img src={IMG_BANNER} alt="Placeholder" />
            <p className="banner-title">This is the banner</p>
        </div>

    );
}

export default Banner;