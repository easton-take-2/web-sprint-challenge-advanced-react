import React from "react";
import { render } from "@testing-library/react";
import { render, getByLabelText, fireEvent } from "@testing-library/react";
import { render, getByLabelText, fireEvent, GetByText } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("The form shows success message upon submit", () => {
    const { getByLabelText, getByText, findAllByText }= render(<CheckoutForm />);
        const firstNameInput = getByLabelText(/First Name/i);
        const lastNameInput = getByLabelText(/Last Name/i);
        const addressInput = getByLabelText(/Address/i);
});
        test("Fire events", () => { 
            const {  getByText }= render(<CheckoutForm />);
            const leftClick = { button: 0 }
            fireEvent.click(getByText('Checkout'), leftClick)
        });

test("form shows success message on submit with form details", () => {});
