<script>
  import Icon from 'svelte-awesome'
  import { star } from 'svelte-awesome/icons'

  export let stars = 5
  export let totalStars = stars
</script>

<div class="rating">
  <ul class="stars">
    {#each Array(stars) as _}
      <li>
        <Icon data={star} />
      </li>
    {/each}
  </ul>

  <div class="text">
    <h2>
      <span> Rated {stars}/{totalStars} stars by </span>
      <slot>Undefined Name</slot>
    </h2>
  </div>
</div>

<style type="text/scss">
  @import './vars.scss';

  .rating {
    max-width: 450px;
    margin-bottom: 1rem;
    padding: 1em;
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    background: var(--clr-light);
    border-radius: 10px;

    &:nth-child(2) {
      margin-left: 3rem;
    }

    &:nth-child(3) {
      margin-left: 6rem;
    }

    @media (max-width: $mediaLrg) {
      &:nth-child(2),
      &:nth-child(3) {
        margin-left: 0;
      }
    }

    @media (max-width: $mediaMed) {
      flex-direction: column;
      justify-content: center;
    }
  }

  .stars {
    width: max-content;
    margin-right: 5px;
    display: flex;

    li {
      max-height: 16px;
      padding: 0 5px;
      color: goldenrod;
      /* background: grey;
      border-radius: 50% */
    }

    @media (max-width: $mediaMed) {
      margin-bottom: 0.75rem;
    }
  }

  .text {
    color: var(--clr);
    h2 {
      margin: 0.3rem 0 0 0;
      display: inline-block;
      font-size: 0.85rem;
      font-weight: bold;
    }
  }
</style>
