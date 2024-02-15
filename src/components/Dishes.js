import { useEffect, useState } from "react"

const Dishes = () =>{

    const [dishes,setDishes] = useState([]);


    useEffect(()=>{
        fetchData();
    },[])


    console.log(dishes);

    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.887952142405728&lng=74.88308038562536&collection=80427&tags=layout_BAU_Contextual%2Cvada&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
        const dishData = await data.json();
       setDishes(dishData?.data?.cards[3].card.card.info)
    }

    return (
        <div>
            <h2>{dishes.name}</h2>
        </div>
    )
}


export default Dishes;