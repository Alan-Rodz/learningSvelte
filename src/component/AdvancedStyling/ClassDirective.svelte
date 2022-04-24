<!--- Script --------------------------------------------------------------------->
<script>
	let current = 'foo';
</script>

<!--- UI ------------------------------------------------------------------------->
<!-- The selected class is added to the element whenever the value of the expression is truthy, and removed when it's falsy -->
<h1>Class Directive</h1>
<button
	class:selected='{current === 'foo'}'
	on:click='{() => current = 'foo'}'
>foo</button>

<button
	class:selected='{current === 'bar'}'
	on:click='{() => current = 'bar'}'
>bar</button>

<button
	class:selected='{current === 'baz'}'
	on:click='{() => current = 'baz'}'
>baz</button>

<!--- Style ---------------------------------------------------------------------->
<style>
	button { display: block; }

	.selected {
		background-color: #ff3e00;
		color: white;
	}
</style>