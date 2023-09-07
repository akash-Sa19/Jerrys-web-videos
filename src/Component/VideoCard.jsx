import React from "react";

import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  autocompleteClasses,
} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoThumbnailUrl,
  demoChannelTitle,
  demoChannelUrl,
  demoVideoTitle,
  demoProfilePicture,
  demoVideoUrl,
} from "./utils/constants";

import { Link } from "react-router-dom";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        width: {
          xs: "90vw",
          sm: "320px",
          md: "35.55vw",
          lg: "25vw",
          xl: "20.83vw",
        },
        minWidth: { sm: "320px", md: "320px", lg: '300px', xl: '320px' },
        boxShadow: "none",
        // borderRadius: "none",
        height: "auto",
        // bgcolor: '#fff'
      }}
      variant="outlined"
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{
            width: {
              xs: "100%",
              sm: "320px",
              md: "35.55vw",
              lg: "25vw",
              xl: "20.83vw",
            },
            minWidth: { sm: "320px", md: "320px", lg: '300px', xl: '320px' },
            height: { xs: "180px", xl: "200px" },
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </Link>
      <CardContent
        sx={{
          // backgroundColor: "#1e1e1e",
          backgroundColor: "#fff",
          height: "106px",
        }}
      >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography
            variant="subtitle1"
            fontWeight={`bold`}
            color={`#000`}
          >
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>

        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography
            variant="subtitle2"
            fontWeight={`bold`}
            color={`gray`}
            sx={{ mt: "8px", justifyContent: "center" }}
          >
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "8px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
