module.exports = function check(str, bracketsConfig) {
  let template = bracketsConfig.map(function(bracket){
      return bracket;
  });
  let brckt=[];
    for(let i = 0; i < str.length; i++){
        template.map(function (bracket) {
            if(str[i] === bracket[1]&&str[i] === bracket[0]&&brckt.length === 0){
                brckt.push(str[i]);
            }
            else if(str[i] === bracket[1]&&brckt.length === 0){
                brckt.push('i dont know how to stop it'); ;
            }
            else if(str[i] === bracket[1]&&str[i] === bracket[0]&&str[i] !== brckt[brckt.length-1]){
                brckt.push(str[i]);
            }
            else if(str[i] === bracket[1]&& bracket[0] === brckt[brckt.length-1]){
                brckt.pop();
            }
            else if(str[i] === bracket[0]){
                brckt.push(str[i]);
            }

        });
    }
    return brckt.length === 0;
    // your solution
}
