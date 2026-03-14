const validateTask = (req, res, next) => {
    const { title, description } = req.body;

    if(!title || typeof title !== "string" || !description || typeof description !== "string") {
        const err = Error("Title and description are required and must be strings");
        err.status = 400;
        throw err;
    }

    next();
};

module.exports = validateTask;