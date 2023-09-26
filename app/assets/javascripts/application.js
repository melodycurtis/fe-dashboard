/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()


  $("#choice-button").bind("click", function() {
    if ($('#radio-1').is(':checked')) {
                    window.location.replace("add");
                }
                else if ($('#radio-2').is(':checked')) {
                    window.location.replace("template");
                }
                else if ($('#radio-3').is(':checked')) {
                    window.location.replace("upload");
                }
                
  });

  $("#choice-button").bind("click", function() {
    if ($('#radio-teach1').is(':checked')) {
                    window.location.replace("academic");
                }
                else if ($('#radio-teach2').is(':checked')) {
                    window.location.replace("vocational");
                }
                else if ($('#radio-teach3').is(':checked')) {
                    window.location.replace("other");
                }
                
  });

  $("#choice-button").bind("click", function() {
    if ($('#radio-leader1').is(':checked')) {
                    window.location.replace("does-teach");
                }
                else if ($('#radio-leader2').is(':checked')) {
                    window.location.replace("does-teach");
                }
                
                
  });

  $("#choice-button").bind("click", function() {
    if ($('#radio-lead1').is(':checked')) {
                    window.location.replace("leader");
                }
                else if ($('#radio-lead2').is(':checked')) {
                    window.location.replace("does-teach");
                }
                else if ($('#radio-lead3').is(':checked')) {
                    window.location.replace("qualification-type");
                }
                else if ($('#radio-lead4').is(':checked')) {
                  window.location.replace("does-teach");
              }
              else if ($('#radio-lead5').is(':checked')) {
                window.location.replace("does-teach");
            }
                
  });

  $("#choice-button").bind("click", function() {
    if ($('#radio-include1').is(':checked')) {
                    window.location.replace("qualification-type");
                }
                else if ($('#radio-include2').is(':checked')) {
                    window.location.replace("complete-john-four");
                }
                
                
  });
// https://highlightjs.org/usage/

 

hljs.highlightAll();

 

var snippets = document.getElementsByClassName('app-example__code');

var numberOfSnippets = snippets.length;

 

for (var i = 0; i < numberOfSnippets; i++) {

    let code = snippets[i]

        .getElementsByTagName('pre')[0]

        .getElementsByTagName('code')[0]

        .innerText;

 

    let copyCodeButton = snippets[i].getElementsByClassName('app-copy-button')[0];

 

    copyCodeButton.addEventListener("click", function () {

        navigator.clipboard.writeText(code);

        this.innerText = 'Code copied';

        button = this;

        setTimeout(function () {

            button.innerText = 'Copy code';

        }, 3500)

    });

}
  

})
