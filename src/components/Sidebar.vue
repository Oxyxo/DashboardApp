<template>
    <aside class="sidebar">
        <h3>Data Sources</h3>
        <ul>
            <li><a href="#">Maria DB</a></li>
            <li><a href="#">Mongo DB</a></li>
            <li><a href="#">Excel.csv</a></li>
            <li><a href="#">JSON</a></li>
        </ul>
    </aside>
</template>

<script>
export default {
    name: 'DataSourcesSidebar'
}
</script>

<style scoped>
.sidebar {
    background-color: #28a745;
    color: white;
    width: 250px;
    padding: 1rem;
    height: 100%;
    position: fixed;
}

.sidebar h3 {
    margin-bottom: 1rem;
}

.sidebar ul {
    list-style-type: none;
    padding: 0;
}

.sidebar ul li a {
    color: white;
    text-decoration: none;
}
</style>
