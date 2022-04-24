<!--- Script --------------------------------------------------------------------->
<script lang='ts'>
	let input: HTMLInputElement;

	export function focus() { input.focus(); }
</script>

<!--- UI ------------------------------------------------------------------------->
<input bind:this={input} />

<!--- Style ---------------------------------------------------------------------->
<!-- Explicitly Nothing -->