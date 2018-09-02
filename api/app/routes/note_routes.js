var ObjectID = require('mongodb').ObjectId

module.exports = function(app, db){
    app.get('/notes/:id', (req, res)=>{
        const id = req.params.id;
        const details = {'_id': new ObjectID(id)};
        db.db().collection('notes').findOne(details, (err, item)=>{
            if (err) res.send({ 'error': 'An error has occured' });
            else {
                res.send(item);
            }
        });
    })
    app.post('/notes', (req, res)=>{
        //Create note
        const note =  { text: req.body.body, title: req.body.title }
        db.db().collection('notes').insert(note, (err, result)=>{
            if (err) res.send({ 'error': 'An error has occured' });
            else {
                res.send(result.ops[0]);
            }
        });
    });
}