import { useEffect } from 'react';
function Detail () {


    useEffect(() => {
        document.title = "Page de détails";
    }, []);

    return (
        <>
            <h1>Détails logement</h1>

        </>
    );
}

export default Detail;