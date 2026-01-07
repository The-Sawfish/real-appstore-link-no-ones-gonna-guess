/* ==========================================================

   SAWFISH APP STORE - JAVASCRIPT

   Main Application Logic

   Version: 2.0.0

========================================================== */


// ==========================================================

// APP CONFIGURATION

// ==========================================================

const APP_CONFIG = {

    appName: 'Sawfish App Store',

    version: '2.0.0',

    firebaseConfig: {

        apiKey: "AIzaSyDOCAbC123dEf456GhI789jKl012MnO",

        authDomain: "sawfish-app-store.firebaseapp.com",

        projectId: "sawfish-app-store",

        storageBucket: "sawfish-app-store.appspot.com",

        messagingSenderId: "123456789",

        appId: "1:123456789:web:abc123def456"

    },

    externalDomains: [

        'runnova.github.io',

        'ripenos.web.app',

        'pluto-app.zeon.dev',

        'zardoy.github.io',

        'aappqq.github.io',

        'the-sawfish.github.io',

        'jimeneutron.github.io',

        'bobtherobberunblocked.github.io',

        'monkeytype.com'

    ]

};


// ==========================================================

// APP DATA

// ==========================================================

const APPS = {

    hack: {

        name: "Hack Stuff",

        description: "Restricted utilities and experimental tools for advanced users. This collection includes various browser-based tools that can be useful for testing, debugging, and exploring web technologies.",

        url: "https://the-sawfish.github.io/hackstuff/",

        icon: "icons/hack.png",

        developer: "Sawfish Developer Group",

        rating: 0,

        ratings: {},

        featured: false,

        featuredImage: null,

        screenshots: []

    },

    portal: {

        name: "Sawfish Game Portal",

        description: "Central launcher for all approved Sawfish games in one place. Access your favorite games quickly without needing to navigate through the main store interface.",

        url: "https://the-sawfish.github.io/portal/",

        icon: "icons/game-portal.png",

        developer: "Sawfish Developer Group",

        rating: 0,

        ratings: {},

        featured: false,

        featuredImage: null,

        screenshots: []

    },

    chat: {

        name: "Chat App",

        description: "Real-time messaging platform with public rooms, private messaging, and channel support. Features include message reactions, file sharing, and message history. Connect with classmates instantly.",

        url: "https://the-sawfish.github.io/chat/",

        icon: "icons/chat.png",

        developer: "Sawfish Developer Group",

        rating: 0,

        ratings: {},

        featured: false,

        featuredImage: null,

        screenshots: []

    },

    call: {

        name: "Call App",

        description: "Fast, simple browser-based voice calling interface. Create private rooms and share links to start calls instantly. No installation required, works directly in your browser.",

        url: "https://the-sawfish.github.io/call/",

        icon: "icons/call.png",

        developer: "Sawfish Developer Group",

        rating: 0,

        ratings: {},

        featured: false,

        featuredImage: null,

        screenshots: []

    },

    circle: {

        name: "Draw a Circle",

        description: "Quick reflex challenge - draw the most perfect circle you can. Test your precision and compete with friends for the highest accuracy score.",

        url: "https://client.mylic.app/",

        icon: "icons/circle.png",

        developer: "Mylic App",

        rating: 0,

        ratings: {},

        featured: false,

        featuredImage: null,

        screenshots: []

    },

    "2048": {

        name: "2048",

        description: "Classic number puzzle game. Combine matching tiles to reach the 2048 tile. Simple to learn but difficult to master.",

        url: "https://the-sawfish.github.io/2048/",

        icon: "icons/2048.png",

        developer: "Sawfish Developer Group",

        rating: 0,

        ratings: {},

        featured: false,

        featuredImage: null,

        screenshots: []

    },

    minecraft: {

        name: "Minecraft Web",

        description: "The iconic sandbox building game, now in your browser. Build, explore, and create without downloads. Experience the magic of Minecraft anywhere.",

        url: "https://zardoy.github.io/minecraft-web-client/",

        icon: "icons/minecraft.png",

        developer: "Zardoy",

        rating: 0,

        ratings: {},

        featured: true,

        featuredImage: null,

        screenshots: []

    },

    blockblast: {

        name: "Block Blast",

        description: "Addictive block puzzle game with competitive scoring system. Place blocks strategically to create lines and clear the board.",

        url: "https://the-sawfish.github.io/blockblast/",

        icon: "icons/blockblast.png",

        developer: "Sawfish Developer Group",

        rating: 0,

        ratings: {},

        featured: false,

        featuredImage: null,

        screenshots: []

    },

    sandboxels: {

        name: "Sandboxels",

        description: "Falling sand physics simulation with over 500 elements to experiment with. Create complex simulations and watch physics in action.",

        url: "https://sandboxels.github.io/",

        icon: "icons/sandboxels.png",

        developer: "R74n",

        rating: 0,

        ratings: {},

        featured: true,

        featuredImage: null,

        screenshots: []

    },

    run3: {

        name: "Run 3",

        description: "Endless space runner featuring gravity-shifting tunnel gameplay mechanics. Navigate through infinite tunnels in space.",

        url: "https://the-sawfish.github.io/run3/",

        icon: "icons/run3.png",

        developer: "Sawfish Developer Group",

        rating: 0,

        ratings: {},

        featured: true,

        featuredImage: null,

        screenshots: []

    },

    retrobowl: {

        name: "Retro Bowl",

        description: "Classic American football game with retro pixel graphics and simple controls. Lead your team to victory in this nostalgic sports experience.",

        url: "https://the-sawfish.github.io/retrobowl/",

        icon: "icons/retrobowl.png",

        developer: "Sawfish Developer Group",

        rating: 0,

        ratings: {},

        featured: true,

        featuredImage: null,

        screenshots: []

    },

    paperio2: {

        name: "Paper.io 2",

        description: "Territory conquest game. Capture territory by drawing shapes and returning to your base. Avoid enemies and expand your territory.",

        url: "https://the-sawfish.github.io/paperio2/",

        icon: "icons/paperio2.png",

        developer: "Sawfish Developer Group",

        rating: 0,

        ratings: {},

        featured: false,

        featuredImage: null,

        screenshots: []

    },

    monkeytype: {

        name: "MonkeyType",

        description: "Minimalist typing test and practice tool with customizable themes and tests. Track your typing speed and accuracy over time.",

        url: "https://monkeytype.com/",

        icon: "icons/monkeytype.png",

        developer: "Miodec",

        rating: 0,

        ratings: {},

        featured: false,

        featuredImage: null,

        screenshots: []

    },

    bobtherobber: {

        name: "Bob the Robber",

        description: "Stealth puzzle game. Rob the rich and avoid getting caught by guards. Use your cunning to navigate security systems.",

        url: "https://bobtherobberunblocked.github.io/",

        icon: "icons/bobtherobber.png",

        developer: "Bob the Robber Team",

        rating: 0,

        ratings: {},

        featured: false,

        featuredImage: null,

        screenshots: []

    },

    novaos: {

        name: "NovaOS",

        description: "A modern, full-featured browser-based desktop operating system. Features include a file system, multiple windows, terminal access, text editor, paint application, and system settings. Experience a complete desktop environment without any installation.",

        url: "https://runnova.github.io/n/os/",

        icon: "icons/novaos.png",

        developer: "RunNova",

        rating: 0,

        ratings: {},

        featured: false,

        featuredImage: null,

        screenshots: []

    },

    winripen: {

        name: "WinRipen",

        description: "A Windows-inspired web OS that replicates the familiar Windows desktop experience in your browser. Features include a taskbar, start menu, window management, notepad, and file browser. Perfect for those who want a Windows-like experience on any device.",

        url: "https://ripenos.web.app/",

        icon: "icons/winripen.png",

        developer: "RipenOS Team",

        rating: 0,

        ratings: {},

        featured: false,

        featuredImage: null,

        screenshots: []

    },

    plutoos: {

        name: "PlutoOS",

        description: "A lightweight, minimalist browser-based operating system designed for simplicity and speed. Features include a clean desktop, window management, basic applications, and a terminal. Great for older computers or as a simple computing environment.",

        url: "https://pluto-app.zeon.dev/",

        icon: "icons/plutoos.png",

        developer: "Zeon",

        rating: 0,

        ratings: {},

        featured: false,

        featuredImage: null,

        screenshots: []

    },

    ripenos: {

        name: "RipenOS",

        description: "A unique browser-based operating system with a focus on customization and productivity. Features include theming, multiple workspaces, file management, and a suite of built-in applications. Express yourself with a fully customizable desktop environment.",

        url: "https://ripenos.web.app/os",

        icon: "icons/ripenos.png",

        developer: "RipenOS Team",

        rating: 0,

        ratings: {},

        featured: false,

        featuredImage: null,

        screenshots: []

    }

};


// ==========================================================

// GLOBAL STATE

// ==========================================================

let state = {

    currentUser: null,

    currentApp: null,

    currentRating: 0,

    expandedApp: null,

    isPWA: false,

    sidebarCollapsed: false,

    developerApps: []

};


// ==========================================================

// DOM ELEMENTS

// ==========================================================

const $ = (selector) => document.querySelector(selector);

const $$ = (selector) => document.querySelectorAll(selector);


// ==========================================================

// INITIALIZATION

// ==========================================================

document.addEventListener('DOMContentLoaded', async () => {

    console.log('Sawfish App Store v' + APP_CONFIG.version + ' initializing...');

    

    // Setup event listeners

    setupNavigation();

    setupAppCards();

    setupModals();

    setupRatingSystem();

    setupWelcomePopup();

    setupSidebar();

    setupDeveloperFeatures();

    

    // Load ratings from localStorage

    loadRatings();

    

    // Update date display

    updateDateDisplay();

    

    // Check for updates

    checkForUpdates();

    

    // Remove loading class

    document.documentElement.classList.remove('loading');

    document.documentElement.classList.add('loaded');

    

    console.log('Sawfish App Store initialized successfully!');

});


// ==========================================================

// NAVIGATION

// ==========================================================

function setupNavigation() {

    // Tab navigation

    $$('.nav-item').forEach(btn => {

        btn.addEventListener('click', () => {

            const tab = btn.dataset.tab;

            switchTab(tab);

        });

    });

    

    // Category tabs

    $$('.category-tab').forEach(btn => {

        btn.addEventListener('click', () => {

            const category = btn.dataset.category;

            filterGames(category);

        });

    });

}


function switchTab(tabName) {

    // Update nav items

    $$('.nav-item').forEach(btn => {

        btn.classList.toggle('active', btn.dataset.tab === tabName);

    });

    

    // Update pages

    $$('.page').forEach(page => {

        page.classList.remove('visible');

        if (page.dataset.page === tabName) {

            page.classList.add('visible');

        }

    });

}


function filterGames(category) {

    // Update active tab

    $$('.category-tab').forEach(btn => {

        btn.classList.toggle('active', btn.dataset.category === category);

    });

    

    // Filter game cards

    const gameCards = $$('.page[data-page="games"] .app-card');

    gameCards.forEach(card => {

        const appId = card.dataset.app;

        const app = APPS[appId];

        if (category === 'all') {

            card.style.display = '';

        } else {

            // For now, show all games in games page

            card.style.display = '';

        }

    });

}


// ==========================================================

// APP CARDS

// ==========================================================

function setupAppCards() {

    $$('.app-card, .featured-card').forEach(card => {

        card.addEventListener('click', () => {

            const appId = card.dataset.app;

            if (appId && APPS[appId]) {

                openAppDetails(appId);

            }

        });

    });

}


function openAppDetails(appId) {

    const app = APPS[appId];

    if (!app) return;

    

    state.expandedApp = appId;

    

    // Update overlay content

    $('#expanded-img').src = app.icon;

    $('#expanded-title').textContent = app.name;

    $('#expanded-developer').textContent = `Developed by ${app.developer}`;

    $('#about-main').textContent = app.description;

    $('#expanded-play-btn').href = app.url;

    

    // Update rating display

    updateExpandedRating(appId);

    

    // Update rating bars

    updateRatingBars(appId);

    

    // Update screenshots

    updateScreenshots(app);

    

    // Show overlay

    $('#app-overlay').classList.remove('hidden');

    $('#app-overlay').classList.add('visible');

    

    // Prevent body scroll

    document.body.style.overflow = 'hidden';

}


function updateExpandedRating(appId) {

    const app = APPS[appId];

    const rating = app.rating;

    const ratingCount = Object.keys(app.ratings).length;

    

    // Update stars

    const starsContainer = $('#expanded-stars');

    starsContainer.innerHTML = '';

    for (let i = 1; i <= 5; i++) {

        const star = document.createElement('span');

        star.innerHTML = `<svg viewBox="0 0 24 24" fill="${i <= rating ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">

            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>

        </svg>`;

        if (i > rating) star.classList.add('empty');

        starsContainer.appendChild(star);

    }

    

    // Update rating text

    const ratingText = $('#expanded-rating-text');

    const ratingCountEl = $('#expanded-rating-count');

    if (ratingCount > 0) {

        ratingText.textContent = rating.toFixed(1);

        ratingCountEl.textContent = `(${ratingCount} ratings)`;

    } else {

        ratingText.textContent = 'No ratings yet';

        ratingCountEl.textContent = '';

    }

}


function updateRatingBars(appId) {

    const app = APPS[appId];

    const ratings = app.ratings;

    const totalRatings = Object.keys(ratings).length;

    

    // Count ratings per star

    const ratingCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

    Object.values(ratings).forEach(r => {

        if (ratingCounts[r] !== undefined) {

            ratingCounts[r]++;

        }

    });

    

    // Update bars

    for (let i = 1; i <= 5; i++) {

        const count = ratingCounts[i];

        const percentage = totalRatings > 0 ? (count / totalRatings) * 100 : 0;

        const bar = $(`.rating-bar-fill[data-rating="${i}"]`);

        const countEl = $(`#count-${i}`);

        if (bar) bar.style.width = `${percentage}%`;

        if (countEl) countEl.textContent = count;

    }

}


function updateScreenshots(app) {

    const gallery = $('#screenshot-gallery');

    // For now, use app icon as placeholder for screenshots

    // In a real app, you'd have actual screenshot URLs

    gallery.innerHTML = '';

// ==========================================================

// MODALS

// ==========================================================

function setupModals() {

    // Close expanded view

    $('#close-expanded').addEventListener('click', closeExpandedView);

    $('#app-overlay').addEventListener('click', (e) => {

        if (e.target === $('#app-overlay')) {

            closeExpandedView();

        }

    });

    

    // Close rating modal

    $('#close-rating').addEventListener('click', closeRatingModal);

    $('#rating-modal').addEventListener('click', (e) => {

        if (e.target === $('#rating-modal')) {

            closeRatingModal();

        }

    });

    

    // Close login modal

    $('#close-login').addEventListener('click', closeLoginModal);

    $('#login-modal').addEventListener('click', (e) => {

        if (e.target === $('#login-modal')) {

            closeLoginModal();

        }

    });

    

    // Close signup modal

    $('#close-signup').addEventListener('click', closeSignupModal);

    $('#signup-modal').addEventListener('click', (e) => {

        if (e.target === $('#signup-modal')) {

            closeSignupModal();

        }

    });

    

    // Close developer login modal

    $('#close-developer-login').addEventListener('click', closeDeveloperLoginModal);

    $('#developer-login-modal').addEventListener('click', (e) => {

        if (e.target === $('#developer-login-modal')) {

            closeDeveloperLoginModal();

        }

    });

    

    // Switch between login/signup

    $('#switch-to-signup').addEventListener('click', () => {

        closeLoginModal();

        openSignupModal();

    });

    

    $('#switch-to-login').addEventListener('click', () => {

        closeSignupModal();

        openLoginModal();

    });

    

    // Login form

    $('#login-submit').addEventListener('click', handleLogin);

    

    // Signup form

    $('#signup-submit').addEventListener('click', handleSignup);

    

    // Auth buttons

    $('#login-button').addEventListener('click', openLoginModal);

    $('#signup-button').addEventListener('click', openSignupModal);

    

    // User logout

    $('#user-logout-btn').addEventListener('click', handleLogout);

    

    // Rate button

    $('#expanded-rate-btn').addEventListener('click', () => {

        if (state.currentUser) {

            openRatingModal(state.expandedApp);

        } else {

            showNotification('Please login to rate apps');

            openLoginModal();

        }

    });

    

    // Developer login

    $('#login-button').addEventListener('contextmenu', (e) => {

        e.preventDefault();

        openDeveloperLoginModal();

    });

    

    $('#developer-login-submit').addEventListener('click', handleDeveloperLogin);

    

    // Close developer dashboard

    $('#close-developer-dashboard').addEventListener('click', closeDeveloperDashboard);

    

    // Developer actions

    $('#submit-app').addEventListener('click', handleSubmitApp);

    $('#submit-comment').addEventListener('click', handleSubmitComment);

    

    // Keyboard navigation

    document.addEventListener('keydown', (e) => {

        if (e.key === 'Escape') {

            closeExpandedView();

            closeRatingModal();

            closeLoginModal();

            closeSignupModal();

            closeDeveloperLoginModal();

            closeDeveloperDashboard();

        }

    });

}


function closeExpandedView() {

    $('#app-overlay').classList.add('hidden');

    $('#app-overlay').classList.remove('visible');

    document.body.style.overflow = '';

    state.expandedApp = null;

}


function closeRatingModal() {

    $('#rating-modal').classList.add('hidden');

    $('#rating-modal').classList.remove('visible');

    state.currentRating = 0;

    updateStarInput(0);

    $('#submit-rating').disabled = true;

}


function openRatingModal(appId) {

    $('#rating-app-name').textContent = `How would you rate ${APPS[appId].name}?`;

    $('#rating-modal').classList.remove('hidden');

    $('#rating-modal').classList.add('visible');

    

    // Check if user already rated

    if (state.currentUser) {

        const existingRating = APPS[appId].ratings[state.currentUser.uid];

        if (existingRating) {

            state.currentRating = existingRating;

            updateStarInput(existingRating);

            $('#submit-rating').disabled = false;

        }

    }

}


function closeLoginModal() {

    $('#login-modal').classList.add('hidden');

    $('#login-modal').classList.remove('visible');

    $('#login-email').value = '';

    $('#login-password').value = '';

}


function openLoginModal() {

    $('#login-modal').classList.remove('hidden');

    $('#login-modal').classList.add('visible');

}


function closeSignupModal() {

    $('#signup-modal').classList.add('hidden');

    $('#signup-modal').classList.remove('visible');

    $('#signup-name').value = '';

    $('#signup-email').value = '';

    $('#signup-password').value = '';

}


function openSignupModal() {

    $('#signup-modal').classList.remove('hidden');

    $('#signup-modal').classList.add('visible');

}


function closeDeveloperLoginModal() {

    $('#developer-login-modal').classList.add('hidden');

    $('#developer-login-modal').classList.remove('visible');

    $('#developer-username').value = '';

    $('#developer-password').value = '';

    $('#developer-error').classList.remove('visible');

}


function openDeveloperLoginModal() {

    $('#developer-login-modal').classList.remove('hidden');

    $('#developer-login-modal').classList.add('visible');

}


function closeDeveloperDashboard() {

    $('#developer-dashboard').classList.add('hidden');

    $('#developer-dashboard').classList.remove('visible');

    document.body.style.overflow = '';

}


// ==========================================================

// RATING SYSTEM

// ==========================================================

function setupRatingSystem() {

    // Star rating input

    $$('.star-btn').forEach(btn => {

        btn.addEventListener('click', () => {

            const rating = parseInt(btn.dataset.rating);

            state.currentRating = rating;

            updateStarInput(rating);

            $('#submit-rating').disabled = false;

        });

        

        btn.addEventListener('mouseenter', () => {

            const rating = parseInt(btn.dataset.rating);

            updateStarInput(rating, true);

        });

    });

    

    $('#star-rating-input').addEventListener('mouseleave', () => {

        updateStarInput(state.currentRating);

    });

    

    // Submit rating

    $('#submit-rating').addEventListener('click', submitRating);

}


function updateStarInput(rating, hover = false) {

    $$('.star-btn').forEach(btn => {

        const btnRating = parseInt(btn.dataset.rating);

        btn.classList.toggle('active', btnRating <= rating);

    });

}


function submitRating() {

    if (!state.currentUser || !state.expandedApp || state.currentRating === 0) {

        return;

    }

    

    const app = APPS[state.expandedApp];

    app.ratings[state.currentUser.uid] = state.currentRating;

    

    // Recalculate average

    const ratings = Object.values(app.ratings);

    app.rating = ratings.reduce((a, b) => a + b, 0) / ratings.length;

    

    // Save to localStorage

    saveRatings();

    

    // Update displays

    updateExpandedRating(state.expandedApp);

    updateRatingDisplay(state.expandedApp);

    updateRatingBars(state.expandedApp);

    

    // Close modal

    closeRatingModal();

    

    showNotification('Rating submitted successfully!');

}


// ==========================================================

// AUTHENTICATION

// ==========================================================

function handleLogin() {

    const email = $('#login-email').value.trim();

    const password = $('#login-password').value;

    

    if (!email || !password) {

        showNotification('Please fill in all fields');

        return;

    }

    

    // Simulate login (in real app, use Firebase)

    const mockUser = {

        uid: 'user_' + Date.now(),

        email: email,

        displayName: email.split('@')[0]

    };

    

    state.currentUser = mockUser;

    localStorage.setItem('sawfish_user', JSON.stringify(mockUser));

    

    updateUserUI();

    closeLoginModal();

    showNotification(`Welcome back, ${mockUser.displayName}!`);

    

    console.log('User logged in:', mockUser);

}


function handleSignup() {

    const name = $('#signup-name').value.trim();

    const email = $('#signup-email').value.trim();

    const password = $('#signup-password').value;

    

    if (!name || !email || !password) {

        showNotification('Please fill in all fields');

        return;

    }

    

    // Simulate signup (in real app, use Firebase)

    const mockUser = {

        uid: 'user_' + Date.now(),

        email: email,

        displayName: name

    };

    

    state.currentUser = mockUser;

    localStorage.setItem('sawfish_user', JSON.stringify(mockUser));

    

    updateUserUI();

    closeSignupModal();

    showNotification(`Welcome to Sawfish App Store, ${name}!`);

    

    console.log('User signed up:', mockUser);

}


function handleLogout() {

    state.currentUser = null;

    localStorage.removeItem('sawfish_user');

    

    updateUserUI();

    showNotification('You have been logged out');

    

    console.log('User logged out');

}


function updateUserUI() {

    const profileSection = $('#user-profile-section');

    const authSection = $('#auth-buttons-section');

    const userDisplayName = $('#user-display-name');

    

    if (state.currentUser) {

        profileSection.classList.remove('hidden');

        authSection.classList.add('hidden');

        userDisplayName.textContent = state.currentUser.displayName;

    } else {

        profileSection.classList.add('hidden');

        authSection.classList.remove('hidden');

    }

}


// ==========================================================

// DEVELOPER FEATURES

// ==========================================================

function setupDeveloperFeatures() {

    // Developer apps table

    updateDeveloperAppsList();

}


function handleDeveloperLogin() {

    const username = $('#developer-username').value.trim();

    const password = $('#developer-password').value;

    

    // Simple mock authentication

    const developerCredentials = {

        username: 'admin',

        password: 'sawfish2024'

    };

    

    if (username === developerCredentials.username && password === developerCredentials.password) {

        closeDeveloperLoginModal();

        openDeveloperDashboard();

        showNotification('Developer login successful!');

    } else {

        $('#developer-error').textContent = 'Invalid credentials. Try username: admin, password: sawfish2024';

        $('#developer-error').classList.add('visible');

    }

}


function openDeveloperDashboard() {

    $('#developer-dashboard').classList.remove('hidden');

    $('#developer-dashboard').classList.add('visible');

    document.body.style.overflow = 'hidden';

    

    // Update stats

    updateDeveloperStats();

    updateDeveloperAppsList();

}


function updateDeveloperStats() {

    const totalApps = Object.keys(APPS).length;

    let totalRatings = 0;

    let ratingSum = 0;

    let totalComments = 5; // Mock value

    

    Object.values(APPS).forEach(app => {

        totalRatings += Object.keys(app.ratings).length;

        ratingSum += app.rating * Object.keys(app.ratings).length;

    });

    

    const avgRating = totalRatings > 0 ? (ratingSum / totalRatings).toFixed(1) : '—';

    

    $('#stat-total-apps').textContent = totalApps;

    $('#stat-total-ratings').textContent = totalRatings;

    $('#stat-avg-rating').textContent = avgRating;

    $('#stat-total-comments').textContent = totalComments;

}


function updateDeveloperAppsList() {

    const tbody = $('#developer-apps-list');

    tbody.innerHTML = '';

    

    Object.entries(APPS).forEach(([id, app]) => {

        const ratingCount = Object.keys(app.ratings).length;

        const row = document.createElement('tr');

        row.innerHTML = `

            <td>${app.name}</td>

            <td>${id}</td>

            <td>${ratingCount}</td>

            <td>${app.rating > 0 ? app.rating.toFixed(1) : '—'}</td>

            <td>

                <button class="developer-action-btn edit">Edit</button>

                <button class="developer-action-btn delete">Delete</button>

            </td>

        `;

        tbody.appendChild(row);

    });

}


function handleSubmitApp() {

    const name = $('#app-name').value.trim();

    const url = $('#app-url').value.trim();

    const description = $('#app-description').value.trim();

    const category = $('#app-category').value;

    

    if (!name || !url || !description || !category) {

        showNotification('Please fill in all fields');

        return;

    }

    

    // Mock app submission

    const appId = name.toLowerCase().replace(/\s+/g, '');

    

    APPS[appId] = {

        name: name,

        description: description,

        url: url,

        icon: 'icons/default.png',

        developer: state.currentUser?.displayName || 'Unknown',

        rating: 0,

        ratings: {},

        featured: false,

        featuredImage: null,

        screenshots: []

    };

    

    showNotification(`App "${name}" submitted for review!`);

    

    // Clear form

    $('#app-name').value = '';

    $('#app-url').value = '';

    $('#app-description').value = '';

    $('#app-category').value = '';

    

    updateDeveloperStats();

    updateDeveloperAppsList();

}


function handleSubmitComment() {

    const comment = $('#comment-text').value.trim();

    

    if (!comment) {

        showNotification('Please enter a comment');

        return;

    }

    

    // Mock comment submission

    showNotification('Comment submitted successfully!');

    $('#comment-text').value = '';

}


// ==========================================================

// WELCOME POPUP

// ==========================================================

function setupWelcomePopup() {

    const continueBtn = $('#welcome-continue');

    

    // Show popup on every page load/login (not just first time)

    // Use sessionStorage to show once per browser session

    const hasSeenPopup = sessionStorage.getItem('sawfish_popup_seen');

    

    if (!hasSeenPopup) {

        $('#welcome-popup').classList.remove('hidden');

        $('#welcome-popup').classList.add('visible');

        document.body.style.overflow = 'hidden';

    }

    

    // Continue button - just closes the popup

    continueBtn.addEventListener('click', () => {

        $('#welcome-popup').classList.add('hidden');

        $('#welcome-popup').classList.remove('visible');

        document.body.style.overflow = '';

        sessionStorage.setItem('sawfish_popup_seen', 'true');

    });

}


// ==========================================================

// SIDEBAR

// ==========================================================

function setupSidebar() {

    const toggleBtn = $('#sidebar-toggle');

    const sidebar = $('#sidebar-nav');

    

    // Check for saved state

    const isCollapsed = localStorage.getItem('sawfish_sidebar_collapsed') === 'true';

    if (isCollapsed) {

        sidebar.classList.add('collapsed');

    }

    

    // Toggle button click

    toggleBtn.addEventListener('click', () => {

        sidebar.classList.toggle('collapsed');

        const collapsed = sidebar.classList.contains('collapsed');

        localStorage.setItem('sawfish_sidebar_collapsed', collapsed);

    });

    

    // Make nav items work when collapsed

    $$('.nav-item').forEach(btn => {

        btn.addEventListener('click', () => {

            // Navigation is handled by switchTab in setupNavigation

            // This just ensures the click works in collapsed mode

        });

    });

}


// ==========================================================

// RATINGS STORAGE

// ==========================================================

function loadRatings() {

    try {

        const stored = localStorage.getItem('sawfish_ratings');

        if (stored) {

            const ratings = JSON.parse(stored);

            // Merge stored ratings with app data

            Object.entries(ratings).forEach(([appId, appRatings]) => {

                if (APPS[appId]) {

                    APPS[appId].ratings = appRatings;

                    // Recalculate average

                    const values = Object.values(appRatings);

                    if (values.length > 0) {

                        APPS[appId].rating = values.reduce((a, b) => a + b, 0) / values.length;

                    }

                }

            });

        }

        

        // Update all rating displays

        Object.keys(APPS).forEach(appId => {

            updateRatingDisplay(appId);

        });

    } catch (e) {

        console.error('Error loading ratings:', e);

    }

}


function saveRatings() {

    try {

        const ratings = {};

        Object.entries(APPS).forEach(([appId, app]) => {

            if (Object.keys(app.ratings).length > 0) {

                ratings[appId] = app.ratings;

            }

        });

        localStorage.setItem('sawfish_ratings', JSON.stringify(ratings));

    } catch (e) {

        console.error('Error saving ratings:', e);

    }

}


function updateRatingDisplay(appId) {

    const app = APPS[appId];

    const ratingValueEl = $(`.rating-value[data-avg-rating="${appId}"]`);

    if (ratingValueEl) {

        if (app.rating > 0) {

            ratingValueEl.textContent = app.rating.toFixed(1);

        } else {

            ratingValueEl.textContent = '—';

        }

    }

}


// ==========================================================

// UPDATES

// ==========================================================

function checkForUpdates() {

    const updateStatus = $('#update-status');

    const updateAction = $('#update-action');

    const btnText = updateAction.querySelector('.btn-text');

    const currentVersion = APP_CONFIG.version;

    

    // Mock update checking

    updateStatus.textContent = 'Checking for updates...';

    

    setTimeout(() => {

        // In a real app, check against server

        const latestVersion = '2.0.0';

        

        if (currentVersion === latestVersion) {

            updateStatus.textContent = 'Up to date';

            btnText.textContent = 'Up to date';

            updateAction.disabled = true;

        } else {

            updateStatus.textContent = 'Update available';

            btnText.textContent = 'Update';

        }

    }, 1500);

}


// ==========================================================

// UTILITY FUNCTIONS

// ==========================================================

function updateDateDisplay() {

    const dateEl = $('#install-date');

    if (dateEl) {

        const now = new Date();

        dateEl.textContent = now.toLocaleDateString('en-US', {

            year: 'numeric',

            month: 'long',

            day: 'numeric'

        });

    }

}


function scrollToSection(section) {

    switchTab(section);

    const sectionEl = $(`[data-page="${section}"]`);

    if (sectionEl) {

        sectionEl.scrollIntoView({ behavior: 'smooth' });

    }

}


function showNotification(message) {

    const notification = $('#notification');

    notification.textContent = message;

    notification.classList.remove('hidden');

    

    setTimeout(() => {

        notification.classList.add('hidden');

    }, 3000);

}


// ==========================================================

// SERVICE WORKER REGISTRATION

// ==========================================================

if ('serviceWorker' in navigator) {

    window.addEventListener('load', () => {

        navigator.serviceWorker.register('./service-worker.js')

            .then(registration => {

                console.log('ServiceWorker registered:', registration.scope);

            })

            .catch(error => {

                console.log('ServiceWorker registration failed:', error);

            });

    });

}


// ==========================================================

// END OF JAVASCRIPT

// ==========================================================
