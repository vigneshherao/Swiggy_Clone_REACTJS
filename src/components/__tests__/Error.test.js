import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import RestaurentCard from "../RestaurentCard";
import mockDart from "./mockData/mockData.json"


test("Should render the header page", () => {
    render(
      <BrowserRouter>   
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
  
    const loginBtn = screen.getByRole("button",{name:"login"});
    fireEvent.click(loginBtn);
    const logoutBtn = screen.getByRole("button",{name:"logout"});
    expect(logoutBtn).toBeInTheDocument();
  });


  test("should rendered the promoted label in restuarent card",()=>{
    render(
      <BrowserRouter>   
      <RestaurentCard resData={mockDart} />
      </BrowserRouter>   
    );
  })
  