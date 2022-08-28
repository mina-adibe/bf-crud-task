import React from "react";
import { Box } from "@mui/system";
import { Container, IconButton, InputBase, Paper } from "@mui/material";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";

const Search = ({ handleChange }) => {
  return (
    <React.Fragment>
      <Container>
        <Box>
          <Paper
            component="div"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: "35vw",
              my: "20px",
              mx: "auto",
            }}>
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <PersonSearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search posts"
              onChange={handleChange}
              name="search"
              inputProps={{ "aria-label": "Search posts by body or title" }}
            />
          </Paper>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Search;
