let n_lhamas = 1200;
let meta_lhamas = 2000;
let anos = 0;
let i = 0;
while(i<meta_lhamas){
    i++;
    n_lhamas += n_lhamas/3;
    n_lhamas -= n_lhamas/4
    anos+=1;
    if(n_lhamas>meta_lhamas){
        break;
    }
    if(n_lhamas==meta_lhamas){
        console.log("Parabéns vc bateu a meta em"+anos+"Anos")
    }
    console.log(n_lhamas)
}