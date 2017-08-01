<template>
  <div class="book-wrapper">
    <book></book>
    <book></book>
    <book></book>
    <book></book>
    <book></book>
    <book></book>
    <book></book>
    <book></book>
  </div>
</template>
<script>
  import Book from './Book.vue';
  export default {
    components:{
      'book': Book
    },
    name: 'book-list',
    data () {
      return{

      }
    }
  }
</script>
<style lang="scss">
  .book-wrapper{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-self: center;
    justify-content: center;
  }
</style>
