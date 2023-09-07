import { Stack, Box } from '@mui/material'
import React from 'react'
import {VideoCard, ChannelCard} from './'

const Videos = ({videos, direction}) => {
    // console.log(videos);
    if(!videos?.length) return 'Loading...'

  return (
    <Stack direction={direction || `row`} flexWrap={`wrap`} justifyContent={`space-between`} 
    gap={1}
    >
        {videos.map((item, idx) => (
            <Box key={idx}>
              {/* {console.log(item)} */}
                {item.id.videoId && <VideoCard video={item} />}
                {/* {console.log(item.id.videoId && <VideoCard video={item} /> )} */}
                {/* {console.log(item.id.videoId )} */}

                {item.id.channelId && <ChannelCard channelDetail={item} />}
            </Box>
        ) )}

    </Stack>
  )
}

export default Videos
