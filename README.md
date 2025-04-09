# Demo how to use ContextAPI in react for user authenticate

User enter email and password. If valid email and password, api returns token, token is stored in local storage and user can see welcome page

- ContextAPI
- React Router
- Flowbite components
- Unit test with Jest and react testing library
- E2E test with Playwright
- Config CI/CD with Github Actions

User

# Limitation

- This is demo, not call real api to get token

# Requirement

- Node: v18 up

# How to run website

- `bash npm run dev `

# How to run unit test

- `bash npm run test:unit `

# How to run e2e test

- Install playwright
- `npm run test:e2e`
- ` npx playwright test --project=chromium` if you want to see screen on browser
