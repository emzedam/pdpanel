<template>
  <div class="lg:mr-72">
    <form class="space-y-6 m-4" action="#" method="POST">
      <div class="bg-white px-8 py-10 border rounded-lg">
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              تنظیمات عمومی
            </h3>
            <p class="mt-1 text-sm text-gray-500">
              اطلاعات مربوط به سئو سایت را در این بخش وارد نمایید
            </p>
          </div>
          <div class="mt-5 space-y-6 md:col-span-2 md:mt-0">
            <div class="grid grid-cols-3 gap-6">
              <div class="col-span-6">
                <label
                  for="payment-name"
                  class="block text-sm font-medium text-gray-700"
                  >عنوان متا تگ
                </label>
                <input
                  type="text"
                  name="payment-name"
                  id="payment-name"
                  autocomplete="payment-name"
                  placeholder="برای مثال:وبسایت رسمی پتو من "
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-hamian focus:ring-hamian sm:text-sm"
                />
              </div>
              <div class="col-span-6">
                <label
                  for="company-website"
                  class="block text-sm font-medium text-gray-700"
                  >آدرس سایت</label
                >
                <div class="mt-2 flex rounded-md shadow-sm">
                  <input
                    type="text"
                    name="company-website"
                    id="company-website"
                    class="block ltr w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:outline-none focus:border-gray-200 focus:ring-0 focus:ring-hamian sm:text-sm"
                    placeholder="www.example.com"
                  />
                  <span
                    class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500 ltr font-en"
                    >http://</span
                  >
                </div>
              </div>
            </div>

            <div>
              <label for="about" class="block text-sm font-medium text-gray-700"
                >معرفی کوتاه سایت</label
              >
              <div class="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows="3"
                  class="block w-full rounded-md border-gray-300 shadow-sm focus:border-hamian focus:ring-hamian sm:text-sm"
                  placeholder="توضیحات اصلی سایت در متا تگ‌ها، برای موتورهای جستجو "
                />
              </div>
              <p class="mt-2 text-sm text-gray-500">
                توضیحات اصلی سایت در متا تگ‌ها، برای موتورهای جستجو. حداکثر ۲۰۰
                کاراکتر وارد کنید.
              </p>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700"
                >نمادک سایت</label
              >
              <div class="relative mt-4 lg:w-full justify-start flex">
                <div
                  class="flex items-center justify-center w-full max-w-[150px] px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
                >
                  <div class="space-y-1 text-center">
                    <div
                      class="w-12 h-12 mx-auto text-4xl text-gray-400 fa-duotone fa-image"
                    ></div>
                    <div class="flex text-sm text-gray-600">
                      <label
                        for="page-file-upload"
                        class="relative mx-auto font-medium text-hamian bg-white rounded-md cursor-pointer focus-widuotone:outline-none focus-widuotone:ring-2 focus-widuotone:ring-hamian focus-widuotone:ring-offset-2 hover:text-hamian"
                        ><span>تصویر آیکون</span
                        ><input
                          id="page-file-upload"
                          type="file"
                          class="sr-only"
                      /></label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white px-8 py-10 border rounded-lg">
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              اطلاعات بانکی
            </h3>
            <p class="mt-1 text-sm text-gray-500">
              اطلاعات مربوط به درگاه پرداخت را در این قسمت وارد نمایید
            </p>
          </div>
          <div class="mt-5 md:col-span-2 md:mt-0">
            <div class="grid lg:grid-cols-4 grid-cols-2 gap-4">
              <div
                class="text-yellow-500 font-semibold border p-4 rounded-lg text-center text-2xl bg-yellow-50 border-yellow-300 flex items-center justify-center w-full h-20"
              >
                <img class="w-[170px]" src="/banks/zarinpal.svg" />
                <!-- <span>زرین پال</span> -->
              </div>

              <div
                class="text-[#ba0b22] font-bold border p-4 rounded-lg text-center text-2xl bg-red-50 border-[#ba0b22] flex items-center justify-center w-full h-20 relative overflow-hidden"
              >
                <img class="w-[50px]" src="/banks/mellat-02.svg" />
                <span>بانک ملت</span>
              </div>

              <div
                class="text-[#d5a118] font-bold border p-4 rounded-lg text-center text-2xl bg-[#d5a118]/10 border-[#d5a118] flex items-center justify-center w-full h-20 relative overflow-hidden"
              >
                <img class="w-[50px]" src="/banks/melli-22.svg" />
                <span>بانک ملی</span>
              </div>
            </div>
            <div class="grid grid-cols-6 gap-6 mt-8">
              <div class="col-span-6">
                <div class="flex items-center">
                  <button
                    type="button"
                    class="bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-hamian focus:ring-offset-2"
                    role="switch"
                    aria-checked="true"
                    aria-labelledby="annual-billing-label"
                  >
                    <span
                      aria-hidden="true"
                      class="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                    ></span>
                  </button>
                  <span class="mr-3" id="annual-billing-label">
                    <span class="text-sm font-medium text-gray-900"
                      >فعالسازی درگاه</span
                    >
                  </span>
                </div>
              </div>
              <div class="col-span-6">
                <label
                  for="payment-name"
                  class="block text-sm font-medium text-gray-700"
                  >نام درگاه</label
                >
                <input
                  type="text"
                  name="payment-name"
                  id="payment-name"
                  autocomplete="payment-name"
                  placeholder="برای مثال:بانک ملی"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-hamian focus:ring-hamian sm:text-sm"
                />
              </div>

              <div class="col-span-6">
                <label
                  for="payment-description"
                  class="block text-sm font-medium text-gray-700"
                  >توضیحات درگاه</label
                >
                <input
                  type="text"
                  name="payment-description"
                  id="payment-description"
                  autocomplete="payment-description"
                  placeholder="برای مثال:پرداخت امن به وسیله کلیه کارت های عضو شتاب "
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-hamian focus:ring-hamian sm:text-sm"
                />
              </div>

              <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                <label
                  for="marchant"
                  class="block text-sm font-medium text-gray-700"
                  >مرچنت کد</label
                >
                <input
                  type="text"
                  name="marchant"
                  id="marchant"
                  autocomplete="address-level2"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-hamian focus:ring-hamian sm:text-sm"
                  placeholder="مرچنت کد زرین پال"
                />
              </div>

              <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                <label
                  for="username"
                  class="block text-sm font-medium text-gray-700"
                  >نام کاربری</label
                >
                <input
                  type="text"
                  name="username"
                  id="username"
                  autocomplete="address-level2"
                  placeholder="نام کاربری به پرداخت"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-hamian focus:ring-hamian sm:text-sm"
                />
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  for="password"
                  class="block text-sm font-medium text-gray-700"
                  >رمز عبور</label
                >
                <input
                  type="text"
                  name="region"
                  id="password"
                  placeholder="رمز عبور"
                  autocomplete="address-level1"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-hamian focus:ring-hamian sm:text-sm"
                />
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  for="postal-code"
                  class="block text-sm font-medium text-gray-700"
                  >کد ترمینال</label
                >
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autocomplete="postal-code"
                  placeholder="کد ترمینال (Terminal ID)"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-hamian focus:ring-hamian sm:text-sm"
                />
              </div>

              <div class="col-span-6">
                <label
                  for="success"
                  class="block text-sm font-medium text-gray-700"
                  >پیام پرداخت موفق</label
                >
                <div class="mt-2">
                  <textarea
                    id="success"
                    name="success"
                    rows="3"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-hamian focus:ring-hamian sm:text-sm"
                    value="سفارش شما با موفقیت پرداخت شد . لطفا چند ثانیه صبر کنید تا به سایت حامیان پت  برگردید ."
                  />
                </div>
                <p class="mt-2 text-sm text-gray-500">
                  متن پیامی که میخواهید بعد از پرداخت موفق به کاربر نمایش دهید
                  را وارد نمایید .
                </p>
              </div>

              <div class="col-span-6">
                <label
                  for="error"
                  class="block text-sm font-medium text-gray-700"
                >
                  پیام پرداخت ناموفق
                </label>
                <div class="mt-2">
                  <textarea
                    id="error"
                    name="error"
                    rows="3"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-hamian focus:ring-hamian sm:text-sm"
                    value="پرداخت شما ناموفق بوده است . لطفا مجددا تلاش نمایید یا در صورت بروز اشکال باپشتیبانی سایت تماس ارتباط برقرار کنید . "
                  />
                </div>
                <p class="mt-2 text-sm text-gray-500">
                  متن پیامی که میخواهید بعد از پرداخت ناموفق به کاربر نمایش دهید
                  را وارد نمایید .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white px-8 py-10 border rounded-lg">
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              سئو و بهینه سازی
            </h3>
            <p class="mt-1 text-sm text-gray-500">
              بهینه سازی سایت برای موتورهای جستجوگر گوگل هنگام اشتراک گذاری در
              شبکه های اجتماعی
            </p>
          </div>
          <div class="mt-5 md:col-span-2 md:mt-0">
            <div class="grid grid-cols-6 gap-6 mt-2">
              <div class="col-span-6 border p-4 rounded-lg">
                <div class="flex items-center">
                  <button
                    type="button"
                    class="bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-hamian focus:ring-offset-2"
                    role="switch"
                    aria-checked="true"
                    aria-labelledby="annual-billing-label"
                  >
                    <span
                      aria-hidden="true"
                      class="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                    ></span>
                  </button>
                  <span class="mr-3" id="annual-billing-label">
                    <span class="text-sm font-medium text-gray-900">
                      از موتورهای جستجو درخواست کن تا محتوای سایت را بررسی
                      نکنند</span
                    >
                  </span>
                </div>
              </div>

              <div class="relative mt-4 lg:w-full justify-start flex col-span-6">
                <div
                  class="flex items-center justify-center w-full max-w-[150px] px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
                >
                  <div class="space-y-1 text-center">
                    <div
                      class="w-12 h-12 mx-auto text-4xl text-gray-400 fa-duotone fa-image"
                    ></div>
                    <div class="flex text-sm text-gray-600">
                      <label
                        for="page-file-upload"
                        class="relative mx-auto font-medium text-hamian bg-white rounded-md cursor-pointer focus-widuotone:outline-none focus-widuotone:ring-2 focus-widuotone:ring-hamian focus-widuotone:ring-offset-2 hover:text-hamian"
                        ><span>لوگو سایت </span
                        ><input
                          id="page-file-upload"
                          type="file"
                          class="sr-only" /></label
                      >
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-span-6">
                <label
                  for="payment-name"
                  class="block text-sm font-medium text-gray-700"
                  >عنوان متا تگ
                </label>
                <input
                  type="text"
                  name="payment-name"
                  id="payment-name"
                  autocomplete="payment-name"
                  placeholder="برای مثال:وبسایت رسمی پتو من "
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-hamian focus:ring-hamian sm:text-sm"
                />
              </div>

              <div class="col-span-6">
                <label
                  for="success"
                  class="block text-sm font-medium text-gray-700"
                  >توضیحات متاتگ</label
                >
                <div class="mt-4">
                  <textarea
                    id="success"
                    name="success"
                    rows="3"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-hamian focus:ring-hamian sm:text-sm h-32"
                    value=""
                    placeholder="توضیحات متاتگ"
                  />
                </div>
                <p class="mt-2 text-sm text-gray-500">
                  توضیحات اصلی سایت در متا تگ‌ها، برای موتورهای جستجو. حداکثر
                  ۲۰۰ کاراکتر وارد کنید.
                </p>
              </div>

              <div class="col-span-6">
                <label
                  for="about"
                  class="block text-sm font-medium text-gray-700"
                  >کلید واژه</label
                >
                <div class="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    rows="3"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-hamian focus:ring-hamian sm:text-sm"
                    placeholder="کلمات کلیدی را با کاما (,) جدا کنید"
                  />
                </div>
                <p class="mt-2 text-sm text-gray-500">
                  کلید واژه‌های مربوط به متا تگ‌ها، برای موتورهای جستجو
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white px-8 py-10 border rounded-lg">
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              حالت تعمیر
            </h3>
            <p class="mt-1 text-sm text-gray-500">
              بستن سایت از دسترسی دیگران (فقط مدیریت امکان مشاهده سایت را دارد).
            </p>
          </div>
          <div class="mt-5 md:col-span-2 md:mt-0">
            <div class="grid grid-cols-6 gap-6 mt-2">
              <div class="col-span-6 border p-4 rounded-lg">
                <div class="flex items-center">
                  <button
                    type="button"
                    class="bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-hamian focus:ring-offset-2"
                    role="switch"
                    aria-checked="true"
                    aria-labelledby="annual-billing-label"
                  >
                    <span
                      aria-hidden="true"
                      class="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                    ></span>
                  </button>
                  <span class="mr-3" id="annual-billing-label">
                    <span class="text-sm font-medium text-gray-900"
                      >فعالسازی حالت تعمیر</span
                    >
                  </span>
                </div>
              </div>

              <div class="col-span-6">
                <label
                  for="success"
                  class="block text-sm font-medium text-gray-700"
                  >علت غیرفعال كردن سایت:</label
                >
                <div class="mt-4">
                  <textarea
                    id="success"
                    name="success"
                    rows="3"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-hamian focus:ring-hamian sm:text-sm h-32"
                    value="درحال حاضر دسترسی به این وب‌سایت امکان پذیر نمی‌باشد

لطفاً ساعاتی بعد از این وب‌سایت بازدید نمائید."
                  />
                </div>
                <p class="mt-2 text-sm text-gray-500">
                  توضیحی که به هنگام غیرفعال بودن سایت، قابل مشاهده برای کاربران
                  باشد.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-end gap-4 pb-16">
        <button
          type="button"
          class="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-hamian focus:ring-offset-0"
        >
          انصراف
        </button>
        <button
          type="submit"
          class="ml-3 inline-flex justify-center rounded-md border border-transparent bg-hamian py-2 px-4 text-sm font-medium text-white hover:bg-hamian/90 focus:outline-none focus:ring-0 focus:ring-hamian-70 focus:ring-offset-0"
        >
          ذخیره تنظیمات
        </button>
      </div>
    </form>
  </div>
</template>
