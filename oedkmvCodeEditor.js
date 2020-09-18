function myFunction1() 
{
    document.getElementById("textCSS").innerHTML = "h3 {color: blue; text-align: center;} p { font-family: cursive, arial; font-size: 22pt; color: green;}";
}

function myFunction2() 
{
    document.getElementById("textHTML").innerHTML = "<h3> Greetings! </h3> <p> Start by adding some HTML and CSS!</p>";
}

function launchHTML() 
{
    document.getElementById("preview").innerHTML = document.getElementById("textHTML").value;
}

function toggleCSS()
{
    var strCSSText = document.getElementById("textCSS").value;
    var previewPane = document.getElementById("preview");
    
    if(previewPane.getElementsByTagName("style").length != 0)
    {
        previewPane.getElementsByTagName("style")[0].remove();
    }
    else
    {
        var currentHTML = previewPane.innerHTML;
        var styleCSS = "<style> " + strCSSText + " </style>"
        previewPane.innerHTML = styleCSS + currentHTML;
    }
}

function reset() 
{
    document.getElementById("textCSS").value = null;
    document.getElementById("textHTML").value = null;    
    document.getElementById("preview").value = null;
}

function change()
{
    var t = prompt("Please enter the new title:", "New Title");
    
    //make sure the user enters something for the title
    while(t == "")
    {
        t = prompt("You must enter a New Title for the page", "New Title");
    }
    
    if (t != null) 
    {
        document.title = t;
        document.getElementById("align").value = t;
    }
}
//oedkmvCodeEditor.js
//displaying oedkmvCodeEditor.js