function isEmail(a){var l=/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;return l.test(a)}function addCookie(a){var l=new Date;l.setTime(l.getTime()+31536e6),document.cookie="userdata="+btoa(a)+"; expires="+l.toUTCString()+"; path=/"}function getCookie(a){var l="; "+document.cookie,i=l.split("; "+a+"="),e="";return 2==i.length&&(e=i.pop().split(";").shift()),e}$(document).ready(function(){var a='<div class="container"> <nav class="navbar navbar-default"> <div class="container-fluid"> <div class="navbar-header"> <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <a class="navbar-brand" href="http://ballerinalang.org/" id="Menu-Logo"><img src="//wso2.cachefly.net/wso2/sites/all/ballerina/img2/ballerina-logo.svg"/></a> </div> <div id="navbar" class="navbar-collapse collapse" aria-expanded="false" style="height: 1px;"> <ul class="nav navbar-nav"> <li><a id="Menu-docs" href="http://ballerinalang.org/docs">Documentation</a></li><li><a id="Menu-Get-involved" href="http://ballerinalang.org/downloads">Download</a></li> <li><a id="Resources" href="http://ballerinalang.org/connectors">Connectors</a></li> <li><a id="Resources" href="http://ballerinalang.org/resources">Resources</a></li> <li><a id="Menu-blog" href="https://medium.com/ballerinalang" target=_blank>Blog</a></li> </ul> </div> </div> </nav> </div>',l='<div class="container"> <ul> <li>&#9400; 2018 WSO2</li> <li><a id="footer-TOU" href="http://ballerinalang.org/terms-of-use">Terms of Use</a></li> <li><a id="footer-Privacy" href="http://ballerinalang.org/privacy-policy">Privacy Policy</a></li> </ul> <ul class="cPowerdby"><li>Powered by<a id="footer-wso2" href="http://wso2.com/"><img src="//wso2.cachefly.net/wso2/sites/all/ballerina/img/wso2logo_white_v2.jpg"/></a></li></ul></div>';$("#iBallerinaNavigation").append(a),$("#iBallerinaFooter").append(l),$("body").ready(function(){$("a").has("img").addClass("imagelink")})}),$("document").ready(function(a){var l=a("body").offset().top;l-=200,a(window).scroll(function(){a(this).scrollTop()>l&&a(".cFloatingButton").addClass("cShowFloatingButton")})});





  $(window).scroll(function() {
                  if ($(this).scrollTop() > 60) {
                      $('.cBallerinaNav').addClass('cFixedTopMenu ');
                      $('body').addClass('cSrollMenu');
                       $('.navbar-brand').addClass('cBrandLogoVisible');
                      
                      

                  } else {
                      $('.cBallerinaNav').removeClass('cFixedTopMenu ');
                      $('body').removeClass('cSrollMenu');
                      $('.navbar-brand').removeClass('cBrandLogoVisible');

                  }
              });