import React from 'react';

const rsnRadioUrl = 'http://rsncast.dyn.rsn.net.au:6330/rsn';
class FKRSNRadioPlayer extends React.Component  {

    static isPlaying= false; // rsn radio is 'global'

    constructor() {
        super();
        this.onPlayButtonClicked = this.onPlayButtonClicked.bind(this);
    }
    componentDidMount() {
        if (!window.soundManager) {
            // having <script src='xx' /> inside jsx won't work becuause https://github.com/facebook/react/issues/654
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

    onPlayButtonClicked = () => {
        const soundId = 'rsn_radio_live';
        const soundManager = window.soundManager;
        // sound manger will return the existing object if the same id exists
        soundManager.createSound({
            id: soundId,
            volume: '100',
            url: rsnRadioUrl,
        });

        if (FKRSNRadioPlayer.isPlaying) {
            soundManager.pause(soundId);
        } else {
            soundManager.play(soundId);
        }       
        FKRSNRadioPlayer.isPlaying = !FKRSNRadioPlayer.isPlaying;
        this.forceUpdate();
    }
    render() {
        return <div>
            <span onClick={this.onPlayButtonClicked} >
                LIVE RACING - Listen here
                {FKRSNRadioPlayer.isPlaying && <span className="speaker-icon" />}
            </span>
        </div >;
    }

};

export default FKRSNRadioPlayer;
