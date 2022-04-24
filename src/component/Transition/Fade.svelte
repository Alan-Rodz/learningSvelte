<!--- Script --------------------------------------------------------------------->
<script lang='ts'>
	import { fade } from 'svelte/transition';
	let visible = true;
</script>

<!--- UI ------------------------------------------------------------------------->
<h1>Fade Transition</h1>
<label>
	<input type='checkbox' bind:checked={visible}>
	visible
</label>

{#if visible}
	<p transition:fade>
		Fades in and out
	</p>
{/if}

<!--- Style ---------------------------------------------------------------------->
<!-- Explicitly Nothing -->