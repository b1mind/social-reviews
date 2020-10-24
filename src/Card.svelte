<script>
  export let avatar = 'https://unsplash.it/50?random=1'
</script>

<div class="card">
  <img src={avatar} alt="user" />
  <div class="title">
    <h3 class="name">
      <slot name="user">User Undefined</slot>
    </h3>
    <h4>Verified Buyer</h4>
  </div>

  <blockquote>
    <slot>Review Undefined</slot>
  </blockquote>
</div>

<style type="text/scss">
  .card {
    max-width: 325px;
    min-height: 250px;
    margin: 0.5rem;
    padding: 1em 0 0 0;
    display: grid;
    grid-template:
      'img title'
      'review review';
    grid-template-columns: 1fr 2fr;
    align-items: center;
    color: var(--clr-white);
    text-align: left;
    background: var(--clr);
    border-radius: 10px;

    img {
      width: 50px;
      height: 50px;
      margin: 0 30px 0 40px;
      grid-area: img;
      border-radius: 50%;
    }

    blockquote {
      grid-area: review;
      align-self: flex-start;
    }
  }

  .title {
    grid-area: title;

    h3 {
      margin: 0;
    }

    h4 {
      margin: 0;
      color: var(--clr-alt);
    }
  }
</style>
