<template>
    <div class="container mt-5">
        <h1 class="text-center mb-4">Dashboard</h1>
        <div class="row">
            <div class="col-md-4" v-for="(card, index) in cards" :key="index">
                <DashboardCard :title="card.title" :content="card.content" />
            </div>
        </div>
    </div>
</template>

<script>
import DashboardCard from "@/components/DashboardCard.vue";

export default {
    name: "DashboardHome",
    components: {
        DashboardCard,
    },
    data() {
        return {
            cards: [
                {
                    title: "Card 1",
                    content: "This is the content of card 1.",
                },
                {
                    title: "Card 2",
                    content: "This is the content of card 2.",
                },
                {
                    title: "Card 3",
                    content: "This is the content of card 3.",
                },
                {
                    title: "Card 4",
                    content: "This is the content of card 4.",
                },
            ],
        };
    },
};
</script>

<style scoped>
.container {
    max-width: 960px;
}
</style>