import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';

const oAuthConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  strictDiscoveryDocumentValidation: false, //check if all urls are starting with the issuer url
  redirectUri: window.location.origin,
  clientId:
    '498338959794-eas4cuob49ln6t29i03s0dqkcblo577n.apps.googleusercontent.com',
  scope: 'openid profile email',
};

@Injectable({
  providedIn: 'root',
})
export class SearchAuthService {
  constructor(private readonly oAuthService: OAuthService) {
    oAuthService.configure(oAuthConfig);
    oAuthService.loadDiscoveryDocument().then(() => {
      oAuthService.tryLoginImplicitFlow().then(() => {
        if (!oAuthService.hasValidAccessToken()) {
          oAuthService.initLoginFlow();
        } else {
          oAuthService.loadUserProfile().then((userProfile) => {
            console.log(JSON.stringify(userProfile));
          });
        }
      });
    });
    // oAuthService.initLoginFlow();
  }
}
