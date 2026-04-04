import React from 'react';
import { useReactMediaRecorder } from "react-media-recorder";
import { Box, Button, Typography } from '@mui/material'; 

const RecordView = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl,previewStream } =
    useReactMediaRecorder({ video: true });

    const VideoPreview = ({ stream }) => {
    const videoRef = React.useRef(null);

    React.useEffect(() => {
      if (videoRef.current && stream) {
        videoRef.current.srcObject = stream;
      }
    }, [stream]);

    return <video ref={videoRef} autoPlay muted style={{ width: '100%', borderRadius: '8px' }} />;
  };

  return(
    <Box sx={{ textAlign: 'center', mb: 2 }}>
      <Typography variant="caption" sx={{ display: 'block', mb: 1 }}>
        Status: <strong>{status}</strong>
      </Typography>

     {/* 1. Show LIVE PREVIEW if recording OR just waiting to start */}
{(status === "recording" || status === "idle") && previewStream && (
  <VideoPreview stream={previewStream} />
)}

{/* 2. Show the PLAYBACK only after they have finished */}
{status === "stopped" && mediaBlobUrl && (
  <video src={mediaBlobUrl} controls style={{ width: '100%', borderRadius: '8px' }} />
)}

      <Box sx={{ mt: 2 }}>
        {status !== "recording" ? (
          <Button variant="contained" color="primary" onClick={startRecording}>
            Start Recording
          </Button>
        ) : (
          <Button variant="contained" color="error" onClick={stopRecording}>
            Stop Recording
          </Button>
        )}
      </Box>
    </Box>
  ) 
};

export default RecordView;