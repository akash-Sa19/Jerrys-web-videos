import React, { useState, useEffect } from "react";
import { Box, Typography, Stack } from "@mui/material";
import { Videos} from "./index";

import {fetchFromAPI} from './utils/fetchFromAPI' 
import { useParams } from "react-router-dom";


const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams();
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setVideos(data.items))
  }, [searchTerm])
  return (
    
    <Box
        p={2}
        sx={{ overflow: "auto", height: "90vh", flex: 2,  }}
        width={'97%'}        
      >
        <Typography
          variant="h4"
          fontWeight={`bold`}
          mb={2}
          sx={{ color: "black" }}
        >
          Search Results for: <span style={{ color: "#f31503" }}>{searchTerm}</span>
        </Typography>
        <Stack direction='row' 
        sx={{width: '100%',
        //  border: 'solid red 1px',
         display: 'flex',
         flexDirection: 'row',
         justifyContent: 'space-between',
         alignItems: 'flex-start' }}>
          
        <Videos videos={videos}  />
        </Stack>
      </Box>
  );
};

export default SearchFeed;
