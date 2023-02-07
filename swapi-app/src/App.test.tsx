import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { errorHandlers } from './errorHandler';
import { render, screen, waitFor } from '@testing-library/react';
import App from '/Users/lloyd/bootcamp/testing-react-api-calls-using-swapi/swapi-app/src/App';

const server = setupServer(
  rest.get('https://swapi.dev/api/people/1', (req, res, ctx) => {
    return res(ctx.json({ name: 'LukeSkyWalker' }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Test Star Wars App Functionality', () => {
  test('renders star wars header', () => {
    render(<App />);
    const linkElement = screen.getByText(/star wars api/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('displays a sentence with Luke Skywalker in it', async () => {
    render(<App />);

    await waitFor(() => screen.findByText(/name:/i));

    expect(
      screen.getByText('Name: The force will be with you always Luke Skywalker')
    ).toBeVisible();
  });
});

describe('Test for Error conditions in the App', () => {
  test('handles 500 server error', async () => {
    //inported errors form errorhandler file
    server.use(...errorHandlers);

    render(<App />);

    const error = await screen.findByText(/Oops/i);
    expect(error).toBeInTheDocument();
  });

  test('handles 418 server error', async () => {
    //imported errors from errorhandler file
    server.use(...errorHandlers);

    render(<App />);

    const error = await screen.findByText(/tea/i);
    expect(error).toBeInTheDocument();
  });
});
