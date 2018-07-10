const firebase =require("firebase");
//Required for side-effects
require("firebase/firestore")
//https://firebase.google.com/docs/firestore/query-data/get-data


// Initialize Firebase
var config = {
    apiKey: "AIzaSyDkUHXPIpLCx9G6cMbrdE9h7nKyGlx9HhI",
    authDomain: "express-demo-54676.firebaseapp.com",
    databaseURL: "https://express-demo-54676.firebaseio.com",
    projectId: "express-demo-54676",
    storageBucket: "express-demo-54676.appspot.com",
    messagingSenderId: "157079182412"
  };
  firebase.initializeApp(config);

 var db=firebase.firestore();
   const settings = {/* your settings... */ timestampsInSnapshots: true};
   db.settings(settings);
// db.collection('notes').add(note).then(docRef=>{
//       console.log(`id: ${docRef.id}`)
//   })

  //node index.js


//Recommended Use:
//const refNotes=db.collection('notes').doc('hbn59UTi392SV4bC3CsR')
//   refNotes.set(note,{merge:true}).then(docRef=>{
//     //console.log(`id: ${docRef.id}`)
// })

//refNotes.get().then(doc =>{
//     console.log(doc.data())
// })

// const notes=db.collection('notes').where('id','==',0)
// .get().then(querySnapshot =>{
//     querySnapshot.forEach(doc =>{
//         console.log(doc.data())
//     })
// })

function FireBaseDatabase(name){
    const refNotes=db.collection(name)
     
      _ensureIdIsSet = id => {
        if (id === null)
          throw 'ID is required'
      }
     
      return {
        getName: () => name,
     
        all: () => {
          return refNotes.get().then(querySnapshot=>{
            const arr = []
            querySnapshot.forEach(doc=>{
                arr.push(doc.data())
            })
            return arr
        })
      },
     
        findById: id => {
          _ensureIdIsSet(id)
          return refNotes.doc(id).get().then(doc=>{
            return doc.data()
          })
        },
     
        add: item => {
          _ensureIdIsSet(item.id)
          docRef=db.collection(name).doc()
          const newItem= {
             ...item,
             id:docRef.id
          }
          return docRef.set(newItem,{merge:true}).then(()=>{
              return newItem
          })
        },
     
        update: function(item) {
          const refNotes=db.collection(name).doc(item.id.toString())
          return refNotes.update(item).then(()=>{
            return item
          })
          //this.add(item)
        },
     
        remove:function(id) {
          return db.collection(name).doc(id.toString()).delete()
        },
        count:function(id){
          item=this.findById(id).then(doc=>{
          })
        }
      }
  }
module.exports=FireBaseDatabase