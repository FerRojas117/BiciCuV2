const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mysql = require("../db");


/*
* cada método en este controlador de usuarios, debe exportarse
* de la siguiente manera: exports.nombredemétodo
* todos los queries deben de ser parametrizados es decir con (?)
* y consultados mediante la sintaxis:
* (se infiere que ya se tiene la variable mysql, para hacer una consulta
*   y que invoca al archivo db.js dentro de esta misma carpeta)
* mysql.query( query(-que es de tipo string y parametrizado-), [arreglo de información que se envía],
* function(parametros de funcion de salida) {
* Cuerpo de funciónón.
* })
*/

exports.createUser = (req, res, next) => {
 // mysql.getConnection para multiples queries
 const url = req.protocol + "://" + req.get("host");
 const imagePath = url + "/images/" + req.file.filename;
 var relRolID = req.body.relRolId;

 /*
 console.log(req.body.nombres);
 console.log(req.body.apePaterno);
 console.log(req.body.apeMaterno);
 console.log(req.body.relRolId);
 console.log(req.body.matricula);
 console.log(req.body.acceso);
 console.log(req.body.clave);
 console.log(imagePath);
 console.log(req.body.telefono);
 console.log(req.body.usuariosCol);
 console.log(req.body.email);
 console.log(req.body.password);
*/

  var queryInsercionUsuario = "INSERT INTO usuarios (NombresUsr, ApePatUsr, ApeMatUsr, RelRolID, Matricula,";
  queryInsercionUsuario+= "Fotografia, Telefono, Usuarioscol, EmailCuenta)";
  queryInsercionUsuario+= " VALUES (?)";

  var queryInsercionLogins = "INSERT INTO logins (PasswordHash, RelUsuarioID, FechaLogin)";
  queryInsercionLogins+= " VALUES (?)";

  var arrayUsuario = [
    req.body.nombres,
    req.body.apePaterno,
    req.body.apeMaterno,
    req.body.relRolId,
    req.body.matricula,
    imagePath,
    req.body.telefono,
    req.body.usuariosCol,
    req.body.email
  ];

 mysql.query(
  queryInsercionUsuario, [arrayUsuario],
    function(err, rows) {
    if(err) {
      console.log(err);
      res.status(500).json({
        message: "Hubo un error en la insercion de usuario"
      });
    }
    else {
        var insertedID = rows.insertId;
        //se logró la inserción de usuario, se inserta su login, su hash
        var dateToday = new Date();
        bcrypt.hash(req.body.password, 10).then(hash => {
          console.log(insertedID);
          var arrayLogins = [
            hash,
            insertedID,
            dateToday
           ];
          mysql.query(queryInsercionLogins, [arrayLogins], function(err, rows) {
            if(err) {
              console.log(err);
              res.status(500).json({
                message: "Hubo un error en la insercion de usuario"
              });
            }
            else {
                  console.log("EL ROL" + relRolID);
                  switch(relRolID) {
                    case "2":
                    // vigilantes
                    var acceso = req.body.acceso;
                    switch (acceso) {
                      case "AccesoA":
                        acceso = "1"
                        break;
                      case "AccesoB":
                        acceso = "2"
                        break;
                      case "AccesoC":
                        acceso = "3"
                        break;
                      case "AccesoD":
                        acceso = "4"
                        break;
                      case "AccesoE":
                        acceso = "5"
                        break;
                      case "AccesoF":
                        acceso = "6"
                        break;
                      case "AccesoG":
                        acceso = "7"
                        break;
                      case "AccesoH":
                        acceso = "8"
                        break;
                      case "AccesoI":
                        acceso = "9"
                        break;
                      case "AccesoJ":
                        acceso = "10"
                        break;
                      case "AccesoK":
                        acceso = "11"
                        break;
                    }
                      var queryInsercionVigilante = "INSERT INTO vigilantes (Matricula, Acceso, Clave)";
                      queryInsercionVigilante+= " VALUES (?)";
                      var arrayVigilante = [
                        req.body.matricula,
                        acceso,
                        req.body.clave
                      ];
                      mysql.query(queryInsercionVigilante, [arrayVigilante], function(err, rows) {
                        if(err) {
                          console.log(err);
                        }
                        else {
                          console.log("todo bien");
                        }
                      });
                    break;
                    case "3":
                    //alumnos
                    console.log("Alumno: " + req.body.matricula + ", " + req.body.facultad);
                      var queryInsercionAlumno = "INSERT INTO alumnos (Matricula, Facultad)";
                      queryInsercionAlumno+= " VALUES (?)";
                      var arrayAlumno = [
                        req.body.matricula,
                        req.body.facultad
                      ];
                      console.log(arrayAlumno);
                      mysql.query(queryInsercionAlumno, [arrayAlumno], function(err, rows) {
                        if(err) {
                          console.log(err);
                        }
                        else {
                          console.log("todo bien");
                        }
                      });
                    break;
                    default:
                    break;
                  }
                res.status(201).json({
                  message: "Inserción de usuario correcta"
                });
            }
          });
        });
    }
  });
}

exports.userLoginVigilante = (req, res, next) => {
  var userClave = req.body.clave;
  var userAcceso = req.body.acceso;
  var userPassword = req.body.password;
  // UPDATE vigilantes SET Acceso = (?) WHERE Clave = (?)
    switch (userAcceso) {
      case "AccesoA":
      userAcceso = "1"
        break;
      case "AccesoB":
      userAcceso = "2"
        break;
      case "AccesoC":
      userAcceso = "3"
        break;
      case "AccesoD":
      userAcceso = "4"
        break;
      case "AccesoE":
      userAcceso = "5"
        break;
      case "AccesoF":
      userAcceso = "6"
        break;
      case "AccesoG":
      userAcceso = "7"
        break;
      case "AccesoH":
      userAcceso = "8"
        break;
      case "AccesoI":
      userAcceso = "9"
        break;
      case "AccesoJ":
      userAcceso = "10"
        break;
      case "AccesoK":
      userAcceso = "11"
        break;
    }
  console.log(userClave);
  var queryVigilante ="SELECT ID FROM usuarios INNER JOIN vigilantes ON usuarios.Matricula = vigilantes.Matricula WHERE vigilantes.Clave = (?)";
  mysql.query(queryVigilante, [userClave], function(err, rows) {
    if(err) {
      res.status(401).json({
        message: "Autenticación fallida"
      });
    }
    else {
      if(rows.length <= 0){
        res.status(401).json({
          message: "Usuario no existe"
        });
      }
      else {
        console.log(rows[0].ID);
        //console.log(rows.ID);
        var userID = rows[0].ID;
        var queryPassVigilante = "SELECT passwordHash FROM logins INNER JOIN usuarios ON usuarios.ID = logins.RelUsuarioID WHERE usuarios.ID = (?)"
        mysql.query(queryPassVigilante, [userID], function(err, rows) {
          if(err) {
            return res.status(401).json({
              message: "Autenticación fallida"
            });
          }
          else {
            console.log(rows[0].passwordHash);
            console.log(userPassword);
            bcrypt.compare(userPassword, rows[0].passwordHash,  function(err, resultado) {
                if(resultado) {
                  console.log("Autenticación exitosa");
                  var queryUpdateAcceso = "UPDATE vigilantes SET Acceso = (?) WHERE Clave = (?)";
                  mysql.query( queryUpdateAcceso, [userAcceso, userClave], function(err, rows) {
                    if(err)
                    {
                      return res.status(401).json({
                        message: "Autenticación fallida"
                      });
                    }
                    console.log("ENTRO EN FUNCION");
                    const token = jwt.sign(
                      {
                        clave: userClave,
                        userID: userID
                      },
                      'Token_Bici_CU_1234567890',
                      {
                        expiresIn: "1h"
                      }
                    );
                    return res.status(200).json({
                      token: token,
                      expiresIn: 3600,
                      userID: userID
                    });
                  });
                }
                else{
                  return res.status(401).json({
                    message: "Autenticación fallida"
                  });
                }
              }
            );
           /*   return res.status(401).json({
              message: "Credenciales Inválidas !"
            });
            */
          }
        });
      }
    }
  });

}

exports.userLoginAlumno = (req, res, next) => {
  var userMatricula = req.body.matricula;
  var userPassword = req.body.password;

  var queryAlumno ="SELECT ID FROM usuarios INNER JOIN alumnos ON usuarios.Matricula = alumnos.Matricula WHERE alumnos.Matricula = (?)";
  mysql.query(queryAlumno, [userMatricula], function(err, rows) {
    if(err) {
      res.status(401).json({
        message: "Autenticación fallida"
      });
    }
    else {
      if(rows.length <= 0){
        res.status(401).json({
          message: "Usuario no existe"
        });
      }
      else {
        console.log(rows[0].ID);
        //console.log(rows.ID);
        var userID = rows[0].ID;
        var queryPassAlumno = "SELECT passwordHash FROM logins INNER JOIN usuarios ON usuarios.ID = logins.RelUsuarioID WHERE usuarios.ID = (?)"
        mysql.query(queryPassAlumno, [userID], function(err, rows) {
          if(err) {
            return res.status(401).json({
              message: "Autenticación fallida"
            });
          }
          else {
            console.log(rows[0].passwordHash);
            console.log(userPassword);
            bcrypt.compare(userPassword, rows[0].passwordHash,  function(err, resultado) {
                if(resultado) {
                  console.log("Autenticación exitosa");
                    const token = jwt.sign(
                      {
                        matricula: userMatricula,
                        userID: userID
                      },
                      'Token_Bici_CU_1234567890',
                      {
                        expiresIn: "1h"
                      }
                    );
                    return res.status(200).json({
                      token: token,
                      expiresIn: 3600,
                      userID: userID
                    });
                }
                else{
                  return res.status(401).json({
                    message: "Autenticación fallida, password incorrecto"
                  });
                }
              }
            );
          }
        });
      }
    }
  });

}

