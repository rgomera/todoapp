const pool = require('./db'); // load/import the pool libraries that was written on other file

const sql = 'UPDATE public.todo SET todo_desc = $1 WHERE todo_id =7 RETURNING *';
const data = ['JUMPING'];

pool.query(sql, data, (err, res) => {
    if (err) {
        console.log(err.stack);
    } else {
        console.log(res.rows[0]);
    }
});

// end the database connection
pool.end();
