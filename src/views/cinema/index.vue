<template>
  <div id="main" >
      <Header title="喵喵电影"/>
      <div id="content">
        <div class="cinema-menu">
          <div class="city-switch">
            全域<i class="iconfont icon-lower-triangle"></i>
          </div>
          <div class="brand-switch">
            品牌<i class="iconfont icon-lower-triangle"></i>
          </div>
          <div class="feature-switch">
            特色<i class="iconfont icon-lower-triangle"></i>
          </div>
        </div>
      </div>
      <TabBar/>
  </div>
</template>

<script>
import Header from '@/components/header'
import TabBar from '@/components/tabbar'
import Clist from '@/componrents/clist'

export default {
  name:'cinema',
  components:{
    Header,
    TabBar,
  }
}
</script>

<style>

</style>