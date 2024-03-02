const DishFilter = ({}) =>{

    return (
        <div className="ml-[10%] sm:ml-[12.5%] mb-3">
            <button className="border h-8 rounded-2xl w-20 mr-2 text-[90%] mb-2">Filter</button>
            <button className="border h-8 rounded-2xl w-20 mr-2 text-[90%] mb-2"> 30mins</button>
            <button className="border h-8 rounded-2xl w-20 mr-2 text-[90%] mb-2">Rs300-400</button>
            <button className="border h-8 rounded-2xl w-20 mr-2 text-[90%] mb-2">Rating</button>
        </div>
    );

}


export default DishFilter;