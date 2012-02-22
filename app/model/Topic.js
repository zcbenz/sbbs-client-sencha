Ext.define('Sbbs.model.Topic', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            { name: 'title'   , type: 'string' } ,
            { name: 'author'  , type: 'string' } ,
            { name: 'board'   , type: 'string' } ,
            { name: 'content' , type: 'string' } ,
            { name: 'unread'  , type: 'boolean'} ,
            { name: 'time'    , type: 'int'    } ,
            { name: 'size'    , type: 'int'    } ,
            { name: 'id'      , type: 'int'    } ,
            { name: 'reid'    , type: 'int'    } ,
            { name: 'read'    , type: 'int'    } ,
            { name: 'replies' , type: 'int'    } ,
            { name: 'section' , type: 'int'    }
        ]
    }
});
