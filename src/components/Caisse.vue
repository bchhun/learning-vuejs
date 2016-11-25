<style scoped>
#caisse-table, #caisse-total {
  margin: 0 auto 1.5rem;
}

#caisse-table th,
#caisse-table td {
  padding: 1rem 0.5rem;
}

#caisse-total td {
  text-align: right;
}
</style>

<template>
  <section id="caisse">
    <table id="caisse-table">
      <tr>
        <th>Item</th>
        <th>Quantity</th>
        <th>Unit price</th>
        <th><button @click="add_item">Add an item</button></th>
      </tr>
      <tr v-for="(item, index) in items">
        <td><input type="text" v-model="item.name"></td>
        <td><input type="number" v-model="item.qte"></td>
        <td><input type="number" v-model="item.price"></td>
        <td><button :data-index="index" @click="remove_item">Delete</button></td>
      </tr>
    </table>
    <hr />
    <table id="caisse-total">
      <tr><td>Subtotal:</td><td>{{ calculateSubTotal() | currency }}</td></tr>
      <tr><td>TPS:</td><td>{{ calculateTPS() | currency }}</td></tr>
      <tr><td>TVQ:</td><td>{{ calculateTVQ() | currency }}</td></tr>
      <tr><td>Total:</td><td>{{ calculateTotal() | currency }}</td></tr>
    </table>
  </section>
</template>

<script>
export default {
  name: 'caisse',
  computed: {
    items () {
      return this.$store.state.items
    }
  },
  methods: {
    add_item (e) {
      this.$store.commit('add_item')
    },
    remove_item (e) {
      this.$store.commit('remove_item', {index: e.target.dataset.index})
    },
    calculateSubTotal () {
      let total = 0

      this.items.forEach(item => { total += item.qte * item.price })
      return total
    },
    calculateTPS () {
      const tps = 0.05

      return this.calculateSubTotal() * tps
    },
    calculateTVQ () {
      const tvq = 0.09975

      return (this.calculateSubTotal() + this.calculateTPS()) * tvq
    },
    calculateTotal () {
      return this.calculateSubTotal() + this.calculateTPS() + this.calculateTVQ()
    }
  }
}
</script>
