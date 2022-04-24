<!--- Script --------------------------------------------------------------------->
<script lang='ts'>
	import Todo from './Todo.svelte';

  type Todo = {
    id: number;
    done: boolean;
    text: string;
  }

	let todos: Todo[] = [
		{ id: 1, done: true, text: 'wash the car' },
		{ id: 2, done: false, text: 'take the dog for a walk' },
		{ id: 3, done: false, text: 'mow the lawn' }
	];

	function toggle(toggled: Todo) {
		todos = todos.map(todo => {
			if (todo === toggled) {
				// return a new object
				return {
					id: todo.id,
					text: todo.text,
					done: !todo.done
				};
			}

			// return the same object
			return todo;
		});
	}
</script>

<!--- UI ------------------------------------------------------------------------->
<h1>Option Special Element</h1>
<h2>Todos</h2>
{#each todos as todo}
	<Todo {todo} on:click={() => toggle(todo)}/>
{/each}

<!--- Style ---------------------------------------------------------------------->
<!-- Explicitly Nothing -->