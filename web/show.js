function inject () {

 	  var toolbox1 = '<xml>';
      toolbox1 += '  <category></category>';
      
      toolbox1 += '  <category name="+ Tops"> <block type="top1"></block> <block type="top2"></block>';
      toolbox1 += '</category> <category> </category>'; //close tops
      
      toolbox1 += '<category name="+ Bottoms"> <block type="bottom1"></block> <block type="bottom2"></block>';
      toolbox1 += '</category> <category> </category>'; //close bottoms
      
      toolbox1 += '<category name="+ Hair"> <block type="hair1"></block> <block type="hair2"></block>';
      toolbox1 += '</category> <category> </category>'; //close hair
      
      toolbox1 += '<category name="+ Shoes"> <block type="shoes1"></block> <block type="shoes2"></block>';
      toolbox1 += '</category> <category> </category>'; //close shoes
      
      toolbox1 += '</xml>';
      
      
      Blockly.inject(document.getElementById('show-code'), {path: 'blockly/', toolbox: toolbox1 } );
      
      

}