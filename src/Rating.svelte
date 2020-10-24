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
    Rated

    {stars}/{totalStars}
    stars by

    <h3>
      <slot>Undefined Name</slot>
    </h3>
  </div>
</div>

<style type="text/scss">
  @import './src/vars.scss';

  .rating {
    max-width: 510px;
    margin-bottom: 1rem;
    padding: 1em;
    display: flex;
    align-items: center;
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
    display: flex;

    li {
      max-height: 16px;
      padding: 0 10px;
      color: goldenrod;
      /* background: grey;
      border-radius: 50% */
    }
  }

  .text {
    h3 {
      margin: 0;
      display: inline-block;
      font-size: 1rem;
    }
  }
</style>
