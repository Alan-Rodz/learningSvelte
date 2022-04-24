<!--- Script --------------------------------------------./store----------------->
<script lang='ts'>
	import { count } from './store';

	function decrement() { count.update((n: number) => n - 1); }
</script>

<!--- UI ------------------------------------------------------------------------->
<button on:click={decrement}>-</button>