<template>
  <div
    class="absolute top-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1 p-1.5 bg-surface-light rounded-xl border border-border-light shadow-soft backdrop-blur-sm bg-white/95 ring-1 ring-black/5"
  >
    <button
      class="size-9 flex items-center justify-center rounded-lg hover:bg-slate-100 text-text-secondary hover:text-text-main transition-colors"
      title="Select"
    >
      <span class="material-symbols-outlined text-[20px]">near_me</span>
    </button>
    <button
      class="size-9 flex items-center justify-center rounded-lg hover:bg-slate-100 text-text-secondary hover:text-text-main transition-colors"
      title="Crop"
    >
      <span class="material-symbols-outlined text-[20px]">crop</span>
    </button>
    <div class="w-px h-5 bg-border-light mx-1"></div>
    <button
      class="size-9 flex items-center justify-center rounded-lg hover:bg-slate-100 text-text-secondary hover:text-text-main transition-colors"
      title="Text"
    >
      <span class="material-symbols-outlined text-[20px]">title</span>
    </button>
    <button
      class="size-9 flex items-center justify-center rounded-lg hover:bg-slate-100 text-text-secondary hover:text-text-main transition-colors"
      title="Shapes"
    >
      <span class="material-symbols-outlined text-[20px]">shapes</span>
    </button>
    <button
      class="size-9 flex items-center justify-center rounded-lg hover:bg-slate-100 text-text-secondary hover:text-text-main transition-colors"
      title="Annotate"
    >
      <span class="material-symbols-outlined text-[20px]">edit</span>
    </button>
    <div class="w-px h-5 bg-border-light mx-1"></div>
    <button
      class="size-9 flex items-center justify-center rounded-lg hover:bg-slate-100 text-text-secondary hover:text-text-main transition-colors"
      title="Zoom Out"
    >
      <span class="material-symbols-outlined text-[20px]">remove</span>
    </button>
    <span class="text-[11px] font-mono text-text-secondary w-10 text-center"
      >100%</span
    >
    <button
      class="size-9 flex items-center justify-center rounded-lg hover:bg-slate-100 text-text-secondary hover:text-text-main transition-colors"
      title="Zoom In"
    >
      <span class="material-symbols-outlined text-[20px]">add</span>
    </button>
  </div>
</template>
