<template>
    <div>
        <h1>Settings Kippa!</h1>
        <button @click="goToHomePage">Go to Home Page</button>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Jeroen Smith</td>
                    <td>john.doe@example.com</td>
                </tr>
                <tr>
                    <td>Oxana Smith</td>
                    <td>jane.smith@example.com</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "SettingsPage",
    methods: {
        goToHomePage() {
            this.$router.push("/");
        },
    },
};
</script>

<style>
h1 {
    text-align: center;
    margin-bottom: 1rem;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
}

th,
td {
    border: 1px solid #ddd;
    padding: 0.5rem;
    text-align: left;
}

th {
    background-color: #f2f2f2;
}
</style>
