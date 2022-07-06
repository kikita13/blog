import { Container } from "@mui/material";
import TextField from "@mui/material/TextField/TextField";


export const PostsSearch = ({value, setValue}: {value: string, setValue: any}) => {

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

