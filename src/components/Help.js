import HelpAccordian from "./HelpAccordian";
import { helpData } from "../utils/data";
import { useState } from "react";

const Help = () => {

  let [showIndex,setShowIndex] = useState(0);

  return (
    <div className="h-[80vh] w-8/12  m-auto mb-3  bg-slate-100 px-2">
      <div className="mt-10">
        {helpData.map((data,index) => {
          return <HelpAccordian order={data} show = {index === showIndex && true}  showIndex ={()=>setShowIndex(index) }></HelpAccordian>;
        })}
      </div>
    </div>
  );
};

export default Help;
