const express =  require('express');
const jwt =  require('jsonwebtoken');

const app = express();

app.get('/api', (req, res)=>{
    res.json({
        message: 'Welcome to the API'
    });
});

app.post('/api/posts', verifyToken, (req, res) =>{
    res.json({
        message: 'Post created'
    });
});

app.post('/api/login', (req, res)=>{
    //Create mock user
    const user = {
        id: 1,
        username: 'Niall',
        email: 'test@test.com'
    }
    jwt.sign({user}, 'secretkey', (err, token)=>{
        res.json({
            token
        });
    });
});

app.listen(5000, ()=> console.log('Server started on port 5000'));