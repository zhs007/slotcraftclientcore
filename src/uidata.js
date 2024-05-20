class SCUIData {
    constructor(data) {
        if (!data) {
            this.curType = "";
            this.nextType = "";

            this.cashWin = 0;
            this.totalWin = 0;

            this.curNums = 0;
            this.allNums = 0;
            this.addNums = 0;

            this.bQuick = false;
            this.bNextStep = false;
        } else {
            this.curType = data.curType;
            this.nextType = data.nextType;

            this.cashWin = data.cashWin;
            this.totalWin = data.totalWin;

            this.curNums = data.curNums;
            this.allNums = data.allNums;
            this.addNums = data.addNums;

            this.bQuick = data.bQuick;
            this.bNextStep = data.bNextStep;
        }
    }

    isNextFreeGame() {
        if (this.bNextStep) {
            if (this.nextType == 'freespin' || this.nextType == 'FgModule' || this.nextType == 'FreeExtraModule' || this.nextType == 'FgExitModule') {
                return true;
            }
        }

        return false;
    }
}

exports.SCUIData = SCUIData;