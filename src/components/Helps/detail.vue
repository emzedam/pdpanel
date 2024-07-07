<template>
    <div class="grid lg:grid-cols-12 grid-cols-12 gap-4 font-fa mb-6">
  
      <div class="col-span-12 lg:col-span-9">
        <div class=" mt-2 border border-gray-200 rounded-lg card">
        <div class="flex items-center justify-between gap-4 text-2xl p-4 border-b">
            <router-link to="/help">
            <div class="title flex items-center" >
            <span
              class="hover:bg-hamian/10 hover:text-hamian cursor-pointer h-10 w-10 flex items-center justify-center border rounded-lg border-hamian/10 transition-all duration-300">
              <i class="fa-duotone fa-arrow-right !leading-3"></i>
            </span>
            <span class="leading-3 pr-3 font-semibold"> جزئیات پرداخت</span>
          </div>
            </router-link>


        </div>
  <div class="content p-4 w-full">
    <table class="border-collapse border border-slate-200 w-full p-3">
  
    <tbody>
      <tr>
        <td class="border border-slate-200 p-3 font-semibold">مبلغ کمک شده</td>
        <td class="border border-slate-200 p-3  "><span class="ltr">{{ donation.payment_price }}</span> تومان</td>
      </tr>
      <tr>
        <td class="border border-slate-200 p-3 font-semibold">زمینه فعالیت</td>
        <td class="border border-slate-200 p-3  ">{{ donation.field_of_activity }}</td>
      </tr>
      <tr>
        <td class="border border-slate-200 p-3 font-semibold">زمینه مورد نظر هزینه کرد</td>
        <td class="border border-slate-200 p-3  ">{{ donation.desired_field_cost }}</td>
      </tr>
      <tr>
        <td class="border border-slate-200 p-3 font-semibold">شناسه پرداخت</td>
        <td class="border border-slate-200 p-3  ">{{ donation.transaction_id }}</td>
      </tr>
      <tr>
        <td class="border border-slate-200 p-3 font-semibold">وضعیت پرداخت</td>
        <td v-if="donation.payment_status == 1" class="border border-slate-200 p-3 text-green-500">پرداخت شده</td>
        <td v-if="donation.payment_status == 0" class="border border-slate-200 p-3 text-red-500">پرداخت نشده</td>
      </tr>
      <tr>
        <td class="border border-slate-200 p-3 font-semibold">تاریخ پرداخت</td>
        <td class="border border-slate-200 p-3">{{ donation.created_at }}</td>
      </tr>
      <tr>
        <td class="border border-slate-200 p-3 font-semibold">درگاه پرداخت</td>
        <td class="border border-slate-200 p-3">{{ donation.gateway.name }}</td>
      </tr>
      <tr>
        <td class="border border-slate-200 p-3 font-semibold">کد پیگیری</td>
        <td class="border border-slate-200 p-3">{{ donation.ref_id }}</td>
      </tr>
      <tr>
        <td class="border border-slate-200 p-3 font-semibold">بابت</td>
        <td class="border border-slate-200 p-3">{{ donation.payment_for }}</td>
      </tr>

    </tbody>
  </table>
  </div>
  
  
  
  
        </div>
  
  
  
  

  
  
  
      </div>
  
      <aside class="top-0 z-30 col-span-12 lg:col-span-3">
        <div class="mt-2 border border-gray-200 rounded-lg card">
          <div class="block p-4 text-sm">

  

  
                  <button href="#_"
              class="box-border relative z-0 inline-flex iteme-center justify-center w-full p-3 px-8 py-3 my-2 overflow-hidden font-medium text-white transition-all duration-300 bg-hamian rounded-md cursor-pointer group ease focus:outline-none">
              <span
                class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span><span
                class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span><span
                class="relative z-20 flex iteme-center justify-center w-full text-center"><i
                  class="pl-2 text-2xl text-white fa-duotone fa-download"></i><span class="w-full">دانلود
                  رسید</span></span></button>
  
  

  
            <div class="grid lg:grid-cols-2 lg:gap-2">
  
              <button href="#_"
                class="box-border relative z-0 inline-flex iteme-center justify-center w-full p-3 px-8 py-3 my-2 overflow-hidden font-medium text-gray-500 transition-all duration-300 bg-gray-100 rounded-md cursor-pointer group ease focus:outline-none">
                <span
                  class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span><span
                  class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span><span
                  class="relative z-20 flex iteme-center justify-center w-full text-center"><i
                    class="pl-2 text-2xl text-gray-500 fa-duotone fa-print"></i><span class="w-full">پرینت
                  </span></span></button>
  
              <button href="#_"
                class="box-border relative z-0 inline-flex iteme-center justify-center w-full p-3 px-8 py-3 my-2 overflow-hidden font-medium text-red-500 transition-all duration-300 bg-red-50 rounded-md cursor-pointer group ease focus:outline-none">
                <span
                  class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span><span
                  class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span><span
                  class="relative z-20 flex iteme-center justify-center w-full text-center"><i
                    class="pl-2 text-2xl text-red-500 fa-duotone fa-trash-can"></i><span class="w-full">حذف
                  </span></span></button>
  
            </div>
  
  
  
          </div>
        </div>
  
      </aside>
    </div>
  
  </template>
  
  <script setup>
  import {ref , onMounted} from 'vue'
  
  const props = defineProps({
    donation: {
      required: true,
      type: Object
    }
  })
    
  </script>