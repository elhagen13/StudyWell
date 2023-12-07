import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TotalTask from './TotalTask'; // Assuming your component file is named TotalTask.js
import ReactTestRenderer from 'react-test-renderer';

// Mock props for testing
const mockTasks = ['Task 1', 'Task 2'];
const mockUpdateList = jest.fn();
const mockUpdateToDo = jest.fn();

describe('TotalTask Component', () => {
  it('renders TotalTask component correctly', () => {
    const { getByText, getByTestId } = render(
      <TotalTask tasks={mockTasks} updateList={mockUpdateList} updateToDo={mockUpdateToDo} />
    );

    // Test rendering of components or elements within TotalTask
    expect(getByText('Tasks')).toBeInTheDocument();
    expect(getByTestId('closeButton')).toBeInTheDocument();
    // You can add more assertions based on your component's structure
  });


  it('handles toggleParentComponent correctly', () => {
    const { getByTestId } = render(
      <TotalTask tasks={mockTasks} updateList={mockUpdateList} updateToDo={mockUpdateToDo} />
    );

    const closeButton = getByTestId('closeButton');

    // Test toggle functionality
    fireEvent.click(closeButton);
    expect(closeButton).toHaveTextContent('▼'); // Assuming it starts with isVisible as true

    fireEvent.click(closeButton);
    expect(closeButton).toHaveTextContent('▲');
  });

  // You can add more test cases to cover other functionalities like removeTask and updateList
});
