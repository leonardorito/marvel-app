const { getCreatorsByType } = require("./creators");

const heroMapping = (data, id, name) => {
    const editors = getCreatorsByType("editor", data);
    const writers = getCreatorsByType("writer", data);
    const colorists = getCreatorsByType("colorist", data);
    const heroComicMap = [];
    data.forEach(hero => {
        hero.characters.items.forEach(ch => {
            const heroIndex = heroComicMap.findIndex(el => el.character === ch.name)
            if (heroIndex >= 0) {
                heroComicMap[heroIndex].comics.push(hero.title)
                return
            }
            heroComicMap.push({
                character: ch.name,
                comics: [hero.title]
            })
        })
    })
    return {
        heroId: id,
        name,
        lastSync: new Date(),
        editors,
        writers,
        colorists,
        characters: heroComicMap
    }
}

module.exports = {
    heroMapping,
}