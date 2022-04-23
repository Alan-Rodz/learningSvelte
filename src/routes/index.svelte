<!--- Script --------------------------------------------------------------------->
<script lang='ts'>
  import Basic from '../component/Intro/Basic.svelte';
  import Counter from '../component/Reactivity/Counter.svelte';
  import Numbers from '../component/Reactivity/Numbers.svelte';
  import Props from '../component/Props/Props.svelte';
  import LoginButton from '../component/Logic/LoginButton.svelte';
  import Logic from '../component/Logic.svelte';
  import Each from '../component/Logic/Each.svelte';
  import Promise from '../component/Logic/Promise.svelte';
  import MouseEvent from '../component/Event/MouseEvent.svelte';
  import EventModifier from '../component/Event/EventModifier.svelte';
  import EventDispatch from '../component/Event/EventDispatch.svelte';
  import Outer from '../component/Event/Outer.svelte';
  import EventForwarding from '../component/Event/EventForwarding.svelte';
  import Bind from '../component/Bind.svelte';
  import BindingConfig from '../component/BindingConfig.svelte';
  import CheckBoxBinding from '../component/CheckBoxBinding.svelte';
  import Grouping from '../component/Grouping.svelte';
  import TextAreaBinding from '../component/TextAreaBinding.svelte';
  import SelectBinding from '../component/SelectBinding.svelte';
  import SelectMultiple from '../component/SelectMultiple.svelte';
  import ContentEditableBinding from '../component/ContentEditableBinding.svelte';
  import EachBinding from '../component/EachBinding.svelte';
  import AudioVideoBinding from '../component/Binding/AudioVideoBinding.svelte';
  import DimensionBinding from '../component/DimensionBinding.svelte';

  function handleMessage(event: CustomEvent) { alert(event.detail.text); }
  function handleClick() { alert('Button Clicked'); }
</script>

<!--- UI ------------------------------------------------------------------------->
<div>
  <h1>Svelte Basics</h1>
  <!-- Intro -->
  <Basic />

  <!-- Reactivity -->
  <Counter />
  <Numbers />

  <!-- Props -->
  <Props someProp={'Now I know!'} />

  <!-- Logic -->
  <LoginButton />
  <Logic />
  <Each />
  <Promise />

  <!-- Events -->
  <MouseEvent />
  <EventModifier />
  <EventDispatch />
  <Outer on:message={handleMessage} />
  <EventForwarding on:click={handleClick}/>


  <!-- Binding -->
  <Bind />
  <BindingConfig />
  <CheckBoxBinding />
  <Grouping />
  <TextAreaBinding />
  <SelectBinding />
  <SelectMultiple />
  <ContentEditableBinding />
  <EachBinding />
  <AudioVideoBinding />
  <DimensionBinding />
</div>

<!--- Style ---------------------------------------------------------------------->
<style>
  h1 { color: darkmagenta; }

  div {
    margin: auto;
    width: 50%;
    border: 3px solid green;
    padding: 10px;
  }
</style>