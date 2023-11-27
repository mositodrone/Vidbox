import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { Videos, ChannelCard } from './index'
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  const { id } = useParams();

  // console.log(channelDetail, videos);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data) => setChannelDetail(data?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet&maxResults=50&order=date`)
    .then((data) => setVideos(data?.items))
    .then((stuff) => console.log(stuff));
  }, [id])

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          background: 'grey',
          zIndex: 10,
          height: '300px'
        }}
      />
          <ChannelCard channelDetail={channelDetail} marginTop='-114px'/> 
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: '100px' } }} />
          <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail