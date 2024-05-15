function parseValWeight(data, isAdmin) {
    if (data.fileJson) {
        let lst = [];
        let arr = [];
        let header = ['val', 'weight'];
        arr.push(header);

        for (let i = 0; i < data.fileJson.length; i++) {
            const curdata = data.fileJson[i];
            if (isAdmin) {
                arr.push([curdata.val, curdata.weight]);
            } else {
                arr.push([curdata.val, '?']);
            }
        }

        return arr;
    }

    return undefined;
}

function parseReels(data, paytable, isAdmin) {
    if (data.fileJson) {
        let lst = [];
        let arr = [];
        let header = ['symbol'];

        for (let i = 0; i < data.fileJson.length; i++) {
            let mapsym = {};

            for (let j = 0; j < data.fileJson[i].length; j++) {
                if (mapsym.hasOwnProperty(data.fileJson[i][j])) {
                    mapsym[data.fileJson[i][j]]++;
                } else {
                    mapsym[data.fileJson[i][j]] = 1;
                }
            }

            lst.push(mapsym);

            header.push('r' + (i + 1));
        }

        arr.push(header);

        for (let i = 1; i < paytable.length; i++) {
            let curarr = [paytable[i][0]];

            for (let j = 0; j < lst.length; j++) {
                if (isAdmin) {
                    if (lst[j][paytable[i][0]]) {
                        curarr.push(lst[j][paytable[i][0]]);
                    } else {
                        curarr.push('×');
                    }
                } else {
                    if (lst[j][paytable[i][0]]) {
                        curarr.push('√');
                    } else {
                        curarr.push('×');
                    }
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

function genLogicFileData(repository, isAdmin) {
    let logicFiles = {};

    if (repository.paytableList) {
        if (repository.paytableList.length == 0) {
            throw new Error('No paytable data.');
        }

        if (repository.paytableList.length > 1) {
            throw new Error('There are multiple paytable data.');
        }

        for (let i = 0; i < repository.paytableList.length; i++) {
            const arr = parsePaytable(repository.paytableList[i]);
            if (!arr) {
                throw new Error('Invalid paytable data.');
            }

            logicFiles['paytable'] = arr;
        }
    }

    if (repository.otherList) {
        for (let i = 0; i < repository.otherList.length; i++) {
            const data = repository.otherList[i];
            if (logicFiles[data.fileName]) {
                throw new Error('Duplicate name. - ' + data.fileName);
            }

            if (data.type == 'Reels') {
                const arr = parseReels(data, logicFiles['paytable'], isAdmin);
                if (!arr) {
                    throw new Error('Invalid Reels data. - ' + data.fileName);
                }

                logicFiles[data.fileName] = arr;
            } else if (data.type == 'StringValWeight' || data.type == 'ReelSetWeight') {
                const arr = parseValWeight(data, isAdmin);
                if (!arr) {
                    throw new Error('Invalid ' + data.type + ' data. - ' + data.fileName);
                }

                // console.log(arr);
                logicFiles[data.fileName] = arr;
            }
        }
    }

    return logicFiles;
}

exports.genLogicFileData = genLogicFileData