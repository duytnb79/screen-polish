<template>
  <section class="space-y-6">
    <h3
      class="text-[11px] uppercase tracking-wider font-semibold text-text-secondary"
    >
      Properties
    </h3>
    <div class="space-y-4">
      <div class="flex justify-between items-center">
        <label class="text-xs text-text-secondary flex items-center gap-2">
          <span class="material-symbols-outlined text-[16px] text-slate-400"
            >padding</span
          >
          Padding
        </label>
        <span
          class="text-[10px] font-mono text-text-main bg-slate-50 border border-slate-100 px-2 py-0.5 rounded text-right w-12"
          >64</span
        >
      </div>
      <input
        class="w-full h-1 rounded-lg appearance-none cursor-pointer"
        max="200"
        min="0"
        type="range"
        value="64"
      />
    </div>
    <div class="space-y-4">
      <div class="flex justify-between items-center">
        <label class="text-xs text-text-secondary flex items-center gap-2">
          <span class="material-symbols-outlined text-[16px] text-slate-400"
            >rounded_corner</span
          >
          Radius
        </label>
        <span
          class="text-[10px] font-mono text-text-main bg-slate-50 border border-slate-100 px-2 py-0.5 rounded text-right w-12"
          >16</span
        >
      </div>
      <input
        class="w-full h-1 rounded-lg appearance-none cursor-pointer"
        max="40"
        min="0"
        type="range"
        value="16"
      />
    </div>
    <div class="space-y-4">
      <div class="flex justify-between items-center">
        <label class="text-xs text-text-secondary flex items-center gap-2">
          <span class="material-symbols-outlined text-[16px] text-slate-400"
            >blur_on</span
          >
          Shadow
        </label>
        <span
          class="text-[10px] font-mono text-text-main bg-slate-50 border border-slate-100 px-2 py-0.5 rounded text-right w-12"
          >40</span
        >
      </div>
      <input
        class="w-full h-1 rounded-lg appearance-none cursor-pointer"
        max="100"
        min="0"
        type="range"
        value="40"
      />
    </div>
  </section>
</template>
