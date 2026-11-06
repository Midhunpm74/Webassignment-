const restaurant = restaurantData.graph.find(item => item.type === "Restaurant");
const dishes = restaurantData.graph.filter(item => item.type === "Dish");
const menuGrid = document.querySelector("#menu-grid");
const searchInput = document.querySelector("#menu-search");
const resultMessage = document.querySelector("#result-message");

function dishCard(dish) {
  const badge = dish.popular ? '<span class="badge">Popular</span>' : "";
  const vegetarian = dish.vegetarian ? '<span class="veg">● Veg</span>' : "";

  return `
    <article class="dish-card">
      <div class="dish-illustration">
        <img src="${dish.image}" alt="${dish.name}" loading="lazy">
        ${badge}
      </div>
      <div class="dish-info">
        <div class="dish-title">
          <h3>${dish.name}</h3>
          ${vegetarian}
        </div>
        <p>${dish.description}</p>
        <strong class="price">₹${dish.price}</strong>
      </div>
    </article>
  `;
}

function renderMenu(query = "") {
  const term = query.trim().toLowerCase();
  const matches = dishes.filter(dish =>
    [dish.name, dish.category, dish.description].some(value => value.toLowerCase().includes(term))
  );

  menuGrid.innerHTML = matches.map(dishCard).join("");
  resultMessage.textContent = matches.length
    ? `${matches.length} ${matches.length === 1 ? "dish" : "dishes"} available`
    : "No dishes found. Try another search.";
}

document.querySelector(".brand strong").textContent = restaurant.name;
document.querySelector(".brand small").textContent = restaurant.location;
searchInput.addEventListener("input", event => renderMenu(event.target.value));
renderMenu();
