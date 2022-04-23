<!--- Script --------------------------------------------------------------------->
<script lang='ts'>
	let count = 0;

	function handleClick() { count += 1; }
</script>

<!--- UI ------------------------------------------------------------------------->
<button on:click={handleClick}>
	Clicked {count} {count === 1 ? 'time' : 'times'}
</button>

<!--- Style ----------------------------------------------------------------------->
<style>
  button { color: blue; }
</style>