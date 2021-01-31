<template>
  <div>
    <b-container>
      <b-row align-h="center">
        <b-col cols="6">
          <b-list-group>
            <b-list-group-item
              class="d-flex align-items-center"
              v-for="usuario of usuarios"
              :key="usuario.usuario_id"
            >
              <b-avatar class="mr-3"></b-avatar>
              <b-link class="mr-auto text-capitalize">
                {{ `${usuario.nombre_real} ${usuario.ap_paterno} ${usuario.ap_materno}` }}
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
