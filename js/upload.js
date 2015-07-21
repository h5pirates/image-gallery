// render the image in our view
function renderImage(file) {

  // generate a new FileReader object
  var reader = new FileReader();

  // inject an image with the src url
  reader.onload = function(event) {
    the_url = event.target.result
    $('#show_image').html("<img src='" + the_url + "' />")
  }
 
  // when the file is read it triggers the onload event above.
  reader.readAsDataURL(file);
}
 
// handle input changes
$("#files").change(function() {
    console.log(this.files)
    
    // grab the first image in the FileList object and pass it to the function
    renderImage(this.files[0])
});


function listFileProperties(event) 
{
    /* Read the list of the selected files. */
    var files = event.target.files; 
 
    /* Read each file and list down the properties in a table. */
    var output = "<table><tr><td>Filename</td><td>File Type</td><td>File Size</td><td>Last Modified Date</td></tr>";
 
    for (var i = 0, f; f = files[i]; i++) 
    {
        output += "<tr><td>" + escape(f.name) + "</td>";       /* f.name - Filename  */
        output += "<td>" + f.type  + "</td>";                  /* f.type - File Type */
        output += "<td>" + f.size + " bytes</td>";             /* f.size - File Size */
        output += "<td>" + f.lastModifiedDate + "</td></tr>";  /* f.lastModifiedDate - Last Modified Date */
    }
     
    output += "</table>";
    document.getElementById('list').innerHTML = output;   
}
 
/* Listener for single file input element. */
//document.getElementById('file').addEventListener('change', listFileProperties, false);
 
/* Listener for multiple files input element. */
document.getElementById('files').addEventListener('change', listFileProperties, false);
