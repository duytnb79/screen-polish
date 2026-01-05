<template>
  <section class="space-y-4">
    <div
      class="flex items-center justify-between border-b border-border-light pb-2"
    >
      <h3
        class="text-[11px] uppercase tracking-wider font-semibold text-text-secondary"
      >
        Background
      </h3>
      <div class="flex gap-3">
        <button class="text-[10px] font-semibold text-primary">Gradient</button>
        <button
          class="text-[10px] font-medium text-text-secondary hover:text-text-main"
        >
          Solid
        </button>
        <button
          class="text-[10px] font-medium text-text-secondary hover:text-text-main"
        >
          Image
        </button>
      </div>
    </div>
    <div class="grid grid-cols-6 gap-3">
      <button
        class="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-300 to-purple-400 ring-2 ring-offset-2 ring-primary cursor-pointer shadow-sm"
      ></button>
      <button
        class="w-8 h-8 rounded-full bg-gradient-to-br from-blue-300 to-cyan-400 hover:scale-110 transition-transform cursor-pointer shadow-sm"
      ></button>
      <button
        class="w-8 h-8 rounded-full bg-gradient-to-br from-orange-200 to-rose-300 hover:scale-110 transition-transform cursor-pointer shadow-sm"
      ></button>
      <button
        class="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-300 to-teal-500 hover:scale-110 transition-transform cursor-pointer shadow-sm"
      ></button>
      <button
        class="w-8 h-8 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 hover:scale-110 transition-transform cursor-pointer shadow-sm"
      ></button>
      <button
        class="w-8 h-8 rounded-full bg-white border border-dashed border-gray-300 flex items-center justify-center hover:border-primary hover:text-primary text-text-secondary transition-all"
      >
        <span class="material-symbols-outlined text-[18px]">add</span>
      </button>
    </div>
  </section>
</template>
