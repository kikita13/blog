import { Container } from "@mui/material";
import TextField from "@mui/material/TextField/TextField";
import { useState } from "react";

export const UsersSearch = () => {
  const [value, setValue] = useState("");

  return (
      <Container maxWidth='md'>
        <TextField
          sx={{
            my: 3,
            mx: "auto"
          }}
          fullWidth
          id="standard-basic"
          label="Search"
          variant="standard"
          type="text"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </Container>
    );
  };

