const bcrypt = require('bcrypt');
const saltRounds = 10;

userSchema.pre('save', ( next ) => {
    let user = this;
    if(user.isModified('password')){
        // 비밀번호를 암호화 시킨다. 
        bcrypt.genSalt(saltRounds,(err, salt) => {
            if(err) return next(err);
    
            bcrypt.hash(user.password, salt, function(err, hash){
                if(err) return next(err);
                user.password = hash;
                next();
            })
        })
    }
})
