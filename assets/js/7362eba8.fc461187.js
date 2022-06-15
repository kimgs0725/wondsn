"use strict";(self.webpackChunkwondsn=self.webpackChunkwondsn||[]).push([[3816],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=l(n),c=i,v=m["".concat(u,".").concat(c)]||m[c]||p[c]||s;return n?r.createElement(v,a(a({ref:t},d),{},{components:n})):r.createElement(v,a({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,a=new Array(s);a[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var l=2;l<s;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6892:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var r=n(7462),i=n(3366),s=(n(7294),n(3905)),a=["components"],o={sidebar_position:1,title:"\ub0c4\uc0c8 1. \uc774\ud574\ud558\uae30 \ud798\ub4e0 \uc774\ub984"},u=void 0,l={unversionedId:"development/refactoring/ch1",id:"development/refactoring/ch1",title:"\ub0c4\uc0c8 1. \uc774\ud574\ud558\uae30 \ud798\ub4e0 \uc774\ub984",description:"\uac1c\uc694",source:"@site/docs/development/refactoring/ch1.md",sourceDirName:"development/refactoring",slug:"/development/refactoring/ch1",permalink:"/til/docs/development/refactoring/ch1",editUrl:"https://github.com/wondsn/til/edit/main/docs/development/refactoring/ch1.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\ub0c4\uc0c8 1. \uc774\ud574\ud558\uae30 \ud798\ub4e0 \uc774\ub984"},sidebar:"tutorialSidebar",previous:{title:"\uc778\ud2b8\ub85c",permalink:"/til/docs/development/refactoring/ch0"},next:{title:"\ub0c4\uc0c8 3. \uae34 \ud568\uc218",permalink:"/til/docs/development/refactoring/ch3"}},d={},p=[{value:"\uac1c\uc694",id:"\uac1c\uc694",level:2},{value:"\ub9ac\ud329\ud1a0\ub9c1 1. \ud568\uc218 \uc120\uc5b8 \ubcc0\uacbd\ud558\uae30",id:"\ub9ac\ud329\ud1a0\ub9c1-1-\ud568\uc218-\uc120\uc5b8-\ubcc0\uacbd\ud558\uae30",level:2},{value:"before",id:"before",level:3},{value:"after",id:"after",level:3},{value:"\ub9ac\ud329\ud1a0\ub9c1 2. \ubcc0\uc218 \uc774\ub984 \ubc14\uafb8\uae30",id:"\ub9ac\ud329\ud1a0\ub9c1-2-\ubcc0\uc218-\uc774\ub984-\ubc14\uafb8\uae30",level:2},{value:"BEFORE",id:"before-1",level:3},{value:"AFTER",id:"after-1",level:3},{value:"\ub9ac\ud329\ud1a0\ub9c1 3. \ud544\ub4dc \uc774\ub984 \ubc14\uafb8\uae30",id:"\ub9ac\ud329\ud1a0\ub9c1-3-\ud544\ub4dc-\uc774\ub984-\ubc14\uafb8\uae30",level:2},{value:"BEFORE",id:"before-2",level:3},{value:"AFTER",id:"after-2",level:3}],m={toc:p};function c(e){var t=e.components,n=(0,i.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"\uac1c\uc694"},"\uac1c\uc694"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\uae54\ub054\ud55c \ucf54\ub4dc\uc5d0\uc11c \uac00\uc7a5 \uc911\uc694\ud55c \uac83 \uc911 \ud558\ub098\uac00 \ubc14\ub85c ",(0,s.kt)("strong",{parentName:"li"},"\uc88b\uc740 \uc774\ub984")),(0,s.kt)("li",{parentName:"ul"},"\ud568\uc218, \ubcc0\uc218, \ud074\ub798\uc2a4, \ubaa8\ub4c8\uc758 \uc774\ub984 \ub4f1 \ubaa8\ub450 \uc5b4\ub5a4 \uc5ed\ud560\uc744 \ud558\ub294\uc9c0 \uc5b4\ub5bb\uac8c \uc4f0\uc774\ub294\uc9c0 ",(0,s.kt)("strong",{parentName:"li"},"\uc9c1\uad00\uc801"),"\uc774\uc5b4\uc57c \ud568")),(0,s.kt)("h2",{id:"\ub9ac\ud329\ud1a0\ub9c1-1-\ud568\uc218-\uc120\uc5b8-\ubcc0\uacbd\ud558\uae30"},"\ub9ac\ud329\ud1a0\ub9c1 1. \ud568\uc218 \uc120\uc5b8 \ubcc0\uacbd\ud558\uae30"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\uc88b\uc740 \uc774\ub984\uc744 \uac00\uc9c4 \ud568\uc218\ub294 \ud568\uc218\uac00 \uc5b4\ub5bb\uac8c \uad6c\ud604\ub418\uc5c8\ub294\uc9c0 \ucf54\ub4dc\ub97c \ubcf4\uc9c0 \uc54a\uc544\ub3c4 \uc774\ub984\ub9cc \ubcf4\uace0\ub3c4 \uc774\ud574 \uac00\ub2a5"),(0,s.kt)("li",{parentName:"ul"},"\uc88b\uc740 \uc774\ub984\uc744 \ucc3e\uc544\ub0b4\ub294 \ubc29\ubc95?",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"\ud568\uc218\uc5d0 \uc8fc\uc11d\uc744 \uc791\uc131(\uc5b4\ub5a4 \uc5ed\ud560\uc744 \ud558\ub294\uc9c0 \uc124\uba85)"),(0,s.kt)("li",{parentName:"ul"},"\uc8fc\uc11d\uc744 \ud568\uc218 \uc774\ub984\uc73c\ub85c \ub9cc\ub4e4\uc5b4\ubd04"))),(0,s.kt)("li",{parentName:"ul"},"\ud568\uc218\uc758 \ub9e4\uac1c\ubcc0\uc218\ub294",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"\ud568\uc218 \ub0b4\ubd80 \ubb38\ub9e5\uc744 \uacb0\uc815"),(0,s.kt)("li",{parentName:"ul"},"\uc758\uc874\uc131\uc744 \uacb0\uc815")))),(0,s.kt)("h3",{id:"before"},"before"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'public class StudyDashboard {\n\n    private Set<String> usernames = new HashSet<>();\n\n    private Set<String> reviews = new HashSet<>();\n\n    /**\n     * studyReviews\uc740 study\ub97c \ub9ac\ubdf0\ud55c\ub2e4\ub294 \uac74\uc9c0, \ub9ac\ubdf0\ub97c \ub85c\ub4dc\ud574\uc624\ub294 \uac74\uc9c0 \uc54c\uae30 \ud798\ub4e6\n     */\n    private void studyReviews(GHIssue issue) throws IOException {\n        List<GHIssueComment> comments = issue.getComments();\n        for (GHIssueComment comment : comments) {\n            usernames.add(comment.getUserName());\n            reviews.add(comment.getBody());\n        }\n    }\n\n    public Set<String> getUsernames() {\n        return usernames;\n    }\n\n    public Set<String> getReviews() {\n        return reviews;\n    }\n\n    public static void main(String[] args) throws IOException {\n        GitHub gitHub = GitHub.connect();\n        GHRepository repository = gitHub.getRepository("whiteship/live-study");\n        GHIssue issue = repository.getIssue(30);\n\n        StudyDashboard studyDashboard = new StudyDashboard();\n        studyDashboard.studyReviews(issue);\n        studyDashboard.getUsernames().forEach(System.out::println);\n        studyDashboard.getReviews().forEach(System.out::println);\n    }\n}\n')),(0,s.kt)("h3",{id:"after"},"after"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'public class StudyDashboard {\n\n    private Set<String> usernames = new HashSet<>();\n\n    private Set<String> reviews = new HashSet<>();\n\n    /**\n     * studyReviews \ub300\uc2e0 loadReviews\ub85c \ubc14\uafc8 -> \ub9ac\ubdf0\ub97c \ub85c\ub4dc\ud574\uc628\ub2e4\ub294 \uc758\ubbf8\ub85c \ubc1b\uc544\ub4e4\uc784\n     * \uc694\uad6c\uc0ac\ud56d\uc774 30\ubc88\uca30 Issue\uc5d0 \ub2ec\ub9b0 \ucf54\uba58\ud2b8\ub97c \ub85c\ub4dc\ud574\uc624\ub294 \uac83 -> GitHub \ucd08\uae30\ud654\ub3c4 \uac19\uc774 \ucd94\uac00\n     */\n    private void loadReviews() throws IOException {\n        GitHub gitHub = GitHub.connect();\n        GHRepository repository = gitHub.getRepository("whiteship/live-study");\n        GHIssue issue = repository.getIssue(30);\n\n        List<GHIssueComment> comments = issue.getComments();\n        for (GHIssueComment comment : comments) {\n            usernames.add(comment.getUserName());\n            reviews.add(comment.getBody());\n        }\n    }\n\n    public Set<String> getUsernames() {\n        return usernames;\n    }\n\n    public Set<String> getReviews() {\n        return reviews;\n    }\n\n    public static void main(String[] args) throws IOException {\n        StudyDashboard studyDashboard = new StudyDashboard();\n        studyDashboard.loadReviews();\n        studyDashboard.getUsernames().forEach(System.out::println);\n        studyDashboard.getReviews().forEach(System.out::println);\n    }\n}\n')),(0,s.kt)("h2",{id:"\ub9ac\ud329\ud1a0\ub9c1-2-\ubcc0\uc218-\uc774\ub984-\ubc14\uafb8\uae30"},"\ub9ac\ud329\ud1a0\ub9c1 2. \ubcc0\uc218 \uc774\ub984 \ubc14\uafb8\uae30"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\ub354 \ub9ce\uc774 \uc0ac\uc6a9\ub418\ub294 \ubcc0\uc218\uc77c\uc218\ub85d \uc774\ub984\uc774 \uc911\uc694",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"\ubcc0\uc218\uac00 \ucee4\ubc84\ud558\ub294 \uc2a4\ucf54\ud504\uac00 \uc791\uc744\uc218\ub85d \uc911\uc694\uc131 \ub5a8\uc5b4\uc9d0(ex. \ub78c\ub2e4\uc2dd \ubcc0\uc218)"))),(0,s.kt)("li",{parentName:"ul"},"\ub2e4\uc774\ub098\ubbf9 \ud0c0\uc785\uc744 \uc9c0\uc6d0\ud558\ub294 \uc5b8\uc5b4\uc5d0\uc120 \ud0c0\uc785\uc744 \uc774\ub984\uc5d0 \ub123\uae30\ub3c4 \ud568"),(0,s.kt)("li",{parentName:"ul"},"\uc5ec\ub7ec \ud568\uc218\uc5d0 \uac78\uccd0 \uc4f0\uc774\ub294 \ud544\ub4dc \uc774\ub984\uc5d0\ub294 \ub354 \ub9ce\uc774 \uace0\ubbfc")),(0,s.kt)("h3",{id:"before-1"},"BEFORE"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'private void loadReviews() throws IOException {\n    GitHub gitHub = GitHub.connect();\n    GHRepository repository = gitHub.getRepository("whiteship/live-study");\n    GHIssue issue = repository.getIssue(30);\n\n    /*\n     * review\ub97c \ub85c\ub4dc\ud558\ub294\ub370, \ucf54\uba58\ud2b8\ub97c \ub85c\ub4dc\ud558\ub294 \uac83\ucc98\ub7fc \ubcf4\uc784\n     */\n    List<GHIssueComment> comments = issue.getComments();\n    for (GHIssueComment comment : comments) {\n        usernames.add(comment.getUserName());\n        reviews.add(comment.getBody());\n    }\n}\n')),(0,s.kt)("h3",{id:"after-1"},"AFTER"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'private void loadReviews() throws IOException {\n    GitHub gitHub = GitHub.connect();\n    GHRepository repository = gitHub.getRepository("whiteship/live-study");\n    GHIssue issue = repository.getIssue(30);\n\n    /*\n     * comments -> reviews\ub85c \ubcc0\uacbd. \ubcc0\uc218\uc5d0 \uae30\ub2a5\uc5d0 \ub9de\ub294 \uc774\ub984\uc744 \ubd80\uc5ec\n     */\n    List<GHIssueComment> reviews = issue.getComments();\n    for (GHIssueComment review : reviews) {\n        usernames.add(review.getUserName());\n        this.reviews.add(review.getBody());\n    }\n}\n')),(0,s.kt)("h2",{id:"\ub9ac\ud329\ud1a0\ub9c1-3-\ud544\ub4dc-\uc774\ub984-\ubc14\uafb8\uae30"},"\ub9ac\ud329\ud1a0\ub9c1 3. \ud544\ub4dc \uc774\ub984 \ubc14\uafb8\uae30"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\ub9ac\ud329\ud1a0\ub9c1 2\uc5d0\uc11c \uc774\uc5b4\uc11c, \ud544\ub4dc\ub294 \ud074\ub798\uc2a4 \uc804\uc5ed\uc5d0\uc11c \uc0ac\uc6a9\ub418\uae30 \ub54c\ubb38\uc5d0 \uba85\uba85\uc744 \uc798 \ud574\uc57c\ud568",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"\ub2e4\ub978 \ubcc0\uc218\uc640\uc758 \ucc28\ubcc4\uc744 \uc704\ud574, \ud544\ub4dc\ub294 \ub4a4\uc5d0 ",(0,s.kt)("inlineCode",{parentName:"li"},"this"),"\ub97c \ubd99\uc5ec \uc0ac\uc6a9"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"Record")," \uc790\ub8cc \uad6c\uc870\uc758 \ud544\ub4dc \uc774\ub984\uc740 \ud504\ub85c\uadf8\ub7a8 \uc804\ubc18\uc5d0 \uac78\uccd0 \ucc38\uc870\ub420 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0 \ub9e4\uc6b0 \uc911\uc694",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.baeldung.com/java-15-new"},"Record"),": \ud2b9\uc815 \ub370\uc774\ud130\uc640 \uad00\ub828\uc788\ub294 \ud544\ub4dc\ub97c \ubb36\uc5b4\ub193\uc740 \uc790\ub8cc \uad6c\uc870"),(0,s.kt)("li",{parentName:"ul"},"\ud30c\uc774\uc36c\uc758 ",(0,s.kt)("inlineCode",{parentName:"li"},"Dictionary"),", C#\uc758 ",(0,s.kt)("inlineCode",{parentName:"li"},"Record"),", Kotlin\uc758 ",(0,s.kt)("inlineCode",{parentName:"li"},"data class")),(0,s.kt)("li",{parentName:"ul"},"\uc790\ubc14 14\ubd80\ud130 \uc9c0\uc6d0")))),(0,s.kt)("h3",{id:"before-2"},"BEFORE"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'public class StudyDashboard {\n\n    /*\n     * usernames\uc640 reivews\ub97c Record\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc74c\n     */\n    private Set<String> usernames = new HashSet<>();\n\n    private Set<String> reviews = new HashSet<>();\n\n    private void loadReviews() throws IOException {\n        GitHub gitHub = GitHub.connect();\n        GHRepository repository = gitHub.getRepository("whiteship/live-study");\n        GHIssue issue = repository.getIssue(30);\n\n        List<GHIssueComment> reviews = issue.getComments();\n        for (GHIssueComment review : reviews) {\n            usernames.add(review.getUserName());\n            this.reviews.add(review.getBody());\n        }\n    }\n\n    public Set<String> getUsernames() {\n        return usernames;\n    }\n\n    public Set<String> getReviews() {\n        return reviews;\n    }\n\n    public static void main(String[] args) throws IOException {\n        StudyDashboard studyDashboard = new StudyDashboard();\n        studyDashboard.loadReviews();\n        studyDashboard.getUsernames().forEach(System.out::println);\n        studyDashboard.getReviews().forEach(System.out::println);\n    }\n}\n\n')),(0,s.kt)("h3",{id:"after-2"},"AFTER"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'public record StudyReview(String reviewer, String review) {\n    // kotlin\uc758 data class\uc640 \ub9e4\uc6b0 \ud761\uc0ac\n}\n\npublic class StudyDashboard {\n\n    /*\n     * (usernames, reivews) -> studyReviews\ub85c \ud1b5\uc77c\n     * study\n     */\n    private Set<StudyReview> studyReviews = new HashSet<>();\n\n    private void loadReviews() throws IOException {\n        GitHub gitHub = GitHub.connect();\n        GHRepository repository = gitHub.getRepository("whiteship/live-study");\n        GHIssue issue = repository.getIssue(30);\n\n        List<GHIssueComment> reviews = issue.getComments();\n        for (GHIssueComment review : reviews) {\n            studyReviews.add(new StudyReview(review.getUserName(), review.getBody()));\n        }\n    }\n\n    public Set<StudyReview> getSutdyReviews() {\n        return this.studyReviews;\n    }\n\n    public static void main(String[] args) throws IOException {\n        StudyDashboard studyDashboard = new StudyDashboard();\n        studyDashboard.loadReviews();\n        studyDashboard.getSutdyReviews().forEach(System.out::println);\n    }\n}\n\n')))}c.isMDXComponent=!0}}]);