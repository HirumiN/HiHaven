const express = require('express');
const ffmpeg = require('fluent-ffmpeg');
const app = express();
const port = 3000;

app.get('/stream', (req, res) => {
    res.setHeader('Content-Type', 'audio/mpeg');
    
    ffmpeg('./resources/pocari.mp3')
        .inputOptions(['-stream_loop', '-1'])  // -1 means infinite loop
        .format('mp3')
        .audioCodec('libmp3lame')
        .pipe(res, { end: true });
});

app.listen(port, () => {
    console.log(`Streaming server listening at http://localhost:${port}`);
});
