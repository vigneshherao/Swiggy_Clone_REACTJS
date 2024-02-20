const HelpAccordian = ({order}) => {
  return (
    <div>
      <div
        className="flex justify-between cursor-pointer  mt-4 mb-3 pb-2 shadow-md  items-center bg-gray-50 rounded-sm"
        onClick={() => {}}
      >
        <div>
          <h5 className="mb-2 font-bold text-gray-600 pl-2 items-center justify-center">
            {order}
          </h5>
        </div>
        <div>
          <span>
            <i className="fa-solid fa-chevron-down pr-2"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HelpAccordian;
