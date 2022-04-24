<!--- Script --------------------------------------------------------------------->
<!-- The <svelte:options> element allows you to specify compiler options. -->
<svelte:options immutable={true}/>
<script lang='ts'>
	import { afterUpdate } from 'svelte';
	import flash from './flash';

  type Todo = {
    id: number;
    done: boolean;
    text: string;
  }

	export let todo: Todo;

	let div: HTMLDivElement;

	afterUpdate(() => {
		flash(div);
	});
</script>

<!--- UI ------------------------------------------------------------------------->
<!-- the text will flash red whenever
     the `todo` object changes -->
<div bind:this={div} on:click>
	{todo.done ? '👍': ''} {todo.text}
</div>

<!--- Style ---------------------------------------------------------------------->
<style>
	div {
		cursor: pointer;
		line-height: 1.5;
	}
</style>