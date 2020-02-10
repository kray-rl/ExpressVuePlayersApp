<template>
  <div class="full">
    <table>
      <tr>
        <th>Место</th>
        <th>ФИО</th>
        <th>Статус</th>
        <th>Опыт</th>
        <th>Монеты</th>
      </tr>
      <tr v-if="errored">
        <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
      </tr>
      <tbody v-else>
        <tr v-if="loading">
          <p>Loading...</p>
        </tr>
        <tr v-else
            v-for="(value, key) in players"
            :key="key">
          <td>{{ value.rating}}</td>
          <td>{{ value.fio}}</td>
          <td>{{ value.status}}</td>
          <td>{{ value.exp}}</td>
          <td>{{ value.money}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Players',
  data: function () {
    return {
      loading: false,
      errored: false,
      players: null,
      endpoint: 'http://localhost:3000/api/players'
    }
  },
  created () {
    this.getPlayers()
  },
  methods:
  {
    async getPlayers () {
      this.loading = true
      axios
        .get(this.endpoint)
        .then(response => (this.players = response.data))
        .catch(() => {
          this.errored = true
        })
        .finally(() => (this.loading = false))
    }
  }
}
</script>
