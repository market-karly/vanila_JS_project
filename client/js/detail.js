import {getNode, getPriceUpdate, renderDetail} from './../lib/index.js';

const detailContainer = getNode('.detail');

const resultData = getPriceUpdate();

const urlParams = new URL(location.href).searchParams;
const urlId = urlParams.get('id');

resultData.forEach((data) => {
  if(data.id === urlId){
    renderDetail(detailContainer,data);
  }
});

