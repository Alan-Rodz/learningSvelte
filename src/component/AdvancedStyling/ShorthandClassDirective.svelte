<!--- Script --------------------------------------------------------------------->
<script>
	let big = false;
</script>

<!--- UI ------------------------------------------------------------------------->
<h1>Shorthand Class Directive</h1>
<label>
	<input type=checkbox bind:checked={big}>
	big
</label>

<!-- Sames as class:big={big} -->
<div class:big>
	some {big ? 'big' : 'small'} text
</div>

<!--- Style ---------------------------------------------------------------------->
<style>
	.big { font-size: 4em; }
</style>