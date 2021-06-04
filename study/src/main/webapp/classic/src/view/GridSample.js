/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ExtjsStudy.view.GridSample', {
    extend: 'Ext.grid.Panel',
    xtype: 'gridSample',
    columns : [{
			text : '사원번호',
			flex :1,
			dataIndex : 'empno'
			
		},{
			text : '이름',
			flex :1,
			dataIndex : 'ename'
		},{
			text : '직책',
			flex :1,
			dataIndex : 'job'
		},{
			text : '입사일자',
			flex :1,
			dataIndex : 'hiredate',
			renderer : function(value){
				var date = new Date(value);
				var year = date.getFullYear();
				var month = (1+date.getMonth());
				month = month >= 10 ? month : '0' + month;
				var day = date.getDate();
				day = day >= 10 ? day : '0' +day;
				return year + "-" + month +"-" + day;
			}
		},{
			text : '급여',
			flex :1,
			dataIndex : 'sal'
		},{
			text : '상여',
			flex :1,
			dataIndex : 'comm'
		},{
			text : '선임번호',
			flex :1,
			dataIndex : 'mgr'
		},{
			text : '부서번호',
			flex :1,
			dataIndex : 'deptno'
		
		}],
		store : {
			fields : ['empno','ename','job','hiredate','sal','comm','mgr','deptno'],
//			data : []
			rootProperty : 'empList'
		}
});
