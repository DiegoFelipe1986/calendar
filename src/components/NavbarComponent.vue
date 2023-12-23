<template>
  <div>
    <nav class="navbar">
      <div class="container">
        <h3>CDP</h3>
        <ul>
        <router-link to="/calendar"> Calendar </router-link>||
        <router-link to="/list"> List </router-link>
        </ul>
      </div>
    </nav>

    <div class="content">
    </div>
  </div>
</template>

<style scoped>
.navbar {
  background-color: #333;
  color: white;
  padding: 10px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  display: inline-block;
  margin-right: 20px;
}

a {
  text-decoration: none;
  color: white;
}

.content {
  padding: 20px;
}
</style>
