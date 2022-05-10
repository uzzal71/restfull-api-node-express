export const employeeUpdateRoute = {
    path: '/api/employee/:employeeId',
    method: 'put',
    handler: (req, res) => {
        res.status(200).send('employee update');
    },
};