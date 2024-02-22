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
                    console.log(`1. count: ${t1[1]}; time: ${t1[0]}ms`)
                    const t2 = collectTime(() => {
                        const length = Object.entries(assets).length
                        return length
                    })
                    console.log(`2. count: ${t2[1]}; time: ${t2[0]}ms`)

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
