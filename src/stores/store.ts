import { writable, type Writable } from "svelte/store";

export const allData: Writable<string[]> = writable([]);
