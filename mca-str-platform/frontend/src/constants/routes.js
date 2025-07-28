import Dashboard from "pages/Dashboard";

import STRPlanOrder from "pages/STRPlanOrder";
import STRProductOffer from "pages/STRProductOffer";
import ManageFileUpload from "pages/STRFileUpload";

import ProductAdoption from "pages/Dashboard/ProductAdoption";

export const DashboardRoute = {
  component: Dashboard,
  path: "/",
  restricted: true,
};

export const STRPlanOrderRoute = {
  component: STRPlanOrder,
  path: "/configure-plan-order",
  restricted: true,
};

export const STRProdcutOfferRoute = {
  component: STRProductOffer,
  path: "/create-product-offer",
  restricted: true,
};

export const STRUploadRoute = {
  component: ManageFileUpload,
  path: "/build-data-repository",
  restricted: true,
};
export const ProductAdoptionRoute = {
  component: ProductAdoption,
  path: "/productadoption",
  restricted: false,
};
const IRouteS = {
  UN_AUTH_ROUTES: [
    DashboardRoute,
    STRPlanOrderRoute,
    STRProdcutOfferRoute,
    STRUploadRoute,
    ProductAdoptionRoute,
  ],
};

export default IRouteS;
