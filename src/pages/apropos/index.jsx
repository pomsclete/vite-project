import { useEffect } from 'react';
import Banner from "../../components/banner/index"
import IMG_BANNER from "../../assets/images/banner2.jpg"

function Apropos () {


    useEffect(() => {
        document.title = "A propos"
    }, []);

    return (
        <>
            <Banner img={IMG_BANNER} content="" />

        </>
    );
}

export default Apropos;