//The formula is from : http://www.w3.org/TR/AERT#color-contrast.
//Deciding what values are contrasty enough is subjective, the W3 article suggests [125,500] as minimums

function contrast(F, B){
    F= String(F).match(/\d+/g), 
    B= String(B).match(/\d+/g);
    var abs= Math.abs, 
    BG= (B[0]*299 + B[1]*587 + B[2]*114)/1000, 
    FG= (F[0]*299 + F[1]*587 + F[2]*114)/1000, 
    bright= Math.round(Math.abs(BG - FG)), 
    diff= abs(B[0]-F[0])+abs(B[1]-F[1])+abs(B[2]-F[2]);
    return [bright, diff];
}
var f= 'rgb(255,255,255)', b= 'rgb(255,0,0)';
contrast(f,b);   //returned value: (Array)[179,510]
