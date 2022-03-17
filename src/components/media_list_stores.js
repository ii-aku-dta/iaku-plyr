import { writable } from "svelte/store";
export let selected = 'youngswurve.app'
export let _selected = 'youngswurve.app'
export let selected_media = writable(selected);
export let selected_poster = writable(_selected);
export let cookie = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1bm92ZnJ5bGlsZGJ6cXZ3b2F4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY0NzQwMTAyOSwiZXhwIjoxOTYyOTc3MDI5fQ.YRIlrai7CJju3v1ZXnvrmHolCprYt73FbfgreQ-u89c'
export let selected_cookie = writable(cookie);