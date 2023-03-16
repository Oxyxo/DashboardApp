<template>
    <footer>
        <div class="footer-container">
            <p>&copy; 2023 - CloudProud BV</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: "FooterComponent",
    computed: {
        isHomePage() {
            return this.$route.path === "/";
        },
    },
};
</script>

<style>
footer {
    background-color: #007bff;
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.footer-container {
    text-align: center;
    color: white;
}
</style>