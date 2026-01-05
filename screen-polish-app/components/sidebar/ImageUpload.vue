<template>
  <section>
    <div
      class="w-full border border-border-light rounded-xl p-3 flex items-center gap-3 bg-white shadow-soft group hover:border-primary/40 transition-colors cursor-pointer ring-1 ring-transparent hover:ring-primary/10"
    >
      <div
        class="size-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center flex-none text-slate-400 group-hover:text-primary transition-colors"
      >
        <span class="material-symbols-outlined text-[22px]">image</span>
      </div>
      <div class="flex-1 min-w-0 flex flex-col justify-center">
        <h4 class="text-xs font-medium text-text-main truncate">
          screenshot_v2.png
        </h4>
        <div class="flex items-center gap-2 mt-1">
          <span class="text-[10px] text-text-secondary">2.4 MB</span>
          <span
            class="text-[10px] text-emerald-600 font-medium bg-emerald-50 px-2 py-px rounded-full border border-emerald-100/50"
            >Ready</span
          >
        </div>
      </div>
      <button class="text-text-secondary hover:text-primary transition-colors">
        <span class="material-symbols-outlined text-[18px]">file_upload</span>
      </button>
    </div>
  </section>
</template>
