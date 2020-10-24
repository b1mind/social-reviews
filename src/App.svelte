<script>
  import Rating from './Rating.svelte'
  import Card from './Card.svelte'
</script>

<main>
  <section class="header">
    <h1>Some big arse headline because why not</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores et impedit dolorem molestias alias aliquam aut
      iure doloribus tempore praesentium! Culpa laudantium enim quam tempore. Totam enim aperiam dolorem?
    </p>
  </section>

  <section class="ratings">
    <Rating stars={4} totalStars={5}>KP News</Rating>
    <Rating stars={3}>Tech Reviews</Rating>
    <Rating>Social Swamps</Rating>
  </section>

  <section class="reviews">
    <Card avatar="https://unsplash.it/50?random=2">
      <span slot="user">Brent Woods</span>
      Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec rutrum congue leo eget malesuada. Sed porttitor
      lectus nibh.
    </Card>

    <Card>
      <span slot="user">Kyle Wds</span>
      Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur aliquet quam id dui posuere blandit.
    </Card>

    <Card avatar="https://unsplash.it/50?random=3">
      <span slot="user">Kevin Powell</span>
      Proin eget tortor risus. Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit met nisl tempus convallis
      quis ac lectus.
    </Card>
  </section>
</main>

<style lang="scss">
  @import './src/vars.scss';

  main {
    position: relative;
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template:
      'header ratings'
      'reviews reviews';
    gap: 2rem 0;
    // grid-template-columns: 1fr 1r;
    align-items: center;

    @media (max-width: $mediaLrg) {
      margin: 1rem;
    }

    @media (max-width: $mediaMed) {
      grid-template:
        'header'
        'ratings'
        'reviews';
      justify-items: center;
      text-align: center;
    }
  }

  .header {
    max-width: 50ch;
    grid-area: header;

    h1 {
      margin: 0;
      color: var(--clr);
      font-size: 3rem;
      line-height: 1;
    }
  }

  .ratings {
    grid-area: ratings;
  }

  .reviews {
    grid-area: reviews;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (max-width: $mediaLrg) {
      justify-content: space-evenly;
    }
  }
</style>
