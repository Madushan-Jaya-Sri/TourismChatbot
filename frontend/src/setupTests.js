import '@testing-library/jest-dom';
import React from 'react';

// Mock react-markdown
jest.mock('react-markdown', () => {
  return function MockMarkdown({ children }) {
    return <div>{children}</div>;
  };
});

// Mock unist-util-visit-parents
jest.mock('unist-util-visit-parents/do-not-use-color', () => ({
  default: () => {},
}));

// Mock react-router-dom
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  BrowserRouter: ({ children }) => <div>{children}</div>,
  Routes: ({ children }) => <div>{children}</div>,
  Route: ({ children }) => <div>{children}</div>,
  Link: ({ children, to }) => <a href={to}>{children}</a>,
  useNavigate: () => jest.fn(),
  useLocation: () => ({
    pathname: '/',
    search: '',
    hash: '',
    state: null,
  }),
}));

// Create mock axios instance
const mockAxiosInstance = {
  interceptors: {
    request: { use: jest.fn(() => 0), eject: jest.fn() },
    response: { use: jest.fn(() => 0), eject: jest.fn() },
  },
  get: jest.fn(() => Promise.resolve({ data: {} })),
  post: jest.fn(() => Promise.resolve({ data: {} })),
  put: jest.fn(() => Promise.resolve({ data: {} })),
  delete: jest.fn(() => Promise.resolve({ data: {} })),
  defaults: { baseURL: '' },
};

// Mock axios
jest.mock('axios', () => ({
  create: jest.fn(() => mockAxiosInstance),
  interceptors: {
    request: { use: jest.fn(() => 0), eject: jest.fn() },
    response: { use: jest.fn(() => 0), eject: jest.fn() },
  },
  defaults: { baseURL: '' },
}));