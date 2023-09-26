<script lang="ts">
  import { goto } from "$app/navigation";


  import Icon from "@iconify/svelte";
  export let postId: number

</script>

<button on:click={()=>{goto(`/editPost/${postId}`)}} class="btn-edit">
  <Icon icon="ph:pen-light" />
</button>

<style lang="scss">
  .btn-edit{
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

    color: #fff;
    background-color: transparent;

    &:hover{
      background-color: #9401ce;
      color: #fff;

    }
  }
</style>