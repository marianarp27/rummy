<template>
<div>
  <v-row dense>
    <v-col cols="12" sm="12" md="2" class="d-flex align-center">
      <h5>{{ round.name }}</h5>
    </v-col>
    <v-col
        v-for="(player, index) in round.players" :key="`player-score-${index}-${player}`"
    >
      <v-text-field dense
        v-if="round.players[index] !== ''"
        :key="`player-score-${player}`"
        v-model.number="scores[index]"
      />
    </v-col>
  </v-row>

  <round-score
    :round="round"
    :scoreboard="scoreboard"
    ref="scoreboard"
  ></round-score>
</div>
</template>
<script lang="ts" src="./game-round.component.ts"></script>

<style scoped></style>
