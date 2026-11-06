const menuGrid = document.querySelector("#menu-grid");
const searchInput = document.querySelector("#menu-search");
const resultMessage = document.querySelector("#result-message");

let dishes = [];

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
    [dish.name, dish.category, dish.description]
      .some(value => value.toLowerCase().includes(term))
  );

  menuGrid.innerHTML = matches.map(dishCard).join("");
  resultMessage.textContent = matches.length
    ? `${matches.length} ${matches.length === 1 ? "dish" : "dishes"} available`
    : "No dishes found. Try another search.";
}

async function loadRestaurantData() {
  resultMessage.textContent = "Loading menu...";
  searchInput.disabled = true;

  try {
    const response = await fetch("./api.php", {
      headers: { Accept: "application/json" },
      cache: "no-store"
    });
    if (!response.ok) {
      throw new Error(`Data service returned ${response.status}`);
    }

    const data = await response.json();
    const restaurant = data.graph.find(item => item.type === "Restaurant");
    dishes = data.graph.filter(item => item.type === "Dish");

    if (!restaurant || !dishes.length) {
      throw new Error("The data service returned an empty restaurant graph.");
    }

    document.querySelector(".brand strong").textContent = restaurant.name;
    document.querySelector(".brand small").textContent = restaurant.location;
    searchInput.disabled = false;
    renderMenu();
  } catch (error) {
    console.error("Unable to load restaurant data:", error);
    menuGrid.innerHTML = "";
    resultMessage.textContent = "We couldn't load the menu. Please try again later.";
  }
}

searchInput.addEventListener("input", event => renderMenu(event.target.value));
loadRestaurantData();
