<!--- Script --------------------------------------------------------------------->
<script lang='ts'>
	let m = { x: 0, y: 0 };

	function handleMousemove(event: MouseEvent) {
		m.x = event.clientX;
		m.y = event.clientY;
	}
</script>

<!--- UI ------------------------------------------------------------------------->
<div on:mousemove={handleMousemove}>
	The mouse position within this div is {m.x} x {m.y}
</div>

<!--- Style ----------------------------------------------------------------------->
<style>
	div { 
		width: 100%; 
		height: 100%; 
		background-color: cornsilk;
	}
</style>