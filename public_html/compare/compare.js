/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var comparison = JSON.parse(sessionStorage.getItem("test-comparison"));
var advantages =
[
    [comparison[0].totalTime <= comparison[1].totalTime, comparison[0].averageTimePerRun <= comparison[1].averageTimePerRun],
    [comparison[1].totalTime <= comparison[0].totalTime, comparison[1].averageTimePerRun <= comparison[0].averageTimePerRun]
];

var createComparisonElement = (result, index) =>
        {
            var newElem = document.createElement("div");
//            newElem.innerHTML = "<h2>" + result.testName + "</h2> <p> <span class='test-label'>Total time: </span><span class='test-data'>" + result.totalTime + "ms</span><br> <span class='test-label'>Runs: </span><span class='test-data'>" + result.runs + "</span><br> <span class='test-label'>Average Time per Run: </span><span class='test-data'>" + result.averageTimePerRun + "ms</span> </p> <button class='compare-tests'> <svg class='compare-button-image' viewBox='0 0 1024 1024'> <g id='layer1' transform='translate(0 -28.362)'> <path id='path4691' d='m609.83 722.62-0.00001-378.96 328.19 189.48zm-457.83-258.47h457.82l0.002 140.47h-457.83zm910.91 72.571a553.61 359.54 0 0 1 -553.6 359.54 553.61 359.54 0 0 1 -553.61 -359.54 553.61 359.54 0 0 1 553.61 -359.54 553.61 359.54 0 0 1 553.6 359.54z' fill-rule='evenodd' transform='matrix(.90239 0 0 1.4125 52.556 -217.91)' fill='#e3e3e3'/> </g> </svg> <span>Compare</span> </button>"; 
            newElem.innerHTML = "<h2>" + result.testName + "</h2> <div>" + result.variables + "</div> <p><span class='test-property" + (advantages[index][0] === true ? " better" : "") + "'><span class='test-label'>Total time: </span><span class='test-data'>" + result.totalTime + "ms</span></span><br> <span class='test-property'><span class='test-label'>Runs: </span><span class='test-data'>" + result.runs + "</span></span><br> <span class='test-property" + (advantages[index][1] === true ? " better" : "") + "'><span class='test-label'>Average Time per Run: </span><span class='test-data'>" + result.averageTimePerRun + "ms</span></span> </p>"; 
            newElem.className = "test";
            return newElem;
        };
        
var container = document.getElementById("comparison-container"), firstOuter = document.createElement("div");
firstOuter.className = "test-outer";
container.appendChild(firstOuter);

firstOuter.appendChild(createComparisonElement(comparison[0], 0));
container.appendChild(createComparisonElement(comparison[1], 1));