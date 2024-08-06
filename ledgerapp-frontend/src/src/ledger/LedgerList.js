import React from "react";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Container,
  Paper,
} from "@mui/material";

function LedgerList() {
  const ledgers = [
    {
      name: "ayush",
      id: 1,
    },
    {
      name: "kenil",
      id: 2,
    },
    {
      name: "darshti",
      id: 3,
    },
  ];
  return (
    <Container>
      <Paper elevation={3} style={{ padding: 20, marginTop: 20 }}>
        <Typography variant="h4" gutterBottom>
          Ledger List
        </Typography>
        <List>
          {ledgers.map((ledger) => (
            <ListItem
              button
              component={Link}
              to={`/ledger/${ledger.id}`}
              key={ledger.id}
            >
              <ListItemText primary={ledger.name} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
}

export default LedgerList;
