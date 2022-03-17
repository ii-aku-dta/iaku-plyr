<script lang="ts">
  import MediaList from './media_list.svelte';
	import { onMount } from 'svelte';
	

	import {
		Player,
		Video, 
    Controls,
		DefaultUi,
		usePlayerStore,
    Scrim,
    ControlSpacer,
    MuteControl,
    PlaybackControl,
    TimeProgress,

	} from '@vime/svelte';
 	

	import { Grid, Row, Column } from "carbon-components-svelte";
	// Custom UI component.
	//import TapSidesToSeek from './TapSidesToSeek.svelte';

	// Obtain a ref if you need to call any methods.
	
	let player= Player;
	/**
	 * All player properties are available through the store. If you prefer, you could also pass 
	 * properties directly to the player and listen for events.
	 */
	const { paused } = usePlayerStore(() => player);
	$paused = false

	const { autoplay } = usePlayerStore(() => player);
	$autoplay = true;

	const onPlaybackReady = () => {
	};



	$: console.log($paused);


  let videos = [
    'https://media.vimejs.com/720p.mp4',
    'https://uoofyfcnmnhiscvbrvvd.supabase.in/storage/v1/object/public/media/videos/2022-01-10 21-07-30.mp4'
  ]

 let current_video = 'video title'; 
  import {selected_media} from '../components/media_list_stores.js';
  import {selected_poster} from '../components/media_list_stores.js';
  let _player;
  let pause_button;

  onMount(async () => {
	_player = document.querySelector('Player');
	pause_button = document.querySelector('button')
  })

  export function pause() {
	  player.pause();
	}

	export function play() {
	  _player.play();
	}
	
	export function handleMessage(event) {

		if (event.detail.text = 'play') 
			
			player.play();
	}

</script>


  
<Grid condensed>
	<Row>
		<Column sm={5} md={4} lg={8} style="outline: 1px solid var(--cds-interactive-04)">
			<div id="container">
				<Player id="player" on:vPlaybackReady={onPlaybackReady()} bind:this={player}
				autoplay style="--vm-player-theme: #1873d3"
			
				>
					<Video crossOrigin="" 
					poster="{$selected_poster}"
				

					>
						<source data-src="{$selected_media}" type="video/mp4">
					</Video>

					<DefaultUi >
						
						<Scrim />
					</DefaultUi>
				</Player>
			</div>
		</Column>
	</Row>	
	<Row>
		
			
				<MediaList on:message={handleMessage}/>
			
	

	</Row>
	<!-- <button type='submit' bind:this={pause_button} on:click="{() => pause()}">pause</button> --> 
</Grid>

<style>
 
	:global(html),
	:global(body) {
		width: 100%;
		height: 100%;
	}

	:global(body) {
		margin: 0;
	
	}

	#container {
	width: auto;
    
	

	}

  :global(vm-playback-control) {
    --vm-control-scale: 1.7;
  }
</style>