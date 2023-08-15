
$('#slider-1.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    center:true,
    nav:false,
    dots:true, 
    smartSpeed: 1300,
    autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        },
        1100:{
            items:3
        },
        1200:{
            items:3
        }


    }
});

$('#slider-2.owl-carousel').owlCarousel({
    loop:true,
    margin:50,
    center:true,
    nav:false,
    dots:false, 
    smartSpeed: 1300,
    autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:3
        },
        1000:{
            items:7
        },
        1100:{
            items:7
        },
        1200:{
            items:7
        }


    }
});



jQuery(document).ready(function() {
    function count($this){
    var current = parseInt($this.html(), 10);
    current = current + 1; /* Where 1 is increment */
    $this.html(++current);
    if(current > $this.data('count')){
    $this.html($this.data('count'));
    } else {
    setTimeout(function(){count($this)}, 0.1);
    }
    }

    jQuery(".stat-count").each(function() {
    jQuery(this).data('count', parseInt(jQuery(this).html(), 10));
    jQuery(this).html('0');
    count(jQuery(this));
    });
    });