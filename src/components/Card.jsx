const Card = (props) => {

    return (
        <div className="card">
            <div className="img">
                <img src={props.imageUrl} alt="" />
            </div>
            <div className="card-content">
                <div className="card-location">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" /></svg>
                    <h3> {props.location}<span>View on google maps</span></h3>
                </div>
                <div>
                    <h1>{props.title}</h1>
                    <p>{props.startDate} - {props.endDate}</p>
                </div>
                <div>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>);
}

export default Card;