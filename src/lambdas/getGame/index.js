exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('This was pushed from local!'),
    };
    return response;
};
