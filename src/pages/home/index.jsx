import { useEffect } from 'react';
import Banner from "../../components/banner/index"
import Card from "../../components/card/index"
import "./home.css"
function Home () {

    useEffect(() => {
        document.title = "Bienvenue à notre site immobilier"
    }, []);

    return (
        <>
            <Banner />
            <div className='main-content'>
                <Card />
            </div>

        </>
    );
}

export default Home;