import {render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../Body"
import bodyMock from "./mockData/bodyMock.json"
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";


global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve({bodyMock});
        }
    })
})

test("Should render the body component",async ()=>{

    await act(async ()=>{
        render(
            <BrowserRouter>
            <Body/>
            </BrowserRouter>

        )
    })


})