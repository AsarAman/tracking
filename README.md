.
├── components
│   └── itemlist.js      # Component to display the list of items
├── pages
│   ├── index.js         # Homepage displaying warehouse inventory
│   └── track
│       └── [id].js      # Page for tracking an item
├── public
│   └── warehouse.json   # JSON file containing the warehouse inventory
├── .env.local           # Environment variables for the project
├── package.json         # Project dependencies and scripts
└── README.md            # Project documentation

1. Setup and Installation:
Clone the repository:

git clone https://github.com/yourusername/tracking-app.git
cd tracking-app

2. Install dependencies:
npm install

3. Add Google Maps API key:
Create a .env file in the root of the project and add your Google Maps API key

4. Run the development server:
npm run dev

Open your browser and navigate to http://localhost:3000 to see the application in action.

Usage
Tracking an Item
Go to the homepage to see the list of items in the warehouse.
Click on the "Ship" button next to an item to start tracking it.
The tracking page will show a map with the item's movement from the warehouse to the destination.
Once the item reaches the destination, an alert will notify you of the successful delivery, and you will be redirected to the homepage.
Code Explanation
Track Component
This component is responsible for rendering the tracking page. It uses the useEffect hook to set up an interval that updates the item's position every second. The moveTowardsDestination function calculates the new position of the item and updates the state accordingly.

Home Component
The homepage displays the list of items in the warehouse. It reads the warehouse.json file, parses the data, and passes it to the ItemsList component for rendering.

ItemsList Component
This component renders the list of items with a button to track each item. When the "Ship" button is clicked, it navigates to the tracking page for the selected item.

Dependencies
Next.js
React
@react-google-maps/api
@mui/material

