var player = new Clappr.Player({
    source: "rtmp://source_here",
    parentId: "#player-wrapper",
    plugins: {'playback': [RTMP]},
    rtmpConfig: {
        swfPath: 'dist/assets/RTMP.swf',
        scaling:'stretch',
        playbackType: 'live',
        bufferTime: 1,
        startLevel: 0,
        switchRules: {
            "SufficientBandwidthRule": {
                "bandwidthSafetyMultiple": 1.15,
                "minDroppedFps": 2
            },
            "InsufficientBufferRule": {
                "minBufferLength": 2
            },
            "DroppedFramesRule": {
                "downSwitchByOne": 10,
                "downSwitchByTwo": 20,
                "downSwitchToZero": 24
            },
            "InsufficientBandwidthRule": {
                "bitrateMultiplier": 1.15
            }
        }
    },
});