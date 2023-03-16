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
    <div class="bottom">
        <button class=".faq-btn">FAQ</button>
        <button class="sidebar-button">Change Color</button>

    </div>
</template>

<script>
export default {
    name: 'DataSourcesSidebar'
}
</script>

<style scoped>
.sidebar {
    position: absolute;
    top: 0;
    bottom: 0;
    /* width: 240px;
    height: 100%; */
    background-color: #f8f9fa;
    padding: 1rem;
}

.bottom {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    padding-left: 1rem;
}

.faq-btn {
    margin-bottom: 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 3px;
    padding: 0.5rem 1rem;
    cursor: pointer;
}

.sidebar-button {
    margin-right: 0.5rem;
}
</style>


