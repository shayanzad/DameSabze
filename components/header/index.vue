<template>
  <div>
    <div class="navbar-area fixed-top">
      <!-- Menu For Mobile Device -->
      <!-- <div class="mobile-nav">
                <a href="index.html" class="logo">
                    <img src="@/assets/img/logo.png" alt="Logo">
                </a>
            </div> -->

      <!-- Menu For Desktop Device -->
      <div class="main-nav" :dir="innerWidth < 768 ? 'ltr' : 'rtl'">
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light">
            <NuxtLink class="navbar-brand" to="/">
              <img
                style="max-width:135px; max-height:50px "
                :src="
                  `${$store.state.imageBaseUrl}/storage/settings/logo/${logoURL}`
                "
                alt="Logo"
              />
            </NuxtLink>

            <button class="menuButton d-lg-none" @click="sideBarShow()">
              <div>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
              </div>
            </button>

            <div
              class="collapse navbar-collapse mean-menu"
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav">
                <li class="nav-item">
                  <NuxtLink to="/" class="nav-link dropdown-toggle active"
                    >خانه
                  </NuxtLink>
                </li>
                <li class="nav-item">
                  <NuxtLink
                    to="/registerOrder"
                    class="nav-link dropdown-toggle "
                    >سفارش دام
                  </NuxtLink>
                </li>

                <li class="nav-item">
                  <NuxtLink to="/aboutUs" class="nav-link">درباره ما</NuxtLink>
                </li>

                <li class="nav-item">
                  <NuxtLink to="/blog" class="nav-link dropdown-toggle"
                    >وبلاگ
                  </NuxtLink>
                </li>
                <li class="nav-item">
                  <NuxtLink to="/contact" class="nav-link">تماس با ما</NuxtLink>
                </li>
                <li class="nav-item">
                  <NuxtLink to="/faq" class="nav-link">سوالات متداول</NuxtLink>
                </li>
              </ul>
            </div>
            <div class="side-nav">
              <div
                class="cta-call d-flex "
                style="align-items: baseline !important;"
              >
                <a
                  style="padding:0 !important; background:none !important;"
                  class="p-0 bg-none"
                  :href="socialLink.instagram"
                >
                  <i class="bx bxl-instagram"></i>
                </a>
                <a
                  style="padding:0 !important; background:none !important;"
                  class="p-0 bg-none"
                  :href="socialLink.whatsapp"
                >
                  <i class="bx bxl-whatsapp"></i>
                </a>
                <a
                  style="padding:0 !important; background:none !important;width:30px;height:30px"
                  class="p-0 bg-none"
                  :href="'tel:' + socialLink.cell"
                  target="_blank"
                >
                  <i
                    style="font-size:30px;margn-top:4px"
                    class="bx bx-phone"
                  ></i>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
    <div class="mobile_menu d-lg-none showMenuSide">
      <ul class="d-flex flex-column list-unstyled ">
        <li class="nav-item" @click="sideBarShow()">
          <NuxtLink to="/" class="nav-link dropdown-toggle active"
            >خانه
          </NuxtLink>
        </li>
        <li class="nav-item" @click="sideBarShow()">
          <NuxtLink to="/registerOrder" class="nav-link dropdown-toggle "
            >ثبت سفارش
          </NuxtLink>
        </li>

        <li class="nav-item" @click="sideBarShow()">
          <NuxtLink to="/aboutUs" class="nav-link">درباره ما</NuxtLink>
        </li>

        <li class="nav-item" @click="sideBarShow()">
          <NuxtLink to="/blog" class="nav-link dropdown-toggle"
            >وبلاگ
          </NuxtLink>
        </li>
        <li class="nav-item" @click="sideBarShow()">
          <NuxtLink to="/contact" class="nav-link">تماس با ما</NuxtLink>
        </li>
        <li class="nav-item" @click="sideBarShow()">
          <NuxtLink to="/faq" class="nav-link">سوالات متداول</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import GeneralAPI from "@/API/asyncAPI/generalAPI.js";

export default {
  data() {
    return {
      sideBar: true,
      innerWidth: window.innerWidth,
      socialLink: {
        instagram: "",
        whatsapp: "",
        facebook: "",
        linkedin: "",
        cell: "",
        telegram: ""
      },
      logoURL: ""
    };
  },

  created() {
    this.getAllSocialMediaLink();
  },
  methods: {
    getAllSocialMediaLink() {
      GeneralAPI.getGeneralInformation().then(res => {
        this.socialLink.instagram = res.data.data.instagram;
        this.socialLink.whatsapp = res.data.data.whatsapp;
        this.socialLink.facebook = res.data.data.facebook;
        this.socialLink.linkedin = res.data.data.linkin;
        this.socialLink.telegram = res.data.data.telegram;
        this.socialLink.cell = res.data.data.cell;
        this.logoURL = res.data.data.logo_image;
      });
    },
    sideBarShow() {
      if (this.sideBar == false) {
        document.querySelector(".mobile_menu").style.right = "-75vw";
      } else {
        document.querySelector(".mobile_menu").style.right = "0";
      }
      this.sideBar = !this.sideBar;
    }
  }
};
</script>
<style scoped>
.mobile_menu {
  position: fixed;
  top: 70px;
  height: 100vh;
  width: 70vw;
  background-color: #172f47;
  z-index: 100;
  transition: all 0.3s ease-in;
}
.mobile_menu ul {
  padding: 30px 0 0 0;
}
.showMenuSide {
  right: -75vw;
}
.menuButton {
  border: none;
  /* box-shadow: 0px 0px 3px #8a9097; */
  background: bottom;
  width: 45px;
  height: 50px;
}

.menuButton .line {
  color: white;
  width: 100%;
  margin: 8px;
  height: 2px;
  background-color: white;
}
.nav-link {
  color: azure !important;
}
.nav-item :hover {
  color: rgb(200, 198, 198) !important;
}
.side-nav .cta-call {
  display: flex;
}
.side-nav i {
  margin: 5px;
}
</style>
