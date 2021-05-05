import {environment} from '../../environments/environment';
const APIUrl:string = environment.api.url;
const parseURLImage = function(url:string | undefined):string{
    let result = '';
    if(url){
        result+=APIUrl+url;
    }
    return result;
}
export {parseURLImage};