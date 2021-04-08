const pool = require('./db'); // load/import the pool libraries that was written on other file

const sql = 'UPDATE public.assignment SET cat_id = $1, todo_id = $2 WHERE asgmt_id = 5 RETURNING *';
const data = [1, 4];

// use the pool's query method
pool.query(sql, data, (err, res) => {
    if (err) {
        console.log(err.stack);
    } else {
        console.log(res.rows[0]);
    }
});

// end the database connection
pool.end();
