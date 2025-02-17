import { useEffect } from 'react';
function Erreur () {


    useEffect(() => {
        document.title = "Page d'erreur";
    }, []);

    return (
        <>
            <h1>404 not found</h1>

        </>
    );
}

export default Erreur;