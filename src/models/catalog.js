const mongoose = require('mongoose')
const autoPopulate = require('mongoose-autopopulate')
const { Schema } = mongoose

const CatalogSchema = new Schema({
	name: { type: String, required: true },
	title: { type: String, required: true },
	company: { type: Schema.Types.ObjectId, ref: 'Company', required: true, autopopulate: true },
	count: { type: Number, required: true },
	images: [
		{ type: Schema.Types.ObjectId, ref: 'Image', required: true }
	]
}, { versionKey: false })

CatalogSchema.plugin(autoPopulate)

module.exports = mongoose.model('Catalog', CatalogSchema)