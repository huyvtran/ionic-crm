import { Component, ViewChild } from '@angular/core';
import { Nav, NavController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { RouteInfo } from '../components/sidebar/sidebar-routes.interface';
import { ROUTES } from '../components/sidebar/sidebar-routes.config';
import { SchedulePage } from '../pages/schedule/schedule';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('content') nav: NavController;
  @ViewChild(Nav) navChild:Nav;
  menuItems: RouteInfo[];
  rootPage:any = SchedulePage;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.menuItems = ROUTES;
  }

  goToPage(page: any) {
    // this.navCtrl.push(AccountPage);
    this.nav.setRoot(page);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');

    // this.deeplinks.route({
    //   '/about-us': AccountPage,
    // }).subscribe((match) => {
    //   // match.$route - the route we matched, which is the matched entry from the arguments to route()
    //   // match.$args - the args passed in the link
    //   // match.$link - the full link data
    //   console.log('Successfully matched route', match);
    // }, (nomatch) => {
    //   // nomatch.$link - the full link data
    //   console.error('Got a deeplink that didn\'t match', nomatch);
    // });

    // this.deeplinks.routeWithNavController(this.nav, {
    //   '/account': AccountPage,
    // }).subscribe((match) => {
    //   // match.$route - the route we matched, which is the matched entry from the arguments to route()
    //   // match.$args - the args passed in the link
    //   // match.$link - the full link data
    //   console.log('Successfully matched route', match);
    // }, (nomatch) => {
    //   // nomatch.$link - the full link data
    //   console.error('Got a deeplink that didn\'t match', nomatch);
    // });
  }

}

