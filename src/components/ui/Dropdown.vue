<template>
  <div class="relative">
    <div @click="open = !open">
      <slot name="trigger"></slot>
    </div>

    <!-- Full Screen Dropdown Overlay -->
    <div v-show="open" class="fixed inset-0 z-40" @click="open = false"></div>

    <transition
      enter-active-class="transition ease-out duration-150"
      enter-from-class="transform opacity-0 scale-90"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-100"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-90"
    >
      <div
        v-show="open"
        class="absolute z-50 mt-2 rounded-md shadow-lg"
        :class="[widthClass, alignmentClasses]"
        style="display: none"
        @click="open = false"
      >
        <div class="rounded-md shadow-xs py-2.5" :class="contentClasses">
          <slot name="content"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  props: {
    align: {
      type: String,
      default: 'left',
    },
    width: {
      type: String,
      default: '48',
    },
    contentClasses: {
      type: Array,
      default: () => ['bg-white'],
    },
  },
  data() {
    return {
      open: false,
    }
  },
  computed: {
    widthClass() {
      return {
        48: 'w-48',
        56: 'w-56',
      }[this.width.toString()]
    },
    alignmentClasses() {
      if (this.align === 'left') {
        return 'origin-top-left left-0'
      } else if (this.align === 'right') {
        return 'origin-top-right right-0'
      }
      return 'origin-top'
    },
  },
  // mounted() {
  //   const closeOnEscape = (e) => {
  //     if (this.open && e.keyCode === 27) {
  //       this.open = false
  //     }
  //   }

  //   this.$once('hook:destroyed', () => {
  //     window.removeEventListener('keydown', closeOnEscape)
  //   })

  //   window.addEventListener('keydown', closeOnEscape)
  // },
}
</script>
