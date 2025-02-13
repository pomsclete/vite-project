import { useEffect, useState } from 'react';
import Banner from "../../components/banner/index"
import Card from "../../components/card/index"
import "./home.css"
import DataJson from "../../datas/logements.json"
function Home () {

    const [data, setData] = useState(null)

    useEffect(() => {
        document.title = "Bienvenue à notre site immobilier"
        setData(DataJson)
    }, []);

    return (
        <>
            <Banner />
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