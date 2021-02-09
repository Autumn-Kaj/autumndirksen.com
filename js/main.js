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
ScrollReveal().reveal('#slide-in2', {duration: 2000, delay:500, distance:'90px', origin:'right'})  
ScrollReveal().reveal('.quickfactcontent', { duration: 2000,});

$(document).ready(function(){
    var lastScrollTop = 0;
    $(window).scroll(function(event){
        var st = $(this).scrollTop();
        if (st > lastScrollTop){
            $('#overlay').fadeIn("slow");
        }
        else {
            $('#overlay').fadeOut("slow");
        }
        lastScrollTop = st;
    });
});

/*Contact*/
$(document).ready(function(){
    $('#left-hover').mouseenter(function(){
        $('#left-hover').attr("src", "https://ch3301files.storage.live.com/y4m8uFzBP4oygfWkimD48i9P6TtWLNCU_T49s315SitjeiJB5CF6O02get0kKm4zEsdxHpBBU8ozGqYc0NLyDkOVVDf1kjd023Mr7v3HPiNIs0WkFcRQDB566K5FQ4gED24KsvvEoGiTLUUlTCe7CIVmvaOCQwYmLauYgn01p1cQCi2QIaEa-masZOD3QSYqFZb?width=3010&height=3545&cropmode=none")
    });
    $('#left-hover').mouseleave(function(){
        $('#left-hover').attr("src", "https://ch3301files.storage.live.com/y4mWj7v_fFJH6OYTUCtv-tsWvN_OJMp7zTtoeSO58a5TDdEl9nPNPGpK5UKCpiFxseOqvBVZ01jqKgybxFd3XOyBeopsEcEP-FKdCWW3FOm5fUVhV2an-oYOo7I4rycF78_wPmh9RODPbW-Uicytm_5wRENdpcdJSbgcJ5CKy2ZiMWonmr_LdhFsUkJ-kX-gf4V?width=3000&height=3599&cropmode=none")
    });
});
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

/*Slate*/
$(document).ready(function(){
    $('#square1').mouseenter(function(){
        $('#square1').attr("src", "https://ch3301files.storage.live.com/y4mOi5CJqlj-X6R3ICirM7aPkRizvEGchiiin6hZreaUTvNOkhwRVPCf-vu-_jusRxpuZVpAS6BBibDxovZBjzS-LdZaaTtAGhkJwdPn6GqeRSjd7PrYE8XFmeXW1qOyG4SwWBMjgx4ybMJtji18iVUpDNePMSaIPWDRqWpJIR3othK4TvOXtmPj3MgQwwsM37N?width=2162&height=2162&cropmode=none")
    });
    $('#square1').mouseleave(function(){
        $('#square1').attr("src", "https://ch3301files.storage.live.com/y4mRS-lUD5CeFj1mVVbSGQh4bkj-PPCgcmLIdIzYkjnNxPi66SIvvAJnKH9dGdNy7T6KSQ78SfghzWYtq6omIJbUq8TvS-QL9vK2-bi1aIvx0frC4DTH0qxEO-mBBp16rxK1N4ECeZzgA7gM4uwt11iTpJzj4lWJ9A8GChTAzCc16gSOSGFZ0NkXNsA-8jiPU9g?width=2159&height=2159&cropmode=none")
    });

    $('#square2').mouseenter(function(){
        $('#square2').attr("src", "https://ch3301files.storage.live.com/y4mrd_RzMfN70DSKVNVrSMPhiMLH28FxxBGkrFO2DCjh66V8UO4mz6NL-grdvAX5IrgVms0f3X7pbGyOj80ElXLDK8S79wgLoJUGFnFgSiQxdM7HI63O5BHiT5voS3-A4HmmtniEXicV5GXdwN5upK-3R5je0Yyr-GQaP-bd0tGyhK3q5I1UcpUTAaxntYlVBPJ?width=1637&height=1637&cropmode=none")
    });
    $('#square2').mouseleave(function(){
        $('#square2').attr("src", "https://ch3301files.storage.live.com/y4mR1W9So4aadE00d2i0D9YRizwwGdQ2rb5fyMhbzAr9WMHNBXlA_u-_s2UhEvhiWpJCiaF2cKGsiDtd59WDjuHxJ8G80Fg8ItFXW4TIpl1iQOGRnnjcaPrNyrsQvXAXxbvwWueQtjojh2XmURf2wWRGgXZzynrPMpT-7d05CsmyHkHdRT4tC9Dkw6s98hDAN5Z?width=1630&height=1630&cropmode=none")
    });

    $('#square3').mouseenter(function(){
        $('#square3').attr("src", "https://ch3301files.storage.live.com/y4msd0MOFg-f2X0iZ0z56Hmf4Zzb7Nag0pGL-YwksJmXLMuYhaVg-Qt6OkJUw0Jy95ygcUrMu-2sLrr2s_Su3taGLDi2S3HsbOvxz7fg1Pn7wiZqvKAS7X4SwG2h6T80ET3hfoTpA2IqprOJ5K3_oTEyWtB3eD8iRSDdCJEHV7BU-htfbXkU9dCrC_t8doGs8KF?width=893&height=890&cropmode=none")
    });
    $('#square3').mouseleave(function(){
        $('#square3').attr("src", "https://ch3301files.storage.live.com/y4mia9HV4Zq5NTU9eJ6SBiqLxUAvYxin_Uz8jnDjavkCDsVTkYKRbofKYac3cj8d4q5X0QopZ622dsa9HEC-mM4QrVKoO2GcZnGzMGpzTVSmnexFnupJVwvRA0EJnZSNUfQgjzmzppVY5FaOazoZyk-KDBG_7RXtxxtsA3ipoTVt-iZvwTKk4muO0vz76_dqW4q?width=890&height=889&cropmode=none")
    });
});