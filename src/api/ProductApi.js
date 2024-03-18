import InternalClient from "./InternalClient";
import qs from 'qs';
var baseEndPoint = '/api/product';
const ProductApi={

    findByKey: (req) => {
        const url = baseEndPoint+'/get-by?'+qs.stringify(req);
      console.log(url)
        return InternalClient.get(url);
    },
  findById: (id) => {
    const url = baseEndPoint+'/find-by-id?id='+id;
    return InternalClient.get(url);
  },
    save(data){
      const url = "/api/product/save";
      return InternalClient.post(url,data);
    }
}
export default ProductApi;
