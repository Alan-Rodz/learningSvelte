<!--- Script --------------------------------------------------------------------->
<script lang='ts'>
	import ContactCard from './ContactCard.svelte';
</script>

<!--- UI ------------------------------------------------------------------------->
<h1>Named Slot</h1>
<ContactCard>
	<span slot='name'>
		P. Sherman
	</span>

	<span slot='address'>
		42 Wallaby Way<br>
		Sydney
	</span>
</ContactCard>

<!--- Style ---------------------------------------------------------------------->
<!-- Explicitly Nothing -->