function download()
{
	var qry=document.getElementById("vid").value;
	if(qry==null)
	{
		alert("Enter URL First!")
	}
	else
	{
      var a = document.getElementById('m');
      a.href = qry;
      a.innerHTML="download";
      
	}
}
