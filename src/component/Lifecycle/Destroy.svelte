<!--- Script --------------------------------------------------------------------->
<script lang='ts'>
	import Timer from './Timer.svelte';

	let open = true;
	let seconds = 0;

	const toggle = () => (open = !open);
	const handleTick = () => (seconds += 1);
</script>

<!--- UI ------------------------------------------------------------------------->
<h1>onDestroy</h1>
<div>
	<button on:click={toggle}>{open ? 'Close' : 'Open'} Timer</button>
	<p>
		The Timer component has been open for
		{seconds} {seconds === 1 ? 'second' : 'seconds'}
	</p>
	{#if open}
	<Timer callback={handleTick} />
	{/if}
</div>

<!--- Style ---------------------------------------------------------------------->
<!-- Explicitly Nothing -->