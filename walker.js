var parametros = [];
var valores = [];


class Walker {
    

    constructor() {
        this.x =0 ;
        this.y =20;
        
    }

    display() {
       
       /*  point(this.x, this.y); */
        var data = [{
            x: parametros,
            y: valores,
            type: "linear"
          }];
          Plotly.newPlot("grafico",data);
    
    }

    walk() {
        var choice = 0 + Math.floor(Math.random()*1);
        if (choice === 0) {
            parametros.push(this.x++);
        } else if (choice === 1) {
            parametros.push(this.x--);
        } /* else if (choice === 2) {
            valores.push(this.y++);
        } else if (choice === 3) {
            valores.push(this.y--);
        } */
    }
}
var d = 5


function showGraph () {
    for (let i = 0; i < 5; i++) {
        var w = new Walker();

        var draw = function() {
            w.walk();
            w.display();
        };

        draw()
        
        
    }
        
        
    
    
}


/* var parametros = [];
var valores = [];
var random = 0;
var inicio = 20;
var y = 0;



function  enteroAleatorio () {
    random= 1 + Math.floor(Math.random()*4)
   console.log(random)
    return random ;
    
};
function addOrLess() {
    if(random === 1) {
        valores.push(inicio++)
    } else if (random === 2) {
        valores.push(inicio--)
    } else if (random === 3) {
        parametros.push(y--)
    } else if (random === 4) {
        parametros.push(y--)
    };
};


function showGraph () {
    var i = 0;
    while (inicio > -1 && inicio <31) {
        
        enteroAleatorio();
        addOrLess();
        parametros.push(i++); 
 
    }
    
  

    var data = [{
        x: parametros,
        y: valores,
        type: "linear"
      }];
      Plotly.newPlot("grafico",data);

} */








