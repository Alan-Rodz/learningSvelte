<!--- Script --------------------------------------------------------------------->
<script lang='ts'>
  function later(delay: number, value: number) {
    return new Promise(resolve => setTimeout(resolve, delay, value));
  }

	async function generateDelayedNumber() {
		const res = await later(3000, 10);
		if (res) { return res; } 

    else { throw new Error('Something went wrong!'); }
	}

	let promise = generateDelayedNumber();
	function handleClick() { promise = generateDelayedNumber(); }
</script>

<!--- UI ------------------------------------------------------------------------->
<button on:click={handleClick}>
	Click to await a number
</button>

{#await promise then value}
	<p>the value is {value}</p>
{/await}

<!--- Style ----------------------------------------------------------------------->
<style>
  button { color: chocolate; }
</style>