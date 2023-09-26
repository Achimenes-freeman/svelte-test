<script lang="ts">
  import type { IPost } from "./PostItem";

  import DeletePostButton from "../DeletePostButton/DeletePostButton.svelte"
  import EditPostButton from "../EditPostButton/EditPostButton.svelte";

  export let post: IPost
  export let isFullPost: boolean

</script>

<div class="post">  
  <div class="post-header">
    <h3 class="post-title">{post.title}</h3>
    <span class="post-tools">
      <EditPostButton postId={post.id}/>
      <DeletePostButton postId={post.id} {isFullPost}/>
      {#if !isFullPost}
        <a href={`/post/${post.id}`} class="post-btn_more">Full post</a>
      {/if}
    </span>
  </div>
  {#if isFullPost}
  <p class="post-description">{post.description}</p>

  {/if}
  <div class="post-date">
    <span class="post-date_create">created: {post.creationDate}</span>

    {#if post.changingDate}
      <span class="post-date_change">changed: {post.changingDate}</span>
    {/if}

  </div>
</div>

<style lang="scss">
  .post{
    padding-inline: 1rem;
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;

    margin-bottom: 2rem;

    border-radius: 8px;
    background-color: #55495e; 

    box-shadow: 0 3px 10px rgba(0,0,0, 0.15);

    &:last-child{
      margin-bottom: 0;
    }

    &-header{
      display: flex;
      align-items:flex-start;
      justify-content: space-between;

      margin-bottom: 1.25rem;

    }

    &-title{
      font-size: 2rem;
    }

    &-tools{
      display: flex;
      justify-content: flex-end;
      align-items: center;

      min-width: 200px;
    }

    &-btn_more{
      display: flex;
      align-items: center;
      justify-content: center;
      align-self: stretch;

      padding: 0.3em .8em;

      border-radius: .2em;

      border: none;

      background-color:  #00000055;
      
      text-decoration: none;
      font-size: 1.1rem;
      color: #e25f9e;

      cursor: pointer;
      
      transition: all .2s linear;

      &:hover{
        background-color: #d6488d;
        color: #fff;
      }
      
    }

    &-description{
      margin-bottom: 1rem;

      font-size: 1.5rem;
      color: #cacaca ;
    }

    &-date{
      display: flex;
      align-items: center;
      justify-content: space-between;

      font-size: .8rem;
      font-weight: 700;
      opacity: 0.4;
    }
  }
</style>