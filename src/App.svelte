<script>
  import "@esri/calcite-components/dist/components/calcite-button";
  import "@esri/calcite-components/dist/components/calcite-select";
  import "@esri/calcite-components/dist/components/calcite-option";
  import "@esri/calcite-components/dist/components/calcite-checkbox";
  import "@esri/calcite-components/dist/components/calcite-label";

  import FeatureTable from "@arcgis/core/widgets/FeatureTable";
  import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
  import { onMount } from "svelte";

  let tableContainer;
  let selectContainer;
  let resultTableContainer;
  let statsContainer;

  let layer;
  let fieldName;

  let id; // = "b8f4033069f141729ffb298b7418b653";

  const statTypes = ["count", "sum", "min", "max", "avg", "stddev", "var"];

  onMount(() => {
    // stats checkboxes
    console.log(location.search);
    const params = new URLSearchParams(location.search);
    console.log(params.get("id"));
    if (params.get("id")) {
      id = params.get("id");
    }
    const checks = document.createElement("div");
    for (let type of statTypes) {
      console.log(type);
      const check = `<calcite-label alignment="end" layout="inline" for=${type}><calcite-checkbox checked value=${type} name=${type}></calcite-checkbox><span class="stats-type">${type}</span></calcite-label>`;
      checks.innerHTML = check;
      statsContainer.appendChild(checks.firstChild);
    }

    // load layer
    layer = new FeatureLayer({
      portalItem: { id },
    });
    const table = new FeatureTable({ container: tableContainer, layer });
    layer.load().then(() => {
      const elem = document.createElement("div");
      const fields = layer.fields.filter((field) => field.type !== "string");
      for (let field of fields) {
        const option = `<calcite-option value=${field.name}>${field.alias}</calcite-option>`;
        elem.innerHTML = option;
        selectContainer.appendChild(elem.firstChild);
      }

      const elems = [...document.querySelectorAll("calcite-checkbox")];
      for (let el of elems) {
        el.addEventListener("calciteCheckboxChange", onStatsChange);
      }
    });
  });

  function onSelectChange() {
    fieldName = selectContainer.selectedOption.value;
  }

  function onClick() {
    if (!layer) return;
    const query = layer.createQuery();
    const statVals = [...document.querySelectorAll("calcite-checkbox")]
      .filter((el) => el.checked)
      .map((el) => el.value);
    const stats = statVals.map((t) => ({
      onStatisticField: fieldName,
      outStatisticFieldName: `${t}_${fieldName}`,
      statisticType: t,
    }));
    query.outStatistics = stats;
    layer.queryFeatures(query).then(({ features }) => {
      console.log(features);
      const { attributes } = features[0];
      resultTableContainer.innerHTML = "";
      for (let key in attributes) {
        const tr = resultTableContainer.insertRow();
        const td = tr.insertCell();
        td.classList.add("field-name");
        td.innerText = key;
        const td2 = tr.insertCell();
        td2.innerText = attributes[key];
      }
    });
  }

  function onStatsChange(e) {
    console.log("stats change", e.target.checked, e.target.value);
  }
</script>

<main>
  <div class="app">
    <div class="picker">
      <calcite-select
        bind:this={selectContainer}
        on:calciteSelectChange={onSelectChange}
      />
    </div>
    <div class="data">
      <calcite-button on:click={onClick}>Stats</calcite-button>
    </div>
    <div class="stats" bind:this={statsContainer} />
    <div class="results">
      <table class="results-table" bind:this={resultTableContainer} />
    </div>
  </div>
  <div class="table" bind:this={tableContainer} />
</main>

<style>
  @import "./app.css";
  main {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  .app {
    display: flex;
    height: 50%;
  }

  .data {
    margin: 1vh;
  }

  .picker {
    margin: 1vh;
  }

  .table {
    border-top: 1px solid #333;
  }

  .stats {
    margin: 1vh;
    color: #eee;
  }

  .results {
    width: 100%;
    margin: 1vh;
    border: 1px solid #333;
  }

  .results-table {
    width: 100%;
  }
</style>
