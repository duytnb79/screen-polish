<template>
  <section class="space-y-4">
    <div class="flex items-center justify-between">
      <h3
        class="text-[11px] uppercase tracking-wider font-semibold text-text-secondary"
      >
        Window Style
      </h3>
      <div class="flex items-center gap-2">
        <label
          class="text-[10px] text-text-secondary font-medium cursor-pointer"
          for="dark-mode"
          >Dark</label
        >
        <button
          class="relative inline-flex h-4 w-7 items-center rounded-full bg-slate-200 hover:bg-slate-300 transition-colors"
          id="dark-mode"
        >
          <span
            class="inline-block h-2.5 w-2.5 transform rounded-full bg-white transition translate-x-0.5 shadow-sm"
          ></span>
        </button>
      </div>
    </div>
    <div
      class="grid grid-cols-4 gap-1.5 bg-slate-50 p-1.5 rounded-lg border border-slate-100"
    >
      <button
        class="py-1.5 rounded-md bg-white shadow-sm text-[11px] font-medium text-primary ring-1 ring-border-light"
      >
        MacOS
      </button>
      <button
        class="py-1.5 rounded-md text-[11px] font-medium text-text-secondary hover:text-text-main hover:bg-white/60 transition-all"
      >
        Win
      </button>
      <button
        class="py-1.5 rounded-md text-[11px] font-medium text-text-secondary hover:text-text-main hover:bg-white/60 transition-all"
      >
        Glass
      </button>
      <button
        class="py-1.5 rounded-md text-[11px] font-medium text-text-secondary hover:text-text-main hover:bg-white/60 transition-all"
      >
        None
      </button>
    </div>
  </section>
</template>
