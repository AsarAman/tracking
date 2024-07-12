"use client";
import { List, ListItem, ListItemText, Button } from "@mui/material";
import { useRouter } from "next/navigation";
export default function ItemsList({ items }) {
  const router = useRouter();
  const handleShip = (id) => {
    router.push(`/track/${id}`);
  };
  return (
    <List>
      {items.map((item) => (
        <ListItem key={item.id} divider>
          <ListItemText
            primary={item.name}
            secondary={`Quantity: ${item.quantity}`}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleShip(item.id)}
          >
            Ship
          </Button>
        </ListItem>
      ))}
    </List>
  );
}
