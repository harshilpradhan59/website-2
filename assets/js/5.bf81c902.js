(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{167:function(t,e,r){},192:function(t,e,r){"use strict";var i=r(167);r.n(i).a},200:function(t,e,r){"use strict";r.r(e);var i={computed:{circleTopics(){return this.$site.pages.filter(t=>t.frontmatter.categories&&t.frontmatter.categories.indexOf(this.category)>-1).sort((t,e)=>t.frontmatter.title<e.frontmatter.title?-1:1)}},data:function(){return{pageLookup:{},category:this.$attrs.category}},created:function(){},methods:{}},s=(r(192),r(6)),o=Object(s.a)(i,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.circleTopics.length?r("div",{staticClass:"custom-block tip"},[r("h4",[t._v("More pages in this category:")]),r("div",{staticClass:"boop"},t._l(t.circleTopics,(function(e){return r("div",{key:e.path,staticClass:"topics"},[r("div",{staticClass:"entry"},[r("router-link",{staticClass:"link-text",attrs:{to:e.path}},[t._v(t._s(e.frontmatter.title))]),e.frontmatter.description?r("p",[t._v(t._s(e.frontmatter.description))]):t._e()],1)])})),0)]):t._e()}),[],!1,null,"54553930",null);e.default=o.exports}}]);