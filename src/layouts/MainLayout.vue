<template>
  <div class="app-main-layout">
    <Navbar @toggle-menu="isOpen = !isOpen"/>
    <Sidebar v-model="isOpen"/>
    <main class="app-content" :class="{full: !isOpen}">
      <div class="app-page">
        <router-view/>
        <flash-message class="mainLayoutFlash"></flash-message>
      </div>
    </main>
    <RecordFloatButton />
  </div>
</template>



<script>

import Navbar from '@/components/app/Navbar';
import Sidebar from '@/components/app/Sidebar';
import RecordFloatButton from "../components/app/RecordFloatButton";

export default {
  name: 'mainLayout',
  components: {
    Navbar,
    RecordFloatButton,
    Sidebar
  },
  data: () => ({
    isOpen: true
  })
}
</script>