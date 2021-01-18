<template>
<div>
    <pre>
        {{user}}
    </pre>
</div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const user = await $axios.$get(`http://localhost:8089/getUser/${params.slug}`)

    return {
        user
    }
  },
}
</script>

<style></style>
