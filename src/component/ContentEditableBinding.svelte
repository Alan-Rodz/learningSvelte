<!--- Script --------------------------------------------------------------------->
<script lang='ts'>
	let html = '<p>Write some text!</p>';
</script>

<!--- UI ------------------------------------------------------------------------->
<h1>Content Editable Binding</h1>
<div
	contenteditable="true"
	bind:innerHTML={html}
></div>

<pre>{html}</pre>

<!--- Style ---------------------------------------------------------------------->
<style>
	[contenteditable] {
		padding: 0.5em;
		border: 1px solid #eee;
		border-radius: 4px;
	}
</style>