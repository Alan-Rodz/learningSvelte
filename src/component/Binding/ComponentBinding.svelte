<!--- Script --------------------------------------------------------------------->
<script lang='ts'>
	import Keypad from './Keypad.svelte';

	let pin: string;
	$: view = pin ? pin.replace(/\d(?!$)/g, '•') : 'enter your pin';

	function handleSubmit() { alert(`submitted ${pin}`); }
</script>

<!--- UI ------------------------------------------------------------------------->
<h1>Component Binding</h1>
<h1 style='color: {pin ? '#333' : '#ccc'}'>{view}</h1>

<!-- Now, when the user interacts with the keypad, the value of pin in the parent component (this file, the h1 above) is immediately updated. -->
<Keypad bind:value={pin} on:submit={handleSubmit}/>

<!--- Style ---------------------------------------------------------------------->
<!-- Explicitly nothing -->
