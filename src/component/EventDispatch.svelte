<!--- Script --------------------------------------------------------------------->
<script lang='ts'>
	import Inner from './Inner.svelte';
	function handleMessage(event: CustomEvent) { alert(event.detail.text); }
</script>

<!--- UI ------------------------------------------------------------------------->
<Inner on:message={handleMessage}/>

<!--- Style ----------------------------------------------------------------------->
<style>/*Explicitly nothing*/</style>