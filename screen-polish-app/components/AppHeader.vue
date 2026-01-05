<template>
  <header
    class="h-16 flex-none bg-surface-light dark:bg-surface-dark border-b border-border-light dark:border-border-dark flex items-center justify-between px-6 z-20 shadow-soft"
  >
    <div class="flex items-center gap-3">
      <div
        class="size-8 rounded-lg bg-text-main text-white flex items-center justify-center shadow-md"
      >
        <span class="material-symbols-outlined text-[20px]">auto_awesome</span>
      </div>
      <h1
        class="text-sm font-semibold tracking-tight text-text-main dark:text-white"
      >
        ScreenPolish
      </h1>
    </div>
    <div class="flex items-center gap-2">
      <button
        class="h-9 px-4 rounded-lg text-text-secondary hover:text-text-main hover:bg-slate-50 transition-colors text-xs font-medium"
      >
        Presets
      </button>
      <button
        class="h-9 px-4 rounded-lg text-text-secondary hover:text-text-main hover:bg-slate-50 transition-colors text-xs font-medium"
      >
        History
      </button>
      <div class="w-px h-5 bg-border-light mx-2"></div>
      <button
        class="size-9 rounded-lg flex items-center justify-center text-text-secondary hover:bg-slate-50 hover:text-text-main transition-colors"
      >
        <span class="material-symbols-outlined text-[20px]">help</span>
      </button>
      <button
        class="size-9 rounded-lg flex items-center justify-center text-text-secondary hover:bg-slate-50 hover:text-text-main transition-colors"
      >
        <span class="material-symbols-outlined text-[20px]">hub</span>
      </button>
    </div>
  </header>
</template>
