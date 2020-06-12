import Jwt from 'jsonwebtoken';
import { Passport } from 'passport';
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';

const { SECRET_KEY } = process.env;

const encode = (payload) => Jwt.sign(payload, SECRET_KEY, { expiresIn: '7d' });

const decode = (payload) => Jwt.verify(payload, SECRET_KEY);

const passport = new Passport();

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: SECRET_KEY,
};

const jwtAuth = new JwtStrategy(jwtOptions, async (payload, done) => {
  if (payload.id) {
    return done(null, payload);
  }
  return done(null, false);
});

passport.use(jwtAuth);

export { encode, decode, passport };
export default {
  encode,
  decode,
  passport,
};
