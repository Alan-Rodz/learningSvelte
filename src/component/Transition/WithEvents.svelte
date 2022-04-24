<!--- Script --------------------------------------------------------------------->
<script lang='ts'>
	import { fly } from 'svelte/transition';

	let visible = true;
	let status = 'waiting...';
</script>

<!--- UI ------------------------------------------------------------------------->
<h1>Transition With Events</h1>
<p>status: {status}</p>
<label>
	<input type="checkbox" bind:checked={visible}>
	visible
</label>

{#if visible}
	<p
		transition:fly="{{ y: 200, duration: 2000 }}"
		on:introstart="{() => status = 'intro started'}"
		on:outrostart="{() => status = 'outro started'}"
		on:introend="{() => status = 'intro ended'}"
		on:outroend="{() => status = 'outro ended'}"
	>
		Flies in and out
	</p>
{/if}

<!--- Style ---------------------------------------------------------------------->
<!-- Explicitly Nothing -->