const webpack = require("webpack");

class RsPackPlugin1 {
    apply(compiler) {
        // if (process.platform === 'win32') {
        //   return
        // }
        // new Worker(__filename, {
        //   workerData: {
        //     // 传递给工作线程的数据
        //     value: ''

        //   }
        // })
        compiler.hooks.compilation.tap("RsBuildPlugin1", (compilation) => {
            compilation.hooks.processAssets.tap(
                {
                    name: 'MyPlugin',
                    stage: webpack.Compilation.PROCESS_ASSETS_STAGE_DERIVED, // see below for more stages
                },
                (assets) => {

                    const t1 = collectTime(() => {
                        const length = Object.entries(assets).length
                        return length
                    })
                    console.log(`第一次 读取 asset 中 ${t1[1]} 条数据, 耗时：${t1[0]}ms`)
                    const t2 = collectTime(() => {
                        const length = Object.entries(assets).length
                        return length
                    })
                    console.log(`第二次 读取 asset 中 ${t2[1]} 条数据, 耗时：${t2[0]}ms`)
                })
        })
    }
}
function collectTime(fn) {
    const n = Date.now()
    const r = fn()
    const t = Date.now()
    return [t - n, r]
}
module.exports = RsPackPlugin1
