<script lang="ts">
  import {posts } from '../../../../store/store'
  import {page} from '$app/stores'
  import PostItem from '../../../../components/PostItem/PostItem.svelte';

  const postId = $page.params.id;

  const postData = $posts.find(post => post.id === Number(postId))

</script>

{#if postData}
  <PostItem post={postData} isFullPost={true}/>
{:else}
<p>no such post</p>
{/if}
  

<style lang="scss">
  
</style>