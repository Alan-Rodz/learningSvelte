<!--- Script --------------------------------------------------------------------->
<script lang='ts'>
  // Intro
  import Basic from '../component/Intro/Basic.svelte';

  // Reactivity
  import Counter from '../component/Reactivity/Counter.svelte';
  import Numbers from '../component/Reactivity/Numbers.svelte';

  // Props
  import Props from '../component/Props/Props.svelte';

  // Logic
  import LoginButton from '../component/Logic/LoginButton.svelte';
  import Logic from '../component/Logic/Logic.svelte';
  import Each from '../component/Logic/Each.svelte';
  import Promise from '../component/Logic/Promise.svelte';

  // Events
  import MouseEvent from '../component/Event/MouseEvent.svelte';
  import EventModifier from '../component/Event/EventModifier.svelte';
  import EventDispatch from '../component/Event/EventDispatch.svelte';
  import Outer from '../component/Event/Outer.svelte';
  import EventForwarding from '../component/Event/EventForwarding.svelte';
  import Bind from '../component/Binding/Bind.svelte';
  import BindingConfig from '../component/Binding/BindingConfig.svelte';
  import CheckBoxBinding from '../component/Binding/CheckBoxBinding.svelte';
  import Grouping from '../component/Binding/Grouping.svelte';
  import TextAreaBinding from '../component/Binding/TextAreaBinding.svelte';
  import SelectBinding from '../component/Binding/SelectBinding.svelte';
  import SelectMultiple from '../component/Binding/SelectMultiple.svelte';
  import ContentEditableBinding from '../component/Binding/ContentEditableBinding.svelte';
  import EachBinding from '../component/Binding/EachBinding.svelte';
  import AudioVideoBinding from '../component/Binding/AudioVideoBinding.svelte';
  import DimensionBinding from '../component/Binding/DimensionBinding.svelte';
  import ThisBinding from '../component/Binding/ThisBinding.svelte';
  import ComponentBinding from '../component/Binding/ComponentBinding.svelte';
  import ComponentInstanceBinding from '../component/Binding/ComponentInstanceBinding.svelte';

  // Lifecycle
  import OnMount from '../component/Lifecycle/Mount.svelte';
  import OnDestroy from '../component/Lifecycle/Destroy.svelte';
  import BeforeAndAfter from '../component/Lifecycle/BeforeAndAfter.svelte';
  import Tick from '../component/Lifecycle/Tick.svelte';

  // Stores
  import WritableStore from '../component/Store/Writable/WritableStore.svelte';
  import ReadableStore from '../component/Store/Readable/ReadableStore.svelte';
  import DerivedStore from '../component/Store/Derived/DerivedStore.svelte';
  import CustomStore from '../component/Store/Custom/CustomStore.svelte';
  import StoreBinding from '../component/Store/Binding/StoreBinding.svelte';

  // Motion
  import Tweened from '../component/Motion/Tweened.svelte';
  import Spring from '../component/Motion/Spring.svelte';

  // Transition
  import Fade from '../component/Transition/Fade.svelte';
  import Fly from '../component/Transition/Fly.svelte';
  import InAndOut from '../component/Transition/InAndOut.svelte';
  import Custom from '../component/Transition/Custom.svelte';
  import CustomWithJS from '../component/Transition/CustomWithJS.svelte';
  import WithEvents from '../component/Transition/WithEvents.svelte';
  import Local from '../component/Transition/Local.svelte';
  import Deferred from '../component/Transition/Deferred.svelte';
  import KeyBlock from '../component/Transition/KeyBlock.svelte';

  // Animation
  import AnimateDirective from '../component/Animation/AnimateDirective.svelte';

  // Action
  import UseDirective from '../component/Action/UseDirective.svelte';
  import Longpress from '../component/Action/Longpress.svelte';
  
  // Advanced Styling
  import ClassDirective from '../component/AdvancedStyling/ClassDirective.svelte';
  import ShorthandClassDirective from '../component/AdvancedStyling/ShorthandClassDirective.svelte';
  import InlineStyles from '../component/AdvancedStyling/InlineStyles.svelte';
  
  // Component Composition
  import Slot from '../component/ComponentComposition/Slot.svelte';
  import SlotFallback from '../component/ComponentComposition/SlotFallback.svelte';
  import NamedSlot from '../component/ComponentComposition/NamedSlot.svelte';
  import CheckingForSlotContent from '../component/ComponentComposition/CheckingForSlotContent.svelte';


  // Functions
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
  <ThisBinding />
  <ComponentBinding />
  <ComponentInstanceBinding />

  <!-- Lifecycle -->
  <OnMount />
  <OnDestroy />
  <BeforeAndAfter />
  <Tick />

  <!-- Stores -->
  <WritableStore />
  <ReadableStore />
  <DerivedStore />
  <CustomStore />
  <StoreBinding />

  <!-- Motion -->
  <Tweened />
  <Spring />

  <!-- Transition -->
  <Fade />
  <Fly />
  <InAndOut />
  <Custom />
  <CustomWithJS />
  <WithEvents />
  <Local />
  <Deferred />
  <KeyBlock />

  <!-- Animation -->
  <AnimateDirective />
  
  <!-- Action -->
  <UseDirective />
  <Longpress />
  
  <!-- Advanced Styling -->
  <ClassDirective />
  <ShorthandClassDirective />
  <InlineStyles />

  <!-- Component Composition -->
  <Slot />
  <SlotFallback />
  <NamedSlot />
  <CheckingForSlotContent />

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