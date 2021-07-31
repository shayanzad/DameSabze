<template>
  <div dir="rtl">
    <!-- Counter -->
    <div class="counter-area">
      <div class="counter-wrap">
        <div class="container">
          <div class="row">
            <div class="col-6 col-sm-6 col-lg-3">
              <div class="counter-item">
                <h3>
                  <!-- <span class="odometer" data-count="15">00</span> -->
                  <span ref="counter"> </span>
                </h3>
                <p>سال تجربه</p>
              </div>
            </div>
            <div class="col-6 col-sm-6 col-lg-3">
              <div class="counter-item">
                <h3>
                  <!-- <span class="odometer" data-count="150">00</span> -->
                  <span ref="customerCounter"></span>
                </h3>
                <p>رضایت مشتری</p>
              </div>
            </div>
            <div class="col-6 col-sm-6 col-lg-3">
              <div class="counter-item">
                <h3>
                  <!-- <span class="odometer" data-count="749">00</span> -->
                  <span ref="celsheep"></span>
                </h3>
                <p>تعداد گوسفند فروخته شده</p>
              </div>
            </div>
            <div class="col-6 col-sm-6 col-lg-3">
              <div class="counter-item">
                <h3>
                  <!-- <span class="odometer" data-count="24">00</span> -->
                  <span ref="support"></span>
                </h3>
                <p>ساعت پاسخگویی</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Counter -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      yearsExp: 1
    };
  },
  mounted() {
    let counterElement = this.$refs.counter;
    let counter = 0;
    let setit = setInterval(() => {
      counter++;
      counterElement.textContent = counter;
      if (counter === 15) {
        clearInterval(setit);
      }
    }, 100);

    let customerCounterElement = this.$refs.customerCounter;
    let customerCounterCounter = 0;
    let setIntervalVar = setInterval(() => {
      customerCounterCounter++;
      customerCounterElement.textContent = customerCounterCounter;
      if (customerCounterCounter === 150) {
        clearInterval(setIntervalVar);
      }
    }, 10);

    let celsheepElement = this.$refs.celsheep;
    let celsheepCounter = 0;
    let setIntervalVar2 = setInterval(() => {
      celsheepCounter++;
      celsheepElement.textContent = celsheepCounter;
      if (celsheepCounter === 749) {
        clearInterval(setIntervalVar2);
      }
    }, 5);

    let supportElement = this.$refs.support;
    let supportCounter = 0;
    let setIntervalVar3 = setInterval(() => {
      supportCounter++;
      supportElement.textContent = supportCounter;
      if (supportCounter === 24) {
        clearInterval(setIntervalVar3);
      }
    }, 50);
  },
  methods: {
    counter() {
      while (this.yearsExp < 15) {
        this.yearsExp = this.yearsExp + 1;
      }
    }
  }
};
</script>
