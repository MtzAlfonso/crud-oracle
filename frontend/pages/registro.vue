<template>
  <div>
    <b-container>
      <b-row align-h="center">
        <b-col cols="12" class="text-center">
          <h1>Formulario de Registro</h1>
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
                placeholder="Nombre de usuario"
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

            <b-button type="submit" variant="primary"
              >Guardar</b-button
            >
            <b-button type="reset" variant="danger">Reset</b-button>
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
  data() {
    return {
      form: {
        usuario: "",
        password: "",
        email: "",
        nombre: "",
        paterno: "",
        materno: "",
      },
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      const source = this.$axios.CancelToken.source();
      const json = JSON.stringify(this.form);
      this.$axios.setHeader("Content-Type", "application/json", ["post"]);
      this.$axios.$post("http://localhost:3001/addUser", json, {
        cancelToken: source.token,
      });
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
