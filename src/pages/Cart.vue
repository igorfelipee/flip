<template>
  <div>
    <menu-principal :cart="false"></menu-principal>
    <p class="cart__empty" v-if="myCartItens.length == 0">O seu carrinho esta vazio</p>
    <div style="overflow-x: auto;" v-if="myCartItens.length > 0">
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Quantidade</th>
            <th>Preco</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="book in myCartItens">
            <th>{{ book.title }}</th>
            <th class="cart__item__total">
              <p>{{ book.total }}</p>
              <div class="cart__item__total__incdec">
                <i @click="incrementItemInCart(book.id)" class="fa fa-plus" aria-hidden="true"></i>
                <i @click="decrementItemFromCart(book.id)" class="fa fa-minus" aria-hidden="true"></i>
              </div>
            </th>
            <th>R${{ book.price }}</th>
            <th><p class="cart__item__remove" @click="removeItemFromCart(book)"><i class="fa fa-trash" aria-hidden="true"></i> Remover</p></th>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2">Preco Total</td>
            <td>R$ {{ itensTotalPrice }}</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
import Menu from '../components/Menu.vue';
import { mapGetters, mapActions } from 'vuex';
export default {
  components: {
    'menu-principal': Menu
  },
  name: 'cart',
  computed:{
      ...mapGetters([
        'myCartItens',
        'itensTotalPrice'
      ])
  },
  methods: {
    ...mapActions([
        'removeItemFromCart',
        'incrementItemInCart',
        'decrementItemFromCart'
    ])
  }
}
</script>

<style lang="scss" scoped>
  .cart__empty{
    width: 100%;
    text-align: center;
    color: #333;
    font-size: 2em;
    margin-top: 200px;
  }
  table{
    width: 80%;
    position: relative;
    margin: 40px auto;
    border-collapse: collapse;
    text-align: center;
    border: 1px solid #eee;

    thead,tbody, tfoot{
      width: 100%;
    }
    tr{
      width: 100%;
      padding: 20px;
      border: 1px solid #eee;
      th,td{
        border: 1px solid #eee;
        color: #333;
        padding: 20px;
        .cart__item__total{
          display: flex;
        }
        .cart__item__remove{
          cursor: pointer;
        }
        .cart__item__total__incdec{
          display: inline-flex;
          align-items: center;
          justify-content: center;
          .fa-plus{
            color: #2ecc71;
            margin: 10px;
            cursor: pointer;
          }
          .fa-minus{
            color: red;
            cursor: pointer;
          }
        }
      }
    }
  }

</style>
