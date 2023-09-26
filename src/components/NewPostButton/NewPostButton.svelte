<script lang="ts">
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';

  function createNewPost(){
    goto(`${base}/createPost`)
  }
</script>

<button class="new-post" on:click={createNewPost}>Add new post</button>

<style lang="scss">
  .new-post{

    padding: .3em .6em;

    border-radius: 8px;
    border-color: transparent;

    background-color: #0000002a;

    font-size: 1.3rem;
    color: #9850d7;

    cursor: pointer;

    transition: all .2s linear;

    &:hover{
      background-color: #9850d7;
      color: #fff;
    }
  }
</style>