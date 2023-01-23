<script lang="ts">
  export let row1Data: string[];
  export let row2Data: string[];
  export let row3Data: string[];
  export let row4Data: string[];

  let allData = [
    ...row1Data,
    ...row2Data,
    ...row3Data,
    ...row4Data,
  ] as string[];

  let selectedItems = [] as string[];

  const handleToggleRowCell = (data: string) => {
    const foundItem = allData.find((item) => item === data);
    if (foundItem) {
      selectedItems.push(foundItem);
      selectedItems = selectedItems;
    }
  };
</script>

<table>
  <tbody>
    <tr>
      {#each row1Data as data}
        <td
          on:keydown={(e) => {
            if (e.key === "Enter") {
              handleToggleRowCell(data);
            }
          }}
          on:click={() => handleToggleRowCell(data)}
          class:selected={selectedItems.includes(data)}>{data}</td
        >
      {/each}
    </tr>

    <tr>
      {#each row2Data as data}
        <td
          on:keydown={(e) => {
            if (e.key === "Enter") {
              handleToggleRowCell(data);
            }
          }}
          on:click={() => handleToggleRowCell(data)}
          class:selected={selectedItems.includes(data)}>{data}</td
        >
      {/each}
    </tr>

    <tr>
      {#each row3Data as data}
        <td
          on:keydown={(e) => {
            if (e.key === "Enter") {
              handleToggleRowCell(data);
            }
          }}
          on:click={() => handleToggleRowCell(data)}
          class:selected={selectedItems.includes(data)}>{data}</td
        >
      {/each}
    </tr>

    <tr>
      {#each row4Data as data}
        <td
          on:keydown={(e) => {
            if (e.key === "Enter") {
              handleToggleRowCell(data);
            }
          }}
          on:click={() => handleToggleRowCell(data)}
          class:selected={selectedItems.includes(data)}>{data}</td
        >
      {/each}
    </tr>
  </tbody>
</table>

<style>
  td {
    font-weight: bold;
    text-transform: uppercase;
    padding: 5px;
    width: 100px;
    font-size: 1.5vw;
    height: 100px;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
    border: 1px solid black;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .selected {
    background-color: yellow;
  }
</style>
