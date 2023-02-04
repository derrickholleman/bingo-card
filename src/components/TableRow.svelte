<script lang="ts">
  export let rowData: string[];

  let selectedItems: string[] = [];

  const handleToggleRowCell = (data: string) => {
    const index = selectedItems.indexOf(data);

    if (index === -1) {
      selectedItems.push(data);
    } else {
      selectedItems.splice(index, 1);
    }

    selectedItems = selectedItems;
  };
</script>

<tr>
  {#each rowData as data}
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

<style>
  @media screen and (max-width: 680px) {
    td {
      font-size: 1.8vw;
      width: 70px;
      height: 70px;
    }
  }

  @media screen and (min-width: 680px) {
    td {
      width: 100px;
      height: 100px;
    }
  }

  td {
    font-weight: bold;
    text-transform: uppercase;
    padding: 5px;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
    border: 1px solid black;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .selected {
    background-color: rgba(255, 16, 239, 0.29);
  }
</style>
