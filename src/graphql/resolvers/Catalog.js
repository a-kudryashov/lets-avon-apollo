module.exports = {
	company: async (catalog, args, { Company }) => await Company.findOne({ _id: catalog.companyId }),
	images: async (catalog, args, { Image }) => {
		return await Image.find({ _id: { $in: catalog.imagesIds } }).sort({ catalogIndex: 1 })
	}
}