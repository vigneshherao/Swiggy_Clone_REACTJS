const Bill = ({data}) =>{

    let cash = 0;
    for(item of data){
      cash = cash + item.price;
    }

    console.log(cash);

    return (
        <div className="border pt-3">
        <span className="font-semibold pl-10">Bill Details</span>
          <div className="flex justify-between px-10 text-gray-500">
            <div>Item Total</div>
            <div>&#x20B9;{cash/100}</div>
          </div>
          <div className="flex justify-between px-10 text-gray-500">
            <div>Delivery Fee | 5.4 kms</div>
            <div>&#x20B9;40</div>
          </div>
          <div className="flex justify-between px-10 text-gray-500 border-b-2 pb-3">
            <div>GST and Restaurant Charges</div>
            <div>&#x20B9;8.00</div>
          </div>
          <div className="flex justify-between px-10 font-semibold py-3">
            <div>To Pay</div>
            <div>&#x20B9;{cash/100 + 48}
              </div>
          </div>
      </div>
    )
}

export default Bill;