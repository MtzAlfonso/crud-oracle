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
                {{
                  `${usuario.nombre_real} ${usuario.ap_paterno} ${usuario.ap_materno}`
                }}
              </b-link>
              <b-badge class="d-none">{{ usuario.usuario_id }}</b-badge>
              <b-button
                :to="{ name: 'modificar-id', params: { id: usuario.usuario_id } }"
                size="sm"
                class="mx-1"
                variant="warning"
                >Actualizar</b-button
              >
              <b-button
                @click="eliminar(usuario.usuario_id)"
                size="sm"
                class="mx-1"
                variant="danger"
                >Eliminar</b-button
              >
            </b-list-group-item>
          </b-list-group>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      index: null,
    };
  },
  methods: {
    actualizar(id) {
      this.index = id;
    },
    eliminar(id) {
      this.$axios
        .$delete(`http://localhost:3001/deleteUser/${id}`)
        .then((res) => {
          this.$bvToast.toast(res.msg, {
            title: "Correcto",
            autoHideDelay: 5000,
            appendToast: true,
            variant: "success",
          });
          window.location.reload();
        })
        .catch((err) => {
          this.$bvToast.toast(`El usuario ${id} no se puede eliminar`, {
            title: "Error",
            autoHideDelay: 5000,
            appendToast: true,
            variant: "danger",
          });
        });
    },
  },
  async asyncData({ $axios }) {
    let usuarios = await $axios.$get("http://localhost:3001/getUsers");
    return {
      usuarios,
    };
  },
};
</script>

<style></style>
