import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from '../../utils/appStore';
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';

it("Should render Header component with login button", () => {
    render( 
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
        </BrowserRouter>
        );
const loginButton = screen.getByRole("button");

// const loginButton = screen.getByRText("Login");
// if multiple buttons, but want specific -
// const loginButton = screen.getByRole("button", { name: "Login" });

expect(loginButton).toBeInTheDocument();

});

it("Should render Header component with Cart Items", () => {
    render( 
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
        </BrowserRouter>
        );
// const cartItems = screen.getByRole("Cart(0 items)");

// To Use Regex
const cartItems = screen.getByText(/Cart/);

expect(cartItems).toBeInTheDocument();
});

it("Should change login to logout on click", () => {
    render( 
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
        </BrowserRouter>
        );
const loginButton = screen.getByRole("button", {name: "Login"});
fireEvent.click(loginButton);
// To Use Regex
const logoutButton = screen.getByRole("button", {name: "Logout"});

expect(logoutButton).toBeInTheDocument();
});