// export class KeyController{
//     keys: any[];
//     constructor(){
//         this.keys=[];

//         window.addEventListener('keydown', e =>{
//             console.log(e.code + "누름")
//             this.keys[e.code] = true;
//         })

//         window.addEventListener('keyup', e =>{
//             console.log(e.code + "땜")
//             this.keys[e.code] = false;
//         })
//     }

//     }

export function Controller() {
  let keys: any

  window.addEventListener('keydown', e => {
    console.log(e.code + '누름')
    keys[e.code] = true
  })

  window.addEventListener('keyup', e => {
    console.log(e.code + '땜')
    keys[e.code] = false
  })

  return keys
}
