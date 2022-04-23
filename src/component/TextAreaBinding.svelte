<!--- Script --------------------------------------------------------------------->
<script lang='ts'>
	import { marked } from 'marked';
	let value = `Some words are *italic*, some are **bold**`;
</script>

<!--- UI ------------------------------------------------------------------------->
<h1>Text Area Binding</h1>
<textarea bind:value></textarea>
{@html marked(value)}

<!--- Style ----------------------------------------------------------------------->
<style>
	textarea { width: 100%; height: 200px; }
</style>
