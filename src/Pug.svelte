<script>
  let yourName
  export let count = 0
</script>

<!-- prettier-ignore -->
<template lang="pug">
  .greeting
    slot
    p This is a test of the pug system
    +if ("yourName")
      h1 Hello {yourName} you clicked {count} {count <= 1 ? 'time' : 'times'}
      +else 
        h1 enter name

    input(
      type="text"
      bind:value="{yourName}"
      )

</template>

<style lang="scss">
  .greeting {
    color: #d0d0d0;
    h1 {
      color: var(--clr);
    }
  }
</style>
