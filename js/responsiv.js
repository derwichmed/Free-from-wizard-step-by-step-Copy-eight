$(function (){
   $('.login').click(function (){
        $('.form_get_subscription').hide();
        $('.form_get_login').show();
   });
   
   $('.subscribe').click(function (){
        $('.form_get_login').hide();
        $('.form_get_subscription').show();
   });
   
   nbrStep = 0;
   prog_width = 25;
   $('.nxt_step').click(function (){
       nbrStep = nbrStep + 1;
       prog_width = prog_width + 25;
       $('.progress-bar').width(prog_width+'%');
       $('.form_item:visible').hide();
       $('.form_item').eq(nbrStep).show();
       $('.form_wizard > div:nth-child(2) > div:nth-child(2) .step')
               .eq(nbrStep-1).removeClass('step_encour');
       $('.form_wizard > div:nth-child(2) > div:nth-child(2) .step')
               .eq(nbrStep-1).addClass('step_activ');
        src_01 = $('.form_wizard > div:nth-child(2) > div:nth-child(2) .step')
               .eq(nbrStep-1).find('img').attr('active-step');
       $('.form_wizard > div:nth-child(2) > div:nth-child(2) .step')
               .eq(nbrStep-1).find('img').attr('src',src_01);
       
       
       $('.form_wizard > div:nth-child(2) > div:nth-child(2) .step')
               .eq(nbrStep).removeClass('step_desable');
       $('.form_wizard > div:nth-child(2) > div:nth-child(2) .step')
               .eq(nbrStep).addClass('step_encour');
       src_02 = $('.form_wizard > div:nth-child(2) > div:nth-child(2) .step')
               .eq(nbrStep).find('img').attr('encour-step');
       $('.form_wizard > div:nth-child(2) > div:nth-child(2) .step')
               .eq(nbrStep).find('img').attr('src',src_02);
   });
   
   $('.pre_step').click(function (){
      nbrStep = nbrStep - 1;
      prog_width = prog_width - 25;
       $('.progress-bar').width(prog_width+'%');
       
      $('.form_item:visible').hide();
      $('.form_item').eq(nbrStep).show();
      
       $('.form_item:visible').hide();
       $('.form_item').eq(nbrStep).show();
       $('.form_wizard > div:nth-child(2) > div:nth-child(2) .step')
               .eq(nbrStep + 1).removeClass('step_encour');
       $('.form_wizard > div:nth-child(2) > div:nth-child(2) .step')
               .eq(nbrStep + 1).addClass('step_desable');
       $('.form_wizard > div:nth-child(2) > div:nth-child(2) .step')
               .eq(nbrStep).removeClass('step_activ');
       $('.form_wizard > div:nth-child(2) > div:nth-child(2) .step')
               .eq(nbrStep).addClass('step_encour');
       src_02 = $('.form_wizard > div:nth-child(2) > div:nth-child(2) .step')
               .eq(nbrStep).find('img').attr('encour-step');
       $('.form_wizard > div:nth-child(2) > div:nth-child(2) .step')
               .eq(nbrStep).find('img').attr('src',src_02);
   });
});