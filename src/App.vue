<template>
  <div id="app">
    <nav>
      <ul class="nav-list">
        <li>
          <router-link class="nav-link" to="/" exact>Home</router-link>
        </li>
        <li>
          <router-link class="nav-link" to="/settings">Settings</router-link>
        </li>
      </ul>
    </nav>
    <div class="main-container">
      <DataSourcesSidebar />
      <div class="right-container">
        <router-view />
      </div>
    </div>
    <FooterComponent />
  </div>
</template>


<script>
import FooterComponent from "./components/Footer.vue"; // Add this line
import DataSourcesSidebar from './components/Sidebar.vue'

export default {
  name: "App",
  components: {
    FooterComponent,
    DataSourcesSidebar
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

nav {
  background-color: #f8f9fa;
  padding: 1rem;
  z-index: 1;
  width: 100%;
}

.nav-list {
  list-style-type: none;
  display: flex;
  justify-content: center;
}

.nav-link {
  display: inline-block;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: #000;
  margin-right: 1rem;
}

.router-link-active {
  font-weight: bold;
  color: #007bff;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-container {
  display: flex;
  flex-grow: 1;
}

.right-container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
}

.content {
  padding: 1rem;
  flex-grow: 1;
}
</style>