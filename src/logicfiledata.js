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

function getMaxInReels(reelData) {
    for (i = 1; i < 999; i++) {
        if (!reelData.hasOwnProperty('R' + i)) {
            return i - 1;
        }
    }

    return -1;
}

function parseReels(data, paytable, isAdmin) {
    if (data.excelJson && data.excelJson.length > 0) {
        let lst = [];
        let arr = [];

        let header = ['symbol'];
        let maxReel = getMaxInReels(data.excelJson[0]);

        for (let i = 0; i < maxReel; i++) {
            header.push('r' + (i + 1));
        }

        arr.push(header);

        for (let i = 0; i < maxReel; i++) {
            let mapsym = {};

            for (let j = 0; j < data.excelJson.length; j++) {
                if (data.excelJson[j]['R' + (i + 1)]) {
                    const s = data.excelJson[j]['R' + (i + 1)].trim();
                    if (s != '') {
                        if (mapsym.hasOwnProperty(s)) {
                            mapsym[s]++;
                        } else {
                            mapsym[s] = 1;
                        }
                    }
                }
            }

            lst.push(mapsym);
        }

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

    throw new Error('Empty reels data. ' + data.fileName);
}

function getMaxInPaytableSymbol(symbolData) {
    for (i = 1; i < 999; i++) {
        if (!symbolData.hasOwnProperty('X' + i)) {
            return i - 1;
        }
    }

    return -1;
}

function getMaxInPaytable(excelJson) {
    let maxNum = -1;
    for (let i = 0; i < excelJson.length; i++) {
        let cur = getMaxInPaytableSymbol(excelJson[i]);
        if (cur > maxNum) {
            maxNum = cur;
        }
    }

    return maxNum;
}

function parsePaytable(paytableData) {
    if (paytableData.excelJson) {
        let arr = [];
        let maxNum = getMaxInPaytable(paytableData.excelJson);

        for (let i = 0; i < paytableData.excelJson.length; i++) {
            const symbolData = paytableData.excelJson[i];

            if (i == 0) {
                let header = ['symbol'];

                for (let j = 0; j < maxNum; j++) {
                    header.push('x' + (j + 1));
                }

                arr.push(header);
            }

            let curarr = [symbolData.Symbol];

            for (let j = 0; j < maxNum; j++) {
                const curv = parseInt(symbolData['X' + (j + 1)]);
                if (curv == NaN) {
                    throw new Error('Invalid paytable data. ' + symbolData.Symbol + '.' + ('X' + (j + 1)));
                }

                curarr.push(curv);
            }

            arr.push(curarr);
        }

        return arr;
    }

    throw new Error('Empty paytable data.');
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

            logicFiles['paytable'] = {
                name: repository.paytableList[i].name,
                fileName: repository.paytableList[i].fileName,
                type: repository.paytableList[i].type,
                data: arr,
            };
        }
    }

    if (repository.otherList) {
        for (let i = 0; i < repository.otherList.length; i++) {
            const data = repository.otherList[i];
            if (logicFiles[data.fileName]) {
                throw new Error('Duplicate name. - ' + data.fileName);
            }

            if (data.type == 'Reels') {
                const arr = parseReels(data, logicFiles['paytable'].data, isAdmin);
                if (!arr) {
                    throw new Error('Invalid Reels data. - ' + data.fileName);
                }

                logicFiles[data.fileName] = {
                    name: data.name,
                    fileName: data.fileName,
                    type: data.type,
                    data: arr,
                };
            } else if (data.type == 'StringValWeight' || data.type == 'ReelSetWeight') {
                const arr = parseValWeight(data, isAdmin);
                if (!arr) {
                    throw new Error('Invalid ' + data.type + ' data. - ' + data.fileName);
                }

                // console.log(arr);
                logicFiles[data.fileName] = {
                    name: data.name,
                    fileName: data.fileName,
                    type: data.type,
                    data: arr,
                };
            }
        }
    }

    return logicFiles;
}

exports.genLogicFileData = genLogicFileData