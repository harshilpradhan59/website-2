(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{402:function(t,e,a){"use strict";a.r(e);var r=a(6),v=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("Go to "),a("a",{attrs:{href:"Project_level_traffic_forecasting"}},[t._v("Project-level traffic forecasting")]),t._v(" topic page.")]),t._v(" "),a("h2",{attrs:{id:"inputs-from-regional-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inputs-from-regional-model"}},[t._v("#")]),t._v(" Inputs from Regional Model")]),t._v(" "),a("p",[t._v("FHWA’s “Travel Model Validation and Reasonableness Checking Manual II” ("),a("a",{attrs:{href:"Model_Validation_and_Reasonableness_Checking"}},[t._v("VRC")]),t._v(") is incorporated in its entirety into these guidelines by reference. This VRC manual is intended for validation of regional travel models, and any regional model that is used for project-level forecasts must meet the requirements stated in the VRC manual.")]),t._v(" "),a("p",[t._v("The VRC manual does not contain specific validation standards for how well regional models must fit ground counts, essentially leaving this decision to individual agencies. There are minimum standards for the use of regional models as inputs into project level travel forecasts in the State of Ohio, as shown in the table below.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Count Range, ADT")]),t._v(" "),a("th",[t._v("Suggested Minimum Standard")]),t._v(" "),a("th",[t._v("Best Practical Experience")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("0-499")]),t._v(" "),a("td",[t._v("200%")]),t._v(" "),a("td",[t._v("166%")])]),t._v(" "),a("tr",[a("td",[t._v("500-1499")]),t._v(" "),a("td",[t._v("100%")]),t._v(" "),a("td",[t._v("80%")])]),t._v(" "),a("tr",[a("td",[t._v("1500-2499")]),t._v(" "),a("td",[t._v("62%")]),t._v(" "),a("td",[t._v("48%")])]),t._v(" "),a("tr",[a("td",[t._v("2500-3499")]),t._v(" "),a("td",[t._v("54%")]),t._v(" "),a("td",[t._v("47%")])]),t._v(" "),a("tr",[a("td",[t._v("3500-4499")]),t._v(" "),a("td",[t._v("48%")]),t._v(" "),a("td",[t._v("32%")])]),t._v(" "),a("tr",[a("td",[t._v("4500-5499")]),t._v(" "),a("td",[t._v("45%")]),t._v(" "),a("td",[t._v("27%")])]),t._v(" "),a("tr",[a("td",[t._v("5500-6999")]),t._v(" "),a("td",[t._v("42%")]),t._v(" "),a("td",[t._v("25%")])]),t._v(" "),a("tr",[a("td",[t._v("7000-8499")]),t._v(" "),a("td",[t._v("39%")]),t._v(" "),a("td",[t._v("23%")])]),t._v(" "),a("tr",[a("td",[t._v("8500-9999")]),t._v(" "),a("td",[t._v("36%")]),t._v(" "),a("td",[t._v("18%")])]),t._v(" "),a("tr",[a("td",[t._v("10000-12499")]),t._v(" "),a("td",[t._v("34%")]),t._v(" "),a("td",[t._v("19%")])]),t._v(" "),a("tr",[a("td",[t._v("12500-14999")]),t._v(" "),a("td",[t._v("31%")]),t._v(" "),a("td",[t._v("16%")])]),t._v(" "),a("tr",[a("td",[t._v("15000-17499")]),t._v(" "),a("td",[t._v("30%")]),t._v(" "),a("td",[t._v("14%")])]),t._v(" "),a("tr",[a("td",[t._v("17500-19999")]),t._v(" "),a("td",[t._v("28%")]),t._v(" "),a("td",[t._v("11%")])]),t._v(" "),a("tr",[a("td",[t._v("20000-24999")]),t._v(" "),a("td",[t._v("26%")]),t._v(" "),a("td",[t._v("10%")])]),t._v(" "),a("tr",[a("td",[t._v("25000-34999")]),t._v(" "),a("td",[t._v("24%")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("35000-54999")]),t._v(" "),a("td",[t._v("21%")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("55000-74999")]),t._v(" "),a("td",[t._v("18%")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("75000 or more")]),t._v(" "),a("td",[t._v("12%")]),t._v(" "),a("td")])])]),t._v(" "),a("p",[t._v("The validation standards are interpreted as root-mean-square error ("),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Root-mean-square_deviation",target:"_blank",rel:"noopener noreferrer"}},[t._v("RMSE"),a("OutboundLink")],1),t._v(") for all counted links in the count range. The standard for any peak period is identical. For example, if a link has an "),a("a",{attrs:{href:"Average_Daily_Traffic"}},[t._v("ADT")]),t._v(" count of 13,000 and a "),a("a",{attrs:{href:"Design_Hourly_Volume"}},[t._v("peak hour count")]),t._v(" of 1100, the minimum acceptable RMSE is 31% (not 100%).")]),t._v(" "),a("h2",{attrs:{id:"refined-outputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#refined-outputs"}},[t._v("#")]),t._v(" Refined Outputs")]),t._v(" "),a("p",[t._v("Two standards apply to refined outputs from a forecast.")]),t._v(" "),a("ol",[a("li",[t._v("Any refinement technique should not attempt to refine the fit, as measured by RMSE, of a travel forecast to be better than the accuracy of the traffic count data used for the refinement. If a model is fit too tightly to data, then errors inherent in the data will be locked into any future forecast. In addition, any smoothing ability of the refinement technique will be defeated when traffic count data is matched too tightly.")]),t._v(" "),a("li",[t._v("All refined forecasts must meet the requirements of the “half-lane rule and extensions” (see article) with a 50% confidence interval.")])]),t._v(" "),a("p",[t._v("It is entirely possible that a refined forecast cannot meet one of the requirements of the above two paragraphs, in which case the forecast is not valid.")])])}),[],!1,null,null,null);e.default=v.exports}}]);