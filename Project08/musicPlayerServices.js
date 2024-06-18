import TrackPlayer, {Event, RepeatMode} from 'react-native-track-player';
import {playListData} from './src/constants';

export async function setupPlayer() {
  let isSetup = false;

  try {
    await TrackPlayer.getCurrentTrack();
    isSetup = true;
  } catch (error) {
    await TrackPlayer.setupPlayer();
    // if we're not able to get the current track
    //then we have to setup the player
    isSetup = true;
  } finally {
    return isSetup;
  }
}

//we're adding the audio to the player
export async function addTrack() {
  await TrackPlayer.add(playListData);
  await TrackPlayer.setRepeatMode(RepeatMode.Queue);
}

export async function playbackService() {
  TrackPlayer.addEventListener(Event.RemotePause, () => {
    TrackPlayer.pause();
  });
  TrackPlayer.addEventListener(Event.RemotePlay, () => {
    TrackPlayer.play();
  });
  TrackPlayer.addEventListener(Event.RemoteNext, () => {
    TrackPlayer.skipToNext();
  });
  TrackPlayer.addEventListener(Event.RemotePrevious, () => {
    TrackPlayer.skipToPrevious();
  });
}
