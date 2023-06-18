let isSongLoaded = false;

document.addEventListener('click', () => {
    if (isSongLoaded) {
        return;
    }

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

            isSongLoaded = true;
        })
        .catch(error => {
            console.error('Error loading audio:', error);
        });
});

/*window.onload = function () {
    const audio = document.getElementById('hbd-song');
    const buttonPlaySong = document.getElementById('button-play-song');

    buttonPlaySong.addEventListener('click', function () {
        audio.muted = false;
        audio.play();
    });

    // trigger the click event
    buttonPlaySong.click();
};*/