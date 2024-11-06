import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  test('renders without crashing', async () => {
    render(<App />);
    
    // Wait for any initial async operations to complete
    await waitFor(() => {
      // Add your assertions here based on what should be visible in your App
      // For example:
      // expect(screen.getByRole('main')).toBeInTheDocument();
    });
  });
});