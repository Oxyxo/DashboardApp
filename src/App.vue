<template>
  <div id="app">
    <header>
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
    </header>
    <main>
      <DataSourcesSidebar />
      <div class="content">
        <router-view />
      </div>
    </main>
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

body {
  font-family: Arial, sans-serif;
}

header {
  background-color: #007bff;
  padding: 1rem;
}

nav {
  display: flex;
  justify-content: center;
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
  color: #fff;
  margin-right: 1rem;
}

.router-link-active {
  font-weight: bold;
  color: #fff;
}

main {
  display: flex;
  min-height: calc(100vh - 154px);
  position: relative;
}

.content {
  padding: 1rem;
  flex-grow: 1;
  background-color: #fff;
}
</style>