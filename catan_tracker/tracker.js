$(document).ready(function(){
    $('.sidenav').sidenav();   

    let players = [ new Player('left'), new Player('across'), new Player('right') ];
    let resources = [ 'log', 'brick', 'sheep', 'wheat', 'stone'];
    for (p in players) {
        for (r in resources) {
            connect_resource_buttons(players[p], resources[r]);
        }
    }
  });


  function connect_resource_buttons(player, resource){
    let add_element = $(".add-" + resource + "-" + player.position);
    let remove_element = $(".remove-" + resource + "-" + player.position);    
    let count_element = $("#" + resource + "-" + player.position);

    add_element.click(function(){
        count_element.html(player.hand[resource] + 1);
        player.hand[resource] += 1;
    });

    remove_element.click(function(){
        count_element.html(player.hand[resource] - 1);
        player.hand[resource] -= 1;
    });
  }

  class Player {
    constructor(position){
        this.position = position;
        this.hand = {
            'log': 0, 
            'brick': 0, 
            'sheep': 0, 
            'wheat': 0, 
            'stone': 0  
        };
    }

}