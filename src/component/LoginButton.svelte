<!--- Script --------------------------------------------------------------------->
<script lang='ts'>
	let user = { loggedIn: false };
	function toggle() { user.loggedIn = !user.loggedIn; }
</script>

<!--- UI ------------------------------------------------------------------------->
{#if user.loggedIn}
	<button on:click={toggle}>
		Log out
	</button>
{/if}

{#if !user.loggedIn}
	<button on:click={toggle}>
		Log in
	</button>
{/if}

<!--- Style ----------------------------------------------------------------------->
<style>
  button {
    color: black;
  }
</style>