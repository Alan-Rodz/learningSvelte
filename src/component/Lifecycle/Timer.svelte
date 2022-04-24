<!--- Script --------------------------------------------------------------------->
<script lang='ts'>
	import { onInterval } from './utils';

	export let callback;
	export let interval = 1000;

	onInterval(callback, interval);
</script>

<!--- UI ------------------------------------------------------------------------->
<p>
	This component executes a callback every 
	{interval} millisecond{interval === 1 ? '' : 's'}
</p>

<!--- Style ---------------------------------------------------------------------->
<style>
	p { 
		border: 1px solid blue;
		padding: 5px;
	}
</style>
