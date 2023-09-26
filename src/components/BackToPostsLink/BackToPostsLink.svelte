<script>
  import { base } from "$app/paths";


  import Icon from "@iconify/svelte";

</script>

<a class="back-link" href={base}>
  <span class="back-link_icon">
    <Icon class="icon" icon="solar:alt-arrow-left-broken" />
  </span>
  <span class="back-link_text">Back to all posts</span>
</a>

<style lang="scss">
  .back-link{
    display: flex;
    align-items: center;
    justify-content: flex-start;

    margin-bottom: 2rem;

    font-size: 1.3rem;
    color: #fff;
    text-decoration: none;

    transition: all .1s linear;

    &_icon{
      display: inline-flex;
      align-items: center;

      margin-right: .6rem;

      font-size: 2.2rem;
    }

    &:hover{
      color: #e25f9e;

      & .back-link_icon{
        animation: schaking .4s ease-in-out
      }
    }
  }

  @keyframes schaking {
    0%{
      transform: translateX(0);
      
    }
    50%{
      transform: translate(-20%);
    }
    100%{
      transform: translate(0);
    }
  }
</style>