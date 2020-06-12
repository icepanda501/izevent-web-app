const errorHandler = (routeFunction) => async (req,res,next) => {
    try{
        await routeFunction(req,res,next)
    } catch(error) {
        const statusCode = error.statusCode || 500
        return res.status(statusCode).send({
            message: error.message
        })
    }
}

export default errorHandler