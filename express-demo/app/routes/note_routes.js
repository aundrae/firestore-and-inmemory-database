
module.exports=function(app,notesdb){
    app.get('/api/notes',(req,res)=>{
        //  res.send('Hello World')
        notesdb.all().then(arr=>{
            res.json(arr)
        }).catch(err => {
            console.log(err)
        })
    });

    //get specific values based on ID
    app.get('/api/notes/:id',(req,res)=>{
        notesdb.findById(req.params.id).then(doc=>{
            res.json(doc)
        })
    });
     app.post('/api/notes',(req,res)=>{
         notesdb.add(req.body).then(doc=>{
            res.send(doc)
         })
    });
    app.put('/api/notes/:id',(req,res)=>{
        const id=req.params.id
        notesdb.update({...req.body,id:id}).then(doc=>{
            res.send(doc)
        })
    });
    app.delete('/api/notes/:id',(req,res)=>{
        notesdb.remove(req.params.id).then(doc=>{
            res.send(`Deleted : ${req.params.id}`)
        })
    });

    //api/notes/id/count
    app.get('/api/notes/:id/count',(req,res)=>{
        //notesdb.count(req.params.id).then(doc=>{
            res.json(notesdb.count(req.params.id))
        //})
    });
}