const pool = require('./db'); // load/import the pool libraries that was written on other file

// use the pool's query method
pool.query('SELECT *  FROM public.todo', (err, res) => {
    try {
        console.log(res.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// end the database connection
pool.end();
