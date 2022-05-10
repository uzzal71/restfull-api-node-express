export const employeeCreateRoute = {
    path: '/api/employee',
    method: 'post',
    handler: (req, res) => {
        res.status(200).send('employee create');
    },
};