const {getResultsByRequest} = require("../DAL/searchDAL")

const searchResults = async (query) =>{
    const results = await getResultsByRequest(query);
    return results;
}

module.exports = {searchResults};