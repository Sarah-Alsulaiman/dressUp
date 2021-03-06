Blockly.JavaScript.top1 = function() {
	var color = Blockly.JavaScript.valueToCode(this, 'color', Blockly.JavaScript.ORDER_NONE) || '0';
	if (color == '0') {
		return '[ "top1-", "purple", ' + this.id + ', "hot", "casual" ]';
	}
	else {
		return '[ "top1-",' + color + ', ' + this.id + ', "hot", "casual" ]';
	}
};

Blockly.JavaScript.top2 = function() {
  var color = Blockly.JavaScript.valueToCode(this, 'color', Blockly.JavaScript.ORDER_NONE) || '0';
	if (color == '0') {
		return '[ "top2-", "pink", ' + this.id + ', "any", "wedding" ]';
	}
	else {
		return '[ "top2-",' + color + ', ' + this.id + ', "any", "wedding" ]';
	}
};

Blockly.JavaScript.top3 = function() {
	var color = Blockly.JavaScript.valueToCode(this, 'color', Blockly.JavaScript.ORDER_NONE) || '0';
	if (color == '0') {
		return '[ "top3-", "red", ' + this.id + ', "any", "casual" ]';
	}
	else {
		return '[ "top3-",' + color + ', ' + this.id + ', "any", "casual" ]';
	}
};

Blockly.JavaScript.top4 = function() {
	var color = Blockly.JavaScript.valueToCode(this, 'color', Blockly.JavaScript.ORDER_NONE) || '0';
	if (color == '0') {
		return '[ "top4-", "grey", ' + this.id + ', "cold", "casual" ]';
	}
	else {
		return '[ "top4-",' + color + ', ' + this.id + ', "cold", "casual" ]';
	}
};

Blockly.JavaScript.top5 = function() {
	var color = Blockly.JavaScript.valueToCode(this, 'color', Blockly.JavaScript.ORDER_NONE) || '0';
	if (color == '0') {
		return '[ "top5-", "red" , ' + this.id + ', "any", "casual" ]';
	}
	else {
		return '[ "top5-",' + color + ', ' + this.id + ', "any", "casual" ]';
	}
};

Blockly.JavaScript.top6 = function() {
	var color = Blockly.JavaScript.valueToCode(this, 'color', Blockly.JavaScript.ORDER_NONE) || '0';
	if (color == '0') {
		return '[ "top6-", "purple", ' + this.id + ', "hot", "gym" ]';
	}
	else {
		return '[ "top6-",' + color + ', ' + this.id + ', "hot", "gym" ]';
	}
};

Blockly.JavaScript.top7 = function() {
	var color = Blockly.JavaScript.valueToCode(this, 'color', Blockly.JavaScript.ORDER_NONE) || '0';
	if (color == '0') {
		return '[ "top7-", "red" , ' + this.id + ', "any", "casual" ]';
	}
	else {
		return '[ "top7-",' + color + ', ' + this.id + ', "any", "casual" ]';
	}
};

Blockly.JavaScript.top8 = function() {
	var color = Blockly.JavaScript.valueToCode(this, 'color', Blockly.JavaScript.ORDER_NONE) || '0';
	if (color == '0') {
		return '[ "top8-", "gold", ' + this.id + ', "hot", "wedding" ]';
	}
	else {
		return '[ "top8-",' + color + ', ' + this.id + ', "hot", "wedding" ]';
	}
};

//--------------------------------------------------------------------------------------------------------------------------------------------
//
//--------------------------------------------------------------------------------------------------------------------------------------------
Blockly.JavaScript.bottom1 = function() {
  var color = Blockly.JavaScript.valueToCode(this, 'color', Blockly.JavaScript.ORDER_NONE) || '0';
	if (color == '0') {
		return '[ "bottom1-", "blue", ' + this.id + ', "any", "casual" ]';
	}
	else {
		return '[ "bottom1-",' + color + ' , ' + this.id + ', "any", "casual"]';
	}
};

Blockly.JavaScript.bottom2 = function() {
  var color = Blockly.JavaScript.valueToCode(this, 'color', Blockly.JavaScript.ORDER_NONE) || '0';
	if (color == '0') {
		return '[ "bottom2-", "grey", ' + this.id + ', "any", "casual" ]';
	}
	else {
		return '[ "bottom2-",' + color + ', ' + this.id + ', "any", "casual" ]';
	}
};

Blockly.JavaScript.bottom3 = function() {
  var color = Blockly.JavaScript.valueToCode(this, 'color', Blockly.JavaScript.ORDER_NONE) || '0';
	if (color == '0') {
		return '[ "bottom3-", "red", ' + this.id + ', "any", "casual" ]';
	}
	else {
		return '[ "bottom3-",' + color + ', ' + this.id + ', "any", "casual" ]';
	}
};

Blockly.JavaScript.bottom4 = function() {
  var color = Blockly.JavaScript.valueToCode(this, 'color', Blockly.JavaScript.ORDER_NONE) || '0';
	if (color == '0') {
		return '[ "bottom4-", "lime", ' + this.id + ', "any", "casual" ]';
	}
	else {
		return '[ "bottom4-",' + color + ', ' + this.id + ', "any", "casual" ]';
	}
};

Blockly.JavaScript.bottom5 = function() {
  var color = Blockly.JavaScript.valueToCode(this, 'color', Blockly.JavaScript.ORDER_NONE) || '0';
	if (color == '0') {
		return '[ "bottom5-", "black" , ' + this.id + ', "any", "casual"]';
	}
	else {
		return '[ "bottom5-",' + color + ', ' + this.id + ', "any", "casual"]';
	}
};

Blockly.JavaScript.bottom6 = function() {
  var color = Blockly.JavaScript.valueToCode(this, 'color', Blockly.JavaScript.ORDER_NONE) || '0';
	if (color == '0') {
		return '[ "bottom6-", "grey", ' + this.id + ', "any", "gym" ]';
	}
	else {
		return '[ "bottom6-",' + color + ', ' + this.id + ', "any", "gym" ]';
	}
};

Blockly.JavaScript.bottom7 = function() {
  var color = Blockly.JavaScript.valueToCode(this, 'color', Blockly.JavaScript.ORDER_NONE) || '0';
	if (color == '0') {
		return '[ "bottom7-", "grey", ' + this.id + ', "hot", "casual" ]';
	}
	else {
		return '[ "bottom7-",' + color + ', ' + this.id + ', "hot", "casual" ]';
	}
};

Blockly.JavaScript.bottom8 = function() {
  var color = Blockly.JavaScript.valueToCode(this, 'color', Blockly.JavaScript.ORDER_NONE) || '0';
	if (color == '0') {
		return '[ "bottom8-", "blue", ' + this.id + ', "hot", "casual" ]';
	}
	else {
		return '[ "bottom8-",' + color + ', ' + this.id + ', "hot", "casual" ]';
	}
};


Blockly.JavaScript.shoes1 = function() {
  var color = Blockly.JavaScript.valueToCode(this, 'color', Blockly.JavaScript.ORDER_NONE) || '0';
	if (color == '0') {
		return '[ "shoes1-", "purple", ' + this.id + ', "any", "casual" ]';
	}
	else {
		return '[ "shoes1-",' + color + ', ' + this.id + ', "any", "casual" ]';
	}
};

Blockly.JavaScript.shoes2 = function() {
  var color = Blockly.JavaScript.valueToCode(this, 'color', Blockly.JavaScript.ORDER_NONE) || '0';
	if (color == '0') {
		return '[ "shoes2-", "pink", ' + this.id + ', "any", "casual" ]';
	}
	else {
		return '[ "shoes2-",' + color + ', ' + this.id + ', "any", "casual" ]';
	}
};

Blockly.JavaScript.shoes3 = function() {
  var color = Blockly.JavaScript.valueToCode(this, 'color', Blockly.JavaScript.ORDER_NONE) || '0';
	if (color == '0') {
		return '[ "shoes3-", "grey", ' + this.id + ', "any", "casual" ]';
	}
	else {
		return '[ "shoes3-",' + color + ', ' + this.id + ', "any", "casual" ]';
	}
};

Blockly.JavaScript.shoes4 = function() {
  var color = Blockly.JavaScript.valueToCode(this, 'color', Blockly.JavaScript.ORDER_NONE) || '0';
	if (color == '0') {
		return '[ "shoes4-", "pink", ' + this.id + ', "any", "casual" ]';
	}
	else {
		return '[ "shoes4-",' + color + ', ' + this.id + ', "any", "casual" ]';
	}
};

Blockly.JavaScript.shoes5 = function() {
  var color = Blockly.JavaScript.valueToCode(this, 'color', Blockly.JavaScript.ORDER_NONE) || '0';
	if (color == '0') {
		return '[ "shoes5-", "lime", ' + this.id + ', "any", "casual" ]';
	}
	else {
		return '[ "shoes5-",' + color + ', ' + this.id + ', "any", "casual" ]';
	}
};

Blockly.JavaScript.hair1 = function() {
	return '[ "hair1-", "blue", ' + this.id + ', "any", "casual" ]';
	
};

Blockly.JavaScript.hair2 = function() {
	return '[ "hair2-", "blue", ' + this.id + ', "any", "casual" ]';
	
};


Blockly.JavaScript.hair3 = function() {
	return '[ "hair3-", "blue", ' + this.id + ', "any", "casual" ]';
	
};


Blockly.JavaScript.hair4 = function() {
	return '[ "hair4-", "blue", ' + this.id + ', "any", "casual" ]';
	
};


Blockly.JavaScript.hair5 = function() {
	return '[ "hair5-", "blue", ' + this.id + ', "any", "casual" ]';
	
};

Blockly.JavaScript.hair6 = function() {
	return '[ "hair6-", "blue", ' + this.id + ', "any", "casual" ]';
	
};
Blockly.JavaScript.set_color = function() {
	var part = this.getTitleValue('part');
	var color = Blockly.JavaScript.valueToCode(this, 'SET', Blockly.JavaScript.ORDER_NONE) || '0';
	
	return '["SET", [ "' + part + '", ' + color + '] ]';
		
};

Blockly.JavaScript.get_color_input = function() {
	var part = this.getTitleValue('part');
	var color = Blockly.JavaScript.valueToCode(this, 'GET', Blockly.JavaScript.ORDER_NONE) || '0';
	var code = '["GET", [ "' + part + '", ' + color + ' ]  ]';
	
	return [code, Blockly.JavaScript.ORDER_NONE];	
};

Blockly.JavaScript.get_color_var = function() {
	var code = '"current_color"';
	
	return [code, Blockly.JavaScript.ORDER_NONE];	
};


Blockly.JavaScript.equal = function() {
	var color = Blockly.JavaScript.valueToCode(this, 'equal', Blockly.JavaScript.ORDER_NONE) || '0';
	var code = color;
	
	return [code, Blockly.JavaScript.ORDER_NONE];
		
};

Blockly.JavaScript.red = function() {
	var color = '"red"';
	return [color, Blockly.JavaScript.ORDER_NONE];
		
};

Blockly.JavaScript.blue = function() {
	color = '"blue"';
	return [color, Blockly.JavaScript.ORDER_NONE];
		
};

Blockly.JavaScript.black = function() {
	color = '"black"';
	return [color, Blockly.JavaScript.ORDER_NONE];
		
};

Blockly.JavaScript.pink = function() {
	color = '"pink"';
	return [color, Blockly.JavaScript.ORDER_NONE];
		
};

Blockly.JavaScript.grey = function() {
	color = '"grey"';
	return [color, Blockly.JavaScript.ORDER_NONE];
		
};

Blockly.JavaScript.gold = function() {
	color = '"gold"';
	return [color, Blockly.JavaScript.ORDER_NONE];
		
};

Blockly.JavaScript.lime = function() {
	color = '"lime"';
	return [color, Blockly.JavaScript.ORDER_NONE];
		
};

Blockly.JavaScript.purple = function() {
	color = '"purple"';
	return [color, Blockly.JavaScript.ORDER_NONE];
		
};

Blockly.JavaScript.orange = function() {
	color = '"orange"';
	return [color, Blockly.JavaScript.ORDER_NONE];
		
};



Blockly.JavaScript.going_to = function() {
	var place = this.getTitleValue('place');
	var code = '"Going", "' + place + '", ' + this.id;
	
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.weather = function() {
	var weather = this.getTitleValue('weather');
	var code = '"weather", "' + weather + '", ' + this.id;
	
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.control_repeat = function() {
  var count = this.getTitleValue('COUNT') || '50';
  var branch = Blockly.JavaScript.statementToCode(this, 'DO');
  
  return '[ "repeat", ' + this.id + ', ' + count + ', [ ' + branch + '] ]';
};

Blockly.JavaScript.control_if_weather = function() {
  var weather = this.getTitleValue('weather');
  var then = Blockly.JavaScript.statementToCode(this, 'THEN');
  var other = Blockly.JavaScript.statementToCode(this, 'ELSE');
  
  code = '["if", ["weather", "'+ weather +'", ' +this.id + ' ], [ ' + then + ' ], [' + other + '] ]';
  
 
  return code ;
};


Blockly.JavaScript.control_if_place = function() {
  var place = this.getTitleValue('place');
  var then = Blockly.JavaScript.statementToCode(this, 'THEN');
  var other = Blockly.JavaScript.statementToCode(this, 'ELSE');
  
  code = '["if", ["going", "'+ place +'", ' +this.id + ' ], [ ' + then + ' ], [' + other + '] ]';
  
 
  return code ;
};


Blockly.JavaScript.control_if = function() {
  var condition = Blockly.JavaScript.valueToCode(this, 'CONDITION', Blockly.JavaScript.ORDER_NONE) || '0';
  var then = Blockly.JavaScript.statementToCode(this, 'THEN');
  var other = Blockly.JavaScript.statementToCode(this, 'ELSE');
  
  code = '["if", [' + condition + '], [ ' + then + ' ], [' + other + '] ]';
  
 
  return code ;
};


Blockly.JavaScript.color_dress1 = function() {
	code = 'color_dress1';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

'use strict';

goog.provide('Blockly.JavaScript.procedures');

goog.require('Blockly.JavaScript');

Blockly.JavaScript.procedures_defreturn = function() {
  // Define a procedure with a return value.
  var funcName = Blockly.JavaScript.variableDB_.getName(
      this.getTitleValue('NAME'), Blockly.Procedures.NAME_TYPE);
  var branch = Blockly.JavaScript.statementToCode(this, 'STACK');
  if (Blockly.JavaScript.INFINITE_LOOP_TRAP) {
    branch = Blockly.JavaScript.INFINITE_LOOP_TRAP.replace(/%1/g,
        '\'' + this.id + '\'') + branch;
  }
  //var code = 'function ' + funcName + '() {\n' +
      //branch + '}';
  //code = Blockly.JavaScript.scrub_(this, code);
  var code = '{[ "' + funcName + '",' + this.id + ', [' + branch + ' ]]}';//++
  Blockly.JavaScript.definitions_[funcName] = code;
  return null;
};

// Defining a procedure without a return value uses the same generator as
// a procedure with a return value.
Blockly.JavaScript.procedures_defnoreturn =
    Blockly.JavaScript.procedures_defreturn;



Blockly.JavaScript.procedures_callnoreturn = function() {
  // Call a procedure with no return value.
  var funcName = Blockly.JavaScript.variableDB_.getName(
      this.getTitleValue('NAME'), Blockly.Procedures.NAME_TYPE);
  //trim string
  var ind1 = funcName.substring(16);
  var stripped = ind1.substring(0, ind1.length - 10);
  var code = '["CALL",  "' + stripped + '" , ' + this.id + ' ]';
  return code;
};
