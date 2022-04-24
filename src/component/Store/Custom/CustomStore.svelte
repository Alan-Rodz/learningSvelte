<!--- Script --------------------------------------------------------------------->
<!-- The count store from the earlier example could include increment, decrement and reset methods and avoid exposing set and update: -->
<script lang='ts'>
	import { count } from './store';
</script>

<!--- UI ------------------------------------------------------------------------->
<h1>Custom Store</h1>
<h2>The count is {$count}</h2>

<button on:click={count.increment}>+</button>
<button on:click={count.decrement}>-</button>
<button on:click={count.reset}>reset</button>

<!--- Style ---------------------------------------------------------------------->
<!-- Explicitly Nothing -->