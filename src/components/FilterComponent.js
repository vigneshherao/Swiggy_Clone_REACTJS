const FilterComponent = ({ onFilter }) => {
  return (
    <div className="filter-options">
      <div className="option">
      <button
          onClick={() => {
            onFilter((res) => res);
          }}
        >
          All
        </button>
        <button
          onClick={() => {
            onFilter((res) => res.info.sla.deliveryTime <= 30);
          }}
        >
          Fast Delivery
        </button>
      </div>
      <div className="option">
        <button
          onClick={() => {
            onFilter((res) => res.info.veg == true);
          }}
        >
          Pure Veg
        </button>
      </div>
      <div className="option">
      <button
          onClick={() => {
            onFilter((res) => res.info.sla.deliveryTime <= 30);
          }}
        >
          Fast Delivery
        </button>
      </div>
    </div>
  );
};



export default FilterComponent;