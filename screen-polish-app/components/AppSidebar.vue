<template>
  <aside class="sidebar-container">
    <div class="sidebar-content">
      <!-- 1. Size Selector -->
      <SidebarFrameSize />

      <!-- 2. Styling: Frame -->
      <SidebarWindowStyle />

      <!-- 3. Styling: Radius (related to Frame) -->
      <SidebarRadiusSelector />

      <!-- 4. Styling: Background -->
      <SidebarBackgroundSelector />

      <!-- 5. Actions: Quick Actions -->
      <SidebarQuickActions />

      <!-- 6. Fine-tuning: Properties -->
      <SidebarPropertiesSelector />

      <!-- 7. Optional: Watermark -->
      <SidebarWatermarkToggle />
    </div>
    <SidebarExportPanel />
  </aside>
</template>
