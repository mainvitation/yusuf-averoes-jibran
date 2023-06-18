let isAudioPlaying = false;
const audio = document.getElementById('music');

document.addEventListener('DOMContentLoaded', function() {

    // handle click tab info
    document.getElementById('tab-info').addEventListener('click', function(event) {
        event.preventDefault();

        const $tabInfo = document.getElementById('tab-info');
        
        document.getElementById('page-info').classList.toggle('hidden');
        $tabInfo.classList.toggle('active');
    });

    // handle click tab audio
    document.getElementById('tab-audio').addEventListener('click', function(event) {
        event.preventDefault();

        const $tabAudio = document.getElementById('tab-audio');
        
        // if audio is playing
        if (isAudioPlaying) {
            audio.pause();
            isAudioPlaying = false;
            $tabAudio.querySelector('.material-symbols-outlined').textContent = 'volume_off';
        } else {
            audio.play();
            isAudioPlaying = true;
            $tabAudio.querySelector('.material-symbols-outlined').textContent = 'volume_up';
        }
    });
});