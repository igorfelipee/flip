<template>
  <div>
    <menu-principal :home="false"></menu-principal>
    <book-list></book-list>
  </div>
</template>

<script>
import Menu from '../components/Menu.vue';
import BookList from '../components/BookList.vue';
export default {
  components: {
    'menu-principal': Menu,
    'book-list': BookList
  },
  name: 'home',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">

</style>
