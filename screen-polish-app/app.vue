<template>
  <div
    class="bg-background-light dark:bg-background-dark text-text-main font-display h-screen flex flex-col overflow-hidden text-sm antialiased"
  >
    <AppHeader />
    <div class="flex flex-1 overflow-hidden">
      <CanvasArea />
      <AppSidebar />
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    class: "light",
  },
});
</script>
