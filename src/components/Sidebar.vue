<template>
    <aside class="sidebar" :style="{ backgroundColor: sidebarColor }">
        <h3>Data Sources</h3>
        <ul>
            <li><a href="#">Maria DB</a></li>
            <li><a href="#">Mongo DB</a></li>
            <li><a href="#">Excel.csv</a></li>
            <li><a href="#">JSON</a></li>
        </ul>
    </aside>
    <div class="bottom">
        <button class="faq-button">FAQ</button>
        <button class="change-color-button" @click="changeSidebarColor">Change Color</button>

    </div>
</template>

<script>
export default {
    name: 'DataSourcesSidebar',
    data() {
        return {
            sidebarColor: "green",
        };
    },
    methods: {
        changeSidebarColor() {
            this.sidebarColor = this.sidebarColor === "#B19CD9" ? "CCCCCC" : "#B19CD9";
        },
    },
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

.faq-button,
.change-color-button {
    margin-bottom: 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 3px;
    /* padding: 0.5rem 1rem; */
    padding: 6px 12px;
    /* Add padding to control the size of the buttons */
    cursor: pointer;
    font-size: 14px;
    margin-right: 0.5rem;
    /* Add some spacing between buttons */
    /* text-transform: uppercase; */
    border: 1px solid #ffffff;
    /* Add a border */
    border-radius: 4px;
    /* Add rounded corners */
    transition: background-color 0.3s ease;
    /* Add a smooth transition when the background color changes */
}

.faq-button:hover,
.change-color-button:hover {
    background-color: rgba(255, 255, 255, 0.1);
    /* Add a subtle background color change on hover */
}
</style>


