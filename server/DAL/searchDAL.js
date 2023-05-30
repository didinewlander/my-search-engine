const Search = require('../models/searchModel');

const getResultsByRequest = async (query) => {
    const regex = new RegExp(query, 'i'); // התעלמות מאותיות גדולות
    return await Search.find({
        $or: [
            { query: regex },
            { description: regex },
            { link: regex }
        ]
    }); // כל מילה שאני ארשום תתן לי מידע מהשרת
}

module.exports = { getResultsByRequest }