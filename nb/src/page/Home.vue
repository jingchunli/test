<template>
  <div>
    <!-- <input type="text" v-model="nowTime"> -->
    <div>{{nowTime}}</div>
    1
    <router-link to="/View">index</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      nowTime: Date()
    }
  },
  methods: {},
  mounted () {
    let _this = this // 声明一个变量指向Vue实例this，保证作用域一致
    this.timer = setInterval(() => {
      _this.nowTime = new Date().toLocaleString() // 修改数据date
    }, 1000)
  },
  beforeDestroy () {
    if (this.timer) {
      clearInterval(this.timer) // 在Vue实例销毁前，清除我们的定时器
    }
  }
}
</script>
