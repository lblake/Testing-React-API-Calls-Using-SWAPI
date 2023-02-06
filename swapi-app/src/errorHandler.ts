import { rest } from 'msw';

export const errorHandlers = [
  rest.get('https://swapi.dev/api/people/1', (req, res, ctx) => {
    return res(
      ctx.status(418),
      ctx.json({ success: false, message: "418 I'm a tea pot 🫖, silly" })
    );
  }),

  rest.get('https://swapi.dev/api/people/1', (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({
        success: false,
        message: 'Oops... something went wrong, try again 🤕',
      })
    );
  }),
];
