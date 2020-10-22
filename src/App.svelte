<script>
  import Pug from './Pug.svelte'
  export let userName
  export let age

  let val = 420
  let count = 0
</script>

<main>
  <h1>This is a {val} test smoke it</h1>
  <button on:click={() => count++}>clickMe {count}</button>

  {#if userName}
    <h2>Hello {userName} you are {age} years old</h2>
  {:else}
    <h2>Hello Nerd</h2>
  {/if}

  <aside>
    <p>see you on the other side</p>
    <Pug {count} />
  </aside>
</main>

<style lang="scss">
  main {
    max-width: 320px;
    margin: 0 auto;
    padding: 1em;
    text-align: center;

    h2 {
      color: var(--clr);
      font-weight: 700;
    }

    @media (min-width: 640px) {
      max-width: none;
      h2 {
        color: var(--clrAlt);
      }
    }
  }

  h1 {
    color: red;
    text-transform: uppercase;
    font-weight: 100;

    @media (min-width: 640px) {
      color: white;
      font-size: 4rem;
    }
  }
</style>
