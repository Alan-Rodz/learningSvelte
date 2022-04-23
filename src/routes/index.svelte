<!--- Script --------------------------------------------------------------------->
<script lang='ts'>
  import Basic from '../component/Basic.svelte';
  import Counter from '../component/Counter.svelte';
  import Numbers from '../component/Numbers.svelte';
  import Props from '../component/Props.svelte';
  import LoginButton from '../component/LoginButton.svelte';
  import Logic from '../component/Logic.svelte';
  import Each from '../component/Each.svelte';
  import Promise from '../component/Promise.svelte';
  import MouseEvent from '../component/MouseEvent.svelte';
  import EventModifier from '../component/EventModifier.svelte';
  import EventDispatch from '../component/EventDispatch.svelte';
  import Outer from '../component/Outer.svelte';
  import EventForwarding from '../component/EventForwarding.svelte';
  import Bind from '../component/Bind.svelte';
  import BindingConfig from '../component/BindingConfig.svelte';

  function handleMessage(event: CustomEvent) { alert(event.detail.text); }
  function handleClick() { alert('Button Clicked'); }
</script>

<!--- UI ------------------------------------------------------------------------->
<div>
  <h1>Svelte Basics</h1>
  <Basic />
  <Counter />
  <Numbers />
  <Props someProp={'Now I know!'} />
  <LoginButton />
  <Logic />
  <Each />
  <Promise />
  <MouseEvent />
  <EventModifier />
  <EventDispatch />
  <Outer on:message={handleMessage} />
  <EventForwarding on:click={handleClick}/>
  <Bind />
  <BindingConfig />
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