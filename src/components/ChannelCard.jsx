import { useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';

import { Box, CardContent, CardMedia, Typography } from '@mui/material'

import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import { demoProfilePicture } from '../utils/constants'

const ChannelCard = ({ channelDetail, marginTop }) => {
  const subNumber = parseInt(channelDetail?.statistics?.subscriberCount).toPrecision();

  const formatSubs = (e) => {
    if (e < 1e3) return (e);
    if (e >=1e3 && e <1e6 ) return Math.trunc((e / 1e3).toFixed(1)) + "K";
  else if (e >=1e6) return (e / 1e6).toFixed(1) + "M";
}

  const newNumber = formatSubs(subNumber);
  console.log(newNumber);

  // formatSubs(subs)
//   useEffect(() =>  { 
    
// }, [])

  return (
    <Box sx={{ 
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: { xs: '356px', md: '320px' },
      height: '326px',
      margin: 'auto',
      marginTop,
    }}>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
          <CardMedia
            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelDetail?.snippet.title}
            sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid e3e3e3' }}
          >
          </CardMedia>
          <Typography variant="h6">
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: 16, color: 'gray', ml: '5px' }} />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {newNumber} Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>

    </Box>
  )
}

export default ChannelCard