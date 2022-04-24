<!--- Script --------------------------------------------------------------------->
<script lang='ts'>
  const emojis: { [key: string]: string } = {
    apple: '🍎',
    banana: '🍌',
    carrot: '🥕',
    doughnut: '🍩',
    egg: '🥚',
  };

  // the name is updated whenever the prop value changes...
  export let name: string;

  // ...but the 'emoji' variable is fixed upon initialisation of the component
  const emoji = emojis[name];
</script>

<!--- UI ------------------------------------------------------------------------->
<p>
  <span>The emoji for {name} is {emoji}</span>
</p>

<!--- Style ----------------------------------------------------------------------->
<style>
  p { margin: 0.8em 0; }
  span {
    display: inline-block;
    padding: 0.2em 1em 0.3em;
    text-align: center;
    border-radius: 0.2em;
    background-color: #ffdfd3;
  }
</style>
