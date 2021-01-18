const oracledb = require('oracledb');

cns = {
    user: "C##ALFONSO",
    password: "123456",
    connectString: "192.168.0.17"
}


async function Open(sql, binds, autoCommit) {
    let cnn = await oracledb.getConnection(cns);
    let result = await cnn.execute(sql, binds, { autoCommit });
    return result;
}

exports.Open = Open;