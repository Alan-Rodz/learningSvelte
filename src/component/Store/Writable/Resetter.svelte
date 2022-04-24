<!--- Script --------------------------------------------./store.js-------------->
<script>
	import { count } from './store';
	function reset() { count.set(0); }
</script>

<!--- UI ------------------------------------------------------------------------->
<button on:click={reset}>reset</button>