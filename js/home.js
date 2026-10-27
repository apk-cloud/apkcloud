// 9-ti category-r JSON file list
const gameCategoryFiles = [
    './json/games/action.json',
    './json/games/adventure.json',
    './json/games/board.json',
    './json/games/card.json',
    './json/games/educational.json',
    './json/games/racing.json',
    './json/games/simulation.json',
    './json/games/sports.json',
    './json/games/family.json'
];

// Date string (e.g. "Oct 7, 2026") compare korar helper function
function getLatestAppFromCategory(dataArray) {
    if (!dataArray || dataArray.length === 0) return null;
    
    // update_date borobor sort kore shobcheye latest item ta newa
    return dataArray.sort((a, b) => new Date(b.update_date || b.date) - new Date(a.update_date || a.date))[0];
}

// Sob 9-ti category file eksathe fetch kora
Promise.all(gameCategoryFiles.map(file => 
    fetch(file)
        .then(res => res.ok ? res.json() : [])
        .catch(err => {
            console.error(`Error loading ${file}:`, err);
            return [];
        })
))
.then(allCategoriesData => {
    // Protyek category-r array theke 1-ti kore latest app pick kora
    const latestNineApps = allCategoriesData
        .map(categoryArray => getLatestAppFromCategory(categoryArray))
        .filter(app => app !== null); // Empty file ba error case filter kora

    const container = document.getElementById('latest-games-grid'); // Apnar HTML ID

    container.innerHTML = latestNineApps.map(app => `
        <div class="col-lg-4 col-md-6 col-12">
            <a href="details.html?id=${app.id}" class="app-card">
                <img src="${app.logo_url || 'https://via.placeholder.com/64'}" alt="${app.app_name}" class="app-icon">
                <div class="app-info">
                    <h3 class="app-name">${app.app_name}</h3>
                    <p class="app-subtext text-uppercase">${app.company_name || 'Developer'}</p>
                    <p class="app-rating"><i class="fa-solid fa-star"></i>${app.rating || '4.5'}</p>
                </div>
                <button class="btn-download-mobile d-lg-none">Download</button>
            </a>
        </div>
    `).join('');
})
.catch(error => {
    console.error('Error fetching latest updates:', error);
});


// 9-ti category-r JSON file list
const appCategoryFiles = [
    './json/apps/art-and-design.json',
    './json/apps/auto-and-vehicles.json',
    './json/apps/business.json',
    './json/apps/communication.json',
    './json/apps/dating.json',
    './json/apps/entertainment.json',
    './json/apps/finance.json',
    './json/apps/food-and-drink.json',
    './json/apps/medical.json',
    './json/apps/photography.json',
    './json/apps/shopping.json',
    './json/apps/social.json',
    './json/apps/travel-and-local.json',
    './json/apps/video-players-and-editors.json',
    './json/apps/weather.json'
];

// Date string (e.g. "Oct 7, 2026") compare korar helper function
function getLatestAppFromCategory(dataArray) {
    if (!dataArray || dataArray.length === 0) return null;
    
    // update_date borobor sort kore shobcheye latest item ta newa
    return dataArray.sort((a, b) => new Date(b.update_date || b.date) - new Date(a.update_date || a.date))[0];
}

// Sob 9-ti category file eksathe fetch kora
Promise.all(appCategoryFiles.map(file => 
    fetch(file)
        .then(res => res.ok ? res.json() : [])
        .catch(err => {
            console.error(`Error loading ${file}:`, err);
            return [];
        })
))
.then(allCategoriesData => {
    // Protyek category-r array theke 1-ti kore latest app pick kora
    const latestNineApps = allCategoriesData
        .map(categoryArray => getLatestAppFromCategory(categoryArray))
        .filter(app => app !== null); // Empty file ba error case filter kora

    const container = document.getElementById('latest-apps-grid'); // Apnar HTML ID

    container.innerHTML = latestNineApps.map(app => `
        <div class="col-lg-4 col-md-6 col-12">
            <a href="details.html?id=${app.id}" class="app-card">
                <img src="${app.logo_url || 'https://via.placeholder.com/64'}" alt="${app.app_name}" class="app-icon">
                <div class="app-info">
                    <h3 class="app-name">${app.app_name}</h3>
                    <p class="app-subtext text-uppercase">${app.company_name || 'Developer'}</p>
                    <p class="app-rating"><i class="fa-solid fa-star"></i>${app.rating || '4.5'}</p>
                </div>
                <button class="btn-download-mobile d-lg-none">Download</button>
            </a>
        </div>
    `).join('');
})
.catch(error => {
    console.error('Error fetching latest updates:', error);
});