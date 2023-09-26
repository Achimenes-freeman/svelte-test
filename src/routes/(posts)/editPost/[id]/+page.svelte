<script lang="ts">
  import { base } from "$app/paths";
  import {posts } from '../../../../store/store'
  import {page} from '$app/stores'
  import ControlPostForm from '../../../../components/ControlPostForm/ControlPostForm.svelte';
  import moment from 'moment';
  import { goto } from '$app/navigation';
  import { onDestroy } from 'svelte';

  const postId = $page.params.id;

  let postWasEdit = false
  let timer: ReturnType<typeof setTimeout>

  const postData = $posts.find(post => post.id === Number(postId))

  onDestroy(()=>{
    if (timer) clearTimeout(timer)
  })

  function editPost(title: string, text: string){

    if (title){
      const editMoment = moment()

      if (postData) {
        postData.title = title;
        postData.description = text;
        postData.changingDate = editMoment.format('lll')
      }

      posts.set([...$posts])

      window.localStorage.setItem('posts-data', JSON.stringify($posts))

      postWasEdit = true

      timer = setTimeout(()=> {
        goto(`${base}/post/${postData?.id}`)
      }, 3000)
    } else {
      alert('fill in Title blank field to continue')
    }
  }
</script>

{#if !postWasEdit}

  <ControlPostForm post={postData} submitHandler={editPost}/>

{:else}

  <div>Post was edit. Redirect to full post in 3s</div>

{/if}