const success = (req, res, message, status) => {
    res.status(status || 200).send({
        error: '',
        body: message
    });
};

const errors = (req, res, message, status, details) => {
    console.log(`[response error] ${details}`)

    res.status(status || 500).send({
        error: message,
        body: '',
    });
};

export { success, errors }