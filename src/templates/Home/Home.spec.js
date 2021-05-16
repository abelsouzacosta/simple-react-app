import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, waitForElementToBeRemoved, screen } from '@testing-library/react';
import Home from '.';

const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/posts', async (req, res, ctx) => {
    return res(
      ctx.json([
        {
          userId: 1,
          id: 1,
          title: 'title 1',
          body: 'body 1',
        },
        {
          userId: 2,
          id: 2,
          title: 'title 2',
          body: 'body 2',
        },
        {
          userId: 3,
          id: 3,
          title: 'title 3',
          body: 'body 3',
        },
      ]),
    );
  }),
  rest.get('https://jsonplaceholder.typicode.com/photos', async (req, res, ctx) => {
    return res(
      ctx.json([
        {
          albumId: 1,
          id: 1,
          title: 'image title 1',
          url: 'img/img1.png',
          thumbnailUrl: 'thumb1',
        },
        {
          albumId: 1,
          id: 2,
          title: 'image title 2',
          url: 'img/img2.png',
          thumbnailUrl: 'thumb2',
        },
        {
          albumId: 1,
          id: 3,
          title: 'image title 3',
          url: 'img/img3.png',
          thumbnailUrl: 'thumb3',
        },
      ]),
    );
  }),
];

const server = setupServer(...handlers);

describe('<Home />', () => {
  // liga o servidor antes dos testes
  beforeAll(() => {
    server.listen();
  });

  // desliga o servidor depois dos testes
  afterAll(() => {
    server.close();
  });

  // depois de cada um dos testes
  afterEach(() => {
    server.resetHandlers();
  });

  it('should render search, posts and load more', async () => {
    render(<Home />);
    const thereAreNoMorePosts = screen.getByText('Unfortunatelly nothing was found');
    await waitForElementToBeRemoved(thereAreNoMorePosts);
    screen.debug();
  });
});
