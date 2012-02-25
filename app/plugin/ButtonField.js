Ext.define('Sbbs.plugin.ButtonField', {
    extend: 'Ext.Decorator',
    xtype: 'buttonfield',

    /**
     * Set to true on all Ext.field.Field subclasses. This is used by {@link Ext.form.Panel#getValues} to determine which
     * components inside a form are fields.
     * @property isField
     * @type Boolean
     */
    isField: true,

    // @private
    isFormField: true,

    config: {
        // @inherit
        baseCls: Ext.baseCSSPrefix + 'field',

        /**
         * The label of this field
         * @cfg {String} label
         * @accessor
         */
        label: null,

        /**
         * @cfg {Boolean} required True to make this field required. Note: this only causes a visual indication.
         * Doesn't prevent user from submitting the form.
         * @accessor
         */
        required: false,

        /**
         * @cfg {String} inputType The type attribute for input fields -- e.g. radio, text, password, file (defaults
         * to 'text'). The types 'file' and 'password' must be used to render those field types currently -- there are
         * no separate Ext components for those.
         * This is now deprecated. Please use 'input.type' instead.
         * @deprecated 2.0
         * @accessor
         */
        inputType: null,

        /**
         * @cfg {String} name The field's HTML name attribute.
         * <b>Note</b>: this property must be set if this field is to be automatically included with
         * {@link Ext.form.Panel#method-submit form submit()}.
         * @accessor
         */
        name: null,

        /**
         * @cfg {Mixed} value A value to initialize this field with.
         * @accessor
         */
        value: null,

        /**
         * @cfg {Number} tabIndex The tabIndex for this field. Note this only applies to fields that are rendered,
         * not those which are built via applyTo.
         * @accessor
         */
        tabIndex: null
    },

    cachedConfig: {
        /**
         * @cfg {String} labelCls Optional CSS class to add to the Label element
         * @accessor
         */
        labelCls: null,

        /**
         * @cfg {String} requiredCls The className to be applied to this Field when the {@link #required} configuration is set to true
         * @accessor
         */
        requiredCls: Ext.baseCSSPrefix + 'field-required',

        /**
         * @cfg {String} inputCls CSS class to add to the input element of this fields {@link #component}
         */
        inputCls: null
    },

    /**
     * @cfg {Boolean} isFocused
     * True if this field is currently focused,
     * @private
     */

    getElementConfig: function() {
        var prefix = Ext.baseCSSPrefix;

        return {
            reference: 'element',
            className: 'x-container',
            children: [
                {
                    reference: 'label',
                    cls: prefix + 'form-label-sbbs',
                    children: [{
                        reference: 'labelspan',
                        tag: 'span'
                    }]
                }
            ]
        };
    },

    // @private
    updateLabel: function(newLabel, oldLabel) {
        var renderElement = this.renderElement,
            prefix = Ext.baseCSSPrefix;

        if (newLabel) {
            this.labelspan.setHtml(newLabel);
            renderElement.addCls(prefix + 'field-labeled');
        } else {
            renderElement.removeCls(prefix + 'field-labeled');
        }
    },

    // @private
    updateLabelAlign: function(newLabelAlign, oldLabelAlign) {
        var renderElement = this.renderElement,
            prefix = Ext.baseCSSPrefix;

        if (newLabelAlign) {
            renderElement.addCls(prefix + 'label-align-' + newLabelAlign);
        }

        if (oldLabelAlign) {
            renderElement.removeCls(prefix + 'label-align-' + oldLabelAlign);
        }
    },

    // @private
    updateLabelCls: function(newLabelCls, oldLabelCls) {
        if (newLabelCls) {
            this.label.addCls(newLabelCls);
        }

        if (oldLabelCls) {
            this.label.removeCls(oldLabelCls);
        }
    },

    // @private
    initialize: function() {
        var me = this;
        me.callParent();

        me.doInitValue();

        this.element.on({
            scope: this,
            tap: 'onTap'
        });
    },

    /**
     * @private
     */
    doInitValue: function() {
        /**
         * @property {Mixed} originalValue
         * The original value of the field as configured in the {@link #value} configuration.
         * setting is <code>true</code>.
         */
        this.originalValue = this.getInitialConfig().value;
    },

    /**
     * Resets the current field value to the originally loaded value and clears any validation messages.
     * @return {Ext.field.Field} this
     */
    reset: function() {
        this.setValue(this.originalValue);

        return this;
    },

    /**
     * <p>Returns true if the value of this Field has been changed from its {@link #originalValue}.
     * Will return false if the field is disabled or has not been rendered yet.</p>
     * @return {Boolean} True if this field has been changed from its original value (and
     * is not disabled), false otherwise.
     */
    isDirty: function() {
        return false;
    },

    onTap: function(e) {
        this.fireAction('tap', [this, e]);
    }
});
