/**
 * A store is simply an object with a subscribe method that allows interested parties to be notified whenever the store value changes. 
 * In WritableStore.svelte, count is a store, and we're setting countValue in the count.subscribe callback.
 * Below we have a writable store, which means it has set and update methods in addition to subscribe.
 */
import { writable } from 'svelte/store';
export const count = writable(0);