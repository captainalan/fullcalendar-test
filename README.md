In this setup, we serve up [fullcalendar](https://fullcalendar.io/) from our
`node_modules/` using an Express server.

In production, a better procedure would probably be to:

1. Download the `fullcalendar` code (using `npm`, or directly from their website)
2. Serve up the *minified* versions of relevant files using `app.use` and
   `express.static`.
3. Import the relevant minified files into your templates as needed.