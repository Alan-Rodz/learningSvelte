<!--- Script --------------------------------------------------------------------->
<script lang='ts'>
	import { time } from './store';

	const formatter = new Intl.DateTimeFormat('en', {
		hour12: true,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit'
	});

</script>

<!--- UI ------------------------------------------------------------------------->
<h1>Readable Store</h1>
<h2>The time is {formatter.format($time)}</h2>

<!--- Style ---------------------------------------------------------------------->
<!-- Explicitly Nothing -->