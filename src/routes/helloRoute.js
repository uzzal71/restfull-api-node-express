export const helloRoute = {
    path: '/',
    method: 'get',
    handler: (req, res) => {
        res.status(200).json({ message: `Node & Express server is running on ${process.env.PORT}` });
    },
};