<template>
    <div>
        <bar-chart :chart-data="datacollection" :options="options"></bar-chart>
    </div>
</template>

<script>
import { Bar } from 'vue3-chart-v2';

export default {
    components: {
        BarChart: Bar,
    },
    data() {
        return {
            datacollection: {
                labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4'],
                datasets: [
                    {
                        label: 'Data',
                        backgroundColor: '#f87979',
                        data: [10, 20, 30, 40],
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
            },
        };
    },
    mounted() {
        this.$data._chart.update();
    },
};
</script>