<template>
    <div class="col-span-1  border  rounded-lg" >
        <h1 class="text-center py-5 bg-gray-50">محبوب ترین دسته بندی ها بر اساس بازدید</h1>
        <apexchart class="p-20" type="donut" :options="categoriesChartOptions" :series="categoriesChartSeries" />      
    </div>
</template>

<script setup>
const props = defineProps({
    categoriesChartOptions: {
        required: true,
        type: [Array , Object]
    },
    categoriesChartSeries: {
        required: true,
        type: [Array , Object]
    }
})
</script>