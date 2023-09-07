import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import { Navbar, SearchFeed, Feed, VideoDetail, ChannelDetail } from "./Component";


const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#fff", width: '100vw' }}>
        <Navbar />
        <Routes>
            <Route path="/Jerrys-web-videos/" exact element= {<Feed />} />
            <Route path="/video/:id"  element={<VideoDetail />} />
            <Route path="/channel/:id"  element={<ChannelDetail />} />
            <Route path="/search/:searchTerm"  element={<SearchFeed />}/>

        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
