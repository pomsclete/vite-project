
import "./banner.css"
//import IMG_BANNER from "../../assets/images/source1.svg"
function Banner ({ img, content }) {
    return (
        <div className="banner">
            <img src={img} alt="Placeholder" />
            {content ? (
                <p className="banner-title">{content}</p>
            ) : null}

        </div>

    );
}

export default Banner;