import { Component, Inject, Prop, Vue, Watch } from 'vue-property-decorator'
import { IRound, Round } from '@/shared/model/round/round.model'

@Component({})
export default class RoundScore extends Vue {
  @Prop({
    type: Object,
    required: true,
    default: () => { return new Round('', 0, []) }
  })
  round!: IRound;

  @Prop({
    type: Object,
    required: true,
    default: () => { return {} }
  })
  scoreboard!: { [k:string]: string[] }

  @Inject()
  readonly sharedState!: any

  public actualScoreboard: any[] = [];

  public get actualScoreboardKeys () {
    if (!this.round) { return null }
    return [...this.sharedState.roundNames].splice(0, (this.round.index) + 1)
  }

  @Watch('scoreboard', { deep: true })
  onScoreBoardChange (newVal: { [k:string]: string[] }, oldVal: { [k:string]: string[] }) {
    if (!this.actualScoreboardKeys) {
      return
    }
    this.actualScoreboard = []

    for (const [index, value] of this.round.players.entries()) {
      this.actualScoreboard[index] = 0
      for (let i = 0; i < this.actualScoreboardKeys.length; i++) {
        const gameRoundKey = this.actualScoreboardKeys[i]
        console.log(newVal[gameRoundKey][index])
        this.actualScoreboard[index] += parseInt(newVal[gameRoundKey][index], 10)
      }
    }
  }
}
