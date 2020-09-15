(window.webpackJsonp=window.webpackJsonp||[]).push([[294],{485:function(e,t,a){"use strict";a.r(t);var s=a(6),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("Transit networks are a spatial representation of bus, rail, and other types of transit routes available in a region. In a transit network, each transit route is coded with links representing the path it follows and nodes representing the stops along the path. Further detail about each route often includes route fares, schedules, headways, and speeds.")]),e._v(" "),a("p",[e._v("Transit networks are an essential input for all travel models that include transit as a mode. They are used to compute trip times and costs for using transit.")]),e._v(" "),a("h2",{attrs:{id:"relationship-to-highway-networks-and-transit-network-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#relationship-to-highway-networks-and-transit-network-types"}},[e._v("#")]),e._v(" Relationship to Highway Networks and Transit Network Types")]),e._v(" "),a("p",[e._v("Transit routes may be coded on top of an underlying highway network, since many transit routes use roadway links. In effect, this shows how highway congestion can slow transit speeds.")]),e._v(" "),a("p",[e._v("As congestion levels and service frequency differ by peak and off-peak levels, transit networks may be separately represented by time-of-day.")]),e._v(" "),a("p",[e._v("Transit networks also may be separately created by sub-mode to represent the differing levels of service provided by different kinds of service. For example, rail transit, express bus transit and local bus may all have different networks associated with them to show how the services differ.")]),e._v(" "),a("h2",{attrs:{id:"access-modes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#access-modes"}},[e._v("#")]),e._v(" Access Modes")]),e._v(" "),a("p",[e._v("Transit networks also need to represent how people access a transit stop, either by walking or driving. The transit access mode, called either Walk Access to Transit or Drive Access to Transit, may also have separate networks showing how travel times and costs differ by access mode.")]),e._v(" "),a("p",[e._v("Access times may be limited based on data that shows the maximum distance a person is willing to walk or drive to transit in a region. The maximum walk access distance is usually in the range of 1-2 miles. Also a capture area may be specified for drive access trips to represent markets served by a park and ride.")]),e._v(" "),a("h2",{attrs:{id:"special-node-and-link-types-for-transit-networks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#special-node-and-link-types-for-transit-networks"}},[e._v("#")]),e._v(" Special Node and Link Types for Transit Networks")]),e._v(" "),a("p",[e._v("Transit networks often involve special transit link and node types. For example, High Occupancy Vehicle (HOV) links may be coded on the underlying highway layer to allow only for transit use and carpooling. Transit-only links may be specified for rights-of-way that only transit may use. Rail typically is coded on transit-only links because cars cannot use these facilities. Bus Rapid Transit (BRT) may also be coded on transit-only links if the facilities are exclusively used by buses.")]),e._v(" "),a("p",[e._v("Similarly, walk-only links are often needed to represent how people can walk to transit because the sparseness of the highway network does not provide sufficient detail of where people can actually walk. These links may not allow vehicles on them because they are not actual paths a vehicle could use.")]),e._v(" "),a("p",[e._v("Special detailed information may also be coded about stops. For example, stops are often specified as park and rides meaning that they can serve drive-to-transit trips.")]),e._v(" "),a("h2",{attrs:{id:"how-are-transit-networks-created-and-maintained"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-are-transit-networks-created-and-maintained"}},[e._v("#")]),e._v(" How are Transit Networks Created and Maintained?")]),e._v(" "),a("p",[e._v("Transit networks may be coded using available transit system maps to draw routes spatially and schedules to depict transit times and fares. Because transit network creation and maintenance can involve hundreds of routes and thousands of stops, detailed cross-checking of the transit network coding against available transit maps and schedules should be performed to ensure that errors are not made. Such checking can be performed by building transit paths on the network and checking the paths against actual known transit routes. The transit networks will need to periodically updated and checked as transit systems evolve and plans change.")]),e._v(" "),a("p",[e._v("Future year transit networks depend on regional plans to improve and maintain transit service. Typically future year transit networks are created on 5 year increments starting at a base year (i.e. 2010) with modifications to the networks every five years until the final planning horizon year (i.e. 2040). Alternately transit networks may be created in a subtractive fashion, starting at a final horizon year and subtracting transit service on each increment until the base year.")]),e._v(" "),a("h2",{attrs:{id:"transit-networks-use-in-models"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transit-networks-use-in-models"}},[e._v("#")]),e._v(" Transit Networks Use in Models")]),e._v(" "),a("p",[e._v("The following depicts how the transit networks are used throughout the model process.")]),e._v(" "),a("ol",[a("li",[e._v("First, transit network paths are built for a particular trip origin-destination pair by finding the best path in terms of travel time and cost.")]),e._v(" "),a("li",[e._v("The network path information is then sent to the "),a("a",{attrs:{href:"Skim_Matrix#Transit_Skims"}},[e._v("transit skims")]),e._v(". The transit skims are a set of matrices that show travel times and costs for transit for each origin-destination zone-pair.")]),e._v(" "),a("li",[e._v("The transit skim data is used in mode choice and trip distribution/destination choice models.")]),e._v(" "),a("li",[e._v("Finally, trips are assigned to the transit network. The output provided by transit assignment shows the number of transit boardings and alightings by route by time of day. It also often shows the number of boardings and alightings by stop.")])]),e._v(" "),a("h2",{attrs:{id:"values-skimmed-on-the-transit-network"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#values-skimmed-on-the-transit-network"}},[e._v("#")]),e._v(" Values Skimmed on the Transit Network")]),e._v(" "),a("p",[e._v("Transit network data is essential in depicting both how transit compares against highway service and also which routes will be used on a transit trip. The depiction of transit network paths is used in the "),a("a",{attrs:{href:"Skim_Matrix"}},[e._v("skims")]),e._v(" to show the "),a("a",{attrs:{href:"Impedance"}},[e._v("impedance")]),e._v(" associated with a given origin-destination pair.")]),e._v(" "),a("p",[e._v("Transit network information that is typically skimmed includes:")]),e._v(" "),a("p",[e._v(":   access walk time\n:   access drive time\n:   egress walk time\n:   transfer walk time\n:   access wait time\n:   egress wait time\n:   transfer wait time\n:   in-vehicle time\n:   fare/cost\n:   transfer penalty.")]),e._v(" "),a("h2",{attrs:{id:"advanced-transit-network-attribution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#advanced-transit-network-attribution"}},[e._v("#")]),e._v(" Advanced Transit Network Attribution")]),e._v(" "),a("p",[e._v("One way to improve transit networks is depict greater detail about transit routes and stops. For example, the transit network could contain stop information such as if the stop includes automated bus schedule message signs or has a low level of lighting. This could be used to classify stops as more or less desirable. Furthermore, more advanced ways of representing transit fares could be provided to show such complexities as fare zones and reduced fares for students or seniors create variable fares dependent on location and person type.")]),e._v(" "),a("p",[e._v("The more detailed the base year and future year data about the transit network is, the more realistic the mode and route choices will be. Furthermore, with more realistic depiction of transit attributes, the smaller alternative specific constants will have to be in the mode choice model since the explainable part of the model will be larger, so the part of the model which is not explainable that is embodied in the constant will be smaller.")]),e._v(" "),a("hr")])}),[],!1,null,null,null);t.default=i.exports}}]);