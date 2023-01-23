<script lang="ts">
  import TableRow from "./TableRow.svelte";
  import { allData } from "../stores/store";

  export let row1Data: string[];
  export let row2Data: string[];
  export let row3Data: string[];
  export let row4Data: string[];

  $allData = [...row1Data, ...row2Data, ...row3Data, ...row4Data] as string[];
</script>

<table>
  <tbody>
    <TableRow rowData={row1Data} />
    <TableRow rowData={row2Data} />
    <TableRow rowData={row3Data} />
    <TableRow rowData={row4Data} />
  </tbody>
</table>
