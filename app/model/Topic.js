Ext.define('Sbbs.model.Topic', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            { name: 'title'   , type: 'string' } ,
            { name: 'author'  , type: 'string' } ,
            { name: 'board'   , type: 'string' } ,
            { name: 'time'    , type: 'int'    } ,
            { name: 'id'      , type: 'int'    } ,
            { name: 'read'    , type: 'int'    } ,
            { name: 'replies' , type: 'int'    }
        ]
    }
});
