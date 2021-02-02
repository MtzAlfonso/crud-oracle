<template>
  <div>
    <b-container>
      <b-row align-h="center">
        <b-col cols="12" class="text-center">
          <h1>Actualizar datos</h1>
          <pre>
              {{ usuario }}
          </pre>
        </b-col>
        <b-col cols="6">
          <b-form @submit="onSubmit" @reset="onReset">
            <!-- Campo Usuario -->
            <b-form-group
              id="input-group-usuario"
              label="Usuario:"
              label-for="input-usuario"
              require
            >
              <b-form-input
                id="input-usuario"
                v-model="form.usuario"
                type="text"
                placeholder="Ingresa tu usuario"
                required
              ></b-form-input>
            </b-form-group>

            <!-- Campo Password -->
            <b-form-group
              id="input-group-password"
              label="Password:"
              label-for="input-password"
              require
            >
              <b-form-input
                id="input-password"
                v-model="form.password"
                type="password"
                placeholder="******"
                required
              ></b-form-input>
            </b-form-group>

            <!-- Campo email -->
            <b-form-group
              id="input-group-email"
              label="Email:"
              label-for="input-email"
              require
            >
              <b-form-input
                id="input-email"
                v-model="form.email"
                type="email"
                placeholder="correo@ejemplo.com"
                required
              ></b-form-input>
            </b-form-group>

            <!-- Campo Nombre -->
            <b-form-group
              id="input-group-nombre"
              label="Nombre completo:"
              label-for="input-nombre"
            >
              <b-form-input
                id="input-nombre"
                v-model="form.nombre"
                placeholder="Nombre"
                required
                class="my-3"
              ></b-form-input>
            </b-form-group>

            <!-- Campo Ap. Paterno -->
            <b-form-group
              id="input-group-paterno"
              label="Nombre completo:"
              label-for="input-paterno"
            >
              <b-form-input
                id="input-paterno"
                v-model="form.paterno"
                placeholder="Apellido Paterno"
                required
                class="my-3"
              ></b-form-input>
            </b-form-group>

            <!-- Campo Ap. Materno -->
            <b-form-group
              id="input-group-materno"
              label="Apellido Materno:"
              label-for="input-materno"
            >
              <b-form-input
                id="input-materno"
                v-model="form.materno"
                placeholder="Apellido Materno"
                required
                class="my-3"
              ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="warning">Actualizar</b-button>
            <b-button type="reset" variant="danger">Limpiar</b-button>
          </b-form>
          <b-card class="mt-3" header="Form Data Result">
            <pre class="m-0">{{ form }}</pre>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    let usuario = await $axios.$get(
      "http://localhost:3001/getUsers/" + params.id
    );

    return {
      usuario,
    };
  },
  data() {
    return {
      form: {
        usuario: "",
        password: "",
        email: "",
        nombre: "",
        paterno: "",
        materno: "",
        usuario_id: "",
      },
    };
  },
  mounted() {
    this.form.usuario = this.usuario[0].nombre_usuario;
    this.form.password = this.usuario[0].contrasenia;
    this.form.email = this.usuario[0].email;
    this.form.nombre = this.usuario[0].nombre_real;
    this.form.paterno = this.usuario[0].ap_paterno;
    this.form.materno = this.usuario[0].ap_materno;
    this.form.usuario_id = this.usuario[0].usuario_id;
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.$axios.setHeader("Content-Type", "application/json", ["put"]);
      this.$axios
        .$put("http://localhost:3001/updateUser", this.form)
        .then((res) => {
          this.$bvToast.toast(res.msg, {
            title: "Actualizado",
            autoHideDelay: 5000,
            appendToast: true,
            variant: "success",
          });
        });
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
    },
  },
};
</script>
