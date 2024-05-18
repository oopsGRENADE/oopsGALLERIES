//function created to replace the content
function replaceContent() {
	//declaring the variables
	var myRecipientName;
    var myHostName;
	
	//setting the variable to the input field's id named recipientNameInput's value
	myRecipientName = document.getElementById("recipientNameInput").value;
	//setting the variable to the input field's id named hostNameInput's value
    myHostName = document.getElementById("hostNameInput").value;
	
	console.log("Checking that the variables are set:")
	console.log('Variable myRecipientName: ' + myRecipientName);
    console.log('Variable myHostName: ' + myHostName);
	
	//setting the HTML code in the span id recipientNamePlaceholder and hostNamePlacehoder with the variable 
	document.getElementById("recipientNamePlaceholder").innerHTML = myRecipientName;
    document.getElementById("hostNamePlaceholder").textContent = myHostName;   
} 