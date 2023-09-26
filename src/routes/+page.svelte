<script lang="ts">
  import PostItem from "../components/PostItem/PostItem.svelte";
  import NewPostButton from "../components/NewPostButton/NewPostButton.svelte";
  import { posts } from "../store/store";

  
</script>


<div class="header">
  <h1 class="title">This is posts page</h1>
  <NewPostButton/>
</div>

{#if !$posts}
<p>Loading...</p>

{:else}

  {#if $posts.length === 0}

    <p>There are no posts.<br/>Create a new one</p>

  {:else}

    {#each $posts as post}

      <PostItem {post} isFullPost={false}/>

    {/each}

  {/if}

{/if}



<style lang="scss">

  .header{
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 3rem;

  }

  .title{
    font-size: 3rem;
  }
</style>