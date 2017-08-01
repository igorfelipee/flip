<template>
  <div class="book">
    <h3 class="book__title">Nome do Livro</h3>
    <div class="book__infos">
      <img class="book__infos__picture" src="https://scontent.fsdu7-1.fna.fbcdn.net/v/t1.0-9/19554392_1425537537483532_8220243226396980994_n.jpg?_nc_eui2=v1%3AAeHTtWd5oliWReOZBBmO7_B8aDHH24sw9gT0CG8TnwHgn3eEFKz-28YYnuY4xbuN1Fasno1d1IZSIqGVf66T8W6wpGQVX7n4ANY2-YArWzd-8w&oh=4802c1ffa3a842be966bb5afedbde141&oe=59FA4AD4"/>
      <div class="book__infos__description">
        <p>Mais um Livro OP</p>
        <div class="book__infos__description__price">
          <meta content="BRL" itemprop="priceCurrency">
          <meta content="17.4" itemprop="price">
          <sup class="symbol">R$</sup>
          <span class="price">12,34</span>
        </div>
      </div>
    </div>
    <button class="book__add-to-cart" type="button" name="button">Adicionar ao Carrinho</button>
  </div>
</template>
<script>
  export default {
    name: 'book',
    data () {
      return{

      }
    }
  }
</script>
<style lang="scss">
  .book{
    width: 20%;
    height: auto;
    border: 2px solid #eee;
    margin: 20px;
    .book__title{
      text-align: center;
      color: #333;
    }
    .book__infos{
      width: 100%;
      height: auto;
      display: flex;
      margin-bottom: 10px;
      .book__infos__picture{
        width: 120px;
        height: 120px;
        flex-basis: 40%;
        margin: 0 5px 0 10px;
      }
      .book__infos__description{
        text-align: center;
        flex-basis: 55%;
        margin-right: 10px;
        .book__infos__description__price{
          .symbol, .price{
            font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
          }
          .symbol{
            font-size: 14px;
            color: #666;
            font-weight: 700;
          }
          .price{
            font-size: 20px;
            color: #2ecc71;
            font-weight: 700;
          }
        }
      }
    }
    .book__add-to-cart{
      width: 100%;
      height: 40px;
      background: #2ecc71;
      color: white;
      border: none;
      cursor: pointer;
    }
  }
</style>
