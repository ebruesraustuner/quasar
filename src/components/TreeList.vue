<template>
  <div>
    <TreeItem v-for="(sub, i) in simple" :key="i" :subItem="sub" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import TreeItem from './TreeItem.vue';

export default defineComponent({
  components: {
    TreeItem,
  },
  setup() {
    return {
      simple: [
        {
          label: 'Plus Ultra',
          icon: 'add',
          children: [
            {
              label: 'Example',
              icon: 'flutter_dash',
              children: [
                {
                  label: 'Buttons',
                  icon: 'interests',
                },
              ],
            },
            {
              label: 'Cards',
              icon: 'view_agenda',
            },
            {
              label: 'Form',
              icon: 'content_paste',
            },
            {
              label: 'Tables',
              icon: 'table_view',
            },
          ],
        },
        {
          label: 'Relax',
          icon: 'waves',
        },
      ],
    };
  },
});
</script>