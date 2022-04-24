<!--- Script --------------------------------------------------------------------->
<script lang='ts'>
	import { time, elapsed } from './store';

	const formatter = new Intl.DateTimeFormat('en', {
		hour12: true,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit'
	});
</script>

<!--- UI ------------------------------------------------------------------------->
<h1>Derived Store</h1>
<h2>The time is {formatter.format($time)}</h2>

<p>
	This page has been open for
	{$elapsed} {$elapsed === 1 ? 'second' : 'seconds'}
</p>

<!--- Style ---------------------------------------------------------------------->
<!-- Explicitly Nothing -->