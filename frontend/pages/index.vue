<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <b-list-group style="max-width: 300px">
            <b-list-group-item
              class="d-flex align-items-center"
              v-for="usuario of usuarios"
              :key="usuario.usuario_id"
            >
              <b-avatar class="mr-3"></b-avatar>
              <b-link class="mr-auto">
                {{ usuario.nombre_usuario }}
              </b-link>
              <b-badge>{{ usuario.usuario_id }}</b-badge>
            </b-list-group-item>
          </b-list-group>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  async asyncData({ $axios }) {
    let usuarios = await $axios.$get("http://localhost:3001/getUsers");
    return {
      usuarios,
    };
  },
};
</script>

<style></style>
