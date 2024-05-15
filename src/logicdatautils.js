

function parseCell(logicData, cell) {
    if (cell.shape == 'custom-node-width-start') {

    } else if (cell.shape == 'custom-node') {
        const name = cell.componentValues.label;
        const type = cell.label;

        if (logicData.mapComponents[name] && logicData.mapComponents[name].type != type) {
            throw new Error('There already exists a component with the same name but a different type (in different bet method). - ' + name);
        }

        logicData.mapComponents[name] = {
            type: type,
        };

        logicData.mapIDs[cell.id] = name;
    } else if (cell.shape == 'edge') {
        if (cell.source.port == 'start-out') {
            if (logicData.startID) {
                throw new Error('There are multiple start components.');
            }

            logicData.startID = cell.target.cell;
        }
    }

    return undefined;
}

function buildComponentData(logicData, betMethod) {
    logicData.mapIDs = {};
    logicData.startID = undefined;

    if (betMethod.graph && betMethod.graph.cells) {
        for (let i = 0; i < betMethod.graph.cells.length; i++) {
            const err = parseCell(logicData, betMethod.graph.cells[i]);
            if (err) {
                return err;
            }
        }
    }

    if (!logicData.startID) {
        throw new Error('There are no start component.');
    }

    if (!logicData.mapIDs[logicData.startID]) {
        throw new Error('There are invalid start component.');
    }

    const startComponent = logicData.mapIDs[logicData.startID];

    if (logicData.startComponents.indexOf(startComponent) < 0) {
        logicData.startComponents.push(startComponent);
    }

    delete logicData.mapIDs;
    delete logicData.startID;

    return undefined;
}

function genLogicData(betMethods) {
    let logicData = {
        mapComponents: {},
        startComponents: [],
    };

    for (let i = 0; i < betMethods.length; i++) {
        const err = buildComponentData(logicData, betMethods[i]);
        if (err) {
            return err;
        }
    }

    return logicData;
}

exports.genLogicData = genLogicData