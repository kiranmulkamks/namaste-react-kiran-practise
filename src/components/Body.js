import { useState } from "react";
import restarauntCardsList  from "../MockData/restarauntCardsList";
import RestarauntCard from "./RestarauntCard";

const bodySearchDivCss = {
    margin: "20px"
};
const bodyFilterDivCss = {
    margin: "50px",
    padding: "50px"
};
const bodyRestroCardListCss = {
    display:"flex",
    margin: "20px"
};




const Body = () => {

    const [restarauntCardsListStateVar, setRestarauntCardsListState] = useState(restarauntCardsList);

    const filterRestro = () => {
        const filteredRestroList = restarauntCardsListStateVar.filter(
            (restro) => restro.info.avgRating > 4.4
        );
        setRestarauntCardsListState(filteredRestroList);
    };

    return(
        
        <div className = "body-component-div" >
            <div className = "body-search-container" style ={bodySearchDivCss}>
                <input type="text" className = "search-inputBox"></input>
                <button type= "submit" className ="search-submit-button"></button>
            </div>
            <div className = "body-filter-container" style ={bodyFilterDivCss}>
                <button type= "submit" className ="filter-submit-button" onClick = {filterRestro}>Filter</button>
            </div>
            <div className ="body-restroCardList-container" style ={bodyRestroCardListCss}>
                {
                    restarauntCardsListStateVar.map((restaurant) => 
                         <RestarauntCard key = {restaurant.info.id} restaurantObj = {restaurant} />
                    )
                }

            </div>
        </div>
    );
}


export default Body;