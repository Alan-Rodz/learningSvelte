<!--- Script --------------------------------------------------------------------->
<script lang='ts'>
	import { onDestroy, setContext } from 'svelte';
	import { mapbox, key } from './mapbox';

	setContext(key, {
		getMap: () => map,
	});

	export let lat: number;
	export let lon: number;
	export let zoom: number;

	let container: any;
	let map: any;

	function load() {
		map = new mapbox.Map({
			container,
			style: 'mapbox://styles/mapbox/streets-v9',
			center: [lon, lat],
			zoom,
		});
	}

	onDestroy(() => {
		if (map) map.remove();
	});
</script>

<!--- UI ------------------------------------------------------------------------->
<!-- this special element will be explained in a later section -->
<svelte:head>
	<link
		rel='stylesheet'
		href='https://unpkg.com/mapbox-gl/dist/mapbox-gl.css'
		on:load={load}
	/>
</svelte:head>

<div bind:this={container}>
	{#if map}
		<slot />
	{/if}
</div>

<style>
	div {
		width: 100%;
		height: 100%;
	}
</style>

<!--- Style ---------------------------------------------------------------------->
<!-- Explicitly Nothing -->