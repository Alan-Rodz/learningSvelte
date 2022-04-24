<!--- Script --------------------------------------------------------------------->
<script lang='ts'>
	export let name: any[];
	$: type = name.slice(name.lastIndexOf('.') + 1);
</script>

<!--- UI ------------------------------------------------------------------------->
<span style='background-image: url(/tutorial/icons/{type}.svg)'>{name}</span>

<!--- Style ---------------------------------------------------------------------->
<style>
	span {
		padding: 0 0 0 1.5em;
		background: 0 0.1em no-repeat;
		background-size: 1em 1em;
	}
</style>
