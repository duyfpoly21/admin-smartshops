import InternalClient from "./InternalClient";
import qs from 'qs';
var baseEndPoint = '/api/master';
const MasterDataAPI={

    findByKey: (req) => {
        const url = baseEndPoint+'/get-by?key='+req;
      console.log(url)
        return InternalClient.get(url);
    },
  findById: (id) => {
    const url = baseEndPoint+'/find-by-id?id='+id;
    return InternalClient.get(url);
  },
    save(data,key){
      const url = baseEndPoint+"/save?key="+key;
      return InternalClient.post(url,data);
    }
}
export default MasterDataAPI;
