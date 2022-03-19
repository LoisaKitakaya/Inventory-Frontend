<template>
  <div class="home-page">
    <div class="section">
      <h1 class="title has-text-centered">{{ item.name }}</h1>
      <div class="box detail-box">
        <p><strong>Category: </strong> {{ item.category }}</p>
        <br />
        <p><strong>Location: </strong> {{ item.location }}</p>
        <br />
        <p>
          <strong>Quantity/Mass/Volume: </strong>
          {{ item.quantity_mass_volume }}
        </p>
        <br />
        <p><strong>Measurement in: </strong> {{ item.measurement_in }}</p>
        <br />
        <p><strong>Condition: </strong> {{ item.condition }}</p>
        <br />
        <p><strong>Type/Make/Model: </strong> {{ item.type_make_model }}</p>
        <br />
        <p><strong>More Details: </strong> {{ item.more_details }}</p>
        <br />
        <p><strong>Archived on: </strong> {{ item.archived_on }}</p>
        <br />
        <p><strong>Last Modified: </strong> {{ item.last_modified }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ItemDetailView",
  data() {
    return {
      item: [],
    };
  },
  mounted() {
    this.getItems();
  },
  methods: {
    async getItems() {
      this.$store.commit("setIsLoading", true);

      const itemId = this.$route.params.id;

      await axios
        .get(`/api-v1/items/${itemId}`)
        .then((response) => {
          console.log(response.data);

          this.item = response.data;
        })
        .catch((error) => {
          console.log(error);
        });

      this.$store.commit("setIsLoading", false);
    },
  },
};
</script>
