/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ExtJSBoard.view.login.Login', {
	extend:"Ext.window.Window",
	xtype : 'login',
	layout : 'center',
	closable : false,
	maximized : true,
	autoShow : true,
	onEsc : function(){
		return false;
	},
	items : [{
		xtype : 'form',
		layout : {
			type : 'vbox',
			align : 'center',
			pack : 'center'
		},
		items :[{
			xtype : 'textfield',
		},{
			xtype : 'textfield',
			inputType : 'password'
		},{
			xtype : 'button',
			text : 'Login'
		}]
	}]
	
//    extend: 'Ext.form.Panel',
//    xtype: 'form-login',
////    controller: 'form-login',
////    title: 'Login',
//
//    bodyPadding: 20,
//    width: 320,
//    autoSize: true,
//
//    items: [{
//        xtype: 'textfield',
//        allowBlank: false,
//        required: true,
//        label: 'User ID',
//        name: 'user',
//        placeholder: 'user id'
//    }, {
//        xtype: 'passwordfield',
//        allowBlank: false,
//        required: true,
//        label: 'Password',
//        name: 'pass',
//        placeholder: 'password'
//    }, {
//        xtype: 'checkbox',
//        boxLabel: 'Remember me',
//        name: 'remember'
//    }],
//
//    buttons: [{
//        text: 'Login',
//        handler: 'onLogin'
//    }]
});
