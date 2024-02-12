
import {
    GetListParams,
} from 'ra-core';
import postgrestRestProvider from "@promitheus/ra-data-postgrest";
import qs from 'qs';

const fieldConfig = {
    Users: [
  {
    "field": "username",
    "datatype": "String"
  },
  {
    "field": "email",
    "datatype": "String"
  },
  {
    "field": "password",
    "datatype": "String"
  },
  {
    "field": "role",
    "datatype": "String"
  },
  {
    "field": "id",
    "datatype": "Integer"
  }
],
Vendors: [
  {
    "field": "companyName",
    "datatype": "String"
  },
  {
    "field": "contactName",
    "datatype": "String"
  },
  {
    "field": "email",
    "datatype": "String"
  },
  {
    "field": "password",
    "datatype": "String"
  },
  {
    "field": "id",
    "datatype": "Integer"
  }
],
Customers: [
  {
    "field": "customerName",
    "datatype": "String"
  },
  {
    "field": "email",
    "datatype": "String"
  },
  {
    "field": "password",
    "datatype": "String"
  },
  {
    "field": "billingAddress",
    "datatype": "String"
  },
  {
    "field": "shippingAddress",
    "datatype": "String"
  },
  {
    "field": "country",
    "datatype": "String"
  },
  {
    "field": "phone",
    "datatype": "String"
  },
  {
    "field": "id",
    "datatype": "Integer"
  }
],
Inventory: [
  {
    "field": "product",
    "datatype": "Integer"
  },
  {
    "field": "quantity",
    "datatype": "Integer"
  },
  {
    "field": "lowStockThreshold",
    "datatype": "Integer"
  },
  {
    "field": "id",
    "datatype": "Integer"
  }
],
Products: [
  {
    "field": "productName",
    "datatype": "String"
  },
  {
    "field": "vendor",
    "datatype": "Integer"
  },
  {
    "field": "price",
    "datatype": "Real"
  },
  {
    "field": "weight",
    "datatype": "Real"
  },
  {
    "field": "description",
    "datatype": "String"
  },
  {
    "field": "thumbnail",
    "datatype": "String"
  },
  {
    "field": "image",
    "datatype": "String"
  },
  {
    "field": "category",
    "datatype": "Integer"
  },
  {
    "field": "creationDate",
    "datatype": "DateTime"
  },
  {
    "field": "stock",
    "datatype": "Integer"
  },
  {
    "field": "id",
    "datatype": "Integer"
  }
],
ProductCategories: [
  {
    "field": "category",
    "datatype": "String"
  },
  {
    "field": "id",
    "datatype": "Integer"
  }
],
Discounts: [
  {
    "field": "product",
    "datatype": "Integer"
  },
  {
    "field": "discountType",
    "datatype": "String"
  },
  {
    "field": "description",
    "datatype": "String"
  },
  {
    "field": "discountAmount",
    "datatype": "Real"
  },
  {
    "field": "discountPercent",
    "datatype": "Real"
  },
  {
    "field": "id",
    "datatype": "Integer"
  }
],
ShoppingCart: [
  {
    "field": "customer",
    "datatype": "Integer"
  },
  {
    "field": "product",
    "datatype": "Integer"
  },
  {
    "field": "priceAtPurchase",
    "datatype": "Real"
  },
  {
    "field": "quantity",
    "datatype": "Integer"
  },
  {
    "field": "id",
    "datatype": "Integer"
  }
],
Orders: [
  {
    "field": "orderNumber",
    "datatype": "String"
  },
  {
    "field": "customer",
    "datatype": "Integer"
  },
  {
    "field": "totalAmount",
    "datatype": "Real"
  },
  {
    "field": "vat",
    "datatype": "Real"
  },
  {
    "field": "totalAmountWithVat",
    "datatype": "Real"
  },
  {
    "field": "shippingCost",
    "datatype": "Real"
  },
  {
    "field": "shippingAddress",
    "datatype": "String"
  },
  {
    "field": "orderAddress",
    "datatype": "String"
  },
  {
    "field": "orderEmail",
    "datatype": "String"
  },
  {
    "field": "orderDate",
    "datatype": "DateTime"
  },
  {
    "field": "orderStatus",
    "datatype": "String"
  },
  {
    "field": "trackingNo",
    "datatype": "String"
  },
  {
    "field": "id",
    "datatype": "Integer"
  }
],
OrderDetails: [
  {
    "field": "orderNumber",
    "datatype": "Integer"
  },
  {
    "field": "line",
    "datatype": "Integer"
  },
  {
    "field": "product",
    "datatype": "Integer"
  },
  {
    "field": "price",
    "datatype": "Real"
  },
  {
    "field": "quantity",
    "datatype": "Integer"
  },
  {
    "field": "id",
    "datatype": "Integer"
  }
],
Payments: [
  {
    "field": "orderNumber",
    "datatype": "Integer"
  },
  {
    "field": "amount",
    "datatype": "Real"
  },
  {
    "field": "paymentMethod",
    "datatype": "String"
  },
  {
    "field": "paymentDate",
    "datatype": "DateTime"
  },
  {
    "field": "paymentStatus",
    "datatype": "String"
  },
  {
    "field": "id",
    "datatype": "Integer"
  }
],
Reviews: [
  {
    "field": "product",
    "datatype": "Integer"
  },
  {
    "field": "customer",
    "datatype": "Integer"
  },
  {
    "field": "vendor",
    "datatype": "Integer"
  },
  {
    "field": "rating",
    "datatype": "Integer"
  },
  {
    "field": "reviewDetails",
    "datatype": "String"
  },
  {
    "field": "date",
    "datatype": "DateTime"
  },
  {
    "field": "id",
    "datatype": "Integer"
  }
],
SupportTickets: [
  {
    "field": "user",
    "datatype": "Integer"
  },
  {
    "field": "customer",
    "datatype": "Integer"
  },
  {
    "field": "description",
    "datatype": "String"
  },
  {
    "field": "status",
    "datatype": "String"
  },
  {
    "field": "creationDate",
    "datatype": "DateTime"
  },
  {
    "field": "resolutionDate",
    "datatype": "DateTime"
  },
  {
    "field": "id",
    "datatype": "Integer"
  }
]
};

export const customDataProvider = (apiUrl, options = {}) => {
    const baseDataProvider = postgrestRestProvider(apiUrl);
    return {
        ...baseDataProvider,
        getList: async (resource, params) => {
            if (params.filter && params.filter.q) {
                return await GetListQ(resource,params,apiUrl,baseDataProvider);
            }else{
                return baseDataProvider.getList(resource, params);
            }
        }
    };
};

async function GetListQ (resource, params: Partial<GetListParams> = {},apiUrl,baseDataProvider){
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort || {};
    const searchText = params.filter.q.toLowerCase();

    let filter={'or': '(id.eq.-1)'};  //return no data if resource has not been configured
    if(fieldConfig[resource]){
        let searchConditions=fieldConfig[resource].reduce(
            (conditions, {field,datatype}) => (
                conditions+
                (datatype=='String' ?
                field+'.ilike.%'+searchText+'%,'
                :
                //Todo: add support for searching other types
                ''
                )
            ),
            ''
        );
        filter = {'or': '('+searchConditions.slice(0,-1)+')'}
    }
    let query = {
        offset: String((page - 1) * perPage),
        limit: String(perPage),
        // append filters
        ...filter,
    };

    if (field && order) {
        query.order = field+'.'+order.toLowerCase();
    }

    // add header that Content-Range is in returned header
    const options = {
        headers: new Headers({
            Accept: 'application/json',
            Prefer: 'count=exact',
            ...(params.meta?.headers || {}),
            //...useCustomSchema(config.schema, metaSchema, 'GET'),
        }),
    };

    const url = apiUrl+'/'+resource+'?'+qs.stringify(query);
    const response = await fetch(url,options);
    if (!response.ok) {
      const message = 'An error has occured: '+response.status;
      throw new Error(message);
    }
    if (!response.headers.has('content-range')) {
        throw new Error(
            `The Content-Range header is missing in the HTTP Response. The postgREST data provider expects 
            responses for lists of resources to contain this header with the total number of results to build 
            the pagination. If you are using CORS, did you declare Content-Range in the Access-Control-Expose-Headers header?`
        );
    }
    const json = await response.json();
    return {
        data: json,
        total: parseInt(
            response.headers.get('content-range').split('/').pop(),
            10
        ),
    };
}
