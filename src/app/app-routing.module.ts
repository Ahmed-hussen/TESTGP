import { HomePageComponent } from './home-page/home-page.component';
import { RegisterComponent } from './Authentication/register/register.component';
import { LoginComponent } from './Authentication/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckOutComponent } from './CartManagement/check-out/check-out.component';
import { OptionCartListresolver } from '_resolvers/OptionCartList.resolver';
import { ShippingListResolver } from '_resolvers/ShippingList.resolver';
import { OrderDetailsComponent } from './CartManagement/order-details/order-details.component';
import { OrderListResolver } from '_resolvers/OrderList.resolver';
import { OrderDetailsResolver } from '_resolvers/OrderDetails.resolver';
import { OrderListComponent } from './CartManagement/order-list/order-list.component';
import { SupplierOrdersComponent } from './supplier-orders/supplier-orders.component';
import { ManageAccountComponent } from './Marketing/manage-account/manage-account.component';
import { ProductComponent } from './product-explore/product/product.component';
import {ProductListComponent} from './product-explore/product-list/product-list.component';
import { FollowOrdersComponent } from './Marketing/follow-orders/follow-orders.component';
const routes: Routes = [
  {path:'',component:HomePageComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  {path: 'myorders', component: SupplierOrdersComponent},
  {path: 'manageaccount', component: ManageAccountComponent},
  {path: 'followorders', component: FollowOrdersComponent},
  {path: 'products', component: ProductListComponent},
  { path: 'Checkout', component: CheckOutComponent,resolve:{checkout:OptionCartListresolver,shipping:ShippingListResolver}},//b7ml el data 3la el route
  { path: 'OrderList', component: OrderListComponent,resolve:{order:OrderListResolver}},
  { path: 'OrderDetails/:id', component: OrderDetailsComponent,resolve:{OrderDetails:OrderDetailsResolver}},
  { path: '**', redirectTo :'',pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
