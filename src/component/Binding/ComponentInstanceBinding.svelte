<!--- Script --------------------------------------------------------------------->
<!-- we can bind the instance of <InputField> to a variable named field in the same way we did when binding DOM Elements -->
<script lang='ts'>
	import InputField from './InputField.svelte';

	let field: any/*meant to be the input field component's type*/;
</script>

<!--- UI ------------------------------------------------------------------------->
<h1>Component Instance Binding</h1>
<InputField bind:this={field}/>
<button on:click={() => field.focus()}>Focus field</button>

<!--- Style ---------------------------------------------------------------------->
<!-- Explicitly Nothing -->