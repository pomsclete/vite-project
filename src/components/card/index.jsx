import "./card.css"
function Card (props) {
    return (
        <div className="card">
            <a href="" >
                <img className="card_img" src={props.image} alt="Placeholder" />
                <h2 className="card_title">{props.title}</h2>
            </a>
        </div>

    );
}

export default Card;