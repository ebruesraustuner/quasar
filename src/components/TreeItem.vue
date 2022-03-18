<template>
  <div>
    <!-- ver 1  -->
    <!-- <div>
      <q-list>
        <q-item clickable v-close-popup>
          <q-item-section avatar>
            <q-icon :name="subItem.icon"></q-icon>
          </q-item-section>
          <q-item-section>
            {{ subItem.label }}
          </q-item-section>
          <q-item-section v-if="subItem.children?.length" side>
            <q-icon name="keyboard_arrow_right" />
          </q-item-section>
        </q-item>

        <q-separator />
        <div>
          <q-menu
            v-if="subItem.children?.length"
            anchor="top end"
            self="top start"
            class="bg-warning"
          >
            <q-list dense>
              <TreeItem
                v-for="(sub, i) in subItem.children"
                :key="i"
                :subItem="sub"
              />
            </q-list>
          </q-menu>
        </div>
      </q-list>
    </div> -->
    <div>
      <q-list dense style="min-width: 100px" class="q-ml-md">
        <div>
          <q-item clickable v-close-popup @click="toggle">
            <q-item-section avatar>
              <q-icon :name="subItem.icon"></q-icon>
            </q-item-section>

            <q-item-section @click="selectedLabel(subItem.label)">
              {{ subItem.label }}
            </q-item-section>

            <q-item-section>
              <q-icon
                name="keyboard_arrow_right"
                v-if="subItem.children?.length"
              />
            </q-item-section>
          </q-item>

          <div v-if="subItem.children?.length">
            <TreeItem
              v-for="(sub, i) in subItem.children"
              v-show="showSub"
              :key="i"
              :subItem="sub"
            />
          </div>
        </div>
      </q-list>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'TreeItem',
  props: {
    subItem: {
      required: false,
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  setup(props) {
    const showSub = ref(false);
    const router = useRouter()

    function toggle() {
      if (props.subItem.children?.length) showSub.value = !showSub.value;
    }

    function selectedLabel(value) {
      router.push(value)
    }
    return {
      showSub,
      toggle,
      selectedLabel,
    };
  },
});
</script>
<style>
</style>