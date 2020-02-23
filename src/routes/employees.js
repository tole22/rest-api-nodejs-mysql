const express = require('express');
const app = express();
const router = express.Router();

const mysqlConnection = require('../database');

// List all employees
router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM employees', (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    })
});

// Get the employee with id = :id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM employees WHERE id = ?', [id], (err,
        rows, fields) => {
            if(!err) {
                res.json(rows[0]);
            } else {
                console.log(err);
            }
        });
});

// Insert employee using a SQL storeProcedure
router.post('/', (req , res) => {
    const { id, name, salary } = req.body;
    const query = `
        CALL employeeAddOrEdit(?, ?, ?);
    `;
    mysqlConnection.query(query, [id, name, salary], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'Employeed Saved'});
        } else {
            console.log(err);
        }
    })
});

// Modify
router.put('/:id', (req , res) => {
    const { name, salary } = req.body;
    const { id } = req.params;
    const query = 'CALL employeeAddOrEdit(?, ?, ?);';
    mysqlConnection.query(query, [id, name, salary], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'Employeed Updated'});
        } else {
            console.log(err);
        }
    })
});

// Delete
router.delete('/:id', (req , res) => {
    const { id } = req.params;
    const query = 'DELETE FROM employees WHERE id = ?';
    mysqlConnection.query(query, [id], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'Employeed Deleted'});
        } else {
            console.log(err);
        }
    })
});

module.exports = router;