"use client";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  GoogleMap,
  Marker,
  Polyline,
  
  useJsApiLoader,
} from "@react-google-maps/api";
import { Container, Button, Box, Typography } from "@mui/material";

//initial dummy locations
const warehouseLocation = { lat: 37.7749, lng: -122.4194 }; // Example warehouse location (San Francisco)
const destinationLocation = { lat: 34.0522, lng: -118.2437 }; // Example destination location (Los Angeles)

//styles for the map
const containerStyle = {
  width: "100%",
  height: "400px",
};

export default function Track({ params }) {
  const router = useRouter();
  const { id } = params;

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
   
  });

 

  const [position, setPosition] = useState(warehouseLocation);

  useEffect(() => {
    // If there is no 'id', exit early
    if (!id) return;
    // Function to calculate the new position of the item moving towards the destination
    const moveTowardsDestination = () => {
      setPosition((prevPosition) => {
        // Calculate the differences in latitude and longitude between the current position and the destination
        const deltaLat = destinationLocation.lat - prevPosition.lat;
        const deltaLng = destinationLocation.lng - prevPosition.lng;
        // Calculate the straight-line distance to the destination using the Pythagorean theorem
        const distance = Math.sqrt(deltaLat * deltaLat + deltaLng * deltaLng);

        // Stop moving when close enough to the destination
        if (distance < 0.01) {
          // Clear the interval to stop the updates
          clearInterval(interval);
          // Set the position to the exact destination coordinates
          return destinationLocation;
        }

        // Define the step size, controlling how far the item moves per update
        const stepSize = 0.05;
        // Calculate the step in latitude and longitude
        const stepLat = (deltaLat / distance) * stepSize;
        const stepLng = (deltaLng / distance) * stepSize;
        // Update the position by adding the step to the current position
        return {
          lat: prevPosition.lat + stepLat,
          lng: prevPosition.lng + stepLng,
        };
      });
    };

    // Set up an interval to update the position every second (1000 milliseconds)
    const interval = setInterval(moveTowardsDestination, 1000);
    // Cleanup function to clear the interval when the component unmounts or 'id' changes
    return () => clearInterval(interval);
  }, [id]);

  // Function to handle the completion of the delivery process
  const handleCompleteDelivery = () => {
    // Display an alert message to the user indicating the delivery was successful
    alert("Successfully Delivered");

    // navigate the user back to the homepage
    router.push("/");
  };

  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Tracking Item {id}
        </Typography>
        {!isLoaded ? <Typography variant="h4" component="h2" >
          Loading...
        </Typography> : (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={position}
            zoom={6}
          >
            <Marker position={warehouseLocation} label="Warehouse" />
            <Marker position={destinationLocation} label="Destination" />
            <Marker position={position} label="Item" />
            <Polyline
              path={[warehouseLocation, position, destinationLocation]}
              options={{ strokeColor: "#FF0000" }}
            />
          </GoogleMap>
        )}

        <Button
          style={{ marginTop: "1rem" }}
          variant="contained"
          color="primary"
          onClick={handleCompleteDelivery}
        >
          Complete Delivery
        </Button>
      </Box>
    </Container>
  );
}
