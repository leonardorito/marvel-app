const _ = require('lodash');

const getCreatorsByType = (type, data) => {
    const creatorsItems = data.map(el => el.creators.items).flat()
    return _.uniq(creatorsItems
        .filter(el => el.role === type)
        .map(el => el.name))
}

module.exports = {
    getCreatorsByType,
}