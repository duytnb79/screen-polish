<template>
  <section class="space-y-4">
    <h3
      class="text-[11px] uppercase tracking-wider font-semibold text-text-secondary"
    >
      Quick Actions
    </h3>
    <div class="grid grid-cols-4 gap-2">
      <button
        class="h-9 rounded-lg bg-white border border-border-light hover:border-primary hover:text-primary text-text-secondary shadow-sm transition-all flex items-center justify-center group"
        title="Crop Image"
      >
        <span
          class="material-symbols-outlined text-[20px] group-active:scale-90 transition-transform"
          >crop</span
        >
      </button>
      <button
        class="h-9 rounded-lg bg-white border border-border-light hover:border-primary hover:text-primary text-text-secondary shadow-sm transition-all flex items-center justify-center group"
        title="Edit Layout"
      >
        <span
          class="material-symbols-outlined text-[20px] group-active:scale-90 transition-transform"
          >view_quilt</span
        >
      </button>
      <button
        class="h-9 rounded-lg bg-white border border-border-light hover:border-primary hover:text-primary text-text-secondary shadow-sm transition-all flex items-center justify-center group"
        title="Flip Horizontal"
      >
        <span
          class="material-symbols-outlined text-[20px] group-active:scale-90 transition-transform"
          >swap_horiz</span
        >
      </button>
      <button
        class="h-9 rounded-lg bg-white border border-border-light hover:border-primary hover:text-primary text-text-secondary shadow-sm transition-all flex items-center justify-center group"
        title="Flip Vertical"
      >
        <span
          class="material-symbols-outlined text-[20px] group-active:scale-90 transition-transform"
          >swap_vert</span
        >
      </button>
    </div>
  </section>
</template>
