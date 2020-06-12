import { passport } from '../lib/passport'

const whiteList = ['/user', '/login']

export default (req,res,next) => {
    if(whiteList.find((path) => req.baseUrl.includes(path))){
        next()
    }
    passport.authenticate(
        'jwt',
        { session: false, passReqToCallback: true },
        async (err, payload) => {
          try {
            req.user = payload;
            next();
          } catch (error) {
              res.status(401).send({
                  message: error.message
              })
          }
        },
      )(req, res, next);
}