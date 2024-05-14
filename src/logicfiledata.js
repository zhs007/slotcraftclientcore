function parseReels(data, paytable) {
    if (data.fileJson) {
        let lst = [];
        let arr = [];
        let header = ['symbol'];

        for (let i = 0; i < data.fileJson.length; i++) {
            let mapsym = {};

            for (let j = 0; j < data.fileJson[i].length; j++) {
                mapsym[data.fileJson[i][j]] = 1;
            }

            lst.push(mapsym);

            header.push('r' + (i + 1));
        }

        arr.push(header);

        for (let i = 1; i < paytable.length; i++) {
            let curarr = [paytable[i][0]];

            for (let j = 0; j < lst.length; j++) {
                if (lst[j][paytable[i][0]]) {
                    curarr.push('n');
                } else {
                    curarr.push('X');
                }
            }

            arr.push(curarr);
        }

        return arr;
    }

    return undefined;
}

function parsePaytable(paytableData) {
    if (paytableData.fileJson) {
        let arr = [];

        for (let i = 0; i < paytableData.fileJson.length; i++) {
            const symbolData = paytableData.fileJson[i];

            if (i == 0) {
                let header = ['symbol'];

                for (let j = 0; j < symbolData.data.length; j++) {
                    header.push('x' + (j + 1));
                }

                arr.push(header);
            }

            let curarr = [symbolData.Symbol];

            for (let j = 0; j < symbolData.data.length; j++) {
                curarr.push(symbolData.data[j]);
            }

            arr.push(curarr);
        }

        return arr;
    }

    return undefined;
}

function genLogicFileData(repository) {
    let logicFiles = {};

    if (repository.paytableList) {
        if (repository.paytableList.length == 0) {
            return 'No paytable data.';
        }

        if (repository.paytableList.length > 1) {
            return 'There are multiple paytable data.';
        }

        for (let i = 0; i < repository.paytableList.length; i++) {
            const arr = parsePaytable(repository.paytableList[i]);
            if (!arr) {
                return 'Invalid paytable data.';
            }

            logicFiles['paytable'] = arr;
        }
    }

    if (repository.otherList) {
        for (let i = 0; i < repository.otherList.length; i++) {
            const data = repository.otherList[i];
            if (logicFiles[data.fileName]) {
                return 'Duplicate name. - ' + data.fileName;
            }

            if (data.type == 'Reels') {
                const arr = parseReels(data, logicFiles['paytable']);
                if (!arr) {
                    return 'Invalid reels data. - ' + data.fileName;
                }

                logicFiles[data.fileName] = arr;
            }
        }
    }

    return logicFiles;
}

exports.genLogicFileData = genLogicFileData