import React from 'react';

const rsnRadioUrl = 'http://rsncast.dyn.rsn.net.au:6330/rsn';
class FKRSNRadioPlayer extends React.Component{
    constructor() {
        super();
        this.onPlayButtonClicked = this.onPlayButtonClicked.bind(this, Date.now());
        this.state = {
            soundId: 'sound_' + Date.now(),
            isPlaying: false,
        }
    }
    componentDidMount() {
        if (!window.soundManager) {
            const script = document.createElement('script');
            // script.src = 'http://www.schillmania.com/projects/soundmanager2/script/soundmanager2.js';
            script.src = 'https://rsn.net.au/rsn/wp-content/plugins/compact-wp-audio-player/js/soundmanager2-nodebug-jsmin.js?ver=4.7.4';
            script.onload = function () {
                window.soundManager.setup({
                    // url: 'http://www.schillmania.com/projects/soundmanager2/swf',
                    url: 'https://rsn.net.au/rsn/wp-content/plugins/compact-wp-audio-player/swf',
                    // debugMode: true,
                    consoleOnly: true,
                    useConsole: true,
                });
            };
            document.head.appendChild(script);
        }
    }
    componentWillUnmount() {
        const { soundId } = this.state;
        const soundManager = window.soundManager;
        soundManager.unload(soundId);
        soundManager.destroySound(soundId);
    }

    onPlayButtonClicked = () => {
        const { soundId, isPlaying } = this.state;
        const soundManager = window.soundManager;
        // sound manger will return the existing object if the same id exists
        soundManager.createSound({
            id: soundId,
            volume: '100',
            url: rsnRadioUrl,
        });

        if (isPlaying) {
            soundManager.pause(soundId);
        } else {
            soundManager.play(soundId);
        }       
        this.setState({ isPlaying: !isPlaying });
    }
    render() {
        const { isPlaying } = this.state;
        return <div>
            <span onClick={this.onPlayButtonClicked} >
                LIVE RACING - Listen here
                {isPlaying && <span className="speaker-icon" />}
            </span>
        </div >;
    }

};

export default FKRSNRadioPlayer;
