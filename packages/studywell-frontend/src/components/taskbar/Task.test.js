import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import React from "react";
import Task from "./Task";

test("renders the pomodoro counter correctly", () => {
    const {getAllByPlaceholderText } = render(<Task />);  
    
    const pomInputs = getAllByPlaceholderText('# of pomodoros'); 
    const pomInput = pomInputs[0];
    expect(pomInput).toBeInTheDocument();
    });

test('renders "type here..." initially with placeholder style', () => {
    const taskInput = document.querySelector('input[task="task"]');

    expect(taskInput).toHaveStyle({
        fontStyle: 'italic' 
    });
});


test('handles task submission', () => {
    const testTask = { task: 'write essay', pomodoros: 2 }; // Define the test task data
  
    let formData = {};
    const mockUpdate = (data) => {
      formData = data;
    };
  
    render(<Task handleSubmit={mockUpdate} />);
  
    const taskInput = document.querySelector('input[task="task"]');
    fireEvent.change(taskInput, { target: { value: testTask.task } });
    fireEvent.click(taskInput); // simulate click

    const pomodorosInput = screen.getByPlaceholderText('# of pomodoros');
    fireEvent.change(pomodorosInput, { target: { value: testTask.pomodoros } });
  
    const submitButton = screen.getByRole('button', { name: '+' });
    fireEvent.click(submitButton);
  
    expect(formData).toHaveProperty('task', testTask.task);
    expect(formData).toHaveProperty('pomodoros', Number(testTask.pomodoros));

    // retrieve input value after click event
    const inputValueAfterClick = taskInput.value;
  
    expect(inputValueAfterClick).toBe('');
  });