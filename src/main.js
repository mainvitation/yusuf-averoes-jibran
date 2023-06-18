window.onload = function () {
    // Create an audio context
    const audioContext = new AudioContext();

    // Load the audio file
    fetch('song/happy-birthday-to-you-dance-20919.mp3')
        .then(response => response.arrayBuffer())
        .then(buffer => audioContext.decodeAudioData(buffer))
        .then(decodedData => {
            // Play the audio
            const source = audioContext.createBufferSource();
            source.buffer = decodedData;
            source.connect(audioContext.destination);
            source.start();
        })
        .catch(error => {
            console.error('Error loading audio:', error);
        });
};