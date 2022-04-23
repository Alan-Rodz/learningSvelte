<!--- Script --------------------------------------------------------------------->
<script lang='ts'>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	function sayHello() { dispatch('message', { text: 'Hello!' }); }

  export let content = '';
</script>

<!--- Script --------------------------------------------------------------------->
<button on:click={sayHello}>
	{content ? content : 'Click to say Hello!'}
</button>

<!--- Style ---------------------------------------------------------------------->
<style>
	button { 
		display: block;
		margin-top: 10px;
		color: cornflowerblue; 
	}
</style>