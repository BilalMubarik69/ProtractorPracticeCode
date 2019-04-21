
var HtmlReporter = require('protractor-beautiful-reporter');
exports.config={

    framework:'jasmine',
    suites: {
     //AlertsandDropdown: '../Specs/AlertsandDropdown.js',
     //FileUpload: '../Specs/FileUpload.js',
     //DragandDrop:'../Specs/DragandDrop.js',
     //MultiBrowserTab:'../Specs/MultiBrowserTabHandling.js',
    // Iframe:'D:/ProtractorCodePractice/Specs/IframeHandling.js'
   
    },
    
    
    seleniumAddress:'http://localhost:4444/wd/hub/',
    specs:['D:/ProtractorCodePractice/Specs/AlertsandDropdown.js'],

    Capabilities: [{
        'browserName': 'chrome',
        'chromeOptions': {
            args: ['--disable-browser-side-navigation'] 
          }  
        }],
     
        jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
      },
    
      //{
        //'browserName': 'firefox'
      //}],
    onPrepare: function() {
        // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
        jasmine.getEnv().addReporter(new HtmlReporter({
           baseDirectory: 'D:/ProtractorCodePractice/Reports/screenshots'
        }).getJasmine2Reporter());
      
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(5000);
     
      }
   
  }

