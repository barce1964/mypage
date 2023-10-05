(function() {
    var _id="08f696f375a5a2699f4725289f573eea";
    
    while(document.getElementById("timer"+_id))_id=_id+"0";
    document.write("<div id='timer"+_id+"' style='min-width:976px;height:214px;'></div>");
    
    var _t=document.createElement("script");
    _t.src="//megatimer.ru/timer/timer.min.js?v=1";
    
    var _f=function(_k) {
        var l=new MegaTimer(_id, {
            "view":[1,1,1,1],
            "type":{
                "currentType":"1",
                "params":{
                    "usertime":true,
                    "tz":"3",
                    "utc":1698796800000
                }
            },
            "design":{
                "type":"circle",
                "params":{
                    "width":"36",
                    "radius":"70",
                    "line":"gradient",
                    "line-color":[
                        "#FF0000",
                        "#00FFFF"
                    ],
                    "background":"gradient",
                    "background-color":[
                        "#000000",
                        "#ffffff"
                    ],
                    "direction":"direct",
                    "number-font-family":{
                        "family":"Comfortaa",
                        "link":"<link href='//fonts.googleapis.com/css?family=Comfortaa&subset=latin, cyrillic' rel='stylesheet' type='text/css'>"
                    },
                    "number-font-size":"60",
                    "number-font-color":"black",
                    "separator-margin":"20",
                    "separator-on":false,
                    "separator-text":":",
                    "text-on":false,
                    "text-font-family":{
                        "family":"Arial"
                    },
                    "text-font-size":"12",
                    "text-font-color":"red"
                }
            },
            "designId":6,
            "theme":"white",
            "width":976,
            "height":214
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