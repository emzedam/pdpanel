<template>
  <div class="lg:pt-24 px-4">
    <div
      v-if="userInfo != null"
      class="grid gap-4 mt-4 mb-4 font-medium lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 xs:grid-cols-12 font-fa"
    >
      <UserInfo
        @refresh_user="refresh_user()"
        @openEditModal="showModal = true"
        :userInfo="userInfo"
      />
      <div class="col-span-12 lg:col-span-8 font-fa">
        <TabList
          @set_active_tab="
            ($event) => {
              selectTab($event);
            }
          "
          :activateTab="activateTab"
        />
  
        <div class="Tab-1" v-if="activateTab == 1">
          <Tab1 :userInfo="userInfo" />
        </div>
  
        <div class="Tab-2" v-if="activateTab == 2">
          <Tab2 />
        </div>
      </div>
    </div>
  </div>
</template>

<script>


// |||||==========TAB CONTENT===========|||||
import TabList from "@/components/Users/TabList/TabList.vue";
import Tab1 from "@/components/Users/ContentTabs/Tab1.vue";
import Tab2 from "@/components/Users/ContentTabs/Tab2.vue";
// |||||==========TAB CONTENT===========|||||

// =======User Info=========
import UserInfo from "@/components/Users/UserInfo/UserInfo.vue";

export default {
  components: {
    Tab1,
    Tab2,
    TabList,
    UserInfo,
  },

  data() {
    return {
      max: 19,
      showModal: false,
      WalletTransferModal: false,
      VerifyTransfer: false,
      TransferStatus: false,
      VerifyWithdraw: false,
      WithdrawOpenModal: false,
      WithdrawStatus: false,
      WithdrawModal: false,
      AddCardModal: false,
      EditCardModal: false,
      AddMoneyModal: false,
      AddNewAddress: false,
      EditBillingAddress: false,
      activateTab: 1,
      mobileSubmenuIndex: null,
      ShowDetailes: false,
      isOpenA: false,
      activeBtn: "",
      Addorder: false,
      Export: false,
      Status: false,
      Count: false,
      Expanded: null,
      MobileCountrySelect: false,
      RecentDevice: false,
      Discount: false,
      userInfo: null,
    };
  },
  async mounted() {
    await this.get_user();
  },
  methods: {
    async refresh_user() {
      await this.get_user();
    },
    async get_user() {
      const id = this.$route.params.id;
      const result = await this.$store.dispatch("get_user", { id: id });
      if (result.status == 200) {
        this.userInfo = result.result;
      }
    },
    selectTab(number) {
      this.activateTab = number;
    },
  },
};
</script>
