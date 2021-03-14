var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function(id) { return document.getElementById(id); };

var addScore = function()
{
	if ($("name").value == "")
	{
		alert("You must enter a valid name and score")
	}
	else
	{
		names.push($("name").value);
	}
	
	if ($("score").value == "")
	{
		alert("You must enter a valid name and score")
	}
	else
	{
		alert("Added " + $("score").value);
		scores.push($("score").value);
	}
	
};

var displayResults = function()
{	

	if (scores.length < 1)
	{
		alert("You must enter at least one value");
	}
	else
	{
	var avg = 0;

	for (var i = 0; i < scores.length; i++)
	{
		avg += scores[i];
	}
	
	avg = avg / scores.length;

	var max = Math.max.apply(Math, scores);

	var heading = document.createElement('div');
	heading.innerHTML ='<h2>Results<h2>' + '<p>Average Score: <p>' + avg +'<p>Top Score: </p>' + max;
	
	document.body.appendChild(heading);
	}	
};

var displayScores = function()
{
	if (scores.length < 1)
	{
	alert("You must enter at least one value");
	}
	else
	{
		for (var i = 0; i < scores.length; i++)
	{
		var scores_table = document.createElement('table');
		scores_table.innerHTML = names[i] + '<p></p>' + scores[i];
	
		document.body.appendChild(scores_table);
	}
	}	
};


window.onload = function () {
	$("add").onclick = addScore;
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
};


