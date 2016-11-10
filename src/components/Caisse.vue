<style scoped>
#caisse-table, #caisse-total {
  margin: 0 auto 1.5rem;
}

#caisse-table th,
#caisse-table td {
  padding: 1rem 0.5rem;
}
</style>

<template>
  <section id="caisse">
    <table id="caisse-table">
      <tr>
        <th>Item</th>
        <th>Quantité</th>
        <th>Prix à l'unité</th>
        <th><button @click="add_item">Ajouter un item</button></th>
      </tr>
      <tr v-for="(item, index) in items">
        <td><input type="text" v-model="item.name"></td>
        <td><input type="number" v-model="item.qte"></td>
        <td><input type="number" v-model="item.price"></td>
        <td><button :data-index="index" @click="remove_item">Supprimer</button></td>
      </tr>
    </table>
    <hr />
    <table id="caisse-total">
      <tr><td>Sous-total:</td><td>{{ calculateSubTotal() | currency }}</td></tr>
      <tr><td>TPS:</td><td>{{ calculateTPS() | currency }}</td></tr>
      <tr><td>TVQ:</td><td>{{ calculateTVQ() | currency }}</td></tr>
      <tr><td>Total:</td><td>{{ calculateTotal() | currency }}</td></tr>
    </table>
  </section>
</template>

<script>
export default {
  name: 'caisse',
  data () {
    return {
      items: [
        {name: 'Barbie', qte: 1, price: 19.95},
        {name: 'Ken', qte: 1, price: 19.75}
      ]
    }
  },
  methods: {
    add_item (e) {
      this.items.push({name: 'Nouveau', qte: 1, price: 100})
    },
    remove_item (e) {
      this.items.splice(e.target.dataset.index, 1)
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
      const tps = 0.05

      return (this.calculateSubTotal() + this.calculateTPS()) * tps
    },
    calculateTotal () {
      return this.calculateSubTotal() + this.calculateTPS() + this.calculateTVQ()
    }
  }
}
</script>
