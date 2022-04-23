<!--- Script --------------------------------------------------------------------->
<script lang='ts'>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	function sayHello() { dispatch('message', { text: 'Hello!' }); }
</script>

<!--- Script --------------------------------------------------------------------->
<!-- Explicitly nothing -->

<!--- Style ---------------------------------------------------------------------->
<style>/*Explicitly nothing*/</style>