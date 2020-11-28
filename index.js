function teste()
{
    fetch('data/file.json')
  .then(response => response.json())
  .then(jsonResponse => console.log(jsonResponse))     
   // outputs a javascript object from the parsed json
}