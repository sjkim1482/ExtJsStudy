/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ExtjsStudy.view.main.SampleGridViewModel', {
    extend: 'Ext.app.ViewModel',
    alias : 'viewmodel.sampleGrid',
    stores : {
		sampleStore : {
			fields : ['empno','ename','job','hiredate','sal','comm','mgr','deptno'],
			proxy : {
				type : 'ajax',
				url : 'http://localhost/emp/selectEmpList',
				reander : {
					type : 'json',
					rootProperty : 'empList'
				}
			}
		}
	}

});
