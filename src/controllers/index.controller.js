const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'soporte',
    password: 'admin',
    database: 'nodepgapi',
    port: '5432'
});

const getUsers = async(req, res) => {
    //res.send('users');
    const response = await pool.query('select * from users');
    //console.log(response.rows);
    //res.send('users');
    res.status(200).json(response.rows);
};

const getUserById = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('select * from users where id = $1', [id]);
    //res.send('User ID ' + req.params.id)
    res.json(response.rows);
}

const createUser = async (req, res) => {
    //el req.body es lo que una aplicación cliente me enviara
    //req.body fun ciona por las lineas de cosigo middleware
    const { name, email } = req.body;

    const response = await pool.query('insert into users (name, email) values ($1, $2)', [name, email]);
    console.log(response);
    //recibido respondo 
    //res.send('user created');
    res.json({
        message: 'User Added Succesfully',
        body: {
            user: {name, email}
        }
    })
};

const updateUser = async (req, res) => {
    const id = req.params.id;
    const { name, email } = req.body;
    //console.log(id, name, email);
    const response = await pool.query('update users set name = $1, email = $2 where id = $3', [
        name,
        email,
        id]);
        console.log(response);
        res.json('User Updated sucessfully');
    //res.send('User Updated');
};

const deleteUser = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('delete from users where id = $1', [id]);
    console.log(response);
    res.json('User ${id} deleted sucessfully');
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser
}