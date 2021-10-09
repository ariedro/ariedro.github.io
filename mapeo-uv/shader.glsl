    varying vec2 vUv;
    varying vec3 vPosModel;    
    varying vec3 vPosWorld; 

    
    uniform float t;        // tiempo en segundos
    uniform float frame;    // numero de frame (60 frames x segundo)
     

    void main() {

       vec4 aux = vec4(position,1.0);       
       vPosWorld = (modelMatrix * vec4(aux.xyz, 1.0 )).xyz;

       vec2 auxUv=uv;

       /*
            Objetivo
            --------
            Aplicar modificaciones a auxUV para que se reproduzcan los 16 cuadros de animacion 
            cubriendo cada cara completa del cubo;            

            Las variables t y frame son dependientes del tiempo.
            
            Suegerencias:
            1) Verificar que efecto tiene multiplicar auxUV por un factor de escala
            2) Verificar que efecto tiene sumar o restar un delta a auxUV.x o auxUV.y
            3) Pensar en que modificaciones deben hacerse para que mostrar un cuadro especifico en las caras del cubo.
            4) Incluir la variable tiempo

            tip: las funciones floor() y mod() pueden ser de utilizada

       */

       floor()

       vUv = auxUv;
       gl_Position = projectionMatrix * modelViewMatrix * aux;
       
    }
