const { Router } = require("express");
const router = Router();
const BD = require("../config/configbd");

//READ
router.get("/getUsers", async (req, res) => {
  sql = "select * from USUARIO";

  let result = await BD.Open(sql, [], false);
  Users = [];

  result.rows.map((user) => {
    console.log(user);
    let userSchema = {
      usuario_id: user[0],
      nombre_usuario: user[1],
      email: user[2],
      contrasenia: user[3],
      nombre_real: user[4],
      ap_paterno: user[5],
      ap_materno: user[6]
    };
    Users.push(userSchema);
  });

  res.json(Users);
});

router.get("/getUsers/:codu", async (req, res) => {
  const { codu } = req.params;
  sql = "select * from person where usuario_id=:codu";

  let result = await BD.Open(sql, [codu], false);
  Users = [];

  result.rows.map((user) => {
    console.log(user);
    let userSchema = {
      usuario_id: user[0],
      nombre_usuario: user[1],
      email: user[2],
      contrasenia: user[3],
      nombre_real: user[4],
      ap_paterno: user[5],
      ap_materno: user[6]
    };
    Users.push(userSchema);
  });

  res.json(Users);
});

//CREATE

router.post("/addUser", async (req, res) => {
  const { username, firstname, lastname } = req.body;

  sql =
    "insert into person(username,firstname,lastname) values (:username,:firstname,:lastname)";

  await BD.Open(sql, [username, firstname, lastname], true);

  res.status(200).json({
    username: username,
    firstname: firstname,
    lastname: lastname,
  });
});

//UPDATE
router.put("/updateUser", async (req, res) => {
  const { codu, username, firstname, lastname } = req.body;

  sql =
    "update usuario set username=:username, firstname=:firstname, lastname=:lastname where codu=:codu";

  await BD.Open(sql, [username, firstname, lastname, codu], true);

  res.status(200).json({
    codu: codu,
    username: username,
    firstname: firstname,
    lastname: lastname,
  });
});

//DELETE
router.delete("/deleteUser/:id", async (req, res) => {
  const { id } = req.params;

  sql = "delete from usuario where usuario_id=:id";

  await BD.Open(sql, [id], true);

  res.json({ msg: "Usuario Eliminado" });
});


module.exports = router;
