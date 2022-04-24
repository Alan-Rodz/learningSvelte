import mapbox from 'mapbox-gl';

// https://docs.mapbox.com/help/glossary/access-token/
const MAPBOX_ACCESS_TOKEN = '';
mapbox.accessToken = MAPBOX_ACCESS_TOKEN;

const key = Symbol();

export { mapbox, key };