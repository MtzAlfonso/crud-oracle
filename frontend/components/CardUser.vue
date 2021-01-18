<template>
  <b-card
    :title="`${user.nombre_real} ${user.ap_paterno} ${user.ap_materno}`"
    :img-src="`https://picsum.photos/600/300/?image=${user.usuario_id}`"
    img-alt="Image"
    img-top
    tag="article"
    class="mb-2"
  >
    <b-card-text>
      {{user.nombre_usuario}}
    </b-card-text>

    <b-button :href="`mailto:${user.email}`" variant="outline-primary" block>{{user.email}}</b-button>
    <b-button :href="`mailto:${user.email}`" variant="warning">Actualizar</b-button>
    <b-button :href="`mailto:${user.email}`" variant="danger">Borrar</b-button>
  </b-card>
</template>

<script>
export default {
  props: ['user'],
}
</script>
