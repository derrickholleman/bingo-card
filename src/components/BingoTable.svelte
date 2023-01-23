<script lang="ts">
  import TableRow from "./TableRow.svelte";

  export let row1Data: string[];
  export let row2Data: string[];
  export let row3Data: string[];
  export let row4Data: string[];
</script>

<table>
  <tbody>
    <TableRow rowData={row1Data} />
    <TableRow rowData={row2Data} />
    <TableRow rowData={row3Data} />
    <TableRow rowData={row4Data} />
  </tbody>
</table>
