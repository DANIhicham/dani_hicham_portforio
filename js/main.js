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
                "src": "img/projets/01-admin-page/01-page-administration.png",
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
                "src": "img/projets/02-site-agence-automobile/01-accueil.png",
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
                "src": "img/projets/03-suivi-anomalies-bloc-sanitaire/video/demo.mp4",
                "poster": "img/projets/03-suivi-anomalies-bloc-sanitaire/01-connexion.png"
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
                "src": "img/projets/04-erp-syndic-location/01-connexion.png",
                "alt": "ERP syndic – écran 1"
            },
            {
                "type": "image",
                "src": "img/projets/04-erp-syndic-location/02-separateur-espace-agent-syndic.png",
                "alt": "ERP syndic – écran 2"
            },
            {
                "type": "image",
                "src": "img/projets/04-erp-syndic-location/03-syndic-tableau-de-bord.png",
                "alt": "ERP syndic – écran 3"
            },
            {
                "type": "image",
                "src": "img/projets/04-erp-syndic-location/04-syndic-cotisations.png",
                "alt": "ERP syndic – écran 4"
            },
            {
                "type": "image",
                "src": "img/projets/04-erp-syndic-location/05-syndic-charges-depenses.png",
                "alt": "ERP syndic – écran 5"
            },
            {
                "type": "image",
                "src": "img/projets/04-erp-syndic-location/06-syndic-budget-annuel.png",
                "alt": "ERP syndic – écran 6"
            },
            {
                "type": "image",
                "src": "img/projets/04-erp-syndic-location/07-syndic-coproprietaires.png",
                "alt": "ERP syndic – écran 7"
            },
            {
                "type": "image",
                "src": "img/projets/04-erp-syndic-location/08-syndic-reclamations.png",
                "alt": "ERP syndic – écran 8"
            },
            {
                "type": "image",
                "src": "img/projets/04-erp-syndic-location/09-separateur-espace-agent-location.png",
                "alt": "ERP syndic – écran 8"
            },
            {
                "type": "image",
                "src": "img/projets/04-erp-syndic-location/10-location-tableau-de-bord.png",
                "alt": "ERP syndic – écran 9"
            },
            {
                "type": "image",
                "src": "img/projets/04-erp-syndic-location/11-location-contrats.png",
                "alt": "ERP syndic – écran 10"
            },
            {
                "type": "image",
                "src": "img/projets/04-erp-syndic-location/12-location-locataires.png",
                "alt": "ERP syndic – écran 11"
            },
            {
                "type": "image",
                "src": "img/projets/04-erp-syndic-location/13-location-paiements-loyer.png",
                "alt": "ERP syndic – écran 12"
            },
            {
                "type": "image",
                "src": "img/projets/04-erp-syndic-location/14-separateur-espace-resident.png",
                "alt": "ERP syndic – écran 13"
            },
            {
                "type": "image",
                "src": "img/projets/04-erp-syndic-location/15-resident-tableau-de-bord.png",
                "alt": "ERP syndic – écran 14"
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
                "src": "img/projets/05-base-de-donnees-club/01-mysql-workbench.png",
                "alt": "Base de données dans MySQL Workbench"
            }
        ]
    },
    "fitness": {
        "description": [
            "Aperçu de la page complète du site du club de fitness, du bandeau d'accueil jusqu'au pied de page.",
            "Faites défiler la capture pour voir la page entière."
        ],
        "media": [
            {
                "type": "image",
                "src": "img/projets/06-site-club-fitness/01-page-complete.jpg",
                "alt": "Maquette du site de fitness"
            }
        ],
        "fit": "scroll"
    },
    "daris": {
        "description": [
            "Aperçu des pages complètes de la proposition de site Daris Développement : accueil, présentation du groupe, réalisations, projets récents et témoignages clients.",
            "Faites défiler chaque capture pour voir la page entière."
        ],
        "media": [
            {
                "type": "image",
                "src": "img/projets/07-site-daris-developpement/01-page-1.jpg",
                "alt": "Maquette Daris – page 1"
            },
            {
                "type": "image",
                "src": "img/projets/07-site-daris-developpement/02-page-2.jpg",
                "alt": "Maquette Daris – page 2"
            },
            {
                "type": "image",
                "src": "img/projets/07-site-daris-developpement/03-page-3.jpg",
                "alt": "Maquette Daris – page 3"
            },
            {
                "type": "image",
                "src": "img/projets/07-site-daris-developpement/04-page-4.jpg",
                "alt": "Maquette Daris – page 4"
            },
            {
                "type": "image",
                "src": "img/projets/07-site-daris-developpement/05-page-5.jpg",
                "alt": "Maquette Daris – page 5"
            }
        ],
        "fit": "scroll"
    },

    "cfcae": {
    "description": [
        "LLe projet CFCAE est une application web destinée à faciliter la gestion du cabinet de formation. Elle permet de gérer les formations, les sessions, les candidats, les inscriptions et les évaluations QCM. Elle permet également de suivre les résultats et de générer des certificats de formation au format PDF."
    ],
    "media": [
        { "type": "video", "src": "img/projets/08-cfcae-gestion-formations/video/demo.mp4", "poster": "img/projets/08-cfcae-gestion-formations/01-tableau-de-bord-admin.jpg" }
    ]
    },

    "kamiloc": {
    "description": [
        "Gestion de page Instagram : création des Videos, visuels et du contenu, animation des comptes et publication régulière pour développer la visibilité et l'image de marque.",
    ],
    "media": [
        { "type": "image", "src": "img/projets/09-instagram-kamiloc-agency/02-page-instagram.png", "alt": "Page Instagram" },

    ],
    "link": { "href": "https://www.instagram.com/kamiloc.agency/", "label": "Voir la page Instagram" }
    },

    "cfcae_design": {
    "description": [
        "Gestion de page Instagram : création des Videos, visuels et du contenu, animation des comptes et publication régulière pour développer la visibilité et l'image de marque.",
    ],
    "media": [
        { "type": "image", "src": "img/projets/10-instagram-cabinet-cfcae/02-page-instagram.png", "alt": "Page Instagram" },

    ],
    "link": { "href": "https://www.instagram.com/cabinet.cfcae/", "label": "Voir la page Instagram" }
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