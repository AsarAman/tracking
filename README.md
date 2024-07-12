
# Tracking System with Google Maps API

Develop a tracking system feature for a simulated warehouse project using Next.js, Material-UI
(MUI), and Google Maps API. Use mock data to represent the existing warehouse inventory and
order system.


## Installation

Setup & Installation

```bash
  git clone https://github.com/AsarAman/tracking-app.git
  cd tracking-app
```
Install Dependencies

```bash
npm install
```
## Add Google Map API Key
Create a .env.local file in the root of the project and add your Google Maps API key.
## Run Locally




Start the server

```bash
  npm run dev
```


## Usage

Tracking an Item

1. Go to the homepage to see the list of items in the warehouse.
2. Click on the "Ship" button next to an item to start tracking it.
3. The tracking page will show a map with the item's movement from the warehouse to the destination.
4. Once the item reaches the destination, an alert will notify you of the successful delivery, and you will be redirected to the homepage.
## Code Explanation

`Home` Component

The homepage displays the list of items in the warehouse. It reads the warehouse.json file, parses the data, and passes it to the `ItemsList` component for rendering.

`ItemsList` Component

This component renders the list of items with a button to track each item. When the "Ship" button is clicked, it navigates to the tracking page for the selected item.

`Track` Component

This component is responsible for rendering the tracking page. It uses the useEffect hook to set up an interval that updates the item's position every second.
## Dependencies

- [Next](https://nextjs.org/)
- [React](https://react.dev/)
- [@react-google-maps/api](https://www.npmjs.com/package/@react-google-maps/api)
- [Material-UI(MUI)](https://mui.com/)



