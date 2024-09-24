# Kueh a React + TypeScript + Vite Demo App

## Hosted

The app is hosted on [https://kueh.onrender.com](https://kueh.onrender.com)

Note: The web app is calling a backend web service providing the graphql endpoint. This is hosted on Render.com free tier. It will sleep when there are 15 minutes of not activity. The app will take around 60 seconds to wake up. Initial load for the app might be a bit slow.

## Prerequisites

Before setting up the app locally, ensure that you have the following installed:

- Node.js
- NPM

```
npm install -g pnpm
```

To install `pnpm` if you don’t have pnpm installed.

## Local Development

1. Clone the repository
   First, clone the repository to your local machine:

```
git clone https://github.com/jibone/graph_menu.git
cd graph_menu
```

2. Install Dependencies
   Run the following commands to install the required dependencies

```
pnpm install
```

3. Run the dev server
   This will run the local server on http://localhost:5173

```
pnpm run dev
```
