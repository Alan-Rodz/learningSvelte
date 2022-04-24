<!--- Script --------------------------------------------------------------------->
<script lang='ts'>
	let hovering: boolean;

	function enter() { hovering = true; }

	function leave() { hovering = false; }
</script>

<!--- UI ------------------------------------------------------------------------->
<div on:mouseenter={enter} on:mouseleave={leave}>
	<slot hovering={hovering}></slot>
</div>

<!--- Style ---------------------------------------------------------------------->
<!-- Explicitly Nothing -->