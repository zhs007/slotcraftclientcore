const { SCLogicMgr } = require('../src/index.js');

var Logic = Logic || {};
Logic.instance = new SCLogicMgr();

var moonwalker = true;
var cfgdata = {
  10: {
    Components: [
      {
        config: {
          defaultNextComponent: "bg-walktrigger",
          tagRNG: null,
          initStrVals: null,
          useFileMapping: false,
          componentType: "weightReels",
          targetScenes3: null,
          reelSetWeight: "bgreelweight",
          isExpandReel: false,
        },
      },
      {
        config: {
          defaultNextComponent: "bg-paylines",
          tagRNG: null,
          initStrVals: null,
          useFileMapping: false,
          componentType: "scatterTrigger",
          targetScenes3: null,
          symbols: ["SC"],
          type: "countscatterInArea",
          betType: "noPay",
          minNum: 3,
          wildSymbols: null,
          posArea: [0, 0, 0, 2],
          countScatterPayAs: "",
          winMulti: 1,
          jumpToComponent: "bg-walk",
          piggyBankComponent: "",
          forceToNext: false,
          awards: null,
          symbolAwardsWeights: null,
          targetMask: "",
          isReverse: false,
          needDiscardResults: false,
          isAddRespinMode: false,
          respinComponent: "",
          respinNum: 0,
          respinNumWeight: "",
          respinNumWithScatterNum: null,
          respinNumWeightWithScatterNum: null,
        },
      },
      {
        config: {
          defaultNextComponent: "bg-paylines",
          tagRNG: null,
          initStrVals: null,
          useFileMapping: false,
          componentType: "moveSymbol",
          targetScenes3: null,
          moveData: [
            {
              src: {
                type: "selectWithXY",
                x: 0,
                y: 0,
                symbol: "",
              },
              target: {
                type: "selectSymbolR2L",
                x: 0,
                y: 0,
                symbol: "SC",
              },
              moveType: "xy",
              targetSymbol: "SC",
              overrideSrc: false,
              overrideTarget: false,
              overridePath: true,
            },
            {
              src: {
                type: "selectWithXY",
                x: 0,
                y: 1,
                symbol: "",
              },
              target: {
                type: "selectSymbolR2L",
                x: 0,
                y: 1,
                symbol: "SC",
              },
              moveType: "xy",
              targetSymbol: "SC",
              overrideSrc: false,
              overrideTarget: false,
              overridePath: true,
            },
            {
              src: {
                type: "selectWithXY",
                x: 0,
                y: 2,
                symbol: "",
              },
              target: {
                type: "selectSymbolR2L",
                x: 0,
                y: 2,
                symbol: "SC",
              },
              moveType: "xy",
              targetSymbol: "SC",
              overrideSrc: false,
              overrideTarget: false,
              overridePath: true,
            },
          ],
        },
      },
      {
        config: {
          defaultNextComponent: "bg-paysc",
          tagRNG: null,
          initStrVals: null,
          useFileMapping: false,
          componentType: "linesTrigger",
          targetScenes3: null,
          symbols: [
            "WL",
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "J",
            "K",
            "L",
          ],
          type: "lines",
          betType: "bet",
          minNum: 0,
          wildSymbols: ["WL"],
          checkWinType: "left2right",
          winMulti: 1,
          jumpToComponent: "",
          forceToNext: false,
          awards: null,
          symbolAwardsWeights: null,
          targetMask: "",
          isReverse: false,
          needDiscardResults: false,
          isAddRespinMode: false,
          respinNum: 0,
          respinNumWeight: "",
          respinNumWithScatterNum: null,
          respinNumWeightWithScatterNum: null,
        },
      },
      {
        config: {
          defaultNextComponent: "bg-payfg",
          tagRNG: null,
          initStrVals: null,
          useFileMapping: false,
          componentType: "scatterTrigger",
          targetScenes3: null,
          symbols: ["SC"],
          type: "scatters",
          betType: "bet",
          minNum: 0,
          wildSymbols: null,
          posArea: null,
          countScatterPayAs: "",
          winMulti: 1,
          jumpToComponent: "",
          piggyBankComponent: "",
          forceToNext: false,
          awards: null,
          symbolAwardsWeights: null,
          targetMask: "",
          isReverse: false,
          needDiscardResults: false,
          isAddRespinMode: false,
          respinComponent: "",
          respinNum: 0,
          respinNumWeight: "",
          respinNumWithScatterNum: null,
          respinNumWeightWithScatterNum: null,
        },
      },
      {
        config: {
          defaultNextComponent: "bg-triggerfg",
          tagRNG: null,
          initStrVals: null,
          useFileMapping: false,
          componentType: "scatterTrigger",
          targetScenes3: null,
          symbols: ["FG"],
          type: "scatters",
          betType: "bet",
          minNum: 0,
          wildSymbols: null,
          posArea: null,
          countScatterPayAs: "",
          winMulti: 1,
          jumpToComponent: "",
          piggyBankComponent: "",
          forceToNext: false,
          awards: null,
          symbolAwardsWeights: null,
          targetMask: "",
          isReverse: false,
          needDiscardResults: false,
          isAddRespinMode: false,
          respinComponent: "",
          respinNum: 0,
          respinNumWeight: "",
          respinNumWithScatterNum: null,
          respinNumWeightWithScatterNum: null,
        },
      },
      {
        config: {
          defaultNextComponent: "",
          tagRNG: null,
          initStrVals: null,
          useFileMapping: false,
          componentType: "respin",
          targetScenes3: null,
          mainComponent: "fg-spin",
        },
      },
      {
        config: {
          defaultNextComponent: "fg-walktrigger",
          tagRNG: null,
          initStrVals: null,
          useFileMapping: false,
          componentType: "weightReels",
          targetScenes3: null,
          reelSetWeight: "fgreelweight",
          isExpandReel: false,
        },
      },
      {
        config: {
          defaultNextComponent: "fg-paylines",
          tagRNG: null,
          initStrVals: null,
          useFileMapping: false,
          componentType: "scatterTrigger",
          targetScenes3: null,
          symbols: ["SC"],
          type: "countscatterInArea",
          betType: "noPay",
          minNum: 1,
          wildSymbols: null,
          posArea: [0, 0, 0, 0],
          countScatterPayAs: "",
          winMulti: 1,
          jumpToComponent: "fg-walkdown",
          piggyBankComponent: "",
          forceToNext: false,
          awards: null,
          symbolAwardsWeights: null,
          targetMask: "",
          isReverse: false,
          needDiscardResults: false,
          isAddRespinMode: false,
          respinComponent: "",
          respinNum: 0,
          respinNumWeight: "",
          respinNumWithScatterNum: null,
          respinNumWeightWithScatterNum: null,
        },
      },
      {
        config: {
          defaultNextComponent: "fg-walk",
          tagRNG: null,
          initStrVals: null,
          useFileMapping: false,
          componentType: "moveSymbol",
          targetScenes3: null,
          moveData: [
            {
              src: {
                type: "selectWithXY",
                x: 0,
                y: 0,
                symbol: "",
              },
              target: {
                type: "selectWithXY",
                x: 0,
                y: 2,
                symbol: "",
              },
              moveType: "xy",
              targetSymbol: "SC",
              overrideSrc: false,
              overrideTarget: true,
              overridePath: true,
            },
          ],
        },
      },
      {
        config: {
          defaultNextComponent: "fg-paylines",
          tagRNG: null,
          initStrVals: null,
          useFileMapping: false,
          componentType: "moveSymbol",
          targetScenes3: null,
          moveData: [
            {
              src: {
                type: "selectWithXY",
                x: 0,
                y: 0,
                symbol: "",
              },
              target: {
                type: "selectSymbolR2L",
                x: 0,
                y: 0,
                symbol: "SC",
              },
              moveType: "xy",
              targetSymbol: "SC",
              overrideSrc: false,
              overrideTarget: false,
              overridePath: true,
            },
            {
              src: {
                type: "selectWithXY",
                x: 0,
                y: 1,
                symbol: "",
              },
              target: {
                type: "selectSymbolR2L",
                x: 0,
                y: 1,
                symbol: "SC",
              },
              moveType: "xy",
              targetSymbol: "SC",
              overrideSrc: false,
              overrideTarget: false,
              overridePath: true,
            },
            {
              src: {
                type: "selectWithXY",
                x: 0,
                y: 2,
                symbol: "",
              },
              target: {
                type: "selectSymbolR2L",
                x: 0,
                y: 2,
                symbol: "SC",
              },
              moveType: "xy",
              targetSymbol: "SC",
              overrideSrc: false,
              overrideTarget: false,
              overridePath: true,
            },
          ],
        },
      },
      {
        config: {
          defaultNextComponent: "",
          tagRNG: null,
          initStrVals: null,
          useFileMapping: false,
          componentType: "scatterTrigger",
          targetScenes3: null,
          symbols: ["FG"],
          type: "countscatter",
          betType: "noPay",
          minNum: 3,
          wildSymbols: null,
          posArea: null,
          countScatterPayAs: "",
          winMulti: 1,
          jumpToComponent: "",
          piggyBankComponent: "",
          forceToNext: false,
          awards: [
            {
              awardType: "respinTimes",
              vals: [15],
              strParams: ["fg-start"],
              componentVals: null,
              onTriggerRespin: "",
            },
          ],
          symbolAwardsWeights: null,
          targetMask: "",
          isReverse: false,
          needDiscardResults: false,
          isAddRespinMode: false,
          respinComponent: "",
          respinNum: 0,
          respinNumWeight: "",
          respinNumWithScatterNum: null,
          respinNumWeightWithScatterNum: null,
        },
      },
      {
        config: {
          defaultNextComponent: "fg-paysc",
          tagRNG: null,
          initStrVals: null,
          useFileMapping: false,
          componentType: "linesTrigger",
          targetScenes3: null,
          symbols: [
            "WL",
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "J",
            "K",
            "L",
          ],
          type: "lines",
          betType: "bet",
          minNum: 0,
          wildSymbols: ["WL"],
          checkWinType: "left2right",
          winMulti: 3,
          jumpToComponent: "",
          forceToNext: false,
          awards: null,
          symbolAwardsWeights: null,
          targetMask: "",
          isReverse: false,
          needDiscardResults: false,
          isAddRespinMode: false,
          respinNum: 0,
          respinNumWeight: "",
          respinNumWithScatterNum: null,
          respinNumWeightWithScatterNum: null,
        },
      },
      {
        config: {
          defaultNextComponent: "fg-payfg",
          tagRNG: null,
          initStrVals: null,
          useFileMapping: false,
          componentType: "scatterTrigger",
          targetScenes3: null,
          symbols: ["SC"],
          type: "scatters",
          betType: "bet",
          minNum: 0,
          wildSymbols: null,
          posArea: null,
          countScatterPayAs: "",
          winMulti: 3,
          jumpToComponent: "",
          piggyBankComponent: "",
          forceToNext: false,
          awards: null,
          symbolAwardsWeights: null,
          targetMask: "",
          isReverse: false,
          needDiscardResults: false,
          isAddRespinMode: false,
          respinComponent: "",
          respinNum: 0,
          respinNumWeight: "",
          respinNumWithScatterNum: null,
          respinNumWeightWithScatterNum: null,
        },
      },
      {
        config: {
          defaultNextComponent: "fg-fgtrigger",
          tagRNG: null,
          initStrVals: null,
          useFileMapping: false,
          componentType: "scatterTrigger",
          targetScenes3: null,
          symbols: ["FG"],
          type: "scatters",
          betType: "bet",
          minNum: 0,
          wildSymbols: null,
          posArea: null,
          countScatterPayAs: "",
          winMulti: 3,
          jumpToComponent: "",
          piggyBankComponent: "",
          forceToNext: false,
          awards: null,
          symbolAwardsWeights: null,
          targetMask: "",
          isReverse: false,
          needDiscardResults: false,
          isAddRespinMode: false,
          respinComponent: "",
          respinNum: 0,
          respinNumWeight: "",
          respinNumWithScatterNum: null,
          respinNumWeightWithScatterNum: null,
        },
      },
      {
        config: {
          defaultNextComponent: "",
          tagRNG: null,
          initStrVals: null,
          useFileMapping: false,
          componentType: "scatterTrigger",
          targetScenes3: null,
          symbols: ["FG"],
          type: "countscatter",
          betType: "noPay",
          minNum: 3,
          wildSymbols: null,
          posArea: null,
          countScatterPayAs: "FG",
          winMulti: 1,
          jumpToComponent: "fg-start",
          piggyBankComponent: "",
          forceToNext: false,
          awards: null,
          symbolAwardsWeights: null,
          targetMask: "",
          isReverse: false,
          needDiscardResults: false,
          isAddRespinMode: true,
          respinComponent: "fg-start",
          respinNum: 15,
          respinNumWeight: "",
          respinNumWithScatterNum: null,
          respinNumWeightWithScatterNum: null,
        },
      },
    ],
    MapComponents: {
      "bg-paylines": {
        config: {
          defaultNextComponent: "bg-paysc",
          tagRNG: null,
          initStrVals: null,
          useFileMapping: false,
          componentType: "linesTrigger",
          targetScenes3: null,
          symbols: [
            "WL",
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "J",
            "K",
            "L",
          ],
          type: "lines",
          betType: "bet",
          minNum: 0,
          wildSymbols: ["WL"],
          checkWinType: "left2right",
          winMulti: 1,
          jumpToComponent: "",
          forceToNext: false,
          awards: null,
          symbolAwardsWeights: null,
          targetMask: "",
          isReverse: false,
          needDiscardResults: false,
          isAddRespinMode: false,
          respinNum: 0,
          respinNumWeight: "",
          respinNumWithScatterNum: null,
          respinNumWeightWithScatterNum: null,
        },
      },
      "bg-payfg": {
        config: {
          defaultNextComponent: "bg-triggerfg",
          tagRNG: null,
          initStrVals: null,
          useFileMapping: false,
          componentType: "scatterTrigger",
          targetScenes3: null,
          symbols: ["FG"],
          type: "scatters",
          betType: "bet",
          minNum: 0,
          wildSymbols: null,
          posArea: null,
          countScatterPayAs: "",
          winMulti: 1,
          jumpToComponent: "",
          piggyBankComponent: "",
          forceToNext: false,
          awards: null,
          symbolAwardsWeights: null,
          targetMask: "",
          isReverse: false,
          needDiscardResults: false,
          isAddRespinMode: false,
          respinComponent: "",
          respinNum: 0,
          respinNumWeight: "",
          respinNumWithScatterNum: null,
          respinNumWeightWithScatterNum: null,
        },
      },
      "fg-walkdown": {
        config: {
          defaultNextComponent: "fg-walk",
          tagRNG: null,
          initStrVals: null,
          useFileMapping: false,
          componentType: "moveSymbol",
          targetScenes3: null,
          moveData: [
            {
              src: {
                type: "selectWithXY",
                x: 0,
                y: 0,
                symbol: "",
              },
              target: {
                type: "selectWithXY",
                x: 0,
                y: 2,
                symbol: "",
              },
              moveType: "xy",
              targetSymbol: "SC",
              overrideSrc: false,
              overrideTarget: true,
              overridePath: true,
            },
          ],
        },
      },
      "bg-triggerfg": {
        config: {
          defaultNextComponent: "",
          tagRNG: null,
          initStrVals: null,
          useFileMapping: false,
          componentType: "scatterTrigger",
          targetScenes3: null,
          symbols: ["FG"],
          type: "countscatter",
          betType: "noPay",
          minNum: 3,
          wildSymbols: null,
          posArea: null,
          countScatterPayAs: "FG",
          winMulti: 1,
          jumpToComponent: "fg-start",
          piggyBankComponent: "",
          forceToNext: false,
          awards: null,
          symbolAwardsWeights: null,
          targetMask: "",
          isReverse: false,
          needDiscardResults: false,
          isAddRespinMode: true,
          respinComponent: "fg-start",
          respinNum: 15,
          respinNumWeight: "",
          respinNumWithScatterNum: null,
          respinNumWeightWithScatterNum: null,
        },
      },
      "bg-walktrigger": {
        config: {
          defaultNextComponent: "bg-paylines",
          tagRNG: null,
          initStrVals: null,
          useFileMapping: false,
          componentType: "scatterTrigger",
          targetScenes3: null,
          symbols: ["SC"],
          type: "countscatterInArea",
          betType: "noPay",
          minNum: 3,
          wildSymbols: null,
          posArea: [0, 0, 0, 2],
          countScatterPayAs: "",
          winMulti: 1,
          jumpToComponent: "bg-walk",
          piggyBankComponent: "",
          forceToNext: false,
          awards: null,
          symbolAwardsWeights: null,
          targetMask: "",
          isReverse: false,
          needDiscardResults: false,
          isAddRespinMode: false,
          respinComponent: "",
          respinNum: 0,
          respinNumWeight: "",
          respinNumWithScatterNum: null,
          respinNumWeightWithScatterNum: null,
        },
      },
      "bg-walk": {
        config: {
          defaultNextComponent: "bg-paylines",
          tagRNG: null,
          initStrVals: null,
          useFileMapping: false,
          componentType: "moveSymbol",
          targetScenes3: null,
          moveData: [
            {
              src: {
                type: "selectWithXY",
                x: 0,
                y: 0,
                symbol: "",
              },
              target: {
                type: "selectSymbolR2L",
                x: 0,
                y: 0,
                symbol: "SC",
              },
              moveType: "xy",
              targetSymbol: "SC",
              overrideSrc: false,
              overrideTarget: false,
              overridePath: true,
            },
            {
              src: {
                type: "selectWithXY",
                x: 0,
                y: 1,
                symbol: "",
              },
              target: {
                type: "selectSymbolR2L",
                x: 0,
                y: 1,
                symbol: "SC",
              },
              moveType: "xy",
              targetSymbol: "SC",
              overrideSrc: false,
              overrideTarget: false,
              overridePath: true,
            },
            {
              src: {
                type: "selectWithXY",
                x: 0,
                y: 2,
                symbol: "",
              },
              target: {
                type: "selectSymbolR2L",
                x: 0,
                y: 2,
                symbol: "SC",
              },
              moveType: "xy",
              targetSymbol: "SC",
              overrideSrc: false,
              overrideTarget: false,
              overridePath: true,
            },
          ],
        },
      },
      "bg-paysc": {
        config: {
          defaultNextComponent: "bg-payfg",
          tagRNG: null,
          initStrVals: null,
          useFileMapping: false,
          componentType: "scatterTrigger",
          targetScenes3: null,
          symbols: ["SC"],
          type: "scatters",
          betType: "bet",
          minNum: 0,
          wildSymbols: null,
          posArea: null,
          countScatterPayAs: "",
          winMulti: 1,
          jumpToComponent: "",
          piggyBankComponent: "",
          forceToNext: false,
          awards: null,
          symbolAwardsWeights: null,
          targetMask: "",
          isReverse: false,
          needDiscardResults: false,
          isAddRespinMode: false,
          respinComponent: "",
          respinNum: 0,
          respinNumWeight: "",
          respinNumWithScatterNum: null,
          respinNumWeightWithScatterNum: null,
        },
      },
      "fg-fgtrigger": {
        config: {
          defaultNextComponent: "",
          tagRNG: null,
          initStrVals: null,
          useFileMapping: false,
          componentType: "scatterTrigger",
          targetScenes3: null,
          symbols: ["FG"],
          type: "countscatter",
          betType: "noPay",
          minNum: 3,
          wildSymbols: null,
          posArea: null,
          countScatterPayAs: "",
          winMulti: 1,
          jumpToComponent: "",
          piggyBankComponent: "",
          forceToNext: false,
          awards: [
            {
              awardType: "respinTimes",
              vals: [15],
              strParams: ["fg-start"],
              componentVals: null,
              onTriggerRespin: "",
            },
          ],
          symbolAwardsWeights: null,
          targetMask: "",
          isReverse: false,
          needDiscardResults: false,
          isAddRespinMode: false,
          respinComponent: "",
          respinNum: 0,
          respinNumWeight: "",
          respinNumWithScatterNum: null,
          respinNumWeightWithScatterNum: null,
        },
      },
      "fg-payfg": {
        config: {
          defaultNextComponent: "fg-fgtrigger",
          tagRNG: null,
          initStrVals: null,
          useFileMapping: false,
          componentType: "scatterTrigger",
          targetScenes3: null,
          symbols: ["FG"],
          type: "scatters",
          betType: "bet",
          minNum: 0,
          wildSymbols: null,
          posArea: null,
          countScatterPayAs: "",
          winMulti: 3,
          jumpToComponent: "",
          piggyBankComponent: "",
          forceToNext: false,
          awards: null,
          symbolAwardsWeights: null,
          targetMask: "",
          isReverse: false,
          needDiscardResults: false,
          isAddRespinMode: false,
          respinComponent: "",
          respinNum: 0,
          respinNumWeight: "",
          respinNumWithScatterNum: null,
          respinNumWeightWithScatterNum: null,
        },
      },
      "fg-start": {
        config: {
          defaultNextComponent: "",
          tagRNG: null,
          initStrVals: null,
          useFileMapping: false,
          componentType: "respin",
          targetScenes3: null,
          mainComponent: "fg-spin",
        },
      },
      "fg-spin": {
        config: {
          defaultNextComponent: "fg-walktrigger",
          tagRNG: null,
          initStrVals: null,
          useFileMapping: false,
          componentType: "weightReels",
          targetScenes3: null,
          reelSetWeight: "fgreelweight",
          isExpandReel: false,
        },
      },
      "fg-walktrigger": {
        config: {
          defaultNextComponent: "fg-paylines",
          tagRNG: null,
          initStrVals: null,
          useFileMapping: false,
          componentType: "scatterTrigger",
          targetScenes3: null,
          symbols: ["SC"],
          type: "countscatterInArea",
          betType: "noPay",
          minNum: 1,
          wildSymbols: null,
          posArea: [0, 0, 0, 0],
          countScatterPayAs: "",
          winMulti: 1,
          jumpToComponent: "fg-walkdown",
          piggyBankComponent: "",
          forceToNext: false,
          awards: null,
          symbolAwardsWeights: null,
          targetMask: "",
          isReverse: false,
          needDiscardResults: false,
          isAddRespinMode: false,
          respinComponent: "",
          respinNum: 0,
          respinNumWeight: "",
          respinNumWithScatterNum: null,
          respinNumWeightWithScatterNum: null,
        },
      },
      "bg-spin": {
        config: {
          defaultNextComponent: "bg-walktrigger",
          tagRNG: null,
          initStrVals: null,
          useFileMapping: false,
          componentType: "weightReels",
          targetScenes3: null,
          reelSetWeight: "bgreelweight",
          isExpandReel: false,
        },
      },
      "fg-walk": {
        config: {
          defaultNextComponent: "fg-paylines",
          tagRNG: null,
          initStrVals: null,
          useFileMapping: false,
          componentType: "moveSymbol",
          targetScenes3: null,
          moveData: [
            {
              src: {
                type: "selectWithXY",
                x: 0,
                y: 0,
                symbol: "",
              },
              target: {
                type: "selectSymbolR2L",
                x: 0,
                y: 0,
                symbol: "SC",
              },
              moveType: "xy",
              targetSymbol: "SC",
              overrideSrc: false,
              overrideTarget: false,
              overridePath: true,
            },
            {
              src: {
                type: "selectWithXY",
                x: 0,
                y: 1,
                symbol: "",
              },
              target: {
                type: "selectSymbolR2L",
                x: 0,
                y: 1,
                symbol: "SC",
              },
              moveType: "xy",
              targetSymbol: "SC",
              overrideSrc: false,
              overrideTarget: false,
              overridePath: true,
            },
            {
              src: {
                type: "selectWithXY",
                x: 0,
                y: 2,
                symbol: "",
              },
              target: {
                type: "selectSymbolR2L",
                x: 0,
                y: 2,
                symbol: "SC",
              },
              moveType: "xy",
              targetSymbol: "SC",
              overrideSrc: false,
              overrideTarget: false,
              overridePath: true,
            },
          ],
        },
      },
      "fg-paylines": {
        config: {
          defaultNextComponent: "fg-paysc",
          tagRNG: null,
          initStrVals: null,
          useFileMapping: false,
          componentType: "linesTrigger",
          targetScenes3: null,
          symbols: [
            "WL",
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "J",
            "K",
            "L",
          ],
          type: "lines",
          betType: "bet",
          minNum: 0,
          wildSymbols: ["WL"],
          checkWinType: "left2right",
          winMulti: 3,
          jumpToComponent: "",
          forceToNext: false,
          awards: null,
          symbolAwardsWeights: null,
          targetMask: "",
          isReverse: false,
          needDiscardResults: false,
          isAddRespinMode: false,
          respinNum: 0,
          respinNumWeight: "",
          respinNumWithScatterNum: null,
          respinNumWeightWithScatterNum: null,
        },
      },
      "fg-paysc": {
        config: {
          defaultNextComponent: "fg-payfg",
          tagRNG: null,
          initStrVals: null,
          useFileMapping: false,
          componentType: "scatterTrigger",
          targetScenes3: null,
          symbols: ["SC"],
          type: "scatters",
          betType: "bet",
          minNum: 0,
          wildSymbols: null,
          posArea: null,
          countScatterPayAs: "",
          winMulti: 3,
          jumpToComponent: "",
          piggyBankComponent: "",
          forceToNext: false,
          awards: null,
          symbolAwardsWeights: null,
          targetMask: "",
          isReverse: false,
          needDiscardResults: false,
          isAddRespinMode: false,
          respinComponent: "",
          respinNum: 0,
          respinNumWeight: "",
          respinNumWithScatterNum: null,
          respinNumWeightWithScatterNum: null,
        },
      },
    },
    Stats2: null,
  },
};

var statedata = {
  "bg-spin": { list: ["bg-spin"], module: "spinResult", performance: "" },
  "bg-walk": { list: ["bg-walk"], module: "moonWalk", performance: "" },
  "bg-top": { list: ["bg-paylines", "bg-payfg"], module: "showWinTop", performance: "" },
  "bg-paysc": { list: ["bg-paysc"], module: "paysc", performance: "" },
  "bg-win": { list: ["bg-spin"], module: "showWinAni", performance: "" },
  "bg-fgtrigger": { list: ["bg-triggerfg"], module: "enterFree", performance: "" },
  "fg-spin": { list: ["fg-spin"], module: "spinResult", performance: "" },
  "fg-walkdown": { list: ["fg-walkdown"], module: "moonDown", performance: "" },
  "fg-walk": { list: ["fg-walk"], module: "moonWalk", performance: "" },
  "fg-top": { list: ["fg-paylines", "fg-payfg"], module: "showWinTop", performance: "" },
  "fg-paysc": { list: ["fg-paysc"], module: "paysc", performance: "" },
  "fg-win": { list: ["fg-spin"], module: "showWinAni", performance: "" },
  "fg-fgtrigger": { list: ["fg-fgtrigger"], module: "freeExtra", performance: "" },

  'fg': { list: ["fg-start"], module: "freespin", performance: "", bquick: false, toui: true }
};

var statelist = ["bg-spin", "bg-walk", "bg-top", "bg-paysc", "bg-win", "bg-fgtrigger", "fg-spin", "fg-walkdown", "fg-walk", "fg-top", "fg-paysc", "fg-win", "fg-fgtrigger"];

var orbs = true;
// var cfgdata = {
//   "10": {
//       "Components": [
//           {
//               "config": {
//                   "defaultNextComponent": "bg-paylines",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "basicReels",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "reelSetWeight": "",
//                   "reelSet": "bgreels",
//                   "isExpandReel": false
//               }
//           },
//           {
//               "config": {
//                   "defaultNextComponent": "bg-paysc",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "linesTrigger",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "symbols": [
//                       "J",
//                       "H",
//                       "G",
//                       "F",
//                       "E",
//                       "D",
//                       "C",
//                       "B",
//                       "A",
//                       "W"
//                   ],
//                   "type": "lines",
//                   "betType": "bet",
//                   "minNum": 0,
//                   "wildSymbols": [
//                       "W"
//                   ],
//                   "checkWinType": "",
//                   "winMulti": 1,
//                   "jumpToComponent": "",
//                   "forceToNext": false,
//                   "awards": null,
//                   "symbolAwardsWeights": null,
//                   "targetMask": "",
//                   "isReverse": false,
//                   "needDiscardResults": false,
//                   "isAddRespinMode": false,
//                   "respinNum": 0,
//                   "respinNumWeight": "",
//                   "respinNumWithScatterNum": null,
//                   "respinNumWeightWithScatterNum": null
//               }
//           },
//           {
//               "config": {
//                   "defaultNextComponent": "",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "scatterTrigger",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "symbols": [
//                       "W"
//                   ],
//                   "type": "countscatter",
//                   "betType": "bet",
//                   "minNum": 3,
//                   "wildSymbols": null,
//                   "posArea": null,
//                   "countScatterPayAs": "S",
//                   "winMulti": 1,
//                   "jumpToComponent": "bg-rollsym",
//                   "forceToNext": false,
//                   "awards": null,
//                   "symbolAwardsWeights": null,
//                   "targetMask": "",
//                   "isReverse": false,
//                   "needDiscardResults": false,
//                   "isAddRespinMode": true,
//                   "respinComponent": "fg-start",
//                   "respinNum": 10,
//                   "respinNumWeight": "",
//                   "respinNumWithScatterNum": null,
//                   "respinNumWeightWithScatterNum": null
//               }
//           },
//           {
//               "config": {
//                   "defaultNextComponent": "",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "respin",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "mainComponent": "fg-spin"
//               }
//           },
//           {
//               "config": {
//                   "defaultNextComponent": "fg-paylines",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "basicReels",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "reelSetWeight": "",
//                   "reelSet": "fgreels",
//                   "isExpandReel": false
//               }
//           },
//           {
//               "config": {
//                   "defaultNextComponent": "",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "symbolCollection2",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "foreachComponent": "fg-checkbookof",
//                   "maxSymbolNum": 0,
//                   "initSymbols": null
//               }
//           },
//           {
//               "config": {
//                   "defaultNextComponent": "fg-start",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "rollSymbol",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "weight": "fgbookofsymbol",
//                   "srcSymbolCollection": "",
//                   "ignoreSymbolCollection": "fg-syms",
//                   "targetSymbolCollection": "fg-syms"
//               }
//           },
//           {
//               "config": {
//                   "defaultNextComponent": "fg-paysc",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "linesTrigger",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "symbols": [
//                       "J",
//                       "H",
//                       "G",
//                       "F",
//                       "E",
//                       "D",
//                       "C",
//                       "B",
//                       "A",
//                       "W"
//                   ],
//                   "type": "lines",
//                   "betType": "bet",
//                   "minNum": 0,
//                   "wildSymbols": [
//                       "W"
//                   ],
//                   "checkWinType": "",
//                   "winMulti": 1,
//                   "jumpToComponent": "",
//                   "forceToNext": false,
//                   "awards": null,
//                   "symbolAwardsWeights": null,
//                   "targetMask": "",
//                   "isReverse": false,
//                   "needDiscardResults": false,
//                   "isAddRespinMode": false,
//                   "respinNum": 0,
//                   "respinNumWeight": "",
//                   "respinNumWithScatterNum": null,
//                   "respinNumWeightWithScatterNum": null
//               }
//           },
//           {
//               "config": {
//                   "defaultNextComponent": "fg-syms",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "scatterTrigger",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "symbols": [
//                       "W"
//                   ],
//                   "type": "countscatter",
//                   "betType": "bet",
//                   "minNum": 3,
//                   "wildSymbols": null,
//                   "posArea": null,
//                   "countScatterPayAs": "S",
//                   "winMulti": 1,
//                   "jumpToComponent": "fg-rollsym",
//                   "forceToNext": false,
//                   "awards": null,
//                   "symbolAwardsWeights": null,
//                   "targetMask": "",
//                   "isReverse": false,
//                   "needDiscardResults": false,
//                   "isAddRespinMode": true,
//                   "respinComponent": "fg-start",
//                   "respinNum": 10,
//                   "respinNumWeight": "",
//                   "respinNumWithScatterNum": null,
//                   "respinNumWeightWithScatterNum": null
//               }
//           },
//           {
//               "config": {
//                   "defaultNextComponent": "fg-syms",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "rollSymbol",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "weight": "fgbookofsymbol",
//                   "srcSymbolCollection": "",
//                   "ignoreSymbolCollection": "fg-syms",
//                   "targetSymbolCollection": "fg-syms"
//               }
//           },
//           {
//               "config": {
//                   "defaultNextComponent": "fg-replacereel",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "mask",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "num": 5,
//                   "perMaskAwards": null,
//                   "mapSPMaskAwards": null
//               }
//           },
//           {
//               "config": {
//                   "defaultNextComponent": "",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "scatterTrigger",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "symbols": [
//                       "J",
//                       "H",
//                       "G",
//                       "F",
//                       "E",
//                       "D",
//                       "C",
//                       "B",
//                       "A"
//                   ],
//                   "type": "scatters",
//                   "betType": "noPay",
//                   "minNum": 0,
//                   "wildSymbols": [
//                       "W"
//                   ],
//                   "posArea": null,
//                   "countScatterPayAs": "",
//                   "winMulti": 1,
//                   "jumpToComponent": "fg-bookof",
//                   "forceToNext": false,
//                   "awards": null,
//                   "symbolAwardsWeights": null,
//                   "targetMask": "fg-bookof",
//                   "isReverse": false,
//                   "needDiscardResults": true,
//                   "isAddRespinMode": false,
//                   "respinComponent": "",
//                   "respinNum": 0,
//                   "respinNumWeight": "",
//                   "respinNumWithScatterNum": null,
//                   "respinNumWeightWithScatterNum": null
//               }
//           },
//           {
//               "config": {
//                   "defaultNextComponent": "fg-paybookof",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "replaceReelWithMask",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "symbol": "J",
//                   "mask": "fg-bookof"
//               }
//           },
//           {
//               "config": {
//                   "defaultNextComponent": "",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "linesTrigger",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "symbols": [
//                       "J",
//                       "H",
//                       "G",
//                       "F",
//                       "E",
//                       "D",
//                       "C",
//                       "B",
//                       "A",
//                       "W"
//                   ],
//                   "type": "lines",
//                   "betType": "bet",
//                   "minNum": 0,
//                   "wildSymbols": [
//                       "W"
//                   ],
//                   "checkWinType": "",
//                   "winMulti": 1,
//                   "jumpToComponent": "",
//                   "forceToNext": false,
//                   "awards": null,
//                   "symbolAwardsWeights": null,
//                   "targetMask": "",
//                   "isReverse": false,
//                   "needDiscardResults": false,
//                   "isAddRespinMode": false,
//                   "respinNum": 0,
//                   "respinNumWeight": "",
//                   "respinNumWithScatterNum": null,
//                   "respinNumWeightWithScatterNum": null
//               }
//           }
//       ],
//       "MapComponents": {
//           "bg-paysc": {
//               "config": {
//                   "defaultNextComponent": "",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "scatterTrigger",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "symbols": [
//                       "W"
//                   ],
//                   "type": "countscatter",
//                   "betType": "bet",
//                   "minNum": 3,
//                   "wildSymbols": null,
//                   "posArea": null,
//                   "countScatterPayAs": "S",
//                   "winMulti": 1,
//                   "jumpToComponent": "bg-rollsym",
//                   "forceToNext": false,
//                   "awards": null,
//                   "symbolAwardsWeights": null,
//                   "targetMask": "",
//                   "isReverse": false,
//                   "needDiscardResults": false,
//                   "isAddRespinMode": true,
//                   "respinComponent": "fg-start",
//                   "respinNum": 10,
//                   "respinNumWeight": "",
//                   "respinNumWithScatterNum": null,
//                   "respinNumWeightWithScatterNum": null
//               }
//           },
//           "fg-paylines": {
//               "config": {
//                   "defaultNextComponent": "fg-paysc",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "linesTrigger",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "symbols": [
//                       "J",
//                       "H",
//                       "G",
//                       "F",
//                       "E",
//                       "D",
//                       "C",
//                       "B",
//                       "A",
//                       "W"
//                   ],
//                   "type": "lines",
//                   "betType": "bet",
//                   "minNum": 0,
//                   "wildSymbols": [
//                       "W"
//                   ],
//                   "checkWinType": "",
//                   "winMulti": 1,
//                   "jumpToComponent": "",
//                   "forceToNext": false,
//                   "awards": null,
//                   "symbolAwardsWeights": null,
//                   "targetMask": "",
//                   "isReverse": false,
//                   "needDiscardResults": false,
//                   "isAddRespinMode": false,
//                   "respinNum": 0,
//                   "respinNumWeight": "",
//                   "respinNumWithScatterNum": null,
//                   "respinNumWeightWithScatterNum": null
//               }
//           },
//           "fg-replacereel": {
//               "config": {
//                   "defaultNextComponent": "fg-paybookof",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "replaceReelWithMask",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "symbol": "J",
//                   "mask": "fg-bookof"
//               }
//           },
//           "fg-spin": {
//               "config": {
//                   "defaultNextComponent": "fg-paylines",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "basicReels",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "reelSetWeight": "",
//                   "reelSet": "fgreels",
//                   "isExpandReel": false
//               }
//           },
//           "fg-bookof": {
//               "config": {
//                   "defaultNextComponent": "fg-replacereel",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "mask",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "num": 5,
//                   "perMaskAwards": null,
//                   "mapSPMaskAwards": null
//               }
//           },
//           "fg-rollsym": {
//               "config": {
//                   "defaultNextComponent": "fg-syms",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "rollSymbol",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "weight": "fgbookofsymbol",
//                   "srcSymbolCollection": "",
//                   "ignoreSymbolCollection": "fg-syms",
//                   "targetSymbolCollection": "fg-syms"
//               }
//           },
//           "fg-checkbookof": {
//               "config": {
//                   "defaultNextComponent": "",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "scatterTrigger",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "symbols": [
//                       "J",
//                       "H",
//                       "G",
//                       "F",
//                       "E",
//                       "D",
//                       "C",
//                       "B",
//                       "A"
//                   ],
//                   "type": "scatters",
//                   "betType": "noPay",
//                   "minNum": 0,
//                   "wildSymbols": [
//                       "W"
//                   ],
//                   "posArea": null,
//                   "countScatterPayAs": "",
//                   "winMulti": 1,
//                   "jumpToComponent": "fg-bookof",
//                   "forceToNext": false,
//                   "awards": null,
//                   "symbolAwardsWeights": null,
//                   "targetMask": "fg-bookof",
//                   "isReverse": false,
//                   "needDiscardResults": true,
//                   "isAddRespinMode": false,
//                   "respinComponent": "",
//                   "respinNum": 0,
//                   "respinNumWeight": "",
//                   "respinNumWithScatterNum": null,
//                   "respinNumWeightWithScatterNum": null
//               }
//           },
//           "fg-paybookof": {
//               "config": {
//                   "defaultNextComponent": "",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "linesTrigger",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "symbols": [
//                       "J",
//                       "H",
//                       "G",
//                       "F",
//                       "E",
//                       "D",
//                       "C",
//                       "B",
//                       "A",
//                       "W"
//                   ],
//                   "type": "lines",
//                   "betType": "bet",
//                   "minNum": 0,
//                   "wildSymbols": [
//                       "W"
//                   ],
//                   "checkWinType": "",
//                   "winMulti": 1,
//                   "jumpToComponent": "",
//                   "forceToNext": false,
//                   "awards": null,
//                   "symbolAwardsWeights": null,
//                   "targetMask": "",
//                   "isReverse": false,
//                   "needDiscardResults": false,
//                   "isAddRespinMode": false,
//                   "respinNum": 0,
//                   "respinNumWeight": "",
//                   "respinNumWithScatterNum": null,
//                   "respinNumWeightWithScatterNum": null
//               }
//           },
//           "bg-spin": {
//               "config": {
//                   "defaultNextComponent": "bg-paylines",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "basicReels",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "reelSetWeight": "",
//                   "reelSet": "bgreels",
//                   "isExpandReel": false
//               }
//           },
//           "fg-paysc": {
//               "config": {
//                   "defaultNextComponent": "fg-syms",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "scatterTrigger",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "symbols": [
//                       "W"
//                   ],
//                   "type": "countscatter",
//                   "betType": "bet",
//                   "minNum": 3,
//                   "wildSymbols": null,
//                   "posArea": null,
//                   "countScatterPayAs": "S",
//                   "winMulti": 1,
//                   "jumpToComponent": "fg-rollsym",
//                   "forceToNext": false,
//                   "awards": null,
//                   "symbolAwardsWeights": null,
//                   "targetMask": "",
//                   "isReverse": false,
//                   "needDiscardResults": false,
//                   "isAddRespinMode": true,
//                   "respinComponent": "fg-start",
//                   "respinNum": 10,
//                   "respinNumWeight": "",
//                   "respinNumWithScatterNum": null,
//                   "respinNumWeightWithScatterNum": null
//               }
//           },
//           "fg-syms": {
//               "config": {
//                   "defaultNextComponent": "",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "symbolCollection2",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "foreachComponent": "fg-checkbookof",
//                   "maxSymbolNum": 0,
//                   "initSymbols": null
//               }
//           },
//           "bg-rollsym": {
//               "config": {
//                   "defaultNextComponent": "fg-start",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "rollSymbol",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "weight": "fgbookofsymbol",
//                   "srcSymbolCollection": "",
//                   "ignoreSymbolCollection": "fg-syms",
//                   "targetSymbolCollection": "fg-syms"
//               }
//           },
//           "bg-paylines": {
//               "config": {
//                   "defaultNextComponent": "bg-paysc",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "linesTrigger",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "symbols": [
//                       "J",
//                       "H",
//                       "G",
//                       "F",
//                       "E",
//                       "D",
//                       "C",
//                       "B",
//                       "A",
//                       "W"
//                   ],
//                   "type": "lines",
//                   "betType": "bet",
//                   "minNum": 0,
//                   "wildSymbols": [
//                       "W"
//                   ],
//                   "checkWinType": "",
//                   "winMulti": 1,
//                   "jumpToComponent": "",
//                   "forceToNext": false,
//                   "awards": null,
//                   "symbolAwardsWeights": null,
//                   "targetMask": "",
//                   "isReverse": false,
//                   "needDiscardResults": false,
//                   "isAddRespinMode": false,
//                   "respinNum": 0,
//                   "respinNumWeight": "",
//                   "respinNumWithScatterNum": null,
//                   "respinNumWeightWithScatterNum": null
//               }
//           },
//           "fg-start": {
//               "config": {
//                   "defaultNextComponent": "",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "respin",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "mainComponent": "fg-spin"
//               }
//           }
//       },
//       "Stats2": null
//   }
// }

// var statedata = {
//   'bg-spin': {list:['bg-spin'], module:'spinResult', performance:''},
//   'bg-top': {list:['bg-paylines', 'bg-paysc'], module:'showWinTop', performance:''},
//   'bg-paysc': {list:['bg-paysc'], module:'paysc', performance:''},
//   'bg-win': {list:['bg-spin'], module:'showWinAni', performance:''},
//   'bg-fgtrigger': {list:['bg-paysc'], module:'enterFree', performance:''},
//   'bg-rollsym': {list:['bg-rollsym'], module:'Picksymbol', performance:''},
//   'fg-spin': {list:['fg-spin'], module:'spinResult', performance:''},
//   'fg-top': {list:['fg-paylines', 'fg-paysc'], module:'showWinTop', performance:''},
//   'fg-paysc': {list:['fg-paysc'], module:'paysc', performance:''},
//   'fg-bookof': {list:['fg-replacereel', 'fg-paybookof'], module:'bookof', performance:'', prestate:'fg-spin'},
//   'fg-win': {list:['fg-spin'], module:'showWinAni', performance:''},
//   'fg-fgtrigger': {list:['fg-paysc'], module:'freeExtra', performance:''},
//   'fg-rollsym': {list:['fg-rollsym'], module:'Picksymbol', performance:''},
// };

// var statelist = ['bg-spin', 'bg-top', 'bg-paysc', 'bg-win', 'bg-fgtrigger', 'bg-rollsym', 'fg-spin', 'fg-top', 'fg-paysc', 'fg-bookof', 'fg-win', 'fg-fgtrigger', 'fg-rollsym'];

var penguin = true;
// var cfgdata = {
//   "10": {
//       "Components": [
//           {
//               "config": {
//                   "defaultNextComponent": "bg-payblue",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "basicReels",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "reelSetWeight": "",
//                   "reelSet": "reels0",
//                   "isExpandReel": false
//               }
//           },
//           {
//               "config": {
//                   "defaultNextComponent": "bg-piggybank",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "scatterTrigger",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "symbols": [
//                       "SC"
//                   ],
//                   "type": "scatters",
//                   "betType": "bet",
//                   "minNum": 0,
//                   "wildSymbols": null,
//                   "posArea": null,
//                   "countScatterPayAs": "",
//                   "winMulti": 1,
//                   "jumpToComponent": "",
//                   "piggyBankComponent": "",
//                   "forceToNext": false,
//                   "awards": null,
//                   "symbolAwardsWeights": null,
//                   "targetMask": "",
//                   "isReverse": false,
//                   "needDiscardResults": false,
//                   "isAddRespinMode": true,
//                   "respinComponent": "fg-start",
//                   "respinNum": 10,
//                   "respinNumWeight": "",
//                   "respinNumWithScatterNum": null,
//                   "respinNumWeightWithScatterNum": null
//               }
//           },
//           {
//               "config": {
//                   "defaultNextComponent": "",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "respin",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "mainComponent": "bg-dropdown"
//               }
//           },
//           {
//               "config": {
//                   "defaultNextComponent": "bg-refill",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "dropDownSymbols",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "holdSymbols": null
//               }
//           },
//           {
//               "config": {
//                   "defaultNextComponent": "bg-blueeffect",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "refillSymbols",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false
//               }
//           },
//           {
//               "config": {
//                   "defaultNextComponent": "bg-greeneffect",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "replaceSymbolGroup",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "srcSymbols": [
//                       "RH",
//                       "RM",
//                       "RL"
//                   ],
//                   "targetSymbols": [
//                       "GH",
//                       "GM",
//                       "GL"
//                   ],
//                   "mask": ""
//               }
//           },
//           {
//               "config": {
//                   "defaultNextComponent": "bg-paygreen",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "collector",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "symbol": "",
//                   "maxVal": 20,
//                   "perLevelAwards": null,
//                   "mapSPLevelAwards": {
//                       "-1": [
//                           {
//                               "awardType": "chgComponentConfigIntVal",
//                               "vals": [
//                                   1
//                               ],
//                               "strParams": [
//                                   "bg-piggybank.winMulti"
//                               ],
//                               "componentVals": null,
//                               "onTriggerRespin": ""
//                           }
//                       ]
//                   },
//                   "isCycle": true
//               }
//           },
//           {
//               "config": {
//                   "defaultNextComponent": "bg-remove",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "collector",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "symbol": "",
//                   "maxVal": 20,
//                   "perLevelAwards": null,
//                   "mapSPLevelAwards": {
//                       "-1": [
//                           {
//                               "awardType": "chgComponentConfigIntVal",
//                               "vals": [
//                                   1
//                               ],
//                               "strParams": [
//                                   "bg-greeneffect.queue"
//                               ],
//                               "componentVals": null,
//                               "onTriggerRespin": ""
//                           }
//                       ]
//                   },
//                   "isCycle": true
//               }
//           },
//           {
//               "config": {
//                   "defaultNextComponent": "",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "respin",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "mainComponent": ""
//               }
//           },
//           {
//               "config": {
//                   "defaultNextComponent": "bg-payblue",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "addSymbols",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "symbol": "WL",
//                   "symbolNum": 1,
//                   "symbolNumWeight": "",
//                   "ignoreSymbols": [
//                       "WL",
//                       "SC"
//                   ]
//               }
//           },
//           {
//               "config": {
//                   "defaultNextComponent": "bg-payfg",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "removeSymbols",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "jumpToComponent": "bg-respin",
//                   "targetComponents": [
//                       "bg-payblue",
//                       "bg-payred",
//                       "bg-paygreen"
//                   ],
//                   "ignoreSymbols": null,
//                   "awards": [
//                       {
//                           "awardType": "respinTimes",
//                           "vals": [
//                               1
//                           ],
//                           "strParams": [
//                               "bg-respin"
//                           ],
//                           "componentVals": null,
//                           "onTriggerRespin": ""
//                       }
//                   ]
//               }
//           },
//           {
//               "config": {
//                   "defaultNextComponent": "fg-start",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "piggyBank",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "winMulti": 1
//               }
//           },
//           {
//               "config": {
//                   "defaultNextComponent": "bg-payred",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "collector",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "symbol": "",
//                   "maxVal": 20,
//                   "perLevelAwards": null,
//                   "mapSPLevelAwards": {
//                       "-1": [
//                           {
//                               "awardType": "chgComponentConfigIntVal",
//                               "vals": [
//                                   1
//                               ],
//                               "strParams": [
//                                   "bg-blueeffect.queue"
//                               ],
//                               "componentVals": null,
//                               "onTriggerRespin": ""
//                           }
//                       ]
//                   },
//                   "isCycle": true
//               }
//           },
//           {
//               "config": {
//                   "defaultNextComponent": "bg-blue",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "scatterTrigger",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "symbols": [
//                       "BH",
//                       "BM",
//                       "BM2",
//                       "BL"
//                   ],
//                   "type": "scatters",
//                   "betType": "bet",
//                   "minNum": 0,
//                   "wildSymbols": [
//                       "WL"
//                   ],
//                   "posArea": null,
//                   "countScatterPayAs": "",
//                   "winMulti": 1,
//                   "jumpToComponent": "",
//                   "piggyBankComponent": "bg-piggybank",
//                   "forceToNext": false,
//                   "awards": [
//                       {
//                           "awardType": "chgComponentConfigIntVal",
//                           "vals": null,
//                           "strParams": [
//                               "bg-blue.valueNum"
//                           ],
//                           "componentVals": [
//                               "bg-payblue.symbolNum"
//                           ],
//                           "onTriggerRespin": ""
//                       }
//                   ],
//                   "symbolAwardsWeights": null,
//                   "targetMask": "",
//                   "isReverse": false,
//                   "needDiscardResults": false,
//                   "isAddRespinMode": false,
//                   "respinComponent": "",
//                   "respinNum": 0,
//                   "respinNumWeight": "",
//                   "respinNumWithScatterNum": null,
//                   "respinNumWeightWithScatterNum": null
//               }
//           },
//           {
//               "config": {
//                   "defaultNextComponent": "bg-greeneffect",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "queueBranch",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "jumpToComponent": "bg-replacesyms"
//               }
//           },
//           {
//               "config": {
//                   "defaultNextComponent": "bg-payblue",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "queueBranch",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "jumpToComponent": "bg-addwl"
//               }
//           },
//           {
//               "config": {
//                   "defaultNextComponent": "bg-red",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "scatterTrigger",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "symbols": [
//                       "RH",
//                       "RM",
//                       "RM2",
//                       "RL"
//                   ],
//                   "type": "scatters",
//                   "betType": "bet",
//                   "minNum": 0,
//                   "wildSymbols": [
//                       "WL"
//                   ],
//                   "posArea": null,
//                   "countScatterPayAs": "",
//                   "winMulti": 1,
//                   "jumpToComponent": "",
//                   "piggyBankComponent": "bg-piggybank",
//                   "forceToNext": false,
//                   "awards": [
//                       {
//                           "awardType": "chgComponentConfigIntVal",
//                           "vals": null,
//                           "strParams": [
//                               "bg-red.valueNum"
//                           ],
//                           "componentVals": [
//                               "bg-payred.symbolNum"
//                           ],
//                           "onTriggerRespin": ""
//                       }
//                   ],
//                   "symbolAwardsWeights": null,
//                   "targetMask": "",
//                   "isReverse": false,
//                   "needDiscardResults": false,
//                   "isAddRespinMode": false,
//                   "respinComponent": "",
//                   "respinNum": 0,
//                   "respinNumWeight": "",
//                   "respinNumWithScatterNum": null,
//                   "respinNumWeightWithScatterNum": null
//               }
//           },
//           {
//               "config": {
//                   "defaultNextComponent": "bg-green",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "scatterTrigger",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "symbols": [
//                       "GH",
//                       "GM",
//                       "GM2",
//                       "GL"
//                   ],
//                   "type": "scatters",
//                   "betType": "bet",
//                   "minNum": 0,
//                   "wildSymbols": [
//                       "WL"
//                   ],
//                   "posArea": null,
//                   "countScatterPayAs": "",
//                   "winMulti": 1,
//                   "jumpToComponent": "",
//                   "piggyBankComponent": "bg-piggybank",
//                   "forceToNext": false,
//                   "awards": [
//                       {
//                           "awardType": "chgComponentConfigIntVal",
//                           "vals": null,
//                           "strParams": [
//                               "bg-green.valueNum"
//                           ],
//                           "componentVals": [
//                               "bg-paygreen.symbolNum"
//                           ],
//                           "onTriggerRespin": ""
//                       }
//                   ],
//                   "symbolAwardsWeights": null,
//                   "targetMask": "",
//                   "isReverse": false,
//                   "needDiscardResults": false,
//                   "isAddRespinMode": false,
//                   "respinComponent": "",
//                   "respinNum": 0,
//                   "respinNumWeight": "",
//                   "respinNumWithScatterNum": null,
//                   "respinNumWeightWithScatterNum": null
//               }
//           }
//       ],
//       "MapComponents": {
//           "bg-refill": {
//               "config": {
//                   "defaultNextComponent": "bg-blueeffect",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "refillSymbols",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false
//               }
//           },
//           "bg-replacesyms": {
//               "config": {
//                   "defaultNextComponent": "bg-greeneffect",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "replaceSymbolGroup",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "srcSymbols": [
//                       "RH",
//                       "RM",
//                       "RL"
//                   ],
//                   "targetSymbols": [
//                       "GH",
//                       "GM",
//                       "GL"
//                   ],
//                   "mask": ""
//               }
//           },
//           "bg-remove": {
//               "config": {
//                   "defaultNextComponent": "bg-payfg",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "removeSymbols",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "jumpToComponent": "bg-respin",
//                   "targetComponents": [
//                       "bg-payblue",
//                       "bg-payred",
//                       "bg-paygreen"
//                   ],
//                   "ignoreSymbols": null,
//                   "awards": [
//                       {
//                           "awardType": "respinTimes",
//                           "vals": [
//                               1
//                           ],
//                           "strParams": [
//                               "bg-respin"
//                           ],
//                           "componentVals": null,
//                           "onTriggerRespin": ""
//                       }
//                   ]
//               }
//           },
//           "bg-payred": {
//               "config": {
//                   "defaultNextComponent": "bg-red",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "scatterTrigger",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "symbols": [
//                       "RH",
//                       "RM",
//                       "RM2",
//                       "RL"
//                   ],
//                   "type": "scatters",
//                   "betType": "bet",
//                   "minNum": 0,
//                   "wildSymbols": [
//                       "WL"
//                   ],
//                   "posArea": null,
//                   "countScatterPayAs": "",
//                   "winMulti": 1,
//                   "jumpToComponent": "",
//                   "piggyBankComponent": "bg-piggybank",
//                   "forceToNext": false,
//                   "awards": [
//                       {
//                           "awardType": "chgComponentConfigIntVal",
//                           "vals": null,
//                           "strParams": [
//                               "bg-red.valueNum"
//                           ],
//                           "componentVals": [
//                               "bg-payred.symbolNum"
//                           ],
//                           "onTriggerRespin": ""
//                       }
//                   ],
//                   "symbolAwardsWeights": null,
//                   "targetMask": "",
//                   "isReverse": false,
//                   "needDiscardResults": false,
//                   "isAddRespinMode": false,
//                   "respinComponent": "",
//                   "respinNum": 0,
//                   "respinNumWeight": "",
//                   "respinNumWithScatterNum": null,
//                   "respinNumWeightWithScatterNum": null
//               }
//           },
//           "bg-payblue": {
//               "config": {
//                   "defaultNextComponent": "bg-blue",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "scatterTrigger",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "symbols": [
//                       "BH",
//                       "BM",
//                       "BM2",
//                       "BL"
//                   ],
//                   "type": "scatters",
//                   "betType": "bet",
//                   "minNum": 0,
//                   "wildSymbols": [
//                       "WL"
//                   ],
//                   "posArea": null,
//                   "countScatterPayAs": "",
//                   "winMulti": 1,
//                   "jumpToComponent": "",
//                   "piggyBankComponent": "bg-piggybank",
//                   "forceToNext": false,
//                   "awards": [
//                       {
//                           "awardType": "chgComponentConfigIntVal",
//                           "vals": null,
//                           "strParams": [
//                               "bg-blue.valueNum"
//                           ],
//                           "componentVals": [
//                               "bg-payblue.symbolNum"
//                           ],
//                           "onTriggerRespin": ""
//                       }
//                   ],
//                   "symbolAwardsWeights": null,
//                   "targetMask": "",
//                   "isReverse": false,
//                   "needDiscardResults": false,
//                   "isAddRespinMode": false,
//                   "respinComponent": "",
//                   "respinNum": 0,
//                   "respinNumWeight": "",
//                   "respinNumWithScatterNum": null,
//                   "respinNumWeightWithScatterNum": null
//               }
//           },
//           "bg-payfg": {
//               "config": {
//                   "defaultNextComponent": "bg-piggybank",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "scatterTrigger",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "symbols": [
//                       "SC"
//                   ],
//                   "type": "scatters",
//                   "betType": "bet",
//                   "minNum": 0,
//                   "wildSymbols": null,
//                   "posArea": null,
//                   "countScatterPayAs": "",
//                   "winMulti": 1,
//                   "jumpToComponent": "",
//                   "piggyBankComponent": "",
//                   "forceToNext": false,
//                   "awards": null,
//                   "symbolAwardsWeights": null,
//                   "targetMask": "",
//                   "isReverse": false,
//                   "needDiscardResults": false,
//                   "isAddRespinMode": true,
//                   "respinComponent": "fg-start",
//                   "respinNum": 10,
//                   "respinNumWeight": "",
//                   "respinNumWithScatterNum": null,
//                   "respinNumWeightWithScatterNum": null
//               }
//           },
//           "bg-respin": {
//               "config": {
//                   "defaultNextComponent": "",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "respin",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "mainComponent": "bg-dropdown"
//               }
//           },
//           "bg-red": {
//               "config": {
//                   "defaultNextComponent": "bg-paygreen",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "collector",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "symbol": "",
//                   "maxVal": 20,
//                   "perLevelAwards": null,
//                   "mapSPLevelAwards": {
//                       "-1": [
//                           {
//                               "awardType": "chgComponentConfigIntVal",
//                               "vals": [
//                                   1
//                               ],
//                               "strParams": [
//                                   "bg-piggybank.winMulti"
//                               ],
//                               "componentVals": null,
//                               "onTriggerRespin": ""
//                           }
//                       ]
//                   },
//                   "isCycle": true
//               }
//           },
//           "bg-green": {
//               "config": {
//                   "defaultNextComponent": "bg-remove",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "collector",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "symbol": "",
//                   "maxVal": 20,
//                   "perLevelAwards": null,
//                   "mapSPLevelAwards": {
//                       "-1": [
//                           {
//                               "awardType": "chgComponentConfigIntVal",
//                               "vals": [
//                                   1
//                               ],
//                               "strParams": [
//                                   "bg-greeneffect.queue"
//                               ],
//                               "componentVals": null,
//                               "onTriggerRespin": ""
//                           }
//                       ]
//                   },
//                   "isCycle": true
//               }
//           },
//           "fg-start": {
//               "config": {
//                   "defaultNextComponent": "",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "respin",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "mainComponent": ""
//               }
//           },
//           "bg-piggybank": {
//               "config": {
//                   "defaultNextComponent": "fg-start",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "piggyBank",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "winMulti": 1
//               }
//           },
//           "bg-blue": {
//               "config": {
//                   "defaultNextComponent": "bg-payred",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "collector",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "symbol": "",
//                   "maxVal": 20,
//                   "perLevelAwards": null,
//                   "mapSPLevelAwards": {
//                       "-1": [
//                           {
//                               "awardType": "chgComponentConfigIntVal",
//                               "vals": [
//                                   1
//                               ],
//                               "strParams": [
//                                   "bg-blueeffect.queue"
//                               ],
//                               "componentVals": null,
//                               "onTriggerRespin": ""
//                           }
//                       ]
//                   },
//                   "isCycle": true
//               }
//           },
//           "bg-blueeffect": {
//               "config": {
//                   "defaultNextComponent": "bg-greeneffect",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "queueBranch",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "jumpToComponent": "bg-replacesyms"
//               }
//           },
//           "bg-greeneffect": {
//               "config": {
//                   "defaultNextComponent": "bg-payblue",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "queueBranch",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "jumpToComponent": "bg-addwl"
//               }
//           },
//           "bg-spin": {
//               "config": {
//                   "defaultNextComponent": "bg-payblue",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "basicReels",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "reelSetWeight": "",
//                   "reelSet": "reels0",
//                   "isExpandReel": false
//               }
//           },
//           "bg-dropdown": {
//               "config": {
//                   "defaultNextComponent": "bg-refill",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "dropDownSymbols",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "holdSymbols": null
//               }
//           },
//           "bg-addwl": {
//               "config": {
//                   "defaultNextComponent": "bg-payblue",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "addSymbols",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "symbol": "WL",
//                   "symbolNum": 1,
//                   "symbolNumWeight": "",
//                   "ignoreSymbols": [
//                       "WL",
//                       "SC"
//                   ]
//               }
//           },
//           "bg-paygreen": {
//               "config": {
//                   "defaultNextComponent": "bg-green",
//                   "tagScenes": null,
//                   "tagOtherScenes": null,
//                   "targetScene": "",
//                   "targetOtherScene": "",
//                   "tagGlobalScenes": null,
//                   "targetGlobalScene": "",
//                   "tagGlobalOtherScenes": null,
//                   "targetGlobalOtherScene": "",
//                   "scene2Components": null,
//                   "otherScene2Components": null,
//                   "tagRNG": null,
//                   "initStrVals": null,
//                   "useFileMapping": false,
//                   "componentType": "scatterTrigger",
//                   "useSceneV2": false,
//                   "targetScenes3": null,
//                   "useSceneV3": true,
//                   "isNeedCacheScene3": false,
//                   "symbols": [
//                       "GH",
//                       "GM",
//                       "GM2",
//                       "GL"
//                   ],
//                   "type": "scatters",
//                   "betType": "bet",
//                   "minNum": 0,
//                   "wildSymbols": [
//                       "WL"
//                   ],
//                   "posArea": null,
//                   "countScatterPayAs": "",
//                   "winMulti": 1,
//                   "jumpToComponent": "",
//                   "piggyBankComponent": "bg-piggybank",
//                   "forceToNext": false,
//                   "awards": [
//                       {
//                           "awardType": "chgComponentConfigIntVal",
//                           "vals": null,
//                           "strParams": [
//                               "bg-green.valueNum"
//                           ],
//                           "componentVals": [
//                               "bg-paygreen.symbolNum"
//                           ],
//                           "onTriggerRespin": ""
//                       }
//                   ],
//                   "symbolAwardsWeights": null,
//                   "targetMask": "",
//                   "isReverse": false,
//                   "needDiscardResults": false,
//                   "isAddRespinMode": false,
//                   "respinComponent": "",
//                   "respinNum": 0,
//                   "respinNumWeight": "",
//                   "respinNumWithScatterNum": null,
//                   "respinNumWeightWithScatterNum": null
//               }
//           }
//       },
//       "Stats2": null
//   }
// };

// var statedata = {
//   'bg-spin': {list:['bg-spin'], module:'spinResult', performance:''},
//   'bg-top': {list:['bg-paylines', 'bg-paysc'], module:'showWinTop', performance:''},
//   'bg-paysc': {list:['bg-paysc'], module:'paysc', performance:''},
//   'bg-win': {list:['bg-spin'], module:'showWinAni', performance:''},
//   'bg-fgtrigger': {list:['bg-paysc'], module:'enterFree', performance:''},
//   'bg-rollsym': {list:['bg-rollsym'], module:'Picksymbol', performance:''},
//   'fg-spin': {list:['fg-spin'], module:'spinResult', performance:''},
//   'fg-top': {list:['fg-paylines', 'fg-paysc'], module:'showWinTop', performance:''},
//   'fg-paysc': {list:['fg-paysc'], module:'paysc', performance:''},
//   'fg-bookof': {list:['fg-replacereel', 'fg-paybookof'], module:'bookof', performance:'', prestate:'fg-spin'},
//   'fg-win': {list:['fg-spin'], module:'showWinAni', performance:''},
//   'fg-fgtrigger': {list:['fg-paysc'], module:'freeExtra', performance:''},
//   'fg-rollsym': {list:['fg-rollsym'], module:'Picksymbol', performance:''},
// };

// var statelist = ['bg-spin', 'bg-top', 'bg-paysc', 'bg-win', 'bg-fgtrigger', 'bg-rollsym', 'fg-spin', 'fg-top', 'fg-paysc', 'fg-bookof', 'fg-win', 'fg-fgtrigger', 'fg-rollsym'];

Logic.instance.onConfig(cfgdata, statedata, statelist);

moonwalker = true;
var msgdata = {
  msgid: "gamemoduleinfo",
  gamemodulename: "Yb2drw8RnSvdRENf1U7_8",
  gameid: 69004,
  gmi: {
    defaultScene: {
      values: [
        {
          values: [1, 2, 3],
        },
        {
          values: [4, 5, 6],
        },
        {
          values: [1, 2, 3],
        },
        {
          values: [7, 8, 9],
        },
        {
          values: [1, 2, 3],
        },
      ],
      indexes: [],
      validRow: [],
    },
    replyPlay: {
      randomNumbers: [355, 68, 108, 169, 18, 28],
      results: [
        {
          coinWin: 10,
          cashWin: 100,
          clientData: {
            scenes: [
              {
                values: [
                  {
                    values: [0, 8, 11],
                  },
                  {
                    values: [6, 8, 4],
                  },
                  {
                    values: [4, 6, 2],
                  },
                  {
                    values: [1, 6, 5],
                  },
                  {
                    values: [1, 7, 6],
                  },
                ],
                indexes: [],
                validRow: [],
              },
            ],
            otherScenes: [],
            results: [
              {
                pos: [0, 0, 1, 0, 2, 1],
                type: 2,
                lineIndex: 5,
                symbol: 6,
                mul: 10,
                coinWin: 10,
                cashWin: 100,
                otherMul: 1,
                wilds: 1,
                symbolNums: 3,
                value: 0,
              },
            ],
            mulPos: [],
            prizeScenes: [],
            curGameMod: "bg",
            curGameModParam: {
              historyComponents: [
                "bg-spin",
                "bg-walktrigger",
                "bg-paylines",
                "bg-paysc",
                "bg-payfg",
                "bg-fgtrigger",
              ],
              respinComponents: [],
              mapComponents: {
                "bg-spin": {
                  basicComponentData: {
                    usedScenes: [0],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: -1,
                    runIndex: 0,
                  },
                  reelSetIndex: 2,
                  "@type": "type.googleapis.com/sgc7pb.WeightReelsData",
                },
                "bg-walktrigger": {
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: -1,
                    runIndex: 0,
                  },
                  nextComponent: "",
                  symbolNum: 0,
                  wildNum: 0,
                  respinNum: 0,
                  wins: 0,
                  winMulti: 1,
                  "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData",
                },
                "bg-paylines": {
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [0],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 10,
                    cashWin: 100,
                    targetScene: -1,
                    runIndex: 0,
                  },
                  nextComponent: "",
                  symbolNum: 3,
                  wildNum: 1,
                  respinNum: 0,
                  wins: 10,
                  winMulti: 1,
                  "@type": "type.googleapis.com/sgc7pb.LinesTriggerData",
                },
                "bg-paysc": {
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: -1,
                    runIndex: 0,
                  },
                  nextComponent: "",
                  symbolNum: 0,
                  wildNum: 0,
                  respinNum: 0,
                  wins: 0,
                  winMulti: 1,
                  "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData",
                },
                "bg-payfg": {
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: -1,
                    runIndex: 0,
                  },
                  nextComponent: "",
                  symbolNum: 0,
                  wildNum: 0,
                  respinNum: 0,
                  wins: 0,
                  winMulti: 1,
                  "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData",
                },
                "bg-fgtrigger": {
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: -1,
                    runIndex: 0,
                  },
                  nextComponent: "",
                  symbolNum: 0,
                  wildNum: 0,
                  respinNum: 0,
                  wins: 0,
                  winMulti: 1,
                  "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData",
                },
              },
              mapVals: {
                1: 5,
                2: 3,
                6: 10,
                7: 0,
                100: 1,
                101: 1,
                102: 1,
                103: 1,
              },
              mapStrVals: {},
              firstComponent: "",
              nextStepFirstComponent: "",
              "@type": "type.googleapis.com/sgc7pb.GameParam",
            },
            nextGameMod: "bg",
            curIndex: 0,
            parentIndex: 0,
            modType: "",
            prizeCoinWin: 0,
            prizeCashWin: 0,
            jackpotCoinWin: 0,
            jackpotCashWin: 0,
            jackpotType: 0,
          },
        },
      ],
      nextCommands: [],
      nextCommandParams: [],
      playerState: {
        public: {
          json: '{"curgamemod":"bg","nextm":0}',
          "@type": "type.googleapis.com/sgc7pb.BasicPlayerPublicState2",
        },
      },
      finished: true,
      stake: null,
      playStartTime: 1705991819761,
    },
    playIndex: -1,
    bet: 10,
    lines: 10,
    totalwin: 100,
    playwin: 0,
    maxWinLimit: 0,
  },
};

var msgdata1 = {
  msgid: "gamemoduleinfo",
  gamemodulename: "Yb2drw8RnSvdRENf1U7_8",
  gameid: 69004,
  gmi: {
    defaultScene: {
      values: [
        {
          values: [1, 2, 3],
        },
        {
          values: [4, 5, 6],
        },
        {
          values: [1, 2, 3],
        },
        {
          values: [7, 8, 9],
        },
        {
          values: [1, 2, 3],
        },
      ],
      indexes: [],
      validRow: [],
    },
    replyPlay: {
      randomNumbers: [195, 63, 61, 217, 295, 309],
      results: [
        {
          coinWin: 150,
          cashWin: 1500,
          clientData: {
            scenes: [
              {
                values: [
                  {
                    values: [13, 13, 13],
                  },
                  {
                    values: [8, 1, 6],
                  },
                  {
                    values: [13, 13, 13],
                  },
                  {
                    values: [4, 11, 9],
                  },
                  {
                    values: [9, 3, 11],
                  },
                ],
                indexes: [],
                validRow: [],
              },
              {
                values: [
                  {
                    values: [13, 13, 13],
                  },
                  {
                    values: [13, 13, 13],
                  },
                  {
                    values: [13, 13, 13],
                  },
                  {
                    values: [4, 11, 9],
                  },
                  {
                    values: [9, 3, 11],
                  },
                ],
                indexes: [],
                validRow: [],
              },
            ],
            otherScenes: [],
            results: [
              {
                pos: [0, 0, 0, 1, 0, 2, 1, 0, 1, 1, 1, 2, 2, 0, 2, 1, 2, 2],
                type: 1,
                lineIndex: -1,
                symbol: 13,
                mul: 150,
                coinWin: 150,
                cashWin: 1500,
                otherMul: 1,
                wilds: 0,
                symbolNums: 9,
                value: 0,
              },
            ],
            mulPos: [],
            prizeScenes: [],
            curGameMod: "bg",
            curGameModParam: {
              historyComponents: [
                "bg-spin",
                "bg-walktrigger",
                "bg-walk",
                "bg-paylines",
                "bg-paysc",
                "bg-payfg",
                "bg-fgtrigger",
              ],
              respinComponents: [],
              mapComponents: {
                "bg-fgtrigger": {
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: -1,
                    runIndex: 0,
                  },
                  nextComponent: "",
                  symbolNum: 0,
                  wildNum: 0,
                  respinNum: 0,
                  wins: 0,
                  winMulti: 1,
                  "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData",
                },
                "bg-spin": {
                  basicComponentData: {
                    usedScenes: [0],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: -1,
                    runIndex: 0,
                  },
                  reelSetIndex: 1,
                  "@type": "type.googleapis.com/sgc7pb.WeightReelsData",
                },
                "bg-walktrigger": {
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: -1,
                    runIndex: 0,
                  },
                  nextComponent: "bg-walk",
                  symbolNum: 3,
                  wildNum: 0,
                  respinNum: 0,
                  wins: 0,
                  winMulti: 1,
                  "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData",
                },
                "bg-walk": {
                  basicComponentData: {
                    usedScenes: [1],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [-1],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: -1,
                    runIndex: 0,
                  },
                  "@type": "type.googleapis.com/sgc7pb.BasicComponentData",
                },
                "bg-paylines": {
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: -1,
                    runIndex: 0,
                  },
                  nextComponent: "",
                  symbolNum: 0,
                  wildNum: 0,
                  respinNum: 0,
                  wins: 0,
                  winMulti: 1,
                  "@type": "type.googleapis.com/sgc7pb.LinesTriggerData",
                },
                "bg-paysc": {
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [0],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 150,
                    cashWin: 1500,
                    targetScene: -1,
                    runIndex: 0,
                  },
                  nextComponent: "",
                  symbolNum: 9,
                  wildNum: 0,
                  respinNum: 0,
                  wins: 150,
                  winMulti: 1,
                  "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData",
                },
                "bg-payfg": {
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: -1,
                    runIndex: 0,
                  },
                  nextComponent: "",
                  symbolNum: 0,
                  wildNum: 0,
                  respinNum: 0,
                  wins: 0,
                  winMulti: 1,
                  "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData",
                },
              },
              mapVals: {
                1: 5,
                2: 3,
                6: 10,
                7: 0,
                100: 1,
                101: 1,
                102: 1,
                103: 1,
              },
              mapStrVals: {},
              firstComponent: "",
              nextStepFirstComponent: "",
              "@type": "type.googleapis.com/sgc7pb.GameParam",
            },
            nextGameMod: "bg",
            curIndex: 0,
            parentIndex: 0,
            modType: "",
            prizeCoinWin: 0,
            prizeCashWin: 0,
            jackpotCoinWin: 0,
            jackpotCashWin: 0,
            jackpotType: 0,
          },
        },
      ],
      nextCommands: [],
      nextCommandParams: [],
      playerState: {
        public: {
          json: '{"curgamemod":"bg","nextm":0}',
          "@type": "type.googleapis.com/sgc7pb.BasicPlayerPublicState2",
        },
      },
      finished: true,
      stake: null,
      playStartTime: 1706522890640,
    },
    playIndex: -1,
    bet: 10,
    lines: 10,
    totalwin: 1500,
    playwin: 0,
    maxWinLimit: 0,
  },
};

var msgdata2 = {
  msgid: "gamemoduleinfo",
  gamemodulename: "Yb2drw8RnSvdRENf1U7_8",
  gameid: 69004,
  gmi: {
    defaultScene: {
      values: [
        {
          values: [1, 2, 3],
        },
        {
          values: [4, 5, 6],
        },
        {
          values: [1, 2, 3],
        },
        {
          values: [7, 8, 9],
        },
        {
          values: [1, 2, 3],
        },
      ],
      indexes: [],
      validRow: [],
    },
    replyPlay: {
      randomNumbers: [
        11, 214, 22, 263, 39, 246, 9, 118, 184, 29, 57, 219, 13, 25, 281, 300,
        18, 37, 6, 136, 295, 298, 210, 185, 19, 258, 297, 194, 95, 254, 11, 229,
        227, 77, 194, 124, 18, 161, 15, 300, 205, 246, 3, 267, 42, 272, 228,
        296, 4, 255, 219, 119, 250, 178, 17, 151, 119, 206, 263, 39, 3, 278,
        176, 34, 269, 253, 19, 159, 295, 219, 26, 163, 1, 231, 271, 147, 195,
        17, 11, 250, 203, 294, 119, 145, 16, 5, 82, 28, 217, 148, 10, 197, 119,
        36, 76, 91, 5, 156, 227, 208, 91, 78, 8, 227, 76, 179, 140, 177, 8, 109,
        41, 89, 10, 154, 14, 74, 51, 19, 39, 19, 2, 73, 137, 10, 47, 219, 2,
        100, 186, 291, 206, 116, 15, 239, 173, 195, 91, 122, 12, 72, 157, 266,
        208, 170, 5, 108, 269, 148, 100, 21, 10, 242, 276, 204, 97, 157, 15,
        140, 67, 222, 151, 260, 11, 23, 285, 150, 224, 57, 9, 218, 213, 298,
        247, 64, 3, 169, 154, 145, 102, 262, 15, 203, 31, 42, 238, 117,
      ],
      results: [
        {
          coinWin: 90,
          cashWin: 90,
          clientData: {
            scenes: [
              {
                values: [
                  {
                    values: [12, 9, 8],
                  },
                  {
                    values: [12, 11, 3],
                  },
                  {
                    values: [8, 5, 6],
                  },
                  {
                    values: [7, 10, 0],
                  },
                  {
                    values: [1, 11, 12],
                  },
                ],
                indexes: [],
                validRow: [],
              },
            ],
            otherScenes: [],
            results: [
              {
                pos: [0, 0, 1, 0],
                type: 2,
                lineIndex: 1,
                symbol: 12,
                mul: 20,
                coinWin: 20,
                cashWin: 20,
                otherMul: 1,
                wilds: 0,
                symbolNums: 2,
                value: 0,
              },
              {
                pos: [0, 0, 1, 0],
                type: 2,
                lineIndex: 5,
                symbol: 12,
                mul: 20,
                coinWin: 20,
                cashWin: 20,
                otherMul: 1,
                wilds: 0,
                symbolNums: 2,
                value: 0,
              },
              {
                pos: [0, 0, 1, 0, 4, 2],
                type: 1,
                lineIndex: -1,
                symbol: 12,
                mul: 50,
                coinWin: 50,
                cashWin: 50,
                otherMul: 1,
                wilds: 0,
                symbolNums: 3,
                value: 0,
              },
              {
                pos: [0, 0, 1, 0, 4, 2],
                type: 9,
                lineIndex: -1,
                symbol: 12,
                mul: 0,
                coinWin: 0,
                cashWin: 0,
                otherMul: 0,
                wilds: 0,
                symbolNums: 3,
                value: 15,
              },
            ],
            mulPos: [],
            prizeScenes: [],
            curGameMod: "bg",
            curGameModParam: {
              historyComponents: [
                "bg-spin",
                "bg-paylines",
                "bg-payfg",
                "bg-triggerfg",
              ],
              respinComponents: ["fg-start"],
              mapComponents: {
                "bg-payfg": {
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [2],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 50,
                    cashWin: 50,
                    targetScene: -1,
                    runIndex: 0,
                  },
                  nextComponent: "",
                  symbolNum: 3,
                  wildNum: 0,
                  respinNum: 0,
                  wins: 50,
                  winMulti: 1,
                  "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData",
                },
                "bg-triggerfg": {
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [3],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: -1,
                    runIndex: 0,
                  },
                  nextComponent: "fg-start",
                  symbolNum: 3,
                  wildNum: 0,
                  respinNum: 15,
                  wins: 0,
                  winMulti: 1,
                  "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData",
                },
                "fg-start": {
                  triggerRespinNum: [],
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  lastRespinNum: 15,
                  totalRespinNum: 0,
                  curRespinNum: 0,
                  curAddRespinNum: 15,
                  totalCoinWin: 0,
                  totalCashWin: 0,
                  retriggerAddRespinNum: 0,
                  lastTriggerNum: 0,
                  curTriggerNum: 0,
                  "@type": "type.googleapis.com/sgc7pb.RespinData",
                },
                "bg-spin": {
                  basicComponentData: {
                    usedScenes: [0],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  reelSetIndex: 0,
                  "@type": "type.googleapis.com/sgc7pb.WeightReelsData",
                },
                "bg-paylines": {
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [0, 1],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 40,
                    cashWin: 40,
                    targetScene: -1,
                    runIndex: 0,
                  },
                  nextComponent: "",
                  symbolNum: 4,
                  wildNum: 0,
                  respinNum: 0,
                  wins: 40,
                  winMulti: 1,
                  "@type": "type.googleapis.com/sgc7pb.LinesTriggerData",
                },
              },
              mapVals: {
                1: 5,
                2: 3,
                6: 10,
                7: 0,
                100: 1,
                101: 1,
                102: 1,
                103: 1,
              },
              mapStrVals: {},
              firstComponent: "",
              nextStepFirstComponent: "fg-start",
              "@type": "type.googleapis.com/sgc7pb.GameParam",
            },
            nextGameMod: "bg",
            curIndex: 0,
            parentIndex: 0,
            modType: "",
            prizeCoinWin: 0,
            prizeCashWin: 0,
            jackpotCoinWin: 0,
            jackpotCashWin: 0,
            jackpotType: 0,
          },
        },
        {
          coinWin: 0,
          cashWin: 0,
          clientData: {
            scenes: [
              {
                values: [
                  {
                    values: [5, 9, 11],
                  },
                  {
                    values: [8, 5, 10],
                  },
                  {
                    values: [8, 9, 4],
                  },
                  {
                    values: [5, 11, 10],
                  },
                  {
                    values: [9, 3, 10],
                  },
                ],
                indexes: [],
                validRow: [],
              },
            ],
            otherScenes: [],
            results: [],
            mulPos: [],
            prizeScenes: [],
            curGameMod: "bg",
            curGameModParam: {
              historyComponents: ["fg-start", "fg-spin"],
              respinComponents: ["fg-start"],
              mapComponents: {
                "fg-start": {
                  triggerRespinNum: [],
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  lastRespinNum: 14,
                  totalRespinNum: 0,
                  curRespinNum: 1,
                  curAddRespinNum: 15,
                  totalCoinWin: 0,
                  totalCashWin: 0,
                  retriggerAddRespinNum: 0,
                  lastTriggerNum: 0,
                  curTriggerNum: 0,
                  "@type": "type.googleapis.com/sgc7pb.RespinData",
                },
                "fg-spin": {
                  basicComponentData: {
                    usedScenes: [0],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  reelSetIndex: 1,
                  "@type": "type.googleapis.com/sgc7pb.WeightReelsData",
                },
              },
              mapVals: {
                1: 5,
                2: 3,
                6: 10,
                7: 0,
                100: 1,
                101: 1,
                102: 1,
                103: 1,
              },
              mapStrVals: {},
              firstComponent: "fg-start",
              nextStepFirstComponent: "fg-start",
              "@type": "type.googleapis.com/sgc7pb.GameParam",
            },
            nextGameMod: "bg",
            curIndex: 0,
            parentIndex: 0,
            modType: "",
            prizeCoinWin: 0,
            prizeCashWin: 0,
            jackpotCoinWin: 0,
            jackpotCashWin: 0,
            jackpotType: 0,
          },
        },
        {
          coinWin: 6600,
          cashWin: 6600,
          clientData: {
            scenes: [
              {
                values: [
                  {
                    values: [7, 10, 9],
                  },
                  {
                    values: [7, 0, 6],
                  },
                  {
                    values: [9, 4, 2],
                  },
                  {
                    values: [5, 11, 10],
                  },
                  {
                    values: [7, 13, 7],
                  },
                ],
                indexes: [],
                validRow: [],
              },
            ],
            otherScenes: [],
            results: [
              {
                pos: [0, 2, 1, 1, 2, 0],
                type: 2,
                lineIndex: 4,
                symbol: 9,
                mul: 5,
                coinWin: 6600,
                cashWin: 6600,
                otherMul: 3,
                wilds: 1,
                symbolNums: 3,
                value: 0,
              },
            ],
            mulPos: [],
            prizeScenes: [],
            curGameMod: "bg",
            curGameModParam: {
              historyComponents: ["fg-start", "fg-spin", "fg-paylines"],
              respinComponents: ["fg-start"],
              mapComponents: {
                "fg-start": {
                  triggerRespinNum: [],
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  lastRespinNum: 13,
                  totalRespinNum: 0,
                  curRespinNum: 2,
                  curAddRespinNum: 15,
                  totalCoinWin: 6600,
                  totalCashWin: 6600,
                  retriggerAddRespinNum: 0,
                  lastTriggerNum: 0,
                  curTriggerNum: 0,
                  "@type": "type.googleapis.com/sgc7pb.RespinData",
                },
                "fg-spin": {
                  basicComponentData: {
                    usedScenes: [0, 0],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  reelSetIndex: 1,
                  "@type": "type.googleapis.com/sgc7pb.WeightReelsData",
                },
                "fg-paylines": {
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [0],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 6600,
                    cashWin: 6600,
                    targetScene: -1,
                    runIndex: 0,
                  },
                  nextComponent: "",
                  symbolNum: 3,
                  wildNum: 1,
                  respinNum: 0,
                  wins: 6600,
                  winMulti: 3,
                  "@type": "type.googleapis.com/sgc7pb.LinesTriggerData",
                },
              },
              mapVals: {
                1: 5,
                2: 3,
                6: 10,
                7: 0,
                100: 1,
                101: 1,
                102: 1,
                103: 1,
              },
              mapStrVals: {},
              firstComponent: "fg-start",
              nextStepFirstComponent: "fg-start",
              "@type": "type.googleapis.com/sgc7pb.GameParam",
            },
            nextGameMod: "bg",
            curIndex: 0,
            parentIndex: 0,
            modType: "",
            prizeCoinWin: 0,
            prizeCashWin: 0,
            jackpotCoinWin: 0,
            jackpotCashWin: 0,
            jackpotType: 0,
          },
        },
        {
          coinWin: 0,
          cashWin: 0,
          clientData: {
            scenes: [
              {
                values: [
                  {
                    values: [2, 7, 10],
                  },
                  {
                    values: [3, 5, 10],
                  },
                  {
                    values: [12, 8, 9],
                  },
                  {
                    values: [5, 11, 10],
                  },
                  {
                    values: [10, 5, 2],
                  },
                ],
                indexes: [],
                validRow: [],
              },
            ],
            otherScenes: [],
            results: [],
            mulPos: [],
            prizeScenes: [],
            curGameMod: "bg",
            curGameModParam: {
              historyComponents: ["fg-start", "fg-spin"],
              respinComponents: ["fg-start"],
              mapComponents: {
                "fg-start": {
                  triggerRespinNum: [],
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  lastRespinNum: 12,
                  totalRespinNum: 0,
                  curRespinNum: 3,
                  curAddRespinNum: 15,
                  totalCoinWin: 6600,
                  totalCashWin: 6600,
                  retriggerAddRespinNum: 0,
                  lastTriggerNum: 0,
                  curTriggerNum: 0,
                  "@type": "type.googleapis.com/sgc7pb.RespinData",
                },
                "fg-spin": {
                  basicComponentData: {
                    usedScenes: [0, 0, 0],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  reelSetIndex: 1,
                  "@type": "type.googleapis.com/sgc7pb.WeightReelsData",
                },
              },
              mapVals: {
                1: 5,
                2: 3,
                6: 10,
                7: 0,
                100: 1,
                101: 1,
                102: 1,
                103: 1,
              },
              mapStrVals: {},
              firstComponent: "fg-start",
              nextStepFirstComponent: "fg-start",
              "@type": "type.googleapis.com/sgc7pb.GameParam",
            },
            nextGameMod: "bg",
            curIndex: 0,
            parentIndex: 0,
            modType: "",
            prizeCoinWin: 0,
            prizeCashWin: 0,
            jackpotCoinWin: 0,
            jackpotCashWin: 0,
            jackpotType: 0,
          },
        },
        {
          coinWin: 1800,
          cashWin: 1800,
          clientData: {
            scenes: [
              {
                values: [
                  {
                    values: [10, 7, 1],
                  },
                  {
                    values: [10, 12, 11],
                  },
                  {
                    values: [0, 10, 3],
                  },
                  {
                    values: [5, 11, 10],
                  },
                  {
                    values: [4, 9, 3],
                  },
                ],
                indexes: [],
                validRow: [],
              },
            ],
            otherScenes: [],
            results: [
              {
                pos: [0, 0, 1, 0, 2, 0],
                type: 2,
                lineIndex: 1,
                symbol: 10,
                mul: 5,
                coinWin: 1080,
                cashWin: 1080,
                otherMul: 3,
                wilds: 1,
                symbolNums: 3,
                value: 0,
              },
              {
                pos: [0, 0, 1, 0, 2, 1],
                type: 2,
                lineIndex: 5,
                symbol: 10,
                mul: 5,
                coinWin: 720,
                cashWin: 720,
                otherMul: 3,
                wilds: 0,
                symbolNums: 3,
                value: 0,
              },
            ],
            mulPos: [],
            prizeScenes: [],
            curGameMod: "bg",
            curGameModParam: {
              historyComponents: ["fg-start", "fg-spin", "fg-paylines"],
              respinComponents: ["fg-start"],
              mapComponents: {
                "fg-start": {
                  triggerRespinNum: [],
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  lastRespinNum: 11,
                  totalRespinNum: 0,
                  curRespinNum: 4,
                  curAddRespinNum: 15,
                  totalCoinWin: 8400,
                  totalCashWin: 8400,
                  retriggerAddRespinNum: 0,
                  lastTriggerNum: 0,
                  curTriggerNum: 0,
                  "@type": "type.googleapis.com/sgc7pb.RespinData",
                },
                "fg-spin": {
                  basicComponentData: {
                    usedScenes: [0, 0, 0, 0],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  reelSetIndex: 1,
                  "@type": "type.googleapis.com/sgc7pb.WeightReelsData",
                },
                "fg-paylines": {
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [0, 1],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 1800,
                    cashWin: 1800,
                    targetScene: -1,
                    runIndex: 0,
                  },
                  nextComponent: "",
                  symbolNum: 6,
                  wildNum: 1,
                  respinNum: 0,
                  wins: 1800,
                  winMulti: 3,
                  "@type": "type.googleapis.com/sgc7pb.LinesTriggerData",
                },
              },
              mapVals: {
                1: 5,
                2: 3,
                6: 10,
                7: 0,
                100: 1,
                101: 1,
                102: 1,
                103: 1,
              },
              mapStrVals: {},
              firstComponent: "fg-start",
              nextStepFirstComponent: "fg-start",
              "@type": "type.googleapis.com/sgc7pb.GameParam",
            },
            nextGameMod: "bg",
            curIndex: 0,
            parentIndex: 0,
            modType: "",
            prizeCoinWin: 0,
            prizeCashWin: 0,
            jackpotCoinWin: 0,
            jackpotCashWin: 0,
            jackpotType: 0,
          },
        },
        {
          coinWin: 0,
          cashWin: 0,
          clientData: {
            scenes: [
              {
                values: [
                  {
                    values: [3, 6, 8],
                  },
                  {
                    values: [9, 13, 13],
                  },
                  {
                    values: [10, 8, 0],
                  },
                  {
                    values: [0, 8, 2],
                  },
                  {
                    values: [11, 6, 5],
                  },
                ],
                indexes: [],
                validRow: [],
              },
            ],
            otherScenes: [],
            results: [],
            mulPos: [],
            prizeScenes: [],
            curGameMod: "bg",
            curGameModParam: {
              historyComponents: ["fg-start", "fg-spin"],
              respinComponents: ["fg-start"],
              mapComponents: {
                "fg-spin": {
                  basicComponentData: {
                    usedScenes: [0, 0, 0, 0, 0],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  reelSetIndex: 1,
                  "@type": "type.googleapis.com/sgc7pb.WeightReelsData",
                },
                "fg-start": {
                  triggerRespinNum: [],
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  lastRespinNum: 10,
                  totalRespinNum: 0,
                  curRespinNum: 5,
                  curAddRespinNum: 15,
                  totalCoinWin: 8400,
                  totalCashWin: 8400,
                  retriggerAddRespinNum: 0,
                  lastTriggerNum: 0,
                  curTriggerNum: 0,
                  "@type": "type.googleapis.com/sgc7pb.RespinData",
                },
              },
              mapVals: {
                1: 5,
                2: 3,
                6: 10,
                7: 0,
                100: 1,
                101: 1,
                102: 1,
                103: 1,
              },
              mapStrVals: {},
              firstComponent: "fg-start",
              nextStepFirstComponent: "fg-start",
              "@type": "type.googleapis.com/sgc7pb.GameParam",
            },
            nextGameMod: "bg",
            curIndex: 0,
            parentIndex: 0,
            modType: "",
            prizeCoinWin: 0,
            prizeCashWin: 0,
            jackpotCoinWin: 0,
            jackpotCashWin: 0,
            jackpotType: 0,
          },
        },
        {
          coinWin: 30,
          cashWin: 30,
          clientData: {
            scenes: [
              {
                values: [
                  {
                    values: [13, 13, 13],
                  },
                  {
                    values: [10, 12, 11],
                  },
                  {
                    values: [9, 4, 2],
                  },
                  {
                    values: [3, 4, 10],
                  },
                  {
                    values: [8, 5, 9],
                  },
                ],
                indexes: [],
                validRow: [],
              },
              {
                values: [
                  {
                    values: [13, 13, 13],
                  },
                  {
                    values: [10, 12, 11],
                  },
                  {
                    values: [9, 4, 2],
                  },
                  {
                    values: [3, 4, 10],
                  },
                  {
                    values: [8, 5, 9],
                  },
                ],
                indexes: [],
                validRow: [],
              },
            ],
            otherScenes: [],
            results: [
              {
                pos: [0, 0],
                type: 5,
                lineIndex: -1,
                symbol: 13,
                mul: 0,
                coinWin: 0,
                cashWin: 0,
                otherMul: 0,
                wilds: 0,
                symbolNums: 1,
                value: 0,
              },
              {
                pos: [0, 0, 0, 1, 0, 2],
                type: 1,
                lineIndex: -1,
                symbol: 13,
                mul: 10,
                coinWin: 30,
                cashWin: 30,
                otherMul: 3,
                wilds: 0,
                symbolNums: 3,
                value: 0,
              },
            ],
            mulPos: [],
            prizeScenes: [],
            curGameMod: "bg",
            curGameModParam: {
              historyComponents: [
                "fg-start",
                "fg-spin",
                "fg-walktrigger",
                "fg-walkdown",
                "fg-paysc",
              ],
              respinComponents: ["fg-start"],
              mapComponents: {
                "fg-paysc": {
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [1],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 30,
                    cashWin: 30,
                    targetScene: -1,
                    runIndex: 0,
                  },
                  nextComponent: "",
                  symbolNum: 3,
                  wildNum: 0,
                  respinNum: 0,
                  wins: 30,
                  winMulti: 3,
                  "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData",
                },
                "fg-start": {
                  triggerRespinNum: [],
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  lastRespinNum: 9,
                  totalRespinNum: 0,
                  curRespinNum: 6,
                  curAddRespinNum: 15,
                  totalCoinWin: 8430,
                  totalCashWin: 8430,
                  retriggerAddRespinNum: 0,
                  lastTriggerNum: 0,
                  curTriggerNum: 0,
                  "@type": "type.googleapis.com/sgc7pb.RespinData",
                },
                "fg-spin": {
                  basicComponentData: {
                    usedScenes: [0, 0, 0, 0, 0, 0],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  reelSetIndex: 1,
                  "@type": "type.googleapis.com/sgc7pb.WeightReelsData",
                },
                "fg-walktrigger": {
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [0],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: -1,
                    runIndex: 0,
                  },
                  nextComponent: "fg-walkdown",
                  symbolNum: 1,
                  wildNum: 0,
                  respinNum: 0,
                  wins: 0,
                  winMulti: 1,
                  "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData",
                },
                "fg-walkdown": {
                  basicComponentData: {
                    usedScenes: [1],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [0],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  "@type": "type.googleapis.com/sgc7pb.BasicComponentData",
                },
              },
              mapVals: {
                1: 5,
                2: 3,
                6: 10,
                7: 0,
                100: 1,
                101: 1,
                102: 1,
                103: 1,
              },
              mapStrVals: {},
              firstComponent: "fg-start",
              nextStepFirstComponent: "fg-start",
              "@type": "type.googleapis.com/sgc7pb.GameParam",
            },
            nextGameMod: "bg",
            curIndex: 0,
            parentIndex: 0,
            modType: "",
            prizeCoinWin: 0,
            prizeCashWin: 0,
            jackpotCoinWin: 0,
            jackpotCashWin: 0,
            jackpotType: 0,
          },
        },
        {
          coinWin: 0,
          cashWin: 0,
          clientData: {
            scenes: [
              {
                values: [
                  {
                    values: [8, 12, 9],
                  },
                  {
                    values: [6, 7, 9],
                  },
                  {
                    values: [0, 10, 3],
                  },
                  {
                    values: [13, 13, 7],
                  },
                  {
                    values: [10, 7, 6],
                  },
                ],
                indexes: [],
                validRow: [],
              },
            ],
            otherScenes: [],
            results: [],
            mulPos: [],
            prizeScenes: [],
            curGameMod: "bg",
            curGameModParam: {
              historyComponents: ["fg-start", "fg-spin"],
              respinComponents: ["fg-start"],
              mapComponents: {
                "fg-start": {
                  triggerRespinNum: [],
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  lastRespinNum: 8,
                  totalRespinNum: 0,
                  curRespinNum: 7,
                  curAddRespinNum: 15,
                  totalCoinWin: 8430,
                  totalCashWin: 8430,
                  retriggerAddRespinNum: 0,
                  lastTriggerNum: 0,
                  curTriggerNum: 0,
                  "@type": "type.googleapis.com/sgc7pb.RespinData",
                },
                "fg-spin": {
                  basicComponentData: {
                    usedScenes: [0, 0, 0, 0, 0, 0, 0],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  reelSetIndex: 0,
                  "@type": "type.googleapis.com/sgc7pb.WeightReelsData",
                },
              },
              mapVals: {
                1: 5,
                2: 3,
                6: 10,
                7: 0,
                100: 1,
                101: 1,
                102: 1,
                103: 1,
              },
              mapStrVals: {},
              firstComponent: "fg-start",
              nextStepFirstComponent: "fg-start",
              "@type": "type.googleapis.com/sgc7pb.GameParam",
            },
            nextGameMod: "bg",
            curIndex: 0,
            parentIndex: 0,
            modType: "",
            prizeCoinWin: 0,
            prizeCashWin: 0,
            jackpotCoinWin: 0,
            jackpotCashWin: 0,
            jackpotType: 0,
          },
        },
        {
          coinWin: 0,
          cashWin: 0,
          clientData: {
            scenes: [
              {
                values: [
                  {
                    values: [8, 11, 4],
                  },
                  {
                    values: [10, 12, 11],
                  },
                  {
                    values: [0, 10, 3],
                  },
                  {
                    values: [10, 4, 6],
                  },
                  {
                    values: [8, 1, 11],
                  },
                ],
                indexes: [],
                validRow: [],
              },
            ],
            otherScenes: [],
            results: [],
            mulPos: [],
            prizeScenes: [],
            curGameMod: "bg",
            curGameModParam: {
              historyComponents: ["fg-start", "fg-spin"],
              respinComponents: ["fg-start"],
              mapComponents: {
                "fg-start": {
                  triggerRespinNum: [],
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  lastRespinNum: 7,
                  totalRespinNum: 0,
                  curRespinNum: 8,
                  curAddRespinNum: 15,
                  totalCoinWin: 8430,
                  totalCashWin: 8430,
                  retriggerAddRespinNum: 0,
                  lastTriggerNum: 0,
                  curTriggerNum: 0,
                  "@type": "type.googleapis.com/sgc7pb.RespinData",
                },
                "fg-spin": {
                  basicComponentData: {
                    usedScenes: [0, 0, 0, 0, 0, 0, 0, 0],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  reelSetIndex: 0,
                  "@type": "type.googleapis.com/sgc7pb.WeightReelsData",
                },
              },
              mapVals: {
                1: 5,
                2: 3,
                6: 10,
                7: 0,
                100: 1,
                101: 1,
                102: 1,
                103: 1,
              },
              mapStrVals: {},
              firstComponent: "fg-start",
              nextStepFirstComponent: "fg-start",
              "@type": "type.googleapis.com/sgc7pb.GameParam",
            },
            nextGameMod: "bg",
            curIndex: 0,
            parentIndex: 0,
            modType: "",
            prizeCoinWin: 0,
            prizeCashWin: 0,
            jackpotCoinWin: 0,
            jackpotCashWin: 0,
            jackpotType: 0,
          },
        },
        {
          coinWin: 1320,
          cashWin: 1320,
          clientData: {
            scenes: [
              {
                values: [
                  {
                    values: [7, 1, 6],
                  },
                  {
                    values: [0, 6, 7],
                  },
                  {
                    values: [7, 11, 12],
                  },
                  {
                    values: [11, 6, 3],
                  },
                  {
                    values: [7, 6, 0],
                  },
                ],
                indexes: [],
                validRow: [],
              },
            ],
            otherScenes: [],
            results: [
              {
                pos: [0, 0, 1, 0, 2, 0],
                type: 2,
                lineIndex: 1,
                symbol: 7,
                mul: 10,
                coinWin: 0,
                cashWin: 0,
                otherMul: 3,
                wilds: 1,
                symbolNums: 3,
                value: 0,
              },
              {
                pos: [0, 1, 1, 0],
                type: 2,
                lineIndex: 8,
                symbol: 1,
                mul: 2,
                coinWin: 660,
                cashWin: 660,
                otherMul: 3,
                wilds: 1,
                symbolNums: 2,
                value: 0,
              },
              {
                pos: [0, 1, 1, 0],
                type: 2,
                lineIndex: 9,
                symbol: 1,
                mul: 2,
                coinWin: 660,
                cashWin: 660,
                otherMul: 3,
                wilds: 1,
                symbolNums: 2,
                value: 0,
              },
            ],
            mulPos: [],
            prizeScenes: [],
            curGameMod: "bg",
            curGameModParam: {
              historyComponents: ["fg-start", "fg-spin", "fg-paylines"],
              respinComponents: ["fg-start"],
              mapComponents: {
                "fg-start": {
                  triggerRespinNum: [],
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  lastRespinNum: 6,
                  totalRespinNum: 0,
                  curRespinNum: 9,
                  curAddRespinNum: 15,
                  totalCoinWin: 9750,
                  totalCashWin: 9750,
                  retriggerAddRespinNum: 0,
                  lastTriggerNum: 0,
                  curTriggerNum: 0,
                  "@type": "type.googleapis.com/sgc7pb.RespinData",
                },
                "fg-spin": {
                  basicComponentData: {
                    usedScenes: [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  reelSetIndex: 1,
                  "@type": "type.googleapis.com/sgc7pb.WeightReelsData",
                },
                "fg-paylines": {
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [0, 1, 2],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 1320,
                    cashWin: 1320,
                    targetScene: -1,
                    runIndex: 0,
                  },
                  nextComponent: "",
                  symbolNum: 7,
                  wildNum: 3,
                  respinNum: 0,
                  wins: 1320,
                  winMulti: 3,
                  "@type": "type.googleapis.com/sgc7pb.LinesTriggerData",
                },
              },
              mapVals: {
                1: 5,
                2: 3,
                6: 10,
                7: 0,
                100: 1,
                101: 1,
                102: 1,
                103: 1,
              },
              mapStrVals: {},
              firstComponent: "fg-start",
              nextStepFirstComponent: "fg-start",
              "@type": "type.googleapis.com/sgc7pb.GameParam",
            },
            nextGameMod: "bg",
            curIndex: 0,
            parentIndex: 0,
            modType: "",
            prizeCoinWin: 0,
            prizeCashWin: 0,
            jackpotCoinWin: 0,
            jackpotCashWin: 0,
            jackpotType: 0,
          },
        },
        {
          coinWin: 990,
          cashWin: 990,
          clientData: {
            scenes: [
              {
                values: [
                  {
                    values: [10, 9, 2],
                  },
                  {
                    values: [5, 9, 3],
                  },
                  {
                    values: [4, 9, 13],
                  },
                  {
                    values: [13, 7, 10],
                  },
                  {
                    values: [12, 4, 9],
                  },
                ],
                indexes: [],
                validRow: [],
              },
            ],
            otherScenes: [],
            results: [
              {
                pos: [0, 1, 1, 1, 2, 1],
                type: 2,
                lineIndex: 0,
                symbol: 9,
                mul: 5,
                coinWin: 990,
                cashWin: 990,
                otherMul: 3,
                wilds: 0,
                symbolNums: 3,
                value: 0,
              },
            ],
            mulPos: [],
            prizeScenes: [],
            curGameMod: "bg",
            curGameModParam: {
              historyComponents: ["fg-start", "fg-spin", "fg-paylines"],
              respinComponents: ["fg-start"],
              mapComponents: {
                "fg-spin": {
                  basicComponentData: {
                    usedScenes: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  reelSetIndex: 0,
                  "@type": "type.googleapis.com/sgc7pb.WeightReelsData",
                },
                "fg-paylines": {
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [0],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 990,
                    cashWin: 990,
                    targetScene: -1,
                    runIndex: 0,
                  },
                  nextComponent: "",
                  symbolNum: 3,
                  wildNum: 0,
                  respinNum: 0,
                  wins: 990,
                  winMulti: 3,
                  "@type": "type.googleapis.com/sgc7pb.LinesTriggerData",
                },
                "fg-start": {
                  triggerRespinNum: [],
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  lastRespinNum: 5,
                  totalRespinNum: 0,
                  curRespinNum: 10,
                  curAddRespinNum: 15,
                  totalCoinWin: 10740,
                  totalCashWin: 10740,
                  retriggerAddRespinNum: 0,
                  lastTriggerNum: 0,
                  curTriggerNum: 0,
                  "@type": "type.googleapis.com/sgc7pb.RespinData",
                },
              },
              mapVals: {
                1: 5,
                2: 3,
                6: 10,
                7: 0,
                100: 1,
                101: 1,
                102: 1,
                103: 1,
              },
              mapStrVals: {},
              firstComponent: "fg-start",
              nextStepFirstComponent: "fg-start",
              "@type": "type.googleapis.com/sgc7pb.GameParam",
            },
            nextGameMod: "bg",
            curIndex: 0,
            parentIndex: 0,
            modType: "",
            prizeCoinWin: 0,
            prizeCashWin: 0,
            jackpotCoinWin: 0,
            jackpotCashWin: 0,
            jackpotType: 0,
          },
        },
        {
          coinWin: 150,
          cashWin: 150,
          clientData: {
            scenes: [
              {
                values: [
                  {
                    values: [8, 12, 13],
                  },
                  {
                    values: [3, 5, 10],
                  },
                  {
                    values: [11, 12, 8],
                  },
                  {
                    values: [4, 10, 12],
                  },
                  {
                    values: [10, 2, 6],
                  },
                ],
                indexes: [],
                validRow: [],
              },
            ],
            otherScenes: [],
            results: [
              {
                pos: [0, 1, 2, 1, 3, 2],
                type: 1,
                lineIndex: -1,
                symbol: 12,
                mul: 50,
                coinWin: 150,
                cashWin: 150,
                otherMul: 3,
                wilds: 0,
                symbolNums: 3,
                value: 0,
              },
              {
                pos: [0, 1, 2, 1, 3, 2],
                type: 5,
                lineIndex: -1,
                symbol: 12,
                mul: 0,
                coinWin: 0,
                cashWin: 0,
                otherMul: 0,
                wilds: 0,
                symbolNums: 3,
                value: 0,
              },
            ],
            mulPos: [],
            prizeScenes: [],
            curGameMod: "bg",
            curGameModParam: {
              historyComponents: [
                "fg-start",
                "fg-spin",
                "fg-payfg",
                "fg-fgtrigger",
              ],
              respinComponents: ["fg-start"],
              mapComponents: {
                "fg-start": {
                  triggerRespinNum: [],
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  lastRespinNum: 19,
                  totalRespinNum: 0,
                  curRespinNum: 11,
                  curAddRespinNum: 30,
                  totalCoinWin: 10890,
                  totalCashWin: 10890,
                  retriggerAddRespinNum: 0,
                  lastTriggerNum: 0,
                  curTriggerNum: 0,
                  "@type": "type.googleapis.com/sgc7pb.RespinData",
                },
                "fg-spin": {
                  basicComponentData: {
                    usedScenes: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  reelSetIndex: 1,
                  "@type": "type.googleapis.com/sgc7pb.WeightReelsData",
                },
                "fg-payfg": {
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [0],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 150,
                    cashWin: 150,
                    targetScene: -1,
                    runIndex: 0,
                  },
                  nextComponent: "",
                  symbolNum: 3,
                  wildNum: 0,
                  respinNum: 0,
                  wins: 150,
                  winMulti: 3,
                  "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData",
                },
                "fg-fgtrigger": {
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [1],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: -1,
                    runIndex: 0,
                  },
                  nextComponent: "",
                  symbolNum: 3,
                  wildNum: 0,
                  respinNum: 0,
                  wins: 0,
                  winMulti: 1,
                  "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData",
                },
              },
              mapVals: {
                1: 5,
                2: 3,
                6: 10,
                7: 0,
                100: 1,
                101: 1,
                102: 1,
                103: 1,
              },
              mapStrVals: {},
              firstComponent: "fg-start",
              nextStepFirstComponent: "fg-start",
              "@type": "type.googleapis.com/sgc7pb.GameParam",
            },
            nextGameMod: "bg",
            curIndex: 0,
            parentIndex: 0,
            modType: "",
            prizeCoinWin: 0,
            prizeCashWin: 0,
            jackpotCoinWin: 0,
            jackpotCashWin: 0,
            jackpotType: 0,
          },
        },
        {
          coinWin: 14325,
          cashWin: 14325,
          clientData: {
            scenes: [
              {
                values: [
                  {
                    values: [8, 12, 9],
                  },
                  {
                    values: [7, 0, 6],
                  },
                  {
                    values: [9, 4, 2],
                  },
                  {
                    values: [8, 2, 6],
                  },
                  {
                    values: [4, 9, 6],
                  },
                ],
                indexes: [],
                validRow: [],
              },
            ],
            otherScenes: [],
            results: [
              {
                pos: [0, 1, 1, 1],
                type: 2,
                lineIndex: 0,
                symbol: 12,
                mul: 20,
                coinWin: 3600,
                cashWin: 3600,
                otherMul: 3,
                wilds: 1,
                symbolNums: 2,
                value: 0,
              },
              {
                pos: [0, 2, 1, 1, 2, 0],
                type: 2,
                lineIndex: 4,
                symbol: 9,
                mul: 5,
                coinWin: 10725,
                cashWin: 10725,
                otherMul: 3,
                wilds: 1,
                symbolNums: 3,
                value: 0,
              },
            ],
            mulPos: [],
            prizeScenes: [],
            curGameMod: "bg",
            curGameModParam: {
              historyComponents: ["fg-start", "fg-spin", "fg-paylines"],
              respinComponents: ["fg-start"],
              mapComponents: {
                "fg-start": {
                  triggerRespinNum: [],
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  lastRespinNum: 18,
                  totalRespinNum: 0,
                  curRespinNum: 12,
                  curAddRespinNum: 30,
                  totalCoinWin: 25215,
                  totalCashWin: 25215,
                  retriggerAddRespinNum: 0,
                  lastTriggerNum: 0,
                  curTriggerNum: 0,
                  "@type": "type.googleapis.com/sgc7pb.RespinData",
                },
                "fg-spin": {
                  basicComponentData: {
                    usedScenes: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  reelSetIndex: 0,
                  "@type": "type.googleapis.com/sgc7pb.WeightReelsData",
                },
                "fg-paylines": {
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [0, 1],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 14325,
                    cashWin: 14325,
                    targetScene: -1,
                    runIndex: 0,
                  },
                  nextComponent: "",
                  symbolNum: 5,
                  wildNum: 2,
                  respinNum: 0,
                  wins: 14325,
                  winMulti: 3,
                  "@type": "type.googleapis.com/sgc7pb.LinesTriggerData",
                },
              },
              mapVals: {
                1: 5,
                2: 3,
                6: 10,
                7: 0,
                100: 1,
                101: 1,
                102: 1,
                103: 1,
              },
              mapStrVals: {},
              firstComponent: "fg-start",
              nextStepFirstComponent: "fg-start",
              "@type": "type.googleapis.com/sgc7pb.GameParam",
            },
            nextGameMod: "bg",
            curIndex: 0,
            parentIndex: 0,
            modType: "",
            prizeCoinWin: 0,
            prizeCashWin: 0,
            jackpotCoinWin: 0,
            jackpotCashWin: 0,
            jackpotType: 0,
          },
        },
        {
          coinWin: 30,
          cashWin: 30,
          clientData: {
            scenes: [
              {
                values: [
                  {
                    values: [13, 13, 5],
                  },
                  {
                    values: [7, 0, 6],
                  },
                  {
                    values: [2, 5, 6],
                  },
                  {
                    values: [0, 8, 2],
                  },
                  {
                    values: [12, 4, 9],
                  },
                ],
                indexes: [],
                validRow: [],
              },
              {
                values: [
                  {
                    values: [13, 13, 13],
                  },
                  {
                    values: [7, 0, 6],
                  },
                  {
                    values: [2, 5, 6],
                  },
                  {
                    values: [0, 8, 2],
                  },
                  {
                    values: [12, 4, 9],
                  },
                ],
                indexes: [],
                validRow: [],
              },
            ],
            otherScenes: [],
            results: [
              {
                pos: [0, 0],
                type: 5,
                lineIndex: -1,
                symbol: 13,
                mul: 0,
                coinWin: 0,
                cashWin: 0,
                otherMul: 0,
                wilds: 0,
                symbolNums: 1,
                value: 0,
              },
              {
                pos: [0, 0, 0, 1, 0, 2],
                type: 1,
                lineIndex: -1,
                symbol: 13,
                mul: 10,
                coinWin: 30,
                cashWin: 30,
                otherMul: 3,
                wilds: 0,
                symbolNums: 3,
                value: 0,
              },
            ],
            mulPos: [],
            prizeScenes: [],
            curGameMod: "bg",
            curGameModParam: {
              historyComponents: [
                "fg-start",
                "fg-spin",
                "fg-walktrigger",
                "fg-walkdown",
                "fg-paysc",
              ],
              respinComponents: ["fg-start"],
              mapComponents: {
                "fg-start": {
                  triggerRespinNum: [],
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  lastRespinNum: 17,
                  totalRespinNum: 0,
                  curRespinNum: 13,
                  curAddRespinNum: 30,
                  totalCoinWin: 25245,
                  totalCashWin: 25245,
                  retriggerAddRespinNum: 0,
                  lastTriggerNum: 0,
                  curTriggerNum: 0,
                  "@type": "type.googleapis.com/sgc7pb.RespinData",
                },
                "fg-spin": {
                  basicComponentData: {
                    usedScenes: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  reelSetIndex: 1,
                  "@type": "type.googleapis.com/sgc7pb.WeightReelsData",
                },
                "fg-walktrigger": {
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [0],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: -1,
                    runIndex: 0,
                  },
                  nextComponent: "fg-walkdown",
                  symbolNum: 1,
                  wildNum: 0,
                  respinNum: 0,
                  wins: 0,
                  winMulti: 1,
                  "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData",
                },
                "fg-walkdown": {
                  basicComponentData: {
                    usedScenes: [1, 1],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [0],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  "@type": "type.googleapis.com/sgc7pb.BasicComponentData",
                },
                "fg-paysc": {
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [1],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 30,
                    cashWin: 30,
                    targetScene: -1,
                    runIndex: 0,
                  },
                  nextComponent: "",
                  symbolNum: 3,
                  wildNum: 0,
                  respinNum: 0,
                  wins: 30,
                  winMulti: 3,
                  "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData",
                },
              },
              mapVals: {
                1: 5,
                2: 3,
                6: 10,
                7: 0,
                100: 1,
                101: 1,
                102: 1,
                103: 1,
              },
              mapStrVals: {},
              firstComponent: "fg-start",
              nextStepFirstComponent: "fg-start",
              "@type": "type.googleapis.com/sgc7pb.GameParam",
            },
            nextGameMod: "bg",
            curIndex: 0,
            parentIndex: 0,
            modType: "",
            prizeCoinWin: 0,
            prizeCashWin: 0,
            jackpotCoinWin: 0,
            jackpotCashWin: 0,
            jackpotType: 0,
          },
        },
        {
          coinWin: 0,
          cashWin: 0,
          clientData: {
            scenes: [
              {
                values: [
                  {
                    values: [4, 10, 7],
                  },
                  {
                    values: [9, 1, 8],
                  },
                  {
                    values: [12, 8, 9],
                  },
                  {
                    values: [1, 4, 10],
                  },
                  {
                    values: [3, 10, 5],
                  },
                ],
                indexes: [],
                validRow: [],
              },
            ],
            otherScenes: [],
            results: [],
            mulPos: [],
            prizeScenes: [],
            curGameMod: "bg",
            curGameModParam: {
              historyComponents: ["fg-start", "fg-spin"],
              respinComponents: ["fg-start"],
              mapComponents: {
                "fg-start": {
                  triggerRespinNum: [],
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  lastRespinNum: 16,
                  totalRespinNum: 0,
                  curRespinNum: 14,
                  curAddRespinNum: 30,
                  totalCoinWin: 25245,
                  totalCashWin: 25245,
                  retriggerAddRespinNum: 0,
                  lastTriggerNum: 0,
                  curTriggerNum: 0,
                  "@type": "type.googleapis.com/sgc7pb.RespinData",
                },
                "fg-spin": {
                  basicComponentData: {
                    usedScenes: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  reelSetIndex: 1,
                  "@type": "type.googleapis.com/sgc7pb.WeightReelsData",
                },
              },
              mapVals: {
                1: 5,
                2: 3,
                6: 10,
                7: 0,
                100: 1,
                101: 1,
                102: 1,
                103: 1,
              },
              mapStrVals: {},
              firstComponent: "fg-start",
              nextStepFirstComponent: "fg-start",
              "@type": "type.googleapis.com/sgc7pb.GameParam",
            },
            nextGameMod: "bg",
            curIndex: 0,
            parentIndex: 0,
            modType: "",
            prizeCoinWin: 0,
            prizeCashWin: 0,
            jackpotCoinWin: 0,
            jackpotCashWin: 0,
            jackpotType: 0,
          },
        },
        {
          coinWin: 132210,
          cashWin: 132210,
          clientData: {
            scenes: [
              {
                values: [
                  {
                    values: [13, 13, 13],
                  },
                  {
                    values: [0, 6, 7],
                  },
                  {
                    values: [13, 13, 13],
                  },
                  {
                    values: [6, 7, 10],
                  },
                  {
                    values: [1, 11, 12],
                  },
                ],
                indexes: [],
                validRow: [],
              },
              {
                values: [
                  {
                    values: [13, 13, 13],
                  },
                  {
                    values: [0, 6, 7],
                  },
                  {
                    values: [13, 13, 13],
                  },
                  {
                    values: [6, 7, 10],
                  },
                  {
                    values: [1, 11, 12],
                  },
                ],
                indexes: [],
                validRow: [],
              },
              {
                values: [
                  {
                    values: [13, 13, 13],
                  },
                  {
                    values: [13, 13, 13],
                  },
                  {
                    values: [13, 13, 13],
                  },
                  {
                    values: [6, 7, 10],
                  },
                  {
                    values: [1, 11, 12],
                  },
                ],
                indexes: [],
                validRow: [],
              },
            ],
            otherScenes: [],
            results: [
              {
                pos: [0, 0],
                type: 5,
                lineIndex: -1,
                symbol: 13,
                mul: 0,
                coinWin: 0,
                cashWin: 0,
                otherMul: 0,
                wilds: 0,
                symbolNums: 1,
                value: 0,
              },
              {
                pos: [0, 1, 1, 1, 2, 1],
                type: 2,
                lineIndex: 0,
                symbol: 13,
                mul: 10,
                coinWin: 2400,
                cashWin: 2400,
                otherMul: 3,
                wilds: 0,
                symbolNums: 3,
                value: 0,
              },
              {
                pos: [0, 0, 1, 0, 2, 0],
                type: 2,
                lineIndex: 1,
                symbol: 13,
                mul: 10,
                coinWin: 12960,
                cashWin: 12960,
                otherMul: 3,
                wilds: 0,
                symbolNums: 3,
                value: 0,
              },
              {
                pos: [0, 2, 1, 2, 2, 2],
                type: 2,
                lineIndex: 2,
                symbol: 13,
                mul: 10,
                coinWin: 15120,
                cashWin: 15120,
                otherMul: 3,
                wilds: 0,
                symbolNums: 3,
                value: 0,
              },
              {
                pos: [0, 0, 1, 1, 2, 2],
                type: 2,
                lineIndex: 3,
                symbol: 13,
                mul: 10,
                coinWin: 1080,
                cashWin: 1080,
                otherMul: 3,
                wilds: 0,
                symbolNums: 3,
                value: 0,
              },
              {
                pos: [0, 2, 1, 1, 2, 0],
                type: 2,
                lineIndex: 4,
                symbol: 13,
                mul: 10,
                coinWin: 2520,
                cashWin: 2520,
                otherMul: 3,
                wilds: 0,
                symbolNums: 3,
                value: 0,
              },
              {
                pos: [0, 0, 1, 0, 2, 1],
                type: 2,
                lineIndex: 5,
                symbol: 13,
                mul: 10,
                coinWin: 8640,
                cashWin: 8640,
                otherMul: 3,
                wilds: 0,
                symbolNums: 3,
                value: 0,
              },
              {
                pos: [0, 2, 1, 2, 2, 1],
                type: 2,
                lineIndex: 6,
                symbol: 13,
                mul: 10,
                coinWin: 13440,
                cashWin: 13440,
                otherMul: 3,
                wilds: 0,
                symbolNums: 3,
                value: 0,
              },
              {
                pos: [0, 1, 1, 2, 2, 2],
                type: 2,
                lineIndex: 7,
                symbol: 13,
                mul: 10,
                coinWin: 21600,
                cashWin: 21600,
                otherMul: 3,
                wilds: 0,
                symbolNums: 3,
                value: 0,
              },
              {
                pos: [0, 1, 1, 0, 2, 0],
                type: 2,
                lineIndex: 8,
                symbol: 13,
                mul: 10,
                coinWin: 32400,
                cashWin: 32400,
                otherMul: 3,
                wilds: 0,
                symbolNums: 3,
                value: 0,
              },
              {
                pos: [0, 1, 1, 0, 2, 1],
                type: 2,
                lineIndex: 9,
                symbol: 13,
                mul: 10,
                coinWin: 21600,
                cashWin: 21600,
                otherMul: 3,
                wilds: 0,
                symbolNums: 3,
                value: 0,
              },
              {
                pos: [0, 0, 0, 1, 0, 2, 1, 0, 1, 1, 1, 2, 2, 0, 2, 1, 2, 2],
                type: 1,
                lineIndex: -1,
                symbol: 13,
                mul: 150,
                coinWin: 450,
                cashWin: 450,
                otherMul: 3,
                wilds: 0,
                symbolNums: 9,
                value: 0,
              },
            ],
            mulPos: [],
            prizeScenes: [],
            curGameMod: "bg",
            curGameModParam: {
              historyComponents: [
                "fg-start",
                "fg-spin",
                "fg-walktrigger",
                "fg-walkdown",
                "fg-walk",
                "fg-paylines",
                "fg-paysc",
              ],
              respinComponents: ["fg-start"],
              mapComponents: {
                "fg-spin": {
                  basicComponentData: {
                    usedScenes: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  reelSetIndex: 1,
                  "@type": "type.googleapis.com/sgc7pb.WeightReelsData",
                },
                "fg-walktrigger": {
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [0],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: -1,
                    runIndex: 0,
                  },
                  nextComponent: "fg-walkdown",
                  symbolNum: 1,
                  wildNum: 0,
                  respinNum: 0,
                  wins: 0,
                  winMulti: 1,
                  "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData",
                },
                "fg-walkdown": {
                  basicComponentData: {
                    usedScenes: [1, 1, 1],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [0],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  "@type": "type.googleapis.com/sgc7pb.BasicComponentData",
                },
                "fg-walk": {
                  basicComponentData: {
                    usedScenes: [2],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [0],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  "@type": "type.googleapis.com/sgc7pb.BasicComponentData",
                },
                "fg-paylines": {
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 131760,
                    cashWin: 131760,
                    targetScene: -1,
                    runIndex: 0,
                  },
                  nextComponent: "",
                  symbolNum: 30,
                  wildNum: 0,
                  respinNum: 0,
                  wins: 131760,
                  winMulti: 3,
                  "@type": "type.googleapis.com/sgc7pb.LinesTriggerData",
                },
                "fg-paysc": {
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [11],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 450,
                    cashWin: 450,
                    targetScene: -1,
                    runIndex: 0,
                  },
                  nextComponent: "",
                  symbolNum: 9,
                  wildNum: 0,
                  respinNum: 0,
                  wins: 450,
                  winMulti: 3,
                  "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData",
                },
                "fg-start": {
                  triggerRespinNum: [],
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  lastRespinNum: 15,
                  totalRespinNum: 0,
                  curRespinNum: 15,
                  curAddRespinNum: 30,
                  totalCoinWin: 157455,
                  totalCashWin: 157455,
                  retriggerAddRespinNum: 0,
                  lastTriggerNum: 0,
                  curTriggerNum: 0,
                  "@type": "type.googleapis.com/sgc7pb.RespinData",
                },
              },
              mapVals: {
                1: 5,
                2: 3,
                6: 10,
                7: 0,
                100: 1,
                101: 1,
                102: 1,
                103: 1,
              },
              mapStrVals: {},
              firstComponent: "fg-start",
              nextStepFirstComponent: "fg-start",
              "@type": "type.googleapis.com/sgc7pb.GameParam",
            },
            nextGameMod: "bg",
            curIndex: 0,
            parentIndex: 0,
            modType: "",
            prizeCoinWin: 0,
            prizeCashWin: 0,
            jackpotCoinWin: 0,
            jackpotCashWin: 0,
            jackpotType: 0,
          },
        },
        {
          coinWin: 60,
          cashWin: 60,
          clientData: {
            scenes: [
              {
                values: [
                  {
                    values: [11, 3, 6],
                  },
                  {
                    values: [9, 13, 13],
                  },
                  {
                    values: [12, 8, 7],
                  },
                  {
                    values: [4, 10, 12],
                  },
                  {
                    values: [6, 0, 7],
                  },
                ],
                indexes: [],
                validRow: [],
              },
            ],
            otherScenes: [],
            results: [
              {
                pos: [2, 0, 3, 2],
                type: 1,
                lineIndex: -1,
                symbol: 12,
                mul: 20,
                coinWin: 60,
                cashWin: 60,
                otherMul: 3,
                wilds: 0,
                symbolNums: 2,
                value: 0,
              },
            ],
            mulPos: [],
            prizeScenes: [],
            curGameMod: "bg",
            curGameModParam: {
              historyComponents: ["fg-start", "fg-spin", "fg-payfg"],
              respinComponents: ["fg-start"],
              mapComponents: {
                "fg-start": {
                  triggerRespinNum: [],
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  lastRespinNum: 14,
                  totalRespinNum: 0,
                  curRespinNum: 16,
                  curAddRespinNum: 30,
                  totalCoinWin: 157515,
                  totalCashWin: 157515,
                  retriggerAddRespinNum: 0,
                  lastTriggerNum: 0,
                  curTriggerNum: 0,
                  "@type": "type.googleapis.com/sgc7pb.RespinData",
                },
                "fg-spin": {
                  basicComponentData: {
                    usedScenes: [
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    ],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  reelSetIndex: 1,
                  "@type": "type.googleapis.com/sgc7pb.WeightReelsData",
                },
                "fg-payfg": {
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [0],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 60,
                    cashWin: 60,
                    targetScene: -1,
                    runIndex: 0,
                  },
                  nextComponent: "",
                  symbolNum: 2,
                  wildNum: 0,
                  respinNum: 0,
                  wins: 60,
                  winMulti: 3,
                  "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData",
                },
              },
              mapVals: {
                1: 5,
                2: 3,
                6: 10,
                7: 0,
                100: 1,
                101: 1,
                102: 1,
                103: 1,
              },
              mapStrVals: {},
              firstComponent: "fg-start",
              nextStepFirstComponent: "fg-start",
              "@type": "type.googleapis.com/sgc7pb.GameParam",
            },
            nextGameMod: "bg",
            curIndex: 0,
            parentIndex: 0,
            modType: "",
            prizeCoinWin: 0,
            prizeCashWin: 0,
            jackpotCoinWin: 0,
            jackpotCashWin: 0,
            jackpotType: 0,
          },
        },
        {
          coinWin: 0,
          cashWin: 0,
          clientData: {
            scenes: [
              {
                values: [
                  {
                    values: [9, 11, 3],
                  },
                  {
                    values: [13, 4, 7],
                  },
                  {
                    values: [6, 11, 12],
                  },
                  {
                    values: [8, 9, 1],
                  },
                  {
                    values: [3, 8, 1],
                  },
                ],
                indexes: [],
                validRow: [],
              },
            ],
            otherScenes: [],
            results: [],
            mulPos: [],
            prizeScenes: [],
            curGameMod: "bg",
            curGameModParam: {
              historyComponents: ["fg-start", "fg-spin"],
              respinComponents: ["fg-start"],
              mapComponents: {
                "fg-start": {
                  triggerRespinNum: [],
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  lastRespinNum: 13,
                  totalRespinNum: 0,
                  curRespinNum: 17,
                  curAddRespinNum: 30,
                  totalCoinWin: 157515,
                  totalCashWin: 157515,
                  retriggerAddRespinNum: 0,
                  lastTriggerNum: 0,
                  curTriggerNum: 0,
                  "@type": "type.googleapis.com/sgc7pb.RespinData",
                },
                "fg-spin": {
                  basicComponentData: {
                    usedScenes: [
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    ],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  reelSetIndex: 1,
                  "@type": "type.googleapis.com/sgc7pb.WeightReelsData",
                },
              },
              mapVals: {
                1: 5,
                2: 3,
                6: 10,
                7: 0,
                100: 1,
                101: 1,
                102: 1,
                103: 1,
              },
              mapStrVals: {},
              firstComponent: "fg-start",
              nextStepFirstComponent: "fg-start",
              "@type": "type.googleapis.com/sgc7pb.GameParam",
            },
            nextGameMod: "bg",
            curIndex: 0,
            parentIndex: 0,
            modType: "",
            prizeCoinWin: 0,
            prizeCashWin: 0,
            jackpotCoinWin: 0,
            jackpotCashWin: 0,
            jackpotType: 0,
          },
        },
        {
          coinWin: 145500,
          cashWin: 145500,
          clientData: {
            scenes: [
              {
                values: [
                  {
                    values: [10, 0, 8],
                  },
                  {
                    values: [0, 6, 7],
                  },
                  {
                    values: [10, 3, 7],
                  },
                  {
                    values: [7, 5, 9],
                  },
                  {
                    values: [6, 0, 7],
                  },
                ],
                indexes: [],
                validRow: [],
              },
            ],
            otherScenes: [],
            results: [
              {
                pos: [0, 0, 1, 0, 2, 0],
                type: 2,
                lineIndex: 1,
                symbol: 10,
                mul: 5,
                coinWin: 10530,
                cashWin: 10530,
                otherMul: 3,
                wilds: 1,
                symbolNums: 3,
                value: 0,
              },
              {
                pos: [0, 1, 1, 2, 2, 2],
                type: 2,
                lineIndex: 7,
                symbol: 7,
                mul: 10,
                coinWin: 27720,
                cashWin: 27720,
                otherMul: 3,
                wilds: 1,
                symbolNums: 3,
                value: 0,
              },
              {
                pos: [0, 1, 1, 0, 2, 0],
                type: 2,
                lineIndex: 8,
                symbol: 10,
                mul: 5,
                coinWin: 12870,
                cashWin: 12870,
                otherMul: 3,
                wilds: 2,
                symbolNums: 3,
                value: 0,
              },
              {
                pos: [0, 1, 1, 0, 2, 1],
                type: 2,
                lineIndex: 9,
                symbol: 3,
                mul: 20,
                coinWin: 94380,
                cashWin: 94380,
                otherMul: 3,
                wilds: 2,
                symbolNums: 3,
                value: 0,
              },
            ],
            mulPos: [],
            prizeScenes: [],
            curGameMod: "bg",
            curGameModParam: {
              historyComponents: ["fg-start", "fg-spin", "fg-paylines"],
              respinComponents: ["fg-start"],
              mapComponents: {
                "fg-start": {
                  triggerRespinNum: [],
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  lastRespinNum: 12,
                  totalRespinNum: 0,
                  curRespinNum: 18,
                  curAddRespinNum: 30,
                  totalCoinWin: 303015,
                  totalCashWin: 303015,
                  retriggerAddRespinNum: 0,
                  lastTriggerNum: 0,
                  curTriggerNum: 0,
                  "@type": "type.googleapis.com/sgc7pb.RespinData",
                },
                "fg-spin": {
                  basicComponentData: {
                    usedScenes: [
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    ],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  reelSetIndex: 1,
                  "@type": "type.googleapis.com/sgc7pb.WeightReelsData",
                },
                "fg-paylines": {
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [0, 1, 2, 3],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 145500,
                    cashWin: 145500,
                    targetScene: -1,
                    runIndex: 0,
                  },
                  nextComponent: "",
                  symbolNum: 12,
                  wildNum: 6,
                  respinNum: 0,
                  wins: 145500,
                  winMulti: 3,
                  "@type": "type.googleapis.com/sgc7pb.LinesTriggerData",
                },
              },
              mapVals: {
                1: 5,
                2: 3,
                6: 10,
                7: 0,
                100: 1,
                101: 1,
                102: 1,
                103: 1,
              },
              mapStrVals: {},
              firstComponent: "fg-start",
              nextStepFirstComponent: "fg-start",
              "@type": "type.googleapis.com/sgc7pb.GameParam",
            },
            nextGameMod: "bg",
            curIndex: 0,
            parentIndex: 0,
            modType: "",
            prizeCoinWin: 0,
            prizeCashWin: 0,
            jackpotCoinWin: 0,
            jackpotCashWin: 0,
            jackpotType: 0,
          },
        },
        {
          coinWin: 0,
          cashWin: 0,
          clientData: {
            scenes: [
              {
                values: [
                  {
                    values: [0, 8, 11],
                  },
                  {
                    values: [0, 6, 7],
                  },
                  {
                    values: [1, 11, 9],
                  },
                  {
                    values: [7, 10, 0],
                  },
                  {
                    values: [6, 7, 8],
                  },
                ],
                indexes: [],
                validRow: [],
              },
            ],
            otherScenes: [],
            results: [],
            mulPos: [],
            prizeScenes: [],
            curGameMod: "bg",
            curGameModParam: {
              historyComponents: ["fg-start", "fg-spin"],
              respinComponents: ["fg-start"],
              mapComponents: {
                "fg-start": {
                  triggerRespinNum: [],
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  lastRespinNum: 11,
                  totalRespinNum: 0,
                  curRespinNum: 19,
                  curAddRespinNum: 30,
                  totalCoinWin: 303015,
                  totalCashWin: 303015,
                  retriggerAddRespinNum: 0,
                  lastTriggerNum: 0,
                  curTriggerNum: 0,
                  "@type": "type.googleapis.com/sgc7pb.RespinData",
                },
                "fg-spin": {
                  basicComponentData: {
                    usedScenes: [
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    ],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  reelSetIndex: 1,
                  "@type": "type.googleapis.com/sgc7pb.WeightReelsData",
                },
              },
              mapVals: {
                1: 5,
                2: 3,
                6: 10,
                7: 0,
                100: 1,
                101: 1,
                102: 1,
                103: 1,
              },
              mapStrVals: {},
              firstComponent: "fg-start",
              nextStepFirstComponent: "fg-start",
              "@type": "type.googleapis.com/sgc7pb.GameParam",
            },
            nextGameMod: "bg",
            curIndex: 0,
            parentIndex: 0,
            modType: "",
            prizeCoinWin: 0,
            prizeCashWin: 0,
            jackpotCoinWin: 0,
            jackpotCashWin: 0,
            jackpotType: 0,
          },
        },
        {
          coinWin: 47160,
          cashWin: 47160,
          clientData: {
            scenes: [
              {
                values: [
                  {
                    values: [10, 0, 8],
                  },
                  {
                    values: [6, 2, 10],
                  },
                  {
                    values: [8, 0, 10],
                  },
                  {
                    values: [6, 1, 7],
                  },
                  {
                    values: [9, 3, 10],
                  },
                ],
                indexes: [],
                validRow: [],
              },
            ],
            otherScenes: [],
            results: [
              {
                pos: [0, 1, 1, 1, 2, 1],
                type: 2,
                lineIndex: 0,
                symbol: 2,
                mul: 25,
                coinWin: 39600,
                cashWin: 39600,
                otherMul: 3,
                wilds: 2,
                symbolNums: 3,
                value: 0,
              },
              {
                pos: [0, 1, 1, 2, 2, 2],
                type: 2,
                lineIndex: 7,
                symbol: 10,
                mul: 5,
                coinWin: 7560,
                cashWin: 7560,
                otherMul: 3,
                wilds: 1,
                symbolNums: 3,
                value: 0,
              },
            ],
            mulPos: [],
            prizeScenes: [],
            curGameMod: "bg",
            curGameModParam: {
              historyComponents: ["fg-start", "fg-spin", "fg-paylines"],
              respinComponents: ["fg-start"],
              mapComponents: {
                "fg-start": {
                  triggerRespinNum: [],
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  lastRespinNum: 10,
                  totalRespinNum: 0,
                  curRespinNum: 20,
                  curAddRespinNum: 30,
                  totalCoinWin: 350175,
                  totalCashWin: 350175,
                  retriggerAddRespinNum: 0,
                  lastTriggerNum: 0,
                  curTriggerNum: 0,
                  "@type": "type.googleapis.com/sgc7pb.RespinData",
                },
                "fg-spin": {
                  basicComponentData: {
                    usedScenes: [
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                      0,
                    ],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  reelSetIndex: 0,
                  "@type": "type.googleapis.com/sgc7pb.WeightReelsData",
                },
                "fg-paylines": {
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [0, 1],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 47160,
                    cashWin: 47160,
                    targetScene: -1,
                    runIndex: 0,
                  },
                  nextComponent: "",
                  symbolNum: 6,
                  wildNum: 3,
                  respinNum: 0,
                  wins: 47160,
                  winMulti: 3,
                  "@type": "type.googleapis.com/sgc7pb.LinesTriggerData",
                },
              },
              mapVals: {
                1: 5,
                2: 3,
                6: 10,
                7: 0,
                100: 1,
                101: 1,
                102: 1,
                103: 1,
              },
              mapStrVals: {},
              firstComponent: "fg-start",
              nextStepFirstComponent: "fg-start",
              "@type": "type.googleapis.com/sgc7pb.GameParam",
            },
            nextGameMod: "bg",
            curIndex: 0,
            parentIndex: 0,
            modType: "",
            prizeCoinWin: 0,
            prizeCashWin: 0,
            jackpotCoinWin: 0,
            jackpotCashWin: 0,
            jackpotType: 0,
          },
        },
        {
          coinWin: 0,
          cashWin: 0,
          clientData: {
            scenes: [
              {
                values: [
                  {
                    values: [2, 7, 10],
                  },
                  {
                    values: [10, 8, 9],
                  },
                  {
                    values: [9, 4, 11],
                  },
                  {
                    values: [4, 10, 12],
                  },
                  {
                    values: [13, 7, 6],
                  },
                ],
                indexes: [],
                validRow: [],
              },
            ],
            otherScenes: [],
            results: [],
            mulPos: [],
            prizeScenes: [],
            curGameMod: "bg",
            curGameModParam: {
              historyComponents: ["fg-start", "fg-spin"],
              respinComponents: ["fg-start"],
              mapComponents: {
                "fg-start": {
                  triggerRespinNum: [],
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  lastRespinNum: 9,
                  totalRespinNum: 0,
                  curRespinNum: 21,
                  curAddRespinNum: 30,
                  totalCoinWin: 350175,
                  totalCashWin: 350175,
                  retriggerAddRespinNum: 0,
                  lastTriggerNum: 0,
                  curTriggerNum: 0,
                  "@type": "type.googleapis.com/sgc7pb.RespinData",
                },
                "fg-spin": {
                  basicComponentData: {
                    usedScenes: [
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                      0, 0,
                    ],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  reelSetIndex: 0,
                  "@type": "type.googleapis.com/sgc7pb.WeightReelsData",
                },
              },
              mapVals: {
                1: 5,
                2: 3,
                6: 10,
                7: 0,
                100: 1,
                101: 1,
                102: 1,
                103: 1,
              },
              mapStrVals: {},
              firstComponent: "fg-start",
              nextStepFirstComponent: "fg-start",
              "@type": "type.googleapis.com/sgc7pb.GameParam",
            },
            nextGameMod: "bg",
            curIndex: 0,
            parentIndex: 0,
            modType: "",
            prizeCoinWin: 0,
            prizeCashWin: 0,
            jackpotCoinWin: 0,
            jackpotCashWin: 0,
            jackpotType: 0,
          },
        },
        {
          coinWin: 0,
          cashWin: 0,
          clientData: {
            scenes: [
              {
                values: [
                  {
                    values: [8, 1, 7],
                  },
                  {
                    values: [6, 2, 10],
                  },
                  {
                    values: [10, 3, 6],
                  },
                  {
                    values: [4, 10, 12],
                  },
                  {
                    values: [8, 4, 11],
                  },
                ],
                indexes: [],
                validRow: [],
              },
            ],
            otherScenes: [],
            results: [],
            mulPos: [],
            prizeScenes: [],
            curGameMod: "bg",
            curGameModParam: {
              historyComponents: ["fg-start", "fg-spin"],
              respinComponents: ["fg-start"],
              mapComponents: {
                "fg-start": {
                  triggerRespinNum: [],
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  lastRespinNum: 8,
                  totalRespinNum: 0,
                  curRespinNum: 22,
                  curAddRespinNum: 30,
                  totalCoinWin: 350175,
                  totalCashWin: 350175,
                  retriggerAddRespinNum: 0,
                  lastTriggerNum: 0,
                  curTriggerNum: 0,
                  "@type": "type.googleapis.com/sgc7pb.RespinData",
                },
                "fg-spin": {
                  basicComponentData: {
                    usedScenes: [
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                      0, 0, 0,
                    ],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  reelSetIndex: 1,
                  "@type": "type.googleapis.com/sgc7pb.WeightReelsData",
                },
              },
              mapVals: {
                1: 5,
                2: 3,
                6: 10,
                7: 0,
                100: 1,
                101: 1,
                102: 1,
                103: 1,
              },
              mapStrVals: {},
              firstComponent: "fg-start",
              nextStepFirstComponent: "fg-start",
              "@type": "type.googleapis.com/sgc7pb.GameParam",
            },
            nextGameMod: "bg",
            curIndex: 0,
            parentIndex: 0,
            modType: "",
            prizeCoinWin: 0,
            prizeCashWin: 0,
            jackpotCoinWin: 0,
            jackpotCashWin: 0,
            jackpotType: 0,
          },
        },
        {
          coinWin: 840,
          cashWin: 840,
          clientData: {
            scenes: [
              {
                values: [
                  {
                    values: [5, 10, 0],
                  },
                  {
                    values: [7, 9, 1],
                  },
                  {
                    values: [13, 10, 4],
                  },
                  {
                    values: [12, 7, 5],
                  },
                  {
                    values: [4, 9, 6],
                  },
                ],
                indexes: [],
                validRow: [],
              },
            ],
            otherScenes: [],
            results: [
              {
                pos: [0, 2, 1, 2],
                type: 2,
                lineIndex: 2,
                symbol: 1,
                mul: 2,
                coinWin: 420,
                cashWin: 420,
                otherMul: 3,
                wilds: 1,
                symbolNums: 2,
                value: 0,
              },
              {
                pos: [0, 2, 1, 2],
                type: 2,
                lineIndex: 6,
                symbol: 1,
                mul: 2,
                coinWin: 420,
                cashWin: 420,
                otherMul: 3,
                wilds: 1,
                symbolNums: 2,
                value: 0,
              },
            ],
            mulPos: [],
            prizeScenes: [],
            curGameMod: "bg",
            curGameModParam: {
              historyComponents: ["fg-start", "fg-spin", "fg-paylines"],
              respinComponents: ["fg-start"],
              mapComponents: {
                "fg-spin": {
                  basicComponentData: {
                    usedScenes: [
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                      0, 0, 0, 0,
                    ],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  reelSetIndex: 1,
                  "@type": "type.googleapis.com/sgc7pb.WeightReelsData",
                },
                "fg-paylines": {
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [0, 1],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 840,
                    cashWin: 840,
                    targetScene: -1,
                    runIndex: 0,
                  },
                  nextComponent: "",
                  symbolNum: 4,
                  wildNum: 2,
                  respinNum: 0,
                  wins: 840,
                  winMulti: 3,
                  "@type": "type.googleapis.com/sgc7pb.LinesTriggerData",
                },
                "fg-start": {
                  triggerRespinNum: [],
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  lastRespinNum: 7,
                  totalRespinNum: 0,
                  curRespinNum: 23,
                  curAddRespinNum: 30,
                  totalCoinWin: 351015,
                  totalCashWin: 351015,
                  retriggerAddRespinNum: 0,
                  lastTriggerNum: 0,
                  curTriggerNum: 0,
                  "@type": "type.googleapis.com/sgc7pb.RespinData",
                },
              },
              mapVals: {
                1: 5,
                2: 3,
                6: 10,
                7: 0,
                100: 1,
                101: 1,
                102: 1,
                103: 1,
              },
              mapStrVals: {},
              firstComponent: "fg-start",
              nextStepFirstComponent: "fg-start",
              "@type": "type.googleapis.com/sgc7pb.GameParam",
            },
            nextGameMod: "bg",
            curIndex: 0,
            parentIndex: 0,
            modType: "",
            prizeCoinWin: 0,
            prizeCashWin: 0,
            jackpotCoinWin: 0,
            jackpotCashWin: 0,
            jackpotType: 0,
          },
        },
        {
          coinWin: 0,
          cashWin: 0,
          clientData: {
            scenes: [
              {
                values: [
                  {
                    values: [5, 10, 0],
                  },
                  {
                    values: [13, 4, 7],
                  },
                  {
                    values: [4, 2, 6],
                  },
                  {
                    values: [8, 9, 1],
                  },
                  {
                    values: [8, 5, 9],
                  },
                ],
                indexes: [],
                validRow: [],
              },
            ],
            otherScenes: [],
            results: [],
            mulPos: [],
            prizeScenes: [],
            curGameMod: "bg",
            curGameModParam: {
              historyComponents: ["fg-start", "fg-spin"],
              respinComponents: ["fg-start"],
              mapComponents: {
                "fg-spin": {
                  basicComponentData: {
                    usedScenes: [
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                      0, 0, 0, 0, 0,
                    ],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  reelSetIndex: 1,
                  "@type": "type.googleapis.com/sgc7pb.WeightReelsData",
                },
                "fg-start": {
                  triggerRespinNum: [],
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  lastRespinNum: 6,
                  totalRespinNum: 0,
                  curRespinNum: 24,
                  curAddRespinNum: 30,
                  totalCoinWin: 351015,
                  totalCashWin: 351015,
                  retriggerAddRespinNum: 0,
                  lastTriggerNum: 0,
                  curTriggerNum: 0,
                  "@type": "type.googleapis.com/sgc7pb.RespinData",
                },
              },
              mapVals: {
                1: 5,
                2: 3,
                6: 10,
                7: 0,
                100: 1,
                101: 1,
                102: 1,
                103: 1,
              },
              mapStrVals: {},
              firstComponent: "fg-start",
              nextStepFirstComponent: "fg-start",
              "@type": "type.googleapis.com/sgc7pb.GameParam",
            },
            nextGameMod: "bg",
            curIndex: 0,
            parentIndex: 0,
            modType: "",
            prizeCoinWin: 0,
            prizeCashWin: 0,
            jackpotCoinWin: 0,
            jackpotCashWin: 0,
            jackpotType: 0,
          },
        },
        {
          coinWin: 0,
          cashWin: 0,
          clientData: {
            scenes: [
              {
                values: [
                  {
                    values: [10, 9, 2],
                  },
                  {
                    values: [1, 8, 3],
                  },
                  {
                    values: [10, 3, 7],
                  },
                  {
                    values: [10, 4, 6],
                  },
                  {
                    values: [3, 8, 4],
                  },
                ],
                indexes: [],
                validRow: [],
              },
            ],
            otherScenes: [],
            results: [],
            mulPos: [],
            prizeScenes: [],
            curGameMod: "bg",
            curGameModParam: {
              historyComponents: ["fg-start", "fg-spin"],
              respinComponents: ["fg-start"],
              mapComponents: {
                "fg-start": {
                  triggerRespinNum: [],
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  lastRespinNum: 5,
                  totalRespinNum: 0,
                  curRespinNum: 25,
                  curAddRespinNum: 30,
                  totalCoinWin: 351015,
                  totalCashWin: 351015,
                  retriggerAddRespinNum: 0,
                  lastTriggerNum: 0,
                  curTriggerNum: 0,
                  "@type": "type.googleapis.com/sgc7pb.RespinData",
                },
                "fg-spin": {
                  basicComponentData: {
                    usedScenes: [
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                      0, 0, 0, 0, 0, 0,
                    ],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  reelSetIndex: 1,
                  "@type": "type.googleapis.com/sgc7pb.WeightReelsData",
                },
              },
              mapVals: {
                1: 5,
                2: 3,
                6: 10,
                7: 0,
                100: 1,
                101: 1,
                102: 1,
                103: 1,
              },
              mapStrVals: {},
              firstComponent: "fg-start",
              nextStepFirstComponent: "fg-start",
              "@type": "type.googleapis.com/sgc7pb.GameParam",
            },
            nextGameMod: "bg",
            curIndex: 0,
            parentIndex: 0,
            modType: "",
            prizeCoinWin: 0,
            prizeCashWin: 0,
            jackpotCoinWin: 0,
            jackpotCashWin: 0,
            jackpotType: 0,
          },
        },
        {
          coinWin: 0,
          cashWin: 0,
          clientData: {
            scenes: [
              {
                values: [
                  {
                    values: [6, 13, 13],
                  },
                  {
                    values: [12, 11, 4],
                  },
                  {
                    values: [9, 4, 2],
                  },
                  {
                    values: [6, 3, 7],
                  },
                  {
                    values: [10, 7, 6],
                  },
                ],
                indexes: [],
                validRow: [],
              },
            ],
            otherScenes: [],
            results: [],
            mulPos: [],
            prizeScenes: [],
            curGameMod: "bg",
            curGameModParam: {
              historyComponents: ["fg-start", "fg-spin"],
              respinComponents: ["fg-start"],
              mapComponents: {
                "fg-start": {
                  triggerRespinNum: [],
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  lastRespinNum: 4,
                  totalRespinNum: 0,
                  curRespinNum: 26,
                  curAddRespinNum: 30,
                  totalCoinWin: 351015,
                  totalCashWin: 351015,
                  retriggerAddRespinNum: 0,
                  lastTriggerNum: 0,
                  curTriggerNum: 0,
                  "@type": "type.googleapis.com/sgc7pb.RespinData",
                },
                "fg-spin": {
                  basicComponentData: {
                    usedScenes: [
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                      0, 0, 0, 0, 0, 0, 0,
                    ],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  reelSetIndex: 1,
                  "@type": "type.googleapis.com/sgc7pb.WeightReelsData",
                },
              },
              mapVals: {
                1: 5,
                2: 3,
                6: 10,
                7: 0,
                100: 1,
                101: 1,
                102: 1,
                103: 1,
              },
              mapStrVals: {},
              firstComponent: "fg-start",
              nextStepFirstComponent: "fg-start",
              "@type": "type.googleapis.com/sgc7pb.GameParam",
            },
            nextGameMod: "bg",
            curIndex: 0,
            parentIndex: 0,
            modType: "",
            prizeCoinWin: 0,
            prizeCashWin: 0,
            jackpotCoinWin: 0,
            jackpotCashWin: 0,
            jackpotType: 0,
          },
        },
        {
          coinWin: 0,
          cashWin: 0,
          clientData: {
            scenes: [
              {
                values: [
                  {
                    values: [8, 1, 7],
                  },
                  {
                    values: [10, 12, 11],
                  },
                  {
                    values: [6, 4, 9],
                  },
                  {
                    values: [2, 11, 6],
                  },
                  {
                    values: [9, 6, 7],
                  },
                ],
                indexes: [],
                validRow: [],
              },
            ],
            otherScenes: [],
            results: [],
            mulPos: [],
            prizeScenes: [],
            curGameMod: "bg",
            curGameModParam: {
              historyComponents: ["fg-start", "fg-spin"],
              respinComponents: ["fg-start"],
              mapComponents: {
                "fg-spin": {
                  basicComponentData: {
                    usedScenes: [
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                      0, 0, 0, 0, 0, 0, 0, 0,
                    ],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  reelSetIndex: 1,
                  "@type": "type.googleapis.com/sgc7pb.WeightReelsData",
                },
                "fg-start": {
                  triggerRespinNum: [],
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  lastRespinNum: 3,
                  totalRespinNum: 0,
                  curRespinNum: 27,
                  curAddRespinNum: 30,
                  totalCoinWin: 351015,
                  totalCashWin: 351015,
                  retriggerAddRespinNum: 0,
                  lastTriggerNum: 0,
                  curTriggerNum: 0,
                  "@type": "type.googleapis.com/sgc7pb.RespinData",
                },
              },
              mapVals: {
                1: 5,
                2: 3,
                6: 10,
                7: 0,
                100: 1,
                101: 1,
                102: 1,
                103: 1,
              },
              mapStrVals: {},
              firstComponent: "fg-start",
              nextStepFirstComponent: "fg-start",
              "@type": "type.googleapis.com/sgc7pb.GameParam",
            },
            nextGameMod: "bg",
            curIndex: 0,
            parentIndex: 0,
            modType: "",
            prizeCoinWin: 0,
            prizeCashWin: 0,
            jackpotCoinWin: 0,
            jackpotCashWin: 0,
            jackpotType: 0,
          },
        },
        {
          coinWin: 960,
          cashWin: 960,
          clientData: {
            scenes: [
              {
                values: [
                  {
                    values: [0, 8, 11],
                  },
                  {
                    values: [2, 10, 5],
                  },
                  {
                    values: [12, 8, 9],
                  },
                  {
                    values: [7, 5, 11],
                  },
                  {
                    values: [8, 1, 11],
                  },
                ],
                indexes: [],
                validRow: [],
              },
            ],
            otherScenes: [],
            results: [
              {
                pos: [0, 0, 1, 0],
                type: 2,
                lineIndex: 1,
                symbol: 2,
                mul: 2,
                coinWin: 480,
                cashWin: 480,
                otherMul: 3,
                wilds: 1,
                symbolNums: 2,
                value: 0,
              },
              {
                pos: [0, 0, 1, 0],
                type: 2,
                lineIndex: 5,
                symbol: 2,
                mul: 2,
                coinWin: 480,
                cashWin: 480,
                otherMul: 3,
                wilds: 1,
                symbolNums: 2,
                value: 0,
              },
            ],
            mulPos: [],
            prizeScenes: [],
            curGameMod: "bg",
            curGameModParam: {
              historyComponents: ["fg-start", "fg-spin", "fg-paylines"],
              respinComponents: ["fg-start"],
              mapComponents: {
                "fg-start": {
                  triggerRespinNum: [],
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  lastRespinNum: 2,
                  totalRespinNum: 0,
                  curRespinNum: 28,
                  curAddRespinNum: 30,
                  totalCoinWin: 351975,
                  totalCashWin: 351975,
                  retriggerAddRespinNum: 0,
                  lastTriggerNum: 0,
                  curTriggerNum: 0,
                  "@type": "type.googleapis.com/sgc7pb.RespinData",
                },
                "fg-spin": {
                  basicComponentData: {
                    usedScenes: [
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                      0, 0, 0, 0, 0, 0, 0, 0, 0,
                    ],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  reelSetIndex: 1,
                  "@type": "type.googleapis.com/sgc7pb.WeightReelsData",
                },
                "fg-paylines": {
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [0, 1],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 960,
                    cashWin: 960,
                    targetScene: -1,
                    runIndex: 0,
                  },
                  nextComponent: "",
                  symbolNum: 4,
                  wildNum: 2,
                  respinNum: 0,
                  wins: 960,
                  winMulti: 3,
                  "@type": "type.googleapis.com/sgc7pb.LinesTriggerData",
                },
              },
              mapVals: {
                1: 5,
                2: 3,
                6: 10,
                7: 0,
                100: 1,
                101: 1,
                102: 1,
                103: 1,
              },
              mapStrVals: {},
              firstComponent: "fg-start",
              nextStepFirstComponent: "fg-start",
              "@type": "type.googleapis.com/sgc7pb.GameParam",
            },
            nextGameMod: "bg",
            curIndex: 0,
            parentIndex: 0,
            modType: "",
            prizeCoinWin: 0,
            prizeCashWin: 0,
            jackpotCoinWin: 0,
            jackpotCashWin: 0,
            jackpotType: 0,
          },
        },
        {
          coinWin: 0,
          cashWin: 0,
          clientData: {
            scenes: [
              {
                values: [
                  {
                    values: [7, 10, 9],
                  },
                  {
                    values: [7, 0, 6],
                  },
                  {
                    values: [12, 8, 9],
                  },
                  {
                    values: [1, 4, 10],
                  },
                  {
                    values: [6, 0, 7],
                  },
                ],
                indexes: [],
                validRow: [],
              },
            ],
            otherScenes: [],
            results: [],
            mulPos: [],
            prizeScenes: [],
            curGameMod: "bg",
            curGameModParam: {
              historyComponents: ["fg-start", "fg-spin"],
              respinComponents: ["fg-start"],
              mapComponents: {
                "fg-start": {
                  triggerRespinNum: [],
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  lastRespinNum: 1,
                  totalRespinNum: 0,
                  curRespinNum: 29,
                  curAddRespinNum: 30,
                  totalCoinWin: 351975,
                  totalCashWin: 351975,
                  retriggerAddRespinNum: 0,
                  lastTriggerNum: 0,
                  curTriggerNum: 0,
                  "@type": "type.googleapis.com/sgc7pb.RespinData",
                },
                "fg-spin": {
                  basicComponentData: {
                    usedScenes: [
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    ],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  reelSetIndex: 0,
                  "@type": "type.googleapis.com/sgc7pb.WeightReelsData",
                },
              },
              mapVals: {
                1: 5,
                2: 3,
                6: 10,
                7: 0,
                100: 1,
                101: 1,
                102: 1,
                103: 1,
              },
              mapStrVals: {},
              firstComponent: "fg-start",
              nextStepFirstComponent: "fg-start",
              "@type": "type.googleapis.com/sgc7pb.GameParam",
            },
            nextGameMod: "bg",
            curIndex: 0,
            parentIndex: 0,
            modType: "",
            prizeCoinWin: 0,
            prizeCashWin: 0,
            jackpotCoinWin: 0,
            jackpotCashWin: 0,
            jackpotType: 0,
          },
        },
        {
          coinWin: 0,
          cashWin: 0,
          clientData: {
            scenes: [
              {
                values: [
                  {
                    values: [8, 1, 7],
                  },
                  {
                    values: [8, 5, 10],
                  },
                  {
                    values: [10, 3, 6],
                  },
                  {
                    values: [6, 1, 7],
                  },
                  {
                    values: [7, 6, 0],
                  },
                ],
                indexes: [],
                validRow: [],
              },
            ],
            otherScenes: [],
            results: [],
            mulPos: [],
            prizeScenes: [],
            curGameMod: "bg",
            curGameModParam: {
              historyComponents: ["fg-start", "fg-spin"],
              respinComponents: [],
              mapComponents: {
                "fg-start": {
                  triggerRespinNum: [],
                  basicComponentData: {
                    usedScenes: [],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  lastRespinNum: 0,
                  totalRespinNum: 0,
                  curRespinNum: 30,
                  curAddRespinNum: 30,
                  totalCoinWin: 351975,
                  totalCashWin: 351975,
                  retriggerAddRespinNum: 0,
                  lastTriggerNum: 0,
                  curTriggerNum: 0,
                  "@type": "type.googleapis.com/sgc7pb.RespinData",
                },
                "fg-spin": {
                  basicComponentData: {
                    usedScenes: [
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    ],
                    usedOtherScenes: [],
                    usedResults: [],
                    usedPrizeScenes: [],
                    srcScenes: [],
                    coinWin: 0,
                    cashWin: 0,
                    targetScene: 0,
                    runIndex: 0,
                  },
                  reelSetIndex: 1,
                  "@type": "type.googleapis.com/sgc7pb.WeightReelsData",
                },
              },
              mapVals: {
                1: 5,
                2: 3,
                6: 10,
                7: 0,
                100: 1,
                101: 1,
                102: 1,
                103: 1,
              },
              mapStrVals: {},
              firstComponent: "fg-start",
              nextStepFirstComponent: "",
              "@type": "type.googleapis.com/sgc7pb.GameParam",
            },
            nextGameMod: "bg",
            curIndex: 0,
            parentIndex: 0,
            modType: "",
            prizeCoinWin: 0,
            prizeCashWin: 0,
            jackpotCoinWin: 0,
            jackpotCashWin: 0,
            jackpotType: 0,
          },
        },
      ],
      nextCommands: [],
      nextCommandParams: [],
      playerState: {
        public: {
          json: '{"curgamemod":"bg","nextm":0}',
          "@type": "type.googleapis.com/sgc7pb.BasicPlayerPublicState2",
        },
      },
      finished: true,
      stake: null,
      playStartTime: 1710994954115,
    },
    playIndex: -1,
    bet: 1,
    lines: 10,
    totalwin: 352065,
    playwin: 0,
    maxWinLimit: 0,
  },
};

orbs = true;
// var msgdata2 = {
//   "msgid": "gamemoduleinfo",
//   "gamemodulename": "FpsLdz-8FmHTBy1gQNZTE",
//   "gameid": 69007,
//   "gmi": {
//     "defaultScene": {
//       "values": [
//         {
//           "values": [
//             1,
//             2,
//             3
//           ]
//         },
//         {
//           "values": [
//             4,
//             5,
//             6
//           ]
//         },
//         {
//           "values": [
//             3,
//             2,
//             1
//           ]
//         },
//         {
//           "values": [
//             4,
//             5,
//             6
//           ]
//         },
//         {
//           "values": [
//             7,
//             8,
//             9
//           ]
//         }
//       ],
//       "indexes": [],
//       "validRow": []
//     },
//     "replyPlay": {
//       "randomNumbers": [
//         39,
//         25,
//         6,
//         33,
//         35,
//         4274,
//         15,
//         6,
//         14,
//         17,
//         1,
//         0,
//         32,
//         19,
//         20,
//         10,
//         18,
//         7,
//         3,
//         0,
//         0,
//         14,
//         22,
//         4,
//         35,
//         0,
//         8,
//         27,
//         17,
//         5,
//         12,
//         3,
//         19,
//         13,
//         20,
//         37,
//         18,
//         35,
//         33,
//         31,
//         8,
//         5,
//         34,
//         16,
//         28,
//         15,
//         2152,
//         39,
//         19,
//         27,
//         29,
//         39,
//         39,
//         13,
//         32,
//         8,
//         31,
//         17,
//         36,
//         15,
//         21,
//         34,
//         21,
//         11,
//         11,
//         5,
//         25,
//         21,
//         3,
//         30,
//         3,
//         37,
//         23,
//         27,
//         25,
//         25,
//         7,
//         11,
//         20,
//         2,
//         33,
//         19,
//         11,
//         26,
//         6,
//         9,
//         2,
//         7,
//         27,
//         22,
//         20,
//         31,
//         4,
//         5,
//         10,
//         32,
//         27,
//         23,
//         3,
//         25,
//         10,
//         32,
//         25,
//         27,
//         26,
//         12,
//         29
//       ],
//       "results": [
//         {
//           "coinWin": 50,
//           "cashWin": 50,
//           "clientData": {
//             "scenes": [
//               {
//                 "values": [
//                   {
//                     "values": [
//                       2,
//                       0,
//                       9
//                     ]
//                   },
//                   {
//                     "values": [
//                       9,
//                       4,
//                       0
//                     ]
//                   },
//                   {
//                     "values": [
//                       4,
//                       9,
//                       0
//                     ]
//                   },
//                   {
//                     "values": [
//                       6,
//                       3,
//                       4
//                     ]
//                   },
//                   {
//                     "values": [
//                       4,
//                       3,
//                       5
//                     ]
//                   }
//                 ],
//                 "indexes": [],
//                 "validRow": []
//               }
//             ],
//             "otherScenes": [],
//             "results": [
//               {
//                 "pos": [
//                   0,
//                   2,
//                   1,
//                   2,
//                   2,
//                   2
//                 ],
//                 "type": 2,
//                 "lineIndex": 2,
//                 "symbol": 0,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 1,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   2,
//                   1,
//                   1,
//                   2,
//                   0
//                 ],
//                 "type": 2,
//                 "lineIndex": 4,
//                 "symbol": 4,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 1,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   0,
//                   1,
//                   0,
//                   2,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 5,
//                 "symbol": 2,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 2,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   2,
//                   1,
//                   2,
//                   2,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 6,
//                 "symbol": 0,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 2,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   1,
//                   1,
//                   2,
//                   2,
//                   2
//                 ],
//                 "type": 2,
//                 "lineIndex": 7,
//                 "symbol": 0,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   1,
//                   1,
//                   0,
//                   2,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 9,
//                 "symbol": 0,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 2,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   2,
//                   1,
//                   0,
//                   2,
//                   1
//                 ],
//                 "type": 9,
//                 "lineIndex": -1,
//                 "symbol": 9,
//                 "mul": 20,
//                 "coinWin": 20,
//                 "cashWin": 20,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 10
//               }
//             ],
//             "mulPos": [],
//             "prizeScenes": [],
//             "curGameMod": "bg",
//             "curGameModParam": {
//               "historyComponents": [
//                 "bg-spin",
//                 "bg-paylines",
//                 "bg-paysc",
//                 "bg-rollsym"
//               ],
//               "respinComponents": [
//                 "fg-start"
//               ],
//               "mapComponents": {
//                 "bg-spin": {
//                   "basicComponentData": {
//                     "usedScenes": [
//                       0
//                     ],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
//                 },
//                 "bg-paylines": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [
//                       0,
//                       1,
//                       2,
//                       3,
//                       4,
//                       5
//                     ],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 30,
//                     "cashWin": 30,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 18,
//                   "wildNum": 8,
//                   "respinNum": 0,
//                   "wins": 30,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.LinesTriggerData"
//                 },
//                 "bg-paysc": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [
//                       6
//                     ],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 20,
//                     "cashWin": 20,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "bg-rollsym",
//                   "symbolNum": 3,
//                   "wildNum": 0,
//                   "respinNum": 10,
//                   "wins": 20,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 },
//                 "bg-rollsym": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "symbolCode": 7,
//                   "@type": "type.googleapis.com/sgc7pb.RollSymbolData"
//                 },
//                 "fg-start": {
//                   "triggerRespinNum": [],
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "lastRespinNum": 10,
//                   "totalRespinNum": 0,
//                   "curRespinNum": 0,
//                   "curAddRespinNum": 10,
//                   "totalCoinWin": 0,
//                   "totalCashWin": 0,
//                   "retriggerAddRespinNum": 0,
//                   "lastTriggerNum": 0,
//                   "curTriggerNum": 0,
//                   "@type": "type.googleapis.com/sgc7pb.RespinData"
//                 }
//               },
//               "mapVals": {
//                 "1": 5,
//                 "2": 3,
//                 "6": 10,
//                 "7": 0,
//                 "100": 1,
//                 "101": 1,
//                 "102": 1,
//                 "103": 1
//               },
//               "mapStrVals": {},
//               "firstComponent": "",
//               "nextStepFirstComponent": "fg-start",
//               "@type": "type.googleapis.com/sgc7pb.GameParam"
//             },
//             "nextGameMod": "bg",
//             "curIndex": 0,
//             "parentIndex": 0,
//             "modType": "",
//             "prizeCoinWin": 0,
//             "prizeCashWin": 0,
//             "jackpotCoinWin": 0,
//             "jackpotCashWin": 0,
//             "jackpotType": 0
//           }
//         },
//         {
//           "coinWin": 20,
//           "cashWin": 20,
//           "clientData": {
//             "scenes": [
//               {
//                 "values": [
//                   {
//                     "values": [
//                       8,
//                       0,
//                       1
//                     ]
//                   },
//                   {
//                     "values": [
//                       8,
//                       0,
//                       4
//                     ]
//                   },
//                   {
//                     "values": [
//                       1,
//                       6,
//                       3
//                     ]
//                   },
//                   {
//                     "values": [
//                       8,
//                       4,
//                       2
//                     ]
//                   },
//                   {
//                     "values": [
//                       7,
//                       4,
//                       6
//                     ]
//                   }
//                 ],
//                 "indexes": [],
//                 "validRow": []
//               }
//             ],
//             "otherScenes": [],
//             "results": [
//               {
//                 "pos": [
//                   0,
//                   0,
//                   1,
//                   0
//                 ],
//                 "type": 2,
//                 "lineIndex": 1,
//                 "symbol": 8,
//                 "mul": 10,
//                 "coinWin": 10,
//                 "cashWin": 10,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   0,
//                   1,
//                   0
//                 ],
//                 "type": 2,
//                 "lineIndex": 5,
//                 "symbol": 8,
//                 "mul": 10,
//                 "coinWin": 10,
//                 "cashWin": 10,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               }
//             ],
//             "mulPos": [],
//             "prizeScenes": [],
//             "curGameMod": "bg",
//             "curGameModParam": {
//               "historyComponents": [
//                 "fg-start",
//                 "fg-spin",
//                 "fg-paylines",
//                 "fg-syms",
//                 "fg-syms:0>B/fg-checkbookof",
//                 "fg-paysc"
//               ],
//               "respinComponents": [
//                 "fg-start"
//               ],
//               "mapComponents": {
//                 "fg-start": {
//                   "triggerRespinNum": [],
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "lastRespinNum": 9,
//                   "totalRespinNum": 0,
//                   "curRespinNum": 1,
//                   "curAddRespinNum": 10,
//                   "totalCoinWin": 20,
//                   "totalCashWin": 20,
//                   "retriggerAddRespinNum": 0,
//                   "lastTriggerNum": 0,
//                   "curTriggerNum": 0,
//                   "@type": "type.googleapis.com/sgc7pb.RespinData"
//                 },
//                 "fg-spin": {
//                   "basicComponentData": {
//                     "usedScenes": [
//                       0
//                     ],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
//                 },
//                 "fg-paylines": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [
//                       0,
//                       1
//                     ],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 20,
//                     "cashWin": 20,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 4,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 20,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.LinesTriggerData"
//                 },
//                 "fg-syms": {
//                   "symbolCodes": [
//                     7
//                   ],
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.SymbolCollection2Data"
//                 },
//                 "fg-syms:0>B/fg-checkbookof": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 0,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 },
//                 "fg-paysc": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 0,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 }
//               },
//               "mapVals": {
//                 "1": 5,
//                 "2": 3,
//                 "6": 10,
//                 "7": 0,
//                 "100": 1,
//                 "101": 1,
//                 "102": 1,
//                 "103": 1
//               },
//               "mapStrVals": {},
//               "firstComponent": "fg-start",
//               "nextStepFirstComponent": "fg-start",
//               "@type": "type.googleapis.com/sgc7pb.GameParam"
//             },
//             "nextGameMod": "bg",
//             "curIndex": 0,
//             "parentIndex": 0,
//             "modType": "",
//             "prizeCoinWin": 0,
//             "prizeCashWin": 0,
//             "jackpotCoinWin": 0,
//             "jackpotCashWin": 0,
//             "jackpotType": 0
//           }
//         },
//         {
//           "coinWin": 0,
//           "cashWin": 0,
//           "clientData": {
//             "scenes": [
//               {
//                 "values": [
//                   {
//                     "values": [
//                       2,
//                       0,
//                       3
//                     ]
//                   },
//                   {
//                     "values": [
//                       4,
//                       1,
//                       2
//                     ]
//                   },
//                   {
//                     "values": [
//                       6,
//                       1,
//                       5
//                     ]
//                   },
//                   {
//                     "values": [
//                       6,
//                       3,
//                       2
//                     ]
//                   },
//                   {
//                     "values": [
//                       6,
//                       4,
//                       8
//                     ]
//                   }
//                 ],
//                 "indexes": [],
//                 "validRow": []
//               }
//             ],
//             "otherScenes": [],
//             "results": [],
//             "mulPos": [],
//             "prizeScenes": [],
//             "curGameMod": "bg",
//             "curGameModParam": {
//               "historyComponents": [
//                 "fg-start",
//                 "fg-spin",
//                 "fg-paylines",
//                 "fg-syms",
//                 "fg-syms:0>B/fg-checkbookof",
//                 "fg-paysc"
//               ],
//               "respinComponents": [
//                 "fg-start"
//               ],
//               "mapComponents": {
//                 "fg-start": {
//                   "triggerRespinNum": [],
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "lastRespinNum": 8,
//                   "totalRespinNum": 0,
//                   "curRespinNum": 2,
//                   "curAddRespinNum": 10,
//                   "totalCoinWin": 20,
//                   "totalCashWin": 20,
//                   "retriggerAddRespinNum": 0,
//                   "lastTriggerNum": 0,
//                   "curTriggerNum": 0,
//                   "@type": "type.googleapis.com/sgc7pb.RespinData"
//                 },
//                 "fg-spin": {
//                   "basicComponentData": {
//                     "usedScenes": [
//                       0,
//                       0
//                     ],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
//                 },
//                 "fg-paylines": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 0,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.LinesTriggerData"
//                 },
//                 "fg-syms": {
//                   "symbolCodes": [
//                     7
//                   ],
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.SymbolCollection2Data"
//                 },
//                 "fg-syms:0>B/fg-checkbookof": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 0,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 },
//                 "fg-paysc": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 0,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 }
//               },
//               "mapVals": {
//                 "1": 5,
//                 "2": 3,
//                 "6": 10,
//                 "7": 0,
//                 "100": 1,
//                 "101": 1,
//                 "102": 1,
//                 "103": 1
//               },
//               "mapStrVals": {},
//               "firstComponent": "fg-start",
//               "nextStepFirstComponent": "fg-start",
//               "@type": "type.googleapis.com/sgc7pb.GameParam"
//             },
//             "nextGameMod": "bg",
//             "curIndex": 0,
//             "parentIndex": 0,
//             "modType": "",
//             "prizeCoinWin": 0,
//             "prizeCashWin": 0,
//             "jackpotCoinWin": 0,
//             "jackpotCashWin": 0,
//             "jackpotType": 0
//           }
//         },
//         {
//           "coinWin": 0,
//           "cashWin": 0,
//           "clientData": {
//             "scenes": [
//               {
//                 "values": [
//                   {
//                     "values": [
//                       3,
//                       2,
//                       0
//                     ]
//                   },
//                   {
//                     "values": [
//                       0,
//                       4,
//                       3
//                     ]
//                   },
//                   {
//                     "values": [
//                       3,
//                       2,
//                       6
//                     ]
//                   },
//                   {
//                     "values": [
//                       5,
//                       1,
//                       0
//                     ]
//                   },
//                   {
//                     "values": [
//                       1,
//                       7,
//                       4
//                     ]
//                   }
//                 ],
//                 "indexes": [],
//                 "validRow": []
//               }
//             ],
//             "otherScenes": [],
//             "results": [],
//             "mulPos": [],
//             "prizeScenes": [],
//             "curGameMod": "bg",
//             "curGameModParam": {
//               "historyComponents": [
//                 "fg-start",
//                 "fg-spin",
//                 "fg-paylines",
//                 "fg-syms",
//                 "fg-syms:0>B/fg-checkbookof",
//                 "fg-paysc"
//               ],
//               "respinComponents": [
//                 "fg-start"
//               ],
//               "mapComponents": {
//                 "fg-start": {
//                   "triggerRespinNum": [],
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "lastRespinNum": 7,
//                   "totalRespinNum": 0,
//                   "curRespinNum": 3,
//                   "curAddRespinNum": 10,
//                   "totalCoinWin": 20,
//                   "totalCashWin": 20,
//                   "retriggerAddRespinNum": 0,
//                   "lastTriggerNum": 0,
//                   "curTriggerNum": 0,
//                   "@type": "type.googleapis.com/sgc7pb.RespinData"
//                 },
//                 "fg-spin": {
//                   "basicComponentData": {
//                     "usedScenes": [
//                       0,
//                       0,
//                       0
//                     ],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
//                 },
//                 "fg-paylines": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 0,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.LinesTriggerData"
//                 },
//                 "fg-syms": {
//                   "symbolCodes": [
//                     7
//                   ],
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.SymbolCollection2Data"
//                 },
//                 "fg-syms:0>B/fg-checkbookof": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 0,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 },
//                 "fg-paysc": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 0,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 }
//               },
//               "mapVals": {
//                 "1": 5,
//                 "2": 3,
//                 "6": 10,
//                 "7": 0,
//                 "100": 1,
//                 "101": 1,
//                 "102": 1,
//                 "103": 1
//               },
//               "mapStrVals": {},
//               "firstComponent": "fg-start",
//               "nextStepFirstComponent": "fg-start",
//               "@type": "type.googleapis.com/sgc7pb.GameParam"
//             },
//             "nextGameMod": "bg",
//             "curIndex": 0,
//             "parentIndex": 0,
//             "modType": "",
//             "prizeCoinWin": 0,
//             "prizeCashWin": 0,
//             "jackpotCoinWin": 0,
//             "jackpotCashWin": 0,
//             "jackpotType": 0
//           }
//         },
//         {
//           "coinWin": 0,
//           "cashWin": 0,
//           "clientData": {
//             "scenes": [
//               {
//                 "values": [
//                   {
//                     "values": [
//                       1,
//                       8,
//                       0
//                     ]
//                   },
//                   {
//                     "values": [
//                       6,
//                       4,
//                       1
//                     ]
//                   },
//                   {
//                     "values": [
//                       2,
//                       6,
//                       3
//                     ]
//                   },
//                   {
//                     "values": [
//                       3,
//                       6,
//                       2
//                     ]
//                   },
//                   {
//                     "values": [
//                       1,
//                       7,
//                       4
//                     ]
//                   }
//                 ],
//                 "indexes": [],
//                 "validRow": []
//               }
//             ],
//             "otherScenes": [],
//             "results": [],
//             "mulPos": [],
//             "prizeScenes": [],
//             "curGameMod": "bg",
//             "curGameModParam": {
//               "historyComponents": [
//                 "fg-start",
//                 "fg-spin",
//                 "fg-paylines",
//                 "fg-syms",
//                 "fg-syms:0>B/fg-checkbookof",
//                 "fg-paysc"
//               ],
//               "respinComponents": [
//                 "fg-start"
//               ],
//               "mapComponents": {
//                 "fg-start": {
//                   "triggerRespinNum": [],
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "lastRespinNum": 6,
//                   "totalRespinNum": 0,
//                   "curRespinNum": 4,
//                   "curAddRespinNum": 10,
//                   "totalCoinWin": 20,
//                   "totalCashWin": 20,
//                   "retriggerAddRespinNum": 0,
//                   "lastTriggerNum": 0,
//                   "curTriggerNum": 0,
//                   "@type": "type.googleapis.com/sgc7pb.RespinData"
//                 },
//                 "fg-spin": {
//                   "basicComponentData": {
//                     "usedScenes": [
//                       0,
//                       0,
//                       0,
//                       0
//                     ],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
//                 },
//                 "fg-paylines": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 0,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.LinesTriggerData"
//                 },
//                 "fg-syms": {
//                   "symbolCodes": [
//                     7
//                   ],
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.SymbolCollection2Data"
//                 },
//                 "fg-syms:0>B/fg-checkbookof": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 0,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 },
//                 "fg-paysc": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 0,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 }
//               },
//               "mapVals": {
//                 "1": 5,
//                 "2": 3,
//                 "6": 10,
//                 "7": 0,
//                 "100": 1,
//                 "101": 1,
//                 "102": 1,
//                 "103": 1
//               },
//               "mapStrVals": {},
//               "firstComponent": "fg-start",
//               "nextStepFirstComponent": "fg-start",
//               "@type": "type.googleapis.com/sgc7pb.GameParam"
//             },
//             "nextGameMod": "bg",
//             "curIndex": 0,
//             "parentIndex": 0,
//             "modType": "",
//             "prizeCoinWin": 0,
//             "prizeCashWin": 0,
//             "jackpotCoinWin": 0,
//             "jackpotCashWin": 0,
//             "jackpotType": 0
//           }
//         },
//         {
//           "coinWin": 0,
//           "cashWin": 0,
//           "clientData": {
//             "scenes": [
//               {
//                 "values": [
//                   {
//                     "values": [
//                       0,
//                       2,
//                       1
//                     ]
//                   },
//                   {
//                     "values": [
//                       5,
//                       1,
//                       0
//                     ]
//                   },
//                   {
//                     "values": [
//                       7,
//                       4,
//                       6
//                     ]
//                   },
//                   {
//                     "values": [
//                       6,
//                       0,
//                       4
//                     ]
//                   },
//                   {
//                     "values": [
//                       8,
//                       2,
//                       3
//                     ]
//                   }
//                 ],
//                 "indexes": [],
//                 "validRow": []
//               }
//             ],
//             "otherScenes": [],
//             "results": [],
//             "mulPos": [],
//             "prizeScenes": [],
//             "curGameMod": "bg",
//             "curGameModParam": {
//               "historyComponents": [
//                 "fg-start",
//                 "fg-spin",
//                 "fg-paylines",
//                 "fg-syms",
//                 "fg-syms:0>B/fg-checkbookof",
//                 "fg-paysc"
//               ],
//               "respinComponents": [
//                 "fg-start"
//               ],
//               "mapComponents": {
//                 "fg-spin": {
//                   "basicComponentData": {
//                     "usedScenes": [
//                       0,
//                       0,
//                       0,
//                       0,
//                       0
//                     ],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
//                 },
//                 "fg-paylines": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 0,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.LinesTriggerData"
//                 },
//                 "fg-syms": {
//                   "symbolCodes": [
//                     7
//                   ],
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.SymbolCollection2Data"
//                 },
//                 "fg-syms:0>B/fg-checkbookof": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 0,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 },
//                 "fg-paysc": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 0,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 },
//                 "fg-start": {
//                   "triggerRespinNum": [],
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "lastRespinNum": 5,
//                   "totalRespinNum": 0,
//                   "curRespinNum": 5,
//                   "curAddRespinNum": 10,
//                   "totalCoinWin": 20,
//                   "totalCashWin": 20,
//                   "retriggerAddRespinNum": 0,
//                   "lastTriggerNum": 0,
//                   "curTriggerNum": 0,
//                   "@type": "type.googleapis.com/sgc7pb.RespinData"
//                 }
//               },
//               "mapVals": {
//                 "1": 5,
//                 "2": 3,
//                 "6": 10,
//                 "7": 0,
//                 "100": 1,
//                 "101": 1,
//                 "102": 1,
//                 "103": 1
//               },
//               "mapStrVals": {},
//               "firstComponent": "fg-start",
//               "nextStepFirstComponent": "fg-start",
//               "@type": "type.googleapis.com/sgc7pb.GameParam"
//             },
//             "nextGameMod": "bg",
//             "curIndex": 0,
//             "parentIndex": 0,
//             "modType": "",
//             "prizeCoinWin": 0,
//             "prizeCashWin": 0,
//             "jackpotCoinWin": 0,
//             "jackpotCashWin": 0,
//             "jackpotType": 0
//           }
//         },
//         {
//           "coinWin": 10,
//           "cashWin": 10,
//           "clientData": {
//             "scenes": [
//               {
//                 "values": [
//                   {
//                     "values": [
//                       4,
//                       0,
//                       1
//                     ]
//                   },
//                   {
//                     "values": [
//                       4,
//                       2,
//                       1
//                     ]
//                   },
//                   {
//                     "values": [
//                       4,
//                       1,
//                       6
//                     ]
//                   },
//                   {
//                     "values": [
//                       6,
//                       3,
//                       2
//                     ]
//                   },
//                   {
//                     "values": [
//                       7,
//                       3,
//                       9
//                     ]
//                   }
//                 ],
//                 "indexes": [],
//                 "validRow": []
//               },
//               {
//                 "values": [
//                   {
//                     "values": [
//                       4,
//                       0,
//                       1
//                     ]
//                   },
//                   {
//                     "values": [
//                       4,
//                       2,
//                       1
//                     ]
//                   },
//                   {
//                     "values": [
//                       4,
//                       1,
//                       6
//                     ]
//                   },
//                   {
//                     "values": [
//                       6,
//                       3,
//                       2
//                     ]
//                   },
//                   {
//                     "values": [
//                       7,
//                       7,
//                       7
//                     ]
//                   }
//                 ],
//                 "indexes": [],
//                 "validRow": []
//               }
//             ],
//             "otherScenes": [],
//             "results": [
//               {
//                 "pos": [
//                   0,
//                   0,
//                   1,
//                   0,
//                   2,
//                   0
//                 ],
//                 "type": 2,
//                 "lineIndex": 1,
//                 "symbol": 4,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   2,
//                   1,
//                   2,
//                   2,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 6,
//                 "symbol": 1,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               }
//             ],
//             "mulPos": [],
//             "prizeScenes": [],
//             "curGameMod": "bg",
//             "curGameModParam": {
//               "historyComponents": [
//                 "fg-start",
//                 "fg-spin",
//                 "fg-paylines",
//                 "fg-syms",
//                 "fg-syms:0>B/fg-checkbookof",
//                 "fg-syms:0>B/fg-bookof",
//                 "fg-syms:0>B/fg-replacereel",
//                 "fg-syms:0>B/fg-paybookof",
//                 "fg-paysc"
//               ],
//               "respinComponents": [
//                 "fg-start"
//               ],
//               "mapComponents": {
//                 "fg-start": {
//                   "triggerRespinNum": [],
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "lastRespinNum": 4,
//                   "totalRespinNum": 0,
//                   "curRespinNum": 6,
//                   "curAddRespinNum": 10,
//                   "totalCoinWin": 30,
//                   "totalCashWin": 30,
//                   "retriggerAddRespinNum": 0,
//                   "lastTriggerNum": 0,
//                   "curTriggerNum": 0,
//                   "@type": "type.googleapis.com/sgc7pb.RespinData"
//                 },
//                 "fg-spin": {
//                   "basicComponentData": {
//                     "usedScenes": [
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0
//                     ],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
//                 },
//                 "fg-paylines": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [
//                       0,
//                       1
//                     ],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 10,
//                     "cashWin": 10,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 6,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 10,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.LinesTriggerData"
//                 },
//                 "fg-syms": {
//                   "symbolCodes": [
//                     7
//                   ],
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.SymbolCollection2Data"
//                 },
//                 "fg-syms:0>B/fg-paybookof": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 0,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.LinesTriggerData"
//                 },
//                 "fg-syms:0>B/fg-checkbookof": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "fg-bookof",
//                   "symbolNum": 2,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 },
//                 "fg-syms:0>B/fg-bookof": {
//                   "vals": [
//                     false,
//                     false,
//                     false,
//                     false,
//                     true
//                   ],
//                   "newVals": [
//                     false,
//                     false,
//                     false,
//                     false,
//                     true
//                   ],
//                   "basicComponentData": null,
//                   "num": 5,
//                   "newChged": 1,
//                   "@type": "type.googleapis.com/sgc7pb.MaskData"
//                 },
//                 "fg-syms:0>B/fg-replacereel": {
//                   "basicComponentData": {
//                     "usedScenes": [
//                       1
//                     ],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [
//                       0
//                     ],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
//                 },
//                 "fg-paysc": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 0,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 }
//               },
//               "mapVals": {
//                 "1": 5,
//                 "2": 3,
//                 "6": 10,
//                 "7": 0,
//                 "100": 1,
//                 "101": 1,
//                 "102": 1,
//                 "103": 1
//               },
//               "mapStrVals": {},
//               "firstComponent": "fg-start",
//               "nextStepFirstComponent": "fg-start",
//               "@type": "type.googleapis.com/sgc7pb.GameParam"
//             },
//             "nextGameMod": "bg",
//             "curIndex": 0,
//             "parentIndex": 0,
//             "modType": "",
//             "prizeCoinWin": 0,
//             "prizeCashWin": 0,
//             "jackpotCoinWin": 0,
//             "jackpotCashWin": 0,
//             "jackpotType": 0
//           }
//         },
//         {
//           "coinWin": 5,
//           "cashWin": 5,
//           "clientData": {
//             "scenes": [
//               {
//                 "values": [
//                   {
//                     "values": [
//                       3,
//                       2,
//                       0
//                     ]
//                   },
//                   {
//                     "values": [
//                       9,
//                       4,
//                       2
//                     ]
//                   },
//                   {
//                     "values": [
//                       4,
//                       5,
//                       2
//                     ]
//                   },
//                   {
//                     "values": [
//                       3,
//                       2,
//                       5
//                     ]
//                   },
//                   {
//                     "values": [
//                       6,
//                       1,
//                       6
//                     ]
//                   }
//                 ],
//                 "indexes": [],
//                 "validRow": []
//               }
//             ],
//             "otherScenes": [],
//             "results": [
//               {
//                 "pos": [
//                   0,
//                   1,
//                   1,
//                   2,
//                   2,
//                   2
//                 ],
//                 "type": 2,
//                 "lineIndex": 7,
//                 "symbol": 2,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               }
//             ],
//             "mulPos": [],
//             "prizeScenes": [],
//             "curGameMod": "bg",
//             "curGameModParam": {
//               "historyComponents": [
//                 "fg-start",
//                 "fg-spin",
//                 "fg-paylines",
//                 "fg-syms",
//                 "fg-syms:0>B/fg-checkbookof",
//                 "fg-paysc"
//               ],
//               "respinComponents": [
//                 "fg-start"
//               ],
//               "mapComponents": {
//                 "fg-paylines": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [
//                       0
//                     ],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 5,
//                     "cashWin": 5,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 3,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 5,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.LinesTriggerData"
//                 },
//                 "fg-syms": {
//                   "symbolCodes": [
//                     7
//                   ],
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.SymbolCollection2Data"
//                 },
//                 "fg-syms:0>B/fg-checkbookof": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 0,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 },
//                 "fg-paysc": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 0,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 },
//                 "fg-start": {
//                   "triggerRespinNum": [],
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "lastRespinNum": 3,
//                   "totalRespinNum": 0,
//                   "curRespinNum": 7,
//                   "curAddRespinNum": 10,
//                   "totalCoinWin": 35,
//                   "totalCashWin": 35,
//                   "retriggerAddRespinNum": 0,
//                   "lastTriggerNum": 0,
//                   "curTriggerNum": 0,
//                   "@type": "type.googleapis.com/sgc7pb.RespinData"
//                 },
//                 "fg-spin": {
//                   "basicComponentData": {
//                     "usedScenes": [
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0
//                     ],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
//                 }
//               },
//               "mapVals": {
//                 "1": 5,
//                 "2": 3,
//                 "6": 10,
//                 "7": 0,
//                 "100": 1,
//                 "101": 1,
//                 "102": 1,
//                 "103": 1
//               },
//               "mapStrVals": {},
//               "firstComponent": "fg-start",
//               "nextStepFirstComponent": "fg-start",
//               "@type": "type.googleapis.com/sgc7pb.GameParam"
//             },
//             "nextGameMod": "bg",
//             "curIndex": 0,
//             "parentIndex": 0,
//             "modType": "",
//             "prizeCoinWin": 0,
//             "prizeCashWin": 0,
//             "jackpotCoinWin": 0,
//             "jackpotCashWin": 0,
//             "jackpotType": 0
//           }
//         },
//         {
//           "coinWin": 4030,
//           "cashWin": 4030,
//           "clientData": {
//             "scenes": [
//               {
//                 "values": [
//                   {
//                     "values": [
//                       1,
//                       6,
//                       4
//                     ]
//                   },
//                   {
//                     "values": [
//                       2,
//                       9,
//                       4
//                     ]
//                   },
//                   {
//                     "values": [
//                       3,
//                       7,
//                       4
//                     ]
//                   },
//                   {
//                     "values": [
//                       9,
//                       0,
//                       6
//                     ]
//                   },
//                   {
//                     "values": [
//                       5,
//                       0,
//                       9
//                     ]
//                   }
//                 ],
//                 "indexes": [],
//                 "validRow": []
//               },
//               {
//                 "values": [
//                   {
//                     "values": [
//                       1,
//                       6,
//                       4
//                     ]
//                   },
//                   {
//                     "values": [
//                       7,
//                       7,
//                       7
//                     ]
//                   },
//                   {
//                     "values": [
//                       7,
//                       7,
//                       7
//                     ]
//                   },
//                   {
//                     "values": [
//                       7,
//                       7,
//                       7
//                     ]
//                   },
//                   {
//                     "values": [
//                       7,
//                       7,
//                       7
//                     ]
//                   }
//                 ],
//                 "indexes": [],
//                 "validRow": []
//               }
//             ],
//             "otherScenes": [],
//             "results": [
//               {
//                 "pos": [
//                   0,
//                   1,
//                   1,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 0,
//                 "symbol": 6,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 1,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   2,
//                   1,
//                   2,
//                   2,
//                   2
//                 ],
//                 "type": 2,
//                 "lineIndex": 2,
//                 "symbol": 4,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   1,
//                   1,
//                   2,
//                   1,
//                   3,
//                   1,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 0,
//                 "symbol": 7,
//                 "mul": 400,
//                 "coinWin": 400,
//                 "cashWin": 400,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 4,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   1,
//                   0,
//                   2,
//                   0,
//                   3,
//                   0,
//                   4,
//                   0
//                 ],
//                 "type": 2,
//                 "lineIndex": 1,
//                 "symbol": 7,
//                 "mul": 400,
//                 "coinWin": 400,
//                 "cashWin": 400,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 4,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   1,
//                   2,
//                   2,
//                   2,
//                   3,
//                   2,
//                   4,
//                   2
//                 ],
//                 "type": 2,
//                 "lineIndex": 2,
//                 "symbol": 7,
//                 "mul": 400,
//                 "coinWin": 400,
//                 "cashWin": 400,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 4,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   1,
//                   1,
//                   2,
//                   2,
//                   3,
//                   1,
//                   4,
//                   0
//                 ],
//                 "type": 2,
//                 "lineIndex": 3,
//                 "symbol": 7,
//                 "mul": 400,
//                 "coinWin": 400,
//                 "cashWin": 400,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 4,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   1,
//                   1,
//                   2,
//                   0,
//                   3,
//                   1,
//                   4,
//                   2
//                 ],
//                 "type": 2,
//                 "lineIndex": 4,
//                 "symbol": 7,
//                 "mul": 400,
//                 "coinWin": 400,
//                 "cashWin": 400,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 4,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   1,
//                   0,
//                   2,
//                   1,
//                   3,
//                   0,
//                   4,
//                   0
//                 ],
//                 "type": 2,
//                 "lineIndex": 5,
//                 "symbol": 7,
//                 "mul": 400,
//                 "coinWin": 400,
//                 "cashWin": 400,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 4,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   1,
//                   2,
//                   2,
//                   1,
//                   3,
//                   2,
//                   4,
//                   2
//                 ],
//                 "type": 2,
//                 "lineIndex": 6,
//                 "symbol": 7,
//                 "mul": 400,
//                 "coinWin": 400,
//                 "cashWin": 400,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 4,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   1,
//                   2,
//                   2,
//                   2,
//                   3,
//                   2,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 7,
//                 "symbol": 7,
//                 "mul": 400,
//                 "coinWin": 400,
//                 "cashWin": 400,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 4,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   1,
//                   0,
//                   2,
//                   0,
//                   3,
//                   0,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 8,
//                 "symbol": 7,
//                 "mul": 400,
//                 "coinWin": 400,
//                 "cashWin": 400,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 4,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   1,
//                   0,
//                   2,
//                   1,
//                   3,
//                   0,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 9,
//                 "symbol": 7,
//                 "mul": 400,
//                 "coinWin": 400,
//                 "cashWin": 400,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 4,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   1,
//                   1,
//                   3,
//                   0,
//                   4,
//                   2
//                 ],
//                 "type": 9,
//                 "lineIndex": -1,
//                 "symbol": 9,
//                 "mul": 20,
//                 "coinWin": 20,
//                 "cashWin": 20,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 10
//               }
//             ],
//             "mulPos": [],
//             "prizeScenes": [],
//             "curGameMod": "bg",
//             "curGameModParam": {
//               "historyComponents": [
//                 "fg-start",
//                 "fg-spin",
//                 "fg-paylines",
//                 "fg-syms",
//                 "fg-syms:0>B/fg-checkbookof",
//                 "fg-syms:0>B/fg-bookof",
//                 "fg-syms:0>B/fg-replacereel",
//                 "fg-syms:0>B/fg-paybookof",
//                 "fg-paysc",
//                 "fg-rollsym"
//               ],
//               "respinComponents": [
//                 "fg-start"
//               ],
//               "mapComponents": {
//                 "fg-paylines": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [
//                       0,
//                       1
//                     ],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 10,
//                     "cashWin": 10,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 5,
//                   "wildNum": 1,
//                   "respinNum": 0,
//                   "wins": 10,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.LinesTriggerData"
//                 },
//                 "fg-syms": {
//                   "symbolCodes": [
//                     7,
//                     2
//                   ],
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.SymbolCollection2Data"
//                 },
//                 "fg-syms:0>B/fg-checkbookof": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "fg-bookof",
//                   "symbolNum": 4,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 },
//                 "fg-syms:0>B/fg-bookof": {
//                   "vals": [
//                     false,
//                     true,
//                     true,
//                     true,
//                     true
//                   ],
//                   "newVals": [
//                     false,
//                     true,
//                     true,
//                     true,
//                     true
//                   ],
//                   "basicComponentData": null,
//                   "num": 5,
//                   "newChged": 4,
//                   "@type": "type.googleapis.com/sgc7pb.MaskData"
//                 },
//                 "fg-syms:0>B/fg-replacereel": {
//                   "basicComponentData": {
//                     "usedScenes": [
//                       1
//                     ],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [
//                       0
//                     ],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
//                 },
//                 "fg-rollsym": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "symbolCode": 2,
//                   "@type": "type.googleapis.com/sgc7pb.RollSymbolData"
//                 },
//                 "fg-start": {
//                   "triggerRespinNum": [],
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "lastRespinNum": 12,
//                   "totalRespinNum": 0,
//                   "curRespinNum": 8,
//                   "curAddRespinNum": 20,
//                   "totalCoinWin": 4065,
//                   "totalCashWin": 4065,
//                   "retriggerAddRespinNum": 0,
//                   "lastTriggerNum": 0,
//                   "curTriggerNum": 0,
//                   "@type": "type.googleapis.com/sgc7pb.RespinData"
//                 },
//                 "fg-syms:0>B/fg-paybookof": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [
//                       2,
//                       3,
//                       4,
//                       5,
//                       6,
//                       7,
//                       8,
//                       9,
//                       10,
//                       11
//                     ],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 4000,
//                     "cashWin": 4000,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 40,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 4000,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.LinesTriggerData"
//                 },
//                 "fg-paysc": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [
//                       12
//                     ],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 20,
//                     "cashWin": 20,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "fg-rollsym",
//                   "symbolNum": 3,
//                   "wildNum": 0,
//                   "respinNum": 10,
//                   "wins": 20,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 },
//                 "fg-spin": {
//                   "basicComponentData": {
//                     "usedScenes": [
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0
//                     ],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
//                 }
//               },
//               "mapVals": {
//                 "1": 5,
//                 "2": 3,
//                 "6": 10,
//                 "7": 0,
//                 "100": 1,
//                 "101": 1,
//                 "102": 1,
//                 "103": 1
//               },
//               "mapStrVals": {},
//               "firstComponent": "fg-start",
//               "nextStepFirstComponent": "fg-start",
//               "@type": "type.googleapis.com/sgc7pb.GameParam"
//             },
//             "nextGameMod": "bg",
//             "curIndex": 0,
//             "parentIndex": 0,
//             "modType": "",
//             "prizeCoinWin": 0,
//             "prizeCashWin": 0,
//             "jackpotCoinWin": 0,
//             "jackpotCashWin": 0,
//             "jackpotType": 0
//           }
//         },
//         {
//           "coinWin": 100,
//           "cashWin": 100,
//           "clientData": {
//             "scenes": [
//               {
//                 "values": [
//                   {
//                     "values": [
//                       4,
//                       2,
//                       0
//                     ]
//                   },
//                   {
//                     "values": [
//                       4,
//                       2,
//                       1
//                     ]
//                   },
//                   {
//                     "values": [
//                       1,
//                       7,
//                       0
//                     ]
//                   },
//                   {
//                     "values": [
//                       0,
//                       6,
//                       3
//                     ]
//                   },
//                   {
//                     "values": [
//                       9,
//                       1,
//                       7
//                     ]
//                   }
//                 ],
//                 "indexes": [],
//                 "validRow": []
//               },
//               {
//                 "values": [
//                   {
//                     "values": [
//                       4,
//                       2,
//                       0
//                     ]
//                   },
//                   {
//                     "values": [
//                       4,
//                       2,
//                       1
//                     ]
//                   },
//                   {
//                     "values": [
//                       7,
//                       7,
//                       7
//                     ]
//                   },
//                   {
//                     "values": [
//                       0,
//                       6,
//                       3
//                     ]
//                   },
//                   {
//                     "values": [
//                       7,
//                       7,
//                       7
//                     ]
//                   }
//                 ],
//                 "indexes": [],
//                 "validRow": []
//               },
//               {
//                 "values": [
//                   {
//                     "values": [
//                       2,
//                       2,
//                       2
//                     ]
//                   },
//                   {
//                     "values": [
//                       2,
//                       2,
//                       2
//                     ]
//                   },
//                   {
//                     "values": [
//                       1,
//                       7,
//                       0
//                     ]
//                   },
//                   {
//                     "values": [
//                       0,
//                       6,
//                       3
//                     ]
//                   },
//                   {
//                     "values": [
//                       2,
//                       2,
//                       2
//                     ]
//                   }
//                 ],
//                 "indexes": [],
//                 "validRow": []
//               }
//             ],
//             "otherScenes": [],
//             "results": [
//               {
//                 "pos": [
//                   2,
//                   1,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 0,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   0,
//                   4,
//                   0
//                 ],
//                 "type": 2,
//                 "lineIndex": 1,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   2,
//                   4,
//                   2
//                 ],
//                 "type": 2,
//                 "lineIndex": 2,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   2,
//                   4,
//                   0
//                 ],
//                 "type": 2,
//                 "lineIndex": 3,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   0,
//                   4,
//                   2
//                 ],
//                 "type": 2,
//                 "lineIndex": 4,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   1,
//                   4,
//                   0
//                 ],
//                 "type": 2,
//                 "lineIndex": 5,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   1,
//                   4,
//                   2
//                 ],
//                 "type": 2,
//                 "lineIndex": 6,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   2,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 7,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   0,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 8,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   1,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 9,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   1,
//                   1,
//                   1,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 0,
//                 "symbol": 2,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   0,
//                   1,
//                   0,
//                   4,
//                   0
//                 ],
//                 "type": 2,
//                 "lineIndex": 1,
//                 "symbol": 2,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   2,
//                   1,
//                   2,
//                   4,
//                   2
//                 ],
//                 "type": 2,
//                 "lineIndex": 2,
//                 "symbol": 2,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   0,
//                   1,
//                   1,
//                   4,
//                   0
//                 ],
//                 "type": 2,
//                 "lineIndex": 3,
//                 "symbol": 2,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   2,
//                   1,
//                   1,
//                   4,
//                   2
//                 ],
//                 "type": 2,
//                 "lineIndex": 4,
//                 "symbol": 2,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   0,
//                   1,
//                   0,
//                   4,
//                   0
//                 ],
//                 "type": 2,
//                 "lineIndex": 5,
//                 "symbol": 2,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   2,
//                   1,
//                   2,
//                   4,
//                   2
//                 ],
//                 "type": 2,
//                 "lineIndex": 6,
//                 "symbol": 2,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   1,
//                   1,
//                   2,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 7,
//                 "symbol": 2,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   1,
//                   1,
//                   0,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 8,
//                 "symbol": 2,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   1,
//                   1,
//                   0,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 9,
//                 "symbol": 2,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               }
//             ],
//             "mulPos": [],
//             "prizeScenes": [],
//             "curGameMod": "bg",
//             "curGameModParam": {
//               "historyComponents": [
//                 "fg-start",
//                 "fg-spin",
//                 "fg-paylines",
//                 "fg-syms",
//                 "fg-syms:0>B/fg-checkbookof",
//                 "fg-syms:0>B/fg-bookof",
//                 "fg-syms:0>B/fg-replacereel",
//                 "fg-syms:0>B/fg-paybookof",
//                 "fg-syms:1>G/fg-checkbookof",
//                 "fg-syms:1>G/fg-bookof",
//                 "fg-syms:1>G/fg-replacereel",
//                 "fg-syms:1>G/fg-paybookof",
//                 "fg-paysc"
//               ],
//               "respinComponents": [
//                 "fg-start"
//               ],
//               "mapComponents": {
//                 "fg-syms:1>G/fg-checkbookof": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "fg-bookof",
//                   "symbolNum": 3,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 },
//                 "fg-syms:1>G/fg-bookof": {
//                   "vals": [
//                     true,
//                     true,
//                     false,
//                     false,
//                     true
//                   ],
//                   "newVals": [
//                     true,
//                     true,
//                     false,
//                     false,
//                     true
//                   ],
//                   "basicComponentData": null,
//                   "num": 5,
//                   "newChged": 3,
//                   "@type": "type.googleapis.com/sgc7pb.MaskData"
//                 },
//                 "fg-syms:1>G/fg-replacereel": {
//                   "basicComponentData": {
//                     "usedScenes": [
//                       2
//                     ],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [
//                       0
//                     ],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
//                 },
//                 "fg-start": {
//                   "triggerRespinNum": [],
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "lastRespinNum": 11,
//                   "totalRespinNum": 0,
//                   "curRespinNum": 9,
//                   "curAddRespinNum": 20,
//                   "totalCoinWin": 4165,
//                   "totalCashWin": 4165,
//                   "retriggerAddRespinNum": 0,
//                   "lastTriggerNum": 0,
//                   "curTriggerNum": 0,
//                   "@type": "type.googleapis.com/sgc7pb.RespinData"
//                 },
//                 "fg-paylines": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 0,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.LinesTriggerData"
//                 },
//                 "fg-syms": {
//                   "symbolCodes": [
//                     7,
//                     2
//                   ],
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.SymbolCollection2Data"
//                 },
//                 "fg-syms:0>B/fg-bookof": {
//                   "vals": [
//                     false,
//                     false,
//                     true,
//                     false,
//                     true
//                   ],
//                   "newVals": [
//                     false,
//                     false,
//                     true,
//                     false,
//                     true
//                   ],
//                   "basicComponentData": null,
//                   "num": 5,
//                   "newChged": 2,
//                   "@type": "type.googleapis.com/sgc7pb.MaskData"
//                 },
//                 "fg-syms:0>B/fg-paybookof": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [
//                       0,
//                       1,
//                       2,
//                       3,
//                       4,
//                       5,
//                       6,
//                       7,
//                       8,
//                       9
//                     ],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 50,
//                     "cashWin": 50,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 20,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 50,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.LinesTriggerData"
//                 },
//                 "fg-syms:1>G/fg-paybookof": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [
//                       10,
//                       11,
//                       12,
//                       13,
//                       14,
//                       15,
//                       16,
//                       17,
//                       18,
//                       19
//                     ],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 50,
//                     "cashWin": 50,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 30,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 50,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.LinesTriggerData"
//                 },
//                 "fg-spin": {
//                   "basicComponentData": {
//                     "usedScenes": [
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0
//                     ],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
//                 },
//                 "fg-syms:0>B/fg-checkbookof": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "fg-bookof",
//                   "symbolNum": 3,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 },
//                 "fg-syms:0>B/fg-replacereel": {
//                   "basicComponentData": {
//                     "usedScenes": [
//                       1
//                     ],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [
//                       0
//                     ],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
//                 },
//                 "fg-paysc": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 0,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 }
//               },
//               "mapVals": {
//                 "1": 5,
//                 "2": 3,
//                 "6": 10,
//                 "7": 0,
//                 "100": 1,
//                 "101": 1,
//                 "102": 1,
//                 "103": 1
//               },
//               "mapStrVals": {},
//               "firstComponent": "fg-start",
//               "nextStepFirstComponent": "fg-start",
//               "@type": "type.googleapis.com/sgc7pb.GameParam"
//             },
//             "nextGameMod": "bg",
//             "curIndex": 0,
//             "parentIndex": 0,
//             "modType": "",
//             "prizeCoinWin": 0,
//             "prizeCashWin": 0,
//             "jackpotCoinWin": 0,
//             "jackpotCashWin": 0,
//             "jackpotType": 0
//           }
//         },
//         {
//           "coinWin": 450,
//           "cashWin": 450,
//           "clientData": {
//             "scenes": [
//               {
//                 "values": [
//                   {
//                     "values": [
//                       4,
//                       2,
//                       0
//                     ]
//                   },
//                   {
//                     "values": [
//                       0,
//                       1,
//                       2
//                     ]
//                   },
//                   {
//                     "values": [
//                       7,
//                       4,
//                       5
//                     ]
//                   },
//                   {
//                     "values": [
//                       7,
//                       3,
//                       0
//                     ]
//                   },
//                   {
//                     "values": [
//                       7,
//                       2,
//                       4
//                     ]
//                   }
//                 ],
//                 "indexes": [],
//                 "validRow": []
//               },
//               {
//                 "values": [
//                   {
//                     "values": [
//                       4,
//                       2,
//                       0
//                     ]
//                   },
//                   {
//                     "values": [
//                       0,
//                       1,
//                       2
//                     ]
//                   },
//                   {
//                     "values": [
//                       7,
//                       7,
//                       7
//                     ]
//                   },
//                   {
//                     "values": [
//                       7,
//                       7,
//                       7
//                     ]
//                   },
//                   {
//                     "values": [
//                       7,
//                       7,
//                       7
//                     ]
//                   }
//                 ],
//                 "indexes": [],
//                 "validRow": []
//               },
//               {
//                 "values": [
//                   {
//                     "values": [
//                       2,
//                       2,
//                       2
//                     ]
//                   },
//                   {
//                     "values": [
//                       2,
//                       2,
//                       2
//                     ]
//                   },
//                   {
//                     "values": [
//                       7,
//                       4,
//                       5
//                     ]
//                   },
//                   {
//                     "values": [
//                       7,
//                       3,
//                       0
//                     ]
//                   },
//                   {
//                     "values": [
//                       2,
//                       2,
//                       2
//                     ]
//                   }
//                 ],
//                 "indexes": [],
//                 "validRow": []
//               }
//             ],
//             "otherScenes": [],
//             "results": [
//               {
//                 "pos": [
//                   2,
//                   1,
//                   3,
//                   1,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 0,
//                 "symbol": 7,
//                 "mul": 40,
//                 "coinWin": 40,
//                 "cashWin": 40,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   0,
//                   3,
//                   0,
//                   4,
//                   0
//                 ],
//                 "type": 2,
//                 "lineIndex": 1,
//                 "symbol": 7,
//                 "mul": 40,
//                 "coinWin": 40,
//                 "cashWin": 40,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   2,
//                   3,
//                   2,
//                   4,
//                   2
//                 ],
//                 "type": 2,
//                 "lineIndex": 2,
//                 "symbol": 7,
//                 "mul": 40,
//                 "coinWin": 40,
//                 "cashWin": 40,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   2,
//                   3,
//                   1,
//                   4,
//                   0
//                 ],
//                 "type": 2,
//                 "lineIndex": 3,
//                 "symbol": 7,
//                 "mul": 40,
//                 "coinWin": 40,
//                 "cashWin": 40,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   0,
//                   3,
//                   1,
//                   4,
//                   2
//                 ],
//                 "type": 2,
//                 "lineIndex": 4,
//                 "symbol": 7,
//                 "mul": 40,
//                 "coinWin": 40,
//                 "cashWin": 40,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   1,
//                   3,
//                   0,
//                   4,
//                   0
//                 ],
//                 "type": 2,
//                 "lineIndex": 5,
//                 "symbol": 7,
//                 "mul": 40,
//                 "coinWin": 40,
//                 "cashWin": 40,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   1,
//                   3,
//                   2,
//                   4,
//                   2
//                 ],
//                 "type": 2,
//                 "lineIndex": 6,
//                 "symbol": 7,
//                 "mul": 40,
//                 "coinWin": 40,
//                 "cashWin": 40,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   2,
//                   3,
//                   2,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 7,
//                 "symbol": 7,
//                 "mul": 40,
//                 "coinWin": 40,
//                 "cashWin": 40,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   0,
//                   3,
//                   0,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 8,
//                 "symbol": 7,
//                 "mul": 40,
//                 "coinWin": 40,
//                 "cashWin": 40,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   1,
//                   3,
//                   0,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 9,
//                 "symbol": 7,
//                 "mul": 40,
//                 "coinWin": 40,
//                 "cashWin": 40,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   1,
//                   1,
//                   1,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 0,
//                 "symbol": 2,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   0,
//                   1,
//                   0,
//                   4,
//                   0
//                 ],
//                 "type": 2,
//                 "lineIndex": 1,
//                 "symbol": 2,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   2,
//                   1,
//                   2,
//                   4,
//                   2
//                 ],
//                 "type": 2,
//                 "lineIndex": 2,
//                 "symbol": 2,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   0,
//                   1,
//                   1,
//                   4,
//                   0
//                 ],
//                 "type": 2,
//                 "lineIndex": 3,
//                 "symbol": 2,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   2,
//                   1,
//                   1,
//                   4,
//                   2
//                 ],
//                 "type": 2,
//                 "lineIndex": 4,
//                 "symbol": 2,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   0,
//                   1,
//                   0,
//                   4,
//                   0
//                 ],
//                 "type": 2,
//                 "lineIndex": 5,
//                 "symbol": 2,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   2,
//                   1,
//                   2,
//                   4,
//                   2
//                 ],
//                 "type": 2,
//                 "lineIndex": 6,
//                 "symbol": 2,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   1,
//                   1,
//                   2,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 7,
//                 "symbol": 2,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   1,
//                   1,
//                   0,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 8,
//                 "symbol": 2,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   1,
//                   1,
//                   0,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 9,
//                 "symbol": 2,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               }
//             ],
//             "mulPos": [],
//             "prizeScenes": [],
//             "curGameMod": "bg",
//             "curGameModParam": {
//               "historyComponents": [
//                 "fg-start",
//                 "fg-spin",
//                 "fg-paylines",
//                 "fg-syms",
//                 "fg-syms:0>B/fg-checkbookof",
//                 "fg-syms:0>B/fg-bookof",
//                 "fg-syms:0>B/fg-replacereel",
//                 "fg-syms:0>B/fg-paybookof",
//                 "fg-syms:1>G/fg-checkbookof",
//                 "fg-syms:1>G/fg-bookof",
//                 "fg-syms:1>G/fg-replacereel",
//                 "fg-syms:1>G/fg-paybookof",
//                 "fg-paysc"
//               ],
//               "respinComponents": [
//                 "fg-start"
//               ],
//               "mapComponents": {
//                 "fg-start": {
//                   "triggerRespinNum": [],
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "lastRespinNum": 10,
//                   "totalRespinNum": 0,
//                   "curRespinNum": 10,
//                   "curAddRespinNum": 20,
//                   "totalCoinWin": 4615,
//                   "totalCashWin": 4615,
//                   "retriggerAddRespinNum": 0,
//                   "lastTriggerNum": 0,
//                   "curTriggerNum": 0,
//                   "@type": "type.googleapis.com/sgc7pb.RespinData"
//                 },
//                 "fg-syms:0>B/fg-checkbookof": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "fg-bookof",
//                   "symbolNum": 3,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 },
//                 "fg-syms:1>G/fg-checkbookof": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "fg-bookof",
//                   "symbolNum": 3,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 },
//                 "fg-syms:1>G/fg-bookof": {
//                   "vals": [
//                     true,
//                     true,
//                     false,
//                     false,
//                     true
//                   ],
//                   "newVals": [
//                     true,
//                     true,
//                     false,
//                     false,
//                     true
//                   ],
//                   "basicComponentData": null,
//                   "num": 5,
//                   "newChged": 3,
//                   "@type": "type.googleapis.com/sgc7pb.MaskData"
//                 },
//                 "fg-syms:0>B/fg-paybookof": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [
//                       0,
//                       1,
//                       2,
//                       3,
//                       4,
//                       5,
//                       6,
//                       7,
//                       8,
//                       9
//                     ],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 400,
//                     "cashWin": 400,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 30,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 400,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.LinesTriggerData"
//                 },
//                 "fg-syms:1>G/fg-replacereel": {
//                   "basicComponentData": {
//                     "usedScenes": [
//                       2
//                     ],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [
//                       0
//                     ],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
//                 },
//                 "fg-syms:1>G/fg-paybookof": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [
//                       10,
//                       11,
//                       12,
//                       13,
//                       14,
//                       15,
//                       16,
//                       17,
//                       18,
//                       19
//                     ],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 50,
//                     "cashWin": 50,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 30,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 50,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.LinesTriggerData"
//                 },
//                 "fg-spin": {
//                   "basicComponentData": {
//                     "usedScenes": [
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0
//                     ],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
//                 },
//                 "fg-paylines": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 0,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.LinesTriggerData"
//                 },
//                 "fg-syms": {
//                   "symbolCodes": [
//                     7,
//                     2
//                   ],
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.SymbolCollection2Data"
//                 },
//                 "fg-syms:0>B/fg-bookof": {
//                   "vals": [
//                     false,
//                     false,
//                     true,
//                     true,
//                     true
//                   ],
//                   "newVals": [
//                     false,
//                     false,
//                     true,
//                     true,
//                     true
//                   ],
//                   "basicComponentData": null,
//                   "num": 5,
//                   "newChged": 3,
//                   "@type": "type.googleapis.com/sgc7pb.MaskData"
//                 },
//                 "fg-syms:0>B/fg-replacereel": {
//                   "basicComponentData": {
//                     "usedScenes": [
//                       1
//                     ],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [
//                       0
//                     ],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
//                 },
//                 "fg-paysc": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 0,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 }
//               },
//               "mapVals": {
//                 "1": 5,
//                 "2": 3,
//                 "6": 10,
//                 "7": 0,
//                 "100": 1,
//                 "101": 1,
//                 "102": 1,
//                 "103": 1
//               },
//               "mapStrVals": {},
//               "firstComponent": "fg-start",
//               "nextStepFirstComponent": "fg-start",
//               "@type": "type.googleapis.com/sgc7pb.GameParam"
//             },
//             "nextGameMod": "bg",
//             "curIndex": 0,
//             "parentIndex": 0,
//             "modType": "",
//             "prizeCoinWin": 0,
//             "prizeCashWin": 0,
//             "jackpotCoinWin": 0,
//             "jackpotCashWin": 0,
//             "jackpotType": 0
//           }
//         },
//         {
//           "coinWin": 250,
//           "cashWin": 250,
//           "clientData": {
//             "scenes": [
//               {
//                 "values": [
//                   {
//                     "values": [
//                       1,
//                       3,
//                       2
//                     ]
//                   },
//                   {
//                     "values": [
//                       4,
//                       2,
//                       1
//                     ]
//                   },
//                   {
//                     "values": [
//                       6,
//                       3,
//                       7
//                     ]
//                   },
//                   {
//                     "values": [
//                       3,
//                       2,
//                       5
//                     ]
//                   },
//                   {
//                     "values": [
//                       6,
//                       2,
//                       1
//                     ]
//                   }
//                 ],
//                 "indexes": [],
//                 "validRow": []
//               },
//               {
//                 "values": [
//                   {
//                     "values": [
//                       2,
//                       2,
//                       2
//                     ]
//                   },
//                   {
//                     "values": [
//                       2,
//                       2,
//                       2
//                     ]
//                   },
//                   {
//                     "values": [
//                       6,
//                       3,
//                       7
//                     ]
//                   },
//                   {
//                     "values": [
//                       2,
//                       2,
//                       2
//                     ]
//                   },
//                   {
//                     "values": [
//                       2,
//                       2,
//                       2
//                     ]
//                   }
//                 ],
//                 "indexes": [],
//                 "validRow": []
//               }
//             ],
//             "otherScenes": [],
//             "results": [
//               {
//                 "pos": [
//                   0,
//                   1,
//                   1,
//                   1,
//                   3,
//                   1,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 0,
//                 "symbol": 2,
//                 "mul": 25,
//                 "coinWin": 25,
//                 "cashWin": 25,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 4,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   0,
//                   1,
//                   0,
//                   3,
//                   0,
//                   4,
//                   0
//                 ],
//                 "type": 2,
//                 "lineIndex": 1,
//                 "symbol": 2,
//                 "mul": 25,
//                 "coinWin": 25,
//                 "cashWin": 25,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 4,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   2,
//                   1,
//                   2,
//                   3,
//                   2,
//                   4,
//                   2
//                 ],
//                 "type": 2,
//                 "lineIndex": 2,
//                 "symbol": 2,
//                 "mul": 25,
//                 "coinWin": 25,
//                 "cashWin": 25,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 4,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   0,
//                   1,
//                   1,
//                   3,
//                   1,
//                   4,
//                   0
//                 ],
//                 "type": 2,
//                 "lineIndex": 3,
//                 "symbol": 2,
//                 "mul": 25,
//                 "coinWin": 25,
//                 "cashWin": 25,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 4,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   2,
//                   1,
//                   1,
//                   3,
//                   1,
//                   4,
//                   2
//                 ],
//                 "type": 2,
//                 "lineIndex": 4,
//                 "symbol": 2,
//                 "mul": 25,
//                 "coinWin": 25,
//                 "cashWin": 25,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 4,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   0,
//                   1,
//                   0,
//                   3,
//                   0,
//                   4,
//                   0
//                 ],
//                 "type": 2,
//                 "lineIndex": 5,
//                 "symbol": 2,
//                 "mul": 25,
//                 "coinWin": 25,
//                 "cashWin": 25,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 4,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   2,
//                   1,
//                   2,
//                   3,
//                   2,
//                   4,
//                   2
//                 ],
//                 "type": 2,
//                 "lineIndex": 6,
//                 "symbol": 2,
//                 "mul": 25,
//                 "coinWin": 25,
//                 "cashWin": 25,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 4,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   1,
//                   1,
//                   2,
//                   3,
//                   2,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 7,
//                 "symbol": 2,
//                 "mul": 25,
//                 "coinWin": 25,
//                 "cashWin": 25,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 4,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   1,
//                   1,
//                   0,
//                   3,
//                   0,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 8,
//                 "symbol": 2,
//                 "mul": 25,
//                 "coinWin": 25,
//                 "cashWin": 25,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 4,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   1,
//                   1,
//                   0,
//                   3,
//                   0,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 9,
//                 "symbol": 2,
//                 "mul": 25,
//                 "coinWin": 25,
//                 "cashWin": 25,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 4,
//                 "value": 0
//               }
//             ],
//             "mulPos": [],
//             "prizeScenes": [],
//             "curGameMod": "bg",
//             "curGameModParam": {
//               "historyComponents": [
//                 "fg-start",
//                 "fg-spin",
//                 "fg-paylines",
//                 "fg-syms",
//                 "fg-syms:0>B/fg-checkbookof",
//                 "fg-syms:1>G/fg-checkbookof",
//                 "fg-syms:1>G/fg-bookof",
//                 "fg-syms:1>G/fg-replacereel",
//                 "fg-syms:1>G/fg-paybookof",
//                 "fg-paysc"
//               ],
//               "respinComponents": [
//                 "fg-start"
//               ],
//               "mapComponents": {
//                 "fg-syms:0>B/fg-checkbookof": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 0,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 },
//                 "fg-spin": {
//                   "basicComponentData": {
//                     "usedScenes": [
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0
//                     ],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
//                 },
//                 "fg-paylines": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 0,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.LinesTriggerData"
//                 },
//                 "fg-syms": {
//                   "symbolCodes": [
//                     7,
//                     2
//                   ],
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.SymbolCollection2Data"
//                 },
//                 "fg-syms:1>G/fg-checkbookof": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "fg-bookof",
//                   "symbolNum": 4,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 },
//                 "fg-syms:1>G/fg-bookof": {
//                   "vals": [
//                     true,
//                     true,
//                     false,
//                     true,
//                     true
//                   ],
//                   "newVals": [
//                     true,
//                     true,
//                     false,
//                     true,
//                     true
//                   ],
//                   "basicComponentData": null,
//                   "num": 5,
//                   "newChged": 4,
//                   "@type": "type.googleapis.com/sgc7pb.MaskData"
//                 },
//                 "fg-syms:1>G/fg-replacereel": {
//                   "basicComponentData": {
//                     "usedScenes": [
//                       1
//                     ],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [
//                       0
//                     ],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
//                 },
//                 "fg-syms:1>G/fg-paybookof": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [
//                       0,
//                       1,
//                       2,
//                       3,
//                       4,
//                       5,
//                       6,
//                       7,
//                       8,
//                       9
//                     ],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 250,
//                     "cashWin": 250,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 40,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 250,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.LinesTriggerData"
//                 },
//                 "fg-start": {
//                   "triggerRespinNum": [],
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "lastRespinNum": 9,
//                   "totalRespinNum": 0,
//                   "curRespinNum": 11,
//                   "curAddRespinNum": 20,
//                   "totalCoinWin": 4865,
//                   "totalCashWin": 4865,
//                   "retriggerAddRespinNum": 0,
//                   "lastTriggerNum": 0,
//                   "curTriggerNum": 0,
//                   "@type": "type.googleapis.com/sgc7pb.RespinData"
//                 },
//                 "fg-paysc": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 0,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 }
//               },
//               "mapVals": {
//                 "1": 5,
//                 "2": 3,
//                 "6": 10,
//                 "7": 0,
//                 "100": 1,
//                 "101": 1,
//                 "102": 1,
//                 "103": 1
//               },
//               "mapStrVals": {},
//               "firstComponent": "fg-start",
//               "nextStepFirstComponent": "fg-start",
//               "@type": "type.googleapis.com/sgc7pb.GameParam"
//             },
//             "nextGameMod": "bg",
//             "curIndex": 0,
//             "parentIndex": 0,
//             "modType": "",
//             "prizeCoinWin": 0,
//             "prizeCashWin": 0,
//             "jackpotCoinWin": 0,
//             "jackpotCashWin": 0,
//             "jackpotType": 0
//           }
//         },
//         {
//           "coinWin": 50,
//           "cashWin": 50,
//           "clientData": {
//             "scenes": [
//               {
//                 "values": [
//                   {
//                     "values": [
//                       3,
//                       1,
//                       4
//                     ]
//                   },
//                   {
//                     "values": [
//                       2,
//                       4,
//                       0
//                     ]
//                   },
//                   {
//                     "values": [
//                       3,
//                       7,
//                       4
//                     ]
//                   },
//                   {
//                     "values": [
//                       6,
//                       0,
//                       4
//                     ]
//                   },
//                   {
//                     "values": [
//                       7,
//                       0,
//                       8
//                     ]
//                   }
//                 ],
//                 "indexes": [],
//                 "validRow": []
//               },
//               {
//                 "values": [
//                   {
//                     "values": [
//                       3,
//                       1,
//                       4
//                     ]
//                   },
//                   {
//                     "values": [
//                       2,
//                       4,
//                       0
//                     ]
//                   },
//                   {
//                     "values": [
//                       7,
//                       7,
//                       7
//                     ]
//                   },
//                   {
//                     "values": [
//                       6,
//                       0,
//                       4
//                     ]
//                   },
//                   {
//                     "values": [
//                       7,
//                       7,
//                       7
//                     ]
//                   }
//                 ],
//                 "indexes": [],
//                 "validRow": []
//               }
//             ],
//             "otherScenes": [],
//             "results": [
//               {
//                 "pos": [
//                   2,
//                   1,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 0,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   0,
//                   4,
//                   0
//                 ],
//                 "type": 2,
//                 "lineIndex": 1,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   2,
//                   4,
//                   2
//                 ],
//                 "type": 2,
//                 "lineIndex": 2,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   2,
//                   4,
//                   0
//                 ],
//                 "type": 2,
//                 "lineIndex": 3,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   0,
//                   4,
//                   2
//                 ],
//                 "type": 2,
//                 "lineIndex": 4,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   1,
//                   4,
//                   0
//                 ],
//                 "type": 2,
//                 "lineIndex": 5,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   1,
//                   4,
//                   2
//                 ],
//                 "type": 2,
//                 "lineIndex": 6,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   2,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 7,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   0,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 8,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   1,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 9,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               }
//             ],
//             "mulPos": [],
//             "prizeScenes": [],
//             "curGameMod": "bg",
//             "curGameModParam": {
//               "historyComponents": [
//                 "fg-start",
//                 "fg-spin",
//                 "fg-paylines",
//                 "fg-syms",
//                 "fg-syms:0>B/fg-checkbookof",
//                 "fg-syms:0>B/fg-bookof",
//                 "fg-syms:0>B/fg-replacereel",
//                 "fg-syms:0>B/fg-paybookof",
//                 "fg-syms:1>G/fg-checkbookof",
//                 "fg-paysc"
//               ],
//               "respinComponents": [
//                 "fg-start"
//               ],
//               "mapComponents": {
//                 "fg-syms:0>B/fg-checkbookof": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "fg-bookof",
//                   "symbolNum": 2,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 },
//                 "fg-syms:0>B/fg-bookof": {
//                   "vals": [
//                     false,
//                     false,
//                     true,
//                     false,
//                     true
//                   ],
//                   "newVals": [
//                     false,
//                     false,
//                     true,
//                     false,
//                     true
//                   ],
//                   "basicComponentData": null,
//                   "num": 5,
//                   "newChged": 2,
//                   "@type": "type.googleapis.com/sgc7pb.MaskData"
//                 },
//                 "fg-syms:0>B/fg-paybookof": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [
//                       0,
//                       1,
//                       2,
//                       3,
//                       4,
//                       5,
//                       6,
//                       7,
//                       8,
//                       9
//                     ],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 50,
//                     "cashWin": 50,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 20,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 50,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.LinesTriggerData"
//                 },
//                 "fg-syms:1>G/fg-checkbookof": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 0,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 },
//                 "fg-start": {
//                   "triggerRespinNum": [],
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "lastRespinNum": 8,
//                   "totalRespinNum": 0,
//                   "curRespinNum": 12,
//                   "curAddRespinNum": 20,
//                   "totalCoinWin": 4915,
//                   "totalCashWin": 4915,
//                   "retriggerAddRespinNum": 0,
//                   "lastTriggerNum": 0,
//                   "curTriggerNum": 0,
//                   "@type": "type.googleapis.com/sgc7pb.RespinData"
//                 },
//                 "fg-spin": {
//                   "basicComponentData": {
//                     "usedScenes": [
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0
//                     ],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
//                 },
//                 "fg-syms:0>B/fg-replacereel": {
//                   "basicComponentData": {
//                     "usedScenes": [
//                       1
//                     ],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [
//                       0
//                     ],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
//                 },
//                 "fg-paysc": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 0,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 },
//                 "fg-paylines": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 0,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.LinesTriggerData"
//                 },
//                 "fg-syms": {
//                   "symbolCodes": [
//                     7,
//                     2
//                   ],
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.SymbolCollection2Data"
//                 }
//               },
//               "mapVals": {
//                 "1": 5,
//                 "2": 3,
//                 "6": 10,
//                 "7": 0,
//                 "100": 1,
//                 "101": 1,
//                 "102": 1,
//                 "103": 1
//               },
//               "mapStrVals": {},
//               "firstComponent": "fg-start",
//               "nextStepFirstComponent": "fg-start",
//               "@type": "type.googleapis.com/sgc7pb.GameParam"
//             },
//             "nextGameMod": "bg",
//             "curIndex": 0,
//             "parentIndex": 0,
//             "modType": "",
//             "prizeCoinWin": 0,
//             "prizeCashWin": 0,
//             "jackpotCoinWin": 0,
//             "jackpotCashWin": 0,
//             "jackpotType": 0
//           }
//         },
//         {
//           "coinWin": 50,
//           "cashWin": 50,
//           "clientData": {
//             "scenes": [
//               {
//                 "values": [
//                   {
//                     "values": [
//                       3,
//                       1,
//                       4
//                     ]
//                   },
//                   {
//                     "values": [
//                       4,
//                       1,
//                       2
//                     ]
//                   },
//                   {
//                     "values": [
//                       6,
//                       3,
//                       7
//                     ]
//                   },
//                   {
//                     "values": [
//                       8,
//                       1,
//                       6
//                     ]
//                   },
//                   {
//                     "values": [
//                       7,
//                       3,
//                       9
//                     ]
//                   }
//                 ],
//                 "indexes": [],
//                 "validRow": []
//               },
//               {
//                 "values": [
//                   {
//                     "values": [
//                       3,
//                       1,
//                       4
//                     ]
//                   },
//                   {
//                     "values": [
//                       4,
//                       1,
//                       2
//                     ]
//                   },
//                   {
//                     "values": [
//                       7,
//                       7,
//                       7
//                     ]
//                   },
//                   {
//                     "values": [
//                       8,
//                       1,
//                       6
//                     ]
//                   },
//                   {
//                     "values": [
//                       7,
//                       7,
//                       7
//                     ]
//                   }
//                 ],
//                 "indexes": [],
//                 "validRow": []
//               }
//             ],
//             "otherScenes": [],
//             "results": [
//               {
//                 "pos": [
//                   2,
//                   1,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 0,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   0,
//                   4,
//                   0
//                 ],
//                 "type": 2,
//                 "lineIndex": 1,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   2,
//                   4,
//                   2
//                 ],
//                 "type": 2,
//                 "lineIndex": 2,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   2,
//                   4,
//                   0
//                 ],
//                 "type": 2,
//                 "lineIndex": 3,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   0,
//                   4,
//                   2
//                 ],
//                 "type": 2,
//                 "lineIndex": 4,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   1,
//                   4,
//                   0
//                 ],
//                 "type": 2,
//                 "lineIndex": 5,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   1,
//                   4,
//                   2
//                 ],
//                 "type": 2,
//                 "lineIndex": 6,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   2,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 7,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   0,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 8,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   1,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 9,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               }
//             ],
//             "mulPos": [],
//             "prizeScenes": [],
//             "curGameMod": "bg",
//             "curGameModParam": {
//               "historyComponents": [
//                 "fg-start",
//                 "fg-spin",
//                 "fg-paylines",
//                 "fg-syms",
//                 "fg-syms:0>B/fg-checkbookof",
//                 "fg-syms:0>B/fg-bookof",
//                 "fg-syms:0>B/fg-replacereel",
//                 "fg-syms:0>B/fg-paybookof",
//                 "fg-syms:1>G/fg-checkbookof",
//                 "fg-paysc"
//               ],
//               "respinComponents": [
//                 "fg-start"
//               ],
//               "mapComponents": {
//                 "fg-syms:1>G/fg-checkbookof": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 0,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 },
//                 "fg-spin": {
//                   "basicComponentData": {
//                     "usedScenes": [
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0
//                     ],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
//                 },
//                 "fg-paylines": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 0,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.LinesTriggerData"
//                 },
//                 "fg-syms:0>B/fg-checkbookof": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "fg-bookof",
//                   "symbolNum": 3,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 },
//                 "fg-syms:0>B/fg-replacereel": {
//                   "basicComponentData": {
//                     "usedScenes": [
//                       1
//                     ],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [
//                       0
//                     ],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
//                 },
//                 "fg-paysc": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 0,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 },
//                 "fg-start": {
//                   "triggerRespinNum": [],
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "lastRespinNum": 7,
//                   "totalRespinNum": 0,
//                   "curRespinNum": 13,
//                   "curAddRespinNum": 20,
//                   "totalCoinWin": 4965,
//                   "totalCashWin": 4965,
//                   "retriggerAddRespinNum": 0,
//                   "lastTriggerNum": 0,
//                   "curTriggerNum": 0,
//                   "@type": "type.googleapis.com/sgc7pb.RespinData"
//                 },
//                 "fg-syms": {
//                   "symbolCodes": [
//                     7,
//                     2
//                   ],
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.SymbolCollection2Data"
//                 },
//                 "fg-syms:0>B/fg-bookof": {
//                   "vals": [
//                     false,
//                     false,
//                     true,
//                     false,
//                     true
//                   ],
//                   "newVals": [
//                     false,
//                     false,
//                     true,
//                     false,
//                     true
//                   ],
//                   "basicComponentData": null,
//                   "num": 5,
//                   "newChged": 2,
//                   "@type": "type.googleapis.com/sgc7pb.MaskData"
//                 },
//                 "fg-syms:0>B/fg-paybookof": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [
//                       0,
//                       1,
//                       2,
//                       3,
//                       4,
//                       5,
//                       6,
//                       7,
//                       8,
//                       9
//                     ],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 50,
//                     "cashWin": 50,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 20,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 50,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.LinesTriggerData"
//                 }
//               },
//               "mapVals": {
//                 "1": 5,
//                 "2": 3,
//                 "6": 10,
//                 "7": 0,
//                 "100": 1,
//                 "101": 1,
//                 "102": 1,
//                 "103": 1
//               },
//               "mapStrVals": {},
//               "firstComponent": "fg-start",
//               "nextStepFirstComponent": "fg-start",
//               "@type": "type.googleapis.com/sgc7pb.GameParam"
//             },
//             "nextGameMod": "bg",
//             "curIndex": 0,
//             "parentIndex": 0,
//             "modType": "",
//             "prizeCoinWin": 0,
//             "prizeCashWin": 0,
//             "jackpotCoinWin": 0,
//             "jackpotCashWin": 0,
//             "jackpotType": 0
//           }
//         },
//         {
//           "coinWin": 50,
//           "cashWin": 50,
//           "clientData": {
//             "scenes": [
//               {
//                 "values": [
//                   {
//                     "values": [
//                       4,
//                       7,
//                       2
//                     ]
//                   },
//                   {
//                     "values": [
//                       5,
//                       1,
//                       0
//                     ]
//                   },
//                   {
//                     "values": [
//                       7,
//                       3,
//                       1
//                     ]
//                   },
//                   {
//                     "values": [
//                       6,
//                       2,
//                       1
//                     ]
//                   },
//                   {
//                     "values": [
//                       4,
//                       6,
//                       1
//                     ]
//                   }
//                 ],
//                 "indexes": [],
//                 "validRow": []
//               },
//               {
//                 "values": [
//                   {
//                     "values": [
//                       7,
//                       7,
//                       7
//                     ]
//                   },
//                   {
//                     "values": [
//                       5,
//                       1,
//                       0
//                     ]
//                   },
//                   {
//                     "values": [
//                       7,
//                       7,
//                       7
//                     ]
//                   },
//                   {
//                     "values": [
//                       6,
//                       2,
//                       1
//                     ]
//                   },
//                   {
//                     "values": [
//                       4,
//                       6,
//                       1
//                     ]
//                   }
//                 ],
//                 "indexes": [],
//                 "validRow": []
//               }
//             ],
//             "otherScenes": [],
//             "results": [
//               {
//                 "pos": [
//                   0,
//                   1,
//                   2,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 0,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   0,
//                   2,
//                   0
//                 ],
//                 "type": 2,
//                 "lineIndex": 1,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   2,
//                   2,
//                   2
//                 ],
//                 "type": 2,
//                 "lineIndex": 2,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   0,
//                   2,
//                   2
//                 ],
//                 "type": 2,
//                 "lineIndex": 3,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   2,
//                   2,
//                   0
//                 ],
//                 "type": 2,
//                 "lineIndex": 4,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   0,
//                   2,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 5,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   2,
//                   2,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 6,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   1,
//                   2,
//                   2
//                 ],
//                 "type": 2,
//                 "lineIndex": 7,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   1,
//                   2,
//                   0
//                 ],
//                 "type": 2,
//                 "lineIndex": 8,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   1,
//                   2,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 9,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               }
//             ],
//             "mulPos": [],
//             "prizeScenes": [],
//             "curGameMod": "bg",
//             "curGameModParam": {
//               "historyComponents": [
//                 "fg-start",
//                 "fg-spin",
//                 "fg-paylines",
//                 "fg-syms",
//                 "fg-syms:0>B/fg-checkbookof",
//                 "fg-syms:0>B/fg-bookof",
//                 "fg-syms:0>B/fg-replacereel",
//                 "fg-syms:0>B/fg-paybookof",
//                 "fg-syms:1>G/fg-checkbookof",
//                 "fg-paysc"
//               ],
//               "respinComponents": [
//                 "fg-start"
//               ],
//               "mapComponents": {
//                 "fg-paylines": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 0,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.LinesTriggerData"
//                 },
//                 "fg-syms": {
//                   "symbolCodes": [
//                     7,
//                     2
//                   ],
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.SymbolCollection2Data"
//                 },
//                 "fg-syms:0>B/fg-checkbookof": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "fg-bookof",
//                   "symbolNum": 2,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 },
//                 "fg-syms:0>B/fg-paybookof": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [
//                       0,
//                       1,
//                       2,
//                       3,
//                       4,
//                       5,
//                       6,
//                       7,
//                       8,
//                       9
//                     ],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 50,
//                     "cashWin": 50,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 20,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 50,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.LinesTriggerData"
//                 },
//                 "fg-syms:1>G/fg-checkbookof": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 0,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 },
//                 "fg-start": {
//                   "triggerRespinNum": [],
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "lastRespinNum": 6,
//                   "totalRespinNum": 0,
//                   "curRespinNum": 14,
//                   "curAddRespinNum": 20,
//                   "totalCoinWin": 5015,
//                   "totalCashWin": 5015,
//                   "retriggerAddRespinNum": 0,
//                   "lastTriggerNum": 0,
//                   "curTriggerNum": 0,
//                   "@type": "type.googleapis.com/sgc7pb.RespinData"
//                 },
//                 "fg-spin": {
//                   "basicComponentData": {
//                     "usedScenes": [
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0
//                     ],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
//                 },
//                 "fg-syms:0>B/fg-bookof": {
//                   "vals": [
//                     true,
//                     false,
//                     true,
//                     false,
//                     false
//                   ],
//                   "newVals": [
//                     true,
//                     false,
//                     true,
//                     false,
//                     false
//                   ],
//                   "basicComponentData": null,
//                   "num": 5,
//                   "newChged": 2,
//                   "@type": "type.googleapis.com/sgc7pb.MaskData"
//                 },
//                 "fg-syms:0>B/fg-replacereel": {
//                   "basicComponentData": {
//                     "usedScenes": [
//                       1
//                     ],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [
//                       0
//                     ],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
//                 },
//                 "fg-paysc": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 0,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 }
//               },
//               "mapVals": {
//                 "1": 5,
//                 "2": 3,
//                 "6": 10,
//                 "7": 0,
//                 "100": 1,
//                 "101": 1,
//                 "102": 1,
//                 "103": 1
//               },
//               "mapStrVals": {},
//               "firstComponent": "fg-start",
//               "nextStepFirstComponent": "fg-start",
//               "@type": "type.googleapis.com/sgc7pb.GameParam"
//             },
//             "nextGameMod": "bg",
//             "curIndex": 0,
//             "parentIndex": 0,
//             "modType": "",
//             "prizeCoinWin": 0,
//             "prizeCashWin": 0,
//             "jackpotCoinWin": 0,
//             "jackpotCashWin": 0,
//             "jackpotType": 0
//           }
//         },
//         {
//           "coinWin": 100,
//           "cashWin": 100,
//           "clientData": {
//             "scenes": [
//               {
//                 "values": [
//                   {
//                     "values": [
//                       6,
//                       0,
//                       3
//                     ]
//                   },
//                   {
//                     "values": [
//                       2,
//                       1,
//                       6
//                     ]
//                   },
//                   {
//                     "values": [
//                       7,
//                       3,
//                       2
//                     ]
//                   },
//                   {
//                     "values": [
//                       5,
//                       0,
//                       3
//                     ]
//                   },
//                   {
//                     "values": [
//                       7,
//                       2,
//                       6
//                     ]
//                   }
//                 ],
//                 "indexes": [],
//                 "validRow": []
//               },
//               {
//                 "values": [
//                   {
//                     "values": [
//                       6,
//                       0,
//                       3
//                     ]
//                   },
//                   {
//                     "values": [
//                       2,
//                       1,
//                       6
//                     ]
//                   },
//                   {
//                     "values": [
//                       7,
//                       7,
//                       7
//                     ]
//                   },
//                   {
//                     "values": [
//                       5,
//                       0,
//                       3
//                     ]
//                   },
//                   {
//                     "values": [
//                       7,
//                       7,
//                       7
//                     ]
//                   }
//                 ],
//                 "indexes": [],
//                 "validRow": []
//               },
//               {
//                 "values": [
//                   {
//                     "values": [
//                       6,
//                       0,
//                       3
//                     ]
//                   },
//                   {
//                     "values": [
//                       2,
//                       2,
//                       2
//                     ]
//                   },
//                   {
//                     "values": [
//                       2,
//                       2,
//                       2
//                     ]
//                   },
//                   {
//                     "values": [
//                       5,
//                       0,
//                       3
//                     ]
//                   },
//                   {
//                     "values": [
//                       2,
//                       2,
//                       2
//                     ]
//                   }
//                 ],
//                 "indexes": [],
//                 "validRow": []
//               }
//             ],
//             "otherScenes": [],
//             "results": [
//               {
//                 "pos": [
//                   2,
//                   1,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 0,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   0,
//                   4,
//                   0
//                 ],
//                 "type": 2,
//                 "lineIndex": 1,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   2,
//                   4,
//                   2
//                 ],
//                 "type": 2,
//                 "lineIndex": 2,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   2,
//                   4,
//                   0
//                 ],
//                 "type": 2,
//                 "lineIndex": 3,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   0,
//                   4,
//                   2
//                 ],
//                 "type": 2,
//                 "lineIndex": 4,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   1,
//                   4,
//                   0
//                 ],
//                 "type": 2,
//                 "lineIndex": 5,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   1,
//                   4,
//                   2
//                 ],
//                 "type": 2,
//                 "lineIndex": 6,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   2,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 7,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   0,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 8,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   1,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 9,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   1,
//                   1,
//                   2,
//                   1,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 0,
//                 "symbol": 2,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   1,
//                   0,
//                   2,
//                   0,
//                   4,
//                   0
//                 ],
//                 "type": 2,
//                 "lineIndex": 1,
//                 "symbol": 2,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   1,
//                   2,
//                   2,
//                   2,
//                   4,
//                   2
//                 ],
//                 "type": 2,
//                 "lineIndex": 2,
//                 "symbol": 2,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   1,
//                   1,
//                   2,
//                   2,
//                   4,
//                   0
//                 ],
//                 "type": 2,
//                 "lineIndex": 3,
//                 "symbol": 2,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   1,
//                   1,
//                   2,
//                   0,
//                   4,
//                   2
//                 ],
//                 "type": 2,
//                 "lineIndex": 4,
//                 "symbol": 2,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   1,
//                   0,
//                   2,
//                   1,
//                   4,
//                   0
//                 ],
//                 "type": 2,
//                 "lineIndex": 5,
//                 "symbol": 2,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   1,
//                   2,
//                   2,
//                   1,
//                   4,
//                   2
//                 ],
//                 "type": 2,
//                 "lineIndex": 6,
//                 "symbol": 2,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   1,
//                   2,
//                   2,
//                   2,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 7,
//                 "symbol": 2,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   1,
//                   0,
//                   2,
//                   0,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 8,
//                 "symbol": 2,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   1,
//                   0,
//                   2,
//                   1,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 9,
//                 "symbol": 2,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               }
//             ],
//             "mulPos": [],
//             "prizeScenes": [],
//             "curGameMod": "bg",
//             "curGameModParam": {
//               "historyComponents": [
//                 "fg-start",
//                 "fg-spin",
//                 "fg-paylines",
//                 "fg-syms",
//                 "fg-syms:0>B/fg-checkbookof",
//                 "fg-syms:0>B/fg-bookof",
//                 "fg-syms:0>B/fg-replacereel",
//                 "fg-syms:0>B/fg-paybookof",
//                 "fg-syms:1>G/fg-checkbookof",
//                 "fg-syms:1>G/fg-bookof",
//                 "fg-syms:1>G/fg-replacereel",
//                 "fg-syms:1>G/fg-paybookof",
//                 "fg-paysc"
//               ],
//               "respinComponents": [
//                 "fg-start"
//               ],
//               "mapComponents": {
//                 "fg-syms:0>B/fg-bookof": {
//                   "vals": [
//                     false,
//                     false,
//                     true,
//                     false,
//                     true
//                   ],
//                   "newVals": [
//                     false,
//                     false,
//                     true,
//                     false,
//                     true
//                   ],
//                   "basicComponentData": null,
//                   "num": 5,
//                   "newChged": 2,
//                   "@type": "type.googleapis.com/sgc7pb.MaskData"
//                 },
//                 "fg-syms:1>G/fg-checkbookof": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "fg-bookof",
//                   "symbolNum": 3,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 },
//                 "fg-syms:1>G/fg-paybookof": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [
//                       10,
//                       11,
//                       12,
//                       13,
//                       14,
//                       15,
//                       16,
//                       17,
//                       18,
//                       19
//                     ],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 50,
//                     "cashWin": 50,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 30,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 50,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.LinesTriggerData"
//                 },
//                 "fg-paysc": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 0,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 },
//                 "fg-syms:0>B/fg-paybookof": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [
//                       0,
//                       1,
//                       2,
//                       3,
//                       4,
//                       5,
//                       6,
//                       7,
//                       8,
//                       9
//                     ],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 50,
//                     "cashWin": 50,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 20,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 50,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.LinesTriggerData"
//                 },
//                 "fg-syms:1>G/fg-bookof": {
//                   "vals": [
//                     false,
//                     true,
//                     true,
//                     false,
//                     true
//                   ],
//                   "newVals": [
//                     false,
//                     true,
//                     true,
//                     false,
//                     true
//                   ],
//                   "basicComponentData": null,
//                   "num": 5,
//                   "newChged": 3,
//                   "@type": "type.googleapis.com/sgc7pb.MaskData"
//                 },
//                 "fg-start": {
//                   "triggerRespinNum": [],
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "lastRespinNum": 5,
//                   "totalRespinNum": 0,
//                   "curRespinNum": 15,
//                   "curAddRespinNum": 20,
//                   "totalCoinWin": 5115,
//                   "totalCashWin": 5115,
//                   "retriggerAddRespinNum": 0,
//                   "lastTriggerNum": 0,
//                   "curTriggerNum": 0,
//                   "@type": "type.googleapis.com/sgc7pb.RespinData"
//                 },
//                 "fg-spin": {
//                   "basicComponentData": {
//                     "usedScenes": [
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0
//                     ],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
//                 },
//                 "fg-paylines": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 0,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.LinesTriggerData"
//                 },
//                 "fg-syms": {
//                   "symbolCodes": [
//                     7,
//                     2
//                   ],
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.SymbolCollection2Data"
//                 },
//                 "fg-syms:0>B/fg-checkbookof": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "fg-bookof",
//                   "symbolNum": 2,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 },
//                 "fg-syms:0>B/fg-replacereel": {
//                   "basicComponentData": {
//                     "usedScenes": [
//                       1
//                     ],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [
//                       0
//                     ],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
//                 },
//                 "fg-syms:1>G/fg-replacereel": {
//                   "basicComponentData": {
//                     "usedScenes": [
//                       2
//                     ],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [
//                       0
//                     ],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
//                 }
//               },
//               "mapVals": {
//                 "1": 5,
//                 "2": 3,
//                 "6": 10,
//                 "7": 0,
//                 "100": 1,
//                 "101": 1,
//                 "102": 1,
//                 "103": 1
//               },
//               "mapStrVals": {},
//               "firstComponent": "fg-start",
//               "nextStepFirstComponent": "fg-start",
//               "@type": "type.googleapis.com/sgc7pb.GameParam"
//             },
//             "nextGameMod": "bg",
//             "curIndex": 0,
//             "parentIndex": 0,
//             "modType": "",
//             "prizeCoinWin": 0,
//             "prizeCashWin": 0,
//             "jackpotCoinWin": 0,
//             "jackpotCashWin": 0,
//             "jackpotType": 0
//           }
//         },
//         {
//           "coinWin": 0,
//           "cashWin": 0,
//           "clientData": {
//             "scenes": [
//               {
//                 "values": [
//                   {
//                     "values": [
//                       6,
//                       0,
//                       3
//                     ]
//                   },
//                   {
//                     "values": [
//                       0,
//                       5,
//                       1
//                     ]
//                   },
//                   {
//                     "values": [
//                       3,
//                       5,
//                       2
//                     ]
//                   },
//                   {
//                     "values": [
//                       3,
//                       0,
//                       6
//                     ]
//                   },
//                   {
//                     "values": [
//                       4,
//                       6,
//                       2
//                     ]
//                   }
//                 ],
//                 "indexes": [],
//                 "validRow": []
//               }
//             ],
//             "otherScenes": [],
//             "results": [],
//             "mulPos": [],
//             "prizeScenes": [],
//             "curGameMod": "bg",
//             "curGameModParam": {
//               "historyComponents": [
//                 "fg-start",
//                 "fg-spin",
//                 "fg-paylines",
//                 "fg-syms",
//                 "fg-syms:0>B/fg-checkbookof",
//                 "fg-syms:1>G/fg-checkbookof",
//                 "fg-paysc"
//               ],
//               "respinComponents": [
//                 "fg-start"
//               ],
//               "mapComponents": {
//                 "fg-paylines": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 0,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.LinesTriggerData"
//                 },
//                 "fg-syms": {
//                   "symbolCodes": [
//                     7,
//                     2
//                   ],
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.SymbolCollection2Data"
//                 },
//                 "fg-syms:0>B/fg-checkbookof": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 0,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 },
//                 "fg-syms:1>G/fg-checkbookof": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 0,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 },
//                 "fg-paysc": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 0,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 },
//                 "fg-start": {
//                   "triggerRespinNum": [],
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "lastRespinNum": 4,
//                   "totalRespinNum": 0,
//                   "curRespinNum": 16,
//                   "curAddRespinNum": 20,
//                   "totalCoinWin": 5115,
//                   "totalCashWin": 5115,
//                   "retriggerAddRespinNum": 0,
//                   "lastTriggerNum": 0,
//                   "curTriggerNum": 0,
//                   "@type": "type.googleapis.com/sgc7pb.RespinData"
//                 },
//                 "fg-spin": {
//                   "basicComponentData": {
//                     "usedScenes": [
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0
//                     ],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
//                 }
//               },
//               "mapVals": {
//                 "1": 5,
//                 "2": 3,
//                 "6": 10,
//                 "7": 0,
//                 "100": 1,
//                 "101": 1,
//                 "102": 1,
//                 "103": 1
//               },
//               "mapStrVals": {},
//               "firstComponent": "fg-start",
//               "nextStepFirstComponent": "fg-start",
//               "@type": "type.googleapis.com/sgc7pb.GameParam"
//             },
//             "nextGameMod": "bg",
//             "curIndex": 0,
//             "parentIndex": 0,
//             "modType": "",
//             "prizeCoinWin": 0,
//             "prizeCashWin": 0,
//             "jackpotCoinWin": 0,
//             "jackpotCashWin": 0,
//             "jackpotType": 0
//           }
//         },
//         {
//           "coinWin": 305,
//           "cashWin": 305,
//           "clientData": {
//             "scenes": [
//               {
//                 "values": [
//                   {
//                     "values": [
//                       4,
//                       0,
//                       2
//                     ]
//                   },
//                   {
//                     "values": [
//                       5,
//                       1,
//                       0
//                     ]
//                   },
//                   {
//                     "values": [
//                       4,
//                       9,
//                       0
//                     ]
//                   },
//                   {
//                     "values": [
//                       6,
//                       3,
//                       2
//                     ]
//                   },
//                   {
//                     "values": [
//                       7,
//                       2,
//                       4
//                     ]
//                   }
//                 ],
//                 "indexes": [],
//                 "validRow": []
//               },
//               {
//                 "values": [
//                   {
//                     "values": [
//                       4,
//                       0,
//                       2
//                     ]
//                   },
//                   {
//                     "values": [
//                       5,
//                       1,
//                       0
//                     ]
//                   },
//                   {
//                     "values": [
//                       7,
//                       7,
//                       7
//                     ]
//                   },
//                   {
//                     "values": [
//                       6,
//                       3,
//                       2
//                     ]
//                   },
//                   {
//                     "values": [
//                       7,
//                       7,
//                       7
//                     ]
//                   }
//                 ],
//                 "indexes": [],
//                 "validRow": []
//               },
//               {
//                 "values": [
//                   {
//                     "values": [
//                       2,
//                       2,
//                       2
//                     ]
//                   },
//                   {
//                     "values": [
//                       5,
//                       1,
//                       0
//                     ]
//                   },
//                   {
//                     "values": [
//                       2,
//                       2,
//                       2
//                     ]
//                   },
//                   {
//                     "values": [
//                       2,
//                       2,
//                       2
//                     ]
//                   },
//                   {
//                     "values": [
//                       2,
//                       2,
//                       2
//                     ]
//                   }
//                 ],
//                 "indexes": [],
//                 "validRow": []
//               }
//             ],
//             "otherScenes": [],
//             "results": [
//               {
//                 "pos": [
//                   0,
//                   1,
//                   1,
//                   2,
//                   2,
//                   2
//                 ],
//                 "type": 2,
//                 "lineIndex": 7,
//                 "symbol": 0,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   1,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 0,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   0,
//                   4,
//                   0
//                 ],
//                 "type": 2,
//                 "lineIndex": 1,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   2,
//                   4,
//                   2
//                 ],
//                 "type": 2,
//                 "lineIndex": 2,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   2,
//                   4,
//                   0
//                 ],
//                 "type": 2,
//                 "lineIndex": 3,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   0,
//                   4,
//                   2
//                 ],
//                 "type": 2,
//                 "lineIndex": 4,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   1,
//                   4,
//                   0
//                 ],
//                 "type": 2,
//                 "lineIndex": 5,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   1,
//                   4,
//                   2
//                 ],
//                 "type": 2,
//                 "lineIndex": 6,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   2,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 7,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   0,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 8,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   1,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 9,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   1,
//                   2,
//                   1,
//                   3,
//                   1,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 0,
//                 "symbol": 2,
//                 "mul": 25,
//                 "coinWin": 25,
//                 "cashWin": 25,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 4,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   0,
//                   2,
//                   0,
//                   3,
//                   0,
//                   4,
//                   0
//                 ],
//                 "type": 2,
//                 "lineIndex": 1,
//                 "symbol": 2,
//                 "mul": 25,
//                 "coinWin": 25,
//                 "cashWin": 25,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 4,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   2,
//                   2,
//                   2,
//                   3,
//                   2,
//                   4,
//                   2
//                 ],
//                 "type": 2,
//                 "lineIndex": 2,
//                 "symbol": 2,
//                 "mul": 25,
//                 "coinWin": 25,
//                 "cashWin": 25,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 4,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   0,
//                   2,
//                   2,
//                   3,
//                   1,
//                   4,
//                   0
//                 ],
//                 "type": 2,
//                 "lineIndex": 3,
//                 "symbol": 2,
//                 "mul": 25,
//                 "coinWin": 25,
//                 "cashWin": 25,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 4,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   2,
//                   2,
//                   0,
//                   3,
//                   1,
//                   4,
//                   2
//                 ],
//                 "type": 2,
//                 "lineIndex": 4,
//                 "symbol": 2,
//                 "mul": 25,
//                 "coinWin": 25,
//                 "cashWin": 25,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 4,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   0,
//                   2,
//                   1,
//                   3,
//                   0,
//                   4,
//                   0
//                 ],
//                 "type": 2,
//                 "lineIndex": 5,
//                 "symbol": 2,
//                 "mul": 25,
//                 "coinWin": 25,
//                 "cashWin": 25,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 4,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   2,
//                   2,
//                   1,
//                   3,
//                   2,
//                   4,
//                   2
//                 ],
//                 "type": 2,
//                 "lineIndex": 6,
//                 "symbol": 2,
//                 "mul": 25,
//                 "coinWin": 25,
//                 "cashWin": 25,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 4,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   1,
//                   2,
//                   2,
//                   3,
//                   2,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 7,
//                 "symbol": 2,
//                 "mul": 25,
//                 "coinWin": 25,
//                 "cashWin": 25,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 4,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   1,
//                   2,
//                   0,
//                   3,
//                   0,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 8,
//                 "symbol": 2,
//                 "mul": 25,
//                 "coinWin": 25,
//                 "cashWin": 25,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 4,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   1,
//                   2,
//                   1,
//                   3,
//                   0,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 9,
//                 "symbol": 2,
//                 "mul": 25,
//                 "coinWin": 25,
//                 "cashWin": 25,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 4,
//                 "value": 0
//               }
//             ],
//             "mulPos": [],
//             "prizeScenes": [],
//             "curGameMod": "bg",
//             "curGameModParam": {
//               "historyComponents": [
//                 "fg-start",
//                 "fg-spin",
//                 "fg-paylines",
//                 "fg-syms",
//                 "fg-syms:0>B/fg-checkbookof",
//                 "fg-syms:0>B/fg-bookof",
//                 "fg-syms:0>B/fg-replacereel",
//                 "fg-syms:0>B/fg-paybookof",
//                 "fg-syms:1>G/fg-checkbookof",
//                 "fg-syms:1>G/fg-bookof",
//                 "fg-syms:1>G/fg-replacereel",
//                 "fg-syms:1>G/fg-paybookof",
//                 "fg-paysc"
//               ],
//               "respinComponents": [
//                 "fg-start"
//               ],
//               "mapComponents": {
//                 "fg-syms:0>B/fg-checkbookof": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "fg-bookof",
//                   "symbolNum": 2,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 },
//                 "fg-syms:0>B/fg-bookof": {
//                   "vals": [
//                     false,
//                     false,
//                     true,
//                     false,
//                     true
//                   ],
//                   "newVals": [
//                     false,
//                     false,
//                     true,
//                     false,
//                     true
//                   ],
//                   "basicComponentData": null,
//                   "num": 5,
//                   "newChged": 2,
//                   "@type": "type.googleapis.com/sgc7pb.MaskData"
//                 },
//                 "fg-syms:0>B/fg-replacereel": {
//                   "basicComponentData": {
//                     "usedScenes": [
//                       1
//                     ],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [
//                       0
//                     ],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
//                 },
//                 "fg-syms:1>G/fg-bookof": {
//                   "vals": [
//                     true,
//                     false,
//                     true,
//                     true,
//                     true
//                   ],
//                   "newVals": [
//                     true,
//                     false,
//                     true,
//                     true,
//                     true
//                   ],
//                   "basicComponentData": null,
//                   "num": 5,
//                   "newChged": 4,
//                   "@type": "type.googleapis.com/sgc7pb.MaskData"
//                 },
//                 "fg-syms:1>G/fg-replacereel": {
//                   "basicComponentData": {
//                     "usedScenes": [
//                       2
//                     ],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [
//                       0
//                     ],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
//                 },
//                 "fg-spin": {
//                   "basicComponentData": {
//                     "usedScenes": [
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0
//                     ],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
//                 },
//                 "fg-syms": {
//                   "symbolCodes": [
//                     7,
//                     2
//                   ],
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.SymbolCollection2Data"
//                 },
//                 "fg-syms:0>B/fg-paybookof": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [
//                       1,
//                       2,
//                       3,
//                       4,
//                       5,
//                       6,
//                       7,
//                       8,
//                       9,
//                       10
//                     ],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 50,
//                     "cashWin": 50,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 20,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 50,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.LinesTriggerData"
//                 },
//                 "fg-syms:1>G/fg-checkbookof": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "fg-bookof",
//                   "symbolNum": 4,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 },
//                 "fg-syms:1>G/fg-paybookof": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [
//                       11,
//                       12,
//                       13,
//                       14,
//                       15,
//                       16,
//                       17,
//                       18,
//                       19,
//                       20
//                     ],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 250,
//                     "cashWin": 250,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 40,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 250,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.LinesTriggerData"
//                 },
//                 "fg-paysc": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 0,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 },
//                 "fg-start": {
//                   "triggerRespinNum": [],
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "lastRespinNum": 3,
//                   "totalRespinNum": 0,
//                   "curRespinNum": 17,
//                   "curAddRespinNum": 20,
//                   "totalCoinWin": 5420,
//                   "totalCashWin": 5420,
//                   "retriggerAddRespinNum": 0,
//                   "lastTriggerNum": 0,
//                   "curTriggerNum": 0,
//                   "@type": "type.googleapis.com/sgc7pb.RespinData"
//                 },
//                 "fg-paylines": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [
//                       0
//                     ],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 5,
//                     "cashWin": 5,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 3,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 5,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.LinesTriggerData"
//                 }
//               },
//               "mapVals": {
//                 "1": 5,
//                 "2": 3,
//                 "6": 10,
//                 "7": 0,
//                 "100": 1,
//                 "101": 1,
//                 "102": 1,
//                 "103": 1
//               },
//               "mapStrVals": {},
//               "firstComponent": "fg-start",
//               "nextStepFirstComponent": "fg-start",
//               "@type": "type.googleapis.com/sgc7pb.GameParam"
//             },
//             "nextGameMod": "bg",
//             "curIndex": 0,
//             "parentIndex": 0,
//             "modType": "",
//             "prizeCoinWin": 0,
//             "prizeCashWin": 0,
//             "jackpotCoinWin": 0,
//             "jackpotCashWin": 0,
//             "jackpotType": 0
//           }
//         },
//         {
//           "coinWin": 50,
//           "cashWin": 50,
//           "clientData": {
//             "scenes": [
//               {
//                 "values": [
//                   {
//                     "values": [
//                       0,
//                       1,
//                       6
//                     ]
//                   },
//                   {
//                     "values": [
//                       2,
//                       8,
//                       0
//                     ]
//                   },
//                   {
//                     "values": [
//                       8,
//                       3,
//                       7
//                     ]
//                   },
//                   {
//                     "values": [
//                       2,
//                       5,
//                       0
//                     ]
//                   },
//                   {
//                     "values": [
//                       8,
//                       2,
//                       5
//                     ]
//                   }
//                 ],
//                 "indexes": [],
//                 "validRow": []
//               },
//               {
//                 "values": [
//                   {
//                     "values": [
//                       0,
//                       1,
//                       6
//                     ]
//                   },
//                   {
//                     "values": [
//                       2,
//                       2,
//                       2
//                     ]
//                   },
//                   {
//                     "values": [
//                       8,
//                       3,
//                       7
//                     ]
//                   },
//                   {
//                     "values": [
//                       2,
//                       2,
//                       2
//                     ]
//                   },
//                   {
//                     "values": [
//                       2,
//                       2,
//                       2
//                     ]
//                   }
//                 ],
//                 "indexes": [],
//                 "validRow": []
//               }
//             ],
//             "otherScenes": [],
//             "results": [
//               {
//                 "pos": [
//                   1,
//                   1,
//                   3,
//                   1,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 0,
//                 "symbol": 2,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   1,
//                   0,
//                   3,
//                   0,
//                   4,
//                   0
//                 ],
//                 "type": 2,
//                 "lineIndex": 1,
//                 "symbol": 2,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   1,
//                   2,
//                   3,
//                   2,
//                   4,
//                   2
//                 ],
//                 "type": 2,
//                 "lineIndex": 2,
//                 "symbol": 2,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   1,
//                   1,
//                   3,
//                   1,
//                   4,
//                   0
//                 ],
//                 "type": 2,
//                 "lineIndex": 3,
//                 "symbol": 2,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   1,
//                   1,
//                   3,
//                   1,
//                   4,
//                   2
//                 ],
//                 "type": 2,
//                 "lineIndex": 4,
//                 "symbol": 2,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   1,
//                   0,
//                   3,
//                   0,
//                   4,
//                   0
//                 ],
//                 "type": 2,
//                 "lineIndex": 5,
//                 "symbol": 2,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   1,
//                   2,
//                   3,
//                   2,
//                   4,
//                   2
//                 ],
//                 "type": 2,
//                 "lineIndex": 6,
//                 "symbol": 2,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   1,
//                   2,
//                   3,
//                   2,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 7,
//                 "symbol": 2,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   1,
//                   0,
//                   3,
//                   0,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 8,
//                 "symbol": 2,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   1,
//                   0,
//                   3,
//                   0,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 9,
//                 "symbol": 2,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               }
//             ],
//             "mulPos": [],
//             "prizeScenes": [],
//             "curGameMod": "bg",
//             "curGameModParam": {
//               "historyComponents": [
//                 "fg-start",
//                 "fg-spin",
//                 "fg-paylines",
//                 "fg-syms",
//                 "fg-syms:0>B/fg-checkbookof",
//                 "fg-syms:1>G/fg-checkbookof",
//                 "fg-syms:1>G/fg-bookof",
//                 "fg-syms:1>G/fg-replacereel",
//                 "fg-syms:1>G/fg-paybookof",
//                 "fg-paysc"
//               ],
//               "respinComponents": [
//                 "fg-start"
//               ],
//               "mapComponents": {
//                 "fg-start": {
//                   "triggerRespinNum": [],
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "lastRespinNum": 2,
//                   "totalRespinNum": 0,
//                   "curRespinNum": 18,
//                   "curAddRespinNum": 20,
//                   "totalCoinWin": 5470,
//                   "totalCashWin": 5470,
//                   "retriggerAddRespinNum": 0,
//                   "lastTriggerNum": 0,
//                   "curTriggerNum": 0,
//                   "@type": "type.googleapis.com/sgc7pb.RespinData"
//                 },
//                 "fg-spin": {
//                   "basicComponentData": {
//                     "usedScenes": [
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0
//                     ],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
//                 },
//                 "fg-syms:1>G/fg-checkbookof": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "fg-bookof",
//                   "symbolNum": 3,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 },
//                 "fg-syms:1>G/fg-bookof": {
//                   "vals": [
//                     false,
//                     true,
//                     false,
//                     true,
//                     true
//                   ],
//                   "newVals": [
//                     false,
//                     true,
//                     false,
//                     true,
//                     true
//                   ],
//                   "basicComponentData": null,
//                   "num": 5,
//                   "newChged": 3,
//                   "@type": "type.googleapis.com/sgc7pb.MaskData"
//                 },
//                 "fg-syms:1>G/fg-paybookof": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [
//                       0,
//                       1,
//                       2,
//                       3,
//                       4,
//                       5,
//                       6,
//                       7,
//                       8,
//                       9
//                     ],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 50,
//                     "cashWin": 50,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 30,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 50,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.LinesTriggerData"
//                 },
//                 "fg-paylines": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 0,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.LinesTriggerData"
//                 },
//                 "fg-syms": {
//                   "symbolCodes": [
//                     7,
//                     2
//                   ],
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.SymbolCollection2Data"
//                 },
//                 "fg-syms:0>B/fg-checkbookof": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 0,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 },
//                 "fg-syms:1>G/fg-replacereel": {
//                   "basicComponentData": {
//                     "usedScenes": [
//                       1
//                     ],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [
//                       0
//                     ],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
//                 },
//                 "fg-paysc": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 0,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 }
//               },
//               "mapVals": {
//                 "1": 5,
//                 "2": 3,
//                 "6": 10,
//                 "7": 0,
//                 "100": 1,
//                 "101": 1,
//                 "102": 1,
//                 "103": 1
//               },
//               "mapStrVals": {},
//               "firstComponent": "fg-start",
//               "nextStepFirstComponent": "fg-start",
//               "@type": "type.googleapis.com/sgc7pb.GameParam"
//             },
//             "nextGameMod": "bg",
//             "curIndex": 0,
//             "parentIndex": 0,
//             "modType": "",
//             "prizeCoinWin": 0,
//             "prizeCashWin": 0,
//             "jackpotCoinWin": 0,
//             "jackpotCashWin": 0,
//             "jackpotType": 0
//           }
//         },
//         {
//           "coinWin": 100,
//           "cashWin": 100,
//           "clientData": {
//             "scenes": [
//               {
//                 "values": [
//                   {
//                     "values": [
//                       4,
//                       7,
//                       2
//                     ]
//                   },
//                   {
//                     "values": [
//                       4,
//                       1,
//                       2
//                     ]
//                   },
//                   {
//                     "values": [
//                       7,
//                       3,
//                       1
//                     ]
//                   },
//                   {
//                     "values": [
//                       0,
//                       6,
//                       3
//                     ]
//                   },
//                   {
//                     "values": [
//                       2,
//                       4,
//                       6
//                     ]
//                   }
//                 ],
//                 "indexes": [],
//                 "validRow": []
//               },
//               {
//                 "values": [
//                   {
//                     "values": [
//                       7,
//                       7,
//                       7
//                     ]
//                   },
//                   {
//                     "values": [
//                       4,
//                       1,
//                       2
//                     ]
//                   },
//                   {
//                     "values": [
//                       7,
//                       7,
//                       7
//                     ]
//                   },
//                   {
//                     "values": [
//                       0,
//                       6,
//                       3
//                     ]
//                   },
//                   {
//                     "values": [
//                       2,
//                       4,
//                       6
//                     ]
//                   }
//                 ],
//                 "indexes": [],
//                 "validRow": []
//               },
//               {
//                 "values": [
//                   {
//                     "values": [
//                       2,
//                       2,
//                       2
//                     ]
//                   },
//                   {
//                     "values": [
//                       2,
//                       2,
//                       2
//                     ]
//                   },
//                   {
//                     "values": [
//                       7,
//                       3,
//                       1
//                     ]
//                   },
//                   {
//                     "values": [
//                       0,
//                       6,
//                       3
//                     ]
//                   },
//                   {
//                     "values": [
//                       2,
//                       2,
//                       2
//                     ]
//                   }
//                 ],
//                 "indexes": [],
//                 "validRow": []
//               }
//             ],
//             "otherScenes": [],
//             "results": [
//               {
//                 "pos": [
//                   0,
//                   1,
//                   2,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 0,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   0,
//                   2,
//                   0
//                 ],
//                 "type": 2,
//                 "lineIndex": 1,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   2,
//                   2,
//                   2
//                 ],
//                 "type": 2,
//                 "lineIndex": 2,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   0,
//                   2,
//                   2
//                 ],
//                 "type": 2,
//                 "lineIndex": 3,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   2,
//                   2,
//                   0
//                 ],
//                 "type": 2,
//                 "lineIndex": 4,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   0,
//                   2,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 5,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   2,
//                   2,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 6,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   1,
//                   2,
//                   2
//                 ],
//                 "type": 2,
//                 "lineIndex": 7,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   1,
//                   2,
//                   0
//                 ],
//                 "type": 2,
//                 "lineIndex": 8,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   1,
//                   2,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 9,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   1,
//                   1,
//                   1,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 0,
//                 "symbol": 2,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   0,
//                   1,
//                   0,
//                   4,
//                   0
//                 ],
//                 "type": 2,
//                 "lineIndex": 1,
//                 "symbol": 2,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   2,
//                   1,
//                   2,
//                   4,
//                   2
//                 ],
//                 "type": 2,
//                 "lineIndex": 2,
//                 "symbol": 2,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   0,
//                   1,
//                   1,
//                   4,
//                   0
//                 ],
//                 "type": 2,
//                 "lineIndex": 3,
//                 "symbol": 2,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   2,
//                   1,
//                   1,
//                   4,
//                   2
//                 ],
//                 "type": 2,
//                 "lineIndex": 4,
//                 "symbol": 2,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   0,
//                   1,
//                   0,
//                   4,
//                   0
//                 ],
//                 "type": 2,
//                 "lineIndex": 5,
//                 "symbol": 2,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   2,
//                   1,
//                   2,
//                   4,
//                   2
//                 ],
//                 "type": 2,
//                 "lineIndex": 6,
//                 "symbol": 2,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   1,
//                   1,
//                   2,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 7,
//                 "symbol": 2,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   1,
//                   1,
//                   0,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 8,
//                 "symbol": 2,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   0,
//                   1,
//                   1,
//                   0,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 9,
//                 "symbol": 2,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 3,
//                 "value": 0
//               }
//             ],
//             "mulPos": [],
//             "prizeScenes": [],
//             "curGameMod": "bg",
//             "curGameModParam": {
//               "historyComponents": [
//                 "fg-start",
//                 "fg-spin",
//                 "fg-paylines",
//                 "fg-syms",
//                 "fg-syms:0>B/fg-checkbookof",
//                 "fg-syms:0>B/fg-bookof",
//                 "fg-syms:0>B/fg-replacereel",
//                 "fg-syms:0>B/fg-paybookof",
//                 "fg-syms:1>G/fg-checkbookof",
//                 "fg-syms:1>G/fg-bookof",
//                 "fg-syms:1>G/fg-replacereel",
//                 "fg-syms:1>G/fg-paybookof",
//                 "fg-paysc"
//               ],
//               "respinComponents": [
//                 "fg-start"
//               ],
//               "mapComponents": {
//                 "fg-syms:0>B/fg-checkbookof": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "fg-bookof",
//                   "symbolNum": 2,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 },
//                 "fg-syms:1>G/fg-checkbookof": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "fg-bookof",
//                   "symbolNum": 3,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 },
//                 "fg-syms:1>G/fg-replacereel": {
//                   "basicComponentData": {
//                     "usedScenes": [
//                       2
//                     ],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [
//                       0
//                     ],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
//                 },
//                 "fg-paysc": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 0,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 },
//                 "fg-start": {
//                   "triggerRespinNum": [],
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "lastRespinNum": 1,
//                   "totalRespinNum": 0,
//                   "curRespinNum": 19,
//                   "curAddRespinNum": 20,
//                   "totalCoinWin": 5570,
//                   "totalCashWin": 5570,
//                   "retriggerAddRespinNum": 0,
//                   "lastTriggerNum": 0,
//                   "curTriggerNum": 0,
//                   "@type": "type.googleapis.com/sgc7pb.RespinData"
//                 },
//                 "fg-spin": {
//                   "basicComponentData": {
//                     "usedScenes": [
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0
//                     ],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
//                 },
//                 "fg-paylines": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 0,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.LinesTriggerData"
//                 },
//                 "fg-syms": {
//                   "symbolCodes": [
//                     7,
//                     2
//                   ],
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.SymbolCollection2Data"
//                 },
//                 "fg-syms:0>B/fg-bookof": {
//                   "vals": [
//                     true,
//                     false,
//                     true,
//                     false,
//                     false
//                   ],
//                   "newVals": [
//                     true,
//                     false,
//                     true,
//                     false,
//                     false
//                   ],
//                   "basicComponentData": null,
//                   "num": 5,
//                   "newChged": 2,
//                   "@type": "type.googleapis.com/sgc7pb.MaskData"
//                 },
//                 "fg-syms:0>B/fg-replacereel": {
//                   "basicComponentData": {
//                     "usedScenes": [
//                       1
//                     ],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [
//                       0
//                     ],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
//                 },
//                 "fg-syms:0>B/fg-paybookof": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [
//                       0,
//                       1,
//                       2,
//                       3,
//                       4,
//                       5,
//                       6,
//                       7,
//                       8,
//                       9
//                     ],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 50,
//                     "cashWin": 50,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 20,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 50,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.LinesTriggerData"
//                 },
//                 "fg-syms:1>G/fg-bookof": {
//                   "vals": [
//                     true,
//                     true,
//                     false,
//                     false,
//                     true
//                   ],
//                   "newVals": [
//                     true,
//                     true,
//                     false,
//                     false,
//                     true
//                   ],
//                   "basicComponentData": null,
//                   "num": 5,
//                   "newChged": 3,
//                   "@type": "type.googleapis.com/sgc7pb.MaskData"
//                 },
//                 "fg-syms:1>G/fg-paybookof": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [
//                       10,
//                       11,
//                       12,
//                       13,
//                       14,
//                       15,
//                       16,
//                       17,
//                       18,
//                       19
//                     ],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 50,
//                     "cashWin": 50,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 30,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 50,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.LinesTriggerData"
//                 }
//               },
//               "mapVals": {
//                 "1": 5,
//                 "2": 3,
//                 "6": 10,
//                 "7": 0,
//                 "100": 1,
//                 "101": 1,
//                 "102": 1,
//                 "103": 1
//               },
//               "mapStrVals": {},
//               "firstComponent": "fg-start",
//               "nextStepFirstComponent": "fg-start",
//               "@type": "type.googleapis.com/sgc7pb.GameParam"
//             },
//             "nextGameMod": "bg",
//             "curIndex": 0,
//             "parentIndex": 0,
//             "modType": "",
//             "prizeCoinWin": 0,
//             "prizeCashWin": 0,
//             "jackpotCoinWin": 0,
//             "jackpotCashWin": 0,
//             "jackpotType": 0
//           }
//         },
//         {
//           "coinWin": 50,
//           "cashWin": 50,
//           "clientData": {
//             "scenes": [
//               {
//                 "values": [
//                   {
//                     "values": [
//                       2,
//                       0,
//                       1
//                     ]
//                   },
//                   {
//                     "values": [
//                       5,
//                       1,
//                       0
//                     ]
//                   },
//                   {
//                     "values": [
//                       3,
//                       1,
//                       7
//                     ]
//                   },
//                   {
//                     "values": [
//                       3,
//                       0,
//                       5
//                     ]
//                   },
//                   {
//                     "values": [
//                       5,
//                       0,
//                       7
//                     ]
//                   }
//                 ],
//                 "indexes": [],
//                 "validRow": []
//               },
//               {
//                 "values": [
//                   {
//                     "values": [
//                       2,
//                       0,
//                       1
//                     ]
//                   },
//                   {
//                     "values": [
//                       5,
//                       1,
//                       0
//                     ]
//                   },
//                   {
//                     "values": [
//                       7,
//                       7,
//                       7
//                     ]
//                   },
//                   {
//                     "values": [
//                       3,
//                       0,
//                       5
//                     ]
//                   },
//                   {
//                     "values": [
//                       7,
//                       7,
//                       7
//                     ]
//                   }
//                 ],
//                 "indexes": [],
//                 "validRow": []
//               }
//             ],
//             "otherScenes": [],
//             "results": [
//               {
//                 "pos": [
//                   2,
//                   1,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 0,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   0,
//                   4,
//                   0
//                 ],
//                 "type": 2,
//                 "lineIndex": 1,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   2,
//                   4,
//                   2
//                 ],
//                 "type": 2,
//                 "lineIndex": 2,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   2,
//                   4,
//                   0
//                 ],
//                 "type": 2,
//                 "lineIndex": 3,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   0,
//                   4,
//                   2
//                 ],
//                 "type": 2,
//                 "lineIndex": 4,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   1,
//                   4,
//                   0
//                 ],
//                 "type": 2,
//                 "lineIndex": 5,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   1,
//                   4,
//                   2
//                 ],
//                 "type": 2,
//                 "lineIndex": 6,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   2,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 7,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   0,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 8,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   2,
//                   1,
//                   4,
//                   1
//                 ],
//                 "type": 2,
//                 "lineIndex": 9,
//                 "symbol": 7,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 5,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 2,
//                 "value": 0
//               }
//             ],
//             "mulPos": [],
//             "prizeScenes": [],
//             "curGameMod": "bg",
//             "curGameModParam": {
//               "historyComponents": [
//                 "fg-start",
//                 "fg-spin",
//                 "fg-paylines",
//                 "fg-syms",
//                 "fg-syms:0>B/fg-checkbookof",
//                 "fg-syms:0>B/fg-bookof",
//                 "fg-syms:0>B/fg-replacereel",
//                 "fg-syms:0>B/fg-paybookof",
//                 "fg-syms:1>G/fg-checkbookof",
//                 "fg-paysc"
//               ],
//               "respinComponents": [
//                 "fg-start"
//               ],
//               "mapComponents": {
//                 "fg-spin": {
//                   "basicComponentData": {
//                     "usedScenes": [
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0,
//                       0
//                     ],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
//                 },
//                 "fg-paylines": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 0,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.LinesTriggerData"
//                 },
//                 "fg-syms:0>B/fg-paybookof": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [
//                       0,
//                       1,
//                       2,
//                       3,
//                       4,
//                       5,
//                       6,
//                       7,
//                       8,
//                       9
//                     ],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 50,
//                     "cashWin": 50,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 20,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 50,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.LinesTriggerData"
//                 },
//                 "fg-syms:1>G/fg-checkbookof": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 0,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 },
//                 "fg-paysc": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 0,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 },
//                 "fg-start": {
//                   "triggerRespinNum": [],
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "lastRespinNum": 0,
//                   "totalRespinNum": 0,
//                   "curRespinNum": 20,
//                   "curAddRespinNum": 20,
//                   "totalCoinWin": 5620,
//                   "totalCashWin": 5620,
//                   "retriggerAddRespinNum": 0,
//                   "lastTriggerNum": 0,
//                   "curTriggerNum": 0,
//                   "@type": "type.googleapis.com/sgc7pb.RespinData"
//                 },
//                 "fg-syms:0>B/fg-checkbookof": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "fg-bookof",
//                   "symbolNum": 2,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 },
//                 "fg-syms:0>B/fg-bookof": {
//                   "vals": [
//                     false,
//                     false,
//                     true,
//                     false,
//                     true
//                   ],
//                   "newVals": [
//                     false,
//                     false,
//                     true,
//                     false,
//                     true
//                   ],
//                   "basicComponentData": null,
//                   "num": 5,
//                   "newChged": 2,
//                   "@type": "type.googleapis.com/sgc7pb.MaskData"
//                 },
//                 "fg-syms:0>B/fg-replacereel": {
//                   "basicComponentData": {
//                     "usedScenes": [
//                       1
//                     ],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [
//                       0
//                     ],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
//                 },
//                 "fg-syms": {
//                   "symbolCodes": [
//                     7,
//                     2
//                   ],
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.SymbolCollection2Data"
//                 }
//               },
//               "mapVals": {
//                 "1": 5,
//                 "2": 3,
//                 "6": 10,
//                 "7": 0,
//                 "100": 1,
//                 "101": 1,
//                 "102": 1,
//                 "103": 1
//               },
//               "mapStrVals": {},
//               "firstComponent": "fg-start",
//               "nextStepFirstComponent": "",
//               "@type": "type.googleapis.com/sgc7pb.GameParam"
//             },
//             "nextGameMod": "bg",
//             "curIndex": 0,
//             "parentIndex": 0,
//             "modType": "",
//             "prizeCoinWin": 0,
//             "prizeCashWin": 0,
//             "jackpotCoinWin": 0,
//             "jackpotCashWin": 0,
//             "jackpotType": 0
//           }
//         }
//       ],
//       "nextCommands": [],
//       "nextCommandParams": [],
//       "playerState": {
//         "public": {
//           "json": "{\"curgamemod\":\"bg\",\"nextm\":0}",
//           "@type": "type.googleapis.com/sgc7pb.BasicPlayerPublicState2"
//         }
//       },
//       "finished": true,
//       "stake": null,
//       "playStartTime": 1707209998246
//     },
//     "playIndex": -1,
//     "bet": 1,
//     "lines": 10,
//     "totalwin": 5670,
//     "playwin": 0,
//     "maxWinLimit": 0
//   }
// }

penguin = true;
// var msgdata2 = {
//   "msgid": "gamemoduleinfo",
//   "gamemodulename": "QVrwqcGsXqOON6eSq6hXk",
//   "gameid": 69008,
//   "gmi": {
//     "defaultScene": {
//       "values": [
//         {
//           "values": [
//             1,
//             1,
//             2,
//             2,
//             2,
//             3,
//             3
//           ]
//         },
//         {
//           "values": [
//             2,
//             2,
//             1,
//             1,
//             1,
//             3,
//             3
//           ]
//         },
//         {
//           "values": [
//             4,
//             4,
//             5,
//             5,
//             5,
//             6,
//             6
//           ]
//         },
//         {
//           "values": [
//             5,
//             5,
//             4,
//             4,
//             4,
//             6,
//             6
//           ]
//         },
//         {
//           "values": [
//             7,
//             7,
//             8,
//             8,
//             8,
//             9,
//             9
//           ]
//         },
//         {
//           "values": [
//             8,
//             8,
//             7,
//             7,
//             7,
//             9,
//             9
//           ]
//         },
//         {
//           "values": [
//             1,
//             1,
//             7,
//             7,
//             8,
//             8,
//             9
//           ]
//         }
//       ],
//       "indexes": [],
//       "validRow": []
//     },
//     "replyPlay": {
//       "randomNumbers": [
//         86,
//         65,
//         208,
//         407,
//         363,
//         101,
//         236
//       ],
//       "results": [
//         {
//           "coinWin": 25,
//           "cashWin": 250,
//           "clientData": {
//             "scenes": [
//               {
//                 "values": [
//                   {
//                     "values": [
//                       9,
//                       3,
//                       3,
//                       9,
//                       9,
//                       9,
//                       11
//                     ]
//                   },
//                   {
//                     "values": [
//                       6,
//                       6,
//                       8,
//                       8,
//                       8,
//                       1,
//                       1
//                     ]
//                   },
//                   {
//                     "values": [
//                       1,
//                       1,
//                       10,
//                       10,
//                       10,
//                       8,
//                       8
//                     ]
//                   },
//                   {
//                     "values": [
//                       8,
//                       8,
//                       8,
//                       2,
//                       2,
//                       1,
//                       1
//                     ]
//                   },
//                   {
//                     "values": [
//                       6,
//                       6,
//                       5,
//                       5,
//                       5,
//                       6,
//                       6
//                     ]
//                   },
//                   {
//                     "values": [
//                       11,
//                       11,
//                       11,
//                       6,
//                       6,
//                       6,
//                       7
//                     ]
//                   },
//                   {
//                     "values": [
//                       2,
//                       9,
//                       9,
//                       4,
//                       4,
//                       4,
//                       8
//                     ]
//                   }
//                 ],
//                 "indexes": [],
//                 "validRow": []
//               },
//               {
//                 "values": [
//                   {
//                     "values": [
//                       9,
//                       3,
//                       3,
//                       9,
//                       9,
//                       9,
//                       11
//                     ]
//                   },
//                   {
//                     "values": [
//                       -1,
//                       -1,
//                       -1,
//                       -1,
//                       -1,
//                       1,
//                       1
//                     ]
//                   },
//                   {
//                     "values": [
//                       1,
//                       1,
//                       10,
//                       10,
//                       10,
//                       -1,
//                       -1
//                     ]
//                   },
//                   {
//                     "values": [
//                       -1,
//                       -1,
//                       -1,
//                       2,
//                       2,
//                       1,
//                       1
//                     ]
//                   },
//                   {
//                     "values": [
//                       -1,
//                       -1,
//                       -1,
//                       -1,
//                       5,
//                       5,
//                       5
//                     ]
//                   },
//                   {
//                     "values": [
//                       -1,
//                       -1,
//                       -1,
//                       11,
//                       11,
//                       11,
//                       7
//                     ]
//                   },
//                   {
//                     "values": [
//                       -1,
//                       2,
//                       9,
//                       9,
//                       4,
//                       4,
//                       4
//                     ]
//                   }
//                 ],
//                 "indexes": [],
//                 "validRow": []
//               }
//             ],
//             "otherScenes": [],
//             "results": [
//               {
//                 "pos": [
//                   1,
//                   0,
//                   1,
//                   1,
//                   4,
//                   0,
//                   4,
//                   1,
//                   4,
//                   5,
//                   4,
//                   6,
//                   5,
//                   3,
//                   5,
//                   4,
//                   5,
//                   5
//                 ],
//                 "type": 1,
//                 "lineIndex": -1,
//                 "symbol": 6,
//                 "mul": 20,
//                 "coinWin": 20,
//                 "cashWin": 200,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 9,
//                 "value": 0
//               },
//               {
//                 "pos": [
//                   1,
//                   2,
//                   1,
//                   3,
//                   1,
//                   4,
//                   2,
//                   5,
//                   2,
//                   6,
//                   3,
//                   0,
//                   3,
//                   1,
//                   3,
//                   2,
//                   6,
//                   6
//                 ],
//                 "type": 1,
//                 "lineIndex": -1,
//                 "symbol": 8,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 50,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 9,
//                 "value": 0
//               }
//             ],
//             "mulPos": [],
//             "prizeScenes": [],
//             "curGameMod": "bg",
//             "curGameModParam": {
//               "historyComponents": [
//                 "bg-spin",
//                 "bg-payblue",
//                 "bg-blue",
//                 "bg-payred",
//                 "bg-red",
//                 "bg-paygreen",
//                 "bg-green",
//                 "bg-remove"
//               ],
//               "respinComponents": [
//                 "bg-respin"
//               ],
//               "mapComponents": {
//                 "bg-spin": {
//                   "basicComponentData": {
//                     "usedScenes": [
//                       0
//                     ],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
//                 },
//                 "bg-blue": {
//                   "val": 0,
//                   "newCollector": 0,
//                   "@type": "type.googleapis.com/sgc7pb.CollectorData"
//                 },
//                 "bg-payred": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [
//                       0,
//                       1
//                     ],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 25,
//                     "cashWin": 250,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 18,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 25,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 },
//                 "bg-paygreen": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 0,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 },
//                 "bg-green": {
//                   "val": 0,
//                   "newCollector": 0,
//                   "@type": "type.googleapis.com/sgc7pb.CollectorData"
//                 },
//                 "bg-payblue": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 0,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 },
//                 "bg-red": {
//                   "val": 0,
//                   "newCollector": 0,
//                   "@type": "type.googleapis.com/sgc7pb.CollectorData"
//                 },
//                 "bg-remove": {
//                   "basicComponentData": {
//                     "usedScenes": [
//                       1
//                     ],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "removedNum": 18,
//                   "@type": "type.googleapis.com/sgc7pb.RemoveSymbolsData"
//                 },
//                 "bg-respin": {
//                   "triggerRespinNum": [],
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "lastRespinNum": 1,
//                   "totalRespinNum": 0,
//                   "curRespinNum": 0,
//                   "curAddRespinNum": 1,
//                   "totalCoinWin": 0,
//                   "totalCashWin": 0,
//                   "retriggerAddRespinNum": 0,
//                   "lastTriggerNum": 0,
//                   "curTriggerNum": 0,
//                   "@type": "type.googleapis.com/sgc7pb.RespinData"
//                 }
//               },
//               "mapVals": {
//                 "1": 7,
//                 "2": 7,
//                 "7": 0,
//                 "100": 1,
//                 "101": 1,
//                 "102": 1,
//                 "103": 1
//               },
//               "mapStrVals": {},
//               "firstComponent": "",
//               "nextStepFirstComponent": "bg-respin",
//               "@type": "type.googleapis.com/sgc7pb.GameParam"
//             },
//             "nextGameMod": "bg",
//             "curIndex": 0,
//             "parentIndex": 0,
//             "modType": "",
//             "prizeCoinWin": 0,
//             "prizeCashWin": 0,
//             "jackpotCoinWin": 0,
//             "jackpotCashWin": 0,
//             "jackpotType": 0
//           }
//         },
//         {
//           "coinWin": 5,
//           "cashWin": 50,
//           "clientData": {
//             "scenes": [
//               {
//                 "values": [
//                   {
//                     "values": [
//                       9,
//                       3,
//                       3,
//                       9,
//                       9,
//                       9,
//                       11
//                     ]
//                   },
//                   {
//                     "values": [
//                       -1,
//                       -1,
//                       -1,
//                       -1,
//                       -1,
//                       1,
//                       1
//                     ]
//                   },
//                   {
//                     "values": [
//                       1,
//                       1,
//                       10,
//                       10,
//                       10,
//                       -1,
//                       -1
//                     ]
//                   },
//                   {
//                     "values": [
//                       -1,
//                       -1,
//                       -1,
//                       2,
//                       2,
//                       1,
//                       1
//                     ]
//                   },
//                   {
//                     "values": [
//                       -1,
//                       -1,
//                       -1,
//                       -1,
//                       5,
//                       5,
//                       5
//                     ]
//                   },
//                   {
//                     "values": [
//                       -1,
//                       -1,
//                       -1,
//                       11,
//                       11,
//                       11,
//                       7
//                     ]
//                   },
//                   {
//                     "values": [
//                       -1,
//                       2,
//                       9,
//                       9,
//                       4,
//                       4,
//                       4
//                     ]
//                   }
//                 ],
//                 "indexes": [],
//                 "validRow": []
//               },
//               {
//                 "values": [
//                   {
//                     "values": [
//                       9,
//                       3,
//                       3,
//                       9,
//                       9,
//                       9,
//                       11
//                     ]
//                   },
//                   {
//                     "values": [
//                       -1,
//                       -1,
//                       -1,
//                       -1,
//                       -1,
//                       1,
//                       1
//                     ]
//                   },
//                   {
//                     "values": [
//                       -1,
//                       -1,
//                       1,
//                       1,
//                       10,
//                       10,
//                       10
//                     ]
//                   },
//                   {
//                     "values": [
//                       -1,
//                       -1,
//                       -1,
//                       2,
//                       2,
//                       1,
//                       1
//                     ]
//                   },
//                   {
//                     "values": [
//                       -1,
//                       -1,
//                       5,
//                       5,
//                       5,
//                       -1,
//                       -1
//                     ]
//                   },
//                   {
//                     "values": [
//                       11,
//                       11,
//                       11,
//                       -1,
//                       -1,
//                       -1,
//                       7
//                     ]
//                   },
//                   {
//                     "values": [
//                       2,
//                       9,
//                       9,
//                       4,
//                       4,
//                       4,
//                       -1
//                     ]
//                   }
//                 ],
//                 "indexes": [],
//                 "validRow": []
//               },
//               {
//                 "values": [
//                   {
//                     "values": [
//                       9,
//                       3,
//                       3,
//                       9,
//                       9,
//                       9,
//                       11
//                     ]
//                   },
//                   {
//                     "values": [
//                       8,
//                       4,
//                       4,
//                       5,
//                       5,
//                       1,
//                       1
//                     ]
//                   },
//                   {
//                     "values": [
//                       4,
//                       4,
//                       1,
//                       1,
//                       10,
//                       10,
//                       10
//                     ]
//                   },
//                   {
//                     "values": [
//                       3,
//                       3,
//                       3,
//                       2,
//                       2,
//                       1,
//                       1
//                     ]
//                   },
//                   {
//                     "values": [
//                       3,
//                       10,
//                       5,
//                       5,
//                       5,
//                       10,
//                       6
//                     ]
//                   },
//                   {
//                     "values": [
//                       11,
//                       11,
//                       11,
//                       7,
//                       4,
//                       4,
//                       7
//                     ]
//                   },
//                   {
//                     "values": [
//                       2,
//                       9,
//                       9,
//                       4,
//                       4,
//                       4,
//                       2
//                     ]
//                   }
//                 ],
//                 "indexes": [],
//                 "validRow": []
//               },
//               {
//                 "values": [
//                   {
//                     "values": [
//                       9,
//                       3,
//                       3,
//                       9,
//                       9,
//                       9,
//                       11
//                     ]
//                   },
//                   {
//                     "values": [
//                       8,
//                       -1,
//                       -1,
//                       5,
//                       5,
//                       1,
//                       1
//                     ]
//                   },
//                   {
//                     "values": [
//                       -1,
//                       -1,
//                       1,
//                       1,
//                       10,
//                       10,
//                       10
//                     ]
//                   },
//                   {
//                     "values": [
//                       3,
//                       3,
//                       3,
//                       2,
//                       2,
//                       1,
//                       1
//                     ]
//                   },
//                   {
//                     "values": [
//                       3,
//                       10,
//                       5,
//                       5,
//                       5,
//                       10,
//                       6
//                     ]
//                   },
//                   {
//                     "values": [
//                       -1,
//                       -1,
//                       11,
//                       11,
//                       11,
//                       7,
//                       7
//                     ]
//                   },
//                   {
//                     "values": [
//                       -1,
//                       -1,
//                       -1,
//                       2,
//                       9,
//                       9,
//                       2
//                     ]
//                   }
//                 ],
//                 "indexes": [],
//                 "validRow": []
//               }
//             ],
//             "otherScenes": [],
//             "results": [
//               {
//                 "pos": [
//                   1,
//                   1,
//                   1,
//                   2,
//                   2,
//                   0,
//                   2,
//                   1,
//                   5,
//                   4,
//                   5,
//                   5,
//                   6,
//                   3,
//                   6,
//                   4,
//                   6,
//                   5
//                 ],
//                 "type": 1,
//                 "lineIndex": -1,
//                 "symbol": 4,
//                 "mul": 5,
//                 "coinWin": 5,
//                 "cashWin": 50,
//                 "otherMul": 1,
//                 "wilds": 0,
//                 "symbolNums": 9,
//                 "value": 0
//               }
//             ],
//             "mulPos": [],
//             "prizeScenes": [],
//             "curGameMod": "bg",
//             "curGameModParam": {
//               "historyComponents": [
//                 "bg-respin",
//                 "bg-dropdown",
//                 "bg-refill",
//                 "bg-blueeffect",
//                 "bg-greeneffect",
//                 "bg-payblue",
//                 "bg-blue",
//                 "bg-payred",
//                 "bg-red",
//                 "bg-paygreen",
//                 "bg-green",
//                 "bg-remove"
//               ],
//               "respinComponents": [
//                 "bg-respin"
//               ],
//               "mapComponents": {
//                 "bg-respin": {
//                   "triggerRespinNum": [],
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "lastRespinNum": 1,
//                   "totalRespinNum": 0,
//                   "curRespinNum": 1,
//                   "curAddRespinNum": 2,
//                   "totalCoinWin": 5,
//                   "totalCashWin": 50,
//                   "retriggerAddRespinNum": 0,
//                   "lastTriggerNum": 0,
//                   "curTriggerNum": 0,
//                   "@type": "type.googleapis.com/sgc7pb.RespinData"
//                 },
//                 "bg-refill": {
//                   "basicComponentData": {
//                     "usedScenes": [
//                       2
//                     ],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [
//                       0
//                     ],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
//                 },
//                 "bg-red": {
//                   "val": 0,
//                   "newCollector": 0,
//                   "@type": "type.googleapis.com/sgc7pb.CollectorData"
//                 },
//                 "bg-paygreen": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 0,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 },
//                 "bg-dropdown": {
//                   "basicComponentData": {
//                     "usedScenes": [
//                       1
//                     ],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [
//                       0
//                     ],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
//                 },
//                 "bg-blueeffect": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "queue": 0,
//                   "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
//                 },
//                 "bg-greeneffect": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "queue": 0,
//                   "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
//                 },
//                 "bg-payblue": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [
//                       0
//                     ],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 5,
//                     "cashWin": 50,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 9,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 5,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 },
//                 "bg-blue": {
//                   "val": 0,
//                   "newCollector": 0,
//                   "@type": "type.googleapis.com/sgc7pb.CollectorData"
//                 },
//                 "bg-payred": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 0,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 },
//                 "bg-green": {
//                   "val": 0,
//                   "newCollector": 0,
//                   "@type": "type.googleapis.com/sgc7pb.CollectorData"
//                 },
//                 "bg-remove": {
//                   "basicComponentData": {
//                     "usedScenes": [
//                       1,
//                       3
//                     ],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "removedNum": 9,
//                   "@type": "type.googleapis.com/sgc7pb.RemoveSymbolsData"
//                 }
//               },
//               "mapVals": {
//                 "1": 7,
//                 "2": 7,
//                 "7": 0,
//                 "100": 1,
//                 "101": 1,
//                 "102": 1,
//                 "103": 1
//               },
//               "mapStrVals": {},
//               "firstComponent": "bg-respin",
//               "nextStepFirstComponent": "bg-respin",
//               "@type": "type.googleapis.com/sgc7pb.GameParam"
//             },
//             "nextGameMod": "bg",
//             "curIndex": 0,
//             "parentIndex": 0,
//             "modType": "",
//             "prizeCoinWin": 0,
//             "prizeCashWin": 0,
//             "jackpotCoinWin": 0,
//             "jackpotCashWin": 0,
//             "jackpotType": 0
//           }
//         },
//         {
//           "coinWin": 0,
//           "cashWin": 0,
//           "clientData": {
//             "scenes": [
//               {
//                 "values": [
//                   {
//                     "values": [
//                       9,
//                       3,
//                       3,
//                       9,
//                       9,
//                       9,
//                       11
//                     ]
//                   },
//                   {
//                     "values": [
//                       8,
//                       -1,
//                       -1,
//                       5,
//                       5,
//                       1,
//                       1
//                     ]
//                   },
//                   {
//                     "values": [
//                       -1,
//                       -1,
//                       1,
//                       1,
//                       10,
//                       10,
//                       10
//                     ]
//                   },
//                   {
//                     "values": [
//                       3,
//                       3,
//                       3,
//                       2,
//                       2,
//                       1,
//                       1
//                     ]
//                   },
//                   {
//                     "values": [
//                       3,
//                       10,
//                       5,
//                       5,
//                       5,
//                       10,
//                       6
//                     ]
//                   },
//                   {
//                     "values": [
//                       -1,
//                       -1,
//                       11,
//                       11,
//                       11,
//                       7,
//                       7
//                     ]
//                   },
//                   {
//                     "values": [
//                       -1,
//                       -1,
//                       -1,
//                       2,
//                       9,
//                       9,
//                       2
//                     ]
//                   }
//                 ],
//                 "indexes": [],
//                 "validRow": []
//               },
//               {
//                 "values": [
//                   {
//                     "values": [
//                       9,
//                       3,
//                       3,
//                       9,
//                       9,
//                       9,
//                       11
//                     ]
//                   },
//                   {
//                     "values": [
//                       -1,
//                       -1,
//                       8,
//                       5,
//                       5,
//                       1,
//                       1
//                     ]
//                   },
//                   {
//                     "values": [
//                       -1,
//                       -1,
//                       1,
//                       1,
//                       10,
//                       10,
//                       10
//                     ]
//                   },
//                   {
//                     "values": [
//                       3,
//                       3,
//                       3,
//                       2,
//                       2,
//                       1,
//                       1
//                     ]
//                   },
//                   {
//                     "values": [
//                       3,
//                       10,
//                       5,
//                       5,
//                       5,
//                       10,
//                       6
//                     ]
//                   },
//                   {
//                     "values": [
//                       11,
//                       11,
//                       11,
//                       7,
//                       -1,
//                       -1,
//                       7
//                     ]
//                   },
//                   {
//                     "values": [
//                       2,
//                       9,
//                       9,
//                       -1,
//                       -1,
//                       -1,
//                       2
//                     ]
//                   }
//                 ],
//                 "indexes": [],
//                 "validRow": []
//               },
//               {
//                 "values": [
//                   {
//                     "values": [
//                       9,
//                       3,
//                       3,
//                       9,
//                       9,
//                       9,
//                       11
//                     ]
//                   },
//                   {
//                     "values": [
//                       7,
//                       8,
//                       8,
//                       5,
//                       5,
//                       1,
//                       1
//                     ]
//                   },
//                   {
//                     "values": [
//                       6,
//                       6,
//                       1,
//                       1,
//                       10,
//                       10,
//                       10
//                     ]
//                   },
//                   {
//                     "values": [
//                       3,
//                       3,
//                       3,
//                       2,
//                       2,
//                       1,
//                       1
//                     ]
//                   },
//                   {
//                     "values": [
//                       3,
//                       10,
//                       5,
//                       5,
//                       5,
//                       10,
//                       6
//                     ]
//                   },
//                   {
//                     "values": [
//                       11,
//                       11,
//                       11,
//                       7,
//                       4,
//                       7,
//                       7
//                     ]
//                   },
//                   {
//                     "values": [
//                       2,
//                       9,
//                       9,
//                       4,
//                       5,
//                       5,
//                       2
//                     ]
//                   }
//                 ],
//                 "indexes": [],
//                 "validRow": []
//               }
//             ],
//             "otherScenes": [],
//             "results": [],
//             "mulPos": [],
//             "prizeScenes": [],
//             "curGameMod": "bg",
//             "curGameModParam": {
//               "historyComponents": [
//                 "bg-respin",
//                 "bg-dropdown",
//                 "bg-refill",
//                 "bg-blueeffect",
//                 "bg-greeneffect",
//                 "bg-payblue",
//                 "bg-blue",
//                 "bg-payred",
//                 "bg-red",
//                 "bg-paygreen",
//                 "bg-green",
//                 "bg-payfg"
//               ],
//               "respinComponents": [
//                 "bg-respin"
//               ],
//               "mapComponents": {
//                 "bg-blue": {
//                   "val": 0,
//                   "newCollector": 0,
//                   "@type": "type.googleapis.com/sgc7pb.CollectorData"
//                 },
//                 "bg-green": {
//                   "val": 0,
//                   "newCollector": 0,
//                   "@type": "type.googleapis.com/sgc7pb.CollectorData"
//                 },
//                 "bg-respin": {
//                   "triggerRespinNum": [],
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "lastRespinNum": 0,
//                   "totalRespinNum": 0,
//                   "curRespinNum": 2,
//                   "curAddRespinNum": 2,
//                   "totalCoinWin": 5,
//                   "totalCashWin": 50,
//                   "retriggerAddRespinNum": 0,
//                   "lastTriggerNum": 0,
//                   "curTriggerNum": 0,
//                   "@type": "type.googleapis.com/sgc7pb.RespinData"
//                 },
//                 "bg-dropdown": {
//                   "basicComponentData": {
//                     "usedScenes": [
//                       1,
//                       1
//                     ],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [
//                       0
//                     ],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
//                 },
//                 "bg-refill": {
//                   "basicComponentData": {
//                     "usedScenes": [
//                       2
//                     ],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [
//                       0
//                     ],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
//                 },
//                 "bg-blueeffect": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "queue": 0,
//                   "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
//                 },
//                 "bg-greeneffect": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": 0,
//                     "runIndex": 0
//                   },
//                   "queue": 0,
//                   "@type": "type.googleapis.com/sgc7pb.QueueBranchData"
//                 },
//                 "bg-payblue": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 0,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 },
//                 "bg-payred": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 0,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 },
//                 "bg-red": {
//                   "val": 0,
//                   "newCollector": 0,
//                   "@type": "type.googleapis.com/sgc7pb.CollectorData"
//                 },
//                 "bg-paygreen": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 0,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 },
//                 "bg-payfg": {
//                   "basicComponentData": {
//                     "usedScenes": [],
//                     "usedOtherScenes": [],
//                     "usedResults": [],
//                     "usedPrizeScenes": [],
//                     "srcScenes": [],
//                     "coinWin": 0,
//                     "cashWin": 0,
//                     "targetScene": -1,
//                     "runIndex": 0
//                   },
//                   "nextComponent": "",
//                   "symbolNum": 0,
//                   "wildNum": 0,
//                   "respinNum": 0,
//                   "wins": 0,
//                   "winMulti": 1,
//                   "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
//                 }
//               },
//               "mapVals": {
//                 "1": 7,
//                 "2": 7,
//                 "7": 0,
//                 "100": 1,
//                 "101": 1,
//                 "102": 1,
//                 "103": 1
//               },
//               "mapStrVals": {},
//               "firstComponent": "bg-respin",
//               "nextStepFirstComponent": "",
//               "@type": "type.googleapis.com/sgc7pb.GameParam"
//             },
//             "nextGameMod": "bg",
//             "curIndex": 0,
//             "parentIndex": 0,
//             "modType": "",
//             "prizeCoinWin": 0,
//             "prizeCashWin": 0,
//             "jackpotCoinWin": 0,
//             "jackpotCashWin": 0,
//             "jackpotType": 0
//           }
//         }
//       ],
//       "nextCommands": [],
//       "nextCommandParams": [],
//       "playerState": {
//         "public": {
//           "json": "{\"curgamemod\":\"bg\",\"nextm\":0}",
//           "@type": "type.googleapis.com/sgc7pb.BasicPlayerPublicState2"
//         }
//       },
//       "finished": true,
//       "stake": null,
//       "playStartTime": 1708498218041
//     },
//     "playIndex": -1,
//     "bet": 10,
//     "lines": 10,
//     "totalwin": 300,
//     "playwin": 0,
//     "maxWinLimit": 0
//   }
// };

function onBegin(data) {
  var type = data.curType;

  while (Logic.instance.hasNextState()) {
    Logic.instance.nextState();
  }

  Logic.instance.endStep();
}

function onEnd(data) {
  var type = data.curType;

  //Logic.instance.beginStep();
}

// test('slotcraft', () => {
Logic.instance.addStepBeginListener(onBegin);
Logic.instance.addStepEndListener(onEnd);

Logic.instance.onMessage(msgdata2);

// while (Logic.instance.hasNextStep()) {
//   Logic.instance.nextStep();
// }

console.log("done");
// });