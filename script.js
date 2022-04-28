$("button").click(function() {
     

 let name= $(".name-input").val();
    let transport= $(".transport-input").val();
    let adjective= $(".number-input").val();
    let time=$("submit").val();
  

    $(".story").append ("One day my friend "+ name + " and I decided to take a trip to the beach, so we packd our bags and took the " +  transport + " over. It was a " + adjective + " day at the beach! We ended up staying for "+ time + " hours!");
  });

