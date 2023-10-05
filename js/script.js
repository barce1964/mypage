window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu-item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })

    var tab = document.querySelectorAll('.info-header-tab-srv'),
        info = document.querySelector('.info-header-srv'),
        tabContent = document.querySelectorAll('.description-srv');

    function hideTabContent(a) {
        for (var i = a; i < tabContent.length; i++) {
            tabContent[i].classList.add('hide');
            tab[i].classList.remove('info-header-tab-active-srv');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tab[b].classList.add('info-header-tab-active-srv');
        }
    }

    info.addEventListener('click', function(event) {
        var target = event.target;
        if (target && target.classList.contains('info-header-tab-srv')) {
            for(var i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    
});
