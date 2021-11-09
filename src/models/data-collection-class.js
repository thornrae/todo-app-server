'use strict';

class Collection {
  constructor(model) {
    this.model = model;
    this.db = []
  }

  get(_id) {
    if(_id) {
      let showOne = this.model.findOne({_id});
      return showOne;
    } else {
      let showDB = this.model.find({});
      return showDB;
    }
  }

  create(record) {
    let newRecord = new this.model(record);
    return newRecord.save()
  }

  update(_id, record) {
    return this.model.findByIdAndUpdate(_id, record, { new: true });
  }

  delete(_id) {
    let deleted = this.model.findByIdAndDelete(_id);
    return deleted;
  }
}

module.exports = Collection;