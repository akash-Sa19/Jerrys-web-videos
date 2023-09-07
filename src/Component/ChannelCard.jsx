import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { demoProfilePicture } from "./utils/constants";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";

const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
    <Box
      sx={{
        boxShawdow: "none",
        borderRadius: "20px",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // width: {xs: '356px', md: '320px' },
        // width: { xs: "90vw", sm: "320px", md: "320px",lg: '300px', xl: "380px" },
        width: {
          xs: "90vw",
          sm: "320px",
          md: "35.55vw",
          lg: "25vw",
          xl: "20.83vw",
        },
        minWidth: { sm: "320px", md: "320px", lg: '300px', xl: '320px' },
        height: '326px',
        margin: 'auto',
        marginTop,
        color: '#000'
        // border: 'solid white 1px'
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "black",
          }}
        >
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography varient="h6" sx={{color: '#000'}}>
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: 14, color: "gray", ml: "5px" }} />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (<Typography sx={{color: '#000'}}>
            {parseInt(channelDetail?.statistics?.susbscriberCount).toLocaleString }Subscriber
          </Typography>)}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
