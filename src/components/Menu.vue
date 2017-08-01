<template>
  <nav class="menu">
    <h2 v-if="home" class="menu__home"><i class="fa fa-home" aria-hidden="true"></i></h2>
    <h1 v-text='title'></h1>
    <h2 v-if="cart" class="menu__cart">
      <i class="fa fa-shopping-cart" aria-hidden="true"></i>
      <span class="menu__cart__itens-counter">0</span>
    </h2>
  </nav>
</template>
<script>
  export default {
    name: 'menu',
    data () {
      return{
        title: 'Flip'
      }
    },
    props:{
      home: {
       type: Boolean,
       default: true,
       required: false
     },
     cart: {
       type: Boolean,
       default: true,
       required: false
     }
    }
  }
</script>
<style lang="scss">
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
.menu{
  width:100%;
  height:70px;
  background-color: #2ecc71;
  border-bottom: 3px solid #27ae60;
  display: flex;
  align-items: center;
  justify-content: center;

  h1{
    color: white;
    flex-basis: 75%;
    text-align: center;
  }
  .menu__cart, .menu__home{
    i{
      font-size: 30px;
      color: white;
    }
    .menu__cart__itens-counter{
      color: #333;
    }
  }
}
</style>
