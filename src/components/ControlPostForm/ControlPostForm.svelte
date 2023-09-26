<script lang="ts">

  import type { IPost } from '../../components/PostItem/PostItem';

  export let post: IPost | undefined = undefined;
  export let submitHandler: (title: string, text: string)=> void

  let postTitle = post?.title || '';
  let postText = post?.description || '';

  function resizeTextarea(e: Event & {currentTarget: EventTarget & HTMLTextAreaElement}) {
    e.currentTarget.style.height = 'auto'
    e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`
  }
</script>

<div  class="form">
  <label class="form-input_label">
    <span class="form-input_title">Topic</span>
    <input type="text" name="topic" class="form-input" placeholder="Write your post title" maxlength=200 bind:value={postTitle}>
  </label>
  <label class="form-input_label">
    <span class="form-input_title">Post text</span>
    <textarea on:input={resizeTextarea} name="post text" class="form-input textarea" placeholder="Write your post text here" bind:value={postText}/>
  </label>

  <button on:click={()=>{submitHandler(postTitle, postText)}} type="submit" class="form-btn">{post ? 'Edit post' : 'Create new post'}</button>
</div>

<style lang="scss">
  .form{
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;

    padding: 3rem;

    border-radius: 1rem;

    background-color: #55495e;

    box-shadow: 0 3px 15px rgba(0,0,0, 0.15);

    &-input{
      resize: none;
      display: block;
      width: 100%;

      padding: .6em .8em;

      border: none;
      border-radius: .6rem;

      font-size: 1.2rem;

      overflow: hidden;

      &:focus{
        outline: 3px solid #d6488d;
      }

      &::placeholder{
        opacity: 0.6;
      }

      &_label{
        margin-bottom: 2em;
        
        &:last-child{
          margin-bottom: 0;
        }
      }

      &_title{
        display: inline-block;
        margin-bottom: .4em;
        margin-left: 5px;
        font-size: 1.5rem;
      }

      &.textarea{
        min-height: 150px;
        font-size: .9rem;
      }
    }

    &-btn{
      padding: .6em .8em;

      border: none;
      border-radius: .6rem;

      background-color:  #00000055;

      font-size: 1.2rem;
      color: #e25f9e;

      transition: all .2s linear;

      cursor: pointer;

      &:hover{
        background-color: #d6488d;
        color: #fff;
      }
    }
  }
</style>