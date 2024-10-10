var vg_1 = "js/suicide_rate_map.vg.json";
vegaEmbed("#map_chart", vg_1, {"actions": false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "js/suicide_rate_line.vg.json";
vegaEmbed("#line_chart", vg_2, {"actions": false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_3 = "js/suicide_change_time.vg.json";
vegaEmbed("#map_chart_time", vg_3, {"actions": false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_4 = "js/GdpVsDeathRate_scatter.vg.json";
vegaEmbed("#scatter_chart", vg_4, {"actions": false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);


// The following will be the text containers used in my visualisation.
window.onload = function() {
const textBlock1 = `
    Russia has one of the highest average death by<br>
    suicide rates of any country, with an average death rate<br>
    of 28.65 deaths per capita. However Guyana has the highest<br>
    average number of deaths by suicide per capita from 2000 - 2021.
`;

// Insert the text into the HTML element with the id "text-container"
document.getElementById('textBlock1').innerHTML = textBlock1;

const textBlock2 = `
    The graph on the left can be used to visualise<br>
    the change in deaths per capita for each country over<br>
    the years 2000 - 2021. Russia is by far the most<br>
    improved country, starting at 47.8 deaths per capita in 2000 <br>
    to ending at 17.9 in 2021. <br>
    
`;

// Insert the text into the HTML element with the id "text-container"
document.getElementById('textBlock2').innerHTML = textBlock2;

const textBlock3 = `
    Suicide is a critical public health issue, affecting millions<br> 
    of people worldwide. However, in recent years, we have<br> 
    seen significant progress in reducing suicide rates in<br> 
    several countries. Data like the one we're looking<br> 
    at today shows that while some nations historically<br> 
    experienced alarmingly high rates, many have made<br> 
    substantial improvements over time.<br><br> 
    For example, countries like Kazakhstan, Lithuania, and<br> 
    Lesotho once reported some of the highest suicide rates<br> 
    globally, often exceeding 30 to 40 deaths per<br> 
    100,000 people. But through a combination of mental health<br> 
    initiatives, community support programs, and improved<br> 
    access to healthcare, many of these countries have seen<br> 
    declines. While challenges remain, the decreasing trends<br> 
    are encouraging signs of what is possible with sustained<br> 
    efforts.
    
`;

// Insert the text into the HTML element with the id "text-container"
document.getElementById('textBlock3').innerHTML = textBlock3;

const textBlock4 = `
    This scatter plot shows the relationship between Average<br> 
    Suicide Death Rate and GDP Per Capita across countries.<br> 
    The general trend suggests that countries with higher<br> 
    GDP per capita tend to have lower suicide rates.<br> 
    Most high-income countries (above $40,000) exhibit lower<br> 
    death rates, typically below 10 per 100,000 people.<br><br> 
    Conversely, countries with lower GDP (below $20,000)<br> 
    display a wider range of suicide rates, with several<br> 
    exceeding 20 per 100,000. This indicates that while<br> 
    wealth may play a role in lowering suicide rates,<br> 
    other factors such as social, cultural, or mental<br> 
    health support systems also significantly impact the outcomes.
    
`;

// Insert the text into the HTML element with the id "text-container"
document.getElementById('textBlock4').innerHTML = textBlock4;



}