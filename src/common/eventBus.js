import Vue from 'vue'
/* eslint-disable */
export const eventBus = new Vue({
/* eslint-disable */
   methods: {
       activeToggle() {
          this.$emit('Toggle')
       },
       toggleClose() {
        this.$emit('toggleOff')
       },
       closeCover() {
          this.$emit('coverOff')
       },
       getSvg(svg) {
         this.$emit('svgImg', svg)
       }
   }
})