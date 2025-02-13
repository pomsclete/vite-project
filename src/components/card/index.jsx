import "./card.css"
function Card () {
    return (
        <div className="card">
            <a href="" >
                <img className="card_img" src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg" alt="Placeholder" />
                <h2 className="card_title">Titre de la card</h2>
            </a>
        </div>

    );
}

export default Card;