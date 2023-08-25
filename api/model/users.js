const db = require("../config/db.config")
const {hash, compare, hashSync} = require("bcrypt")
const {createToken} = require("../middleware/authenticatedUser")

class User {
    login(req, res) {
        const {emailAdd, userPass} = req.body 
        const strQry = 
        `
        Select firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile,  
        From Users
        where emailAdd = '${emailAdd}';
        `
        db.query(strQry, async (err, data) => {
            if (err) throw err
            if ((!data.length) || (data == null)) {
                res.status(401).json({err: "Provided A Wrong Email Address!"})
            } else {
                await compare(userPass, data[0].userPass, (cErr, cResult) => {
                    if (cErr) throw cErr
                    const jwToken = createToken (
                        {
                            emailAdd, userPass
                        }
                    )
                    res.cookie("LegitUser", jwToken, {
                        maxAge: 3600000,
                        httpOnly: true
                    })
                    if (cResult) {
                        res.status(200).json({
                            msg: "User is Logged In",
                            jwToken,
                            result:data[0]
                        })
                    } else {
                        res.status(401).json({
                            err: "You entered an invalid password or did not signup"
                        })
                    }
                })
            }
        })
    }
    fetchUsers(req, res) {
        const strQry = 
        `Select userID, firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile  
        From Users;
        `
        db.query(strQry, (err, data) => {
            if(err) throw err 
            res.json(data)
        })
    }
    fetchUser(req, res) {
        const strQry = 
        `
        Select userID, firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile  
        From Users
        Where userID = ?;
        `
        db.query(strQry, [req.params.id], 
            (err, data) => {
                if(err) {
                    res.json({
                        status: res.statusCode,
                        msg: "An error occurred."
                    })
                }else {
                    res.json(data)
                }
        })
    }
    async register(req, res) {
        const data = req.body;

        // encrypt password
        data.userPass = await hash(data.userPass, 15);

        // payload
        const user = {
            emailAdd: data.emailAdd,
            userPass: data.userPass
        };

        // query
        const query = `INSERT INTO Users SET ?;`;

        db.query(query,
            [data],
            (err) => {
                if (err) throw err

                // create token
                let token = createToken(user)
                res.cookie("LegitUser", token, {
                    maxAge: 3600000,
                    httpOnly: true
                });

                res.json({
                    status: res.statusCode,
                    message: "New user registered!"
                });
            });
    }
    update(req, res) {
        let data = req.body
        if(data.userPassword !== null ||
            data.userPassword !== undefined)
            data.userPassword = hashSync(data.userPassword, 15)
        const strQry = 
        `
        Update Users
        Set ?
        Where userID = ?;
        `
        db.query(strQry, [data, req.params.id],
            (err) =>{
                if (err) throw err
                res.status(200).json({msg: "A row affected"})
            })
    }
    deleteUser(req, res) {
        const strQry =
        `
        Delete from Users
        Where userID = ?;
        `
        db.query(strQry, [req.params.id],
            (err) => {
                if(err) throw err
                res.status(200).json( {msg: "A Record was removed from a database"})
            })
    }
}

class Products {
    fetchProducts(req, res) {
        const strQry =
        `
        SELECT prodID, prodName, quantity, amount, Category, prodUrl
        FROM Products;
        `;
        db.query(strQry, (err, data) => {
            if(err) throw err;
            res.status(200).json(data)
        });
    }
    fetchProduct(req, res) {
        const strQry =
        `
        SELECT prodID, prodName, quantity, amount, Category, prodUrl
        FROM Products
        WHERE productID = ?;
        `;
        db.query(strQry, [req.params.id], (err, data) => {
            if(err) throw err;
            res.status(200).json(data)
        });
    }
    addProduct(req, res) {
        const strQry =
        `
        INSERT INTO Products
        SET ?;
        `;
        db.query(strQry, [req.body],
            (err) => {
                if (err) {
                    res.status(400).json({err: "UNABLE TO INSERT A NEW RECORD."});
                } else {
                    res.status(200).json({msg: "PRODUCT SAVED"});
                }
            }
        );
    }
    updateProduct(req, res) {
        const query = `UPDATE Products SET ? WHERE prodID = ?;`;
    
        db.query(query, [req.body, req.params.id], (err) => {
          if (err) throw err;
    
          res.json({
            status: res.statusCode,
            message: "Product updated!",
          });
        });
      }
    deleteProduct(req, res) {
        const strQry =
        `
        DELETE FROM Products
        WHERE prodID = ?;
        `;
        db.query(strQry, [req.params.id], (err) => {
            if (err) res.status(400).json({err: "THE RECORD WAS NOT FOUND."});
            res.status(200).json({msg: "A PRODUCT WAS DELETED."});
        })
    }
}


module.exports = {User, Products}