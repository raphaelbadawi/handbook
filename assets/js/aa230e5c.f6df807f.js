"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4367],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,g=c["".concat(l,".").concat(m)]||c[m]||u[m]||r;return n?i.createElement(g,o(o({ref:t},s),{},{components:n})):i.createElement(g,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=c;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:a,o[1]=d;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},417:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>d,metadata:()=>p,toc:()=>u});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),o=["components"],d={id:"dev-guide-mobile-jitsi-meet",title:"Developer Guide for Jitsi Meet",sidebar_label:"Jitsi Meet development"},l=void 0,p={unversionedId:"dev-guide/dev-guide-mobile-jitsi-meet",id:"dev-guide/dev-guide-mobile-jitsi-meet",title:"Developer Guide for Jitsi Meet",description:"This guide will help you setup a development environment to start working on the Jitsi Meet applications.",source:"@site/docs/dev-guide/mobile-jitsi-meet.md",sourceDirName:"dev-guide",slug:"/dev-guide/dev-guide-mobile-jitsi-meet",permalink:"/handbook/docs/dev-guide/dev-guide-mobile-jitsi-meet",draft:!1,editUrl:"https://github.com/jitsi/handbook/edit/master/docs/dev-guide/mobile-jitsi-meet.md",tags:[],version:"current",lastUpdatedAt:1659333705,formattedLastUpdatedAt:"Aug 1, 2022",frontMatter:{id:"dev-guide-mobile-jitsi-meet",title:"Developer Guide for Jitsi Meet",sidebar_label:"Jitsi Meet development"},sidebar:"docs",previous:{title:"Start",permalink:"/handbook/docs/dev-guide/dev-guide-mobile"},next:{title:"Feature flags",permalink:"/handbook/docs/dev-guide/mobile-feature-flags"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"iOS",id:"ios",level:2},{value:"Android",id:"android",level:2},{value:"Adding extra dependencies",id:"adding-extra-dependencies",level:3},{value:"Debugging",id:"debugging",level:2},{value:"Enabling extra features",id:"enabling-extra-features",level:2}],c={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide will help you setup a development environment to start working on the Jitsi Meet applications."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Building the apps / SDKs is not supported on Windows.")),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This guide is about building the Jitsi Meet apps themselves. If you want to integrate the Jitsi Meet SDK into your own application check the dedicated page on the sidebar.")),(0,r.kt)("p",null,"Jitsi Meet can be built as a standalone app for Android or iOS. It uses the\n",(0,r.kt)("a",{parentName:"p",href:"https://facebook.github.io/react-native/"},"React Native")," framework."),(0,r.kt)("p",null,"First make sure the ",(0,r.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/environment-setup"},"React Native dependencies")," (React Native CLI Quickstart) are installed."),(0,r.kt)("admonition",{title:"Node version",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Node 16.x and npm 8.x are required. Any other version may result in runtime errors.")),(0,r.kt)("admonition",{title:"Xcode",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Xcode 12 or higher is required.")),(0,r.kt)("h2",{id:"ios"},"iOS"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install dependencies")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install main dependencies:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install the required pods (CocoaPods must be installed first, it can\nbe done with Homebrew: ",(0,r.kt)("inlineCode",{parentName:"p"},"brew install cocoapods"),")"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd ios\npod install\ncd ..\n")))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Build the app using Xcode"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Open ",(0,r.kt)("inlineCode",{parentName:"p"},"ios/jitsi-meet.xcworkspace")," in Xcode. Make sure it's the workspace\nfile!")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Select your device from the top bar and hit the ",(0,r.kt)("strong",{parentName:"p"},"Play \u25b6\ufe0f")," button."))),(0,r.kt)("p",{parentName:"li"},"When the app is launched from Xcode, the Debug Console will show the application output\nlogs.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Other remarks"),(0,r.kt)("p",{parentName:"li"},"It's likely you'll need to change the bundle ID for deploying to a device.\nThis can be changed in the ",(0,r.kt)("strong",{parentName:"p"},"General")," tab. Under ",(0,r.kt)("strong",{parentName:"p"},"Identity")," set\n",(0,r.kt)("strong",{parentName:"p"},"Bundle Identifier")," to a different value, and adjust the ",(0,r.kt)("strong",{parentName:"p"},"Team")," in the\n",(0,r.kt)("strong",{parentName:"p"},"Signing")," section to match your own."))),(0,r.kt)("h2",{id:"android"},"Android"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/environment-setup"},"React Native dependencies")," page has very detailed information on how to\nsetup ",(0,r.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/index.html"},"Android Studio")," and the required components for getting the necessary\nbuild environment. Make sure you follow it closely."),(0,r.kt)("p",null,"Set the JDK in Android Studio to at least Java 11: ",(0,r.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/intro/studio-config#jdk"},"https://developer.android.com/studio/intro/studio-config#jdk")),(0,r.kt)("p",null,"The recommended way for building Jitsi Meet is building the app with Android Studio."),(0,r.kt)("h3",{id:"adding-extra-dependencies"},"Adding extra dependencies"),(0,r.kt)("p",null,"Due to how our project is structured, React Native's automatic linking won't work so Android dependencies need to be manually linked."),(0,r.kt)("p",null,"First, add your project to ",(0,r.kt)("inlineCode",{parentName:"p"},"android/settings.gradle")," like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gradle",metastring:'title="android/settings.gradle"',title:'"android/settings.gradle"'},"include ':react-native-mydependency'\nproject(':react-native-mydependency').projectDir = new File(rootProject.projectDir, '../node_modules/@somenamespace/react-native-mydependency/android')\n")),(0,r.kt)("p",null,"Then add a dependency on ",(0,r.kt)("inlineCode",{parentName:"p"},"android/sdk/build.gradle")," like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gradle",metastring:'title="android/sdk/build.gradle"',title:'"android/sdk/build.gradle"'},"implementation project(':react-native-mydependency')\n")),(0,r.kt)("p",null,"Last, link it in the ",(0,r.kt)("inlineCode",{parentName:"p"},"getReactNativePackages")," method in ",(0,r.kt)("inlineCode",{parentName:"p"},"android/sdk/src/main/java/org/jitsi/meet/sdk/ReactInstanceManagerHolder.java")," like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="android/sdk/src/main/java/org/jitsi/meet/sdk/ReactInstanceManagerHolder.java"',title:'"android/sdk/src/main/java/org/jitsi/meet/sdk/ReactInstanceManagerHolder.java"'},"new com.companyname.library.AwesomeLibraryPackage(),\n")),(0,r.kt)("p",null,"Make sure you adjust the fully qualified package name."),(0,r.kt)("h2",{id:"debugging"},"Debugging"),(0,r.kt)("p",null,"The official documentation on ",(0,r.kt)("a",{parentName:"p",href:"https://facebook.github.io/react-native/docs/debugging/"},"debugging")," is quite extensive and specifies the\npreferred method for debugging."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"When using Chrome Developer Tools for debugging the JavaScript source\ncode is being interpreted by Chrome's V8 engine, instead of JSCore which React\nNative uses. It's important to keep this in mind due to potential differences in\nsupported JavaScript features.")),(0,r.kt)("h2",{id:"enabling-extra-features"},"Enabling extra features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/handbook/docs/dev-guide/mobile-dropbox"},"Dropbox Integration")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/handbook/docs/dev-guide/mobile-google-auth"},"Google Sign-In Integration (For YouTube Live Streaming)"))))}m.isMDXComponent=!0}}]);