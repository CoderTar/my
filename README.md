# littledemo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



动态绑定属性:父组件到子组件

topcolor="red"
子组件props:{
    topcolor:string
}

子组件通过computed计算属性回调

computed:{
    backcolor(){
        return {color:this.topcolor}
    }
}
子组件div :style="backcolor"