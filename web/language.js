//-------------------------------------------------------------------------
// Top1
//-------------------------------------------------------------------------
Blockly.Language.top1 = {
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(330, .45, .65);
    this.appendValueInput("color")
        .setCheck([String, "var"])
        .appendTitle("       T-shirt        ")
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    var thisBlock = this; 
    this.setTooltip( function() {
      					var color = Blockly.JavaScript.valueToCode(thisBlock, 'color', Blockly.JavaScript.ORDER_NONE) || '0';
      					if (color == '0')
      						return 'top1-purple';
      					else {
      						color = color.replace(/"/g, "").replace(/\(/g, "").replace(/\)/g, "");
      						return 'top1-'+ color;
      					}
      				
    				}
				   );
  },
};

//-------------------------------------------------------------------------
// Top2 - Wedding Dress
//-------------------------------------------------------------------------
Blockly.Language.top2 = {
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(330, .45, .65);
    this.appendValueInput("color")
        .setCheck([String, "var"])
        .appendTitle("Wedding dress ")
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    var thisBlock = this; 
    this.setTooltip( function() {
      					var color = Blockly.JavaScript.valueToCode(thisBlock, 'color', Blockly.JavaScript.ORDER_NONE) || '0';
      					if (color == '0')
      						return 'top2-pink';
      					else {
      						color = color.replace(/"/g, "").replace(/\(/g, "").replace(/\)/g, "");
      						return 'top2-'+ color;
      					}
      				
    				}
				   );
  }
};

//-------------------------------------------------------------------------
// Top3
//-------------------------------------------------------------------------
Blockly.Language.top3 = {
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(330, .45, .65);
    this.appendValueInput("color")
        .setCheck([String, "var"])
        .appendTitle("   V-neck shirt   ")
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    var thisBlock = this; 
    this.setTooltip( function() {
      					var color = Blockly.JavaScript.valueToCode(thisBlock, 'color', Blockly.JavaScript.ORDER_NONE) || '0';
      					if (color == '0')
      						return 'top3-red';
      					else {
      						color = color.replace(/"/g, "").replace(/\(/g, "").replace(/\)/g, "");
      						return 'top3-'+ color;
      					}
      				
    				}
				   );
  }
};

//-------------------------------------------------------------------------
// Top4
//-------------------------------------------------------------------------
Blockly.Language.top4 = {
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(330, .45, .65);
    this.appendValueInput("color")
        .setCheck([String, "var"])
        .appendTitle("       Jacket        ")
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    var thisBlock = this; 
    this.setTooltip( function() {
      					var color = Blockly.JavaScript.valueToCode(thisBlock, 'color', Blockly.JavaScript.ORDER_NONE) || '0';
      					if (color == '0')
      						return 'top4-grey';
      					else {
      						color = color.replace(/"/g, "").replace(/\(/g, "").replace(/\)/g, "");
      						return 'top4-'+ color;
      					}
      				
    				}
				   );
  }
};

//-------------------------------------------------------------------------
// Top5
//-------------------------------------------------------------------------
Blockly.Language.top5 = {
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(330, .45, .65);
    this.appendValueInput("color")
        .setCheck([String, "var"])
        .appendTitle("    Formal top    ")
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    var thisBlock = this; 
    this.setTooltip( function() {
      					var color = Blockly.JavaScript.valueToCode(thisBlock, 'color', Blockly.JavaScript.ORDER_NONE) || '0';
      					if (color == '0')
      						return 'top5-red';
      					else {
      						color = color.replace(/"/g, "").replace(/\(/g, "").replace(/\)/g, "");
      						return 'top5-'+ color;
      					}
      				
    				}
				   );
  }
};

//-------------------------------------------------------------------------
// Top6
//-------------------------------------------------------------------------
Blockly.Language.top6 = {
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(330, .45, .65);
    this.appendValueInput("color")
        .setCheck([String, "var"])
        .appendTitle("      Gym top      ")
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    var thisBlock = this; 
    this.setTooltip( function() {
      					var color = Blockly.JavaScript.valueToCode(thisBlock, 'color', Blockly.JavaScript.ORDER_NONE) || '0';
      					if (color == '0')
      						return 'top6-purple';
      					else {
      						color = color.replace(/"/g, "").replace(/\(/g, "").replace(/\)/g, "");
      						return 'top6-'+ color;
      					}
      				
    				}
				   );
  }
};

//-------------------------------------------------------------------------
// Top7
//-------------------------------------------------------------------------
Blockly.Language.top7 = {
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(330, .45, .65);
    this.appendValueInput("color")
        .setCheck([String, "var"])
        .appendTitle("       Blouse       ")
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    var thisBlock = this; 
    this.setTooltip( function() {
      					var color = Blockly.JavaScript.valueToCode(thisBlock, 'color', Blockly.JavaScript.ORDER_NONE) || '0';
      					if (color == '0')
      						return 'top7-red';
      					else {
      						color = color.replace(/"/g, "").replace(/\(/g, "").replace(/\)/g, "");
      						return 'top7-'+ color;
      					}
      				
    				}
				   );
  }
};

//-------------------------------------------------------------------------
// Top8
//-------------------------------------------------------------------------
Blockly.Language.top8 = {
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(330, .45, .65);
    this.appendValueInput("color")
        .setCheck([String, "var"])
        .appendTitle("V neck")
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    var thisBlock = this; 
    this.setTooltip( function() {
      					var color = Blockly.JavaScript.valueToCode(thisBlock, 'color', Blockly.JavaScript.ORDER_NONE) || '0';
      					if (color == '0')
      						return 'top8-gold';
      					else {
      						color = color.replace(/"/g, "").replace(/\(/g, "").replace(/\)/g, "");
      						return 'top8-'+ color;
      					}
      				
    				}
				   );
  }
};


//-------------------------------------------------------------------------
// Bottom1
//-------------------------------------------------------------------------
Blockly.Language.bottom1 = {
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(330, .45, .65);
    this.appendValueInput("color")
        .setCheck([String, "var"])
        .appendTitle("    Long jeans    ")
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    var thisBlock = this; 
    this.setTooltip( function() {
      					var color = Blockly.JavaScript.valueToCode(thisBlock, 'color', Blockly.JavaScript.ORDER_NONE) || '0';
      					if (color == '0')
      						return 'bottom1-blue';
      					else {
      						color = color.replace(/"/g, "").replace(/\(/g, "").replace(/\)/g, "");
      						return 'bottom1-'+ color;
      					}
      				
    				}
				   );
  }
};

//-------------------------------------------------------------------------
// Bottom2
//-------------------------------------------------------------------------
Blockly.Language.bottom2 = {
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(330, .45, .65);
    this.appendValueInput("color")
        .setCheck([String, "var"])
        .appendTitle("      Legging       ")
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    var thisBlock = this; 
    this.setTooltip( function() {
      					var color = Blockly.JavaScript.valueToCode(thisBlock, 'color', Blockly.JavaScript.ORDER_NONE) || '0';
      					if (color == '0')
      						return 'bottom2-grey';
      					else {
      						color = color.replace(/"/g, "").replace(/\(/g, "").replace(/\)/g, "");
      						return 'bottom2-'+ color;
      					}
      				
    				}
				   );
  }
};

//-------------------------------------------------------------------------
// Bottom3
//-------------------------------------------------------------------------
Blockly.Language.bottom3 = {
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(330, .45, .65);
    this.appendValueInput("color")
        .setCheck([String, "var"])
        .appendTitle("        Shorts       ")
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    var thisBlock = this; 
    this.setTooltip( function() {
      					var color = Blockly.JavaScript.valueToCode(thisBlock, 'color', Blockly.JavaScript.ORDER_NONE) || '0';
      					if (color == '0')
      						return 'bottom3-red';
      					else {
      						color = color.replace(/"/g, "").replace(/\(/g, "").replace(/\)/g, "");
      						return 'bottom3-'+ color;
      					}
      				
    				}
				   );
  }
};

//-------------------------------------------------------------------------
// Bottom4
//-------------------------------------------------------------------------
Blockly.Language.bottom4 = {
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(330, .45, .65);
    this.appendValueInput("color")
        .setCheck([String, "var"])
        .appendTitle("     Short skirt     ")
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    var thisBlock = this; 
    this.setTooltip( function() {
      					var color = Blockly.JavaScript.valueToCode(thisBlock, 'color', Blockly.JavaScript.ORDER_NONE) || '0';
      					if (color == '0')
      						return 'bottom4-lime';
      					else {
      						color = color.replace(/"/g, "").replace(/\(/g, "").replace(/\)/g, "");
      						return 'bottom4-'+ color;
      					}
      				
    				}
				   );
  }
};

//-------------------------------------------------------------------------
// Bottom5
//-------------------------------------------------------------------------
Blockly.Language.bottom5 = {
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(330, .45, .65);
    this.appendValueInput("color")
        .setCheck([String, "var"])
        .appendTitle("     Maxi skirt     ")
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    var thisBlock = this; 
    this.setTooltip( function() {
      					var color = Blockly.JavaScript.valueToCode(thisBlock, 'color', Blockly.JavaScript.ORDER_NONE) || '0';
      					if (color == '0')
      						return 'bottom5-black';
      					else {
      						color = color.replace(/"/g, "").replace(/\(/g, "").replace(/\)/g, "");
      						return 'bottom5-'+ color;
      					}
      				
    				}
				   );
  }
};

//-------------------------------------------------------------------------
// Bottom6
//-------------------------------------------------------------------------
Blockly.Language.bottom6 = {
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(330, .45, .65);
    this.appendValueInput("color")
        .setCheck([String, "var"])
        .appendTitle("   Gym bottom   ")
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    var thisBlock = this; 
    this.setTooltip( function() {
      					var color = Blockly.JavaScript.valueToCode(thisBlock, 'color', Blockly.JavaScript.ORDER_NONE) || '0';
      					if (color == '0')
      						return 'bottom6-grey';
      					else {
      						color = color.replace(/"/g, "").replace(/\(/g, "").replace(/\)/g, "");
      						return 'bottom6-'+ color;
      					}
      				
    				}
				   );
  }
};

//-------------------------------------------------------------------------
// shoes1
//-------------------------------------------------------------------------
Blockly.Language.shoes1 = {
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(330, .45, .65);
    this.appendValueInput("color")
        .setCheck([String, "var"])
        .appendTitle("      Bow flats    ")
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    var thisBlock = this; 
    this.setTooltip( function() {
      					var color = Blockly.JavaScript.valueToCode(thisBlock, 'color', Blockly.JavaScript.ORDER_NONE) || '0';
      					if (color == '0')
      						return 'shoes1-purple';
      					else {
      						color = color.replace(/"/g, "").replace(/\(/g, "").replace(/\)/g, "");
      						return 'shoes1-'+ color;
      					}
      				
    				}
				   );
  }
};

//-------------------------------------------------------------------------
// shoes2
//-------------------------------------------------------------------------
Blockly.Language.shoes2 = {
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(330, .45, .65);
    this.appendValueInput("color")
        .setCheck([String, "var"])
        .appendTitle("   Glitter shoes  ")
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    var thisBlock = this; 
    this.setTooltip( function() {
      					var color = Blockly.JavaScript.valueToCode(thisBlock, 'color', Blockly.JavaScript.ORDER_NONE) || '0';
      					if (color == '0')
      						return 'shoes2-pink';
      					else {
      						color = color.replace(/"/g, "").replace(/\(/g, "").replace(/\)/g, "");
      						return 'shoes2-'+ color;
      					}
      				
    				}
				   );
  }
};

//-------------------------------------------------------------------------
// shoes3
//-------------------------------------------------------------------------
Blockly.Language.shoes3 = {
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(330, .45, .65);
    this.appendValueInput("color")
        .setCheck([String, "var"])
        .appendTitle("        Boots        ")
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    var thisBlock = this; 
    this.setTooltip( function() {
      					var color = Blockly.JavaScript.valueToCode(thisBlock, 'color', Blockly.JavaScript.ORDER_NONE) || '0';
      					if (color == '0')
      						return 'shoes3-grey';
      					else {
      						color = color.replace(/"/g, "").replace(/\(/g, "").replace(/\)/g, "");
      						return 'shoes3-'+ color;
      					}
      				
    				}
				   );
  }
};

//-------------------------------------------------------------------------
// shoes4
//-------------------------------------------------------------------------
Blockly.Language.shoes4 = {
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(330, .45, .65);
    this.appendValueInput("color")
        .setCheck([String, "var"])
        .appendTitle("     Sneakers     ")
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    var thisBlock = this; 
    this.setTooltip( function() {
      					var color = Blockly.JavaScript.valueToCode(thisBlock, 'color', Blockly.JavaScript.ORDER_NONE) || '0';
      					if (color == '0')
      						return 'shoes4-pink';
      					else {
      						color = color.replace(/"/g, "").replace(/\(/g, "").replace(/\)/g, "");
      						return 'shoes4-'+ color;
      					}
      				
    				}
				   );
  }
};

//-------------------------------------------------------------------------
// shoes4
//-------------------------------------------------------------------------
Blockly.Language.shoes5 = {
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(330, .45, .65);
    this.appendValueInput("color")
        .setCheck([String, "var"])
        .appendTitle("     Sandals       ")
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    var thisBlock = this; 
    this.setTooltip( function() {
      					var color = Blockly.JavaScript.valueToCode(thisBlock, 'color', Blockly.JavaScript.ORDER_NONE) || '0';
      					if (color == '0')
      						return 'shoes5-lime';
      					else {
      						color = color.replace(/"/g, "").replace(/\(/g, "").replace(/\)/g, "");
      						return 'shoes5-'+ color;
      					}
      				
    				}
				   );
  }
};

//-------------------------------------------------------------------------
// Hair 1 (brunette)
//-------------------------------------------------------------------------
Blockly.Language.hair1 = {
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(330, .45, .65);
    this.appendDummyInput()
    	.appendTitle("       Brunette       ")
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    var thisBlock = this; 
    this.setTooltip('hair1-');
  }
};


//-------------------------------------------------------------------------
// Hair 2 (blonde)
//-------------------------------------------------------------------------
Blockly.Language.hair2 = {
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(330, .45, .65);
    this.appendDummyInput()
    	.appendTitle("        Blonde        ")
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    var thisBlock = this; 
    this.setTooltip('hair2-');
  }
};


//-------------------------------------------------------------------------
// Hair 3 (side)
//-------------------------------------------------------------------------
Blockly.Language.hair3 = {
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(330, .45, .65);
    this.appendDummyInput()
    	.appendTitle("     Wavy style     ")
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    var thisBlock = this; 
    this.setTooltip('hair3-');
  }
};


//-------------------------------------------------------------------------
// Hair 4 (pony tail)
//-------------------------------------------------------------------------
Blockly.Language.hair4 = {
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(330, .45, .65);
    this.appendDummyInput()
    	.appendTitle("      Pony tail       ")
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    var thisBlock = this; 
    this.setTooltip('hair4-');
  }
};


//-------------------------------------------------------------------------
// Hair 5 (5)
//-------------------------------------------------------------------------
Blockly.Language.hair5 = {
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(330, .45, .65);
    this.appendDummyInput()
    	.appendTitle("      Redhead       ")
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    var thisBlock = this; 
    this.setTooltip('hair5-');
  }
};

//-------------------------------------------------------------------------
// Hair 6 (6)
//-------------------------------------------------------------------------
Blockly.Language.hair6 = {
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(330, .45, .65);
    this.appendDummyInput()
    	.appendTitle("        Curly           ")
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    var thisBlock = this; 
    this.setTooltip('hair6-');
  }
};

//-------------------------------------------------------------------------
// SetColor
//-------------------------------------------------------------------------
Blockly.Language.set_color = {
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(290, .45, .65);
    this.appendValueInput("SET")
        .setCheck(String)
        .appendTitle(new Blockly.FieldImage("http://www.gstatic.com/codesite/ph/images/star_on.gif", 50, 50))
        .appendTitle("SET COLOR OF")
        .appendTitle(new Blockly.FieldDropdown([["1", "1"], ["2", "top2"], ["3", "bottom1"], ["4", "bottom2"], ["5", "bag"]]), "part");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

//-------------------------------------------------------------------------
// GetColorInput
//-------------------------------------------------------------------------
Blockly.Language.get_color_input = {
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(34, .66, .95);
    this.appendValueInput("GET")
        .setCheck([Boolean, "equal", String])
        .appendTitle("COLOR OF TOP")
        //.appendTitle(new Blockly.FieldDropdown(GET_options()), "part")
        .appendTitle("IS ");
    this.setOutput(true, "input");
    this.setTooltip('');
  }
};

function GET_options() {  
    return [["top1", "top1"], ["top2", "top2"], ["bottom1", "bottom1"], ["bottom2", "bottom2"], ["bag", "bag"]];
};


//-------------------------------------------------------------------------
// GetColorVar
//-------------------------------------------------------------------------
Blockly.Language.get_color_var = {
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(290, .45, .65);
    this.appendDummyInput()
        .appendTitle("GET COLOR OF")
        .appendTitle(new Blockly.FieldDropdown(GET_options()), "part");
    this.setOutput(true, "var");
    this.setTooltip('');
  }
};




//-------------------------------------------------------------------------
// EQUALS?
//-------------------------------------------------------------------------
Blockly.Language.equal = {
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(290, .45, .65);
    this.appendValueInput("equal")
        .setCheck(String)
        .appendTitle("EQUALS?");
    this.setOutput(true,Boolean);
    this.setTooltip('');
  }
};

//-------------------------------------------------------------------------
// Red
//-------------------------------------------------------------------------

Blockly.Language.red = {
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(14, .95, .86);
    this.appendDummyInput()
        .appendTitle("     Red     ");
    this.setOutput(true, String);
    this.setTooltip('');
  },
  getName: function() {
  	"";
  },
};

//-------------------------------------------------------------------------
// Blue
//-------------------------------------------------------------------------

Blockly.Language.blue = {
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(230, .45, .65);
    this.appendDummyInput()
        .appendTitle("     Blue    ");
    this.setOutput(true, String);
    this.setTooltip('');
  },
  getName: function() {
  	"";
  },
};

//-------------------------------------------------------------------------
// Purple
//-------------------------------------------------------------------------

Blockly.Language.purple = {
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(290, .45, .65);
    this.appendDummyInput()
        .appendTitle("   Purple   ");
    this.setOutput(true, String);
    this.setTooltip('');
  },
  getName: function() {
  	"";
  },
};

//-------------------------------------------------------------------------
// Lime
//-------------------------------------------------------------------------

Blockly.Language.lime = {
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(76, .45, .65);
    this.appendDummyInput()
        .appendTitle("    Green   ");
    this.setOutput(true, String);
    this.setTooltip('');
  },
  getName: function() {
  	"";
  },
};

//-------------------------------------------------------------------------
// Black
//-------------------------------------------------------------------------

Blockly.Language.black = {
  helpUrl: 'http://www.example.com/',
  init: function() {
    //this.setColour(112, .45, .65);
    this.appendDummyInput()
        .appendTitle("    Black   ");
    this.setOutput(true, String);
    this.setTooltip('');
  },
  getName: function() {
  	"";
  },
};

//-------------------------------------------------------------------------
// Gold
//-------------------------------------------------------------------------

Blockly.Language.gold = {
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(48, .97, .95);
    this.appendDummyInput()
        .appendTitle("     Gold     ");
    this.setOutput(true, String);
    this.setTooltip('');
  },
  getName: function() {
  	"";
  },
};

//-------------------------------------------------------------------------
// Pink
//-------------------------------------------------------------------------

Blockly.Language.pink = {
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(348, .3, .98);
    this.appendDummyInput()
        .appendTitle("     Pink    ");
    this.setOutput(true, String);
    this.setTooltip('');
  },
  getName: function() {
  	"";
  },
};

//-------------------------------------------------------------------------
// Orange
//-------------------------------------------------------------------------

Blockly.Language.orange = {
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(34, .66, .95);
    this.appendDummyInput()
        .appendTitle("  Orange  ");
    this.setOutput(true, String);
    this.setTooltip('');
  },
  getName: function() {
  	"";
  },
};

//-------------------------------------------------------------------------
// Grey
//-------------------------------------------------------------------------

Blockly.Language.grey = {
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(240, .10, .61);
    this.appendDummyInput()
        .appendTitle("    Grey    ");
    this.setOutput(true, String);
    this.setTooltip('');
  },
  getName: function() {
  	"";
  },
};

Blockly.Language.control_repeat = {
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(76, .45, .65);
    this.appendDummyInput()
        .appendTitle("      REPEAT")
        .appendTitle(new Blockly.FieldTextInput("5"), "COUNT")
        .appendTitle("TIMES   ")
    this.appendStatementInput("DO");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

//---------------------------------------------------------------------------
// IF weather
//---------------------------------------------------------------------------
Blockly.Language.control_if_weather = {
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(120, .45, .65);
    this.appendDummyInput()
    	.setAlign(Blockly.ALIGN_CENTRE)
        .appendTitle("  IF WEATHER IS:")
        .appendTitle(new Blockly.FieldDropdown([["HOT", "hot"], ["COLD", "cold"]]), "weather")
        .appendTitle("? ");
    this.appendStatementInput("THEN");
    this.appendDummyInput()
    	.appendTitle("   ELSE ");
    this.appendStatementInput("ELSE");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

//---------------------------------------------------------------------------
// IF place
//---------------------------------------------------------------------------
Blockly.Language.control_if_place = {
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(120, .45, .65);
    this.appendDummyInput()
    	.setAlign(Blockly.ALIGN_CENTRE)
        .appendTitle("  IF GOING TO:")
        .appendTitle(new Blockly.FieldDropdown([["WEDDING", "wedding"], ["GYM", "gym"]]), "place")
        .appendTitle("? ");
    this.appendStatementInput("THEN");
    this.appendDummyInput()
    	.appendTitle("   ELSE ");
    this.appendStatementInput("ELSE");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};
//--------------------------------------------------------------------------
// IF 
//--------------------------------------------------------------------------
Blockly.Language.control_if = {
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(120, .45, .65);
    this.appendValueInput("CONDITION")
        .setCheck(["input", "going_to", "weather"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("IF");
    this.appendDummyInput();
    this.appendStatementInput("THEN")
        .appendTitle("    THEN");
    this.appendDummyInput();
    this.appendDummyInput();
    this.appendStatementInput("ELSE")
        .appendTitle("    ELSE");
    this.appendDummyInput()
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};


Blockly.Language.going_to = {
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(120, .45, .65);
    this.appendDummyInput()
        .appendTitle("Going To")
        .appendTitle(new Blockly.FieldDropdown([["wedding", "wedding"], ["gym", "gym"]]), "place");
    this.setOutput(true, "going_to");
    this.setTooltip('');
  }
};



Blockly.Language.weather = {
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(120, .45, .65);
    this.appendDummyInput()
        .appendTitle("Weather outside is: ")
        .appendTitle(new Blockly.FieldDropdown([["hot", "hot"], ["cold", "cold"]]), "weather");
    this.setOutput(true, "weather");
    this.setTooltip('');
  }
};

//------------------------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------------------------------


'use strict';

Blockly.Language.procedures_defnoreturn = {
  // Define a procedure with no return value.
  category: null,  // Procedures are handled specially.
  helpUrl: Blockly.LANG_PROCEDURES_DEFNORETURN_HELPURL,
  init: function() {
    this.setColour(230, .45, .65);
    //this.movable = false;
    var name = Blockly.Procedures.findLegalName(
        "Type Name..", this);
    this.appendDummyInput()
    	.appendTitle("Outfit Name:")
        .appendTitle(new Blockly.FieldTextInput(name,
        Blockly.Procedures.rename), 'NAME')
        .appendTitle('', 'PARAMS');
    this.appendStatementInput('STACK')
        .appendTitle("");
   // this.setMutator(new Blockly.Mutator(['procedures_mutatorarg']));
    //this.setTooltip(Blockly.LANG_PROCEDURES_DEFNORETURN_TOOLTIP);
    this.arguments_ = [];
  },
  updateParams_: function() {
    // Check for duplicated arguments.
    var badArg = false;
    var hash = {};
    for (var x = 0; x < this.arguments_.length; x++) {
      if (hash['arg_' + this.arguments_[x].toLowerCase()]) {
        badArg = true;
        break;
      }
      hash['arg_' + this.arguments_[x].toLowerCase()] = true;
    }
    if (badArg) {
      this.setWarningText(Blockly.LANG_PROCEDURES_DEF_DUPLICATE_WARNING);
    } else {
      this.setWarningText(null);
    }
    // Merge the arguments into a human-readable list.
    var paramString = this.arguments_.join(', ');
    this.setTitleValue(paramString, 'PARAMS');
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    for (var x = 0; x < this.arguments_.length; x++) {
      var parameter = document.createElement('arg');
      parameter.setAttribute('name', this.arguments_[x]);
      container.appendChild(parameter);
    }
    return container;
  },
  domToMutation: function(xmlElement) {
    this.arguments_ = [];
    for (var x = 0, childNode; childNode = xmlElement.childNodes[x]; x++) {
      if (childNode.nodeName.toLowerCase() == 'arg') {
        this.arguments_.push(childNode.getAttribute('name'));
      }
    }
    this.updateParams_();
  },
  decompose: function(workspace) {
    var containerBlock = new Blockly.Block(workspace,
                                           'procedures_mutatorcontainer');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var x = 0; x < this.arguments_.length; x++) {
      var paramBlock = new Blockly.Block(workspace, 'procedures_mutatorarg');
      paramBlock.initSvg();
      paramBlock.setTitleValue(this.arguments_[x], 'NAME');
      // Store the old location.
      paramBlock.oldLocation = x;
      connection.connect(paramBlock.previousConnection);
      connection = paramBlock.nextConnection;
    }
    // Initialize procedure's callers with blank IDs.
    Blockly.Procedures.mutateCallers(this.getTitleValue('NAME'),
                                     this.workspace, this.arguments_, null);
    return containerBlock;
  },
  compose: function(containerBlock) {
    this.arguments_ = [];
    this.paramIds_ = [];
    var paramBlock = containerBlock.getInputTargetBlock('STACK');
    while (paramBlock) {
      this.arguments_.push(paramBlock.getTitleValue('NAME'));
      this.paramIds_.push(paramBlock.id);
      paramBlock = paramBlock.nextConnection &&
          paramBlock.nextConnection.targetBlock();
    }
    this.updateParams_();
    Blockly.Procedures.mutateCallers(this.getTitleValue('NAME'),
        this.workspace, this.arguments_, this.paramIds_);
  },
  dispose: function() {
    // Dispose of any callers.
    var name = this.getTitleValue('NAME');
    Blockly.Procedures.disposeCallers(name, this.workspace);
    // Call parent's destructor.
    Blockly.Block.prototype.dispose.apply(this, arguments);
  },
  getProcedureDef: function() {
    // Return the name of the defined procedure,
    // a list of all its arguments,
    // and that it DOES NOT have a return value.
    return [this.getTitleValue('NAME'), this.arguments_, false];
  },
  getVars: function() {
    return this.arguments_;
  },
  renameVar: function(oldName, newName) {
    var change = false;
    for (var x = 0; x < this.arguments_.length; x++) {
      if (Blockly.Names.equals(oldName, this.arguments_[x])) {
        this.arguments_[x] = newName;
        change = true;
      }
    }
    if (change) {
      this.updateParams_();
      // Update the mutator's variables if the mutator is open.
      if (this.mutator.isVisible_()) {
        var blocks = this.mutator.workspace_.getAllBlocks();
        for (var x = 0, block; block = blocks[x]; x++) {
          if (block.type == 'procedures_mutatorarg' &&
              Blockly.Names.equals(oldName, block.getTitleValue('NAME'))) {
            block.setTitleValue(newName, 'NAME');
          }
        }
      }
    }
  },
  customContextMenu: function(options) {
    // Add option to create caller.
    var option = {enabled: true};
    var name = this.getTitleValue('NAME');
    option.text = "Create \"shortcut to: " + name + " \"" ;

    var xmlMutation = goog.dom.createDom('mutation');
    xmlMutation.setAttribute('name', name);
    for (var x = 0; x < this.arguments_.length; x++) {
      var xmlArg = goog.dom.createDom('arg');
      xmlArg.setAttribute('name', this.arguments_[x]);
      xmlMutation.appendChild(xmlArg);
    }
    var xmlBlock = goog.dom.createDom('block', null, xmlMutation);
    xmlBlock.setAttribute('type', this.callType_);
    option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);

    options.push(option);
    // Add options to create getters for each parameter.
    for (var x = 0; x < this.arguments_.length; x++) {
      var option = {enabled: true};
      var name = this.arguments_[x];
      option.text = Blockly.LANG_VARIABLES_SET_CREATE_GET.replace('%1', name);
      var xmlTitle = goog.dom.createDom('title', null, name);
      xmlTitle.setAttribute('name', 'VAR');
      var xmlBlock = goog.dom.createDom('block', null, xmlTitle);
      xmlBlock.setAttribute('type', 'variables_get');
      option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
      options.push(option);
    }
  },
  callType_: 'procedures_callnoreturn'
};


Blockly.Language.procedures_mutatorcontainer = {
  // Procedure container (for mutator dialog).
  init: function() {
    this.setColour(34, .66, .95);
    this.appendDummyInput()
        .appendTitle(Blockly.LANG_PROCEDURES_MUTATORCONTAINER_TITLE);
    this.appendStatementInput('STACK');
    //this.setTooltip('');
    this.contextMenu = false;
  }
};

Blockly.Language.procedures_mutatorarg = {
  // Procedure argument (for mutator dialog).
  init: function() {
    this.setColour(34, .66, .95);
    this.appendDummyInput()
        .appendTitle(Blockly.LANG_PROCEDURES_MUTATORARG_TITLE)
        .appendTitle(new Blockly.FieldTextInput('x', this.validator), 'NAME');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    //this.setTooltip('');
    this.contextMenu = false;
  }
};

Blockly.Language.procedures_mutatorarg.validator = function(newVar) {
  // Merge runs of whitespace.  Strip leading and trailing whitespace.
  // Beyond this, all names are legal.
  newVar = newVar.replace(/[\s\xa0]+/g, ' ').replace(/^ | $/g, '');
  return newVar || null;
};

Blockly.Language.procedures_callnoreturn = {
  // Call a procedure with no return value.
  category: null,  // Procedures are handled specially.
  helpUrl: Blockly.LANG_PROCEDURES_CALLNORETURN_HELPURL,
  init: function() {
    this.setColour(230, .45, .65);
    this.appendDummyInput()
        .appendTitle("Shortcut to: \"", "NAME");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    //this.setTooltip(Blockly.LANG_PROCEDURES_CALLNORETURN_TOOLTIP);
    
    this.arguments_ = [];
    this.quarkConnections_ = null;
    this.quarkArguments_ = null;
  },
  getProcedureCall: function() {
    return this.getTitleValue('NAME');
  },
  renameProcedure: function(oldName, newName) {
    if ( Blockly.Names.equals("shortcut to: \"".concat(oldName).concat("\" outfit"), (this.getTitleValue('NAME'))) ) {
      var x = "shortcut to: \"".concat(newName).concat("\" outfit");;
      this.setTitleValue(x, 'NAME');
    }
  },
  setProcedureParameters: function(paramNames, paramIds) {
    // Data structures for parameters on each call block:
    // this.arguments = ['x', 'y']
    //     Existing param names.
    // paramNames = ['x', 'y', 'z']
    //     New param names.
    // paramIds = ['piua', 'f8b_', 'oi.o']
    //     IDs of params (consistent for each parameter through the life of a
    //     mutator, regardless of param renaming).
    // this.quarkConnections_ {piua: null, f8b_: Blockly.Connection}
    //     Look-up of paramIds to connections plugged into the call block.
    // this.quarkArguments_ = ['piua', 'f8b_']
    //     Existing param IDs.
    // Note that quarkConnections_ may include IDs that no longer exist, but
    // which might reappear if a param is reattached in the mutator.
    if (!paramIds) {
      // Reset the quarks (a mutator is about to open).
      this.quarkConnections_ = {};
      this.quarkArguments_ = null;
      return;
    }
    if (paramIds.length != paramNames.length) {
      throw 'Error: paramNames and paramIds must be the same length.';
    }
    if (!this.quarkArguments_) {
      // Initialize tracking for this block.
      this.quarkConnections_ = {};
      if (paramNames.join('\n') == this.arguments_.join('\n')) {
        // No change to the parameters, allow quarkConnections_ to be
        // populated with the existing connections.
        this.quarkArguments_ = paramIds;
      } else {
        this.quarkArguments_ = [];
      }
    }
    // Switch off rendering while the block is rebuilt.
    var savedRendered = this.rendered;
    this.rendered = false;
    // Update the quarkConnections_ with existing connections.
    for (var x = this.arguments_.length - 1; x >= 0; x--) {
      var input = this.getInput('ARG' + x);
      if (input) {
        var connection = input.connection.targetConnection;
        this.quarkConnections_[this.quarkArguments_[x]] = connection;
        // Disconnect all argument blocks and remove all inputs.
        this.removeInput('ARG' + x);
      }
    }
    // Rebuild the block's arguments.
    this.arguments_ = [].concat(paramNames);
    this.quarkArguments_ = paramIds;
    for (var x = 0; x < this.arguments_.length; x++) {
      var input = this.appendValueInput('ARG' + x)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendTitle(this.arguments_[x]);
      if (this.quarkArguments_) {
        // Reconnect any child blocks.
        var quarkName = this.quarkArguments_[x];
        if (quarkName in this.quarkConnections_) {
          var connection = this.quarkConnections_[quarkName];
          if (!connection || connection.targetConnection ||
              connection.sourceBlock_.workspace != this.workspace) {
            // Block no longer exists or has been attached elsewhere.
            delete this.quarkConnections_[quarkName];
          } else {
            input.connection.connect(connection);
          }
        }
      }
    }
    // Restore rendering and show the changes.
    this.rendered = savedRendered;
    if (this.rendered) {
      this.render();
    }
  },
  mutationToDom: function() {
    // Save the name and arguments (none of which are editable).
    var container = document.createElement('mutation');
    container.setAttribute('name', this.getTitleValue('NAME'));
    for (var x = 0; x < this.arguments_.length; x++) {
      var parameter = document.createElement('arg');
      parameter.setAttribute('name', this.arguments_[x]);
      container.appendChild(parameter);
    }
    return container;
  },
  domToMutation: function(xmlElement) {
    // Restore the name and parameters.
    var name = xmlElement.getAttribute('name');
    this.setTitleValue(name, 'NAME');
    var def = Blockly.Procedures.getDefinition(name, this.workspace);
      this.arguments_ = [];
      for (var x = 0, childNode; childNode = xmlElement.childNodes[x]; x++) {
        if (childNode.nodeName.toLowerCase() == 'arg') {
          this.arguments_.push(childNode.getAttribute('name'));
        }
      }
      // For the second argument (paramIds) use the arguments list as a dummy
      // list.
      this.setProcedureParameters(this.arguments_, this.arguments_);
    
  },
  renameVar: function(oldName, newName) {
    for (var x = 0; x < this.arguments_.length; x++) {
      if (Blockly.Names.equals(oldName, this.arguments_[x])) {
        this.arguments_[x] = newName;
        this.getInput('ARG' + x).titleRow[0].setText(newName);
      }
    }
  },
  customContextMenu: function(options) {
    // Add option to find caller.
    var option = {enabled: true};
    option.text = Blockly.LANG_PROCEDURES_HIGHLIGHT_DEF;
    var name = this.getTitleValue('NAME');
    var workspace = this.workspace;
    option.callback = function() {
      var def = Blockly.Procedures.getDefinition(name, workspace);
      def && def.select();
    };
    options.push(option);
  }
};