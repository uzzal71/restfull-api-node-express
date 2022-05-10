export const employeeRoute = {
    path: '/api/employee',
    method: 'get',
    handler: (req, res) => {
        res.status(200).send('employee routes');
    },
};