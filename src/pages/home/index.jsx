import { useEffect, useState } from 'react';
import Banner from "../../components/banner/index"
import Card from "../../components/card/index"
import "./home.css"
import DataJson from "../../datas/logements.json"
import IMG_BANNER from "../../assets/images/source1.svg"
function Home () {

    const [data, setData] = useState(null)

    useEffect(() => {
        document.title = "Bienvenue à notre site immobilier"
        setData(DataJson)
    }, []);

    return (
        <>
            <Banner img={IMG_BANNER} content="Chez vous, partout et ailleurs" />
            <div className='main-content'>
                {
                    data && data.map((item, index) => (
                        <Card key={index} title={item.title} image={item.cover} />
                    ))
                }
            </div>

        </>
    );
}

export default Home;