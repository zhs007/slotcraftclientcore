# Slotcraft Editor

辅助Slotcraft编辑器前端库，主要用来处理一些逻辑数据。
接口统一导出在 `SlotcraftEditor` 下。

### parseSlotCraftJson(moduleMatching)

传入 `moduleMatching` 数据，输出 `statedata` 和 `statelist` 数据。
如果数据错误，会抛出Error，最好能提示给用户。

### genLogicData(betMethods)

传入 `betMethods` 数据，输出其它模块需要用到的简化数据。
如果数据错误，会抛出Error，最好能提示给用户。

### genLogicFileData(repository, isAdmin)

传入 `repository` 数据，输出其它模块需要用到的简化数据，该数据还可以用于文件内容预览。
如果是项目所有者，`isAdmin` 应该给 `true`，这样输出的数据有详细的数值，否则 `isAdmin` 应该给 `false`，这样用户得不到详细的数值，但能知道基本配置数据，方便他理解游戏设计。
如果数据错误，会抛出Error，最好能提示给用户。

数据统一用二维输出方式输出。

譬如 `paytable` :

```
[
    ['symbol', 'x1', 'x2', 'x3', 'x4', 'x5', 'x6', 'x7', 'x8', 'x9', 'x10', 'x11', 'x12', 'x13', 'x14', 'x15'],
    ['SC', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['A', 0, 0, 0, 0, 20, 30, 35, 40, 50, 100, 150, 300, 700, 1400, 3000],
    ...
]
```

譬如 `Reels` 在 `isAdmin` 为 `true` 时候的输出:

```
[
    ['symbol', 'r1', 'r2', 'r3', 'r4', 'r5', 'r6', 'r7'],
    ['SC', 1, 1, 1, 1, 1, 1, 1],
    ['A', 24, 24, 24, 24, 24, 24, 22],
    ...
]
```

譬如 `Reels` 在 `isAdmin` 为 `false` 时候的输出:

```
[
    ['symbol', 'r1', 'r2', 'r3', 'r4', 'r5', 'r6', 'r7'],
    ['SC', '√', '√', '√', '√', '√', '√', '√'],
    ['A', '√', '√', '√', '√', '√', '√', '√'],
    ...
]
```

譬如 权重表 在 `isAdmin` 为 `true` 时候的输出:

```
[
    [ 'val', 'weight' ],
    [ 'none', 100 ],
    [ 'giga', 100 ]
]
```

譬如 权重表 在 `isAdmin` 为 `false` 时候的输出:

```
[
    [ 'val', 'weight' ],
    [ 'none', '?' ],
    [ 'giga', '?' ]
]
```
