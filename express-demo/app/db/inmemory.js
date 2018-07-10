function InMemoryDatabase(name) {
    const _repo = {}
   
    _ensureIdIsSet = id => {
      if (id === null)
        throw 'ID is required'
    }
   
    return {
      getName: () => name,
   
      all: () => (Object.keys(_repo).map(key=>_repo[key])),
   
      findById: id => {
        _ensureIdIsSet(id)
        const found = _repo[id]
        return found
      },
   
      add: item => {
        _ensureIdIsSet(item.id)
        _repo[item.id] = item
        return item
      },
   
      update: function(item) {
        let itemToUpdate = this.findById(item.id)
        itemToUpdate = { ...itemToUpdate, ...item }
        _repo[item.id] = itemToUpdate
        return itemToUpdate
      },
   
      remove:function(id) {
        itemToRemove = this.findById(id)
        delete _repo[id]
        return itemToRemove
      },
      count:function(id){
        item=this.findById(id)
        text=item.text
        text=text.split(" ")
        text=text.length
        return{
          id,text
        }
      }
    }
  }

module.exports = InMemoryDatabase