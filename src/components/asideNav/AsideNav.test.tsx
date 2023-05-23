import AsideNav from "./AsideNav";
import {render, screen} from "@testing-library/react"

beforeEach(()=>{
    render(<AsideNav/>);
})

describe ("AsideNav", ()=>{
    test("Should render AsideNav component", ()=>{
        expect(screen.findAllByDisplayValue).toBeDefined()
    })
    test("Should contain more than one svg image",()=>{
        expect(screen.findAllByAltText("svg")).toBeDefined()
    })
    test("Should contain links",()=>{
        expect(screen.getAllByRole("link")).toBeDefined()
    })
        
})