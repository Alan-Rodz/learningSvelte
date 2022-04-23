<!--- Script --------------------------------------------------------------------->
<script lang='ts'>
	let a = 1;
	let b = 2;
</script>

<!--- UI ------------------------------------------------------------------------->
<h1>Binding with max and mins (config)</h1>
<label>
	<input type=number bind:value={a} min=0 max=10>
	<input type=range bind:value={a} min=0 max=10>
</label>

<label>
	<input type=number bind:value={b} min=0 max=10>
	<input type=range bind:value={b} min=0 max=10>
</label>

<p>{a} + {b} = {a + b}</p>

<!--- Style ----------------------------------------------------------------------->
<style>
	label { display: flex }
	input, p { margin: 6px }
</style>