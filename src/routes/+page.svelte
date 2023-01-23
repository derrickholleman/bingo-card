<script lang="ts">
  import BingoTable from "../components/BingoTable.svelte";
  import {
    BINGO_DATA_ROW_1,
    BINGO_DATA_ROW_2,
    BINGO_DATA_ROW_3,
    BINGO_DATA_ROW_4,
  } from "../util/bingoData";
</script>

<div class="container">
  <h1>Major 2 Drinking Game</h1>
  <BingoTable
    row1Data={BINGO_DATA_ROW_1}
    row2Data={BINGO_DATA_ROW_2}
    row3Data={BINGO_DATA_ROW_3}
    row4Data={BINGO_DATA_ROW_4}
  />
</div>

<style>
  .container {
    display: grid;
    place-items: center;
  }
</style>
