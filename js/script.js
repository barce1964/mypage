window.addEventListener('DOMContentLoaded', function() {

    'use strict';
    var tab = document.querySelectorAll('.info-header-tab-srv'),
        info = document.querySelector('.info-header-srv'),
        tabContent = document.querySelectorAll('.description-srv');

    function hideTabContent(a) {
        for (var i = a; i < tabContent.length; i++) {
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
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
