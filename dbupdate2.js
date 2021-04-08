const pool = require('./db'); // load/import the pool libraries that was written on other file

const sql = 'UPDATE public.category SET cat_description = $1 WHERE cat_id =5 RETURNING *';
const data = ['SPORTS'];

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
