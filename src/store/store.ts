import { writable, type Writable } from "svelte/store";

import type { IPost } from "../components/PostItem/PostItem";

export let posts: Writable<Array<IPost>> = writable();
