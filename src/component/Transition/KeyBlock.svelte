<!--- Script --------------------------------------------------------------------->
<!-- Key blocks destroy and recreate their contents when the value of an expression changes -->
<!-- This is useful if you want an element to play its transition whenever a value changes instead of only when the element enters or leaves the DOM. -->
<script lang='ts'>
	import { fly } from 'svelte/transition';

	let number = 0;
</script>

<!--- UI ------------------------------------------------------------------------->
<h1>KeyBlock Transitions</h1>
<div>
	The number is:
	{#key number}
		<span style='display: inline-block' in:fly={{ y: -20 }}>
			{number}
		</span>
	{/key}
</div>
<br />
<button
	on:click={() => {
		number += 1;
	}}>
	Increment
</button>

<!--- Style ---------------------------------------------------------------------->
<!-- Explicitly Nothing -->