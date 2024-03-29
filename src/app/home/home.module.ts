/**se encarga unicamente de la pagina de home */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BannerComponent } from "./components/banner/banner.component";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./components/home/home.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        BannerComponent, 
        HomeComponent
    ],
    imports:[
        CommonModule,
        HomeRoutingModule,
        SharedModule
    ]
})

export class HomeModule{

}