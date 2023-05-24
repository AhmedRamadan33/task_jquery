
// let imgs = Array.from($(".img-fluid"))


// for(let i=0; i<imgs.length; i++){

    $(".img-fluid").click(function openlightbox(eventInfo){
        let imgSrc = eventInfo.target.src
        $("#lightboxItem").css("backgroundImage" , `url(${imgSrc})`) 
    })
//  }


