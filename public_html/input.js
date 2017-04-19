/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var submitInput = () =>
{
    window.sessionStorage.setItem("test-result-input", document.getElementById("input").value);
    window.location.href = "results/";
}