<template>
  <div
    class="absolute left-4 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-1 p-1 bg-surface-light rounded-lg border border-border-light shadow-sm bg-white ring-1 ring-black/5"
  >
    <button
      class="size-9 flex items-center justify-center rounded hover:bg-indigo-50 text-text-main bg-slate-100 transition-colors"
      title="Select"
    >
      <span class="material-symbols-outlined text-[20px]">near_me</span>
    </button>
    <div class="w-6 h-px bg-border-light my-0.5"></div>
    <button
      class="size-9 flex items-center justify-center rounded hover:bg-slate-100 text-text-secondary hover:text-text-main transition-colors"
      title="Crop"
    >
      <span class="material-symbols-outlined text-[20px]">crop</span>
    </button>
    <button
      class="size-9 flex items-center justify-center rounded hover:bg-slate-100 text-text-secondary hover:text-text-main transition-colors"
      title="Text"
    >
      <span class="material-symbols-outlined text-[20px]">title</span>
    </button>
    <button
      class="size-9 flex items-center justify-center rounded hover:bg-slate-100 text-text-secondary hover:text-text-main transition-colors"
      title="Shapes"
    >
      <span class="material-symbols-outlined text-[20px]">shapes</span>
    </button>
    <button
      class="size-9 flex items-center justify-center rounded hover:bg-slate-100 text-text-secondary hover:text-text-main transition-colors"
      title="Annotate"
    >
      <span class="material-symbols-outlined text-[20px]">edit</span>
    </button>
  </div>
</template>
