<!--- Script --------------------------------------------------------------------->
<!-- Explicitly Nothing -->

<!--- UI ------------------------------------------------------------------------->
<!-- Before a component can accept children, though, it needs to know where to put them. We do this with the <slot> element -->
<div class='box'>
	<slot></slot>
</div>

<!--- Style ---------------------------------------------------------------------->
<style>
	.box {
		width: 300px;
		border: 1px solid #aaa;
		border-radius: 2px;
		box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
		padding: 1em;
		margin: 0 0 1em 0;
	}
</style>