<!--- Script --------------------------------------------./store.js-------------->
<script lang='ts'>
	import { count } from './store';
	import Incrementer from './Incrementer.svelte';
	import Decrementer from './Decrementer.svelte';
	import Resetter from './Resetter.svelte';

</script>

<!--- UI ------------------------------------------------------------------------->
<h1>Writable Store</h1>

<!-- Auto-subscription only works with store variables that are declared (or imported) at the top-level scope of a component. -->
<!-- Any name beginning with $ is assumed to refer to a store value.  -->
<!-- It's effectively a reserved character — Svelte will prevent you from declaring your own variables with a $ prefix. -->
<h2>The count is {$count}</h2>

<Incrementer/>
<Decrementer/>
<Resetter/>

<!--- Style ---------------------------------------------------------------------->
<!-- Explicitly Nothing -->