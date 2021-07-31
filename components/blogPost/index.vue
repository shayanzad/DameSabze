<template>
  <div dir="rtl">
    <div v-if="selected !== undefined" class="blog-item">
      <NuxtLink
        :to="
          `/${encodeURIComponent(selected.category.slug)}/${encodeURIComponent(
            selected.slug
          )}`
        "
      >
        <img :src="selected.image_url" alt="Blog" />
      </NuxtLink>
      <div class="blog-bottom">
        <h3>
          <NuxtLink
            style="overflow:hidden"
            :to="
              `/${encodeURIComponent(
                selected.category.slug
              )}/${encodeURIComponent(selected.slug)}`
            "
            >{{ selected.title }}</NuxtLink
          >
        </h3>
        <ul>
          <li>
            <a>توسط:</a>
            <span>{{ selected.writer }}</span>
          </li>
          <li>
            <a>نظرات</a>
            <span>{{ selected.comments_count }}</span>
          </li>
          <li>
            <a>مشاهده</a>
            <span>{{ selected.hit }}</span>
          </li>
        </ul>
        <p>
          {{ selected.short_description }}
        </p>
        <NuxtLink
          :to="
            `/${encodeURIComponent(
              selected.category.slug
            )}/${encodeURIComponent(selected.slug)}`
          "
        >
          بیشتر بخوانید
          <i class="bx bx-left-arrow-alt"></i>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["selected"]
};
</script>
