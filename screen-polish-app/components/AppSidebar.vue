<template>
  <aside
    class="w-[340px] flex-none bg-surface-light dark:bg-surface-dark border-r border-border-light dark:border-border-dark flex flex-col z-10"
  >
    <div class="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-8">
      <SidebarImageUpload />
      <SidebarQuickActions />
      <SidebarWindowStyle />
      <SidebarBackgroundSelector />
      <SidebarProperties />
    </div>
    <SidebarExportPanel />
  </aside>
</template>
