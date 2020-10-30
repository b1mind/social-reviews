<script>
  export let avatar = 'https://picsum.photos/50/50?random=1'
</script>

<div class="card">
  <img src={avatar} alt="user" width="100%" height="100%" />

  <div class="title">
    <h2 class="name">
      <slot name="user">Undefined User</slot>
    </h2>
    <h3>Verified Buyer</h3>
  </div>

  <blockquote>
    <slot>Undefined Review</slot>
  </blockquote>
</div>

<style type="text/scss">
  @import './vars.scss';

  .card {
    max-width: 325px;
    min-height: 250px;
    height: max-content;
    margin-bottom: 1rem;
    padding: 1em 0 0 0;
    display: grid;
    grid-template:
      'img title'
      'review review';
    grid-template-columns: 1fr 2fr;
    align-items: center;
    color: var(--clr-white);
    font-size: 0.85rem;
    text-align: left;
    background: var(--clr);
    border-radius: 10px;
    overflow: hidden;

    img {
      width: 50px;
      height: 50px;
      margin: 0 30px 0 40px;
      grid-area: img;
      border-radius: 50%;
    }

    blockquote {
      position: relative;
      grid-area: review;
      align-self: flex-start;
      z-index: 1;

      &::before {
        content: '\201C';
        position: absolute;
        top: -25px;
        left: -35px;
        margin: 0;
        padding: 0;
        color: var(--clr-alt);
        font-size: 9rem;
        opacity: 0.25;
        z-index: 0;
      }
    }

    &:nth-child(2) {
      margin-top: 2rem;
    }

    &:nth-child(3) {
      margin-top: 4rem;
    }

    @media (max-width: $mediaLrg) {
      &:nth-child(2),
      &:nth-child(3) {
        margin-top: 0;
      }
    }
  }

  .title {
    grid-area: title;

    h2 {
      margin: 0;
      font-size: 0.9rem;
    }

    h3 {
      margin: 0;
      color: var(--clr-alt);
      font-size: 0.9rem;
      font-weight: normal;
    }
  }
</style>
