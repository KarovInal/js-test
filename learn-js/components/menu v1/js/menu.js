'use strict';

var Menu = function(options) {
    let {
        title,
        items
    } = options;

    var DOMMenu;

    function render() {
        DOMMenu = $(`
            <div id="menu" class="menu">
                Menu
                <div class="title">
                    ${title}
                </div>
            </div>
        `);

        DOMMenu.append(renderItems());
        
        DOMMenu.on('click', '.title', (e) => {
            toggle();
        })

        return DOMMenu[0];
    }

    function renderItems() {
        var UL = $('<ul class="list"></ul>')[0];

        items.forEach(function(item) {
            var li = $('<li />', {
                text: item,
                class: 'item'
            })[0];
            UL.append(li)
        });

        return UL;
    }

    function toggle() {
        DOMMenu.toggleClass('open');
    }

    this.getElem = function() {
        if(!DOMMenu) 
            return render();

        return DOMMenu[0];
    }
}