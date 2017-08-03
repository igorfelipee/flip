<template>
  <nav class="menu">
    <router-link class="menu__link" to="/" v-if="home">
      <h2 v-if="home" class="menu__home"><i class="fa fa-home" aria-hidden="true"></i></h2>
    </router-link>
    <h1 v-text='title'></h1>
    <router-link class="menu__link" to="/my-cart" v-if="cart">
      <h2 class="menu__cart">
        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
        <span class="menu__cart__itens-counter">{{ totalCart }}</span>
      </h2>
    </router-link>
  </nav>
</template>
<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'menu',
    data () {
      return{
        title: 'Flip'
      }
    },
    computed:{
      ...mapGetters([
          'totalCart'
      ])
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
  .menu__link{
    text-decoration: none;
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
}
</style>
