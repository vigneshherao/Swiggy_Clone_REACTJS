import HelpAccordian from "./HelpAccordian";
import { helpData } from "../utils/data";

const Help = () => {
  return (
    <div className="h-[80vh] w-8/12  m-auto  bg-slate-100 px-2">
      <div className="mt-10">
        {helpData.map((data) => {
          return <HelpAccordian order={data.list}></HelpAccordian>;
        })}
      </div>
      <div className="flex text-center">
        <div className="w-4/12  mt-[50px] font-bold border mr-2">
          <div>Company</div>
          <div className="font-light mt-3">
            <p>Apt. 347 305 Stiedemann Camp, Port Catharine, MT 68258-1869</p>
          </div>
        </div>
        <div className="w-4/12  mt-[50px] font-bold border mr-2">
          <div>Contact us</div>
          <div className="font-light mt-3">
            <p> Stiedemann Camp, Port Catharine, MT 68258-1869</p>
          </div>
        </div>
        <div className="w-4/12  mt-[50px] font-bold border mr-2">
          <div>We deliver to:</div>
          <div className="font-light mt-3">
            <p>Bangalore, Gurgaon, Hyderabad, Delhi, Mumbai, Pune,</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
