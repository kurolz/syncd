(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e4aaa026"],{"24bf":function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"app-release"},[i("el-card",{attrs:{shadow:"never"}},[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("span",[t._v("\n                部署发布单 - \n                "),1==t.deployDetail.status?i("span",[t._v("待上线")]):t._e(),2==t.deployDetail.status?i("span",{staticClass:"app-color-info"},[t._v(t._s(t.$t("onlineing")))]):t._e(),3==t.deployDetail.status?i("span",{staticClass:"app-color-success"},[t._v(t._s(t.$t("have_onlined")))]):t._e(),4==t.deployDetail.status?i("span",{staticClass:"app-color-error"},[t._v(t._s(t.$t("online_failed")))]):t._e(),6==t.deployDetail.status?i("span",{staticClass:"app-color-error"},[t._v(t._s(t.$t("rollback")))]):t._e()])]),i("el-row",{attrs:{gutter:20}},[i("el-col",{attrs:{span:10}},[i("span",{staticClass:"sp-title"},[t._v(t._s(t.$t("apply_order"))+":")]),i("span",[t._v(t._s(this.applyDetail.name))])]),i("el-col",{attrs:{span:14}},[i("span",{staticClass:"sp-title"},[t._v(t._s(t.$t("belong_project"))+":")]),i("span",[t._v(t._s(this.projectDetail.name))])])],1),i("el-row",{staticClass:"app-mt-20",attrs:{gutter:20}},[i("el-col",{attrs:{span:10}},[i("span",{staticClass:"sp-title"},[t._v(t._s(t.$t("deploy_mode"))+":")]),1==this.projectDetail.deploy_mode?i("span",[i("i",{staticClass:"iconfont icon-branch"}),t._v(" "+t._s(t.$t("branch_deploy"))+" - "+t._s(t.applyDetail.branch_name)+" - commit:"),""!=t.applyDetail.commit_version?[t._v(t._s(t.applyDetail.commit_version))]:[t._v("HEAD")]],2):i("span",[i("i",{staticClass:"iconfont icon-tag"}),t._v(" "+t._s(t.$t("tag_deploy"))+" - "+t._s(t.applyDetail.branch_name)+"\n                ")])]),i("el-col",{attrs:{span:14}},[i("span",{staticClass:"sp-title"},[t._v(t._s(t.$t("submiter"))+":")]),i("span",[t._v(t._s(t.applyDetail.username)+" - "+t._s(t.applyDetail.email)+" - "+t._s(t.$root.FormatDateTime(t.applyDetail.ctime)))])])],1),i("el-row",{staticClass:"app-mt-20",attrs:{gutter:20}},[i("el-col",{attrs:{span:16}},[i("span",{staticClass:"sp-title"},[t._v(t._s(t.$t("description"))+":")]),i("span",[t._v(t._s(t.applyDetail.description))])])],1),i("div",{staticClass:"app-divider"}),i("div",[1==t.deployDetail.status||2==t.deployDetail.status||4==t.deployDetail.status?[i("el-button",{attrs:{loading:1==t.buildDetail.status,size:"medium",icon:"iconfont small left icon-build",type:"primary"},on:{click:t.startBuildHandler}},[t._v(t._s(t.$t("build")))]),1==t.buildDetail.status?i("el-button",{attrs:{size:"medium",type:"warning",icon:"iconfont small left icon-stop"},on:{click:t.stopBuildHandler}},[t._v(t._s(t.$t("forced_termination")))]):t._e()]:t._e(),i("el-row",{staticClass:"app-mt-20",attrs:{gutter:20}},[i("el-col",{attrs:{span:10}},[i("span",{staticClass:"sp-title"},[t._v(t._s(t.$t("last_buid_time"))+":")]),t.buildDetail.start_time?i("span",[t._v(t._s(t.$root.FormatDateTime(t.buildDetail.start_time)))]):t._e(),t.buildDetail.finish_time?i("span",[t._v(" - "+t._s(t.$t("cost_time"))+": "+t._s(t.$root.FormatDateDuration(1e3*(t.buildDetail.finish_time-t.buildDetail.start_time))))]):t._e()]),i("el-col",{attrs:{span:14}},[i("span",{staticClass:"sp-title"},[t._v(t._s(t.$t("status"))+":")]),i("span",[t.isStopBuildLoading&&1==t.buildDetail.status?i("span",{staticClass:"app-color-warning"},[t._v("\n                            "+t._s(t.$t("stopping"))+"...\n                        ")]):1==t.buildDetail.status?i("span",{staticClass:"app-color-info"},[t._v(t._s(t.$t("building"))+"...")]):2==t.buildDetail.status?i("span",{staticClass:"app-color-success"},[t._v(t._s(t.$t("build_finish")))]):3==t.buildDetail.status?i("span",{staticClass:"app-color-error"},[t._v(t._s(t.$t("build_failed")))]):i("span",[t._v("\n                            "+t._s(t.$t("unbuild"))+"\n                        ")])])])],1),i("el-row",{staticClass:"app-mt-20",attrs:{gutter:20}},[i("el-col",{attrs:{span:10}},[i("span",{staticClass:"sp-title"},[t._v(t._s(t.$t("build_log"))+":")]),2==t.buildDetail.status||3==t.buildDetail.status?i("span",[i("span",{staticClass:"app-link",on:{click:t.openDialogBuildHandler}},[t._v(t._s(t.$t("view")))])]):t._e()]),i("el-col",{attrs:{span:14}},[i("span",{staticClass:"sp-title"},[t._v(t._s(t.$t("tar_pack_path"))+":")]),t.buildDetail.tar?i("span",[t._v(t._s(t.buildDetail.tar))]):i("span",[t._v(t._s(t.$t("uncreate")))])])],1)],2),i("div",{staticClass:"app-divider"}),i("div",[1==t.deployDetail.status||2==t.deployDetail.status?i("el-button",{attrs:{loading:2==t.deployDetail.status,size:"medium",icon:"iconfont small left icon-send",type:"primary"},on:{click:t.startDeployHandler}},[t._v(t._s(t.$t("deploy")))]):t._e(),4==t.deployDetail.status?i("el-button",{attrs:{loading:2==t.deployDetail.status,size:"medium",icon:"iconfont small left icon-send",type:"primary"},on:{click:t.startDeployHandler}},[t._v(t._s(t.$t("rebuild")))]):t._e(),2==t.deployDetail.status?i("el-button",{attrs:{size:"medium",icon:"iconfont small left icon-stop",type:"warning"},on:{click:t.stopDeployHandler}},[t._v(t._s(t.$t("forced_termination")))]):t._e(),3!=t.deployDetail.status&&4!=t.deployDetail.status||!t.applyDetail.rollback_id?t._e():i("div",[i("el-button",{attrs:{icon:"iconfont small left icon-rollback",size:"medium",type:"danger"},on:{click:t.rollbackDeployHandler}},[t._v(t._s(t.$t("rollback")))]),i("el-alert",{staticClass:"app-mt-10",attrs:{title:t.$t("rollback_apply_order_tips"),type:"warning"}})],1),6==t.deployDetail.status?i("div",[i("el-alert",{attrs:{type:"warning","show-icon":"",closable:!1}},[i("template",{slot:"title"},[i("strong",[t._v(t._s(t.$t("rollback_created")))]),t._v("\n                        -\n                        "),1==t.applyDetail.rollback_status?i("strong",[t._v(t._s(t.$t("rollback_unstart")))]):2==t.applyDetail.rollback_status?i("strong",[t._v(t._s(t.$t("rollbacking")))]):3==t.applyDetail.rollback_status?i("strong",[t._v(t._s(t.$t("rollback_success")))]):4==t.applyDetail.rollback_status?i("strong",[t._v(t._s(t.$t("rollback_failed")))]):5==t.applyDetail.rollback_status?i("strong",[t._v(t._s(t.$t("rollback_drop")))]):i("strong",[t._v(t._s(t.$t("rollback_unknow")))]),t._v("\n                        -\n                        "),i("a",{staticClass:"app-link",attrs:{href:"/deploy/release?id="+t.applyDetail.rollback_apply_id,target:"_blank"}},[t._v(t._s(t.$t("click_to_view_rollback_order")))])])],2)],1):t._e(),i("el-card",{staticClass:"app-mt-20 app-cluster-group",attrs:{shadow:"never"}},[i("div",{attrs:{slot:"header"},slot:"header"},[t._v(t._s(t.$t("cluster_list")))]),i("el-collapse",{attrs:{value:t.projectDetail.online_cluster_ids}},t._l(t.onlineCluster,function(s){return i("el-collapse-item",{key:s.id,staticClass:"app-cluster-item",attrs:{name:s.id}},[i("template",{slot:"title"},[i("i",{staticClass:"iconfont small left icon-cluster"}),t._v("\n                            "+t._s(s.name)+"  \n                            "),0==t.deployDetail.groupStatus[s.id]?i("span",{staticClass:"app-color-gray"},[i("i",{staticClass:"iconfont small left icon-wait"}),t._v(t._s(t.$t("wait_deploy")))]):1==t.deployDetail.groupStatus[s.id]?i("span",{staticClass:"app-color-info"},[i("i",{staticClass:"iconfont el-icon-loading"}),t._v(t._s(t.$t("deploying")))]):2==t.deployDetail.groupStatus[s.id]?i("span",{staticClass:"app-color-success"},[i("i",{staticClass:"iconfont small left icon-success"}),t._v(t._s(t.$t("deploy_success")))]):3==t.deployDetail.groupStatus[s.id]?i("span",{staticClass:"app-color-error"},[i("i",{staticClass:"iconfont small left icon-failed"}),t._v(t._s(t.$t("deploy_failed")))]):4==t.deployDetail.groupStatus[s.id]?i("span",{staticClass:"app-color-warning"},[i("i",{staticClass:"iconfont small left icon-stop"}),t._v(t._s(t.$t("be_deined")))]):t._e()]),t._l(s.servers,function(s){return i("div",{key:s.id,staticClass:"app-item"},[i("i",{staticClass:"iconfont small left icon-server"}),t._v("\n                            "+t._s(s.ip)+" - "+t._s(s.name)+"\n                            "),void 0==t.deployDetail.servers[s.id]?i("span"):0==t.deployDetail.servers[s.id].status?i("span",{staticClass:"app-color-gray"},[i("i",{staticClass:"iconfont small left icon-wait"})]):1==t.deployDetail.servers[s.id].status?i("span",{staticClass:"app-color-info"},[i("i",{staticClass:"iconfont el-icon-loading"})]):2==t.deployDetail.servers[s.id].status?i("span",{staticClass:"app-color-success"},[i("i",{staticClass:"iconfont small left icon-success"}),i("span",{staticClass:"app-link",on:{click:function(i){t.openDialogDeployHandler(t.deployDetail.servers[s.id])}}},[t._v(t._s(t.$t("view")))])]):3==t.deployDetail.servers[s.id].status?i("span",{staticClass:"app-color-error"},[i("i",{staticClass:"iconfont small left icon-failed"}),i("span",{staticClass:"app-link",on:{click:function(i){t.openDialogDeployHandler(t.deployDetail.servers[s.id])}}},[t._v(t._s(t.$t("view")))])]):4==t.deployDetail.servers[s.id].status?i("span",{staticClass:"app-color-warning"},[i("i",{staticClass:"iconfont small left icon-stop"})]):t._e()])})],2)}),1)],1)],1)],1),i("el-dialog",{attrs:{width:t.$root.DialogNormalWidth,title:t.$t("build_log"),visible:t.dialogBuildVisible},on:{"update:visible":function(s){t.dialogBuildVisible=s},close:t.closeDialogBuildHandler}},[3==t.buildDetail.status?i("div",[i("i",{staticClass:"app-color-error el-icon-warning"}),t._v(" "+t._s(t.$t("build_failed"))+": "),t.buildDetail.errmsg?i("span",{staticClass:"app-color-error"},[t._v(t._s(t.buildDetail.errmsg))]):t._e()]):t._e(),2==t.buildDetail.status?i("div",[i("i",{staticClass:"app-color-success el-icon-success"}),t._v(" "+t._s(t.$t("build_finish")))]):t._e(),i("div",{staticClass:"app-terminal-log"},[t._l(t.buildDetail.output,function(s,a){return[i("div",{key:a},[i("div",{staticClass:"terminal-cmd",class:{"app-color-success":s.success,"app-color-error":!s.success}},[t._v("\n                        [cmd] $ "+t._s(s.cmd)+"\n                        "),s.success?i("span",{staticClass:"iconfont icon-right"}):i("span",{staticClass:"iconfont icon-wrong"})]),i("div",[i("pre",[t._v(t._s(s.stdout))])]),i("div",[i("pre",[t._v(t._s(s.stderr))])])])]})],2)]),i("el-dialog",{attrs:{width:t.$root.DialogNormalWidth,title:t.$t("deploy_log"),visible:t.dialogDeployVisible},on:{"update:visible":function(s){t.dialogDeployVisible=s},close:t.closeDialogDeployHandler}},[3==t.serverDeployDetail.status?i("div",[i("i",{staticClass:"app-color-error el-icon-warning"}),t._v(" "+t._s(t.$t("deploy_failed"))+": "),t.serverDeployDetail.errmsg?i("span",{staticClass:"app-color-error"},[t._v(t._s(t.serverDeployDetail.errmsg))]):t._e()]):t._e(),2==t.serverDeployDetail.status?i("div",[i("i",{staticClass:"app-color-success el-icon-success"}),t._v(" "+t._s(t.$t("deploy_success")))]):t._e(),i("div",{staticClass:"app-terminal-log"},[t._l(t.serverDeployDetail.output,function(s,a){return[i("div",{key:a},[i("div",{staticClass:"terminal-cmd",class:{"app-color-success":s.success,"app-color-error":!s.success}},[t._v("\n                        [cmd] $ "+t._s(s.cmd)+"\n                        "),s.success?i("span",{staticClass:"iconfont icon-right"}):i("span",{staticClass:"iconfont icon-wrong"})]),i("div",[i("pre",[t._v(t._s(s.stdout))])]),i("div",[i("pre",[t._v(t._s(s.stderr))])])])]})],2)])],1)},e=[],l=(i("7f7f"),i("ac6a"),i("41db")),o=i("1c06"),n={data:function(){return{id:0,applyDetail:{},projectDetail:{},buildDetail:{},deployDetail:{},dialogBuildVisible:!1,isStopBuildLoading:!1,onlineCluster:{},dialogDeployVisible:!1,serverDeployDetail:{}}},watch:{projectDetail:function(){var t=this,s=[];this.projectDetail.online_cluster_ids.forEach(function(i){if(t.projectDetail.cluster_list[i]){var a=t.projectDetail.cluster_list[i],e=[];t.projectDetail.server_list.forEach(function(t){t.group_id==i&&e.push(t)}),s.push({id:a.id,name:a.name,servers:e})}}),this.onlineCluster=s}},methods:{rollbackDeployHandler:function(){var t=this;this.$root.ConfirmDelete(function(){Object(l["m"])({id:t.id}).then(function(t){})},this.$t("makesure_rollback_order"))},openDialogDeployHandler:function(t){console.log(t);var s=[];try{s=JSON.parse(t.output)}catch(i){}this.serverDeployDetail={status:t.status,errmsg:t.errmsg,output:s},this.dialogDeployVisible=!0},closeDialogDeployHandler:function(){this.dialogDeployVisible=!1},closeDialogBuildHandler:function(){this.dialogBuildVisible=!1},openDialogBuildHandler:function(){this.dialogBuildVisible=!0},startBuildHandler:function(){var t=this;Object(l["j"])({id:this.id}).then(function(s){t.loadBuildStatus()})},stopBuildHandler:function(){var t=this;Object(l["l"])({id:this.id}).then(function(s){t.isStopBuildLoading=!0})},startDeployHandler:function(){var t=this;Object(l["n"])({id:this.id}).then(function(s){t.loadDeployStatus()}).catch(function(s){s.code==o["a"].CODE_ERR_NO_DATA&&t.$confirm(t.$t("build_success_and_deploy"),t.$t("deploy_tips"),{confirmButtonText:t.$t("start_build"),cancelButtonText:t.$t("i_known"),type:"warning"}).then(function(){t.startBuildHandler()}).catch(function(){})})},stopDeployHandler:function(){Object(l["p"])({id:this.id}).then(function(t){})},deployStatusDetail:function(t){var s={},i={};if(t.task_list){var a={},e=[];t.task_list.forEach(function(t){a[t.group_id]||(a[t.group_id]=[]),e.push(t.group_id),a[t.group_id].push(t.status),i[t.server_id]=t}),e.forEach(function(t){var i=a[t].indexOf(0)>-1,e=a[t].indexOf(1)>-1,l=a[t].indexOf(2)>-1,o=a[t].indexOf(3)>-1,n=a[t].indexOf(4)>-1,r=2;r=i?e||l||o?1:n?4:0:e?1:l?n?4:o?3:2:o?n?4:3:4,s[t]=r})}this.deployDetail={status:t.status,groupStatus:s,servers:i}},loadBuildStatus:function(){var t=this;Object(l["k"])({id:this.id}).then(function(s){if(t.buildDetail=s,1==s.status){var i=t;setTimeout(function(){i.loadBuildStatus()},5e3)}else t.isStopBuildLoading=!1})},loadDeployStatus:function(){var t=this;Object(l["o"])({id:this.id}).then(function(s){if(t.deployStatusDetail(s),2==s.status){var i=t;setTimeout(function(){i.loadDeployStatus()},5e3)}})},initApplyDetail:function(){var t=this;Object(l["b"])({id:this.id}).then(function(s){t.applyDetail=s,Object(l["f"])({id:t.applyDetail.project_id}).then(function(s){t.projectDetail=s})})}},mounted:function(){this.id=this.$route.query.id,this.initApplyDetail(),this.loadBuildStatus(),this.loadDeployStatus()}},r=n,c=i("2877"),p=Object(c["a"])(r,a,e,!1,null,null,null);p.options.__file="Release.vue";s["default"]=p.exports},"41db":function(t,s,i){"use strict";i.d(s,"f",function(){return e}),i.d(s,"h",function(){return l}),i.d(s,"e",function(){return o}),i.d(s,"d",function(){return n}),i.d(s,"b",function(){return r}),i.d(s,"a",function(){return c}),i.d(s,"i",function(){return p}),i.d(s,"c",function(){return u}),i.d(s,"g",function(){return d}),i.d(s,"j",function(){return _}),i.d(s,"k",function(){return f}),i.d(s,"l",function(){return y}),i.d(s,"n",function(){return v}),i.d(s,"o",function(){return D}),i.d(s,"p",function(){return b}),i.d(s,"m",function(){return m});var a=i("ead3");function e(t){return Object(a["a"])("/deploy/apply/project/detail",t)}function l(t){return Object(a["b"])("/deploy/apply/submit",t)}function o(){return Object(a["a"])("/deploy/apply/project/all")}function n(t){return Object(a["a"])("/deploy/apply/list",t)}function r(t){return Object(a["a"])("/deploy/apply/detail",t)}function c(t){return Object(a["b"])("/deploy/apply/audit",t)}function p(t){return Object(a["b"])("/deploy/apply/update",t)}function u(t){return Object(a["b"])("/deploy/apply/drop",t)}function d(t){return Object(a["a"])("/deploy/apply/rollbacklist",t)}function _(t){return Object(a["b"])("/deploy/build/start",t)}function f(t){return Object(a["a"])("/deploy/build/status",t)}function y(t){return Object(a["b"])("/deploy/build/stop",t)}function v(t){return Object(a["b"])("/deploy/deploy/start",t)}function D(t){return Object(a["a"])("/deploy/deploy/status",t)}function b(t){return Object(a["b"])("/deploy/deploy/stop",t)}function m(t){return Object(a["b"])("/deploy/deploy/rollback",t)}},"7f7f":function(t,s,i){var a=i("86cc").f,e=Function.prototype,l=/^\s*function ([^ (]*)/,o="name";o in e||i("9e1e")&&a(e,o,{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(t){return""}}})},ac6a:function(t,s,i){for(var a=i("cadf"),e=i("0d58"),l=i("2aba"),o=i("7726"),n=i("32e9"),r=i("84f2"),c=i("2b4c"),p=c("iterator"),u=c("toStringTag"),d=r.Array,_={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},f=e(_),y=0;y<f.length;y++){var v,D=f[y],b=_[D],m=o[D],g=m&&m.prototype;if(g&&(g[p]||n(g,p,d),g[u]||n(g,u,D),r[D]=d,b))for(v in a)g[v]||l(g,v,a[v],!0)}}}]);
//# sourceMappingURL=chunk-e4aaa026.90bc1f9a.js.map