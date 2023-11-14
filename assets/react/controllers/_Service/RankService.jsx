{/* Arrange le tableau par temps croissant */}

export function rankService(entries) {

    {/* Récupère les temps les plus bas de chaque utilisateur */}
    const lowestEntries = entries.reduce((accumulator, current) => {
        if (!accumulator[current.user.id] || accumulator[current.user.id].time > current.time) {
            accumulator[current.user.id] = current;
        }
        return accumulator;
    }, {});

    const sortedEntries = Object.values(lowestEntries).sort((a, b) => a.time - b.time);

    return sortedEntries;

}
