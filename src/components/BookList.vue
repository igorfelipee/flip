<template>
  <div class="container">
    <input class="filter" v-on:input="filterText = $event.target.value" placeholder="Pesquise o livro desejado">
    <div class="book-wrapper">
      <book v-for="book of filter" :key="book.id" :book="book"></book>
    </div>
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
        books: [],
        filterText: ''
      }
    },
    computed:{
      filter() {
        let exp = new RegExp(this.filterText.trim(), 'i');
        if(this.filterText){
          return this.books.filter(book => exp.test(book.title))
        }else{
          return this.books;
        }
      }
    },
    created () {
      this.$http.get('./data/books.json')
        .then(res => res.json())
        .then(books => this.books = books, err => console.log(err));
    }
  };
</script>
<style lang="scss">
  .filter{
    display: block;
    width: 88%;
    height: 40px;
    margin: 20px auto;
    padding: 0 10px;
  }
  .book-wrapper{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-self: center;
    justify-content: center;
  }
  
</style>
