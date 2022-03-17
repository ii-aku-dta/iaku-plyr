<script>
	import "carbon-components-svelte/css/g90.css";
	import { ButtonSet, Button } from "carbon-components-svelte";
	import Flex from 'svelte-flex';
</script>


<Flex justify="evenly" align="center">
	<div >
		<ButtonSet >
			<div id="button">	<Button kind="secondary" href="/">Home</Button></div>
			<div id="button"><Button href="/about">About</Button></div>
			<div id="button"><Button href="/media_player">Play List 1</Button></div>
		  </ButtonSet>
		</div>
</Flex>


<main class="container">
	<slot></slot>
</main>

<footer class="container">
	{new Date().getFullYear()} &copy; Dreamteam | IAKU
</footer>


<style>
	:global(body, html, #svelte) {
		width: 100vw;
		min-height: 100vh;
		
	}
	:global(#svelte) {
		display: flex;
		flex-direction: column;
	}
	:global(#body) {
		display: flex;
	
	}
	main {
		flex: 1;
		margin-top: 3rem;
	}
	footer {
		margin-top: auto;
		font-size: 0.8em;
		display: flex;
		opacity: 0.5;
	}
	#button {
		margin: 3px;
	}
</style>
