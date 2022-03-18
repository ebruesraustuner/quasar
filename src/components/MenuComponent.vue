<template>
  <div id="q-app" style="min-height: 100vh">
    <div>
      <router-link to="/">
        <q-img
          src="https://cdn.quasar.dev/img/material.png"
          style="height: 150px"
        >
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
            <div class="text-weight-bold">Razvan Stoenescu</div>
            <div>@rstoenescu</div>
          </div>
        </q-img>
      </router-link>
      <q-list padding>
        <q-item-label header> Essential Links </q-item-label>
          <TreeItem
            v-for="(sub, i) in simple"
            :key="i"
            :subItem="sub"
          
          />
      </q-list>
    </div>
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
              icon: '',
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
<style scoped>
.router-link-active {
  color: #0b1f31;
  background-color: #dadada !important;
  border-right: 2px solid #027be3;
  text-decoration : none;
}
.router-link-active .item-primary {
  color: #027be3;
}
</style>