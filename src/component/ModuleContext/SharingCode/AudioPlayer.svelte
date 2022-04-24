<!--- Script --------------------------------------------------------------------->
<!-- Code contained inside it will run once, when the module first evaluates, rather than when a component is instantiated -->
<script lang='ts' context='module'>
	let current: string;
</script>

<script>
	export let src: string;
	export let title: string;
	export let composer: string;
	export let performer: string;

	let audio: string;
	let paused = true;

	function stopOthers() {
		if (current && current !== audio) current.pause();
		current = audio;
	}
</script>

<!--- UI ------------------------------------------------------------------------->
<article class:playing={!paused}>
	<h2>{title}</h2>
	<p><strong>{composer}</strong> / performed by {performer}</p>

	<audio
		bind:this={audio}
		bind:paused
		on:play={stopOthers}
		controls
		{src}
	></audio>
</article>

<!--- Style ---------------------------------------------------------------------->
<style>
	article { margin: 0 0 1em 0; max-width: 800px; }
	h2, p { margin: 0 0 0.3em 0; }
	audio { width: 100%; margin: 0.5em 0 1em 0; }
	.playing { color: #ff3e00; }
</style>