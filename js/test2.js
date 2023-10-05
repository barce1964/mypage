(function() {
    var _id="08f696f375a5a2699f4725289f573eea";
    
    while(document.getElementById("timer"+_id))_id=_id+"0";
    document.write("<div id='timer"+_id+"' style='min-width:614px;height:128px;'></div>");
    
    var _t=document.createElement("script");
    _t.src="//megatimer.ru/timer/timer.min.js?v=1";
    
    var _f=function(_k) {
        var l=new MegaTimer(_id, {
            "view":[1,1,1,1],"type":{
                "currentType":"1","params":{
                    "usertime":true,"tz":"3","utc":1698796800000
                }
            },
            "design":{
                "type":"circle",
                "params":{
                    "width":"15",
                    "radius":"48",
                    "line":"gradient",
                    "line-color":[
                        "#fb1a1b",
                        "#df238c"
                    ],
                    "background":"solid",
                    "background-color":"rgba(251,26,27,0.24)",
                    "direction":"direct",
                    "number-font-family":{
                        "family":"Roboto",
                        "link":"<link href='//fonts.googleapis.com/css?family=Roboto&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
                    },
                    "number-font-size":"39",
                    "number-font-color":"#ffffff",
                    "separator-margin":"17",
                    "separator-on":false,
                    "separator-text":":",
                    "text-on":true,
                    "text-font-family":{
                        "family":"Roboto",
                        "link":"<link href='//fonts.googleapis.com/css?family=Roboto&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
                    },
                    "text-font-size":"15",
                    "text-font-color":"#ffffff"
                }
            },
            "designId":9,
            "theme":"black",
            "width":614,
            "height":128
        });
        
        if(_k!=null)l.run();
    };
    
    _t.onload=_f;
    
    _t.onreadystatechange=function() {
        if(_t.readyState=="loaded")_f(1);
    };
    
    var _h=document.head||document.getElementsByTagName("head")[0];
    _h.appendChild(_t);
}).call(this);
