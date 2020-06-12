import { passport } from '../lib/passport'

const whiteList = ['/party/list']

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