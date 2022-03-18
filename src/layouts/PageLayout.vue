<template>
  <q-layout>
    <q-page-container>
      <!-- <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition> -->
      <router-view v-slot="{ Component }">
        <transition>
          <component :is="Component" />
        </transition>
      </router-view>
    </q-page-container>
  </q-layout>
</template>
<style>
.fade-enter-active,
.fade-enter {
  -webkit-animation: moveFromRight 0.5s both ease;
  animation: moveFromRight 0.5s both ease;
}
.fade-leave-to,
.fade-leave-active {
  -webkit-animation: moveToLeft 1s both ease;
  animation: moveToLeft 1s both ease;
}

@-webkit-keyframes moveToLeft {
  from {
  }
  to {
    opacity: 0.5;
    -webkit-transform: translateX(-100%);
  }
}
@keyframes moveToLeft {
  from {
  }
  to {
    opacity: 0.5;
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}

@-webkit-keyframes moveFromRight {
  from {
    opacity: 0.7;
    -webkit-transform: translateX(100%);
  }
}
@keyframes moveFromRight {
  from {
    opacity: 0.7;
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
}
</style>