<template>
  <div id="main">
      <Header title="喵喵电影"/>
      <div id="content">
        <div class="movie-mebu">
          <div class="city-name">
            <span><i class="iconfont icon-lower-triangle"></i></span>
          </div>
          <div class="hot-switch">
            <div class="hot"></div>
            <div class="hot"></div>
          </div>
          <div class="search">
            <i></i>
          </div>
        </div>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
      <TabBar/>
  </div>
</template>

<script>
import Header from '@/components/header'
import TabBar from '@/components/tabbar'

export default {
  name:'movie',
  components:{
    Header,
    TabBar,
  }
}
</script>

<style>

</style>