//----------------------------------------------------------------------------------------
// Initialization
//----------------------------------------------------------------------------------------
function init() {
	//1. Initialize parse SDK      
	Parse.initialize("IwnPYaojBlGIPN3K94iGEgSXLr8AF84yfrIIlnwy","BZtgheX4Oy21OkaTe0bGEJT0RIyyePWNmdqkQJgZ");
	
	// 2. Apply some changes to core Blockly code [in custom_blockly.js]
	UpdateBlocklyCode();  
	
	// 2. Populate required images
	populate();
	
	// 3. Inject Blockly
	//controlTooltip();
	controlTooltip2();
	inject();
}

//-----------------------------------------------------------------------------------------
// Saving log data on Parse                                                                   
//------------------------------------------------------------------------------------------
function logParse(type, key, comment) {
	var Post = Parse.Object.extend("blockly");
	var myPost = new Post();
	
	myPost.set("TYPE", type);
	myPost.set("KEY", key);
	myPost.set("LEVEL", getLevel() );
	myPost.set("XML", workspaceToText() );
	myPost.set("COMMENT", comment);
	myPost.set("USER", "TODO");
	
	myPost.save();
	//console.log("Saved on Parse!");
}
        
//------------------------------------------------------------------------------------------
// Global Level variables                                                                   
//------------------------------------------------------------------------------------------
	var MAX_LEVEL = 7;
	var MIN_LEVEL = 1;
	var CURRENT_LEVEL = getLevel();
	var LEVELS_MSG = ["Rosie is going to a resturant with her friend, Jasmin. Help her decide what to wear.",
                        "<br>Jasmin is daring Rosie to wear a sequence of [long jeans then change to a long skirt] 3 times in a row. Can you help Rosie do this?",
                        "<br>Now, Jasmin is daring Rosie to wear the sequence of [long jeans then change to a long skirt] 6 times in a row. Can you help Rosie do this using only six blocks?<br><br>",
                        "<br>Rosie wants to go for a walk. You don't know whether it's hot or cold outside but can you tell Rosie to wear t-shirt when it's hot, and wear a jacket when it's cold?",
                        "<br>Now, instead of choosing a new look for Rosie in each level, you can create a shortcut to some look and use it in later levels. Can you give this look a name and you'll be able to use it later?",
                        "Rosie will go out soon. You don't know whether she is going to a wedding or a gym but can you tell Rosie to get the look \"<p>" + sessionStorage.UserLook + "</p>\" when she's going to a wedding and wear gym clothes when going to a gym?<br>",
                        "<br>Play with the blocks as you like! <br><br>"
                       ];
	// Rosie wore a top that is either black or purple, when she wears a black top, she doesn't want to wear a black bottom, otherwise she wants the bottom to be black. Pick a bottom so that she doesn't wear all black (Hint: check new blocks in the control section!)
    
	var COLORS = ['red', 'blue', 'gold', 'lime', 'black', 'pink', 'orange' , 'purple', 'grey'];
	var Playing = false;
    
	var HAIR_IMAGES = 7;
	var TOP_IMAGES = 8;
	var BOTTOM_IMAGES = 7;
	var SHOE_IMAGES = 6;
	
	var LogRequest = false;
	
	var BlocksTotal = 0;
	var Xposition = 30;
	var Yposition = 70;
	
	var tipImg;
	var originalZindex;
	var originalTop;
	var originalBottom;
	var originalShoes;
	var originalHair;
	var tempImg;
	
	var CURRENT_BG = 'room';
	var Zindex = 3;
	
	var maxBlocks = ["infinity", "infinity", "6", "infinity", "infinity", "infinity", "infinity"];
	
//------------------------------------------------------------------------------------------
// Add Event Listener
//------------------------------------------------------------------------------------------

window.addEventListener("message", processEvent, false);
    
//---------------------------------------------------------------------------
//  Get level number from URL
//---------------------------------------------------------------------------
function getLevel () {
	var val = window.location.search.match(new RegExp('[?&]level=(\\d+)'));
    val = val ? val[1] : MIN_LEVEL;
    val = Math.min(Math.max(MIN_LEVEL, val), MAX_LEVEL);
    return val;
}
    
//---------------------------------------------------------------------------
// Redirect to the next level
//---------------------------------------------------------------------------
function advanceLevel () {
	storeProcedure();
    if (CURRENT_LEVEL < MAX_LEVEL - 1) {
    	$.jqDialog.confirm("Wonderful! Now you have more outfit options to use inside the menues!<BR/> <BR/>Would you like to continue? ".replace('%1', CURRENT_LEVEL + 1)
    		, function() { window.location = window.location.protocol + '//' + window.location.host + window.location.pathname + '?level=' + (CURRENT_LEVEL + 1);   }    // callback function for 'YES' button
        	, function() {  } );   
    }  
    else if (CURRENT_LEVEL == MAX_LEVEL - 1) {
        $.jqDialog.alert("<center> Congratulations! <br> You finished all activities <br> <br>Now, you can play with all blocks as you like</center>", 
        				function() { window.location = window.location.protocol + '//' + window.location.host + window.location.pathname + '?level=' + (CURRENT_LEVEL + 1);  }); // callback function for 'OK' button
    }
}

//---------------------------------------------------------------------------
// Show error message
//---------------------------------------------------------------------------
function showError (msg) {
	$.jqDialog.alert("Are you missing something?<br><br>" + msg, function() { }); // callback function for 'OK' button
}

//---------------------------------------------------------------------------
// Populate images
//---------------------------------------------------------------------------
function populate() {
	for (var i=1; i < TOP_IMAGES ; i++ ) {
		i < HAIR_IMAGES? appendImg('hair', i, ""): null;
		
		for (var j=0; j < COLORS.length; j++ ) {
			appendImg('top', i, COLORS[j]);
			i < BOTTOM_IMAGES? appendImg('bottom', i, COLORS[j]): null;
			i < SHOE_IMAGES? appendImg('shoes', i, COLORS[j]): null;
        }
    }
}

//-----------------------------------------------------------------------------------------
// Append outfit images                                                                 
//------------------------------------------------------------------------------------------
function appendImg (type, number, color) {
	var img= document.createElement("img");
    img.src = 'images/' + type + number + '-' + color + '.png';
    img.id = '' + type + number + '-' + color;
    img.className = '' + type;
    document.getElementById("images").appendChild(img);
    //console.log("IMG: " + img.src + " added");
}

//---------------------------------------------------------------------------------------
// HTML visibility control                                                                                  
//---------------------------------------------------------------------------------------
function setHtmlVisibility(id, visible) {
	var variations = id.substring(0,3);
	var el = document.getElementById(String(id));
	var len;
	if (variations == "top") { variations = "top"; originalTop = id; len = TOP_IMAGES;}
    else if (variations == "bot") { variations = "bottom"; originalBottom = id; len = BOTTOM_IMAGES; }
    else if (variations == "sho") { variations = "shoes"; originalShoes = id; len = SHOE_IMAGES; }
    else if (variations == "hai") { variations = "hair"; var item = id.substring(0,6); el = document.getElementById(item); originalHair = item; len = HAIR_IMAGES; }
    else { variations = "background";  }  
    	
    hideVariations(variations, len);
    
    if (el) {
    	if (variations != "background") {
    		el.style.visibility = visible ? "visible" : "hidden";
	      	el.style.zIndex = Zindex++;
      	} else {
      		var bg = document.getElementById("rosie-output");
      		bg.style.background = "url(\'images/" + id + ".png\')";
      		CURRENT_BG = id; }
    }
}
   	

function hideVariations (variation, length) {
	if (variation == "top" || variation == "bottom" || variation == "shoes") {
		for (var i=1; i<length; i++) {
			for (var j=0; j < COLORS.length; j++) {
				var item = variation.concat(i.toString(),"-",COLORS[j].toString());
		    		//console.log("item = " + item);
		    		item = document.getElementById(item);
		        	item.style.visibility = "hidden";
		    	}
		}	 
   	}
   		
   	else if (variation == "hair") {
   		for (var i=1; i<length; i++ ) {
   			var item = variation.concat(i.toString(),"-");
   			item = document.getElementById(item);
   			item.style.visibility = "hidden";
   		}
   	}
   			
}

function hideAll() {
	hideVariations("top", TOP_IMAGES);
	hideVariations("bottom", BOTTOM_IMAGES);
	hideVariations("shoes", SHOE_IMAGES);
	hideVariations("hair", HAIR_IMAGES);
}
    
function setHtmlOpacity(id, opacity) {
	var el = document.getElementById(id);
	if (el) {
		if (opacity > 0) {
			el.style.zIndex = 100;
		} else {
		    el.style.zIndex = -1; }
        el.style.opacity = opacity;
	}
}

function fadeOutAfterDelay(id, delay) {
	window.setTimeout(function() { setHtmlOpacity(id, 0.0); }, delay);
}


//---------------------------------------------------------------------------
// Process dart event
//---------------------------------------------------------------------------
function processEvent(event) {
	var event = event.data;
	var msgPart = event.split('#');
	
	if ( msgPart[0] == "@blockly" ) {
		//console.log("HTML received message from dart " + event);
		
		if (msgPart[1] == "error") {
			Playing = false;
    		var msg = msgPart[2];
    		var key = msgPart[3];
    		showError(msg);
    		if(LogRequest) { logParse("postError", key, msg); }
		}
	      	
		else if (msgPart[1] == "DONE!") {
			Playing = false;
			if (LogRequest) { logParse("Success", "2", ""); }
			window.setTimeout(function() { advanceLevel(); }, 500);
		}
	    
		else if (msgPart[1] == "outfit"){	 // received an outfit or bg to display
			var outfit = msgPart[2];
			Blockly.mainWorkspace.highlightBlock2(msgPart[3], true);
			popUpHint(msgPart);
			setHtmlVisibility(outfit, true);
		}  
	}
}

//---------------------------------------------------------------------------------------
// Return coordinates of the WorkSpace
//---------------------------------------------------------------------------------------
function getWorkSpacePosition() {
	var cumulativeOffset = function(element) {
	var top = 0, left = 0;
	do {
		top += element.offsetTop  || 0;
		left += element.offsetLeft || 0;
		element = element.offsetParent;
	} while(element);		
	return {
		top: top,
		left: left };
	};
	
	var wsPosition = cumulativeOffset(document.getElementById('rosie-code'));
	return wsPosition;
}

//---------------------------------------------------------------------------------------
// Pop up repeat hint
//---------------------------------------------------------------------------------------
function popUpHint(parts) {
	var wsPosition = getWorkSpacePosition();
  	var block = Blockly.mainWorkspace.getBlockById(parts[3]);
	if (block) {
		var blockHW = block.getHeightWidth();
		var blockXY = block.getRelativeToSurfaceXY();
		var x = blockXY.x + blockHW.width + wsPosition.left + 10;
		var y = blockXY.y + wsPosition.top;
		var el;
		var id;
		if (parts[2] == "REPEAT") {
			id = "repeat_hint";
			el = document.getElementById(id);
			el.innerHTML= 'ROUND <p>' + parts[4] + '</p> out of ' + parts[5];
			el.style.top =  y + "px";
		} else if(parts[2] == "YES" || parts[2] == "NO") {
			id = "repeat_hint";
		  	el = document.getElementById(id);
		  	el.innerHTML= '<p>' + parts[2] + '</p>';
		  	el.style.top =  y + "px";
		} else {
			id = "arrow";
			el = document.getElementById(id);
			el.innerHTML= '<img src="images/arrow2.png"> ';
			y -= 25; //position middle of the arrow to allow tip to reach block
			el.style.top =  y + "px";
		}
	  	el.style.left = x + "px";
	  	setHtmlOpacity(id, 1.0);
		fadeOutAfterDelay(id, 1400);
	}
}
  
  
//---------------------------------------------------------------------------------------
//  Check if blocks are connected (procedures are special case)                                                                               
//---------------------------------------------------------------------------------------
function checkConnections(code) {
	var connected = true;
	var start = 0;
	var newLine = 0;
	var length = code.length;
	var amount = 0;
	while (start < code.length && start != -1) {
		newLine = code.indexOf("\n",start);
		var curlyBrace = code.indexOf("}" ,start);
		//console.log("start from:"+start);
		//console.log("new line at:"+newLine);
		//console.log("curleyBrace at:"+curlyBrace);
		//console.log("length="+length);
		if ( newLine > 0 ) {
			if ( curlyBrace > 0) {
				if ( newLine -1 != curlyBrace ) {
			    		connected = false;
			    		break;
		  		}
				else { start = newLine+3; amount += (curlyBrace - amount) ; length -= Math.abs(amount) } //++ for multiple procedures...
			}
			else { connected = false; break; } ///++++++
		} else { break; } 
	}
	
	return connected;
}


//-----------------------------------------------------------------------------------------------
// Change in Workspace
//------------------------------------------------------------------------------------------------
function workspaceChange() {
	//console.log("CHANGE");
	var procedureNames = [[]];
	var callNames = [];
 	var a = []; var b = []; var diff = [];
 	var topBlocks = Blockly.mainWorkspace.getAllBlocks(false);
 	if (topBlocks.length != BlocksTotal) { //new blocks added or deleted
		//console.log("new block added");
 		BlocksTotal = topBlocks.length;
 		if (CURRENT_LEVEL == 3) {
 			var remaining = maxBlocks[CURRENT_LEVEL - 1] - BlocksTotal;
 			popUpRemaining(remaining);
 		}
 		procedureNames.length = 0; //clear the list
 		callNames.length = 0;
 		a.length = 0; b.length = 0; diff.length = 0;
 		
 		for (var j = 0; j < topBlocks.length; j++) {
 			if (topBlocks[j].type == 'procedures_defnoreturn') {
				var name = topBlocks[j].getProcedureDef();
				procedureNames.push("shortcut to: \"".concat(name[0]).concat("\" outfit"));
				//console.log("procedure " + name[0] + " FOUND");
				//var callers = Blockly.Procedures.getCallers(name, Blockly.mainWorkspace);
				//console.log(callers.length);
			}
			else if (topBlocks[j].type == 'procedures_callnoreturn') {
				var name = topBlocks[j].getProcedureCall();
				//console.log("CALL " + name + " FOUND");
				callNames.push(name);
			}
  		}
  			
  		//console.log("procedures found are: " + procedureNames.length + " " + procedureNames);
  		//console.log("CALLs found are: " + callNames.length + " " + callNames);
  			
  		a = procedureNames.slice().sort();
  		b = callNames.slice().sort();
  		
  		Array.prototype.diff = function(a) { return this.filter(function(i) {return a.indexOf(i) < 0;}); };
			
		diff = a.diff(b);
		//console.log("diff length = " + diff.length + " with name = " + diff[0]);
		if (diff.length != 0) createCallers(diff);
  			
 	} else { // change happened, but was not a new block
 		return; } 
}
 	
//---------------------------------------------------------------------------------------
// Create callers for procedures in the workspace
//---------------------------------------------------------------------------------------
function createCallers(diff) {
	var name = diff[0];
	var rand = Math.floor((Math.random() * 50) + 1);
	
	var xmlMutation = goog.dom.createDom('mutation');
	xmlMutation.setAttribute('name', name);
	
	var xmlBlock = goog.dom.createDom('block', null, xmlMutation);
	xmlBlock.setAttribute('type', 'procedures_callnoreturn');
	xmlBlock.setAttribute('x' , Xposition + Blockly.Toolbox.width);
	xmlBlock.setAttribute('y' , Yposition + rand);
	Yposition += 50;
	
	var text = '<xml> ';
	text += Blockly.Xml.domToText(xmlBlock);
	text += ' </xml>';
	//console.log("CALLER CREATED: " + text);
	
	Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, Blockly.Xml.textToDom(text));
	BlocksTotal += 1;
	return;
}

//---------------------------------------------------------------------------------------
//  Send the generated Javascript code to dart for processing                                                                                  
//---------------------------------------------------------------------------------------
function sendBlocklyCode(log) {
	LogRequest = log ? true : false;
	if (!Playing) {
		var code = Blockly.Generator.workspaceToCode('JavaScript');
		//alert(code);
		//--------------------------------------------------
		// error 1: no blocks on the screen
		//--------------------------------------------------
		if (code.length == 0) {
			setHtmlOpacity("hint1", 1.0);
		  	fadeOutAfterDelay("hint1", 8000);
		  	if(LogRequest) { logParse("preError", "10", "No blocks");}
		}
		else {
			var connected = checkConnections(code);
		  	//--------------------------------------------------
		  	// error 2: blocks aren't connected
		  	//--------------------------------------------------
		  	if (!connected) {
				setHtmlOpacity("hint2", 1.0);
		            	fadeOutAfterDelay("hint2", 7000);
		            	if(LogRequest) { logParse("preError", "11", "blocks not connected");}
		        } else {
				//-------------------------------------------------------
				// success: blocks are connected, send it for processing 
				//-------------------------------------------------------
				hideAll();
				var json = cleanCode(code);
				var origin = window.location.protocol + "//" + window.location.host;
				window.postMessage(json, origin);
			  	//console.log("JSON = " + json + " SENT");
						  	
				tempImg = '';
		        Playing = true;
		        if (CURRENT_BG != 'room') {
					var bg = document.getElementById("rosie-output");		
					bg.style.background = "url(\'images/room.png\')";
				}
			}
		} //blocks are found
    } else { // playing previous command
		if(LogRequest) { logParse("preError", "12", "still executing prior command"); }
		alert("still generating previous outfit");  
	}
}

//-----------------------------------------------------------------------------------
// Clean JSON generated code and append required information
//-----------------------------------------------------------------------------------
function cleanCode (code) {
	code = code.replace(/\]\[/g, '], [');
	code = (code.replace(/\)/g, '')).replace(/\(/g, '');
	code = code.replace(/\;/g, '');
	code = '@dart'+ CURRENT_LEVEL + '#' + code;
	
	return code;
}

//-------------------------------------------------------------------------------------
// Convert Workspace to text
//-------------------------------------------------------------------------------------
function workspaceToText () {
	var current_xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
	var current_xml_text = Blockly.Xml.domToText(current_xml);
	
	return current_xml_text;
} 

//-------------------------------------------------------------------------------------
// Inject Blockly to the page
//-------------------------------------------------------------------------------------
function inject() {
	var toolbox = getToolbox();
	
	Blockly.inject(document.getElementById('rosie-code'), {path: 'blockly/', toolbox: toolbox[CURRENT_LEVEL - 1], collapse: false, maxBlocks: maxBlocks[CURRENT_LEVEL - 1] } );
	
	switch(CURRENT_LEVEL) {
		case 1:
			setHtmlOpacity("hint1", 1.0);
			fadeOutAfterDelay("hint1", 5000);
		break;
	  	
	  	case 3:
	  		popUpRemaining(4);
		  	setHtmlVisibility('top5-red', true);
		  	setHtmlVisibility('hair4-', true);
		  	setHtmlVisibility('shoes5-lime', true);
		  	loadBlocks(CURRENT_LEVEL);
      	break;
      	
		case 4:
		  	setHtmlVisibility('bottom1-pink', true);
		  	setHtmlVisibility('hair5-', true);
		  	loadBlocks(CURRENT_LEVEL);
      	break;
      	
      	case 5:
		  	loadBlocks(CURRENT_LEVEL);
      	break;
	
		
	}
	
	if (CURRENT_LEVEL >= 5) {
		restoreProcedures();
		// in LEVEL 4, start listenning to events & add virtual seperator
		Blockly.mainWorkspace.traceOn();
		
		Blockly.mainWorkspace.addVirtual();
		//addVirtual();
	}
    
    Blockly.addChangeListener(bumpBackBlocks); 
    Blockly.mainWorkspace.getCanvas().addEventListener('blocklyWorkspaceChange', workspaceChange, false);
	document.getElementById('full_text_div').innerHTML= LEVELS_MSG[CURRENT_LEVEL - 1];
}

//---------------------------------------------------------------------------------------------
// Display remaining number of blocks for this level
//---------------------------------------------------------------------------------------------
function popUpRemaining (remain) {
	id = "remaining_hint";
	el = document.getElementById(id);
	el.innerHTML= 'Remaining blocks <p>' + remain + '</p>';
	if (remain ==0 )
	el.innerHTML= 'Remaining blocks <p>' + remain + '</p> you cannot use any more blocks, if you want to add a block from the menu, drag one of the current blocks to the trash';
	setHtmlOpacity('remaining_hint', 1.0);
}

//---------------------------------------------------------------------------------------------
// Load the editor with some blocks                                                                
//---------------------------------------------------------------------------------------------  
function loadBlocks(level) {
	if(level == 3) {
		xml = Blockly.Xml.textToDom(      
			'<xml>' +    
			' <block type="top5"  x="300" y="50"> <next> ' +
			' <block type="hair4"> <next> ' +
			' <block type="shoes5"> </block> </block> </block> ' +
			'</xml>');
	}
	else if(level == 4) {
		xml = Blockly.Xml.textToDom(      
			'<xml>' +    
			' <block type="bottom1"  x="300" y="50"> <value name = "color"> <block type="pink"> </block> </value> <next> ' +
			' <block type="hair5"> </block></block> ' +
			'</xml>');
	}
	else if(level == 5) {
		xml = Blockly.Xml.textToDom(      
			'<xml>' +    
			'  <block type="procedures_defnoreturn" x="' + Blockly.Virtual.X + '" y="' + Blockly.Virtual.Y + '">' +
			' <mutation></mutation> ' +
			'   <field name="NAME">Name</field> ' +
			'	<statement name="STACK"> ' +
			'     <block type="hair3"> <next> <block type="top2"> <value name="color"> <block type="gold"></block> </value> <next> <block type="shoes2"> <value name="color"> <block type="gold"></block> </value> </next> </block> </next> </block> </next> </block> ' +
			'   </statement> '+
			'  </block>' +
			
			'</xml>');
	}
	

	Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xml);
}

//---------------------------------------------------------------------------------------------
// store procedures in session storage	                                                                 
//---------------------------------------------------------------------------------------------  
function storeProcedure () {
	var saved_procedure = '';
	var current_xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
	curret_xml_text = Blockly.Xml.domToText(current_xml);
		
	xmlDoc = loadXMLString(curret_xml_text);
		
	x = xmlDoc.getElementsByTagName('block');
	for (i=0; i < x.length; i++) {
		if (x[i].parentNode.nodeName == 'xml') {
  			att = x.item(i).attributes.getNamedItem("type");
  			if ( att.value == 'procedures_defnoreturn') {
  				cloneNode=x[i].cloneNode(true);
  				saved_procedure += Blockly.Xml.domToText(cloneNode);
  				saved_procedure += "#";
  			}
  		}
  	}
  	sessionStorage.procedure = saved_procedure;
  	
  	if (CURRENT_LEVEL == 5) {
  		var topBlocks = Blockly.mainWorkspace.getTopBlocks(false);
		for (var j = 0; j < topBlocks.length; j++) {
			if (topBlocks[j].type == 'procedures_defnoreturn') {
				var name = topBlocks[j].getProcedureDef();
				sessionStorage.UserLook = name[0];
			}
		}
  	}
}


//-------------------------------------------------------------------------------------
// Restore created procedures from session storage
//-------------------------------------------------------------------------------------
function restoreProcedures() {
	if ('sessionStorage' in window ) {
		var saved_xml = '<xml>';
  	 	if (sessionStorage.procedure) {
	 		var pArr = (sessionStorage.procedure).split('#');
  	 		for ( x=0; x < pArr.length; x++) {
  	 			saved_xml += pArr[x];
  	 		}
  	 		//saved_xml += sessionStorage.procedure;
  	 		saved_xml += '</xml>';	
  	 		var xml = Blockly.Xml.textToDom(saved_xml);
  			Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xml);
  			//window.setTimeout(BlocklyStorage.restoreBlocks, 0);
  	 	}
  	}
}

//---------------------------------------------------------------------------------------
// Bump back blocks that are dragged outside workspace metrics
//---------------------------------------------------------------------------------------
function bumpBackBlocks () {
	if (Blockly.Block.dragMode_ == 0) {
		if (Blockly.selected) {
			var trash = Blockly.selected.workspace.trashcan;
			var blockHW = Blockly.selected.getHeightWidth();
			var blockXY = Blockly.selected.getRelativeToSurfaceXY();
		    var overlap = trash.myDispose(blockHW, blockXY);
		    if (overlap) {
		    	goog.Timer.callOnce(trash.close, 100, trash);
	    		Blockly.selected.dispose(false, true);
		    }
		}
		var topBlocks = Blockly.mainWorkspace.getTopBlocks(false);
		for (var j = 0; j < topBlocks.length; j++) {
			if (topBlocks[j].type == 'procedures_defnoreturn') {
				restrictBoundry(topBlocks[j]);
			}
        }
        
		var metrics = Blockly.getMainWorkspaceMetrics();
      	if (metrics.contentTop < 0 ||
        	metrics.contentTop + metrics.contentHeight > metrics.viewHeight + metrics.viewTop ||
        	metrics.contentLeft < (Blockly.RTL ? metrics.viewLeft : 0) ||
          	metrics.contentLeft + metrics.contentWidth > (Blockly.RTL ? metrics.viewWidth : metrics.viewWidth + metrics.viewLeft)) {
        	// One or more blocks is out of bounds.  Bump them back in.
      		var MARGIN = 5;
        	var ToolboxWidth = Blockly.Toolbox.width;
        	var blocks = Blockly.mainWorkspace.getTopBlocks(false);
        	for (var b = 0, block; block = blocks[b]; b++) {
          		var blockXY = block.getRelativeToSurfaceXY();
          		var blockHW = block.getHeightWidth();
          		
          		// Bump any block that's above the top back inside.
          		var overflow = metrics.viewTop + MARGIN - blockHW.height - blockXY.y + blockHW.height;
          		if (overflow > 0) {
            		block.moveBy(0, overflow);
          		}
          		// Bump any block that's below the bottom back inside.
          		var overflow = metrics.viewTop + metrics.viewHeight - MARGIN -
              	blockXY.y - blockHW.height;
          		if (overflow < 0) {
            		block.moveBy(0, overflow);
          		}
          		// Bump any block that's off the left back inside.
          		var overflow = MARGIN + ToolboxWidth + metrics.viewLeft - blockXY.x - 0; //(Blockly.RTL ? 0 : blockHW.width);
          		if (overflow > 0) {
            		block.moveBy(overflow + 30, 0);
          		}
          		// Bump any block that's off the right back inside.
          		var overflow = metrics.viewLeft + metrics.viewWidth - MARGIN -blockXY.x + (Blockly.RTL ? blockHW.width : 0);
          		if (overflow < 0) {
            		block.moveBy(overflow + 30, 0);
          		}
        	}
		}//*/
    }
}

//---------------------------------------------------------------------------------------
// Bump back procedure blocks outside virtual metrics
//---------------------------------------------------------------------------------------
function restrictBoundry(block) {
	var blockXY = block.getRelativeToSurfaceXY();
    var blockHW = block.getHeightWidth();
	var textHeight = 50;
	var rand = Math.floor((Math.random() * 70) + 1);
	var MARGIN = 10;
	
	// off the right
	var overflow = blockXY.x + blockHW.width - Blockly.Virtual.X - Blockly.Virtual.Width + MARGIN;
	if (overflow > 0) {
		block.moveBy(-overflow - rand, 0 );
	}
	
	// off the left
	var overflow = blockXY.x - Blockly.Virtual.X - MARGIN;
	if (overflow < 0) {
		block.moveBy(overflow * -1 + rand, 0 );
	}
	
	// off the top
	var overflow = blockXY.y - Blockly.Virtual.Y  - textHeight - MARGIN;
	if (overflow < 0) {
		block.moveBy(0, overflow * -1 + rand - textHeight/2);
	}
	
	// off the bottom
	var overflow = blockXY.y + blockHW.height - Blockly.Virtual.Y - Blockly.Virtual.Height + MARGIN;
	if (overflow > 0) {
		block.moveBy(0, -overflow - rand );
	}
}

//-------------------------------------------------------------------------------------
// Control Tooltip code
//-------------------------------------------------------------------------------------
function controlTooltip() {
	Blockly.Tooltip.svgImg_ = null;  
/**
 * Delay before tooltip appears.
 */
Blockly.Tooltip.HOVER_MS = 100;
      

/**
 * When hovering over an element, schedule a tooltip to be shown.  If a tooltip
 * is already visible, hide it if the mouse strays out of a certain radius.
 * @param {!Event} e Mouse event.
 * @private
 */
Blockly.Tooltip.onMouseMove_ = function(e) {
 // if (!Blockly.Tooltip.element_ || !Blockly.Tooltip.element_.tooltip) {
    // No tooltip here to show.
   // return;
  //} //else 
   if ((Blockly.ContextMenu && Blockly.ContextMenu.visible) ||Blockly.Block.dragMode_ != 0 ) {
    // Don't display a tooltip when a context menu is active, or during a drag.
    return;
  }
  if (Blockly.Tooltip.poisonedElement_ != Blockly.Tooltip.element_) {
    // The mouse moved, clear any previously scheduled tooltip.
    window.clearTimeout(Blockly.Tooltip.showPid_);
    // Maybe this time the mouse will stay put.  Schedule showing of tooltip.
    Blockly.Tooltip.lastX_ = e.clientX;
    Blockly.Tooltip.lastY_ = e.clientY;
    Blockly.Tooltip.showPid_ =
        window.setTimeout(Blockly.Tooltip.show_, Blockly.Tooltip.HOVER_MS);
  }
};

 
 /**
 * Hide the tooltip.
 */
Blockly.Tooltip.hide = function() {
	var preview = document.getElementById('preview');
  	preview.style.visibility = "hidden";
	
	var imgNode = document.getElementById(tipImg);
	if (imgNode && tipImg != originalTop && tipImg != originalBottom && tipImg != originalHair && tipImg != originalShoes){
		imgNode.style.visibility = "hidden";
		imgNode.style.border = "none";
  		imgNode.style.background = "none";
  	}
	
	//restore original image (if any) after preview
	imgNode = document.getElementById(tempImg);
    if (imgNode) {
  		imgNode.style.visibility = "visible";
  		imgNode.style.zIndex = originalZindex;
  		imgNode.style.border = "none";
  		imgNode.style.background = "none";
  		var preview = document.getElementById('preview');
  		preview.style.visibility = "hidden";
  	}
  	
  	
  if (Blockly.Tooltip.visible) {
    Blockly.Tooltip.visible = false;
    
    
    if (Blockly.Tooltip.svgGroup_) {
      Blockly.Tooltip.svgGroup_.style.display = 'none';
    }
  }
  window.clearTimeout(Blockly.Tooltip.showPid_);
};
 
      
      
/**
 * Create the tooltip and show it.
 * @private
 */
Blockly.Tooltip.show_ = function() {
  Blockly.Tooltip.poisonedElement_ = Blockly.Tooltip.element_;
  if (!Blockly.Tooltip.svgGroup_) {
    return;
  }
  // Erase all existing text.
  goog.dom.removeChildren(
      /** @type {!Element} */ (Blockly.Tooltip.svgText_));
  // Create new text, line by line.
  var tip = Blockly.Tooltip.element_.tooltip;
  if (goog.isFunction(tip)) {
    tip = tip();
    //console.log ("TIP = " + tip);
  }
  
  tipImg = tip;
  var type = tipImg.substring(0,3);
  if (type == "top")
  	tempImg = originalTop;
  else if (type == "bot")
  	tempImg = originalBottom;
  else if (type == "sho")
  	tempImg = originalShoes;
  else if (type == "hai")
  	tempImg = originalHair;
  else
  	tempImg = '';
  	
  
  var imgNode = document.getElementById(tempImg);
  if (imgNode) {
  	imgNode.style.visibility = "hidden";
  	originalZindex = imgNode.style.zIndex;
  }
  
  imgNode = document.getElementById(tipImg);
  if (imgNode) {
  	imgNode.style.visibility = "visible";
  	imgNode.style.zIndex = Zindex++;
  	//imgNode.style.border = "2px solid #ffffff";
  	imgNode.style.background = "rgba(255, 192, 203, 0.6)";
  	var preview = document.getElementById('preview');
  	preview.style.visibility = "visible";
  }
  
  
  
  // Display the tooltip.
  Blockly.Tooltip.visible = true;
  Blockly.Tooltip.svgGroup_.style.display = 'block';
  // Resize the background and shadow to fit.
  var bBox = Blockly.Tooltip.svgText_.getBBox();
  var width = 2 * Blockly.Tooltip.MARGINS + bBox.width;
  var height = bBox.height;
  Blockly.Tooltip.svgBackground_.setAttribute('width', width);
  Blockly.Tooltip.svgBackground_.setAttribute('height', height);
  Blockly.Tooltip.svgShadow_.setAttribute('width', width);
  Blockly.Tooltip.svgShadow_.setAttribute('height', height);
  if (Blockly.RTL) {
    // Right-align the paragraph.
    // This cannot be done until the tooltip is rendered on screen.
    var maxWidth = bBox.width;
    for (var x = 0, textElement;
         textElement = Blockly.Tooltip.svgText_.childNodes[x]; x++) {
      textElement.setAttribute('text-anchor', 'end');
      textElement.setAttribute('x', maxWidth + Blockly.Tooltip.MARGINS);
    }
  }
  // Move the tooltip to just below the cursor.
  var anchorX = Blockly.Tooltip.lastX_;
  if (Blockly.RTL) {
    anchorX -= Blockly.Tooltip.OFFSET_X + width;
  } else {
    anchorX += Blockly.Tooltip.OFFSET_X;
  }
  var anchorY = Blockly.Tooltip.lastY_ + Blockly.Tooltip.OFFSET_Y;

  // Convert the mouse coordinates into SVG coordinates.
  var xy = Blockly.convertCoordinates(anchorX, anchorY, true);
  anchorX = xy.x;
  anchorY = xy.y;

  var svgSize = Blockly.svgSize();
  if (anchorY + bBox.height > svgSize.height) {
    // Falling off the bottom of the screen; shift the tooltip up.
    anchorY -= bBox.height + 2 * Blockly.Tooltip.OFFSET_Y;
  }
  if (Blockly.RTL) {
    // Prevent falling off left edge in RTL mode.
    anchorX = Math.max(Blockly.Tooltip.MARGINS, anchorX);
  } else {
    if (anchorX + bBox.width > svgSize.width - 2 * Blockly.Tooltip.MARGINS) {
      // Falling off the right edge of the screen;
      // clamp the tooltip on the edge.
      anchorX = svgSize.width - bBox.width - 2 * Blockly.Tooltip.MARGINS;
    }
  }
  Blockly.Tooltip.svgGroup_.setAttribute('transform',
      'translate(' + anchorX + ',' + anchorY + ')');
};
      
      //***********************************************************************************************************************
      
    /**
 * Show the context menu for this block.
 * @param {number} x X-coordinate of mouse click.
 * @param {number} y Y-coordinate of mouse click.
 * @private
 */
Blockly.Block.prototype.showContextMenu_ = function(x, y) {
  if (!this.contextMenu) {
    return;
  }
  // Save the current block in a variable for use in closures.
  var block = this;
  var options = [];

  if (this.deletable) {
    // Option to duplicate this block.
    var duplicateOption = {
      text: Blockly.MSG_DUPLICATE_BLOCK,
      enabled: true,
      callback: function() {
        block.duplicate_();
      }
    };
    if (this.getDescendants().length > this.workspace.remainingCapacity()) {
      duplicateOption.enabled = false;
    }
    options.push(duplicateOption);

    // Option to delete this block.
    // Count the number of blocks that are nested in this block.
    var descendantCount = this.getDescendants().length;
    if (block.nextConnection && block.nextConnection.targetConnection) {
      // Blocks in the current stack would survive this block's deletion.
      descendantCount -= this.nextConnection.targetBlock().
          getDescendants().length;
    }
    var deleteOption = {
      text: descendantCount == 1 ? Blockly.MSG_DELETE_BLOCK :
          Blockly.MSG_DELETE_X_BLOCKS.replace('%1', descendantCount),
      enabled: true,
      callback: function() {
        block.dispose(true, true);
      }
    };
    options.push(deleteOption);
  }

  // Option to get help.
  var url = goog.isFunction(this.helpUrl) ? this.helpUrl() : this.helpUrl;
  var helpOption = {enabled: !!url};
  helpOption.text = Blockly.MSG_HELP;
  helpOption.callback = function() {
    block.showHelp_();
  };
  options.push(helpOption);

  // Allow the block to add or modify options.
  if (this.customContextMenu) {
    this.customContextMenu(options);
  }

  Blockly.ContextMenu.show(x, y, options);
};
}
