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
	Ext.create("Ext.panel.Panel",{
		width : 800,
		height : 500,
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
			
			store : {
				autoLoad : true,
				
				proxy : {
					
					type : 'ajax',
					url : 'http://localhost/emp/selectEmpList',
					reader : {
						type : 'json',
						// rootProperty : 'data' => 여기가 json파일에서 데이터의 키이름
						rootProperty : 'empList'
					}
				}
			}
		}]
		

	})



	//14강. 그리드 페이징 및 버퍼스토어



















})
