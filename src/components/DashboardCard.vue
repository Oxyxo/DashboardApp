<template>
    <div class="card">
        <div class="card-header">{{ title }}</div>
        <div class="card-body">
            <p class="card-text">{{ content }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "DashboardCard",
    props: {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped>
.card {
    margin-bottom: 1.5rem;
    background-color: #C4D99C;
}
</style>