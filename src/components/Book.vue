<template>
  <div class="book">
    <h3 class="book__title">{{ book.title }}</h3>
    <div class="book__infos">
      <img class="book__infos__picture" :src="book.picture"/>
      <div class="book__infos__description">
        <p>{{ book.description }}</p>
        <div class="book__infos__description__price">
          <meta content="BRL" itemprop="priceCurrency">
          <meta content="17.4" itemprop="price">
          <sup class="symbol">R$</sup>
          <span class="price">{{ book.price }}</span>
        </div>
      </div>
    </div>
    <button class="book__add-to-cart" type="button" name="button">Adicionar ao Carrinho</button>
  </div>
</template>
<script>
  export default {
    name: 'book',
    props:['book']
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
