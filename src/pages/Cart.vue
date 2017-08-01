<template>
  <div>
    <menu-principal :cart="false"></menu-principal>
  </div>
</template>

<script>
import Menu from '../components/Menu.vue';
export default {
  components: {
    'menu-principal': Menu
  },
  name: 'cart',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">

</style>
