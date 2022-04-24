<!--- Script --------------------------------------------------------------------->
<!-- Lifecycle functions must be called while the component is initialising so that the callback is bound to the component instance — not (say) in a setTimeout.  -->
<!-- If the onMount callback returns a function, that function will be called when the component is destroyed. -->
<script lang='ts'>
  import { onMount } from 'svelte';

  function later(delay: number, value: string[]) { return new Promise(resolve => setTimeout(resolve, delay, value)); }
	async function returnPosts() {
		const res = await later(3000, ['Post1', 'Post2', 'Post3']);
		if (res) { return res; } 
    else { throw new Error('Something went wrong!'); }
	}

  let posts: string[] = [];

  // If using fetch, it is recommended to put it inside the onMount
  onMount(async () => {
    posts = await returnPosts() as string[];
  });

</script>

<!--- UI ------------------------------------------------------------------------->
<h1>onMount</h1>
<h2>A bunch of posts</h2>
<div class='posts'>
  {#each posts as post}
    <p>{JSON.stringify(post)}</p>
  {:else}
    <!-- this block renders when posts.length === 0 -->
    <p>loading...</p>
  {/each}
</div>

<!--- Style ---------------------------------------------------------------------->
<style>
  .posts {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 8px;
  }

</style>
