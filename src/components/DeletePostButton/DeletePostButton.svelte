<script lang="ts">

  import Icon from "@iconify/svelte";
  import {posts} from "../../store/store"
  import { goto } from "$app/navigation";
  import { base } from "$app/paths";

  export let postId: number;
  export let isFullPost: boolean

  function deletePostFromStore(){
    posts.update(prev => prev.filter(post => post.id !== postId))
    window.localStorage.setItem('posts-data', JSON.stringify($posts))

    if (isFullPost) {
      goto(base)
    }
  }


</script>

<button class="btn-delete" on:click={deletePostFromStore}>
  <Icon icon="bi:trash-fill" />
</button>

<style lang="scss">
  .btn-delete{
    aspect-ratio: 1/1;
    display: flex;
    align-items: center;
    justify-content: center;

    margin-right: .5rem;

    padding: 0.3em;

    border-radius: .2em;

    border: none;

    font-size: 1.3rem;

    cursor: pointer;

    transition: all .2s linear;

    color: #ff5b5b;
    background-color: transparent;

    &:hover{
      color:  #00000055;
      background-color: #ff5b5b;
    }
  }
</style>