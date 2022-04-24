<!--- Script --------------------------------------------------------------------->
<script lang='ts'>
	const options = ['h1', 'h3', 'p'];
	let selected = options[0];
</script>

<!--- UI ------------------------------------------------------------------------->
<h1>Element Special Element</h1>
<select bind:value={selected}>
	{#each options as option}
		<option value={option}>{option}</option>
	{/each}
</select>

{#if selected === 'h1'}
<h1>I'm a h1 tag</h1>
{:else if selected === 'h3'}
<h3>I'm a h3 tag</h3>
{:else if selected === 'p'}
<p>I'm a p tag</p>
{/if}

<!-- For some reason this is not being detected as valid syntax -->
<!-- The this value can be any string, or a falsy value — if it's falsy, no element is rendered -->
<!-- <svelte:element this={selected}>I'm a {selected} tag</svelte:element> -->

<!--- Style ---------------------------------------------------------------------->
<!-- Explicitly Nothing -->