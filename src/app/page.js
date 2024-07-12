import { Container, Typography, Paper } from "@mui/material";

import fs from "fs";
import path from "path";
import ItemsList from "@/components/itemlist";

export default function Home() {
  // Construct the path to the 'warehouse.json' file
  const filePath = path.join(process.cwd(), "warehouse.json");

  // Read the content of the 'warehouse.json' file synchronously
  const jsonData = fs.readFileSync(filePath, "utf-8");

  // Parse the JSON data into a JavaScript object
  const items = JSON.parse(jsonData);

  return (
    <Container  maxWidth="md">
      <Typography textAlign="center" variant="h4" component="h1" gutterBottom>
        Warehouse Inventory
      </Typography>
      <Paper elevation={3} style={{ padding: "20px" }}>
        <ItemsList items={items} />
      </Paper>
    </Container>
  );
}
