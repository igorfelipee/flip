
<template>
  <div id="app">
    <menu-principal></menu-principal>
    <book-list></book-list>
  </div>
</template>

<script>
import Menu from './components/Menu.vue';
import BookList from './components/BookList.vue';
export default {
  components: {
    'menu-principal': Menu,
    'book-list': BookList
  },
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
@import url("https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css");
@import url('https://fonts.googleapis.com/css?family=Raleway:400,700');

*{
  font-family: 'Raleway', sans-serif;
  box-sizing: border-box;
}
</style>
