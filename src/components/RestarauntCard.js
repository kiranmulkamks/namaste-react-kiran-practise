import { RESTARAUNTCARD_IMG } from "../constants/constants";


const restroCardCss = {
    margin: "10px",

};

const RestarauntCard = (props) => {
    const {restaurantObj} = props;

    return(
                <div className = "restroCard" style={restroCardCss}>
                    <img className= "restroCard-img" src={RESTARAUNTCARD_IMG + restaurantObj.info.cloudinaryImageId}></img>
                    <h1 className="restroCard-name">{restaurantObj.info.name}</h1>
                    <h2 className="restroCard-cusines">{restaurantObj.cuisines}</h2>
                    <h2 className="restroCard-Address">{restaurantObj.info.areaName}</h2>
                    <h3 className="restroCard-Price">{restaurantObj.info.costForTwo}</h3>
                    <h1 className="restroCard-Price">{restaurantObj.info.avgRating}</h1>
                </div>
    );
}

export default RestarauntCard;