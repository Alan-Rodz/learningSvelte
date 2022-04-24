<!--- Script --------------------------------------------------------------------->
<script>
	import Box from './Box.svelte'
</script>

<!--- UI ------------------------------------------------------------------------->
<!-- The <svelte:fragment> element allows you to place content in a named slot without wrapping it in a container DOM element.  -->
<!-- This keeps the flow layout of your document intact. -->
<h1>Fragment Special Element</h1>
<Box>
	<svelte:fragment slot='footer'>
		<p>All rights reserved.</p>
		<p>Copyright (c) 2019 Svelte Industries</p>
	</svelte:fragment>
</Box>

<!--- Style ---------------------------------------------------------------------->
<!-- Explicitly Nothing -->