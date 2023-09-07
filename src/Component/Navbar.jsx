import React from "react";
import { Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "./utils/constants";

import {SearchBar} from './index.js'
const Navbar = () => {
  return (
    <Stack
      direction={`row`}
      alignItems={`center`}
      p={2}
      sx={{ position: 'sticky', background: '#fff', top: 0, justifyContent: 'space-between', height: '60px' }}
    >
      <Box sx={{ ml: {sm: 2}}}>
      <Link to='/Jerrys-web-videos/' style={{ display: 'flex', alignItems: 'center'}} >
        <img src={logo} alt="Website Logo" height={45} />
      </Link>
      </Box>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
