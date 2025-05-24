const games = [
    // Nấu ăn
    { name: "Niu Cafe", category: "Nấu ăn", link: "nấu ăn.html" },
    { name: "Grandma Recipe Ramen", category: "Nấu ăn", link: "nấu ăn.html" },
    { name: "Dessert DIY", category: "Nấu ăn", link: "nấu ăn.html" },
    { name: "Roxie's Kitchen: Birthday Cake", category: "Nấu ăn", link: "nấu ăn.html" },
    { name: "Làm bánh cupcake socola mâm xôi", category: "Nấu ăn", link: "nấu ăn.html" },
    { name: "Mia Cooking Sushi", category: "Nấu ăn", link: "nấu ăn.html" },
    { name: "Cooking Pizza Pockets", category: "Nấu ăn", link: "nấu ăn.html" },
    { name: "Cooking Gyros on The Beach", category: "Nấu ăn", link: "nấu ăn.html" },
    { name: "Sofia Cooking Princess Cake", category: "Nấu ăn", link: "nấu ăn.html" },
    { name: "Cooking Show: Cheese Omelette", category: "Nấu ăn", link: "nấu ăn.html" },
    { name: "Tom Family Cooking Pancakes", category: "Nấu ăn", link: "nấu ăn.html" },
    { name: "Explore Cooking With Dora", category: "Nấu ăn", link: "nấu ăn.html" },
    // Thời trang
    { name: "Thời trang nữ sinh trung học", category: "Thời trang", link: "thời trang.html" },
    { name: "Sailor Girl 2", category: "Thời trang", link: "thời trang.html" },
    { name: "Thời trang búp bê", category: "Thời trang", link: "thời trang.html" },
    { name: "Barbie Mermaid Dress Up", category: "Thời trang", link: "thời trang.html" },
    { name: "Mia And Wendy Shopping", category: "Thời trang", link: "thời trang.html" },
    { name: "Thời trang giáng sinh 1", category: "Thời trang", link: "thời trang.html" },
    { name: "Amy Last Angel Dress Up", category: "Thời trang", link: "thời trang.html" },
    { name: "Kimono Cutie Dress Up", category: "Thời trang", link: "thời trang.html" },
    { name: "Ariel Princess Winx Style", category: "Thời trang", link: "thời trang.html" },
    { name: "Wedding Lily", category: "Thời trang", link: "thời trang.html" },
    { name: "Barbie Colorful Swimsuits Dress Up", category: "Thời trang", link: "thời trang.html" },
    { name: "Barbie Halloween Dress Up", category: "Thời trang", link: "thời trang.html" },
    // Trang điểm
    { name: "Autumn Bride Makeover", category: "Trang điểm", link: "trang điểm.html" },
    { name: "Barbie Selfie Make Up", category: "Trang điểm", link: "trang điểm.html" },
    { name: "Bậc thầy trang điểm", category: "Trang điểm", link: "trang điểm.html" },
    { name: "Anna's Frozen Spa", category: "Trang điểm", link: "trang điểm.html" },
    { name: "Enchanted Unicorn Spa", category: "Trang điểm", link: "trang điểm.html" },
    { name: "Design Elsa Halloween Costume", category: "Trang điểm", link: "trang điểm.html" },
    { name: "Trang điểm ngày 8/3", category: "Trang điểm", link: "trang điểm.html" },
    { name: "Sofia Real Makeover", category: "Trang điểm", link: "trang điểm.html" },
    { name: "Meow Dress Up", category: "Trang điểm", link: "trang điểm.html" },
    { name: "Flower Fairy Makeup Tutorial", category: "Trang điểm", link: "trang điểm.html" },
    { name: "Hóa trang Carnival", category: "Trang điểm", link: "trang điểm.html" },
    { name: "Barbara Makeup Time", category: "Trang điểm", link: "trang điểm.html" },
    // Thể thao
    { name: "8 Ball Billiards Classic", category: "Thể thao", link: "thể thao.html" },
    { name: "Toon Cup 2016", category: "Thể thao", link: "thể thao.html" },
    { name: "Table Tennis- World Tour", category: "Thể thao", link: "thể thao.html" },
    { name: "Archery Master", category: "Thể thao", link: "thể thao.html" },
    { name: "Hurdles", category: "Thể thao", link: "thể thao.html" },
    { name: "Table Tennis Ultra Mega Tournament", category: "Thể thao", link: "thể thao.html" },
    { name: "Rugby Run 2023", category: "Thể thao", link: "thể thao.html" },
    { name: "Penalty Shooters 2", category: "Thể thao", link: "thể thao.html" },
    { name: "ABasketball", category: "Thể thao", link: "thể thao.html" },
    { name: "Home Run Master", category: "Thể thao", link: "thể thao.html" },
    { name: "Blumgi Ball", category: "Thể thao", link: "thể thao.html" },
    { name: "Power Badminton", category: "Thể thao", link: "thể thao.html" },
    // Trí tuệ
    { name: "Minecraft", category: "Trí tuệ", link: "trí tuệ.html" },
    { name: "Hangman", category: "Trí tuệ", link: "trí tuệ.html" },
    { name: "Master Chess", category: "Trí tuệ", link: "trí tuệ.html" },
    { name: "Math Puzzles", category: "Trí tuệ", link: "trí tuệ.html" },
    { name: "Relaxing Bus Trip", category: "Trí tuệ", link: "trí tuệ.html" },
    { name: "Unpuzzle", category: "Trí tuệ", link: "trí tuệ.html" },
    { name: "Save The Doge 2", category: "Trí tuệ", link: "trí tuệ.html" },
    { name: "MaZe", category: "Trí tuệ", link: "trí tuệ.html" },
    { name: "Balls Shooter", category: "Trí tuệ", link: "trí tuệ.html" },
    { name: "The Big Quiz", category: "Trí tuệ", link: "trí tuệ.html" },
    { name: "Word Cross", category: "Trí tuệ", link: "trí tuệ.html" },
    { name: "Quiz X", category: "Trí tuệ", link: "trí tuệ.html" },
    // Đua xe
    { name: "City Car Stunt 3", category: "Đua xe", link: "đua xe.html" },
    { name: "Furious Racing 3D", category: "Đua xe", link: "đua xe.html" },
    { name: "Neon Biker", category: "Đua xe", link: "đua xe.html" },
    { name: "Moto Obby", category: "Đua xe", link: "đua xe.html" },
    { name: "Taxi Driver Simulator", category: "Đua xe", link: "đua xe.html" },
    { name: "Grand Vegas Simulator", category: "Đua xe", link: "đua xe.html" },
    { name: "Moto X3M Winter", category: "Đua xe", link: "đua xe.html" },
    { name: "4X4 Off Road Rally 3D", category: "Đua xe", link: "đua xe.html" },
    { name: "Mighty Motors", category: "Đua xe", link: "đua xe.html" },
    { name: "Freestyle Racing", category: "Đua xe", link: "đua xe.html" },
    { name: "Russian Drift: Overtaking in the City", category: "Đua xe", link: "đua xe.html" },
    { name: "Monster Truck Mountain Climb", category: "Đua xe", link: "đua xe.html" },
    // Hành động
    { name: "Among Us", category: "Hành động", link: "hành động.html" },
    { name: "Valorant", category: "Hành động", link: "hành động.html" },
    { name: "Warzone Getaway 2020", category: "Hành động", link: "hành động.html" },
    { name: "Tomb Runner", category: "Hành động", link: "hành động.html" },
    { name: "BMO: Play Along with Me", category: "Hành động", link: "hành động.html" },
    { name: "Fireboy and Watergirl in the Ice Temple", category: "Hành động", link: "hành động.html" },
    { name: "Rise of the Dead", category: "Hành động", link: "hành động.html" },
    { name: "Arcane Archer", category: "Hành động", link: "hành động.html" },
    { name: "Rail Slide", category: "Hành động", link: "hành động.html" },
    { name: "Genshin Impact", category: "Hành động", link: "hành động.html" },
    { name: "Parkour Craft", category: "Hành động", link: "hành động.html" },
    { name: "Black Meow Ninja", category: "Hành động", link: "hành động.html" },
    // Kinh dị
    { name: "Zombie Sacrifice", category: "Kinh dị", link: "kinh dị.html" },
    { name: "The Malevolent Mansion of Evil", category: "Kinh dị", link: "kinh dị.html" },
    { name: "Slendrina Must Die: The School", category: "Kinh dị", link: "kinh dị.html" },
    { name: "The House Of Evil Granny", category: "Kinh dị", link: "kinh dị.html" },
    { name: "Forest Monsters", category: "Kinh dị", link: "kinh dị.html" },
    { name: "Darkness in spaceship", category: "Kinh dị", link: "kinh dị.html" },
    { name: "Jeff The Killer - Horrendous Smile", category: "Kinh dị", link: "kinh dị.html" },
    { name: "Shoot Your Nightmare: The Beginning", category: "Kinh dị", link: "kinh dị.html" },
    { name: "Zombie Island 3D", category: "Kinh dị", link: "kinh dị.html" },
    { name: "Toys Shooter: You Vs Zombies", category: "Kinh dị", link: "kinh dị.html" },
    { name: "Ghost City", category: "Kinh dị", link: "kinh dị.html" },
    { name: "Cave War", category: "Kinh dị", link: "kinh dị.html" },
];

console.log("Trang giao diện Pogo đơn giản đã tải xong.");

// Hàm chuẩn hóa chuỗi (bỏ dấu, ký tự đặc biệt, khoảng trắng thừa)
function normalizeString(str) {
    if (!str) return "";
    return str
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // Bỏ dấu
        .replace(/[^a-z0-9\s]/g, "") // Bỏ ký tự đặc biệt
        .replace(/\s+/g, " ") // Chuẩn hóa khoảng trắng
        .trim();
}

// Slider tự động
var counter = 1;
setInterval(function () {
    const radio = document.getElementById('radio' + counter);
    if (radio) {
        radio.checked = true;
        counter++;
        if (counter > 4) counter = 1;
    }
}, 5000);

// Quản lý trạng thái đăng nhập và toggle menu
document.addEventListener("DOMContentLoaded", function () {
    const trangThai = sessionStorage.getItem("trangthai");
    const tenDangNhap = sessionStorage.getItem("tk");

    const btnDangNhap = document.getElementById("btn-dang-nhap");
    const btnDangKy = document.getElementById("btn-dang-ky");
    const btnDangXuat = document.getElementById("btn-dang-xuat");
    const chaoMung = document.getElementById("chao-mung");

    if (trangThai === "hien" && tenDangNhap) {
        if (btnDangNhap) btnDangNhap.style.display = "none";
        if (btnDangKy) btnDangKy.style.display = "none";
        if (btnDangXuat) btnDangXuat.style.display = "inline";
        if (chaoMung) chaoMung.innerText = "Chào, " + tenDangNhap;
    } else {
        if (btnDangNhap) btnDangNhap.style.display = "inline";
        if (btnDangKy) btnDangKy.style.display = "inline";
        if (btnDangXuat) btnDangXuat.style.display = "none";
        if (chaoMung) chaoMung.innerText = "";
    }

    if (btnDangXuat) {
        btnDangXuat.addEventListener("click", function () {
            sessionStorage.clear();
            alert("Đăng xuất thành công!");
            location.reload();
        });
    }

    // Toggle menu trên di động
    const hamburger = document.getElementById("hamburger-menu");
    const headCenter = document.querySelector(".head-center");
    if (hamburger && headCenter) {
        hamburger.addEventListener("click", () => headCenter.classList.toggle("show"));
    }

    // Toggle dropdown thể loại và chế độ
    const genreBtn = document.querySelector(".genre-btn");
    const modeBtn = document.querySelector(".mode-btn");
    const genreContent = document.querySelector(".genre-content");
    const modeContent = document.querySelector(".mode-content");
    if (genreBtn && genreContent) {
        genreBtn.addEventListener("click", () => genreContent.classList.toggle("show"));
    }
    if (modeBtn && modeContent) {
        modeBtn.addEventListener("click", () => modeContent.classList.toggle("show"));
    }

    // Toggle thanh tìm kiếm trên di động
    const searchToggle = document.getElementById('search-toggle');
    const searchInput = document.getElementById('search-input');
    if (searchToggle && searchInput) {
        searchToggle.addEventListener('click', function() {
            searchInput.classList.toggle('active');
            if (searchInput.classList.contains('active')) {
                searchInput.focus();
            }
        });
    }
});

// Hàm tìm kiếm
function searchGames() {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) {
        console.error("Không tìm thấy #search-input. Kiểm tra HTML có input với id='search-input' không.");
        return;
    }
    const query = normalizeString(searchInput.value);
    console.log("Từ khóa tìm kiếm:", query);

    const gameGrid = document.querySelector('.game-grid');
    if (!gameGrid) {
        console.error("Không tìm thấy .game-grid. Kiểm tra HTML có div với class='game-grid' không.");
        return;
    }

    const gameCards = document.querySelectorAll('.game-card');
    if (gameCards.length === 0) {
        console.warn("Không tìm thấy .game-card. Kiểm tra HTML có div với class='game-card' trong .game-grid không.");
    }
    console.log("Số game-card tìm thấy:", gameCards.length);

    // Danh sách thể loại
    const categoryLinks = {
        "nấu ăn": "nấu ăn.html",
        "thời trang": "thời trang.html",
        "trang điểm": "trang điểm.html",
        "đua xe": "đua xe.html",
        "hành động": "hành động.html",
        "kinh dị": "kinh dị.html",
        "trí tuệ": "trí tuệ.html",
        "thể thao": "thể thao.html"
    };

    // Kiểm tra nếu nhập từ khóa thể loại
    const normalizedCategoryLinks = {};
    for (const key in categoryLinks) {
        normalizedCategoryLinks[normalizeString(key)] = categoryLinks[key];
    }
    if (normalizedCategoryLinks[query]) {
        console.log("Tìm thấy thể loại. Chuyển hướng đến:", normalizedCategoryLinks[query]);
        window.location.href = normalizedCategoryLinks[query];
        return;
    }

    // Lọc game từ mảng games
    const results = games.filter(game => normalizeString(game.name).includes(query));
    console.log("Kết quả lọc từ mảng games:", results);

    let hasResults = false;
    gameCards.forEach((card, index) => {
        const gameNameElement = card.querySelector('.game-info p');
        if (!gameNameElement) {
            console.warn(`Không tìm thấy .game-info p trong game-card thứ ${index + 1}:`, card);
            card.style.display = 'none';
            return;
        }
        const rawGameName = gameNameElement.textContent; // Giữ nguyên tên gốc để debug
        const gameName = normalizeString(rawGameName);
        console.log(`Tên game gốc trong game-card thứ ${index + 1}:`, rawGameName);
        console.log(`Tên game chuẩn hóa trong game-card thứ ${index + 1}:`, gameName);
        if (results.some(game => normalizeString(game.name) === gameName)) {
            card.style.display = 'block';
            hasResults = true;
            console.log(`Khớp game-card thứ ${index + 1}:`, gameName);
        } else {
            card.style.display = 'none';
        }
    });

    // Hiển thị thông báo nếu không tìm thấy
    let noResultsDiv = document.getElementById('no-results');
    if (!noResultsDiv) {
        noResultsDiv = document.createElement('div');
        noResultsDiv.id = 'no-results';
        gameGrid.appendChild(noResultsDiv);
    }
    if (!hasResults && query) {
        noResultsDiv.innerHTML = '<p style="color: #e0e0e0; text-align: center; padding: 20px;">Không tìm thấy kết quả.</p>';
        noResultsDiv.style.display = 'block';
    } else {
        noResultsDiv.style.display = 'none';
    }
}

// Gõ Enter để tìm
document.getElementById('search-input')?.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchGames();
    }
});

// Tìm kiếm theo thời gian thực
document.getElementById('search-input')?.addEventListener('input', function() {
    searchGames();
});