<template>
  <div class="main">
    Main
  </div>
</template>

<script>

export default {
  name: 'main',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted: function () {
    console.log('Hello from parent')
  }
}
</script>
