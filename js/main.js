/*JQuery*/
$(document).ready(function(){
    $('#scroll-button').click(function(){
        window.scroll({top: 1000, duration: 4000, behavior: 'smooth'});
    });
});
/*Main Page*/
ScrollReveal().reveal('#scroll-button', { duration: 3000, distance: '40px', origin: 'top', });
ScrollReveal().reveal('.gallery-grid', { duration: 2000, distance: '200px', origin: 'left'});
ScrollReveal().reveal('.about-grid', { duration: 2000, delay:500,distance: '200px', origin: 'right'});

/*About*/
ScrollReveal().reveal('#slide-in', {duration: 2000, distance:'90px', origin:'right'})
ScrollReveal().reveal('#slide-in2', {duration: 2000, delay:500, distance:'90px', origin:'right'});

/*Contact*/
ScrollReveal().reveal('.left-contact', {duration: 2000,distance:'500px', origin:'left'})
ScrollReveal().reveal('.right-contact', {duration: 2000,distance:'500px', origin:'right'})

/*123 Page*/
ScrollReveal().reveal('#what-if-fade', {duration: 4000})
ScrollReveal().reveal('#table-one', {duration: 2000, distance:'500px', origin:'right'})
ScrollReveal().reveal('#table-two', {duration: 2000, delay:500,distance:'500px', origin:'right'})
ScrollReveal().reveal('#table-three', {duration: 2000, delay:1000,distance:'500px', origin:'right'})

$(document).ready(function(){
    $('#table-sketch').mouseenter(function(){
        $('#table-sketch').attr("src", "https://ch3301files.storage.live.com/y4mjj-33x6al3pY2Z2yu5V4hVHX7b5gE_RagvyXJDdbIRKFphNddoOkqAVIUpzGtb9Y_qxIo2ZrKliZ0wlPq6TlTxqquK5pmnwB7X1cdGxJpAu5kMskwt3x2Nsl_UrgiOXuEth-vTFTi3-zHIsDWZWYc9oHNsZ2Bk6rojb7wrw1mr4m3YqBLrT6eLYC6ygPtWFE?width=6824&height=3821&cropmode=none")
    });
    $('#table-sketch').mouseleave(function(){
        $('#table-sketch').attr("src", "https://ch3301files.storage.live.com/y4mzaU-gG3xQai8MdwbWjDP5UpI9YkTt-mJACiUr6bMU_5zHPjU0Zptx2FuqWKIwjhjogIVwUrP4IivVT56k9fXktWkQ9qNP8aciBGjiAsAtE-KD_GZJcGkmM3fYhqd5ZlGWSR3PNAWsVnTpcuy8_y0cZ4xFpDVij3KZDmz_svYSKlxxJq_Q-Vp-rSO7O6nyiP2?width=6821&height=3820&cropmode=none")
    });

    $('#table-sketch2').mouseenter(function(){
        $('#table-sketch2').attr("src", "https://ch3301files.storage.live.com/y4mg1rPTukxhx8coNh9s8iV7LGl1l8AdIIgEbgnNBdT7wDFow1Atlhn7CwsGuMI6DVwaXV7vTZi1rhTUGgZCS0n-O7dYwG4iyGuaA56Ncz_6Ita9ZCvtQNNCKI4t2Efdz49aGy-YRUiOV-X-WQ1wp7N0IIVzqpUmPva57YYDvpjAKc4l29XQYi37ymF98LM9AvO?width=1923&height=1081&cropmode=none")
    });
    $('#table-sketch2').mouseleave(function(){
        $('#table-sketch2').attr("src", "https://ch3301files.storage.live.com/y4meyjgH1r_2IVnFzdgNL3uvA_MRn_fwbGDlr0sTFOE38r_6S-fLhkvfvgFVUqmu34jiT4c_onATxBn3W_7SC3sRTHcbnQMJf-D__A13MXQSq853pcLnghMqxyhJ0_5R3NxO-4UqHVDfJh8yXhsblQUYZiBL-T6csp2zbr2ND9QLTquLglt4SjvZyS3g_QunYQs?width=1920&height=1080&cropmode=none")
    });
});