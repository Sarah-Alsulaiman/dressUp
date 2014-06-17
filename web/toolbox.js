//-------------------------------------------------------------------------------------
// Returns an array of toolboxes for all levels
//-------------------------------------------------------------------------------------
function getToolbox() {
	var toolbox = [];
	
	var toolbox1 = '<xml>';
	toolbox1 += '  <category></category>';  
	
	toolbox1 += '  <category name="+ Tops"> <block type="top1"></block> <block type="top3"></block> <block type="top4"></block> <block type="top5"></block> <block type="top6"></block> <block type="top7"></block> <block type="top2"></block>  ';
	toolbox1 += '</category> <category> </category>'; //close tops
	
	toolbox1 += '<category name="+ Bottoms"> <block type="bottom1"></block> <block type="bottom2"></block> <block type="bottom3"></block> <block type="bottom4"></block> <block type="bottom5"></block> <block type="bottom6"></block>';
    toolbox1 += '</category> <category> </category>'; //close bottoms
      
    toolbox1 += '<category name="+ Hair"> <block type="hair1"></block> <block type="hair2"></block> <block type="hair3"></block> <block type="hair4"></block> <block type="hair5"></block> <block type="hair6"></block>';
    toolbox1 += '</category> <category> </category>'; //close hair
      
    toolbox1 += '<category name="+ Shoes"> <block type="shoes1"></block> <block type="shoes2"></block> <block type="shoes3"></block> <block type="shoes4"></block> <block type="shoes5"></block>';
    toolbox1 += '</category> <category> </category>'; //close shoes
    
    toolbox1 += '<category name="+ Coloring"> <block type="red"></block> <block type="blue"></block>' + 
                    '<block type="black"></block> <block type="pink"></block> <block type="grey"></block> <block type="orange"></block> <block type="purple"></block>' +
                    '<block type="lime"></block> <block type="gold"></block>' ;
    toolbox1 += '</category> <category> </category>'; //close coloring
      
    toolbox1 += '</xml>';
      
    //------------------------------------------------------------------------------
    var toolbox2 = '<xml> <category></category> ';
    
   toolbox2 += '  <category name="+ Tops"> <block type="top1"></block> <block type="top3"></block> <block type="top4"></block> <block type="top5"></block> <block type="top6"></block> <block type="top7"></block> <block type="top2"></block> ';
	toolbox2 += '</category> <category> </category>'; //close tops
      
    toolbox2 += '<category name="+ Bottoms"> <block type="bottom1"></block> <block type="bottom5"></block>';
      
    toolbox2 += '</category> <category> </category>'; //close bottoms
    
    toolbox2 += '<category name="+ Hair"> <block type="hair1"></block> <block type="hair2"></block> <block type="hair3"></block> <block type="hair4"></block> <block type="hair5"></block> <block type="hair6"></block>';
    toolbox2 += '</category> <category> </category>'; //close hair
      
    toolbox2 += '<category name="+ Shoes"> <block type="shoes1"></block> <block type="shoes2"></block> <block type="shoes3"></block> <block type="shoes4"></block> <block type="shoes5"></block>';
    toolbox2 += '</category> <category> </category>'; //close shoes
    
    toolbox2 += '<category name="+ Coloring"> <block type="red"></block> <block type="blue"></block>' + 
                    '<block type="black"></block> <block type="pink"></block> <block type="grey"></block> <block type="orange"></block> <block type="purple"></block>' +
                    '<block type="lime"></block> <block type="gold"></block>' ;
    toolbox2 += '</category> <category> </category>'; //close coloring
      
    toolbox2 += '</xml>';
      
      //------------------------------------------------------------------------------
      var toolbox4 = '<xml> <category></category> ';
      
      toolbox4 += '<category name = "+ Controls">  <block type="control_if_weather"></block>';
      toolbox4 += '</category> <category> </category>'; //close controls
      
      toolbox4 += '  <category name="+ Tops"> <block type="top1"></block> <block type="top4"></block>';
      toolbox4 += '</category> <category> </category>'; //close tops
      
      toolbox4 += '<category name="+ Shoes"> <block type="shoes1"></block> <block type="shoes2"></block> <block type="shoes3"></block> <block type="shoes4"></block>';
      toolbox4 += '</category> <category> </category>'; //close shoes  
      
       toolbox4 += '<category name="+ Coloring"> <block type="red"></block> <block type="blue"></block>' + 
                    '<block type="black"></block> <block type="pink"></block> <block type="grey"></block> <block type="orange"></block> <block type="purple"></block>' +
                    '<block type="lime"></block> <block type="gold"></block>' ;
      toolbox4 += '</category> <category> </category>'; //close coloring
      
      toolbox4 += '</xml>';
      
      //------------------------------------------------------------------------------
      var toolbox5 = '<xml> <category></category> ';  
      toolbox5 += '</xml>';
      
      //------------------------------------------------------------------------------
      var toolbox6 = '<xml> <category></category> ';
      
      toolbox6 += '<category name = "+ Add a Definition" custom="PROCEDURE">';
      toolbox6 += '</category> <category> </category>'; //close definitions
      
      toolbox6 += '<category name = "+ Controls">  <block type="control_if_place"></block>';
      toolbox6 += '</category> <category> </category>'; //close controls
      
      toolbox6 += '<category name="+ Coloring"> <block type="red"></block> <block type="blue"></block>' + 
                    '<block type="black"></block> <block type="pink"></block> <block type="grey"></block> <block type="orange"></block> <block type="purple"></block>' +
                    '<block type="lime"></block> <block type="gold"></block>' ;
      toolbox6 += '</category> <category> </category>'; //close coloring
      
      toolbox6 += '  <category name="+ Tops"> <block type="top1"></block> <block type="top3"></block> <block type="top4"></block> <block type="top5"></block> <block type="top6"></block> <block type="top7"></block> <block type="top2"></block> ';
	  toolbox6 += '</category> <category> </category>'; //close tops
      
      toolbox6 += '<category name="+ Bottoms"> <block type="bottom1"></block> <block type="bottom2"></block> <block type="bottom3"></block> <block type="bottom4"></block> <block type="bottom5"></block> <block type="bottom6"></block>';
      toolbox6 += '</category> <category> </category>'; //close bottoms
      
      toolbox6 += '<category name="+ Hair"> <block type="hair1"></block> <block type="hair2"></block> <block type="hair3"></block> <block type="hair4"></block> <block type="hair5"></block>';
      toolbox6 += '</category> <category> </category>'; //close hair
      
      toolbox6 += '<category name="+ Shoes"> <block type="shoes1"></block> <block type="shoes2"></block> <block type="shoes3"></block> <block type="shoes4"></block> <block type="shoes5"></block>';
      toolbox6 += '</category> <category> </category>'; //close shoes
      
      toolbox6 += '</xml>';
      
      //------------------------------------------------------------------------------
      var toolbox3 = '<xml> <category></category> ';
      
      toolbox3 += '<category name = "+ Repeat"> <block type="control_repeat"></block>';
      toolbox3 += '</category> <category> </category>'; //close repeat
      
      
      toolbox3 += '<category name="+ Bottoms"> <block type="bottom1"></block> <block type="bottom5"></block>';
      
      toolbox3 += '</category> <category> </category>'; //close bottoms
      
      toolbox3 += '</xml>';
      
      //------------------------------------------------------------------------------
      var toolbox7 = '<xml> <category></category> ';
     
      toolbox7 += '<category name = "+ Add a Definition" custom="PROCEDURE">';
      toolbox7 += '</category> <category> </category>'; //close definitions
      
      toolbox7 += '<category name = "+ Controls"> <block type="control_if_weather"></block> <block type="control_if_place"></block>';
      toolbox7 += '</category> <category> </category>'; //close controls
      
      toolbox7 += '<category name = "+ Repeat"> <block type="control_repeat"></block>';
      toolbox7 += '</category> <category> </category>'; //close repeat
      
      toolbox7 += '  <category name="+ Tops"> <block type="top1"></block> <block type="top3"></block> <block type="top4"></block> <block type="top5"></block> <block type="top6"> </block> <block type="top7"> </block> <block type="top2"></block>';
      toolbox7 += '</category> <category> </category>'; //close tops
      
      toolbox7 += '<category name="+ Bottoms"> <block type="bottom1"></block> <block type="bottom2"></block> <block type="bottom3"></block> <block type="bottom4"></block> <block type="bottom5"></block> <block type="bottom6"></block>';
      
      toolbox7 += '</category> <category> </category>'; //close bottoms
      
      toolbox7 += '<category name="+ Hair"> <block type="hair1"></block> <block type="hair2"></block> <block type="hair3"></block> <block type="hair4"></block> <block type="hair5"></block> <block type="hair6"></block>';
      toolbox7 += '</category> <category> </category>'; //close hair
      
      toolbox7 += '<category name="+ Shoes"> <block type="shoes1"></block> <block type="shoes2"></block> <block type="shoes3"></block> <block type="shoes4"></block> <block type="shoes5"></block>';
      toolbox7 += '</category> <category> </category>'; //close shoes
      
      toolbox7 += '<category name="+ Coloring"> <block type="red"></block> <block type="blue"></block>' + 
                    '<block type="black"></block> <block type="pink"></block> <block type="grey"></block> <block type="orange"></block> <block type="purple"></block>' +
                    '<block type="lime"></block> <block type="gold"></block>' ;
      toolbox7 += '</category> <category> </category>'; //close coloring
      
      toolbox7 += '</xml>';
      
	toolbox[0] = toolbox1;
    toolbox[1] = toolbox2;
    toolbox[2] = toolbox3;
    toolbox[3] = toolbox4;
    toolbox[4] = toolbox5;
    toolbox[5] = toolbox6;
    toolbox[6] = toolbox7;
    
    return toolbox;
}

