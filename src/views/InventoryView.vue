<template>
  <div class="home-page">
    <div class="section">
      <h1 class="title has-text-centered">Inventory</h1>
      <div class="table-container">
        <table class="card table is-striped is-hoverable">
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
            <tr class="has-text-centered">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InventoryView",
  data() {
    return {
      items: [],
    };
  },
};
</script>
