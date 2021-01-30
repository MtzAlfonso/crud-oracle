const oracledb = require('oracledb');

cns = {
    user: "ls_proy_admin",
    password: "admin",
    connectString: "192.168.0.17"
    //connectString: "localhost"
}


async function Open(sql, binds, autoCommit) {
    let cnn = await oracledb.getConnection(cns);
    let result = await cnn.execute(sql, binds, { autoCommit });
    return result;
}

exports.Open = Open;
