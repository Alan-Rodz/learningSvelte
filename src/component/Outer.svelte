<!--- Script --------------------------------------------------------------------->
<!-- Event Forwarding -->
<script lang='ts'>
	import Inner from './Inner.svelte';
</script>

<!--- UI ------------------------------------------------------------------------->
<!-- Forward all message events -->
<Inner on:message content={'Forwarded Event Hello'}/>