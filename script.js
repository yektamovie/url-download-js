function play()
{
	var qry=document.getElementById("vid").value;
	if(qry==null)
	{
		alert("Enter URL First!")
	}
	else
	{
      var a = document.createElement('a');
      var linkText = document.createTextNode("download!");
      a.appendChild(linkText);
      a.title = "download!";
      a.href = qry;
      document.body.appendChild(a);
	}
}
