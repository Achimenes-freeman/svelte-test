<script lang="ts">
  import { browser } from '$app/environment';
  import {posts} from '../store/store'
  import "../global.scss"
  import { postsData } from '../data/postsData';

  if (browser) {
    const localPostsData = window.localStorage.getItem('posts-data')
    if (localPostsData){
      posts.set(JSON.parse(localPostsData))
    } else {
      posts.set(postsData)
      window.localStorage.setItem('posts-data', JSON.stringify($posts))
    }
  }

</script>

<div class="wrapper">
  <slot/>
</div>

<style lang="scss">
  
  .wrapper{
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    padding: 40px 20px 80px;

  }

</style>