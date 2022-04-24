<!--- Script --------------------------------------------------------------------->
<script>
	let user = {
		firstname: 'Ada',
		lastname: 'Lovelace'
	};
</script>

<!--- UI ------------------------------------------------------------------------->
<h1>Debugging</h1>
<input bind:value={user.firstname}>
<input bind:value={user.lastname}>

{@debug user}
<!-- If you now open your devtools and start interacting with the <input> elements, you'll trigger the debugger as the value of user changes. -->
<h2>Hello {user.firstname}!</h2>

<!--- Style ---------------------------------------------------------------------->
<!-- Explicitly Nothing -->