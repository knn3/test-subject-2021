const crypto = require("crypto");
var passport = require("passport");
var LocalStrategy = require("passport-local");

// passport.use(
//     new LocalStrategy((username, password, cb) => {

//     })
// )

class UserMethod {
    constructor(pool) {
        this.pool = pool;
    }

    //get a user
    getUser = async (req, res, next) => {
        try {
            // var salt = crypto.randomBytes(16);
            const { username, password } = req.query;
            const data = await this.pool.query(
                "SELECT * from users WHERE username = $1",
                [username]
            );

            crypto.pbkdf2(
                password,
                data.rows[0].salt,
                310000,
                32,
                "sha256",
                (err, hashedPassword) => {
                    if (err) {
                        console.log(err);
                    }
                    if (
                        !crypto.timingSafeEqual(
                            data.rows[0].hashed_password,
                            hashedPassword
                        )
                    ) {
                        // console.log("Incorrect password");
                        res.json("Incorrect Password");
                    } else {
                        res.json("Corrected");
                    }
                }
            );
        } catch (err) {
            console.log(err.message);
        }
    };

    //get all user
}

module.exports = UserMethod;
