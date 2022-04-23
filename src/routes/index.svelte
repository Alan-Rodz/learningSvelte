<!--- Script --------------------------------------------------------------------->
<script>
  import Basic from '../component/BasicComponent.svelte';
  import Counter from '../component/CounterComponent.svelte';
  import Numbers from '../component/NumbersComponent.svelte';
  import Props from '../component/PropsComponent.svelte';
  import LoginButtonComponent from '../component/LoginButtonComponent.svelte';
</script>

<!--- UI ------------------------------------------------------------------------->
<div>
  <h1>Svelte Basics</h1>
  <Basic/>
  <Counter/>
  <Numbers/>
  <Props someProp={'Now I know!'}/>
  <LoginButtonComponent/>
</div>

<!--- Style ----------------------------------------------------------------------->
<style>
  h1 { color: darkmagenta; }

  div {
    margin: auto;
    width: 50%;
    border: 3px solid green;
    padding: 10px;
  }
</style>