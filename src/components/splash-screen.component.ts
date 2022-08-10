import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class SplashScreen extends Vue {
  public startPlaying (): void {
    this.$emit('start-playing')
  }
}
