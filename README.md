# Forno

This is React SPA project using [mockapi](https://mockapi.io/)

## Technologies

- **ReactJS 19**
- **TypeScript**
- **Vite**
- **Redux Toolkit**
- **React Router v6**
- **Axios**
- **CSS-Modules/SCSS**
- **React Content Loader**
- **React Pagination**
- **Lodash.Debounce**
- **Code Splitting (React Loadable, useWhyDidYouUpdate)**

## Setup

Clone project:

```bash
git clone https://github.com/iamgromov/forno
cd forno
```

Install the dependencies:

```bash
npm install
```

## API Configuration

To work with the mockapi, you need to obtain an API key:

1. Register at [mockapi.io](https://mockapi.io/) and create your first project. When you open the project, you'll receive an API endpoint that looks like `https://your_api_key_here.mockapi.io/:endpoint`

2. Create a `.env.local` file in the root of your project and add:

   `VITE_API_URL_KEY=your_api_key_here`

3. Use the key in your code via `import.meta.env.VITE_API_URL_KEY`

4. Also you need to put data from [mock.json](https://github.com/iamgromov/forno/blob/master/src/shared/api/mock.json) to resource data of your API endpoint

## Get Started

Start the dev server:

```bash
npm run dev
```

Build the app for production:

```bash
npm run build
```

Node v24.7.0
