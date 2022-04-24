<!--- Script --------------------------------------------------------------------->
<script lang='ts'>
	import { fly } from 'svelte/transition';
	let visible = true;
</script>
 
<!--- UI ------------------------------------------------------------------------->
<h1>Fly Transition</h1>
<label>
	<input type='checkbox' bind:checked={visible}>
	visible
</label>

{#if visible}
	<p transition:fly='{{ y: 200, duration: 2000 }}'>
		Flies in and out
	</p>
{/if}
 
<!--- Style ---------------------------------------------------------------------->
<!-- Explicitly Nothing -->