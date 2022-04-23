<!--- Script --------------------------------------------------------------------->
<script lang='ts'>
	let name = 'world';
</script>

<!--- UI ------------------------------------------------------------------------->
<h1>Binding</h1>
<input bind:value={name}>
<h2>Hello {name}!</h2>

<!--- Style ----------------------------------------------------------------------->
<style>
  input { 
    margin-top: 10px;
    display: block;
    color: green; 
  }
  h1 { color: green; }
  h2 { color: green; }
</style>