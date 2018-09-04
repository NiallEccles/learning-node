var ObjectID = require("mongodb").ObjectId;
var http = require("http"),
  fs = require("fs");
const path = "./../api/app/";

module.exports = function(app, db) {
  app.get("/", (req, res) => {
    res.sendFile("views/index.html", { root: path });
  });
  app.get("/notes/all", function(req, res) {
    db.db()
      .collection("notes")
      .find({})
      .toArray((error, documents) => {
        if (error) throw error;
        res.send(documents);
      });
  });
  app.get("/notes/:id", (req, res) => {
    const id = req.params.id;
    const details = { _id: new ObjectID(id) };
    db.db()
      .collection("notes")
      .findOne(details, (err, item) => {
        if (err) res.send({ error: "An error has occured" });
        else {
          res.send(item);
        }
      });
  });
  app.put("/notes/:id", (req, res) => {
    const id = req.params.id;
    const details = { _id: new ObjectID(id) };
    const note = { text: req.body.body, title: req.body.title };
    db.db()
      .collection("notes")
      .updateOne(details, { $set: note }, { upsert: true }, (err, item) => {
        if (err) res.send({ error: "An error has occured" }), console.log(err);
        else {
          res.send(item);
        }
      });
  });
  app.delete("/notes/:id", (req, res) => {
    const id = req.params.id;
    const details = { _id: new ObjectID(id) };
    db.db()
      .collection("notes")
      .deleteOne(details, (err, item) => {
        if (err) res.send({ error: "An error has occured" });
        else {
          res.send(`Note ${id} deleted!`);
        }
      });
  });
  app.post("/notes", (req, res) => {
    //Create note
    const note = { text: req.body.body, title: req.body.title };
    db.db()
      .collection("notes")
      .insertOne(note, (err, result) => {
        if (err) res.send({ error: "An error has occured" });
        else {
          res.send(result.ops[0]);
        }
      });
  });
};
