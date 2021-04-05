var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var stateSchema = new Schema(
  {
    name: String,
    country: { type: Schema.Types.ObjectId, ref: 'Country' },
    population: Number,
    area: Number,
    neighbouring_states: [{ type: Schema.Types.ObjectId, ref: 'State' }],
  },
  { timestamps: true }
);

var State = mongoose.model('State', stateSchema);

module.exports = State;

// name of state
// country -> ObjectId of country
// population
// area
// neighbouring_states -> State ObejctIds
