"use strict";(self.webpackChunkiotsharp=self.webpackChunkiotsharp||[]).push([[4394],{2872:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tutorial-extras/https_acme","title":"\u4f7f\u7528HTTPS\u8bc1\u4e66\u5e76\u81ea\u52a8\u7eed\u671f","description":"\u73af\u5883\u53d8\u91cf\u4f7f\u7528 IOTSHARP_ACME \u65f6 \uff0c \u7a0b\u5e8f\u4f1a\u81ea\u52a8\u4f7f\u7528 LettuceEncrypt  \u5728 Let\'s Encrypt\u7533\u8bf7\u8bc1\u4e66\uff0c \u540c\u65f6\u53ef\u4ee5\u4f7f\u7528Dns01\u901a\u8fc7\u963f\u91cc\u4e91\u6765\u9a8c\u8bc1DNS.","source":"@site/docs/tutorial-extras/https_acme.md","sourceDirName":"tutorial-extras","slug":"/tutorial-extras/https_acme","permalink":"/docs/tutorial-extras/https_acme","draft":false,"unlisted":false,"editUrl":"https://github.com/IoTSharp/IoTSharp/edit/master/docs/docs/tutorial-extras/https_acme.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Http\u534f\u8bae","permalink":"/docs/tutorial-extras/http"},"next":{"title":"MQTT\u4f7f\u7528X509\u52a0\u5bc6\u901a\u8baf\u548c\u8bbe\u5907\u8ba4\u8bc1","permalink":"/docs/tutorial-extras/mqtt_tls"}}');var r=n(4848),o=n(8453);const i={sidebar_position:2},a="\u4f7f\u7528HTTPS\u8bc1\u4e66\u5e76\u81ea\u52a8\u7eed\u671f",c={},p=[];function d(t){const e={admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,o.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"\u4f7f\u7528https\u8bc1\u4e66\u5e76\u81ea\u52a8\u7eed\u671f",children:"\u4f7f\u7528HTTPS\u8bc1\u4e66\u5e76\u81ea\u52a8\u7eed\u671f"})}),"\n",(0,r.jsx)(e.p,{children:"\u73af\u5883\u53d8\u91cf\u4f7f\u7528 IOTSHARP_ACME \u65f6 \uff0c \u7a0b\u5e8f\u4f1a\u81ea\u52a8\u4f7f\u7528 LettuceEncrypt  \u5728 Let's Encrypt\u7533\u8bf7\u8bc1\u4e66\uff0c \u540c\u65f6\u53ef\u4ee5\u4f7f\u7528Dns01\u901a\u8fc7\u963f\u91cc\u4e91\u6765\u9a8c\u8bc1DNS."}),"\n",(0,r.jsx)(e.p,{children:"appsettings.Production.json\u4e2d\u7684\u793a\u4f8b\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'  "LettuceEncrypt": {\n   "AcceptTermsOfService": true,\n   "AllowedChallengeTypes": "Dns01",\n   "EmailAddress": "mysticboy@live.com",\n   "RenewDaysInAdvance": "3.00:00:00",\n   "DomainNames": [\n     "host.iotsharp.net"\n   ]\n },\n "AliDns": {\n   "AccessKeyId": "",\n   "AccessKeySecret": "",\n   "DomainName": "iotsharp.net"\n }\n\n\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u53e6\u5916\uff0c \u73af\u5883\u53d8\u91cf\u4e2d\u9700\u8981\u505a\u5982\u4e0b\u914d\u7f6e:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"      ASPNETCORE_HTTPS_PORTS: 8081 \n      ASPNETCORE_HTTP_PORTS: 8080\n      IOTSHARP_ACME: true\n\n"})}),"\n",(0,r.jsx)(e.admonition,{title:"\u6ce8\u610f",type:"danger",children:(0,r.jsx)(e.p,{children:"https\u8bc1\u4e66\u8ddf\u8fde\u63a5\u8bbe\u5907\u7684\u81ea\u7b7e\u540d\u8bc1\u4e66\u4e0d\u540c\uff0c \u6b64\u8bc1\u4e66\u7528\u4e8e\u6d4f\u89c8\u5668\u3001webapi \u5728\u516c\u7f51\u73af\u5883\u4e2d\u90e8\u7f72\u65f6\u542f\u7528https\uff0c\n\u8bbe\u5907\u7684\u81ea\u7b7e\u540dX509\u901a\u8baf\u662f\u7528\u4e8etcp \u52a0\u5bc6\u901a\u8baf\u3002"})})]})}function l(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(d,{...t})}):d(t)}},8453:(t,e,n)=>{n.d(e,{R:()=>i,x:()=>a});var s=n(6540);const r={},o=s.createContext(r);function i(t){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:i(t.components),s.createElement(o.Provider,{value:e},t.children)}}}]);