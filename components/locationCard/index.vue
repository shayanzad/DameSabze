<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-sm-6 col-lg-4">
          <div class="location-item">
            <i class="bx bx-phone-call"></i>
            <h3>تلفن</h3>
            <!-- <span>با ما تماس بگیرید:</span> -->
            <a :href="'tel:' + $store.state.AllSetting.data.cell">{{
              $store.state.AllSetting.data.cell
            }}</a>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4">
          <div class="location-item">
            <i class="bx bx-location-plus"></i>
            <h3>موقعیت</h3>
            <!-- <span>موقعیت شرکت ما:</span> -->
            <span>{{ $store.state.AllSetting.data.address }}</span>
          </div>
        </div>
        <div class="col-sm-6 offset-sm-3 offset-lg-0 col-lg-4">
          <div class="location-item">
            <i class="bx bx-mail-send"></i>
            <h3>ایمیل</h3>
            <!-- <span>ایمیل شرکت ما:</span> -->
            <a :href="'mailto:' + $store.state.AllSetting.data.email">{{
              $store.state.AllSetting.data.email
            }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
