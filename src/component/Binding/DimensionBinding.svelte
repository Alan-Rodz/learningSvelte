<!--- Script --------------------------------------------------------------------->
<script lang='ts'>
	let w: number;
	let h: number;
	let size = 42;
	let text = 'edit me';
</script>

<!--- UI ------------------------------------------------------------------------->
<h1>Dimension Binding</h1>
<input type=range bind:value={size}>
<input bind:value={text}>

<p>size: {w}px x {h}px</p>

<div bind:clientWidth={w} bind:clientHeight={h}>
	<span style="font-size: {size}px">{text}</span>
</div>

<!--- Style ---------------------------------------------------------------------->
<style>
	input { display: block; }
	div { display: inline-block; }
	span { word-break: break-all; }
</style>