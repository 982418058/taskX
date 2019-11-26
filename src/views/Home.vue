<template>
  <div class="home">
    <team/>
  </div>
</template>

<script>
// @ is an alias to /src
import team from '@/components/team.vue'

export default {
  name: 'home',
  components: {
    team
  }
}
</script>
<style>
.home{
height: 100%;
}
</style>
