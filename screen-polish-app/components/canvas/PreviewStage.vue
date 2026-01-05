<template>
  <div
    class="flex-1 overflow-auto flex items-center justify-center p-16 checkerboard-bg relative"
  >
    <div
      class="relative transition-all duration-300 ease-out shadow-medium group"
      style="
        padding: 64px;
        background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
        border-radius: 16px;
      "
    >
      <div
        class="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-[16px] pointer-events-none transition-colors"
      ></div>
      <div
        class="bg-slate-900 rounded-xl overflow-hidden shadow-2xl ring-1 ring-black/20 max-w-[800px] w-full mx-auto transform transition-all"
      >
        <div
          class="h-10 bg-[#1e293b] flex items-center px-4 gap-2 border-b border-white/5 relative"
        >
          <div class="flex gap-2 absolute left-4">
            <div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div class="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          <div class="flex-1 flex justify-center">
            <div
              class="bg-black/20 text-slate-400 text-[11px] px-3 py-1 rounded flex items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity cursor-text"
            >
              <span class="material-symbols-outlined text-[12px]">lock</span>
              app.analytics.com
            </div>
          </div>
        </div>
        <div class="bg-white relative w-[800px] aspect-[16/10] overflow-hidden">
          <div class="w-full h-full flex">
            <div
              class="w-20 h-full border-r border-slate-100 flex flex-col items-center py-6 gap-6 bg-slate-50/50"
            >
              <div
                class="size-10 rounded-xl bg-primary shadow-sm shadow-primary/30"
              ></div>
              <div class="w-10 h-[1px] bg-slate-200 mt-2"></div>
              <div class="size-6 rounded-lg bg-slate-200 opacity-60"></div>
              <div class="size-6 rounded-lg bg-slate-200 opacity-60"></div>
              <div class="size-6 rounded-lg bg-slate-200 opacity-60"></div>
            </div>
            <div class="flex-1 p-10 space-y-8 bg-white">
              <div class="flex justify-between items-center">
                <div class="space-y-2.5">
                  <div class="h-7 w-36 bg-slate-100 rounded-lg"></div>
                  <div class="h-3.5 w-52 bg-slate-50 rounded-md"></div>
                </div>
                <div
                  class="h-9 w-28 bg-indigo-50 text-indigo-600 text-[11px] font-bold flex items-center justify-center rounded-lg uppercase tracking-wide"
                >
                  Export
                </div>
              </div>
              <div class="grid grid-cols-3 gap-6">
                <div
                  class="aspect-square bg-white rounded-2xl border border-slate-100 shadow-[0_4px_16px_rgba(0,0,0,0.02)] p-5 flex flex-col justify-between"
                >
                  <div
                    class="size-10 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center"
                  >
                    <span class="material-symbols-outlined text-[20px]"
                      >show_chart</span
                    >
                  </div>
                  <div class="space-y-2">
                    <div class="h-6 w-20 bg-slate-800 rounded-md"></div>
                    <div class="h-3 w-full bg-slate-50 rounded-md"></div>
                  </div>
                </div>
                <div
                  class="aspect-square bg-white rounded-2xl border border-slate-100 shadow-[0_4px_16px_rgba(0,0,0,0.02)] p-5 flex flex-col justify-between"
                >
                  <div
                    class="size-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center"
                  >
                    <span class="material-symbols-outlined text-[20px]"
                      >pie_chart</span
                    >
                  </div>
                  <div class="space-y-2">
                    <div class="h-6 w-20 bg-slate-800 rounded-md"></div>
                    <div class="h-3 w-full bg-slate-50 rounded-md"></div>
                  </div>
                </div>
                <div
                  class="aspect-square bg-white rounded-2xl border border-slate-100 shadow-[0_4px_16px_rgba(0,0,0,0.02)] p-5 flex flex-col justify-between"
                >
                  <div
                    class="size-10 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center"
                  >
                    <span class="material-symbols-outlined text-[20px]"
                      >bar_chart</span
                    >
                  </div>
                  <div class="space-y-2">
                    <div class="h-6 w-20 bg-slate-800 rounded-md"></div>
                    <div class="h-3 w-full bg-slate-50 rounded-md"></div>
                  </div>
                </div>
              </div>
              <div
                class="h-36 bg-slate-50 rounded-2xl border border-dashed border-slate-200 flex items-center justify-center relative overflow-hidden"
              >
                <div
                  class="absolute inset-x-0 bottom-0 h-20 flex items-end justify-between px-8 pb-5 opacity-30"
                >
                  <div class="w-5 h-10 bg-indigo-300 rounded-t-md"></div>
                  <div class="w-5 h-14 bg-indigo-300 rounded-t-md"></div>
                  <div class="w-5 h-8 bg-indigo-300 rounded-t-md"></div>
                  <div class="w-5 h-16 bg-indigo-300 rounded-t-md"></div>
                  <div class="w-5 h-12 bg-indigo-300 rounded-t-md"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
