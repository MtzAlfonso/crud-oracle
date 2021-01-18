<template>
  <div>
    <b-container>
      <b-row>
        <b-col cols="12" md="6" lg="4" v-for="user of users" :key="user.usuario_id">
          <CardUser :user="user" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const users = await $axios.$get('http://localhost:3001/getUsers')
    return { users }
  },
}
</script>

<style></style>
