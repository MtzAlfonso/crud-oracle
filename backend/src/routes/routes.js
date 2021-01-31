const { Router } = require("express");
const router = Router();
const BD = require("../config/configbd");

//READ
router.get("/getUsers", async (req, res) => {
  sql = "select * from USUARIO order by usuario_id";

  let result = await BD.Open(sql, [], false);
  Users = [];

  result.rows.map((usario) => {
    console.log(usario);
    let userSchema = {
      usuario_id: usario[0],
      nombre_usuario: usario[1],
      email: usario[2],
      contrasenia: usario[3],
      nombre_real: usario[4],
      ap_paterno: usario[5],
      ap_materno: usario[6],
    };
    Users.push(userSchema);
    //console.log(Users);
  });

  res.json(Users);
});

router.get("/getUsers/:usuario_id", async (req, res) => {
  const { usuario_id } = req.params;
  sql = "select * from USUARIO where usuario_id=:usuario_id";

  let result = await BD.Open(sql, [usuario_id], false);
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
      ap_materno: user[6],
    };
    Users.push(userSchema);
  });

  res.json(Users);
});

//CREATE

router.post("/addUser", async (req, res) => {
  const { usuario, email, password, nombre, paterno, materno } = req.body;

  console.log(req);

  sql =
    "insert into usuario (usuario_id,nombre_usuario,email,contrasenia,nombre_real,ap_paterno,ap_materno) values (seq_usr.nextval,:nombre,:email,:password,:nombre,:paterno,:materno)";

  await BD.Open(
    sql,
    [usuario, email, password, nombre, paterno, materno],
    true
  );

  res.status(200).json({
    nombre_usuario: usuario,
    email: email,
    contrasenia: password,
    nombre_real: nombre,
    ap_materno: paterno,
    ap_materno: materno,
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
