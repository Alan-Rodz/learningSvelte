<!--- Script --------------------------------------------------------------------->
<script lang='ts'>
	let yes = false;
</script>

<!--- UI ------------------------------------------------------------------------->
<h1>CheckBoxBinding</h1>
<label>
	<input type=checkbox bind:checked={yes}>
	Yes! Send me regular email spam
</label>

{#if yes}
	<p>Thank you. We will bombard your inbox and sell your personal details.</p>
{:else}
	<p>You must opt in to continue. If you're not paying, you're the product.</p>
{/if}

<button disabled={!yes}>
	Subscribe
</button>

<!--- Style ----------------------------------------------------------------------->
<style>

  label { color: blue; }
  input { color: green; }
  button { color: red; }

</style>