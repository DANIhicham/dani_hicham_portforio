(function ($) {
    "use strict";
    
    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });
    
    
    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
    // Typed Initiate
    if ($('.hero .hero-text h2').length == 1) {
        var typed_strings = $('.hero .hero-text .typed-text').text();
        var typed = new Typed('.hero .hero-text h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }
    
    
    // Skills
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        center: true,
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            }
        }
    });
    
    
    
    // Portfolio filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-filter li').on('click', function () {
        $("#portfolio-filter li").removeClass('filter-active');
        $(this).addClass('filter-active');
        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);
/* ===== Projets : fenêtre de détail (vanilla JS) ===== */

(function () {
    'use strict';

    var PROJECTS = {
    "admin": {
        "description": [
            "Refonte et mise à jour de la page d'administration d'une plateforme web.",
            "L'interface permet de gérer les utilisateurs (recherche, rôles, ajout d'un nouvel utilisateur) et propose un panneau de personnalisation du thème : couleur principale, mode clair / sombre et disposition de la page."
        ],
        "media": [
            {
                "type": "image",
                "src": "img/adminPage.png",
                "alt": "Page d'administration"
            }
        ]
    },
    "zola": {
        "description": [
            "Site vitrine d'une agence commerciale de vente de voitures, avec une page d'accueil visuelle, un menu de navigation et la présentation des marques partenaires.",
            "Le site s'adapte aux différents écrans grâce à Bootstrap 5 et il est hébergé en ligne sur GitHub Pages."
        ],
        "media": [
            {
                "type": "image",
                "src": "img/prj1.png",
                "alt": "Accueil du site de l'agence automobile"
            }
        ],
        "link": {
            "href": "https://danihicham.github.io/Project-zola/",
            "label": "Voir le site en ligne"
        }
    },
    "anomalies": {
        "description": [
            "Application web de suivi des anomalies des blocs sanitaires, développée lors d'un stage.",
            "Elle permet de signaler, suivre et traiter les anomalies constatées, avec une authentification des utilisateurs. La vidéo ci-contre présente le fonctionnement de l'application."
        ],
        "media": [
            {
                "type": "video",
                "src": "img/stage.mp4",
                "poster": "img/Cure.png"
            }
        ]
    },
    "erp": {
        "description": [
            "ERP de gestion de syndic de copropriété et location avec Laravel. Il centralise la gestion des résidences, des appartements, des résidents et locataires, des contrats, des cotisations et des paiements.",
            "L'application propose un tableau de bord, le suivi des cotisations et des impayés, les charges et dépenses, ainsi que le budget annuel avec indicateurs et graphiques d'évolution."
        ],
        "media": [
            {
                "type": "image",
                "src": "img/BL1.PNG",
                "alt": "ERP syndic – écran 1"
            },
            {
                "type": "image",
                "src": "img/BL3.PNG",
                "alt": "ERP syndic – écran 2"
            },
            {
                "type": "image",
                "src": "img/BL4.PNG",
                "alt": "ERP syndic – écran 3"
            },
            {
                "type": "image",
                "src": "img/BL5.PNG",
                "alt": "ERP syndic – écran 4"
            },
            {
                "type": "image",
                "src": "img/BL6.PNG",
                "alt": "ERP syndic – écran 5"
            },
            {
                "type": "image",
                "src": "img/BL7.PNG",
                "alt": "ERP syndic – écran 6"
            },
            {
                "type": "image",
                "src": "img/BL8.PNG",
                "alt": "ERP syndic – écran 7"
            }
        ],
       
    },
    "bd-club": {
        "description": [
            "Conception d'une base de données complète pour la gestion d'un club et de ses adhérents : modélisation des tables, fonctions et procédures stockées.",
            "L'ensemble a été développé et testé sous MySQL Workbench."
        ],
        "media": [
            {
                "type": "image",
                "src": "img/prj2.png",
                "alt": "Base de données dans MySQL Workbench"
            }
        ]
    },
    "fitness": {
        "description": [
            "Création du site d'un club de fitness avec WordPress : page d'accueil percutante, présentation du club et accès au coaching en ligne."
        ],
        "media": [
            {
                "type": "image",
                "src": "img/prj3.png",
                "alt": "Accueil du site Dani Fitness"
            }
        ]
    },
    "daris": {
        "description": [
            "Proposition de site pour Daris Développement : présentation du groupe, de ses réalisations et projets récents, témoignages clients et contact."
        ],
        "media": [
            {
                "type": "image",
                "src": "img/prj4.png",
                "alt": "Accueil du site Daris Développement"
            }
        ]
    },
    "cfcae": {
    "description": [
        "LLe projet CFCAE est une application web destinée à faciliter la gestion du cabinet de formation. Elle permet de gérer les formations, les sessions, les candidats, les inscriptions et les évaluations QCM. Elle permet également de suivre les résultats et de générer des certificats de formation au format PDF."
    ],
    "media": [
        { "type": "video", "src": "img/cfcae.mp4", "poster": "img/cfcae_projet.jpg" }
    ]
    }

};
    var container = document.querySelector('.portfolio-container');
    if (!container) return;

    var ICON_PREV = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>';
    var ICON_NEXT = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>';

    var modal, dialog, stage, thumbs, counter, btnPrev, btnNext, btnClose;
    var elCategory, elTitle, elStatus, elTags, elDesc, elLink;
    var current = null, index = 0, lastFocus = null, touchX = null;

    function el(tag, cls, text) {
        var n = document.createElement(tag);
        if (cls) n.className = cls;
        if (text != null) n.textContent = text;
        return n;
    }

    function build() {
        modal = el('div', 'pf-modal');
        modal.setAttribute('aria-hidden', 'true');
        modal.innerHTML =
            '<div class="pf-dialog" role="dialog" aria-modal="true" aria-labelledby="pf-modal-title" tabindex="-1">' +
                '<button type="button" class="pf-close" aria-label="Fermer">&times;</button>' +
                '<div class="pf-media">' +
                    '<div class="pf-stage-wrap">' +
                        '<div class="pf-stage" aria-live="polite"></div>' +
                        '<button type="button" class="pf-nav pf-prev" aria-label="Média précédent">' + ICON_PREV + '</button>' +
                        '<button type="button" class="pf-nav pf-next" aria-label="Média suivant">' + ICON_NEXT + '</button>' +
                        '<span class="pf-counter"></span>' +
                    '</div>' +
                    '<div class="pf-thumbs"></div>' +
                '</div>' +
                '<div class="pf-info">' +
                    '<p class="pf-eyebrow"></p>' +
                    '<h3 class="pf-modal-title" id="pf-modal-title"></h3>' +
                    '<span class="pf-status" hidden></span>' +
                    '<ul class="pf-tags"></ul>' +
                    '<div class="pf-desc"></div>' +
                    '<a class="pf-link" target="_blank" rel="noopener" hidden></a>' +
                '</div>' +
            '</div>';
        document.body.appendChild(modal);

        dialog = modal.querySelector('.pf-dialog');
        stage = modal.querySelector('.pf-stage');
        thumbs = modal.querySelector('.pf-thumbs');
        counter = modal.querySelector('.pf-counter');
        btnPrev = modal.querySelector('.pf-prev');
        btnNext = modal.querySelector('.pf-next');
        btnClose = modal.querySelector('.pf-close');
        elCategory = modal.querySelector('.pf-eyebrow');
        elTitle = modal.querySelector('.pf-modal-title');
        elStatus = modal.querySelector('.pf-status');
        elTags = modal.querySelector('.pf-tags');
        elDesc = modal.querySelector('.pf-desc');
        elLink = modal.querySelector('.pf-link');

        btnClose.addEventListener('click', close);
        btnPrev.addEventListener('click', function () { show(index - 1); });
        btnNext.addEventListener('click', function () { show(index + 1); });
        modal.addEventListener('click', function (e) { if (e.target === modal) close(); });
        thumbs.addEventListener('click', function (e) {
            var b = e.target.closest('.pf-thumb-btn');
            if (b) show(parseInt(b.getAttribute('data-i'), 10));
        });
        stage.addEventListener('touchstart', function (e) { touchX = e.changedTouches[0].clientX; }, { passive: true });
        stage.addEventListener('touchend', function (e) {
            if (touchX === null || current.media.length < 2) return;
            var dx = e.changedTouches[0].clientX - touchX;
            touchX = null;
            if (Math.abs(dx) > 50) show(index + (dx < 0 ? 1 : -1));
        }, { passive: true });
        document.addEventListener('keydown', onKey);
    }

    function stopMedia() {
        var v = stage.querySelector('video');
        if (v) { v.pause(); v.removeAttribute('src'); v.load(); }
    }

    function show(i) {
        var list = current.media;
        index = (i + list.length) % list.length;
        stopMedia();
        stage.innerHTML = '';
        stage.scrollTop = 0;

        var item = list[index], node;
        if (item.type === 'video') {
            node = document.createElement('video');
            node.className = 'pf-video';
            node.controls = true;
            node.playsInline = true;
            node.preload = 'metadata';
            if (item.poster) node.poster = item.poster;
            node.src = item.src;
        } else {
            node = document.createElement('img');
            node.className = 'pf-img';
            node.alt = item.alt || current.title;
            node.src = item.src;
        }
        stage.appendChild(node);
        stage.setAttribute('data-fit', current.fit === 'scroll' && item.type !== 'video' ? 'scroll' : 'contain');

        counter.textContent = (index + 1) + ' / ' + list.length;
        var btns = thumbs.children;
        for (var k = 0; k < btns.length; k++) btns[k].classList.toggle('is-active', k === index);
    }

    function open(id, trigger) {
        var data = PROJECTS[id];
        var card = container.querySelector('[data-project="' + id + '"]');
        if (!data || !card) return;

        var title = card.querySelector('.pf-title').textContent;
        current = { media: data.media, fit: data.fit, title: title };
        lastFocus = trigger || document.activeElement;

        elCategory.textContent = card.getAttribute('data-category') || '';
        elTitle.textContent = title;

        if (data.status) { elStatus.textContent = data.status; elStatus.hidden = false; }
        else { elStatus.hidden = true; }

        elTags.innerHTML = '';
        Array.prototype.forEach.call(card.querySelectorAll('.pf-tag'), function (t) {
            elTags.appendChild(el('li', 'pf-tag', t.textContent));
        });

        elDesc.innerHTML = '';
        (data.description || []).forEach(function (p) { elDesc.appendChild(el('p', null, p)); });

        if (data.link) {
            elLink.href = data.link.href;
            elLink.textContent = data.link.label + ' \u2197';
            elLink.hidden = false;
        } else {
            elLink.hidden = true;
        }

        var multi = current.media.length > 1;
        btnPrev.hidden = btnNext.hidden = counter.hidden = !multi;
        thumbs.innerHTML = '';
        if (multi) {
            current.media.forEach(function (m, i) {
                var b = el('button', 'pf-thumb-btn');
                b.type = 'button';
                b.setAttribute('data-i', i);
                b.setAttribute('aria-label', 'Afficher le média ' + (i + 1));
                var im = document.createElement('img');
                im.src = m.type === 'video' ? (m.poster || '') : m.src;
                im.alt = '';
                im.loading = 'lazy';
                b.appendChild(im);
                if (m.type === 'video') b.appendChild(el('span', 'pf-play', '\u25B6'));
                thumbs.appendChild(b);
            });
        }

        show(0);

        var sw = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = 'hidden';
        if (sw > 0) document.body.style.paddingRight = sw + 'px';
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        dialog.scrollTop = 0;
        elTitle.parentNode.scrollTop = 0;
        dialog.focus();
    }

    function close() {
        if (!modal || !modal.classList.contains('is-open')) return;
        stopMedia();
        stage.innerHTML = '';
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
        if (lastFocus && lastFocus.focus) lastFocus.focus();
    }

    function onKey(e) {
        if (!modal.classList.contains('is-open')) return;
        if (e.key === 'Escape') { close(); return; }
        if (current.media.length > 1) {
            if (e.key === 'ArrowLeft') { show(index - 1); return; }
            if (e.key === 'ArrowRight') { show(index + 1); return; }
        }
        if (e.key === 'Tab') {
            var f = Array.prototype.filter.call(
                dialog.querySelectorAll('button, a[href], video[controls]'),
                function (n) { return !n.hidden && n.offsetParent !== null; }
            );
            if (!f.length) return;
            var first = f[0], last = f[f.length - 1];
            if (e.shiftKey && (document.activeElement === first || document.activeElement === dialog)) {
                e.preventDefault(); last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault(); first.focus();
            }
        }
    }

    container.addEventListener('click', function (e) {
        var card = e.target.closest('.pf-card');
        if (!card) return;
        open(card.getAttribute('data-project'), card.querySelector('.pf-plus'));
    });

    build();
})();