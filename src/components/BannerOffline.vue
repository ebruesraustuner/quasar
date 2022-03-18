<template>
  <q-banner v-if="!isOnLine || showBackOnline" inline-actions rounded class="bg-orange text-white">
    You have lost connection to the internet. This app is offline.
  </q-banner>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted, ref, watch } from 'vue'

export default defineComponent({
  setup() {
    const isOnLine = ref(navigator.onLine)
    const showBackOnline = ref(false)

    watch(isOnLine, (value) => {
      if (value) {
        showBackOnline.value = true
        setTimeout(() => {
          showBackOnline.value = false
        }, 1000)
      }
    })

    onMounted(() => {
      window.addEventListener('online', (event) =>
        updateOnlineStatus(event),
      )
      window.addEventListener('offline', (event) =>
        updateOnlineStatus(event),
      )
    })

    onBeforeUnmount(() => {
      window.removeEventListener('online', (event) =>
        updateOnlineStatus(event),
      )
      window.removeEventListener('offline', (event) =>
        updateOnlineStatus(event),
      )
    })

    function updateOnlineStatus(e: Event) {
      const { type } = e
      isOnLine.value = type === 'online'
    }

    return {
      isOnLine,
      showBackOnline,
    }
  },
})
</script>
