<template>
  <div id="app">
    <div class="nav">
      <button><router-link to="/Home">Перейти к Home</router-link></button>
      <button><router-link to="/Top">Перейти к Top</router-link></button>
      <button><router-link to="/Full">Перейти к Full</router-link></button>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>

</style>
