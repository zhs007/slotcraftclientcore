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

Logic.instance.onConfig(cfgdata, statedata, statelist);

moonwalker = true;
var msgdata = {
  "msgid": "gamemoduleinfo",
  "gamemodulename": "moonwalk",
  "gameid": 61121,
  "gmi": {
    "defaultScene": {
      "values": [
        {
          "values": [
            1,
            2,
            3
          ]
        },
        {
          "values": [
            4,
            5,
            6
          ]
        },
        {
          "values": [
            1,
            2,
            3
          ]
        },
        {
          "values": [
            7,
            8,
            9
          ]
        },
        {
          "values": [
            1,
            2,
            3
          ]
        }
      ],
      "indexes": [],
      "validRow": []
    },
    "replyPlay": {
      "randomNumbers": [
        130,
        246,
        151,
        63,
        210,
        266,
        9,
        240,
        81,
        287,
        72,
        279,
        18,
        150,
        210,
        266,
        210,
        182,
        6,
        125,
        56,
        90,
        152,
        252,
        11,
        275,
        229,
        109,
        101,
        28,
        13,
        260,
        234,
        80,
        99,
        157,
        5,
        6,
        93,
        139,
        242,
        128,
        11,
        152,
        280,
        29,
        104,
        126,
        7,
        247,
        70,
        239,
        161,
        44,
        15,
        242,
        203,
        101,
        300,
        129,
        14,
        253,
        193,
        53,
        229,
        163,
        14,
        132,
        249,
        249,
        166,
        238,
        8,
        70,
        272,
        205,
        226,
        53,
        2,
        13,
        67,
        107,
        150,
        137,
        13,
        18,
        155,
        26,
        107,
        295,
        17,
        3,
        275,
        125,
        169,
        288
      ],
      "results": [
        {
          "coinWin": 50,
          "cashWin": 500,
          "clientData": {
            "scenes": [
              {
                "values": [
                  {
                    "values": [
                      8,
                      12,
                      9
                    ]
                  },
                  {
                    "values": [
                      13,
                      13,
                      8
                    ]
                  },
                  {
                    "values": [
                      8,
                      11,
                      12
                    ]
                  },
                  {
                    "values": [
                      10,
                      12,
                      7
                    ]
                  },
                  {
                    "values": [
                      4,
                      7,
                      11
                    ]
                  }
                ],
                "indexes": [],
                "validRow": []
              }
            ],
            "otherScenes": [],
            "results": [
              {
                "pos": [
                  0,
                  1,
                  2,
                  2,
                  3,
                  1
                ],
                "type": 1,
                "lineIndex": -1,
                "symbol": 12,
                "mul": 50,
                "coinWin": 50,
                "cashWin": 500,
                "otherMul": 1,
                "wilds": 0,
                "symbolNums": 3,
                "value": 0
              },
              {
                "pos": [
                  0,
                  1,
                  2,
                  2,
                  3,
                  1
                ],
                "type": 9,
                "lineIndex": -1,
                "symbol": 12,
                "mul": 0,
                "coinWin": 0,
                "cashWin": 0,
                "otherMul": 0,
                "wilds": 0,
                "symbolNums": 3,
                "value": 15
              }
            ],
            "mulPos": [],
            "prizeScenes": [],
            "curGameMod": "basic",
            "curGameModParam": {
              "historyComponents": [
                "bg-spin",
                "bg-payfg",
                "bg-triggerfg"
              ],
              "respinComponents": [
                "fg-start"
              ],
              "mapComponents": {
                "bg-spin": {
                  "basicComponentData": {
                    "usedScenes": [
                      0
                    ],
                    "usedOtherScenes": [],
                    "usedResults": [],
                    "usedPrizeScenes": [],
                    "srcScenes": [],
                    "coinWin": 0,
                    "cashWin": 0,
                    "targetScene": 0,
                    "runIndex": 0
                  },
                  "reelSetIndex": 1,
                  "@type": "type.googleapis.com/sgc7pb.WeightReelsData"
                },
                "bg-payfg": {
                  "basicComponentData": {
                    "usedScenes": [],
                    "usedOtherScenes": [],
                    "usedResults": [
                      0
                    ],
                    "usedPrizeScenes": [],
                    "srcScenes": [],
                    "coinWin": 50,
                    "cashWin": 500,
                    "targetScene": 0,
                    "runIndex": 0
                  },
                  "nextComponent": "",
                  "symbolNum": 3,
                  "wildNum": 0,
                  "respinNum": 0,
                  "wins": 50,
                  "winMulti": 1,
                  "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                },
                "bg-triggerfg": {
                  "basicComponentData": {
                    "usedScenes": [],
                    "usedOtherScenes": [],
                    "usedResults": [
                      1
                    ],
                    "usedPrizeScenes": [],
                    "srcScenes": [],
                    "coinWin": 0,
                    "cashWin": 0,
                    "targetScene": 0,
                    "runIndex": 0
                  },
                  "nextComponent": "fg-start",
                  "symbolNum": 3,
                  "wildNum": 0,
                  "respinNum": 15,
                  "wins": 0,
                  "winMulti": 1,
                  "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                },
                "fg-start": {
                  "triggerRespinNum": [],
                  "basicComponentData": {
                    "usedScenes": [],
                    "usedOtherScenes": [],
                    "usedResults": [],
                    "usedPrizeScenes": [],
                    "srcScenes": [],
                    "coinWin": 0,
                    "cashWin": 0,
                    "targetScene": 0,
                    "runIndex": 0
                  },
                  "lastRespinNum": 15,
                  "totalRespinNum": 0,
                  "curRespinNum": 0,
                  "curAddRespinNum": 15,
                  "totalCoinWin": 0,
                  "totalCashWin": 0,
                  "retriggerAddRespinNum": 0,
                  "lastTriggerNum": 0,
                  "curTriggerNum": 0,
                  "@type": "type.googleapis.com/sgc7pb.RespinData"
                }
              },
              "mapVals": {
                "1": 5,
                "2": 3,
                "6": 10,
                "7": 0,
                "100": 1,
                "101": 1,
                "102": 1,
                "103": 1
              },
              "mapStrVals": {},
              "firstComponent": "",
              "nextStepFirstComponent": "fg-start",
              "@type": "type.googleapis.com/sgc7pb.GameParam"
            },
            "nextGameMod": "basic",
            "curIndex": 0,
            "parentIndex": 0,
            "modType": "",
            "prizeCoinWin": 0,
            "prizeCashWin": 0,
            "jackpotCoinWin": 0,
            "jackpotCashWin": 0,
            "jackpotType": 0
          }
        },
        {
          "coinWin": 0,
          "cashWin": 0,
          "clientData": {
            "scenes": [
              {
                "values": [
                  {
                    "values": [
                      1,
                      7,
                      10
                    ]
                  },
                  {
                    "values": [
                      7,
                      9,
                      1
                    ]
                  },
                  {
                    "values": [
                      8,
                      7,
                      1
                    ]
                  },
                  {
                    "values": [
                      11,
                      6,
                      3
                    ]
                  },
                  {
                    "values": [
                      9,
                      6,
                      7
                    ]
                  }
                ],
                "indexes": [],
                "validRow": []
              }
            ],
            "otherScenes": [],
            "results": [],
            "mulPos": [],
            "prizeScenes": [],
            "curGameMod": "basic",
            "curGameModParam": {
              "historyComponents": [
                "fg-start",
                "fg-spin"
              ],
              "respinComponents": [
                "fg-start"
              ],
              "mapComponents": {
                "fg-spin": {
                  "basicComponentData": {
                    "usedScenes": [
                      0
                    ],
                    "usedOtherScenes": [],
                    "usedResults": [],
                    "usedPrizeScenes": [],
                    "srcScenes": [],
                    "coinWin": 0,
                    "cashWin": 0,
                    "targetScene": 0,
                    "runIndex": 0
                  },
                  "reelSetIndex": 1,
                  "@type": "type.googleapis.com/sgc7pb.WeightReelsData"
                },
                "fg-start": {
                  "triggerRespinNum": [],
                  "basicComponentData": {
                    "usedScenes": [],
                    "usedOtherScenes": [],
                    "usedResults": [],
                    "usedPrizeScenes": [],
                    "srcScenes": [],
                    "coinWin": 0,
                    "cashWin": 0,
                    "targetScene": 0,
                    "runIndex": 0
                  },
                  "lastRespinNum": 14,
                  "totalRespinNum": 0,
                  "curRespinNum": 1,
                  "curAddRespinNum": 0,
                  "totalCoinWin": 0,
                  "totalCashWin": 0,
                  "retriggerAddRespinNum": 0,
                  "lastTriggerNum": 0,
                  "curTriggerNum": 0,
                  "@type": "type.googleapis.com/sgc7pb.RespinData"
                }
              },
              "mapVals": {
                "1": 5,
                "2": 3,
                "6": 10,
                "7": 0,
                "100": 1,
                "101": 1,
                "102": 1,
                "103": 1
              },
              "mapStrVals": {},
              "firstComponent": "fg-start",
              "nextStepFirstComponent": "fg-start",
              "@type": "type.googleapis.com/sgc7pb.GameParam"
            },
            "nextGameMod": "basic",
            "curIndex": 0,
            "parentIndex": 0,
            "modType": "",
            "prizeCoinWin": 0,
            "prizeCashWin": 0,
            "jackpotCoinWin": 0,
            "jackpotCashWin": 0,
            "jackpotType": 0
          }
        },
        {
          "coinWin": 0,
          "cashWin": 0,
          "clientData": {
            "scenes": [
              {
                "values": [
                  {
                    "values": [
                      10,
                      7,
                      1
                    ]
                  },
                  {
                    "values": [
                      3,
                      9,
                      6
                    ]
                  },
                  {
                    "values": [
                      13,
                      10,
                      4
                    ]
                  },
                  {
                    "values": [
                      5,
                      11,
                      10
                    ]
                  },
                  {
                    "values": [
                      4,
                      9,
                      3
                    ]
                  }
                ],
                "indexes": [],
                "validRow": []
              }
            ],
            "otherScenes": [],
            "results": [],
            "mulPos": [],
            "prizeScenes": [],
            "curGameMod": "basic",
            "curGameModParam": {
              "historyComponents": [
                "fg-start",
                "fg-spin"
              ],
              "respinComponents": [
                "fg-start"
              ],
              "mapComponents": {
                "fg-start": {
                  "triggerRespinNum": [],
                  "basicComponentData": {
                    "usedScenes": [],
                    "usedOtherScenes": [],
                    "usedResults": [],
                    "usedPrizeScenes": [],
                    "srcScenes": [],
                    "coinWin": 0,
                    "cashWin": 0,
                    "targetScene": 0,
                    "runIndex": 0
                  },
                  "lastRespinNum": 13,
                  "totalRespinNum": 0,
                  "curRespinNum": 2,
                  "curAddRespinNum": 0,
                  "totalCoinWin": 0,
                  "totalCashWin": 0,
                  "retriggerAddRespinNum": 0,
                  "lastTriggerNum": 0,
                  "curTriggerNum": 0,
                  "@type": "type.googleapis.com/sgc7pb.RespinData"
                },
                "fg-spin": {
                  "basicComponentData": {
                    "usedScenes": [
                      0
                    ],
                    "usedOtherScenes": [],
                    "usedResults": [],
                    "usedPrizeScenes": [],
                    "srcScenes": [],
                    "coinWin": 0,
                    "cashWin": 0,
                    "targetScene": 0,
                    "runIndex": 0
                  },
                  "reelSetIndex": 1,
                  "@type": "type.googleapis.com/sgc7pb.WeightReelsData"
                }
              },
              "mapVals": {
                "1": 5,
                "2": 3,
                "6": 10,
                "7": 0,
                "100": 1,
                "101": 1,
                "102": 1,
                "103": 1
              },
              "mapStrVals": {},
              "firstComponent": "fg-start",
              "nextStepFirstComponent": "fg-start",
              "@type": "type.googleapis.com/sgc7pb.GameParam"
            },
            "nextGameMod": "basic",
            "curIndex": 0,
            "parentIndex": 0,
            "modType": "",
            "prizeCoinWin": 0,
            "prizeCashWin": 0,
            "jackpotCoinWin": 0,
            "jackpotCashWin": 0,
            "jackpotType": 0
          }
        },
        {
          "coinWin": 30,
          "cashWin": 300,
          "clientData": {
            "scenes": [
              {
                "values": [
                  {
                    "values": [
                      13,
                      13,
                      13
                    ]
                  },
                  {
                    "values": [
                      11,
                      3,
                      9
                    ]
                  },
                  {
                    "values": [
                      3,
                      7,
                      11
                    ]
                  },
                  {
                    "values": [
                      3,
                      7,
                      10
                    ]
                  },
                  {
                    "values": [
                      11,
                      12,
                      4
                    ]
                  }
                ],
                "indexes": [],
                "validRow": []
              },
              {
                "values": [
                  {
                    "values": [
                      13,
                      13,
                      13
                    ]
                  },
                  {
                    "values": [
                      11,
                      3,
                      9
                    ]
                  },
                  {
                    "values": [
                      3,
                      7,
                      11
                    ]
                  },
                  {
                    "values": [
                      3,
                      7,
                      10
                    ]
                  },
                  {
                    "values": [
                      11,
                      12,
                      4
                    ]
                  }
                ],
                "indexes": [],
                "validRow": []
              }
            ],
            "otherScenes": [],
            "results": [
              {
                "pos": [
                  0,
                  0
                ],
                "type": 5,
                "lineIndex": -1,
                "symbol": 13,
                "mul": 0,
                "coinWin": 0,
                "cashWin": 0,
                "otherMul": 0,
                "wilds": 0,
                "symbolNums": 1,
                "value": 0
              },
              {
                "pos": [
                  0,
                  0,
                  0,
                  1,
                  0,
                  2
                ],
                "type": 1,
                "lineIndex": -1,
                "symbol": 13,
                "mul": 10,
                "coinWin": 30,
                "cashWin": 300,
                "otherMul": 3,
                "wilds": 0,
                "symbolNums": 3,
                "value": 0
              }
            ],
            "mulPos": [],
            "prizeScenes": [],
            "curGameMod": "basic",
            "curGameModParam": {
              "historyComponents": [
                "fg-start",
                "fg-spin",
                "fg-walktrigger",
                "fg-walkdown",
                "fg-paysc"
              ],
              "respinComponents": [
                "fg-start"
              ],
              "mapComponents": {
                "fg-start": {
                  "triggerRespinNum": [],
                  "basicComponentData": {
                    "usedScenes": [],
                    "usedOtherScenes": [],
                    "usedResults": [],
                    "usedPrizeScenes": [],
                    "srcScenes": [],
                    "coinWin": 0,
                    "cashWin": 0,
                    "targetScene": 0,
                    "runIndex": 0
                  },
                  "lastRespinNum": 12,
                  "totalRespinNum": 0,
                  "curRespinNum": 3,
                  "curAddRespinNum": 0,
                  "totalCoinWin": 30,
                  "totalCashWin": 0,
                  "retriggerAddRespinNum": 0,
                  "lastTriggerNum": 0,
                  "curTriggerNum": 0,
                  "@type": "type.googleapis.com/sgc7pb.RespinData"
                },
                "fg-spin": {
                  "basicComponentData": {
                    "usedScenes": [
                      0
                    ],
                    "usedOtherScenes": [],
                    "usedResults": [],
                    "usedPrizeScenes": [],
                    "srcScenes": [],
                    "coinWin": 0,
                    "cashWin": 0,
                    "targetScene": 0,
                    "runIndex": 0
                  },
                  "reelSetIndex": 1,
                  "@type": "type.googleapis.com/sgc7pb.WeightReelsData"
                },
                "fg-walktrigger": {
                  "basicComponentData": {
                    "usedScenes": [],
                    "usedOtherScenes": [],
                    "usedResults": [
                      0
                    ],
                    "usedPrizeScenes": [],
                    "srcScenes": [],
                    "coinWin": 0,
                    "cashWin": 0,
                    "targetScene": 0,
                    "runIndex": 0
                  },
                  "nextComponent": "fg-walkdown",
                  "symbolNum": 1,
                  "wildNum": 0,
                  "respinNum": 0,
                  "wins": 0,
                  "winMulti": 1,
                  "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                },
                "fg-walkdown": {
                  "basicComponentData": {
                    "usedScenes": [
                      1
                    ],
                    "usedOtherScenes": [],
                    "usedResults": [],
                    "usedPrizeScenes": [],
                    "srcScenes": [
                      0
                    ],
                    "coinWin": 0,
                    "cashWin": 0,
                    "targetScene": 0,
                    "runIndex": 0
                  },
                  "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                },
                "fg-paysc": {
                  "basicComponentData": {
                    "usedScenes": [],
                    "usedOtherScenes": [],
                    "usedResults": [
                      1
                    ],
                    "usedPrizeScenes": [],
                    "srcScenes": [],
                    "coinWin": 30,
                    "cashWin": 300,
                    "targetScene": 0,
                    "runIndex": 0
                  },
                  "nextComponent": "",
                  "symbolNum": 3,
                  "wildNum": 0,
                  "respinNum": 0,
                  "wins": 30,
                  "winMulti": 3,
                  "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                }
              },
              "mapVals": {
                "1": 5,
                "2": 3,
                "6": 10,
                "7": 0,
                "100": 1,
                "101": 1,
                "102": 1,
                "103": 1
              },
              "mapStrVals": {},
              "firstComponent": "fg-start",
              "nextStepFirstComponent": "fg-start",
              "@type": "type.googleapis.com/sgc7pb.GameParam"
            },
            "nextGameMod": "basic",
            "curIndex": 0,
            "parentIndex": 0,
            "modType": "",
            "prizeCoinWin": 0,
            "prizeCashWin": 0,
            "jackpotCoinWin": 0,
            "jackpotCashWin": 0,
            "jackpotType": 0
          }
        },
        {
          "coinWin": 0,
          "cashWin": 0,
          "clientData": {
            "scenes": [
              {
                "values": [
                  {
                    "values": [
                      8,
                      1,
                      7
                    ]
                  },
                  {
                    "values": [
                      13,
                      4,
                      7
                    ]
                  },
                  {
                    "values": [
                      2,
                      6,
                      4
                    ]
                  },
                  {
                    "values": [
                      9,
                      1,
                      4
                    ]
                  },
                  {
                    "values": [
                      12,
                      4,
                      9
                    ]
                  }
                ],
                "indexes": [],
                "validRow": []
              }
            ],
            "otherScenes": [],
            "results": [],
            "mulPos": [],
            "prizeScenes": [],
            "curGameMod": "basic",
            "curGameModParam": {
              "historyComponents": [
                "fg-start",
                "fg-spin"
              ],
              "respinComponents": [
                "fg-start"
              ],
              "mapComponents": {
                "fg-start": {
                  "triggerRespinNum": [],
                  "basicComponentData": {
                    "usedScenes": [],
                    "usedOtherScenes": [],
                    "usedResults": [],
                    "usedPrizeScenes": [],
                    "srcScenes": [],
                    "coinWin": 0,
                    "cashWin": 0,
                    "targetScene": 0,
                    "runIndex": 0
                  },
                  "lastRespinNum": 11,
                  "totalRespinNum": 0,
                  "curRespinNum": 4,
                  "curAddRespinNum": 0,
                  "totalCoinWin": 30,
                  "totalCashWin": 0,
                  "retriggerAddRespinNum": 0,
                  "lastTriggerNum": 0,
                  "curTriggerNum": 0,
                  "@type": "type.googleapis.com/sgc7pb.RespinData"
                },
                "fg-spin": {
                  "basicComponentData": {
                    "usedScenes": [
                      0
                    ],
                    "usedOtherScenes": [],
                    "usedResults": [],
                    "usedPrizeScenes": [],
                    "srcScenes": [],
                    "coinWin": 0,
                    "cashWin": 0,
                    "targetScene": 0,
                    "runIndex": 0
                  },
                  "reelSetIndex": 1,
                  "@type": "type.googleapis.com/sgc7pb.WeightReelsData"
                }
              },
              "mapVals": {
                "1": 5,
                "2": 3,
                "6": 10,
                "7": 0,
                "100": 1,
                "101": 1,
                "102": 1,
                "103": 1
              },
              "mapStrVals": {},
              "firstComponent": "fg-start",
              "nextStepFirstComponent": "fg-start",
              "@type": "type.googleapis.com/sgc7pb.GameParam"
            },
            "nextGameMod": "basic",
            "curIndex": 0,
            "parentIndex": 0,
            "modType": "",
            "prizeCoinWin": 0,
            "prizeCashWin": 0,
            "jackpotCoinWin": 0,
            "jackpotCashWin": 0,
            "jackpotType": 0
          }
        },
        {
          "coinWin": 0,
          "cashWin": 0,
          "clientData": {
            "scenes": [
              {
                "values": [
                  {
                    "values": [
                      1,
                      6,
                      5
                    ]
                  },
                  {
                    "values": [
                      7,
                      9,
                      1
                    ]
                  },
                  {
                    "values": [
                      10,
                      3,
                      6
                    ]
                  },
                  {
                    "values": [
                      6,
                      8,
                      9
                    ]
                  },
                  {
                    "values": [
                      3,
                      8,
                      4
                    ]
                  }
                ],
                "indexes": [],
                "validRow": []
              }
            ],
            "otherScenes": [],
            "results": [],
            "mulPos": [],
            "prizeScenes": [],
            "curGameMod": "basic",
            "curGameModParam": {
              "historyComponents": [
                "fg-start",
                "fg-spin"
              ],
              "respinComponents": [
                "fg-start"
              ],
              "mapComponents": {
                "fg-start": {
                  "triggerRespinNum": [],
                  "basicComponentData": {
                    "usedScenes": [],
                    "usedOtherScenes": [],
                    "usedResults": [],
                    "usedPrizeScenes": [],
                    "srcScenes": [],
                    "coinWin": 0,
                    "cashWin": 0,
                    "targetScene": 0,
                    "runIndex": 0
                  },
                  "lastRespinNum": 10,
                  "totalRespinNum": 0,
                  "curRespinNum": 5,
                  "curAddRespinNum": 0,
                  "totalCoinWin": 30,
                  "totalCashWin": 0,
                  "retriggerAddRespinNum": 0,
                  "lastTriggerNum": 0,
                  "curTriggerNum": 0,
                  "@type": "type.googleapis.com/sgc7pb.RespinData"
                },
                "fg-spin": {
                  "basicComponentData": {
                    "usedScenes": [
                      0
                    ],
                    "usedOtherScenes": [],
                    "usedResults": [],
                    "usedPrizeScenes": [],
                    "srcScenes": [],
                    "coinWin": 0,
                    "cashWin": 0,
                    "targetScene": 0,
                    "runIndex": 0
                  },
                  "reelSetIndex": 1,
                  "@type": "type.googleapis.com/sgc7pb.WeightReelsData"
                }
              },
              "mapVals": {
                "1": 5,
                "2": 3,
                "6": 10,
                "7": 0,
                "100": 1,
                "101": 1,
                "102": 1,
                "103": 1
              },
              "mapStrVals": {},
              "firstComponent": "fg-start",
              "nextStepFirstComponent": "fg-start",
              "@type": "type.googleapis.com/sgc7pb.GameParam"
            },
            "nextGameMod": "basic",
            "curIndex": 0,
            "parentIndex": 0,
            "modType": "",
            "prizeCoinWin": 0,
            "prizeCashWin": 0,
            "jackpotCoinWin": 0,
            "jackpotCashWin": 0,
            "jackpotType": 0
          }
        },
        {
          "coinWin": 0,
          "cashWin": 0,
          "clientData": {
            "scenes": [
              {
                "values": [
                  {
                    "values": [
                      10,
                      7,
                      1
                    ]
                  },
                  {
                    "values": [
                      12,
                      11,
                      3
                    ]
                  },
                  {
                    "values": [
                      4,
                      11,
                      2
                    ]
                  },
                  {
                    "values": [
                      9,
                      3,
                      4
                    ]
                  },
                  {
                    "values": [
                      2,
                      6,
                      7
                    ]
                  }
                ],
                "indexes": [],
                "validRow": []
              }
            ],
            "otherScenes": [],
            "results": [],
            "mulPos": [],
            "prizeScenes": [],
            "curGameMod": "basic",
            "curGameModParam": {
              "historyComponents": [
                "fg-start",
                "fg-spin"
              ],
              "respinComponents": [
                "fg-start"
              ],
              "mapComponents": {
                "fg-start": {
                  "triggerRespinNum": [],
                  "basicComponentData": {
                    "usedScenes": [],
                    "usedOtherScenes": [],
                    "usedResults": [],
                    "usedPrizeScenes": [],
                    "srcScenes": [],
                    "coinWin": 0,
                    "cashWin": 0,
                    "targetScene": 0,
                    "runIndex": 0
                  },
                  "lastRespinNum": 9,
                  "totalRespinNum": 0,
                  "curRespinNum": 6,
                  "curAddRespinNum": 0,
                  "totalCoinWin": 30,
                  "totalCashWin": 0,
                  "retriggerAddRespinNum": 0,
                  "lastTriggerNum": 0,
                  "curTriggerNum": 0,
                  "@type": "type.googleapis.com/sgc7pb.RespinData"
                },
                "fg-spin": {
                  "basicComponentData": {
                    "usedScenes": [
                      0
                    ],
                    "usedOtherScenes": [],
                    "usedResults": [],
                    "usedPrizeScenes": [],
                    "srcScenes": [],
                    "coinWin": 0,
                    "cashWin": 0,
                    "targetScene": 0,
                    "runIndex": 0
                  },
                  "reelSetIndex": 1,
                  "@type": "type.googleapis.com/sgc7pb.WeightReelsData"
                }
              },
              "mapVals": {
                "1": 5,
                "2": 3,
                "6": 10,
                "7": 0,
                "100": 1,
                "101": 1,
                "102": 1,
                "103": 1
              },
              "mapStrVals": {},
              "firstComponent": "fg-start",
              "nextStepFirstComponent": "fg-start",
              "@type": "type.googleapis.com/sgc7pb.GameParam"
            },
            "nextGameMod": "basic",
            "curIndex": 0,
            "parentIndex": 0,
            "modType": "",
            "prizeCoinWin": 0,
            "prizeCashWin": 0,
            "jackpotCoinWin": 0,
            "jackpotCashWin": 0,
            "jackpotType": 0
          }
        },
        {
          "coinWin": 0,
          "cashWin": 0,
          "clientData": {
            "scenes": [
              {
                "values": [
                  {
                    "values": [
                      1,
                      6,
                      5
                    ]
                  },
                  {
                    "values": [
                      4,
                      7,
                      0
                    ]
                  },
                  {
                    "values": [
                      8,
                      9,
                      4
                    ]
                  },
                  {
                    "values": [
                      10,
                      12,
                      7
                    ]
                  },
                  {
                    "values": [
                      5,
                      10,
                      2
                    ]
                  }
                ],
                "indexes": [],
                "validRow": []
              }
            ],
            "otherScenes": [],
            "results": [],
            "mulPos": [],
            "prizeScenes": [],
            "curGameMod": "basic",
            "curGameModParam": {
              "historyComponents": [
                "fg-start",
                "fg-spin"
              ],
              "respinComponents": [
                "fg-start"
              ],
              "mapComponents": {
                "fg-start": {
                  "triggerRespinNum": [],
                  "basicComponentData": {
                    "usedScenes": [],
                    "usedOtherScenes": [],
                    "usedResults": [],
                    "usedPrizeScenes": [],
                    "srcScenes": [],
                    "coinWin": 0,
                    "cashWin": 0,
                    "targetScene": 0,
                    "runIndex": 0
                  },
                  "lastRespinNum": 8,
                  "totalRespinNum": 0,
                  "curRespinNum": 7,
                  "curAddRespinNum": 0,
                  "totalCoinWin": 30,
                  "totalCashWin": 0,
                  "retriggerAddRespinNum": 0,
                  "lastTriggerNum": 0,
                  "curTriggerNum": 0,
                  "@type": "type.googleapis.com/sgc7pb.RespinData"
                },
                "fg-spin": {
                  "basicComponentData": {
                    "usedScenes": [
                      0
                    ],
                    "usedOtherScenes": [],
                    "usedResults": [],
                    "usedPrizeScenes": [],
                    "srcScenes": [],
                    "coinWin": 0,
                    "cashWin": 0,
                    "targetScene": 0,
                    "runIndex": 0
                  },
                  "reelSetIndex": 1,
                  "@type": "type.googleapis.com/sgc7pb.WeightReelsData"
                }
              },
              "mapVals": {
                "1": 5,
                "2": 3,
                "6": 10,
                "7": 0,
                "100": 1,
                "101": 1,
                "102": 1,
                "103": 1
              },
              "mapStrVals": {},
              "firstComponent": "fg-start",
              "nextStepFirstComponent": "fg-start",
              "@type": "type.googleapis.com/sgc7pb.GameParam"
            },
            "nextGameMod": "basic",
            "curIndex": 0,
            "parentIndex": 0,
            "modType": "",
            "prizeCoinWin": 0,
            "prizeCashWin": 0,
            "jackpotCoinWin": 0,
            "jackpotCashWin": 0,
            "jackpotType": 0
          }
        },
        {
          "coinWin": 0,
          "cashWin": 0,
          "clientData": {
            "scenes": [
              {
                "values": [
                  {
                    "values": [
                      3,
                      6,
                      13
                    ]
                  },
                  {
                    "values": [
                      8,
                      5,
                      10
                    ]
                  },
                  {
                    "values": [
                      10,
                      8,
                      0
                    ]
                  },
                  {
                    "values": [
                      6,
                      1,
                      7
                    ]
                  },
                  {
                    "values": [
                      8,
                      4,
                      11
                    ]
                  }
                ],
                "indexes": [],
                "validRow": []
              }
            ],
            "otherScenes": [],
            "results": [],
            "mulPos": [],
            "prizeScenes": [],
            "curGameMod": "basic",
            "curGameModParam": {
              "historyComponents": [
                "fg-start",
                "fg-spin"
              ],
              "respinComponents": [
                "fg-start"
              ],
              "mapComponents": {
                "fg-spin": {
                  "basicComponentData": {
                    "usedScenes": [
                      0
                    ],
                    "usedOtherScenes": [],
                    "usedResults": [],
                    "usedPrizeScenes": [],
                    "srcScenes": [],
                    "coinWin": 0,
                    "cashWin": 0,
                    "targetScene": 0,
                    "runIndex": 0
                  },
                  "reelSetIndex": 1,
                  "@type": "type.googleapis.com/sgc7pb.WeightReelsData"
                },
                "fg-start": {
                  "triggerRespinNum": [],
                  "basicComponentData": {
                    "usedScenes": [],
                    "usedOtherScenes": [],
                    "usedResults": [],
                    "usedPrizeScenes": [],
                    "srcScenes": [],
                    "coinWin": 0,
                    "cashWin": 0,
                    "targetScene": 0,
                    "runIndex": 0
                  },
                  "lastRespinNum": 7,
                  "totalRespinNum": 0,
                  "curRespinNum": 8,
                  "curAddRespinNum": 0,
                  "totalCoinWin": 30,
                  "totalCashWin": 0,
                  "retriggerAddRespinNum": 0,
                  "lastTriggerNum": 0,
                  "curTriggerNum": 0,
                  "@type": "type.googleapis.com/sgc7pb.RespinData"
                }
              },
              "mapVals": {
                "1": 5,
                "2": 3,
                "6": 10,
                "7": 0,
                "100": 1,
                "101": 1,
                "102": 1,
                "103": 1
              },
              "mapStrVals": {},
              "firstComponent": "fg-start",
              "nextStepFirstComponent": "fg-start",
              "@type": "type.googleapis.com/sgc7pb.GameParam"
            },
            "nextGameMod": "basic",
            "curIndex": 0,
            "parentIndex": 0,
            "modType": "",
            "prizeCoinWin": 0,
            "prizeCashWin": 0,
            "jackpotCoinWin": 0,
            "jackpotCashWin": 0,
            "jackpotType": 0
          }
        },
        {
          "coinWin": 81,
          "cashWin": 810,
          "clientData": {
            "scenes": [
              {
                "values": [
                  {
                    "values": [
                      10,
                      9,
                      2
                    ]
                  },
                  {
                    "values": [
                      7,
                      0,
                      6
                    ]
                  },
                  {
                    "values": [
                      2,
                      5,
                      6
                    ]
                  },
                  {
                    "values": [
                      5,
                      8,
                      2
                    ]
                  },
                  {
                    "values": [
                      6,
                      7,
                      1
                    ]
                  }
                ],
                "indexes": [],
                "validRow": []
              }
            ],
            "otherScenes": [],
            "results": [
              {
                "pos": [
                  0,
                  2,
                  1,
                  1,
                  2,
                  0
                ],
                "type": 2,
                "lineIndex": 4,
                "symbol": 2,
                "mul": 25,
                "coinWin": 75,
                "cashWin": 750,
                "otherMul": 3,
                "wilds": 1,
                "symbolNums": 3,
                "value": 0
              },
              {
                "pos": [
                  0,
                  2,
                  1,
                  1
                ],
                "type": 2,
                "lineIndex": 9,
                "symbol": 2,
                "mul": 2,
                "coinWin": 6,
                "cashWin": 60,
                "otherMul": 3,
                "wilds": 1,
                "symbolNums": 2,
                "value": 0
              }
            ],
            "mulPos": [],
            "prizeScenes": [],
            "curGameMod": "basic",
            "curGameModParam": {
              "historyComponents": [
                "fg-start",
                "fg-spin",
                "fg-paylines"
              ],
              "respinComponents": [
                "fg-start"
              ],
              "mapComponents": {
                "fg-spin": {
                  "basicComponentData": {
                    "usedScenes": [
                      0
                    ],
                    "usedOtherScenes": [],
                    "usedResults": [],
                    "usedPrizeScenes": [],
                    "srcScenes": [],
                    "coinWin": 0,
                    "cashWin": 0,
                    "targetScene": 0,
                    "runIndex": 0
                  },
                  "reelSetIndex": 1,
                  "@type": "type.googleapis.com/sgc7pb.WeightReelsData"
                },
                "fg-paylines": {
                  "basicComponentData": {
                    "usedScenes": [],
                    "usedOtherScenes": [],
                    "usedResults": [
                      0,
                      1
                    ],
                    "usedPrizeScenes": [],
                    "srcScenes": [],
                    "coinWin": 81,
                    "cashWin": 810,
                    "targetScene": 0,
                    "runIndex": 0
                  },
                  "nextComponent": "",
                  "symbolNum": 5,
                  "wildNum": 2,
                  "respinNum": 0,
                  "wins": 81,
                  "winMulti": 3,
                  "@type": "type.googleapis.com/sgc7pb.LinesTriggerData"
                },
                "fg-start": {
                  "triggerRespinNum": [],
                  "basicComponentData": {
                    "usedScenes": [],
                    "usedOtherScenes": [],
                    "usedResults": [],
                    "usedPrizeScenes": [],
                    "srcScenes": [],
                    "coinWin": 0,
                    "cashWin": 0,
                    "targetScene": 0,
                    "runIndex": 0
                  },
                  "lastRespinNum": 6,
                  "totalRespinNum": 0,
                  "curRespinNum": 9,
                  "curAddRespinNum": 0,
                  "totalCoinWin": 111,
                  "totalCashWin": 0,
                  "retriggerAddRespinNum": 0,
                  "lastTriggerNum": 0,
                  "curTriggerNum": 0,
                  "@type": "type.googleapis.com/sgc7pb.RespinData"
                }
              },
              "mapVals": {
                "1": 5,
                "2": 3,
                "6": 10,
                "7": 0,
                "100": 1,
                "101": 1,
                "102": 1,
                "103": 1
              },
              "mapStrVals": {},
              "firstComponent": "fg-start",
              "nextStepFirstComponent": "fg-start",
              "@type": "type.googleapis.com/sgc7pb.GameParam"
            },
            "nextGameMod": "basic",
            "curIndex": 0,
            "parentIndex": 0,
            "modType": "",
            "prizeCoinWin": 0,
            "prizeCashWin": 0,
            "jackpotCoinWin": 0,
            "jackpotCashWin": 0,
            "jackpotType": 0
          }
        },
        {
          "coinWin": 60,
          "cashWin": 600,
          "clientData": {
            "scenes": [
              {
                "values": [
                  {
                    "values": [
                      10,
                      0,
                      8
                    ]
                  },
                  {
                    "values": [
                      7,
                      0,
                      6
                    ]
                  },
                  {
                    "values": [
                      7,
                      11,
                      12
                    ]
                  },
                  {
                    "values": [
                      6,
                      7,
                      10
                    ]
                  },
                  {
                    "values": [
                      10,
                      2,
                      6
                    ]
                  }
                ],
                "indexes": [],
                "validRow": []
              }
            ],
            "otherScenes": [],
            "results": [
              {
                "pos": [
                  0,
                  1,
                  1,
                  1
                ],
                "type": 2,
                "lineIndex": 0,
                "symbol": 0,
                "mul": 10,
                "coinWin": 30,
                "cashWin": 300,
                "otherMul": 3,
                "wilds": 2,
                "symbolNums": 2,
                "value": 0
              },
              {
                "pos": [
                  0,
                  1,
                  1,
                  0,
                  2,
                  0
                ],
                "type": 2,
                "lineIndex": 6,
                "symbol": 7,
                "mul": 10,
                "coinWin": 30,
                "cashWin": 300,
                "otherMul": 3,
                "wilds": 1,
                "symbolNums": 3,
                "value": 0
              }
            ],
            "mulPos": [],
            "prizeScenes": [],
            "curGameMod": "basic",
            "curGameModParam": {
              "historyComponents": [
                "fg-start",
                "fg-spin",
                "fg-paylines"
              ],
              "respinComponents": [
                "fg-start"
              ],
              "mapComponents": {
                "fg-start": {
                  "triggerRespinNum": [],
                  "basicComponentData": {
                    "usedScenes": [],
                    "usedOtherScenes": [],
                    "usedResults": [],
                    "usedPrizeScenes": [],
                    "srcScenes": [],
                    "coinWin": 0,
                    "cashWin": 0,
                    "targetScene": 0,
                    "runIndex": 0
                  },
                  "lastRespinNum": 5,
                  "totalRespinNum": 0,
                  "curRespinNum": 10,
                  "curAddRespinNum": 0,
                  "totalCoinWin": 171,
                  "totalCashWin": 0,
                  "retriggerAddRespinNum": 0,
                  "lastTriggerNum": 0,
                  "curTriggerNum": 0,
                  "@type": "type.googleapis.com/sgc7pb.RespinData"
                },
                "fg-spin": {
                  "basicComponentData": {
                    "usedScenes": [
                      0
                    ],
                    "usedOtherScenes": [],
                    "usedResults": [],
                    "usedPrizeScenes": [],
                    "srcScenes": [],
                    "coinWin": 0,
                    "cashWin": 0,
                    "targetScene": 0,
                    "runIndex": 0
                  },
                  "reelSetIndex": 1,
                  "@type": "type.googleapis.com/sgc7pb.WeightReelsData"
                },
                "fg-paylines": {
                  "basicComponentData": {
                    "usedScenes": [],
                    "usedOtherScenes": [],
                    "usedResults": [
                      0,
                      1
                    ],
                    "usedPrizeScenes": [],
                    "srcScenes": [],
                    "coinWin": 60,
                    "cashWin": 600,
                    "targetScene": 0,
                    "runIndex": 0
                  },
                  "nextComponent": "",
                  "symbolNum": 5,
                  "wildNum": 3,
                  "respinNum": 0,
                  "wins": 60,
                  "winMulti": 3,
                  "@type": "type.googleapis.com/sgc7pb.LinesTriggerData"
                }
              },
              "mapVals": {
                "1": 5,
                "2": 3,
                "6": 10,
                "7": 0,
                "100": 1,
                "101": 1,
                "102": 1,
                "103": 1
              },
              "mapStrVals": {},
              "firstComponent": "fg-start",
              "nextStepFirstComponent": "fg-start",
              "@type": "type.googleapis.com/sgc7pb.GameParam"
            },
            "nextGameMod": "basic",
            "curIndex": 0,
            "parentIndex": 0,
            "modType": "",
            "prizeCoinWin": 0,
            "prizeCashWin": 0,
            "jackpotCoinWin": 0,
            "jackpotCashWin": 0,
            "jackpotType": 0
          }
        },
        {
          "coinWin": 0,
          "cashWin": 0,
          "clientData": {
            "scenes": [
              {
                "values": [
                  {
                    "values": [
                      1,
                      7,
                      10
                    ]
                  },
                  {
                    "values": [
                      9,
                      6,
                      2
                    ]
                  },
                  {
                    "values": [
                      1,
                      11,
                      9
                    ]
                  },
                  {
                    "values": [
                      3,
                      4,
                      10
                    ]
                  },
                  {
                    "values": [
                      7,
                      1,
                      11
                    ]
                  }
                ],
                "indexes": [],
                "validRow": []
              }
            ],
            "otherScenes": [],
            "results": [],
            "mulPos": [],
            "prizeScenes": [],
            "curGameMod": "basic",
            "curGameModParam": {
              "historyComponents": [
                "fg-start",
                "fg-spin"
              ],
              "respinComponents": [
                "fg-start"
              ],
              "mapComponents": {
                "fg-start": {
                  "triggerRespinNum": [],
                  "basicComponentData": {
                    "usedScenes": [],
                    "usedOtherScenes": [],
                    "usedResults": [],
                    "usedPrizeScenes": [],
                    "srcScenes": [],
                    "coinWin": 0,
                    "cashWin": 0,
                    "targetScene": 0,
                    "runIndex": 0
                  },
                  "lastRespinNum": 4,
                  "totalRespinNum": 0,
                  "curRespinNum": 11,
                  "curAddRespinNum": 0,
                  "totalCoinWin": 171,
                  "totalCashWin": 0,
                  "retriggerAddRespinNum": 0,
                  "lastTriggerNum": 0,
                  "curTriggerNum": 0,
                  "@type": "type.googleapis.com/sgc7pb.RespinData"
                },
                "fg-spin": {
                  "basicComponentData": {
                    "usedScenes": [
                      0
                    ],
                    "usedOtherScenes": [],
                    "usedResults": [],
                    "usedPrizeScenes": [],
                    "srcScenes": [],
                    "coinWin": 0,
                    "cashWin": 0,
                    "targetScene": 0,
                    "runIndex": 0
                  },
                  "reelSetIndex": 1,
                  "@type": "type.googleapis.com/sgc7pb.WeightReelsData"
                }
              },
              "mapVals": {
                "1": 5,
                "2": 3,
                "6": 10,
                "7": 0,
                "100": 1,
                "101": 1,
                "102": 1,
                "103": 1
              },
              "mapStrVals": {},
              "firstComponent": "fg-start",
              "nextStepFirstComponent": "fg-start",
              "@type": "type.googleapis.com/sgc7pb.GameParam"
            },
            "nextGameMod": "basic",
            "curIndex": 0,
            "parentIndex": 0,
            "modType": "",
            "prizeCoinWin": 0,
            "prizeCashWin": 0,
            "jackpotCoinWin": 0,
            "jackpotCashWin": 0,
            "jackpotType": 0
          }
        },
        {
          "coinWin": 210,
          "cashWin": 2100,
          "clientData": {
            "scenes": [
              {
                "values": [
                  {
                    "values": [
                      13,
                      13,
                      5
                    ]
                  },
                  {
                    "values": [
                      0,
                      6,
                      7
                    ]
                  },
                  {
                    "values": [
                      3,
                      7,
                      11
                    ]
                  },
                  {
                    "values": [
                      6,
                      3,
                      13
                    ]
                  },
                  {
                    "values": [
                      1,
                      11,
                      12
                    ]
                  }
                ],
                "indexes": [],
                "validRow": []
              },
              {
                "values": [
                  {
                    "values": [
                      13,
                      13,
                      13
                    ]
                  },
                  {
                    "values": [
                      0,
                      6,
                      7
                    ]
                  },
                  {
                    "values": [
                      3,
                      7,
                      11
                    ]
                  },
                  {
                    "values": [
                      6,
                      3,
                      13
                    ]
                  },
                  {
                    "values": [
                      1,
                      11,
                      12
                    ]
                  }
                ],
                "indexes": [],
                "validRow": []
              },
              {
                "values": [
                  {
                    "values": [
                      13,
                      13,
                      13
                    ]
                  },
                  {
                    "values": [
                      0,
                      6,
                      13
                    ]
                  },
                  {
                    "values": [
                      3,
                      7,
                      13
                    ]
                  },
                  {
                    "values": [
                      6,
                      3,
                      13
                    ]
                  },
                  {
                    "values": [
                      1,
                      11,
                      12
                    ]
                  }
                ],
                "indexes": [],
                "validRow": []
              }
            ],
            "otherScenes": [],
            "results": [
              {
                "pos": [
                  0,
                  0
                ],
                "type": 5,
                "lineIndex": -1,
                "symbol": 13,
                "mul": 0,
                "coinWin": 0,
                "cashWin": 0,
                "otherMul": 0,
                "wilds": 0,
                "symbolNums": 1,
                "value": 0
              },
              {
                "pos": [
                  0,
                  0,
                  0,
                  1,
                  0,
                  2,
                  1,
                  2,
                  2,
                  2,
                  3,
                  2
                ],
                "type": 1,
                "lineIndex": -1,
                "symbol": 13,
                "mul": 70,
                "coinWin": 210,
                "cashWin": 2100,
                "otherMul": 3,
                "wilds": 0,
                "symbolNums": 6,
                "value": 0
              }
            ],
            "mulPos": [],
            "prizeScenes": [],
            "curGameMod": "basic",
            "curGameModParam": {
              "historyComponents": [
                "fg-start",
                "fg-spin",
                "fg-walktrigger",
                "fg-walkdown",
                "fg-walk",
                "fg-paysc"
              ],
              "respinComponents": [
                "fg-start"
              ],
              "mapComponents": {
                "fg-spin": {
                  "basicComponentData": {
                    "usedScenes": [
                      0
                    ],
                    "usedOtherScenes": [],
                    "usedResults": [],
                    "usedPrizeScenes": [],
                    "srcScenes": [],
                    "coinWin": 0,
                    "cashWin": 0,
                    "targetScene": 0,
                    "runIndex": 0
                  },
                  "reelSetIndex": 1,
                  "@type": "type.googleapis.com/sgc7pb.WeightReelsData"
                },
                "fg-walktrigger": {
                  "basicComponentData": {
                    "usedScenes": [],
                    "usedOtherScenes": [],
                    "usedResults": [
                      0
                    ],
                    "usedPrizeScenes": [],
                    "srcScenes": [],
                    "coinWin": 0,
                    "cashWin": 0,
                    "targetScene": 0,
                    "runIndex": 0
                  },
                  "nextComponent": "fg-walkdown",
                  "symbolNum": 1,
                  "wildNum": 0,
                  "respinNum": 0,
                  "wins": 0,
                  "winMulti": 1,
                  "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                },
                "fg-walkdown": {
                  "basicComponentData": {
                    "usedScenes": [
                      1,
                      1
                    ],
                    "usedOtherScenes": [],
                    "usedResults": [],
                    "usedPrizeScenes": [],
                    "srcScenes": [
                      0
                    ],
                    "coinWin": 0,
                    "cashWin": 0,
                    "targetScene": 0,
                    "runIndex": 0
                  },
                  "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                },
                "fg-walk": {
                  "basicComponentData": {
                    "usedScenes": [
                      2
                    ],
                    "usedOtherScenes": [],
                    "usedResults": [],
                    "usedPrizeScenes": [],
                    "srcScenes": [
                      0
                    ],
                    "coinWin": 0,
                    "cashWin": 0,
                    "targetScene": 0,
                    "runIndex": 0
                  },
                  "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                },
                "fg-paysc": {
                  "basicComponentData": {
                    "usedScenes": [],
                    "usedOtherScenes": [],
                    "usedResults": [
                      1
                    ],
                    "usedPrizeScenes": [],
                    "srcScenes": [],
                    "coinWin": 240,
                    "cashWin": 2400,
                    "targetScene": 0,
                    "runIndex": 0
                  },
                  "nextComponent": "",
                  "symbolNum": 6,
                  "wildNum": 0,
                  "respinNum": 0,
                  "wins": 210,
                  "winMulti": 3,
                  "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                },
                "fg-start": {
                  "triggerRespinNum": [],
                  "basicComponentData": {
                    "usedScenes": [],
                    "usedOtherScenes": [],
                    "usedResults": [],
                    "usedPrizeScenes": [],
                    "srcScenes": [],
                    "coinWin": 0,
                    "cashWin": 0,
                    "targetScene": 0,
                    "runIndex": 0
                  },
                  "lastRespinNum": 3,
                  "totalRespinNum": 0,
                  "curRespinNum": 12,
                  "curAddRespinNum": 0,
                  "totalCoinWin": 381,
                  "totalCashWin": 0,
                  "retriggerAddRespinNum": 0,
                  "lastTriggerNum": 0,
                  "curTriggerNum": 0,
                  "@type": "type.googleapis.com/sgc7pb.RespinData"
                }
              },
              "mapVals": {
                "1": 5,
                "2": 3,
                "6": 10,
                "7": 0,
                "100": 1,
                "101": 1,
                "102": 1,
                "103": 1
              },
              "mapStrVals": {},
              "firstComponent": "fg-start",
              "nextStepFirstComponent": "fg-start",
              "@type": "type.googleapis.com/sgc7pb.GameParam"
            },
            "nextGameMod": "basic",
            "curIndex": 0,
            "parentIndex": 0,
            "modType": "",
            "prizeCoinWin": 0,
            "prizeCashWin": 0,
            "jackpotCoinWin": 0,
            "jackpotCashWin": 0,
            "jackpotType": 0
          }
        },
        {
          "coinWin": 0,
          "cashWin": 0,
          "clientData": {
            "scenes": [
              {
                "values": [
                  {
                    "values": [
                      3,
                      6,
                      8
                    ]
                  },
                  {
                    "values": [
                      12,
                      11,
                      4
                    ]
                  },
                  {
                    "values": [
                      9,
                      4,
                      2
                    ]
                  },
                  {
                    "values": [
                      11,
                      6,
                      3
                    ]
                  },
                  {
                    "values": [
                      7,
                      8,
                      5
                    ]
                  }
                ],
                "indexes": [],
                "validRow": []
              }
            ],
            "otherScenes": [],
            "results": [],
            "mulPos": [],
            "prizeScenes": [],
            "curGameMod": "basic",
            "curGameModParam": {
              "historyComponents": [
                "fg-start",
                "fg-spin"
              ],
              "respinComponents": [
                "fg-start"
              ],
              "mapComponents": {
                "fg-start": {
                  "triggerRespinNum": [],
                  "basicComponentData": {
                    "usedScenes": [],
                    "usedOtherScenes": [],
                    "usedResults": [],
                    "usedPrizeScenes": [],
                    "srcScenes": [],
                    "coinWin": 0,
                    "cashWin": 0,
                    "targetScene": 0,
                    "runIndex": 0
                  },
                  "lastRespinNum": 2,
                  "totalRespinNum": 0,
                  "curRespinNum": 13,
                  "curAddRespinNum": 0,
                  "totalCoinWin": 381,
                  "totalCashWin": 0,
                  "retriggerAddRespinNum": 0,
                  "lastTriggerNum": 0,
                  "curTriggerNum": 0,
                  "@type": "type.googleapis.com/sgc7pb.RespinData"
                },
                "fg-spin": {
                  "basicComponentData": {
                    "usedScenes": [
                      0
                    ],
                    "usedOtherScenes": [],
                    "usedResults": [],
                    "usedPrizeScenes": [],
                    "srcScenes": [],
                    "coinWin": 0,
                    "cashWin": 0,
                    "targetScene": 0,
                    "runIndex": 0
                  },
                  "reelSetIndex": 0,
                  "@type": "type.googleapis.com/sgc7pb.WeightReelsData"
                }
              },
              "mapVals": {
                "1": 5,
                "2": 3,
                "6": 10,
                "7": 0,
                "100": 1,
                "101": 1,
                "102": 1,
                "103": 1
              },
              "mapStrVals": {},
              "firstComponent": "fg-start",
              "nextStepFirstComponent": "fg-start",
              "@type": "type.googleapis.com/sgc7pb.GameParam"
            },
            "nextGameMod": "basic",
            "curIndex": 0,
            "parentIndex": 0,
            "modType": "",
            "prizeCoinWin": 0,
            "prizeCashWin": 0,
            "jackpotCoinWin": 0,
            "jackpotCashWin": 0,
            "jackpotType": 0
          }
        },
        {
          "coinWin": 30,
          "cashWin": 300,
          "clientData": {
            "scenes": [
              {
                "values": [
                  {
                    "values": [
                      13,
                      13,
                      6
                    ]
                  },
                  {
                    "values": [
                      0,
                      6,
                      7
                    ]
                  },
                  {
                    "values": [
                      6,
                      11,
                      12
                    ]
                  },
                  {
                    "values": [
                      5,
                      8,
                      2
                    ]
                  },
                  {
                    "values": [
                      2,
                      10,
                      7
                    ]
                  }
                ],
                "indexes": [],
                "validRow": []
              },
              {
                "values": [
                  {
                    "values": [
                      13,
                      13,
                      13
                    ]
                  },
                  {
                    "values": [
                      0,
                      6,
                      7
                    ]
                  },
                  {
                    "values": [
                      6,
                      11,
                      12
                    ]
                  },
                  {
                    "values": [
                      5,
                      8,
                      2
                    ]
                  },
                  {
                    "values": [
                      2,
                      10,
                      7
                    ]
                  }
                ],
                "indexes": [],
                "validRow": []
              }
            ],
            "otherScenes": [],
            "results": [
              {
                "pos": [
                  0,
                  0
                ],
                "type": 5,
                "lineIndex": -1,
                "symbol": 13,
                "mul": 0,
                "coinWin": 0,
                "cashWin": 0,
                "otherMul": 0,
                "wilds": 0,
                "symbolNums": 1,
                "value": 0
              },
              {
                "pos": [
                  0,
                  0,
                  0,
                  1,
                  0,
                  2
                ],
                "type": 1,
                "lineIndex": -1,
                "symbol": 13,
                "mul": 10,
                "coinWin": 30,
                "cashWin": 300,
                "otherMul": 3,
                "wilds": 0,
                "symbolNums": 3,
                "value": 0
              }
            ],
            "mulPos": [],
            "prizeScenes": [],
            "curGameMod": "basic",
            "curGameModParam": {
              "historyComponents": [
                "fg-start",
                "fg-spin",
                "fg-walktrigger",
                "fg-walkdown",
                "fg-paysc"
              ],
              "respinComponents": [
                "fg-start"
              ],
              "mapComponents": {
                "fg-start": {
                  "triggerRespinNum": [],
                  "basicComponentData": {
                    "usedScenes": [],
                    "usedOtherScenes": [],
                    "usedResults": [],
                    "usedPrizeScenes": [],
                    "srcScenes": [],
                    "coinWin": 0,
                    "cashWin": 0,
                    "targetScene": 0,
                    "runIndex": 0
                  },
                  "lastRespinNum": 1,
                  "totalRespinNum": 0,
                  "curRespinNum": 14,
                  "curAddRespinNum": 0,
                  "totalCoinWin": 411,
                  "totalCashWin": 0,
                  "retriggerAddRespinNum": 0,
                  "lastTriggerNum": 0,
                  "curTriggerNum": 0,
                  "@type": "type.googleapis.com/sgc7pb.RespinData"
                },
                "fg-spin": {
                  "basicComponentData": {
                    "usedScenes": [
                      0
                    ],
                    "usedOtherScenes": [],
                    "usedResults": [],
                    "usedPrizeScenes": [],
                    "srcScenes": [],
                    "coinWin": 0,
                    "cashWin": 0,
                    "targetScene": 0,
                    "runIndex": 0
                  },
                  "reelSetIndex": 1,
                  "@type": "type.googleapis.com/sgc7pb.WeightReelsData"
                },
                "fg-walktrigger": {
                  "basicComponentData": {
                    "usedScenes": [],
                    "usedOtherScenes": [],
                    "usedResults": [
                      0
                    ],
                    "usedPrizeScenes": [],
                    "srcScenes": [],
                    "coinWin": 0,
                    "cashWin": 0,
                    "targetScene": 0,
                    "runIndex": 0
                  },
                  "nextComponent": "fg-walkdown",
                  "symbolNum": 1,
                  "wildNum": 0,
                  "respinNum": 0,
                  "wins": 0,
                  "winMulti": 1,
                  "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                },
                "fg-walkdown": {
                  "basicComponentData": {
                    "usedScenes": [
                      1,
                      1,
                      1
                    ],
                    "usedOtherScenes": [],
                    "usedResults": [],
                    "usedPrizeScenes": [],
                    "srcScenes": [
                      0
                    ],
                    "coinWin": 0,
                    "cashWin": 0,
                    "targetScene": 0,
                    "runIndex": 0
                  },
                  "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                },
                "fg-paysc": {
                  "basicComponentData": {
                    "usedScenes": [],
                    "usedOtherScenes": [],
                    "usedResults": [
                      1
                    ],
                    "usedPrizeScenes": [],
                    "srcScenes": [],
                    "coinWin": 270,
                    "cashWin": 2700,
                    "targetScene": 0,
                    "runIndex": 0
                  },
                  "nextComponent": "",
                  "symbolNum": 3,
                  "wildNum": 0,
                  "respinNum": 0,
                  "wins": 30,
                  "winMulti": 3,
                  "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                }
              },
              "mapVals": {
                "1": 5,
                "2": 3,
                "6": 10,
                "7": 0,
                "100": 1,
                "101": 1,
                "102": 1,
                "103": 1
              },
              "mapStrVals": {},
              "firstComponent": "fg-start",
              "nextStepFirstComponent": "fg-start",
              "@type": "type.googleapis.com/sgc7pb.GameParam"
            },
            "nextGameMod": "basic",
            "curIndex": 0,
            "parentIndex": 0,
            "modType": "",
            "prizeCoinWin": 0,
            "prizeCashWin": 0,
            "jackpotCoinWin": 0,
            "jackpotCashWin": 0,
            "jackpotType": 0
          }
        },
        {
          "coinWin": 60,
          "cashWin": 600,
          "clientData": {
            "scenes": [
              {
                "values": [
                  {
                    "values": [
                      8,
                      11,
                      4
                    ]
                  },
                  {
                    "values": [
                      9,
                      1,
                      8
                    ]
                  },
                  {
                    "values": [
                      5,
                      10,
                      8
                    ]
                  },
                  {
                    "values": [
                      12,
                      7,
                      5
                    ]
                  },
                  {
                    "values": [
                      11,
                      12,
                      4
                    ]
                  }
                ],
                "indexes": [],
                "validRow": []
              }
            ],
            "otherScenes": [],
            "results": [
              {
                "pos": [
                  3,
                  0,
                  4,
                  1
                ],
                "type": 1,
                "lineIndex": -1,
                "symbol": 12,
                "mul": 20,
                "coinWin": 60,
                "cashWin": 600,
                "otherMul": 3,
                "wilds": 0,
                "symbolNums": 2,
                "value": 0
              }
            ],
            "mulPos": [],
            "prizeScenes": [],
            "curGameMod": "basic",
            "curGameModParam": {
              "historyComponents": [
                "fg-start",
                "fg-spin",
                "fg-payfg"
              ],
              "respinComponents": [],
              "mapComponents": {
                "fg-start": {
                  "triggerRespinNum": [],
                  "basicComponentData": {
                    "usedScenes": [],
                    "usedOtherScenes": [],
                    "usedResults": [],
                    "usedPrizeScenes": [],
                    "srcScenes": [],
                    "coinWin": 0,
                    "cashWin": 0,
                    "targetScene": 0,
                    "runIndex": 0
                  },
                  "lastRespinNum": 0,
                  "totalRespinNum": 0,
                  "curRespinNum": 15,
                  "curAddRespinNum": 0,
                  "totalCoinWin": 471,
                  "totalCashWin": 0,
                  "retriggerAddRespinNum": 0,
                  "lastTriggerNum": 0,
                  "curTriggerNum": 0,
                  "@type": "type.googleapis.com/sgc7pb.RespinData"
                },
                "fg-spin": {
                  "basicComponentData": {
                    "usedScenes": [
                      0
                    ],
                    "usedOtherScenes": [],
                    "usedResults": [],
                    "usedPrizeScenes": [],
                    "srcScenes": [],
                    "coinWin": 0,
                    "cashWin": 0,
                    "targetScene": 0,
                    "runIndex": 0
                  },
                  "reelSetIndex": 1,
                  "@type": "type.googleapis.com/sgc7pb.WeightReelsData"
                },
                "fg-payfg": {
                  "basicComponentData": {
                    "usedScenes": [],
                    "usedOtherScenes": [],
                    "usedResults": [
                      0
                    ],
                    "usedPrizeScenes": [],
                    "srcScenes": [],
                    "coinWin": 60,
                    "cashWin": 600,
                    "targetScene": 0,
                    "runIndex": 0
                  },
                  "nextComponent": "",
                  "symbolNum": 2,
                  "wildNum": 0,
                  "respinNum": 0,
                  "wins": 60,
                  "winMulti": 3,
                  "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                }
              },
              "mapVals": {
                "1": 5,
                "2": 3,
                "6": 10,
                "7": 0,
                "100": 1,
                "101": 1,
                "102": 1,
                "103": 1
              },
              "mapStrVals": {},
              "firstComponent": "fg-start",
              "nextStepFirstComponent": "",
              "@type": "type.googleapis.com/sgc7pb.GameParam"
            },
            "nextGameMod": "basic",
            "curIndex": 0,
            "parentIndex": 0,
            "modType": "",
            "prizeCoinWin": 0,
            "prizeCashWin": 0,
            "jackpotCoinWin": 0,
            "jackpotCashWin": 0,
            "jackpotType": 0
          }
        }
      ],
      "nextCommands": [],
      "nextCommandParams": [],
      "playerState": {
        "public": {
          "curGameMod": "basic",
          "nextM": 0,
          "@type": "type.googleapis.com/sgc7pb.BasicPlayerPublicState"
        }
      },
      "finished": true,
      "stake": null,
      "playStartTime": 1714473303564
    },
    "playIndex": -1,
    "bet": 10,
    "lines": 10,
    "totalwin": 5210,
    "playwin": 0,
    "maxWinLimit": 0
  }
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
  "msgid": "gamemoduleinfo",
  "gamemodulename": "moonwalk",
  "gameid": 61121,
  "gmi": {
    "defaultScene": {
      "values": [
        {
          "values": [
            1,
            2,
            3
          ]
        },
        {
          "values": [
            4,
            5,
            6
          ]
        },
        {
          "values": [
            1,
            2,
            3
          ]
        },
        {
          "values": [
            7,
            8,
            9
          ]
        },
        {
          "values": [
            1,
            2,
            3
          ]
        }
      ],
      "indexes": [],
      "validRow": []
    },
    "replyPlay": {
      "randomNumbers": [
        1,
        30,
        168,
        1,
        1,
        43
      ],
      "results": [
        {
          "coinWin": 10000,
          "cashWin": 1000000,
          "clientData": {
            "scenes": [
              {
                "values": [
                  {
                    "values": [
                      13,
                      13,
                      13
                    ]
                  },
                  {
                    "values": [
                      9,
                      11,
                      3
                    ]
                  },
                  {
                    "values": [
                      8,
                      0,
                      10
                    ]
                  },
                  {
                    "values": [
                      5,
                      11,
                      3
                    ]
                  },
                  {
                    "values": [
                      13,
                      13,
                      13
                    ]
                  }
                ],
                "indexes": [],
                "validRow": []
              },
              {
                "values": [
                  {
                    "values": [
                      13,
                      13,
                      13
                    ]
                  },
                  {
                    "values": [
                      13,
                      13,
                      13
                    ]
                  },
                  {
                    "values": [
                      13,
                      13,
                      13
                    ]
                  },
                  {
                    "values": [
                      13,
                      13,
                      13
                    ]
                  },
                  {
                    "values": [
                      13,
                      13,
                      13
                    ]
                  }
                ],
                "indexes": [],
                "validRow": []
              }
            ],
            "otherScenes": [],
            "results": [
              {
                "pos": [
                  0,
                  0,
                  0,
                  1,
                  0,
                  2
                ],
                "type": 5,
                "lineIndex": -1,
                "symbol": 13,
                "mul": 0,
                "coinWin": 0,
                "cashWin": 0,
                "otherMul": 0,
                "wilds": 0,
                "symbolNums": 3,
                "value": 0
              },
              {
                "pos": [
                  0,
                  0,
                  0,
                  1,
                  0,
                  2,
                  1,
                  0,
                  1,
                  1,
                  1,
                  2,
                  2,
                  0,
                  2,
                  1,
                  2,
                  2,
                  3,
                  0,
                  3,
                  1,
                  3,
                  2,
                  4,
                  0,
                  4,
                  1,
                  4,
                  2
                ],
                "type": 1,
                "lineIndex": -1,
                "symbol": 13,
                "mul": 10000,
                "coinWin": 10000,
                "cashWin": 1000000,
                "otherMul": 1,
                "wilds": 0,
                "symbolNums": 15,
                "value": 0
              }
            ],
            "mulPos": [],
            "prizeScenes": [],
            "curGameMod": "basic",
            "curGameModParam": {
              "historyComponents": [
                "bg-spin",
                "bg-walktrigger",
                "bg-walk",
                "bg-paysc"
              ],
              "respinComponents": [],
              "mapComponents": {
                "bg-spin": {
                  "basicComponentData": {
                    "usedScenes": [
                      0
                    ],
                    "usedOtherScenes": [],
                    "usedResults": [],
                    "usedPrizeScenes": [],
                    "srcScenes": [],
                    "coinWin": 0,
                    "cashWin": 0,
                    "targetScene": 0,
                    "runIndex": 0
                  },
                  "reelSetIndex": 0,
                  "@type": "type.googleapis.com/sgc7pb.WeightReelsData"
                },
                "bg-walktrigger": {
                  "basicComponentData": {
                    "usedScenes": [],
                    "usedOtherScenes": [],
                    "usedResults": [
                      0
                    ],
                    "usedPrizeScenes": [],
                    "srcScenes": [],
                    "coinWin": 0,
                    "cashWin": 0,
                    "targetScene": 0,
                    "runIndex": 0
                  },
                  "nextComponent": "bg-walk",
                  "symbolNum": 3,
                  "wildNum": 0,
                  "respinNum": 0,
                  "wins": 0,
                  "winMulti": 1,
                  "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                },
                "bg-walk": {
                  "basicComponentData": {
                    "usedScenes": [
                      1
                    ],
                    "usedOtherScenes": [],
                    "usedResults": [],
                    "usedPrizeScenes": [],
                    "srcScenes": [
                      0
                    ],
                    "coinWin": 0,
                    "cashWin": 0,
                    "targetScene": 0,
                    "runIndex": 0
                  },
                  "@type": "type.googleapis.com/sgc7pb.BasicComponentData"
                },
                "bg-paysc": {
                  "basicComponentData": {
                    "usedScenes": [],
                    "usedOtherScenes": [],
                    "usedResults": [
                      1
                    ],
                    "usedPrizeScenes": [],
                    "srcScenes": [],
                    "coinWin": 10000,
                    "cashWin": 1000000,
                    "targetScene": 0,
                    "runIndex": 0
                  },
                  "nextComponent": "",
                  "symbolNum": 15,
                  "wildNum": 0,
                  "respinNum": 0,
                  "wins": 10000,
                  "winMulti": 1,
                  "@type": "type.googleapis.com/sgc7pb.ScatterTriggerData"
                }
              },
              "mapVals": {
                "1": 5,
                "2": 3,
                "6": 10,
                "7": 0,
                "100": 1,
                "101": 1,
                "102": 1,
                "103": 1
              },
              "mapStrVals": {},
              "firstComponent": "",
              "nextStepFirstComponent": "",
              "@type": "type.googleapis.com/sgc7pb.GameParam"
            },
            "nextGameMod": "basic",
            "curIndex": 0,
            "parentIndex": 0,
            "modType": "",
            "prizeCoinWin": 0,
            "prizeCashWin": 0,
            "jackpotCoinWin": 0,
            "jackpotCashWin": 0,
            "jackpotType": 0
          }
        }
      ],
      "nextCommands": [],
      "nextCommandParams": [],
      "playerState": {
        "public": {
          "curGameMod": "basic",
          "nextM": 0,
          "@type": "type.googleapis.com/sgc7pb.BasicPlayerPublicState"
        }
      },
      "finished": true,
      "stake": null,
      "playStartTime": 1714447980223
    },
    "playIndex": -1,
    "bet": 100,
    "lines": 10,
    "totalwin": 1000000,
    "playwin": 0,
    "maxWinLimit": 0
  }
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