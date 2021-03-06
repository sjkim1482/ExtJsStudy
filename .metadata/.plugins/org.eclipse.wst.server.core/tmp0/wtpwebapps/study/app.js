//Extjs에 관련된 모든 속성은 Ext.로 시작함
//Ext.onReady : document.onload와 같은역할
//대소문자 구별하기
Ext.onReady(function(){
	
//	alert("안녕");
//	Ext.Msg.alert("타이틀","헬로월드");
//	return;
//	Ext.create("Ext.panel.Panel",{
//		width : 300,
//		height : 300, 
//		renderTo : Ext.getBody(),
//		border : true
//	})

//	Ext.create("Ext.container.Viewport",{
//		layout : 'fit',    
//		renderTo : Ext.getBody(),
//		border : true,
//		items : [{
//			//xtype: input type 같은거라 생각
//			xtype : 'panel' //페이지에 맞게 패널을 가득채워줌
//		}]
//	})

//	Ext.create("Ext.panel.Panel",{
//		width : 300,
//		height : 300, 
//		renderTo : Ext.getBody(),
//		border : true,
//		
//		// items의 배열 하나당 div 하나가 있다고 생각하자
//		items : [{
//			xtype : 'textfield' // 둘다 똑같은 결과니까 alias를 줘서 편하게하자
//		},{
//			xtype : Ext.create("Ext.form.field.Text")
//		},{
//			xtype : 'button',
//			text : '버튼'
//		}]
//	})

//	Ext.create("Ext.container.Viewport",{
//		layout : 'fit',
//		renderTo : Ext.getBody(),
//		border : true,
//		
//		// 항상 컴포넌트 배치를 할때는 items를 선언하고 배치한다.
//		items : [{
//			xtype : 'panel',
//			title : '패널입니다',
//			items : [{
//				xtype : 'button',
//				text : "버튼"
//			},{
//				xtype : 'textfield'
//			}]
//		}]
//	})

//	Ext.create("Ext.container.Viewport",{
//		// layout : 'border' 에는 items에서 항상 region이라는 속성이 같이붙어야함
//		// region종류 : north, center, south, east, west
//		layout : 'border',
//		renderTo : Ext.getBody(),
//		border : true,
//		
//		// 항상 컴포넌트 배치를 할때는 items를 선언하고 배치한다.
//		items : [{
//			xtype : 'panel',
////			height : 200,
//			flex : 1,//가변적으로 1:1로 맞춰줌(브라우저의 크기에 따라 알아서 맞춰줌)
//			border : 1,
//			region : 'north',
////			title : '패널 north',
//			layout : 'border',
//			items : [{
//					xtype : 'panel',
//					flex : 1,
//					border : 1,
//					region : 'west',
//					title : '패널 nwest'
//				},{
//					xtype : 'panel',
//					flex : 1,
//					border : 1,
//					region : 'center',
//					title : '패널 ncenter'
//				},{
//					xtype : 'panel',
//					flex : 1,
//					border : 1,
//					region : 'east',
//					title : '패널 neast'
//				}]
//		},{
//			xtype : 'panel',
//			flex : 1,
//			border : 1,
//			region : 'center',
//			title : '패널 center'
//		},{
//			xtype : 'panel',
//			flex : 1,
//			border : 1,
//			region : 'east',
//			title : '패널 east'
//		},{
//			xtype : 'panel',
//			flex : 1,
//			border : 1,
//			region : 'west',
//			title : '패널 west'
//		},{
//			xtype : 'panel',
//			flex : 1,
//			border : 1,
//			region : 'south',
//			title : '패널 south'
//		}]
//	})


//	5강 레이아웃 추가로 알아보기
//	Ext.create("Ext.container.Viewport",{
//		// layout : 'border' 에는 items에서 항상 region이라는 속성이 같이붙어야함
//		// region종류 : north, center, south, east, west
//		layout : 'border',
//		renderTo : Ext.getBody(),
//		border : true,
//		
//		// 항상 컴포넌트 배치를 할때는 items를 선언하고 배치한다.
//		items : [{
//			xtype : 'panel',
////			height : 200,
//			border : 0.3,
//			region : 'north',
//			title : '패널 north',
//		},{
//			xtype : 'panel',
//			flex : 1,
//			border : 1,
//			region : 'center',
//			
//			layout : 'border',
//			
//				items : [{
//					xtype : 'panel',
//					flex : 0.2,
//					border : 1,
//					region : 'west',
//					title : '패널 nwest'
//				},{
//					xtype : 'panel',
//					flex : 1,
//					border : 1,
//					region : 'center',
//					title : '패널 ncenter'
//				}]
//		}]
//	})

//	center
//	Ext.create("Ext.container.Viewport",{
//		// layout : 'fit', 'border'
//		// layout2 : 'center', 'absolute', 'accordion', 'hbox/vbox', 'table'
//		layout : 'fit',
//		border : true,
//		items : [{
//			xtype : 'panel',
//			title : '부모패널',
//			layout : 'center',
//			items : [{
//				xtype : 'panel',
//				width : 300,
//				height : 300,
//				border : true,
//				title : '첫째 패널',
//				items :[{
//					xtype : 'textfield'
//				},{
//					xtype : 'textfield'
//				},{
//					xtype : 'button',
//					text : '로그인'
//				}]
//			}]
//		}]
//		
//	})

//	absolute
//	Ext.create("Ext.container.Viewport",{
//		// layout : 'fit', 'border'
//		// layout2 : 'center', 'absolute', 'accordion', 'hbox/vbox', 'table'
//		layout : 'fit',
//		border : true,
//		items : [{
//			xtype : 'panel',
//			title : '부모패널',
//			//absolute는 x,y좌표를 선언해줘야함 안그러면 디폴트 0,0으로 선언되어서
//			//그안의 items 속성이 전부 0,0으로 시작된
//			layout : 'absolute',
//			items : [{
//				xtype : 'panel',
//				width : 300,
//				height : 300,
//				x : 150,
//				y : 300,
//				border : true,
//				title : '첫째 패널'
//			},{
//				xtype : 'panel',
//				width : 300,
//				height : 300,
//				x : 100,
//				y : 200,
//				border : true,
//				title : '둘째 패널'
//			}]
//		}]
//		
//	})

//	accordion
//	Ext.create("Ext.container.Viewport",{
//		// layout : 'fit', 'border'
//		// layout2 : 'center', 'absolute', 'accordion','card', 'hbox/vbox', 'table'
//		layout : 'fit',
//		border : true,
//		items : [{
//			xtype : 'panel',
//			title : '부모패널',
//			
//			layout : 'accordion',
//			items : [{
//				xtype : 'panel',
//				border : true,
//				title : '첫째패널',
//				html : '첫째입니다'
//			},{
//				xtype : 'panel',
//				border : true,
//				title : '둘째패널',
//				html : '둘째입니다'
//			},{
//				xtype : 'panel',
//				border : true,
//				title : '셋째패널',
//				html : '셋째입니다'
//			},{
//				xtype : 'panel',
//				border : true,
//				title : '넷째패널',
//				html : '넷째입니다'
//			}]
//		}]
//		
//	})

//	card(중요할거 같음)
//	Ext.create("Ext.container.Viewport",{
//		// layout : 'fit', 'border'
//		// layout2 : 'center', 'absolute', 'accordion','card', 'hbox/vbox', 'table'
//		layout : 'fit',
//		border : true,
//		items : [{
//			xtype : 'panel',
//			title : '부모패널',
//			
//			layout : 'card',
//			
//			tbar: [{
//	        text: 'Before',
//	        handler: function(btn){
//	        	if(btn.up("panel").getLayout().getPrev()) {
//	        		btn.up("panel").setActiveItem(btn.up("panel").getLayout().getPrev());   
//                }else {
//                	alert("첫번째 페이지");
//                }
//	        }
//	  	  },{
//	        text: 'Next',
//	        handler: function(btn){
//	        	 if(btn.up("panel").getLayout().getNext()) {
//	        		 btn.up("panel").setActiveItem(btn.up("panel").getLayout().getNext());
//                 }else {
//                	alert("마지막 페이지");
//                }
//	        }
//		   }],
//			
//			items : [{
//				xtype : 'panel',
//				border : true,
//				title : '첫째패널',
//				html : '첫째입니다'
//			},{
//				xtype : 'panel',
//				border : true,
//				title : '둘째패널',
//				html : '둘째입니다'
//			},{
//				xtype : 'panel',
//				border : true,
//				title : '셋째패널',
//				html : '셋째입니다'
//			},{
//				xtype : 'panel',
//				border : true,
//				title : '넷째패널',
//				html : '넷째입니다'
//			}]
//		}]
//		
//	})

//	hbox, vbox
//	Ext.create("Ext.container.Viewport",{
//		// layout : 'fit', 'border'
//		// layout2 : 'center', 'absolute', 'accordion','card', 'hbox/vbox', 'table'
//		layout : 'fit',
//		border : true,
//		items : [{
//			xtype : 'panel',
//			title : '부모패널',
//			
//			layout : 'hbox',
////			layout : 'vbox',
//			
//			items : [{
//				xtype : 'button',
//				text : '등록'
//			},{
//				xtype : 'button',
//				text : '목록'
//			}]
//		}]
//		
//	})

//	6강 문서보는방법 간단소개
//	도큐먼트 API 이용 split, html, collapsible 등 사용
//	Ext.create("Ext.panel.Panel",{
//		width : 500,
//		height : 500,
//		title : '6강 ExtJS 타이틀',
//		renderTo : Ext.getBody(),
//		layout : 'border',
//		items : [{
//			xtype : 'panel',
//			border : true,
//			collapsible : true,
//			flex : 1,
//			region : 'west',
//			title : '좌측입니다', 
//			split : true,
//			html : "<b>안녕하세요</b>"
//		},{
//			xtype : 'panel',
//			border : true,
//			flex : 2,
//			region : 'center',
//			layout : 'border',
//			items : [{
//				xtype : 'panel',
//				border : true,
//				flex : 2,
//				region : 'north',
//				split : true,
//				layout : 'center',
//				items : [{
//					xtype : 'button',
//					text : '버튼클릭',
////					handler : function(btn){
////						alert("버튼 클릭!");
////					}
//					listeners : {
//						click : function(btn){
////							alert("버튼 클릭!!!");
//							alert(btn.getText());
//						}
//					}
//				}]
//			},{
//				xtype : 'panel',
//				border : true,
//				flex : 1,
//				region : 'center'
//			}]
//		}]
//	})


//	7강 버튼종류 알아보기
//	/**
//		기본버튼
//		크기별 버튼
//		아이콘버튼
//		아이콘 + 텍스트버튼
//		토글버튼
//		메뉴버튼
//		분할된 메뉴버튼
//		그룹버튼
//	 */
//	Ext.create("Ext.container.Viewport",{
//		layout : 'border',
//		renderTo : Ext.getBody(),
//		items : [{
//			xtype : 'panel',
//			height : 100,
//			region : 'north',
//			heaber : false,
//			items : [{
//				xtype : 'toolbar',
//				items : [{
//					// button 버튼에 함수
//					xtype : 'button',
//					text : 'File',
////					버튼에 menu가 나옴
//					menu : [{
//						text : 'New',
//						iconCls : 'far fa-file'
//					},{
//						text : 'Open File'
//					},{
//						text : 'Close'
//					}]
//				},{
//					//splitbutton 버튼 옆에 함수
//					xtype : 'splitbutton',
//					text : 'Edit',
//					menu : [{
//						text : 'Undo Typing'
//					},{
//						text : 'Redo'
//					},{
//						text : 'Cut'
//					}]
//				},{
//					xtype : 'button',
//					text : 'Source'
//				},{
//					// segmentedbutton : 버튼이그룹화 됨
//					xtype : 'segmentedbutton',
//					allowMultiple : true,
//					items : [{
//						xtype : 'button',
//						text : 'Refactor'
//					},{
//						xtype : 'button',
//						text : 'Navigate'
//					},{
//						xtype : 'button',
//						text : 'Search'
//					}]
//					
//				}]
//			},{
//				xtype : 'toolbar',
//				items : [{
//					xtype : 'button',
//					iconCls : 'fas fa-plus'
//				},{
//					xtype : 'button',
//					iconCls : 'fas fa-save'
//				},{
//					xtype : 'button',
//					iconCls : 'fas fa-desktop'
//				},{
//					xtype : 'button',
//					iconCls : 'fas fa-play',
//					scale : 'small'
//				},{
//					xtype : 'button',
//					iconCls : 'fas fa-pause',
//					scale : 'medium'
//				},{
//					xtype : 'button',
//					iconCls : 'fas fa-stop',
//					scale : 'large',
//					enableToggle : true
//				}]
//			}]
//			
//		},{
//			xtype : 'panel',
//			width : 150,
//			split : true,
//			region : 'west',
//			title : "Project Explorer"
//			
//		},{
//			xtype : 'panel',
//			flex : 1,
////			collapsible : true,
//			region : 'center',
//			layout : 'border',
//			items : [{
//				xtype : 'panel',
//				flex : 2,
//				region : 'center',
//				title : 'app.js'
//			},{
//				xtype : 'panel',
//				flex : 1,
//				region : 'south',
//				split : true,
//				title : 'Servers' 
//			}]
//		}]
//		
//		
//	})


//	8강 메시지상자 
////	alert("alert 입니다.");
////	confirm("confirm 입니까?");
//	//1. ExtJS ALERT
//	// 예는 static함수여서 create 안써도됨
//	//Ext.Msg.alert("타이틀","바디");
////	Ext.Msg.confirm("타이틀","바디",function(button){
////		if(button == "yes"){
////			Ext.Msg.alert("타이틀","yes입니다.");
////		}else{
////			Ext.Msg.alert("타이틀","no입니다.");
////		}
////	});
//
//
////	Ext.toast("토스트창입니다.");
//	//align예약어 : t, tr, tl, b, br, bl
//	//실시간 알림할때 유용할듯?
//	/*Ext.toast({
//		html : "토스트입니다.",
//		align : 'br'
//	});*/
//	
//	Ext.MessageBox.show({
//		title : '상단제목',
//		msg : '몸통내용',
////		icon : Ext.MessageBox.INFO,
//		icon : Ext.MessageBox.QUESTION,
////		icon : Ext.MessageBox.ERROR,
////		icon : Ext.MessageBox.WARNING,
////		buttons : Ext.MessageBox.OKCANCEL
////		buttons : Ext.MessageBox.YESNO
////
////		//버튼속성 직접입력
//		buttonText : {
////			ok : "그래",
////			no : "아니",
//			yes : '예',
//			cancel : '아니오'
//		},  
//
////		buttons : Ext.MessageBox.YESNO,
//		fn : function(button){
//			if(button == "yes"){
//				Ext.Msg.alert("타이틀",button+"입니다.!");
//			}else{
//				Ext.Msg.alert("타이틀",button+"입니다.");
//			}
//		}
//		
//	})
	
	
	//9강. 윈도우 컴포넌트 알아보기
	//Ext.window.Window
//	var win = Ext.create("Ext.window.Window",{
//		autoShow : true
//	});

//	var win = Ext.create("Ext.window.Window");
//	win.show();
//	Ext.create("Ext.panel.Panel",{
//		width : 300,
//		height : 300,
//		renderTo : Ext.getBody(),
//		border : true,
//		layout : 'center',
//		items : [{
//			xtype : 'button',
//			text : '버튼',
//			listeners : {
//				click : function(btn){
//					win.show();
//				}
//			}
//			
//		}]
//	})
////	//윈도우창
////	var win = Ext.create("Ext.window.Window",{
////		width : 300,
////		height : 300,
//////		minWidth : 250,
//////		minHeight : 250,
//////		maxWidth : 350,
//////		maxHeight : 350,
////		autoShow : true,
////		title : 'Window Title',
////		layout : 'center',
////		//모달
////		modal : true,  
////		// closable : false : 닫기버튼 없에기
//////		closable : false,
////		//resizable : false : 창 사이즈 변환 불가
//////		resizable : false,
////		items : [{
////			xtype : 'button',
////			text : '버튼'
////		}],
////		
////		//maximizable : true 최대화 생성 min max 없어야함
////		maximizable : true
////	});
//		//윈도우창
//	var win = Ext.create("Ext.window.Window",{
//		width : 300,
//		height : 300,
//		title : 'Window Title',
//		layout : 'center',
//		//모달
//		modal : true,  
//		items : [{
//			xtype : 'button',
//			text : '버튼'
//		}],
//		
//		//maximizable : true 최대화 생성 min max 없어야함
//		maximizable : true
//	});



	//10강. 탭패널 간단히 만들어보기
//	Ext.create("Ext.tab.Panel",{
//		width : 500,
//		height : 500,
//		//패널선언할떄는 꼭 renderTo : Ext.getBody() 쓰자
//		renderTo : Ext.getBody(),
//		tabPosition : 'left',
//		items : [{
//			xtype : 'panel',
//			title : '탭1',
//			items : [{
//				xtype : 'button',
//				text : '버튼1'
//			}]
//		},{
//			xtype : 'panel',
//			title : '탭2',
//			items : [{
//				xtype : 'button',
//				text : '버튼2'
//			}]
//		},{
//			xtype : 'panel',
//			title : '탭3',
//			items : [{
//				xtype : 'button',
//				text : '버튼3'
//			}]
//		},{
//			xtype : 'panel',
//			title : '탭4',
//			items : [{
//				xtype : 'button',
//				text : '버튼4'
//			}]
//		}]
//	})



	//11강. 폼필드 알아보기(중요!)
//	Ext.create("Ext.panel.Panel",{
//		width : 500,
//		height : 500,
//		title : '폼필드 알아보기',
//		renderTo : Ext.getBody(),
//		items : [{
//			// textfield : 입력필드
//			// xtype : 'textfield' : input Type text와 같음
//			xtype : 'textfield',
//			allowBlank : false,
//			emptyText : '입력하세요'
//		},{
//			//패스워드
//			xtype : 'textfield',
//			inputType : 'password',
//			llowBlank : false,
//			emptyText : '패스워드를 입력하세요'
//		},{
//			//날짜
//			xtype : 'datefield',
//			//데이터 형식 포맷 (한글자만)
//			format : 'y-m-d'
//		},{
//			//시간
//			xtype : 'timefield'
//			
//		},{
//			//숫자
//			xtype : 'numberfield',
//			//최소값
//			minValue : 0,
//			maxValue : 100
//		},{
//			//파일
//			xtype : 'filefield',
//			// ajax쓸때 유용
//			buttonOnly : true
//		},{
//			//체크박스
//			xtype : 'checkboxfield',
//			boxLabel : '아이디 기억'
//		},{
//			//라디오 버튼
//			xtype : 'radiofield',
//			name : "gender",
//			boxLabel : '남'
//			
//		},{
//			//라디오 버튼 
//			xtype : 'radiofield',
//			name : "gender",
//			boxLabel : '여'
//		},{
//			//슬라이더
//			xtype : 'slider',
//			width : 300,
//			value : 50
//		}]
//	})



	//12강 콤보박스를 이용한 데이터스토어 이해(1)
//	Ext.create("Ext.panel.Panel",{
//		width : 300,
//		height : 300,
//		title : "DataStore 이해",
//		renderTo : Ext.getBody(),
//		items : [{
//			xtype : 'combo',
//			
//			//콤보박스에 입력못함
//			editable : false,
//			
//			//초기 디폴트값 지정
//			value : 'second',
//			
//			//우리가 표출해주고 싶은 필드명(키값)
//			displayField : 'test1',
//			
//			//선택했을때 실제 데이터가 담겨 있는값(실제값)
//			valueField : 'test2',
//			
//			//Ext.create.Store  (알아서 생성해줌)
//			store : {
//				fields : ['test1','test2'],
//				data : [{
//					test1 : '첫번째',
//					test2 : 'first'
//				},{
//					test1 : '두번째',
//					test2 : 'second'
//				},{
//					test1 : '세번째',
//					test2 : 'third'
//				}]
//			}
//		}]
//		
//	})
//	


	//12강 그리드패널을 이용한 데이터스토어 이해(2)
	//Ext.grid.Panel
//	Ext.create("Ext.grid.Panel",{
//		width : 500,
//		height : 500,
//		renderTo : Ext.getBody(),
//		columns : [{
//			text : '컬럼1',
//			//컬럼만 정렬
//			style : 'text-align:center',
//			flex : 1,
//			align : 'center',
//			//dataIndex : 데이터의 키값을 입력하여 데이터를 뽑아쓸수있게 한다
//			dataIndex : 'c1'
//		},{
//			text : '컬럼2',
//			flex : 1,
//			align : 'center',
//			dataIndex : 'c2'
//		},{
//			text : '컬럼3',
//			flex : 1,
//			align : 'center',
//			dataIndex : 'c3'
//		}],
//		
//		store : {
//			fields : ['c1', 'c2', 'c3'],
//			// tr처럼 생각
//			data :[{
//				c1 : '컬럼 1-1',
//				c2 : '컬럼 1-2',
//				c3 : '컬럼 1-3',
//			},{
//				c1 : '컬럼 2-1',
//				c2 : '컬럼 2-2',
//				c3 : '컬럼 2-3',
//			}]
//		}
//	})
 


	//12강 비동기(Ajax)를 이용한 데이터스토어 이해(3)
//	Ext.create("Ext.panel.Panel",{
//		width : 500,
//		height : 500,
//		renderTo : Ext.getBody(),
//		items : [{
//			xtype : 'combo',
//			displayField : 'key',  
//			valueField : 'value',
//			store : {
//				fields : ['key','value'],
//				// ajax로 호출할 때에는 proxy를 호출한다.
//				// 이구조가 중요함
//				proxy : {
//					type : 'ajax',
//					url : '/data/combo.json',
//					reader : {
//						type : 'json',
//						// rootProperty : 'data' => 여기가 json파일에서 데이터의 키이름
//						rootProperty : 'data',
//					}
//				}
//			}
//		},{
//			xtype : 'grid',
//			columns : [{
//				text : '컬럼1',
//				dataIndex : 'column1'
//			},{
//				text : '컬럼2',
//				dataIndex : 'column2'
//			},{
//				text : '컬럼3',
//				dataIndex : 'column3'
//			}],
//			store : {
//				//준비된걸 바로 데이터 호출
//				autoLoad : true,
//				fields : ['column1','column2','column3'],
//				// ajax로 호출할 때에는 proxy를 호출한다.
//				// 이구조가 중요함
//				proxy : {
//					type : 'ajax',
////					url : 'http://localhost/grid.jsp',
//					url : '/data/grid.json',
//					reader : {
//						type : 'json',
//						// rootProperty : 'data' => 여기가 json파일에서 데이터의 키이름
//						rootProperty : 'data',
//					}
//				}
//			}
//		}]
//	})

	//13강 트리패널 알아보기
	/**
		text : button 컴포넌트처럼 문구출력할때 필요한 속성
		expanded : 확장여부 - children package
		children : json array text / expanded / expanded / children / leaf
		leaf : true - 마지막 노드다. - 파일아이콘 출력
	 */
	//패널로 이용
//	Ext.create("Ext.panel.Panel",{
//		width : 500,
//		height : 500,
//		renderTo : Ext.getBody(),
//		items : [{
//			xtype : 'treepanel',
//			root : {
//				text : 'Servers',
//				//expanded : false : 자동펴기 x true면 처음화면에 펴져있음
//				expanded : false,
//				//자식 속성
//				children : [{
//					text : '.settings',
//					expanded : false,
//					children : [{
//						text : '.org',
//						leaf : true
//					}]
//				},{
//					text : 'Tomcat v8.5 Server at localhost-config',
//					expanded : false,
//					children : [{
//						text : 'catalina.policy',
//						leaf : true
//					},{
//						text : 'catalina.properties',
//						leaf : true
//					},{
//						text : 'context.xml',
//						leaf : true
//					},{
//						text : 'server.xml',
//						leaf : true
//					},{
//						text : 'tomcat-users.xml',
//						leaf : true
//					},{
//						text : 'web.xml',
//						leaf : true
//					}]
//				},{
//					text : '.project',
//					leaf : true
//				}]
//			}
//		}]
//	})

	// 스토어 이용
//	Ext.create("Ext.panel.Panel",{
//		width : 500,
//		height : 500,
//		renderTo : Ext.getBody(),
//		items : [{
//			xtype : 'treepanel',
//			
//			store : {
//				root : {
//					text : 'Servers!',
//					//expanded : false : 자동펴기 x true면 처음화면에 펴져있음
//					expanded : true,
//				},
//				proxy : {
//					type : 'ajax',
//					url : '/data/tree.json',
//					reader : {
//						type : 'json'
//					}
//				}
//			}
//		}]
//	})



	//예제 : emp 테이블 ExtJS에 연동해보기
	/*Ext.create("Ext.panel.Panel",{
		width : 800,
		height : 300,
		renderTo : Ext.getBody(),
		layout : 'fit',
		items : [{
			xtype : 'grid',
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
				dataIndex : 'hiredate'
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
			store : Ext.create("Ext.data.BufferedStore",{
				autoLoad : true,
				fields : ['empno','ename','job','hiredate','sal','comm','mgr','deptno'],
			
				proxy : {
					
					type : 'ajax',
					url : 'http://localhost/emp/selectEmpList',
					reader : {
						type : 'json',
						// rootProperty : 'data' => 여기가 json파일에서 데이터의 키이름
						rootProperty : 'empList',
//						totalProperty : 'total'
					}
				}
			})
			
			/*store : {
				autoLoad : true,
				fields : ['empno','ename','job','hiredate','sal','comm','mgr','deptno'],
				pageSize : 5,
				proxy : {
					
					type : 'ajax',
					url : 'http://localhost/emp/selectEmpList',
					reader : {
						type : 'json',
						// rootProperty : 'data' => 여기가 json파일에서 데이터의 키이름
						rootProperty : 'empList',
						totalProperty : 'total'
					}
				}
			},
			//bottom toolbar
			bbar :{
				xtype : 'pagingtoolbar',
				//애니메이션 기능
//				plugins : 'ux-slidingpager', 
//				plugins : 'ux-progressbarpager',
				displatInfo : true
			}
			
			
		}]
		

	})*/



	//14강. 그리드 페이징 및 버퍼스토어
	
	
	//15강. 그리드 에디팅 플러그인 적용하기
//	Ext.create("Ext.panel.Panel",{
//		width : 800,
//		height : 500,
//		renderTo : Ext.getBody(),
//		layout : 'fit',
//		items : [{
//			xtype : 'grid',
//			//데이터 에디트
//			plugins : 'cellediting',
//			//행 에디트
////			plugins : 'rowediting',
//			columns : [{
//				text : '사원번호',
//				flex :1,
//				dataIndex : 'empno',
//				editor : {
//					xtype : 'textfield'
//				}
//			},{
//				text : '이름',
//				flex :1,
//				dataIndex : 'ename',
//				editor : {
//					xtype : 'textfield'
//				}
//			},{
//				text : '직책',
//				flex :1,
//				dataIndex : 'job',
//				editor : {
//					xtype : 'textfield'
//				}
//			},{
//				text : '입사일자',
//				flex :1,
//				dataIndex : 'hiredate',
//				editor : {
//					xtype : 'textfield'
//				}
//			},{
//				text : '급여',
//				flex :1,
//				dataIndex : 'sal',
//				editor : {
//					xtype : 'textfield'
//				}
//			},{
//				text : '상여',
//				flex :1,
//				dataIndex : 'comm',
//				editor : {
//					xtype : 'textfield'
//				}
//			},{
//				text : '선임번호',
//				flex :1,
//				dataIndex : 'mgr',
//				editor : {
//					xtype : 'textfield'
//				}
//			},{
//				text : '부서번호',
//				flex :1,
//				dataIndex : 'deptno',
//				editor : {
//					xtype : 'textfield'
//				}
//			}],
//			/*store : Ext.create("Ext.data.BufferedStore",{
//				autoLoad : true,
//				fields : ['empno','ename','job','hiredate','sal','comm','mgr','deptno'],
//			
//				proxy : {
//					
//					type : 'ajax',
//					url : 'http://localhost/emp/selectEmpList',
//					reader : {
//						type : 'json',
//						// rootProperty : 'data' => 여기가 json파일에서 데이터의 키이름
//						rootProperty : 'empList',
////						totalProperty : 'total'
//					}
//				}
//			})*/
//			
//			store : {
//				autoLoad : true,
//				autoSync : true,
//				fields : ['empno','ename','job','hiredate','sal','comm','mgr','deptno'],
//				pageSize : 5,
//				proxy : {
//					
//					type : 'ajax',
////					url : 'http://localhost/emp/updateEmp',
//					api : {
////						create : 'http://localhost/emp/updateEmp',
//						read : 'http://localhost/emp/selectEmpList',
//						update : 'http://localhost/emp/updateEmp'
////						destroy :
//					},
//					
//					writer : {
//						type : 'json',
//						rootProperty : 'empVo',
//						
//						writeAllFields : true,
//						endoe : true
//					},
//					
//					reader : {
//						type : 'json',
//						// rootProperty : 'data' => 여기가 json파일에서 데이터의 키이름
//						rootProperty : 'empList',
//						totalProperty : 'total'
//					}
//				}
//			},
//			
//			//bottom toolbar
//			bbar :{
//				xtype : 'pagingtoolbar',
//				//애니메이션 기능
////				plugins : 'ux-slidingpager', 
////				plugins : 'ux-progressbarpager',
//				displatInfo : true
//			}
//			
//			
//		}]
//		
//
//	})

	//16강. 이벤트 리스너 알아보기
//	Ext.create("Ext.panel.Panel",{
//		width : 800,
//		height : 500,
//		renderTo : Ext.getBody(),
//		layout : 'fit',
//		items : [{
//			xtype : 'grid',
//			//중요! 눌른탭의 데잍가 다 들어가있음
//			listeners : {
//				cellclick : function(obj, td, cellIndex, record, tr, rowIndex, e, eOpts){
//					console.log(record.getData());
//					console.log(record.getData().empno);
//					console.log(record.get("empno"));
//				},
//				//우클릭
//				itemcontextmenu : function(obg, record, item, index, e, eOpts){
//					console.log(record.get("empno"));
//				}
//			},
//			//데이터 에디트
//			plugins : 'cellediting',
//			//행 에디트
////			plugins : 'rowediting',
//			columns : [{
//				text : '사원번호',
//				flex :1,
//				dataIndex : 'empno',
//				editor : {
//					xtype : 'textfield'
//				}
//			},{
//				text : '이름',
//				flex :1,
//				dataIndex : 'ename',
//				editor : {
//					xtype : 'textfield'
//				}
//			},{
//				text : '직책',
//				flex :1,
//				dataIndex : 'job',
//				editor : {
//					xtype : 'textfield'
//				}
//			},{
//				text : '입사일자',
//				flex :1,
//				dataIndex : 'hiredate',
//				editor : {
//					xtype : 'textfield'
//				},
//				//renderer : 포맷팅 할때 유용할듯?
//				renderer : function(value){
//					var date = new Date(value);
//					var year = date.getFullYear();
//					var month = (1+date.getMonth());
//					month = month >= 10 ? month : '0' + month;
//					var day = date.getDate();
//					day = day >= 10 ? day : '0' +day;
//					return year + "-" + month +"-" + day;
//				}
//			},{
//				text : '급여',
//				flex :1,
//				dataIndex : 'sal',
//				editor : {
//					xtype : 'textfield'
//				}
//			},{
//				text : '상여',
//				flex :1,
//				dataIndex : 'comm',
//				editor : {
//					xtype : 'textfield'
//				}
//			},{
//				text : '선임번호',
//				flex :1,
//				dataIndex : 'mgr',
//				editor : {
//					xtype : 'textfield'
//				}
//			},{
//				text : '부서번호',
//				flex :1,
//				dataIndex : 'deptno',
//				editor : {
//					xtype : 'textfield'
//				}
//			}],
//			/*store : Ext.create("Ext.data.BufferedStore",{
//				autoLoad : true,
//				fields : ['empno','ename','job','hiredate','sal','comm','mgr','deptno'],
//			
//				proxy : {
//					
//					type : 'ajax',
//					url : 'http://localhost/emp/selectEmpList',
//					reader : {
//						type : 'json',
//						// rootProperty : 'data' => 여기가 json파일에서 데이터의 키이름
//						rootProperty : 'empList',
////						totalProperty : 'total'
//					}
//				}
//			})*/
//			
//			store : {
//				autoLoad : true,
//				autoSync : true,
//				fields : ['empno','ename','job','hiredate','sal','comm','mgr','deptno'],
//				pageSize : 5,
//				proxy : {
//					
//					type : 'ajax',
////					url : 'http://localhost/emp/updateEmp',
//					api : {
////						create : 'http://localhost/emp/updateEmp',
//						read : 'http://localhost/emp/selectEmpList',
//						update : 'http://localhost/emp/updateEmp'
////						destroy :
//					},
//					
//					writer : {
//						type : 'json',
//						rootProperty : 'empVo',
//						
//						writeAllFields : true,
//						endoe : true
//					},
//					
//					reader : {
//						type : 'json',
//						// rootProperty : 'data' => 여기가 json파일에서 데이터의 키이름
//						rootProperty : 'empList',
//						totalProperty : 'total'
//					}
//				}
//			},
//			dockedItems : [{
//				xtype : 'toolbar',
//				dock : 'top',
//				items : [{
//					text : 'dockedItems Toolbar'
//				}]
//			}],
//			
//			
//			// 5toolbar position
//			// tbar : top toolbar
//			tbar : [{
//				xtype : 'button',
//				text : '추가',
//				listeners : function(){
//					
//				}
//				/*handler : function(btn){
//					alert("버튼클릭");
//				}*/
//			},{
//				autoLoad : true,
////				listeners : {
////					change : function(obj, newValue, oldValue, eOpts){
////						console.log(newValue+","+oldValue);
////					}
////				},
//				listeners : {
//					cellclick : function(obj, td, cellIndex, record, tr, rowIndex, e, eOpts){
//						console.log(record.getData());
//					}
//				},
//				xtype : 'combo',
//				displayField : 'key',
//				valueFiled : 'value',
//				queryMode : 'local',
//				store : {
//					fields : ['key','value'],
//					data : [{
//						key : '선택1',
//						value : '값1'
//					},{
//						key : '선택2',
//						value : '값2'
//					},{
//						key : '선택3',
//						value : '값3'
//					}]
//				}
//			}],
//			// bbar : bottom toolbar
////			bbar : [{
////				xtype : 'button',
////				text : 'bbar button'
////			}],
////			// lbar : left toolbar
////			lbar : [{
////				xtype : 'button',
////				text : 'lbar button'
////			}],
////			// rbar : right toolbar
////			rbar : [{
////				xtype : 'button',
////				text : 'rbar button'
////			}],
////			// fbar : footer toolbar
////			fbar : [{
////				xtype : 'button',
////				text : 'fbar button'
////			}]
//			
////			//bottom toolbar
////			bbar :{
////				xtype : 'pagingtoolbar',
////				//애니메이션 기능
//////				plugins : 'ux-slidingpager', 
//////				plugins : 'ux-progressbarpager',
////				displatInfo : true
////			}
//			
//			
//		}]
//		
//
//	})


	//17강. 그리드 CRUD
//	Ext.create("Ext.panel.Panel",{
//		width : 500,
//		height : 500,
//		renderTo : Ext.getBody(),
//		layout : 'fit',
//		items : [{
//			xtype : 'grid',
//			plugins : 'cellediting',
//			columns : [{
//				text : '사원번호',
//				flex :1,
//				dataIndex : 'empno',
//				editor : {
//					xtype : 'textfield'
//				}
//				
//			},{
//				text : '이름',
//				flex :1,
//				dataIndex : 'ename',
//				editor : {
//					xtype : 'textfield'
//				}
//			},{
//				text : '직책',
//				flex :1,
//				dataIndex : 'job',
//				editor : {
//					xtype : 'textfield'
//				}
//			},{
//				text : '입사일자',
//				flex :1,
//				dataIndex : 'hiredate',
//				editor : {
//					xtype : 'textfield'
//				},
//				renderer : function(value){
//					var date = new Date(value);
//					var year = date.getFullYear();
//					var month = (1+date.getMonth());
//					month = month >= 10 ? month : '0' + month;
//					var day = date.getDate();
//					day = day >= 10 ? day : '0' +day;
//					return year + "-" + month +"-" + day;
//				}
//			},{
//				text : '급여',
//				flex :1,
//				dataIndex : 'sal',
//				editor : {
//					xtype : 'textfield'
//				}
//			},{
//				text : '상여',
//				flex :1,
//				dataIndex : 'comm',
//				editor : {
//					xtype : 'textfield'
//				}
//			},{
//				text : '선임번호',
//				flex :1,
//				dataIndex : 'mgr',
//				editor : {
//					xtype : 'textfield'
//				}
//			},{
//				text : '부서번호',
//				flex :1,
//				dataIndex : 'deptno',
//				editor : {
//					xtype : 'textfield'
//				}
//			}],
//			store : {
//				autoLoad : true,
//				fields : ['empno','ename','job','hiredate','sal','comm','mgr','deptno'],
//				proxy : {
//					type : 'ajax',
//					api : {
//						create : 'http://localhost/emp/insertEmp',
//						read : 'http://localhost/emp/selectEmpList',
//						update : 'http://localhost/emp/updateEmp',
//						destroy : 'http://localhost/emp/deleteEmp'
//					},
//					reader : {
//						type : 'json',
//						rootProperty : 'empList',
//						totalProperty : 'total'
//					},
//					writer : {
//						type : 'json',
//						rootProperty : 'empVo',
//						writeAllFields : true,
//						encode : true
//					}
//				}
//			},
//			tbar : [{
//				xtype : 'button',
//				text : '등록',
//				handler : function(btn){
//					//1. store 찾기
//					// ExtJS - up(컴포넌트명 or itemId) / down
////					console.log("AA",btn.up("grid"));
//					var store = btn.up("grid").getStore();
//					
//					var newRec = {
//						empno : "",
//						ename : "",
//						job : "",
//						hiredate : "",
//						sal : "",
//						comm : "",
//						mgr : "",
//						deptno : ""
//					}
////					store.add(newRec);
//					store.insert(0,newRec);
//				}
//			},{
//				xtype : 'button',
//				text : '삭제',
//				handler : function(btn){
////					console.log("BB",btn.up("grid").getSelection());
//					var store = btn.up("grid").getStore();
//					var removeRec = btn.up("grid").getSelection();
//					store.remove(removeRec);
//				}
//			},{
//				xtype : 'button',
//				text : '적용',
//				handler : function(btn){
//					var store = btn.up("grid").getStore();
////					store.load();
////					store.reload();
//					store.sync({
//						callback : function(){
//							store.reload();
//						}
//					});
//				}
//			}],
//			bbar : {
//				xtype : 'pagingtoolbar',
//				displayInfo : true
//			}
//			
//		}]
//	})


	//18강. Ajax 클래스 사용법 이해
////	Ext.Ajax.request({
////		url : 'http://localhost/emp/selectPagingEmployee',
////		method : 'POST',
////		params : {
////			page : 1,
////			pageSize : 5
////		},
////		success : function(response){
////			console.log("success", Ext.decode(response.responseText));
////		},
////		failure : function(response){
////			console.log(response);
////		}
////	});
//
//	Ext.create("Ext.panel.Panel",{
//		width : 500,
//		height : 500,
//		renderTo : Ext.getBody(),
//		//여러게 넣을떄는 이거 제거
////		layout : 'fit',
//		listeners : {
//			//boxready 이거 중요! 
//			boxready : function(obj){
//				Ext.Ajax.request({
//					url : 'http://localhost/emp/selectPagingEmployee',
//					method : 'POST',
//					params : {
//						page : 1,
//						pageSize : 5
//					},
//					success : function(response){
//						var result = Ext.decode(response.responseText);
//						console.log("S",result);
//						console.log("success", Ext.decode(response.responseText));
//						var store = obj.down("grid").getStore();
//						console.log("store", store);
//						// 데이터를 배열로 넣을 때
//						store.loadData(result.empList);
//						obj.down("panel").update(result.empCnt);
//					},
//					failure : function(response){
//						console.log(response);
//					}
//				});
//			}
//		},
//		items : [{
//			xtype : 'panel',
//			width : 500,
//			heigth : 200,
//			html : "<h2>test</h2>"
//		},{
//			xtype : 'grid',
//			whith : 500,
//			heigth : 300,
//			/*listeners : {
//				//중요!
//				boxready : function(obj){
//					Ext.Ajax.request({
//						url : 'http://localhost/emp/selectPagingEmployee',
//						method : 'POST',
//						params : {
//							page : 1,
//							pageSize : 5
//						},
//						success : function(response){
//							var result = Ext.decode(response.responseText);
//							console.log("success", Ext.decode(response.responseText));
//							var store = obj.getStore();
//							console.log("store", store);
//							// 데이터를 배열로 넣을 때
//							store.loadData(result.empList);
//						},
//						failure : function(response){
//							console.log(response);
//						}
//					});
//				}
//			},*/
//			plugins : 'cellediting',
//			columns : [{
//				text : '사원번호',
//				flex :1,
//				dataIndex : 'empno',
//				editor : {
//					xtype : 'textfield'
//				}
//				
//			},{
//				text : '이름',
//				flex :1,
//				dataIndex : 'ename',
//				editor : {
//					xtype : 'textfield'
//				}
//			},{
//				text : '직책',
//				flex :1,
//				dataIndex : 'job',
//				editor : {
//					xtype : 'textfield'
//				}
//			},{
//				text : '입사일자',
//				flex :1,
//				dataIndex : 'hiredate',
//				editor : {
//					xtype : 'textfield'
//				},
//				renderer : function(value){
//					var date = new Date(value);
//					var year = date.getFullYear();
//					var month = (1+date.getMonth());
//					month = month >= 10 ? month : '0' + month;
//					var day = date.getDate();
//					day = day >= 10 ? day : '0' +day;
//					return year + "-" + month +"-" + day;
//				}
//			},{
//				text : '급여',
//				flex :1,
//				dataIndex : 'sal',
//				editor : {
//					xtype : 'textfield'
//				}
//			},{
//				text : '상여',
//				flex :1,
//				dataIndex : 'comm',
//				editor : {
//					xtype : 'textfield'
//				}
//			},{
//				text : '선임번호',
//				flex :1,
//				dataIndex : 'mgr',
//				editor : {
//					xtype : 'textfield'
//				}
//			},{
//				text : '부서번호',
//				flex :1,
//				dataIndex : 'deptno',
//				editor : {
//					xtype : 'textfield'
//				}
//			
//			}],
//			store : {
//				fields : ['empno','ename','job','hiredate','sal','comm','mgr','deptno'],
//				data : []
//			}
//		}] 
//	})


//	//19강. 세로/가로 막대 차트 그래프 만들기
//	/**
//		polar / cartesian
//		
//		cartesian : X/Y
//		
//		polar : X/Y (X) (x,y 좌표가 없는 나머지 그래프들)
//		
//	 */
//	 //cartesian
//	 Ext.create("Ext.panel.Panel",{
//		width : 500,
//		height : 500,
//		renderTo : Ext.getBody(),
//		layout : 'fit',
//		items : [{
//			xtype : 'cartesian',
//			flipXY : true,
////			innerPadding : 50,
////			insetPadding : 50,
//			//과목별 성적
//			store : {
//				fields : ['score','subject'],
//				data : [{
//					subject : '국어',
//					score : 80
//				},{
//					subject : '영어',
//					score : 50
//				},{
//					subject : '수학',
//					score : 90
//				},{
//					subject : '과학',
//					score : 100
//				},{
//					subject : '사회',
//					score : 60
//				}]
//			},
//			//아래 2개가 기본으로 딸려감
//			//x,y 축 내용
//			axes : [{ 
//				type : 'numeric3d',  
////				position : 'left',
//				position : 'bottom',
//				title : '(점)'
//			},{
//				type : 'category3d',
//				position : 'left'
////				position : 'bottom'
//			}],
//			//어떤 차트를 쓰고 어떤식의 속성을 정의할건지
//			series : {
//				type : 'bar3d',
//				xField : 'subject',
//				yField : 'score',
//				label : {
//					field : 'score',
//					display : 'insideEnd'
//				}
//			}
//			
//			
//			
//		}]
//	})

	//19강. 누적 막대 그래프 만들기
//	Ext.create("Ext.panel.Panel",{
//		width : 500,
//		height : 500,
//		renderTo : Ext.getBody(),
//		layout : 'fit',
//		bbar : [{
//			xtype : 'button',
//			text : '그룹버튼',
//			handler : function(btn){
//				var chart = btn.up("panel").down("cartesian");
////				console.log("log",chart.getSeries()[0].setStacked(false))
//				chart.getSeries()[0].setStacked(false);
//				chart.redraw();
//			}
//		},{
//			xtype : 'button',
//			text : '스택버튼',
//			handler : function(btn){
//				var chart = btn.up("panel").down("cartesian");
//				console.log("log",chart.getSeries()[0].setStacked(false))
//				chart.getSeries()[0].setStacked(true);
//				chart.redraw();
//			}
//		}],
//		items : [{
//			xtype : 'cartesian',
//			//가로로 출력할때 선언
////			flipXY : true,
////			innerPadding : 50,
////			insetPadding : 50,
//			//과목별 성적
//			store : {
//				fields : ['age','vote1','vote2'],
//				data : [{
//					age : '20대',
//					vote1 : 65.8,
//					vote2 : 33.7
//				},{
//					age : '30대',
//					vote1 : 66.5,
//					vote2 : 33.1
//				},{
//					age : '40대',
//					vote1 : 55.6,
//					vote2 : 44.1
//				},{
//					age : '50대',
//					vote1 : 37.4,
//					vote2 : 62.5
//				},{
//					age : '60대',
//					vote1 : 27.5,
//					vote2 : 72.3
//				}]
//			},
//			//아래 2개가 기본으로 딸려감
//			//x,y 축 내용
//			axes : [{ 
//				type : 'numeric3d',  
//				position : 'left',
////				position : 'bottom',
//				title : '(%)'
//			},{
//				type : 'category3d',
////				position : 'left'
//				position : 'bottom'
//			}],
//			//어떤 차트를 쓰고 어떤식의 속성을 정의할건지
//			series : {
//				type : 'bar3d',
//				//하나의 그래프를 두개로 나눌떄
//				stacked : false,
//				xField : 'age',
//				yField : ['vote2','vote1'],
//				label : {
//					field : ['vote1','vote2'],
//					display : 'insideEnd'
//				}
//			}
//			
//			
//			
//		}]
//	})
	
	
	//19강. 선형 차트 만들기
//	Ext.create("Ext.panel.Panel",{
//		width : 500,
//		height : 500,
//		renderTo : Ext.getBody(),
//		layout : 'fit',
//		items : [{
//			xtype : 'cartesian',
//			innnerPadding : 30,
//			store : {
//				fields : ['month','weight'],
//				data : [{
//					month : '1월',
//					weight : 90
//				},{
//					month : '2월',
//					weight : 86
//				},{
//					month : '3월',
//					weight : 82.3
//				},{
//					month : '4월',
//					weight : 78.8
//				},{
//					month : '5월',
//					weight : 80.2
//				}]
//			},
//			axes : [{
//				type : 'numeric',
//				minimum : 0,
//				maximum : 100,
//				position : 'left',
//				title : '(KG)'
//			},{
//				type : 'category',
//				position : 'bottom'
//			}],
//			series : {
//				type : 'line',
//				smooth : true,
//				marker : {
//					radius : 4
//				},
//				xField : 'month',
//				yField : 'weight',
//				label : {
//					field : 'weight',
//					display : 'insideEnd'
//				}
//			}
//		}],
//		
//		
//	})

//	Ext.create("Ext.panel.Panel",{
//		width : 500,
//		height : 500,
//		renderTo : Ext.getBody(),
//		layout : 'fit',
//		bbar : [{
//			xtype : 'button',
//			text : '그룹버튼',
//			handler : function(btn){
//				var chart = btn.up("panel").down("cartesian");
////				console.log("log",chart.getSeries()[0].setStacked(false))
//				chart.getSeries()[0].setStacked(false);
//				chart.redraw();
//			}
//		},{
//			xtype : 'button',
//			text : '스택버튼',
//			handler : function(btn){
//				var chart = btn.up("panel").down("cartesian");
//				console.log("log",chart.getSeries()[0].setStacked(false))
//				chart.getSeries()[0].setStacked(true);
//				chart.redraw();
//			}
//		}],
//		items : [{
//			xtype : 'cartesian',
//			innerPadding : 30,
//			store : {
//				fields : ['age','vote1','vote2'],
//				data : [{
//					age : '20대',
//					vote1 : 65.8,
//					vote2 : 33.7
//				},{
//					age : '30대',
//					vote1 : 66.5,
//					vote2 : 33.1
//				},{
//					age : '40대',
//					vote1 : 55.6,
//					vote2 : 44.1
//				},{
//					age : '50대',
//					vote1 : 37.4,
//					vote2 : 62.5
//				},{
//					age : '60대',
//					vote1 : 27.5,
//					vote2 : 72.3
//				}]
//			},
//			//아래 2개가 기본으로 딸려감
//			//x,y 축 내용
//			axes : [{ 
//				type : 'numeric3d',  
//				position : 'left',
//				minimum : 0,
//				maximum : 100,
////				position : 'bottom',
//				title : '(%)'
//			},{
//				type : 'category3d',
////				position : 'left'
//				position : 'bottom'
//			}],
//			//어떤 차트를 쓰고 어떤식의 속성을 정의할건지
//			series : [{
//				type : 'line',
//				//부드럽게
//				smooth : true,
//				//마커 표시
//				marker : {
//					radius : 4
//				},
//				xField : 'age',
//				yField : 'vote1',
//				label : {
//					field : 'vote1',
//					display : 'insideEnd'
//				}
//			},{
//				type : 'line',
//				smooth : true,
//				marker : {
//					radius : 4
//				},
//				xField : 'age',
//				yField : 'vote2',
//				label : {
//					field : 'vote2',
//					display : 'insideEnd'
//				}
//			}]
//			
//			
//			
//		}]
//	})



//	//19강. 영역 차트 만들기
//	Ext.create("Ext.panel.Panel",{
//		width : 500,
//		height : 500,
//		renderTo : Ext.getBody(),
//		layout : 'fit',
//		
//		items : [{
//			xtype : 'cartesian',
//			legend : {
//				docked : 'bottom',
//			},
//			innerPadding : 30,
//			store : {
//				fields : ['year','seoul','busan','gyunggi','jeju'],
//				data : [{
//					year : 2014,
//					seoul : 10143164,
//					busan : 3526648,
//					gyunggi : 12245960,
//					jeju : 594623
//				},{
//					year : 2015,
//					seoul : 10104515,
//					busan : 3517898,
//					gyunggi : 12366711,
//					jeju : 608325
//				},{
//					year : 2016,
//					seoul : 10018537,
//					busan : 3513361,
//					gyunggi : 12536474,
//					jeju : 625451
//				},{
//					year : 2017,
//					seoul : 9930478,
//					busan : 3496779,
//					gyunggi : 12728620,
//					jeju : 642388
//				}]
//			},
//			//아래 2개가 기본으로 딸려감
//			//x,y 축 내용
//			axes : [{ 
//				type : 'numeric',  
//				position : 'left',
//				minimum : 0,
//				title : '지역별인구수'
//			},{
//				type : 'category',
////				position : 'left'
//				position : 'bottom'
//			}],
//			//어떤 차트를 쓰고 어떤식의 속성을 정의할건지
//			series : [{
//				type : 'area',
//				style : {
//					opacity : 0.5
//				},
//				marker : {
//					radius : 4
//				},
//				highlightCfg : {
//					scaling : 1.5
//				},
//				tooltip : {
//					trackMouse : true,
//					renderer : function(tooltip,record){
//						tooltip.setHtml(record.get("seoul")+"명");
//					}
//				},
//				xField : 'year',
//				yField : 'seoul',
//				title : '서울'
//			},{
//				type : 'area',
//				style : {
//					opacity : 0.5
//				},
//				marker : {
//					radius : 4
//				},
//				highlightCfg : {
//					scaling : 1.5
//				},
//				tooltip : {
//					trackMouse : true,
//					renderer : function(tooltip,record){
//						tooltip.setHtml(record.get("busan")+"명");
//					}
//				},
//				xField : 'year',
//				yField : 'busan',
//				title : '부산'
//			},{
//				type : 'area',
//				style : {
//					opacity : 0.5
//				},
//				marker : {
//					radius : 4
//				},
//				highlightCfg : {
//					scaling : 1.5
//				},
//				tooltip : {
//					trackMouse : true,
//					renderer : function(tooltip,record){
//						tooltip.setHtml(record.get("gyunggi")+"명");
//					}
//				},
//				xField : 'year',
//				yField : 'gyunggi',
//				title : '경기'
//			},{
//				type : 'area',
//				style : {
//					opacity : 0.5
//				},
//				marker : {
//					radius : 4
//				},
//				highlightCfg : {
//					scaling : 1.5
//				},
//				tooltip : {
//					trackMouse : true,
//					renderer : function(tooltip,record){
//						tooltip.setHtml(record.get("jeju")+"명");
//					}
//				},
//				xField : 'year',
//				yField : 'jeju',
//				title : '제주'
//			}]
//			
//			
//			
//		}]
//	})

	//19강. 분산/분포 차트 만들기
	Ext.create("Ext.panel.Panel",{
		width : 500,
		height : 500,
		renderTo : Ext.getBody(),
		layout : 'fit',
		
		items : [{
			xtype : 'cartesian',
			innerPadding : 50,
			store : {
				fields : ['title','count','time'],
				data : [{
					title : 'ExtJS 6 로 만들어본 WebOS',
					time : 623,
					count : 268
				},{
					title : 'ExtJS 6 란?',
					time : 584,
					count : 124
				},{
					title : 'ExtJS 6 문법 및 레이아웃 이해(1)',
					time : 582,
					count : 65
				},{
					title : 'ExtJS 6 GPL 다운로드 및 환경설정',
					time : 510,
					count : 79
				},{
					title : 'ExtJS 6 테마변경 및 onLoad 이해',
					time : 493,
					count : 72
				},{
					title : 'ExtJS 6 버튼종류 알아보기',
					time : 478,
					count : 42
				},{
					title : 'ExtJS 6 API Document 보는법',
					time : 420,
					count : 43
				},{
					title : 'ExtJS 6 추가 레이아웃 알아보기',
					time : 345,
					count : 51
				}]
			},
			//아래 2개가 기본으로 딸려감
			//x,y 축 내용
			axes : [{ 
				type : 'numeric',  
				position : 'bottom',
				fields : 'count'
			},{ 
				type : 'numeric',  
				position : 'left',
				fields : 'time'
			}],
			//어떤 차트를 쓰고 어떤식의 속성을 정의할건지
			series : [{
				type : 'scatter',
				xField : 'count',
				yField : 'time',
				highlightCfg : {
					scale : 2
				},
				tooltip : {
					trackMouse : true,
					renderer : function(tooltip,record){
						tooltip.setHtml(record.get("title")+"<br>조회수:"+record.get("count")+"<br>시청시간(분) : "+record.get("time"));
						//제목
						
						//조회수
						
						//시청시간(분)
					}
				}
			}]
			
			
			
		}]
	})


























//	//27강. 데이터 바인딩 및 MVVM 구조이해
//	//Ext.define("")
//	Ext.create("Ext.panel.Panel",{
//		width : 500,
//		height : 500,
//		renderTo : Ext.getBody(),
//		layout : 'fit',
//		items : [{
//			xtype : 'sampleGrid',
////			tbar : [{
////				xtype : 'button',
////				text : '데이터로드',
////				handler : function(btn){
////					var grid = btn.up("grid");
////					var store = grid.getStore();
////					store.load();
////				}
////			}],
////			columns : [{
////				text : '사원번호',
////				flex :1,
////				dataIndex : 'empno',
////			
////				
////			},{
////				text : '이름',
////				flex :1,
////				dataIndex : 'ename',
////			
////			},{
////				text : '직책',
////				flex :1,
////				dataIndex : 'job',
////			
////			},{
////				text : '입사일자',
////				flex :1,
////				dataIndex : 'hiredate',
////			
////				renderer : function(value){
////					var date = new Date(value);
////					var year = date.getFullYear();
////					var month = (1+date.getMonth());
////					month = month >= 10 ? month : '0' + month;
////					var day = date.getDate();
////					day = day >= 10 ? day : '0' +day;
////					return year + "-" + month +"-" + day;
////				}
////			},{
////				text : '급여',
////				flex :1,
////				dataIndex : 'sal',
////			
////			},{
////				text : '상여',
////				flex :1,
////				dataIndex : 'comm',
////			
////			},{
////				text : '선임번호',
////				flex :1,
////				dataIndex : 'mgr',
////			
////			},{
////				text : '부서번호',
////				flex :1,
////				dataIndex : 'deptno',
////			
////			}],
////			store : {
////				autoLoad : true,
////				fields : ['empno','ename','job','hiredate','sal','comm','mgr','deptno'],
////				proxy : {
////					type : 'ajax',
//////					url : 'http://localhost/emp/selectPagingEmployee',
////					url : 'http://localhost/emp/selectEmpList',
////					reander : {
////						type : 'json',
////						rootProperty : 'empList'
////					}
////				}
////			}
//		}]
//	})


	//28강. 컴포넌트 변경 이해
//	Ext.create("Ext.container.Viewport",{
//		layout : 'border',
//		items : [{
//			xtype : 'panel',
//			title : '컴포넌트 변경',
//			region : 'north',
//			border : true,
//			items : [{
//				xtype : 'button',
//				text : '그리드',
//				handler : function(btn){
////					console.log("존재하니?",btn.up("viewport").down("component[region=center]"));
//					var page = btn.up("viewport").down("component[region=center]");
//					page.removeAll(true);
//					page.add(Ext.apply({
//						xtype : 'gridSample'
//					}));
//				}
//			},{
//				xtype : 'button',
//				text : '버튼',
//				handler : function(btn){
//					console.log("존재하니?",btn.up("viewport").down("component[region=center]"));
//					var page = btn.up("viewport").down("component[region=center]");
//					page.removeAll(true);
//					page.add(Ext.apply({
//						xtype : 'buttonSample'
//					}));
//				}
//			},{
//				xtype : 'button',
//				text : 'HTML',
//				handler : function(btn){
//					console.log("존재하니?",btn.up("viewport").down("component[region=center]"));
//					var page = btn.up("viewport").down("component[region=center]");
//					page.removeAll(true);
//					page.add(Ext.apply({
//						xtype : 'htmlSample'
//					}));
//				}
//			}]
//		},{
//			xtype : 'panel',
//			width : 200,
//			region : 'west'
//		},{
//			xtype : 'panel',
//			flex : 1,
//			region : 'center',
//			border : true
//		}]
//	})




























})
