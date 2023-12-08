import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import React from "react";
import Form from "./Form";



test("renders the empty form correctly", () => {
    render(<Form />);
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Job")).toBeInTheDocument();
    expect(screen.getByText("Submit")).toBeInTheDocument();
    });

const testUser = { name: "Ken Kubiak", job: "Educator" };
test("accepts name input", () => {
    render(<Form />);
    const input = screen.getByLabelText("Name");
    fireEvent.change(input, { target: { value: testUser.name } });
    expect(input).toHaveValue(testUser.name);
});

test("accepts job input", () => {
    render(<Form />);
    const input = screen.getByLabelText("Job");
    fireEvent.change(input, { target: { value: testUser.job } });
    expect(input).toHaveValue(testUser.job);
});
    
test("handles form submission", () => {
    let formData = {};
    const mockUpdate = (data) => {
    formData = data;
    };
    render(<Form handleSubmit={mockUpdate} />);
    let input = screen.getByLabelText("Name");
    fireEvent.change(input, { target: { value: testUser.name } });
    input = screen.getByLabelText("Job");
    fireEvent.change(input, { target: { value: testUser.job } });
    const button = screen.getByRole("button", { type: "submit" });
    fireEvent.click(button);
    expect(formData).toHaveProperty("name", testUser.name);
    expect(formData).toHaveProperty("job", testUser.job);
});