const fs = require('fs')

const l = Array.from({ length: 200 }, (_, i) => i + 1)

if (!fs.existsSync('./src/pages')) {
    fs.mkdirSync('./src/pages')
    fs.mkdirSync('./src/entry')

    const AppVueComponent = 
`<template>
  <div>
    批量生成的文件：{{ count }}
  </div>
  <Button type="primary" @click="count++">数量{{ count }}</Button>   
  <div class="wrapper">
      <HelloWorld msg="You did it122!" />
  </div>
  <main>
    <TheWelcome />
  </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import HelloWorld from '../components/HelloWorld.vue'
import TheWelcome from '../components/TheWelcome.vue'
import { Button } from 'vant'
const count = ref(AAA)

</script>

<style scoped>
header {
    line-height: 1.5;
  }
  
  .logo {
    display: block;
    margin: 0 auto 2rem;
  }
  
  @media (min-width: 1024px) {
    header {
      display: flex;
      place-items: center;
      padding-right: calc(var(--section-gap) / 2);
    }
  
    .logo {
      margin: 0 2rem 0 0;
    }
  
    header .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }
  }
</style>
`

    const MainTs = 
`import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount(document.body);
`


    l.forEach(i => {
        const t = AppVueComponent.replace('AAA', i)
        fs.writeFileSync(`./src/pages/test_${i}.vue`, t, {encoding: 'utf-8'})
    })

    l.forEach(i => {
        const t = MainTs.replace('./App.vue', `../pages/test_${i}.vue`)
        fs.writeFileSync(`./src/entry/test_${i}.ts`, t, {encoding: 'utf-8'})
    })

    // { path: 'test_1', component: () => import('./pages/test_1.vue') }
    const rx = 'export const routes = [ \n' +
    l.reduce((total, i) => {
        total += `  { path: 'test_${i}', component: () => import('./pages/test_${i}.vue') },\n`
        return total
    }, '') + 
    '];\n'
    fs.writeFileSync(`./src/routers.ts`, rx)
}


module.exports = l.reduce((total, i) => {
    total[`test_${i}`] = `./src/entry/test_${i}.ts`
    return total
}, {})

