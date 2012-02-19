Ext.define('Sbbs.controller.phone.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            tabbar: 'tabbar',
            nav: 'navigationview',
            front: 'front',
            topten: 'topten',
            favorites: 'favorites',
            search: 'search'
        },

        control: {
            tabbar: {
                tabchange: 'onTabChange'
            }
        }
    },

    launch: function() {
    },

    onTabChange: function (ins, newTab, oldTab, eOpts) {
        var id = newTab.getItemId();
        var seq = id[id.length - 1] - 0;
        switch (seq) {
        case 1:
            this.getNav().setActiveItem(this.getFront());
            break;
        case 2:
            this.getNav().setActiveItem(this.getTopten());
            break;
        case 3:
            this.getNav().setActiveItem(this.getFavorites());
            break;
        case 4:
            this.getNav().setActiveItem(this.getSearch());
            break;
        }
    }
});
