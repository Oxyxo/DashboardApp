<template>
    <footer>
        <div class="footer-container">
            <div class="footer-section">
                <h4>Service & contact</h4>
                <ul>
                    <li><a href="#">Help & contact</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>About us</h4>
                <ul>
                    <li><a href="#">Company information</a></li>
                    <li><a href="#">Careers</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>© 2023 - CloudProud BV</p>
            <router-link v-if="!isHomePage" class="footer-link" to="/">Go to Home Page</router-link>
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

<style scoped>
footer {
    background-color: #f8f9fa;
    padding: 1rem;
    text-align: center;
    width: 100%;

    .footer-container {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        padding: 0 1rem;
    }

    .footer-section {
        flex: 1;
        padding: 1rem;
    }

    .footer-section h4 {
        margin-bottom: 0.5rem;
    }

    .footer-section ul {
        list-style-type: none;
        padding: 0;
    }

    .footer-section ul li a {
        text-decoration: none;
        color: #000;
    }

    .footer-bottom {
        text-align: center;
        padding: 1rem;
        border-top: 1px solid #ccc;
    }

    .footer-link {
        text-decoration: none;
        color: #007bff;
    }
}
</style>