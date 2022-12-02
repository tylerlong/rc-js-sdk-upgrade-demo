# How to do OAuth with legacy and new SDK

- source code for OAuth with legacy SDK is located in `oauth/index1.ts`
- source code for OAuth with new SDK is located in `oauth/index2.ts`

## References:

- https://medium.com/ringcentral-developers/use-authorization-code-pkce-for-ringcentral-api-in-client-app-e9108f04b5f0
- https://medium.com/ringcentral-developers/a-minimal-project-to-implement-ringcentral-auth-code-flow-in-javascript-bf995d458424


## Run

```
yarn serve
```


## Test

- For legacy SDK, visit http://localhost:8080/index1.html
  - As I tested, the legacy SDK doesn't support PKCE. So it is OAuth without PKCE.
- For new SDK, visit http://localhost:8080/index2.html
  - OAuth + PKCE, so that you don't need to specify client secret.
