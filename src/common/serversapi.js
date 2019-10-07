import {defaultDatabase} from './firebaseinit'

export const firebaseApi = {
    AddData: function (item) {
        defaultDatabase.ref('shopcart/'+item.id).set({
            classified: item.classified,
            features: item.features,
            id: item.id,
            img: item.img,
            name: item.name,
            price: item.price,
            stock: item.stock,
            type: item.type
        });
    },
    removeData: function (item) {
        defaultDatabase.ref('shopcart/' + item.id).set({
          classified: null,
          features: null,
          id: null,
          img: null,
          name: null,
          price: null,
          stock: null,
          type: null
        });
    }
}