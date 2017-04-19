/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var results = JSON.parse(window.sessionStorage.getItem("test-result-input"));
console.log(results);

var createListElement = (result, index) =>
        {
            var newElem = document.createElement("li");
            newElem.innerHTML = "<h2>" + result.testName + "</h2> <div>" + result.variables + "</div> <p> <span class='test-label'>Total time: </span><span class='test-data'>" + result.totalTime + "ms</span><br> <span class='test-label'>Runs: </span><span class='test-data'>" + result.runs + "</span><br> <span class='test-label'>Average Time per Run: </span><span class='test-data'>" + result.averageTimePerRun + "ms</span> </p> <button class='button compare-tests' onclick='addToComparison(" + index + ")'> <svg class='button-image compare-button-image' viewBox='0 0 1024 1024'> <g id='layer1' transform='translate(0 -28.362)'> <path id='path4691' d='m609.83 722.62-0.00001-378.96 328.19 189.48zm-457.83-258.47h457.82l0.002 140.47h-457.83zm910.91 72.571a553.61 359.54 0 0 1 -553.6 359.54 553.61 359.54 0 0 1 -553.61 -359.54 553.61 359.54 0 0 1 553.61 -359.54 553.61 359.54 0 0 1 553.6 359.54z' fill-rule='evenodd' transform='matrix(.90239 0 0 1.4125 52.556 -217.91)' fill='#e3e3e3'/> </g> </svg> <span>Compare</span> </button>"; 
            newElem.className = "test";
            return newElem;
        };

results.forEach((result, i) => document.getElementById("test-list").appendChild(createListElement(result, i)));

var comparison = [];
var addToComparison = index =>
        {
            comparison.push(results[index]);
            if(comparison.length >= 2)
            {
                sessionStorage.setItem("test-comparison", JSON.stringify(comparison));
                window.location.href = "../compare/";
            }
        }