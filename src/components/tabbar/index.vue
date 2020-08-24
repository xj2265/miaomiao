<template>
  <footer id="footer">
      <ul>
          <router-link tag="li" to="/movie">
              <i class="iconfont icon-dianying "></i>
              <p>电影</p>
          </router-link>
          <router-link tag="li" to="/cinema">
              <i class="iconfont icon-yingyuan"></i>
              <p>影院</p>
          </router-link>
          <router-link tag="li" to="/mine">
              <i class="iconfont icon-wode"></i>
              <p>我的</p>
          </router-link>
      </ul>
  </footer>
</template>

<script>
export default {
    name:'tabbar',
}
</script>

<style scoped>
#footer ul li.active{
    color: tomato;
}
#footer ul li.router-link-active{
    color: tomato;
}
</style>

