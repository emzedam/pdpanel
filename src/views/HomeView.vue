

<template>
  <div class="pt-24 block px-3">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-2">
      <AdminPostsChart v-if="chartOptions.xaxis.categories.length != 0" :chartOptions="chartOptions" :chartAdminSeries="chartAdminSeries" />
      <CategoriesChart v-if="categoriesChartOptions.labels.length != 0" :categoriesChartOptions="categoriesChartOptions" :categoriesChartSeries="categoriesChartSeries" />
      <UserPostChart   v-if="chartOptions.xaxis.categories.length != 0" :chartOptions="chartOptions" :chartUserSeries="chartUserSeries" />
    </div>
    <UsersList />
  </div>
  
</template>
<script setup>

import {onMounted , ref} from 'vue'
import {useStore} from 'vuex'
import AdminPostsChart from '@/components/HomeStates/AdminPostsChart.vue'
import UserPostChart from '@/components/HomeStates/UserPostChart.vue'
import CategoriesChart from '@/components/HomeStates/CategoriesChart.vue'
import UsersList from '@/components/HomeStates/UsersList.vue'

// console.log(window)

const store = useStore()



const chartOptions = ref({
  chart: {
    type: 'bar',
    height: '200px'
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      borderRadiusApplication: 'end',
      horizontal: false,
    }
  },
  xaxis: {
    categories: [],
    title: {
      text: 'Date'
    },
    labels: {
      rotate: 0, // چرخش تاریخ‌ها
      style: {
        fontSize: '12px', // اندازه فونت
        colors: '#333', // رنگ فونت
        fontFamily: 'yekan-bakh-new', // خانواده فونت
      }
    }
  },
  yaxis: {
    title: {
      text: 'تعداد نوشته'
    }
  },
  colors: ['#f97316'],
  grid: {
    borderColor: '#999',
    strokeDashArray: 5
  },
  tooltip: {
    theme: 'dark'
  },
  title: {
    text: '',
    align: 'left'
  }
});

const categoriesChartOptions = ref({
  chart: {
    type: 'donut',
    height: 400
  },
  labels:  [],
  title: {
    text: 'محبوب‌ترین دسته‌بندی‌ها',
    align: 'center',
    style: {
        fontSize: '14px', // اندازه فونت برچسب‌های legend
        fontFamily: 'yekan-bakh-new' // خانواده فونت برچسب‌های legend
      }
  },
  colors: ['#f97316', '#f97316', '#f97316', '#f97316', '#f97316'], // رنگ‌های مختلف برای هر برش
  tooltip: {
    theme: 'dark',
    style: {
        fontSize: '14px', // اندازه فونت برچسب‌های legend
        fontFamily: 'yekan-bakh-new' // خانواده فونت برچسب‌های legend
      }
  },
  legend: {
    position: 'bottom',
    labels: {
      style: {
        fontSize: '14px', // اندازه فونت برچسب‌های legend
        fontFamily: 'yekan-bakh-new' // خانواده فونت برچسب‌های legend
      }
    }
  },
  dataLabels: {
    style: {
      fontSize: '14px',
      fontFamily: 'yekan-bakh-new',
      fontWeight: 'normal',
      colors: ['#fff']
    }
  },
  responsive: [{
    breakpoint: 600, // عرض نمایشگر در px
    options: {
      chart: {
        width: '100%' // عرض نمودار به صورت درصدی برای گوشی‌های همراه
      },
      legend: {
        show: false// موقعیت legend برای نمایشگرهای کوچک
      },
      plotOptions: {
        pie: {
          size: '100%' // اندازه دایره برای نمایشگرهای کوچک
        }
      },
      dataLabels: {
        style: {
          fontSize: '10px',
          fontWeight: 'normal',
        }
      },
    }
  },{
    breakpoint: 2059,
    options: {
      legend: {
        show: false// موقعیت legend برای نمایشگرهای کوچک
      },
    }
  }]
});

const chartAdminSeries = ref([]);
const chartUserSeries = ref([]);
const categoriesChartSeries = ref([])

onMounted(async () => {
  await getPostStates() 
  await getCategoriesStates() 
})





const getPostStates = async () => {
  const result = await store.dispatch("get_posts_states")
  console.log(result)

  const dates = result.dates;
  const userCounts = result.userCounts;
  const adminCounts = result.adminCounts;

  chartOptions.value.xaxis.categories = dates;
  chartAdminSeries.value = [
    {
      name: 'Admin Posts',
      data: adminCounts
    }
  ];
  chartUserSeries.value = [
    {
      name: 'User Posts',
      data: userCounts
    }
  ];
}

const getCategoriesStates = async () => {
  const result = await store.dispatch("get_categories_states")

  // console.log(result.visitCounts)
  categoriesChartOptions.value.labels = ['آبزیان', 'گربه ها', 'پرنده ها', 'حیوانات خانگی', 'خزنده ها', 'سگ ها'];
  categoriesChartSeries.value = [13, 6, 6, 5, 4, 3]

  console.log(categoriesChartOptions.value.labels)
  console.log(categoriesChartSeries.value)
}



</script>

<style>
.chart-container {
  width: 80%; /* تنظیم عرض نمودار */
  margin: auto;
}

.apexcharts-legend-text{
  font-family: 'yekan-bakh-new'!important;
  padding-right: 4px !important;
}
</style>
