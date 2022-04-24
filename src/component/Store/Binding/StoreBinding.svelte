<!--- Script --------------------------------------------------------------------->
<script>
	import { name, greeting } from './store';
</script>

<!--- UI ------------------------------------------------------------------------->
<h1>Store Binding</h1>
<h2>{$greeting}</h2>

<!-- If a store is writable — i.e. it has a set method — you can bind to its value, just as you can bind to local component state. -->
<!-- Changing the input value will now update name and all its dependents. -->
<input bind:value={$name}>

<!-- We can also assign directly to store values inside a component. -->
<!-- The $name += '!' assignment is equivalent to name.set($name + '!'). -->
<button on:click="{() => $name += '!'}">Add exclamation mark!</button>

<!--- Style ---------------------------------------------------------------------->
<!-- Explicitly Nothing -->