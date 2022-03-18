<template>
  <div class="home-page">
    <div class="section">
      <h1 class="title has-text-centered">Inventory</h1>
      <div class="table-container card">
        <table class="table is-striped is-hoverable is-fullwidth">
          <thead>
            <tr class="has-text-centered">
              <th>Name</th>
              <th>Quantity/Mass/Volume</th>
              <th>Measurement in</th>
              <th>Condition</th>
              <th>Last Modified</th>
            </tr>
          </thead>
          <tbody>
            <tr class="has-text-centered" v-for="item in items" :key="item.id">
              <td>
                <router-link
                  :to="{ name: 'detail', params: { id: item.id } }"
                  class="has-text-link"
                  >{{ item.name }}</router-link
                >
              </td>
              <td>{{ item.quantity_mass_volume }}</td>
              <td>{{ item.measurement_in }}</td>
              <td>{{ item.condition }}</td>
              <td>{{ item.last_modified }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "InventoryView",
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    this.getItems();
  },
  methods: {
    getItems() {
      axios
        .get("/api-v1/items/")
        .then((response) => {
          console.log(response.data);

          this.items = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
