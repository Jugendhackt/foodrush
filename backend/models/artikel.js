var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ArtikelSchema = new Schema(
  {
    name: {type: String, required: false, max: 100},
    beschreibung: {type: String, required: false, max: 500},
    menge: {type: String, required: false, max: 20},
    gewicht: {type: String, required: false, max: 20},
    preis: {type: String, required: false, max: 20},
    updated_date: { type: Date, default: Date.now }
  }, {
  toObject: {
  virtuals: true
  },
  toJSON: {
  virtuals: true
  }
});

module.exports = mongoose.model('Artikel', ArtikelSchema);



/*
// Virtual for artikel's URL
ArtikelSchema
.virtual('url')
.get(function () {
  return '/catalog/artikel/' + this._id;
});
*/
