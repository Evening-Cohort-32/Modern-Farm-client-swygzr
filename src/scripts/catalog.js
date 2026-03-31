export const Catalog = (harvestPlants) => {
  const content = document.querySelector("main"); //looks for main

  content.innerHTML = "";
  const counts = {}; //Initializes an empty object

  harvestPlants.forEach((food) => {
    //This loops through an array called harvestPlants. For every item in that array, it runs the code inside the curly braces, referring to the current item as food
    counts[food.type] = (counts[food.type] || 0) + 1;
    //counts[food.type] looks up the current count.Bracket []notation allows you to access or create an object property using a dynamic value.counts[food.type] looks for the current number of that plant.
    //The || 0 is a fallback; if the plant type isn't in the object yet (it’s undefined), it starts at 0.
    //It then adds 1 to that number and saves it back into the object.
    content.innerHTML += ` <section class="plant" >${food.type} 
    <img src="${food.image}" class="image"> </section>`;
    //for every plant it adds a html to the main section
  });

  //*** Stretch goal add table generator and total the food quantity

  const tableContainer = document.querySelector(".tableContainer");

  let tableRows = "";

  for (const [plant, quantity] of Object.entries(counts)) {
    tableRows += `
      <tr>
        <td>${plant}</td>
        <td>${quantity}</td>
      </tr>`;
  }

  const tableHTML = `
<table>
  <tr>
        <th>Food</th>
        <th>Quantity</th>
      </tr>
      ${tableRows}
    </table>
</table>

`;
  tableContainer.innerHTML = tableHTML;
};

// **** Object.entries() is a static JavaScript method that returns an array of a given object's own enumerable string-keyed property [key, value] pairs. Each element in the resulting array is a two-element array containing the property's key (name) and its corresponding value
