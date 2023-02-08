
import { isString } from './typeOf.js';


const {
  localStorage:storage,
  JSON:{stringify:serialize, parse: deserialize}
} = globalThis;



export function saveStorage(key,value){
   return new Promise((resolve, reject) => {
       if(isString(key)){
        storage.setItem(key,serialize(value));
        resolve();
       }else{
        reject({message:'key는 문자 타입 이어야 합니다.'});
       }
   });
}

export function loadStorage(key){
  return new Promise((resolve, reject) => {
    if(isString(key)){
      resolve(deserialize(storage.getItem(key)));
    }else{
      reject({message:'key는 문자 타입 이어야 합니다.'});
    }
  });
}

export function deleteStorage(key){
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line no-unused-expressions
    !key ? storage.clear() : storage.removeItem(key);
    resolve();
  });
}










