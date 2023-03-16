<template>
    <b-card class="CardBackground">
        <slot></slot>
    </b-card>
</template>

<script>
export default {
    name: 'DashboardCard',
};
</script>

<style>
.CardBackground {
    background-color: #CBD9B2;
}
</style>