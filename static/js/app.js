// adding the  URL to a variable
const URL = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json";

// Build the metadata panel
function buildMetadata(sample) {
  d3.json(URL).then((data) => {

    // get the metadata field
    let metadatafield = data.metadata;

    // Filter the metadata for the object with the desired sample number
    let result = metadatafield.filter(sampleObject => sampleObject.id === parseInt(sample))[0];

    // Use d3 to select the panel with id of `#sample-metadata`
    let panel = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    panel.html("");

    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.
    Object.entries(result).forEach(([key,value]) =>{
      panel.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });
  });
}

// function to build both charts
function buildCharts(sample) {
  d3.json(URL).then((data) => {

    // Get the samples field
    let sampleField = data.samples;

    // Filter the samples for the object with the desired sample number
    let result = sampleField.filter(sampleObject => sampleObject.id == sample)[0];


    // Get the otu_ids, otu_labels, and sample_values
    let otu_ids = result.otu_ids;
    let otu_labels = result.otu_labels;
    let sample_values = result.sample_values;

    // Build a Bubble Chart
    let trace1 = {
      x : otu_ids,
      y : sample_values,
      text : otu_labels,
      mode : 'markers',
      marker : {
        size : sample_values,
        color : otu_ids,
        
      }
    }

    // Render the Bubble Chart
    let bubbleLayout = {
      title : { text : "Bacteria Cultures Per Sample"},
      xaxis : { title : "OTU ID"},
      yaxis : { title : "Number of Bacteria"}
    }

    Plotly.newPlot("bubble", [trace1] , bubbleLayout)
  
    // For the Bar Chart, map the otu_ids to a list of strings for your yticks
      let yticks = otu_ids.map(id => `OTU ${id}`);
      let xticks = sample_values;
      let labels = otu_labels;
    
    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately
    let toptenValues = sample_values.map((value, index) => ({value , id: otu_ids[index], label: otu_labels[index]})).sort((a,b) => b.value - a.value).slice(0,10);

    let trace2 = {
      x : toptenValues.map(item => item.value).reverse(),
      y : toptenValues.map(item => `OTU ${item.id}`).reverse(),
      text : toptenValues.map(item => item.label).reverse(),
      type : "bar",
      orientation : "h"
    };


    // Render the Bar Chart
    let barLayout = {
      title : { text : "Top 10 Bacteria Cultures Found" },
      xaxis : { title : "Number of Bacteria"}
    }

    Plotly.newPlot("bar", [trace2], barLayout)
  });
}

// Function to run on page load
function init() {
  d3.json(URL).then((data) => {
  
    // Get the names field
    let names = data.names;

    // Use d3 to select the dropdown with id of `#selDataset`
    let dropdownItem = d3.select("#selDataset");

    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.
    names.forEach(n => {
      dropdownItem.append("option").text(n).property("value", n)
    });

    // Get the first sample from the list
    let firstSample = names[0];

    // Build charts and metadata panel with the first sample
    buildCharts(firstSample);
    buildMetadata(firstSample);

  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);

}

// Initialize the dashboard
init();
