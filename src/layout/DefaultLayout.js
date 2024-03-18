import React, {useEffect, useState} from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import {CSpinner} from "@coreui/react";
import ProductApi from "../api/ProductApi";

const DefaultLayout = () => {
  const [dataRes, setDataRes] = useState();
  const [otherParam, setOtherParam] = useState();
  const [dataReq, setDataReq] = useState();
  const [dataSearch, setDataSearch] = useState({
    "key":"",
    "source":"",
    "all":false}
  );
  const [dataPage, setDataPage] = useState({
    "page": 0,
    "size": 5
  });

  useEffect(() => {
    setSpinner(true)
    search().then(r => {
      setSpinner(false);
    });
  }, [dataPage,dataSearch,otherParam]);

  const [spinner, setSpinner] = useState(false);

  async function search(){
    let reqNew = {
      ...dataPage,
      "key": dataSearch.key
    }
    if (otherParam){
      reqNew = {
        ...reqNew,...otherParam
      }
    }
    let data;
    switch (window.location.pathname){
      case "/admin/product/list":
        data = await ProductApi.findByKey(reqNew);
        break;
    }
    if (data){
      data = {
        source : window.location.pathname,
        ...data
      };
      setDataRes(data);
    }
  }



  return (
    <div>
      <AppSidebar  />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader setDataSearch={setDataSearch} />
        <div className="body flex-grow-1">
          { spinner && ( <div className="loading"><CSpinner color="primary"/></div>)}
          <AppContent dataRes={dataRes} setDataPage={setDataPage}  />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
