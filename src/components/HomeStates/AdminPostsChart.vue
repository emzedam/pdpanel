<template>
    <div class="col-span-1  border rounded-lg" >
        <h1 class="text-center py-5 bg-gray-50">نمایش آمار روزانه تعداد انتشار نوشته توسط مدیران (۲۰ روز اخیر)</h1>
        <apexchart class="mt-5" type="bar" :options="chartOptions" :series="chartAdminSeries" />
    </div>
</template>

<script setup>
const props = defineProps({
    chartOptions: {
        required: true,
        type: [Array , Object]
    },
    chartAdminSeries: {
        required: true,
        type: [Array , Object]
    }
})
</script>