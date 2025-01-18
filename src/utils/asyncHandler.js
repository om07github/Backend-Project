//it is created as a wrapper, in case any problem occur or else we call this method
const asyncHandler = (requestHandler) => {
        return (req, res, next) => {
            Promise.resolve(requestHandler(req, res, next))
                    .catch((err) => next(err))
        }
}


export {asyncHandler}