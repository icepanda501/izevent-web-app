import bcrypt from 'bcryptjs';

const {
    SALT_WORK_FACTOR = 10,
  } = process.env;
  
const bcryptPassword = password => new Promise((resolve, reject) => {
bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) reject(err);
    // hash the password using our new salt
    bcrypt.hash(password, salt, (errHash, hash) => {
    if (errHash) {
        reject(errHash);
    }
    // override the cleartext password with the hashed one
    resolve(hash);
    });
});
});

const comparePassword = async (candidatePassword, password) => {
    const match = await bcrypt.compare(candidatePassword, password);
    return match;
  };

export { bcryptPassword, comparePassword}  

export default { bcryptPassword, comparePassword} 