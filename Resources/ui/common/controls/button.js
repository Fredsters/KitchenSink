function button_control() {
	var isBlackberry = Titanium.Platform.name == 'blackberry';
	
	var win = Ti.UI.createWindow();
	
	var b1 = Titanium.UI.createButton({
		title:'I am a Button',
		height:140,
		width:390,
		top:10
	});
	
	
	var b2 = Titanium.UI.createButton({
		title:'I am a Button',
		image:'/images/chat.png',
		width:200,
		height:40,
		top:60
	});
	b2.addEventListener("click", function() {
		Ti.API.info("Opening google");
		Ti.Platform.openURL("http://www.google.com/");
	});
	
	var button3_properties = {
		color:'#fff',		
		top:110,
		width:401,
		height:127,
		font:{fontSize:20,fontWeight:'bold',fontFamily:'Helvetica Neue'},
		title:'Click Me'
	}
	if( !isBlackberry)
	{
		button3_properties.backgroundImage ='/images/BUTT_grn_off.png';
		button3_properties.backgroundSelectedImage ='/images/BUTT_grn_on.png';
		button3_properties.backgroundDisabledImage = '/images/BUTT_drk_off.png';
	}
	
	var b3 = Titanium.UI.createButton(button3_properties);
	
	var buttonLabelProperties = {
		color:'#f00',		
		backgroundColor:'transparent',
		width:'100',		
		right:5,
		text:'Custom Label'
	}
	if ( !isBlackberry )
	{
		buttonLabelProperties.highlightedColor = '#0f0';
		buttonLabelProperties.height = 'auto';	
	}
	
	var buttonLabel = Titanium.UI.createLabel(buttonLabelProperties);
	
	b3.add(buttonLabel);
	
	var state = 0;
	b3.addEventListener('click', function()
	{
		switch (state)
		{
			case 0:
				b3.enabled=false;
				b3.title = 'I am Disabled';
				state++;
	
				setTimeout(function()
				{
					b3.enabled=true;
					b3.title = 'I am Enabled';
				},1000);
	
				break;
			case 1:
				b3.font = {fontSize:25,fontFamily:'Marker Felt', fontWeight:'bold'};
				b3.title = 'I am red';
				if( !isBlackberry )
				{
					b3.backgroundImage = '/images/BUTT_red_off.png';
					b3.backgroundSelectedImage = '/images/BUTT_red_on.png';
					b3.color = '#222';
				}else
				{
					b3.backgroundColor = '#C00';
				}		
				
				state++;
				break;
			case 2:
				b3.width = 400;
				b3.color = '#fff';
				b3.title = 'White text';
				if (isBlackberry)
				{
					b3.backgroundColor = 'transparent';
				}
				state=0;
				break;
		}
	});
	
	var b4 = Titanium.UI.createButton({
		title:'Hide/Show Button Above',
		width:500,
		height:140,
		top:175
	});
	
	var visible = true;
	b4.addEventListener('click', function()
	{
		if (!visible)
		{
			b3.show();
			visible=true;
		}
		else
		{
			b3.hide();
			visible=false;
		}
	});
	
	var b5 = Titanium.UI.createButton({
		width:200,
		height:40,
		top:225
	});
	var b5Label = Ti.UI.createLabel({
		text:'Label',
		width:50,
		height:20,
		color:'#336699'
	});
	b5.add(b5Label);
	
	var b5ImageView = Ti.UI.createImageView({
		image:'/images/camera.png',
		left:10,
		height:33,
		width:33
	});
	b5.add(b5ImageView);
	b5.addEventListener('touchstart', function()
	{
		b5Label.color = 'red';
	});
	b5.addEventListener('touchend', function()
	{
		b5Label.color = '#336699';
	});
	win.add(b1);
	win.add(b3);
	win.add(b4);
	
	// add iphone specific tests
	if (Titanium.Platform.name == 'iPhone OS')
	{
		win.add(b2);
		win.add(b5);
	}
	
	var bhleft = Titanium.UI.createButton({
		title : 'H-Left',
		width : 360,
		height: 140,		
		top : 270,
		left : 60
	});
	bhleft.addEventListener('click', function() {
		b1.textAlign = Titanium.UI.TEXT_ALIGNMENT_LEFT;
	});
	
	var bhcenter = Titanium.UI.createButton({
		title : 'H-Center',
		width : 360,
		height: 140,
		top : 270,
		left : 120
	});
	bhcenter.addEventListener('click', function() {
		b1.textAlign = Titanium.UI.TEXT_ALIGNMENT_CENTER;
	});
	
	var bhright = Titanium.UI.createButton({
		title : 'H-Right',
		width : 360,
		height: 140,
		top : 270,
		left : 180
	});
	bhright.addEventListener('click', function() {
		b1.textAlign = Titanium.UI.TEXT_ALIGNMENT_RIGHT;
	});
	
	var bvtop = Titanium.UI.createButton({
		backgroundColor : '#F77',
		title : 'V-Top',
		width : 60,
		height: 40,
		top : 320,
		left : 60
	});
	bvtop.addEventListener('click', function() {
		b1.verticalAlign = Titanium.UI.TEXT_VERTICAL_ALIGNMENT_TOP;
	});
	
	var bvcenter = Titanium.UI.createButton({
		title : 'V-Center',
		width : 60,
		height: 40,
		top : 320,
		left : 120
	});
	bvcenter.addEventListener('click', function() {
		b1.verticalAlign = Titanium.UI.TEXT_VERTICAL_ALIGNMENT_CENTER;
	});
	
	var bvbottom = Titanium.UI.createButton({
		title : 'V-Bottom',
		width : 60,
		height: 40,
		top : 320,
		left : 180
	});
	bvbottom.addEventListener('click', function() {
		b1.verticalAlign = Titanium.UI.TEXT_VERTICAL_ALIGNMENT_BOTTOM;
	});
	
	if( !isBlackberry )
	{
		win.add(bhleft);
		win.add(bhcenter);
		win.add(bhright);
	}
	
	
	if (Ti.Platform.osname === 'android') {
		win.add(bvtop);
		win.add(bvcenter);
		win.add(bvbottom);
	}

	return win;
}

module.exports = button_control;