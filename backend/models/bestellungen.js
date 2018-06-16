var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BestellungenSchema = new Schema(
  {
    status: {type: String, required: true, max: 50},
    ware: {type: Array, required: true, max: 500},
    eingegangenAm: {type: Date, required: true, max: 10},
    preis: {type: String, required: false, max: 150},
    lieferadresse: {type: String, required: false, max: 150},
    bestellungZeitfenster: {type: String, required: false, max: 150},
    arbeiter: {type: String, required: false, max: 100},
    updated_date: { type: Date, default: Date.now }
  },
  {
  toObject: {
  virtuals: true
  },
  toJSON: {
  virtuals: true
  }
});


/*
// Virtual for bestellungen's URL
BestellungenSchema
.virtual('url')
.get(function () {
  return '/catalog/bestellungen/' + this._id;
});
*/

//Export model
module.exports = mongoose.model('Bestellungen', BestellungenSchema);

BestellungenSchema.virtual('avgPrice').get(function() {
    var avgPrice = (this.affiliatePrice1 + this.affiliatePrice2 + this.affiliatePrice3) / 3;
    return Math.floor(avgPrice);
});
