<script lang="ts">
  import { onDestroy } from "svelte";
  import ControlPostForm from "../../../components/ControlPostForm/ControlPostForm.svelte";
  import { goto } from "$app/navigation";
  import { posts } from "../../../store/store";
  import moment from "moment";
  import type { IPost } from "../../../components/PostItem/PostItem";
  import { base } from "$app/paths";

  let postWasCreated = false;
  let timer: ReturnType<typeof setTimeout>

  onDestroy(()=>{
    if (timer) clearTimeout(timer)
  })

  function createNewPost(title: string, text: string){

    if (title){
      const creationMoment = moment()

      const newPost: IPost = {
        id: creationMoment.unix(),
        title: title,
        description: text,
        creationDate: creationMoment.format('lll'),
        changingDate: ''
      }

      posts.update(prev => [...prev, newPost])

      window.localStorage.setItem('posts-data', JSON.stringify($posts))

      postWasCreated = true

      timer = setTimeout(()=> {
        goto(base)
      }, 3000)
    } else {
      alert('fill in Title blank field to continue')
    }
  }

</script>


  {#if !postWasCreated}
    <ControlPostForm submitHandler={createNewPost}/>
  {:else}

    <div>Post was created. Redirect to all posts in 3s</div>

  {/if}

  


