<!--- Script --------------------------------------------------------------------->
<!-- Local transitions, only play when the block with the transition itself is added or removed -->
<script>
	import { slide } from 'svelte/transition';

	let showItems = true;
	let i = 5;
	let items = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
</script>

<!--- UI ------------------------------------------------------------------------->
<h1>Local Transitions</h1>
<label>
	<input type='checkbox' bind:checked={showItems}>
	show list
</label>

<label>
	<input type='range' bind:value={i} max=10>
</label>

{#if showItems}
	{#each items.slice(0, i) as item}
		<div transition:slide|local>
			{item}
		</div>
	{/each}
{/if}

<!--- Style ---------------------------------------------------------------------->
<style>
	div {
		padding: 0.5em 0;
		border-top: 1px solid #eee;
	}
</style>