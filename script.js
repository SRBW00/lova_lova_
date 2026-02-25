// Конфигурация альбомов
const albums = {
    kurgan: {
        name: 'Курган',
        folder: 'https://res.cloudinary.com/diqfvgfo3/image/upload/v1771873617',
        photos: ['1_glioca', '10_i5txzw', '12_qt3bni', '13_pmphnn', '16_gyo2ns', '17_guka4e', '2_xla1gd', '20_kqrrqg', '41_wkt4sh', '42_vqre3t', '43_j5if9e', '5_bofudc', '6_dx1qhd', '7_jci2rf', '8_mmekqi', '9_skydbm', 'IMG_1052_zurrkx', 'IMG_1053_nzs0tn', 'IMG_1055_iwvzbb', 'IMG_1063_h0xlcy', 'IMG_1067_jhljxn', 'IMG_1068_qsikep', 'IMG_1078_zw0u9y', 'IMG_1080_nrnyfp', 'IMG_1086_nul8b0', 'IMG_1088_irt6zp', 'IMG_1097_qnwfzm', 'IMG_1104_mnunav', 'IMG_1115_wwvbzw', 'IMG_1117_rbgire', 'IMG_1127_lnqb3j', 'IMG_1130_yhhnuc', 'IMG_1154_kdvnoe', 'IMG_1155_uyadoj', 'IMG_1157_jyadd0', 'IMG_1184_mqvddv', 'IMG_1186_o42mge', 'IMG_1217_umkwnr', 'IMG_1218_jb0qca', 'IMG_1247_xgpyzt', 'IMG_1263_ldpq5r', 'IMG_1267_ih1sli', 'IMG_1272_tjw5ha', 'IMG_1273_fc08wb', 'IMG_1298_gybqfc', 'IMG_1311_npxl0g', 'IMG_1338_syrx42', 'IMG_1344_izxtlv', 'IMG_1352_mti9k9', 'IMG_1355_w271j5', 'IMG_1365_tzxgym', 'IMG_1375_ua3afx', 'IMG_1384_xs98sd', 'IMG_1390_aw29f2', 'IMG_1394_atnhyb', 'IMG_1401_lxs61u', 'IMG_1514_pglfcr', 'IMG_1531_ai5e8z', 'IMG_1544_hpnylc', 'IMG_1557_cweyjr', 'IMG_1564_lnpzf5', 'IMG_1600_lm5kko', 'IMG_2175_p8r7qe']
    },
    tyumen: {
        name: 'Тюмень',
        folder: 'https://res.cloudinary.com/diqfvgfo3/image/upload/v1771873617',
        photos: ['1_rrhc5s', '2_bhmqmm', '14_l32oen', '16_yy4pg6', '19_ebuwlz', '20_pwvx3g', '21_pltpq8', '3_lqvphc', '4_erxjnc', '47_ekfaqh', '48_r3bazr', '58_yv0uyb', '59_rwnarb', '60_gusk1f', '61_mf74gw', '62_ibosic', '63_cuma1y', '64_hianzf', '65_lygq5g', '66_lfo3zq', '67_p6jkcq', '68_cyubwt', '69_xplbro', '70_aegi0m', '71_uwqqke', '72_hbu8xk']
    },
    dolmatovo: {
        name: 'Долматово',
        folder: 'https://res.cloudinary.com/diqfvgfo3/image/upload/v1771873617',
        photos: ['IMG_1425_a3efrx', 'IMG_1437_aricwn', 'IMG_1438_t79rgd', 'IMG_1445_e65bx1', 'IMG_1450_wd4xmg', 'IMG_1458_yloeey', 'IMG_1461_fuan0e', 'IMG_1465_tit6a7', 'IMG_1473_gcifcj', 'IMG_1490_t5cm3f', 'IMG_1491_mipanv']
    },
    wedding: {
        name: 'Свадьба',
        folder: 'https://res.cloudinary.com/diqfvgfo3/image/upload/v1771873617',
        photos: ['0001_uskgvf.jpg', '0002_n52jva.jpg', '0003_wnz5ky.jpg', '0004_z9llps.jpg', '0005_ecp24t.jpg', '0006_wf4fje', '0007_joxo2k', '0008_fyb9hm', '0009_iblbf8', '0010_utz5fv', '0011_jig9fd', '0012_yhyaw7', '0013_qdwmc7', '0014_ukjniy', '0015_jiaqey', '0016_ifrrhl', '0017_ivhvwg', '0018_jnjgxb', '0019_wysupj', '0020_cstebx', '0021_ce7yk1', '0022_muxobt', '0023_aean5b', '0024_pfkyd7', '0025_ribm3f', '0026_geef9n', '0027_pddm6n', '0028_jr4sk3', '0029_zwwpn7', '0030_oc3h0q', '0031_eny8tl', '0032_cdekvx', '0033_vrrcs9', '0034_z0vw2d', '0035_nomxem', '0036_q9o6hj', '0037_ffwudp', '0038_llqgjo', '0039_zrgwcj', '0040_mhp6tf', '0041_jzrse2', '0042_domebu', '0043_kwplhu', '0044_kycyvb', '0045_mpeeia', '0046_gqjstx', '0047_v6ousq', '0048_gwq9a3', '0049_ut9uvx', '0050_ny4qnq', '0051_abslgr', '0052_hcxdjn', '0053_wvis3k', '0054_ghct2v', '0055_xdfucz', '0056_dz2snn', '0057_psw4mb', '0058_w3cwly', '0059_por1ve', '0060_izycrn', '0061_lwlurg', '0062_hcg4jo', '0063_ccuvsn', '0064_rn5ipt', '0065_tt44w9', '0066_qdbiqg', '0067_w3zd4a', '0068_qwykl1', '0069_l8cmny', '0070_d6tfrm', '0071_d71urd', '0072_dyhcch', '0073_t2g9r9', '0074_bcwbw2', '0075_nkwlbw', '0076_ogc0mz', '0077_qxiy06', '0078_jdlhsw', '0079_scykdt', '0080_jqcc7t', '0081_gmyuiq', '0082_etdakl', '0083_buqrgw', '0084_mtipq3', '0085_svyw2n', '0086_iupsm9', '0087_achmgv', '0088_lr7qep', '0089_k13rkk', '0090_mlabz3', '0091_zwetyw', '0092_cmwn6t', '0093_sar61v', '0094_zua2tb', '0095_xjbcmj', '0096_fci9v9', '0097_idpfyq', '0098_m4zc4b', '0099_pq0iwe', '0100_ng6ynf', '0101_xlhovm', '0102_xbtcpj', '0103_mfvp2w', '0104_sitoti', '0105_vemx1g', '0106_refwsv', '0107_wiaist', '0108_nkwy94', '0109_vketl7', '0110_oc3cyu', '0111_ecepxj', '0112_wieood', '0113_p6exib', '0114_yg9qlg', '0115_lqvgfl', '0116_b62efi', '0117_kpvpxv', '0118_fwz7xh', '0119_a2e1ma', '0120_stcrs7', '0121_jc9qbb', '0122_fcmpql', '0123_ur1eu0', '0124_pfdal5', '0125_msy7xl', '0126_q3wbcj', '0127_mmmjqv', '0128_zmuh6u', '0129_frzawx', '0130_schz4n', '0131_izsl7d', '0132_krgz9f', '0133_uqj5vd', '0134_at0scw', '0135_srrvnj', '0136_gzzado', '0137_lohhre', '0138_b2nmjd', '0139_agsfzl', '0140_vsrqtx', '0141_xcyfu4', '0142_qxqwff', '0143_nfyopi', '0144_xhqtm7', '0145_xoahoo', '0146_htx8qf', '0147_ejjtxa', '0148_ielz76', '0149_c4oxcc', '0150_hqa2yp', '0151_hiemy6', '0152_cmne3d', '0153_t5fhpf', '0154_yfxksx', '0155_vvjtls', '0156_yrgolm', '0157_ep4hdy', '0158_agynzl', '0159_iwe2tr', '0160_imjrjh', '0161_qkjzdk', '0162_mqgfz2', '0163_lbodd0', '0164_aeanwx', '0165_f6u2dt', '0166_lpnpit', '0167_j26xh6', '0168_o3k5iq', '0169_ggtn4j', '0170_mpzpxm', '0171_juwtq7', '0172_dsgmqe', '0173_noa6eu', '0174_mfbvh5', '0175_s1olwi', '0176_n4karn', '0177_kxwchb', '0178_y1l21w', '0179_o7nm9r', '0180_atbxkq', '0181_upnyeh', '0182_aetjbo', '0183_yidscj', '0184_hes5cc', '0185_hxixlb', '0186_jgmv7x', '0187_bteytn', '0188_pqjpce', '0189_fuxz3p', '0190_xo4gsw']
    },
    other: {
        name: 'Невошедшее',
        folder: 'photos/Невошедшее',
        photos: ['5436068101876743088_121.jpg', '5436101349218580697_121.jpg']
    }
};

// Дата начала отношений (измените на вашу дату)
const relationshipStartDate = new Date('2024-08-25');

// ============================================
// КОНФИГУРАЦИЯ ВАЖНЫХ ДАТ
// ============================================
const importantDates = {
    met: new Date('2018-10-26'),      // Дата знакомства
    dating: new Date('2024-08-25'),   // Дата начала отношений
    wedding: new Date('2025-05-15')   // Дата свадьбы
};

// ============================================
// ЗАПИСКИ В КОНВЕРТЫ (отредактируйте текст здесь)
// ============================================
const notes = {
    met: {
        his: `Здесь будет ваша записка о дне знакомства...\n\nНапишите свои воспоминания о том, как вы познакомились.`,
        her: `Здесь будет её записка о дне знакомства...\n\nОна сможет написать свои воспоминания об этом дне.`
    },
    dating: {
        his: `Здесь будет ваша записка о начале отношений...\n\nОпишите ваши чувства и воспоминания о том дне, когда вы начали встречаться.`,
        her: `Здесь будет её записка о начале отношений...\n\nЕё воспоминания о том, как всё начиналось.`
    },
    wedding: {
        his: `Здесь будет ваша записка о дне свадьбы...\n\nВаши эмоции, чувства и воспоминания о самом важном дне.`,
        her: `Здесь будет её записка о дне свадьбы...\n\nЕё воспоминания о свадебном дне.`
    }
};

// ============================================
// ЛЮБИМЫЕ ФРАЗЫ (добавляйте новые фразы сюда)
// ============================================
const favoritePhrases = [
    'Додох',
    'Я когда тороплюсь, я бегаю',
    'Чмоня',
    'Не щёлкай хлебальничком',
		'Мы посовещались и я решила',
		'Кот сдохнула',
		'Переговоры вознабнаблят',
		'Чехоле'
];

// Текущее состояние
let currentAlbum = null;
let currentPhotos = [];
let currentIndex = 0;

// DOM элементы
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxCounter = document.getElementById('lightbox-counter');
const lightboxProgress = document.getElementById('lightbox-progress');
const lightboxThumbnails = document.getElementById('lightbox-thumbnails');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxPrev = document.querySelector('.lightbox-prev');
const lightboxNext = document.querySelector('.lightbox-next');

// Текущее состояние для записок
let currentNoteDate = null;

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    loadAllAlbums();
    setupNavigation();
    setupLightbox();
    updateYear();
    updateDaysCounter();
    setupScrollAnimations();
    setupParallax();
    updateImportantDates();
    loadFavoritePhrases();
});

// Создание частиц для hero-секции
function createParticles() {
    const particlesContainer = document.getElementById('hero-particles');
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 15 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 10;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        
        particlesContainer.appendChild(particle);
    }
}

// Счётчик дней вместе
function updateDaysCounter() {
    const daysElement = document.getElementById('days-count');
    if (!daysElement) return;

    const today = new Date();
    const diffTime = Math.abs(today - relationshipStartDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    // Анимация счётчика
    animateCounter(daysElement, 0, diffDays, 2000);
}

function animateCounter(element, start, end, duration) {
    const range = end - start;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(start + range * easeOutQuart);
        
        element.textContent = current.toLocaleString('ru-RU');
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

// Fade-in анимация при скролле
function setupScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-section').forEach(section => {
        observer.observe(section);
    });
}

// Параллакс эффект для hero
function setupParallax() {
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        if (hero && heroContent && scrolled < hero.offsetHeight) {
            heroContent.style.transform = `translate(-50%, calc(-50% + ${scrolled * 0.3}px))`;
            heroContent.style.opacity = 1 - (scrolled / hero.offsetHeight);
        }
    });
}

// Загрузка всех альбомов
function loadAllAlbums() {
    for (const [key, album] of Object.entries(albums)) {
        loadAlbum(key, album);
    }
}

// Загрузка альбома
function loadAlbum(albumKey, album) {
    const gridElement = document.getElementById(`grid-${albumKey}`);
    const countElement = document.getElementById(`count-${albumKey}`);

    if (!gridElement) return;

    const photos = album.photos.map(filename => ({
        src: `${album.folder}/${filename}`,
        name: decodeURIComponent(filename.replace(/\.[^.]+$/, ''))
    }));

    // Обновляем счётчик
    if (countElement) {
        countElement.textContent = `${photos.length} фото`;
    }

    // Сохраняем фото для альбома
    window[`photos_${albumKey}`] = photos;

    // Рендерим миниатюры
    renderPhotos(gridElement, photos, albumKey);
}

// Рендеринг фотографий
function renderPhotos(container, photos, albumKey) {
    container.innerHTML = '';

    if (photos.length === 0) {
        container.innerHTML = `
            <div class="empty-album">
                <p>📷 Добавьте фотографии в папку <strong>photos/${albums[albumKey].name}</strong></p>
            </div>
        `;
        return;
    }

    photos.forEach((photo, index) => {
        const item = document.createElement('div');
        item.className = 'photo-item fade-in-section';
        item.innerHTML = `
            <img src="${photo.src}" alt="${photo.name}" loading="lazy">
        `;
        item.addEventListener('click', () => openLightbox(albumKey, index));
        container.appendChild(item);
    });

    // Пересоздаём observer для новых элементов
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    container.querySelectorAll('.photo-item').forEach(item => {
        observer.observe(item);
    });
}

// Текущий активный альбом
let currentViewedAlbum = null;

// Показать альбом
function showAlbum(albumKey) {
    currentViewedAlbum = albumKey;
    
    document.querySelectorAll('.album-section').forEach(section => {
        section.style.display = 'none';
    });
    
    const targetSection = document.getElementById(albumKey);
    if (targetSection) {
        targetSection.style.display = 'block';
        targetSection.classList.add('visible');
        setTimeout(() => {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 50);
    }
}

// Скрыть все альбомы
function hideAllAlbums() {
    currentViewedAlbum = null;
    document.querySelectorAll('.album-section').forEach(section => {
        section.style.display = 'none';
    });
}

// Настройка навигации
function setupNavigation() {
    // Клик по карточкам альбомов
    document.querySelectorAll('.album-card').forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const albumKey = card.getAttribute('data-album');
            if (albumKey && albums[albumKey]) {
                showAlbum(albumKey);
                window.location.hash = albumKey;
            }
        });
    });

    // Кнопка скролла к альбомам
    const scrollButton = document.querySelector('.scroll-down');
    if (scrollButton) {
        scrollButton.addEventListener('click', (e) => {
            e.preventDefault();
            const albumsNav = document.querySelector('.albums-nav');
            if (albumsNav) {
                albumsNav.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }

    // Кнопки "Назад к альбомам"
    document.querySelectorAll('.back-to-albums').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            hideAllAlbums();
            window.location.hash = '';
            const albumsNav = document.querySelector('.albums-nav');
            if (albumsNav) {
                albumsNav.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Обработка изменения hash
    let hashChangeTimeout = null;
    window.addEventListener('hashchange', () => {
        const hash = window.location.hash.slice(1);
        
        // Очищаем предыдущий таймаут
        if (hashChangeTimeout) clearTimeout(hashChangeTimeout);
        
        if (!hash || hash === ' ') {
            hideAllAlbums();
            return;
        }
        
        // Проверяем, что hash соответствует альбому
        if (albums[hash]) {
            // Небольшая задержка чтобы избежать конфликтов
            hashChangeTimeout = setTimeout(() => {
                if (currentViewedAlbum !== hash) {
                    showAlbum(hash);
                }
            }, 50);
        }
    });

    // При загрузке страницы
    const initialHash = window.location.hash.slice(1);
    if (initialHash && albums[initialHash]) {
        showAlbum(initialHash);
    } else {
        hideAllAlbums();
    }
}

// Настройка лайтбокса
function setupLightbox() {
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', () => navigatePhoto(-1));
    lightboxNext.addEventListener('click', () => navigatePhoto(1));

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;

        switch (e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                navigatePhoto(-1);
                break;
            case 'ArrowRight':
                navigatePhoto(1);
                break;
        }
    });
}

// Открытие лайтбокса
function openLightbox(albumKey, index) {
    const photos = window[`photos_${albumKey}`];
    if (!photos || photos.length === 0) return;

    currentAlbum = albumKey;
    currentIndex = index;
    currentPhotos = photos;

    createThumbnails(index);
    updateLightboxImage();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Создание миниатюр
function createThumbnails(activeIndex) {
    lightboxThumbnails.innerHTML = '';

    currentPhotos.forEach((photo, idx) => {
        const thumb = document.createElement('div');
        thumb.className = `lightbox-thumb ${idx === activeIndex ? 'active' : ''}`;
        thumb.innerHTML = `<img src="${photo.src}" alt="${photo.name}">`;
        thumb.addEventListener('click', function() {
            currentIndex = idx;
            updateLightboxImage();
        });
        lightboxThumbnails.appendChild(thumb);
    });
}

// Обновление миниатюр
function updateThumbnails() {
    document.querySelectorAll('.lightbox-thumb').forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentIndex);
    });
}

// Обновление изображения в лайтбоксе
function updateLightboxImage() {
    if (!currentPhotos[currentIndex]) return;

    const photo = currentPhotos[currentIndex];
    
    // Анимация смены фото
    lightboxImg.style.opacity = '0';
    lightboxImg.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        lightboxImg.src = photo.src;
        lightboxImg.style.opacity = '1';
        lightboxImg.style.transform = 'scale(1)';
    }, 150);
    
    lightboxCaption.textContent = photo.name;
    
    // Обновляем счётчик
    const current = currentIndex + 1;
    const total = currentPhotos.length;
    lightboxCounter.textContent = `${current} / ${total}`;
    
    // Обновляем прогресс-бар
    const progress = (current / total) * 100;
    lightboxProgress.style.width = `${progress}%`;
    
    // Обновляем миниатюры
    updateThumbnails();
}

// Навигация по фото
function navigatePhoto(direction) {
    if (!currentPhotos.length) return;

    currentIndex += direction;
    if (currentIndex < 0) currentIndex = currentPhotos.length - 1;
    if (currentIndex >= currentPhotos.length) currentIndex = 0;

    updateLightboxImage();
}

// Закрытие лайтбокса
function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(() => {
        lightboxImg.src = '';
    }, 300);
}

// Обновление года в футере
function updateYear() {
    const yearElement = document.querySelector('.footer-year');
    if (yearElement) {
        yearElement.textContent = `© ${new Date().getFullYear()} Все права защищены`;
    }
}

// ============================================
// ФУНКЦИИ ДЛЯ ВАЖНЫХ ДАТ
// ============================================

// Обновление счётчиков дней для важных дат
function updateImportantDates() {
    const today = new Date();
    
    // Дата знакомства
    const metDaysElement = document.getElementById('date-met-days');
    if (metDaysElement) {
        const metDays = Math.floor((today - importantDates.met) / (1000 * 60 * 60 * 24));
        animateCounter(metDaysElement, 0, metDays, 2000);
    }
    
    // Дата начала отношений
    const datingDaysElement = document.getElementById('date-dating-days');
    if (datingDaysElement) {
        const datingDays = Math.floor((today - importantDates.dating) / (1000 * 60 * 60 * 24));
        animateCounter(datingDaysElement, 0, datingDays, 2000);
    }
    
    // Дата свадьбы
    const weddingDaysElement = document.getElementById('date-wedding-days');
    if (weddingDaysElement) {
        const weddingDays = Math.floor((today - importantDates.wedding) / (1000 * 60 * 60 * 24));
        animateCounter(weddingDaysElement, 0, weddingDays, 2000);
    }
}

// Загрузка любимых фраз
function loadFavoritePhrases() {
    const container = document.getElementById('phrases-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    favoritePhrases.forEach((phrase, index) => {
        const phraseCard = document.createElement('div');
        phraseCard.className = 'phrase-card fade-in-section';
        phraseCard.style.animationDelay = `${index * 0.1}s`;
        
        const phraseText = document.createElement('p');
        phraseText.className = 'phrase-text';
        phraseText.textContent = phrase;
        
        phraseCard.appendChild(phraseText);
        container.appendChild(phraseCard);
    });
    
    // Пересоздаём observer для новых элементов
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    container.querySelectorAll('.phrase-card').forEach(card => {
        observer.observe(card);
    });
}

// Открытие/закрытие карточки с датой
function toggleDateCard(dateKey) {
    const card = document.querySelector(`.date-card[data-date="${dateKey}"]`);
    if (!card) return;
    
    // Закрываем другие карточки
    document.querySelectorAll('.date-card').forEach(c => {
        if (c !== card) {
            c.classList.remove('expanded');
        }
    });
    
    // Переключаем текущую
    card.classList.toggle('expanded');
}

// Открытие конверта
function openEnvelope(envelopeElement, author, dateKey) {
    // Если конверт уже открыт, ничего не делаем
    if (envelopeElement.classList.contains('opened')) return;
    
    // Открываем конверт
    envelopeElement.classList.add('opened');
    
    // Получаем текст записки
    const noteText = notes[dateKey][author];
    
    // Показываем записку с небольшой задержкой
    setTimeout(() => {
        showNote(noteText);
    }, 400);
}

// Показ записки
function showNote(text) {
    const noteDisplay = document.getElementById('note-display');
    const noteTextElement = document.getElementById('note-text');
    
    if (!noteDisplay || !noteTextElement) return;
    
    noteTextElement.textContent = text;
    noteDisplay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Закрытие записки
function closeNote() {
    const noteDisplay = document.getElementById('note-display');
    if (!noteDisplay) return;
    
    noteDisplay.classList.remove('active');
    document.body.style.overflow = '';
    
    // Закрываем все конверты
    document.querySelectorAll('.envelope').forEach(env => {
        env.classList.remove('opened');
    });
    
    currentNoteDate = null;
}

// Закрытие записки по клику на фон
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('note-display')) {
        closeNote();
    }
});

// Закрытие записки по Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeNote();
    }
});
