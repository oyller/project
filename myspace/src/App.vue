<template>
  <Navbar_view></Navbar_view>
  <router-view :key="$route.fullPath"></router-view>
</template>
 
<script>

import Navbar_view from './components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar_view,

  }
}
</script>

<style></style>
