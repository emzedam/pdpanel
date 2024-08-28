<template>
    <div class="col-span-1 border md:col-span-2 lg:col-span-1  rounded-lg" v-if="chartOptions.xaxis.categories.length != 0">
        <h1 class="text-center py-5 bg-gray-50">نمایش آمار روزانه تعداد انتشار نوشته توسط کاربران (۲۰ روز اخیر)</h1>
        <apexchart class="mt-5" type="bar" :options="chartOptions" :series="chartUserSeries" />
    </div>
</template>


<script setup>
const props = defineProps({
    chartOptions: {
        required: true,
        type: [Array , Object]
    },
    chartUserSeries: {
        required: true,
        type: [Array , Object]
    }
})
</script>