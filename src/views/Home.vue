<template>
  <div class="home">
    <FareToutes msg="Prototype using functional programming concepts"/>
  </div>
</template>

<script>
// @ is an alias to /src
import FareToutes from '@/components/FareToutes.vue'

export default {
  name: 'home',
  components: {
    FareToutes
  }
}
</script>
