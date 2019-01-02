/*! For license information please see 14.bundle.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{281:function(e,t,a){"use strict";a.r(t),a.d(t,"combineMatchers",function(){return r}),a.d(t,"linkMatchers",function(){return p}),a.d(t,"predicateMatchers",function(){return m});const r=[{matcherName:"addressBlock",abstractTemplate:"address",combineIds:["person_name","addressPart"],order:1e7},{matcherName:"wikiInfo",abstractTemplate:"wikiInfo",combineIds:["wikiPageID","wikiPageRevisionID"],order:2e4},{matcherName:"addressPartCombine",abstractTemplate:"address",combineIds:["address_line2","address_line3"],order:1e7},{matcherName:"community",abstractTemplate:"community",combineIds:["depiction","label_comment"],order:1001e4},{matcherName:"community_stat",abstractTemplate:"community_stat",combineIds:["area","elevation","website"],order:1001e4},{matcherName:"label_comment",abstractTemplate:"label_comment",combineIds:["rdfschema_label","comment"],order:101e5},{matcherName:"person_name",abstractTemplate:"person_name",combineIds:["lastName","firstName"],order:1e7},{matcherName:"multiple_name_1",abstractTemplate:"mtitle",templateVariable:"mtitle",combineIds:["schema_name","rdfschema_label","skos_prefLabel"],order:1e7},{matcherName:"multiple_name_2",abstractTemplate:"mtitle",templateVariable:"mtitle",combineIds:["schema_name","rdfschema_label"],order:1e7},{matcherName:"multiple_name_3",abstractTemplate:"mtitle",templateVariable:"mtitle",combineIds:["rdfschema_label","skos_prefLabel"],order:1e7},{matcherName:"multiple_name_4",abstractTemplate:"mtitle",templateVariable:"mtitle",combineIds:["schema_name","skos_prefLabel"],order:1e7},{matcherName:"location",abstractTemplate:"location",combineIds:["lat","long"],order:9e6},{matcherName:"createMeta",abstractTemplate:"createMeta",combineIds:["created","creator"],order:1e7},{matcherName:"address_line2",abstractTemplate:"address_line2",combineIds:["street","street2"],order:1e7},{matcherName:"address_line3",abstractTemplate:"address_line3",combineIds:["city","country","postalCode"],order:1e7},{matcherName:"tempC",abstractTemplate:"mhltemp",combineIds:["meanC","highC","lowC"],order:8e6},{matcherName:"meanC",abstractTemplate:"temp",combineIds:["janMeanC","febMeanC","marMeanC","aprMeanC","mayMeanC","junMeanC","julMeanC","augMeanC","sepMeanC","octMeanC","novMeanC","decMeanC"],order:8e6},{matcherName:"humi",abstractTemplate:"humidity",combineIds:["janHumidity","febHumidity","marHumidity","aprHumidity","mayHumidity","junHumidity","julHumidity","augHumidity","sepHumidity","octHumidity","novHumidity","decHumidity"],order:8e6},{matcherName:"highC",abstractTemplate:"temp",combineIds:["janHighC","febHighC","marHighC","aprHighC","mayHighC","junHighC","julHighC","augHighC","sepHighC","octHighC","novHighC","decHighC"],order:8e6},{matcherName:"lowC",abstractTemplate:"temp",combineIds:["janLowC","febLowC","marLowC","aprLowC","mayLowC","junLowC","julLowC","augLowC","sepLowC","octLowC","novLowC","decLowC"],order:8e6}],p=[{matcherName:"neighboringMunicipality",predicate:"http://dbpedia.org/property/neighboringMunicipalities",abstractTemplate:"neighboringMunicipality",templateVariable:"neighboringMunicipality",order:4e6,linkIds:["rdfschema_label"]},{matcherName:"category",predicate:"http://purl.org/dc/terms/subject",abstractTemplate:"category",templateVariable:"category",order:4e6,linkIds:["rdfschema_label"]},{matcherName:"addressPart",predicate:"http://www.w3.org/2000/10/swap/pim/contact#address",templateVariable:"addressLink",abstractTemplate:"address",order:1e6,linkIds:["addressPartCombine"]},{matcherName:"creator",predicate:"http://purl.org/dc/terms/creator",templateVariable:"creator",abstractTemplate:"creator",order:2e4,linkIds:["rdfschema_label"]}],m=[{matcherName:"rdfschema_label",predicate:"http://www.w3.org/2000/01/rdf-schema#label",templateVariable:"title",abstractTemplate:"title",order:11e5},{matcherName:"quote",predicate:"http://dbpedia.org/property/quote",templateVariable:"quote",abstractTemplate:"quote",order:5e4},{matcherName:"skos_prefLabel",predicate:"http://www.w3.org/2004/02/skos/core#prefLabel",templateVariable:"title",abstractTemplate:"title",order:6e4},{matcherName:"skos_altLabel",predicate:"http://www.w3.org/2004/02/skos/core#altLabel",templateVariable:"text",abstractTemplate:"text",order:6e4},{matcherName:"schema_name",predicate:"http://schema.org/name",templateVariable:"title",abstractTemplate:"title",order:6e4},{matcherName:"schema_description",predicate:"http://schema.org/description",templateVariable:"text",abstractTemplate:"text",order:9e4},{matcherName:"purl_description",predicate:"http://purl.org/dc/elements/1.1/description",templateVariable:"text",abstractTemplate:"text",order:9e4},{matcherName:"purl_title",predicate:"http://purl.org/dc/terms/title",abstractTemplate:"title",order:1e6},{matcherName:"depiction",predicate:"http://xmlns.com/foaf/0.1/depiction",templateVariable:"img_url",abstractTemplate:"img",order:1e6},{matcherName:"pmid",predicate:"http://purl.org/ontology/bibo/pmid",abstractTemplate:"pmid",order:8e4},{matcherName:"firstName",predicate:"http://xmlns.com/foaf/0.1/firstName",abstractTemplate:"person_name",order:6e4},{matcherName:"lastName",predicate:"http://xmlns.com/foaf/0.1/lastName",abstractTemplate:"person_name",order:6e4},{matcherName:"name",predicate:"http://xmlns.com/foaf/0.1/name",abstractTemplate:"name",order:6e4},{matcherName:"license",predicate:"http://purl.org/dc/terms/license",abstractTemplate:"license",order:2e4},{matcherName:"created",predicate:"http://purl.org/dc/terms/created",abstractTemplate:"created",order:2e4},{matcherName:"text",predicate:"http://rdfs.org/sioc/ns#content",abstractTemplate:"text",order:9e4},{matcherName:"comment",predicate:"http://www.w3.org/2000/01/rdf-schema#comment",templateVariable:"text",abstractTemplate:"text",order:9e4},{matcherName:"abstract",predicate:"http://dbpedia.org/ontology/abstract",templateVariable:"abstract",abstractTemplate:"abstract",order:6e6},{matcherName:"elevation",predicate:"http://dbpedia.org/ontology/elevation",abstractTemplate:"elevation",order:94e5},{matcherName:"wikiPageRevisionID",predicate:"http://dbpedia.org/ontology/wikiPageRevisionID",abstractTemplate:"wikiPageRevisionID",order:2e4},{matcherName:"wikiPageID",predicate:"http://dbpedia.org/ontology/wikiPageID",abstractTemplate:"wikiPageID",order:2e4},{matcherName:"area",predicate:"http://dbpedia.org/property/area",abstractTemplate:"area",order:93e5},{matcherName:"website",predicate:"http://dbpedia.org/property/website",abstractTemplate:"website",order:95e5},{matcherName:"long",predicate:"http://www.w3.org/2003/01/geo/wgs84_pos#long",abstractTemplate:"text",order:9e4},{matcherName:"lat",predicate:"http://www.w3.org/2003/01/geo/wgs84_pos#lat",abstractTemplate:"text",order:9e4},{matcherName:"city",predicate:"http://www.w3.org/2000/10/swap/pim/contact#city",abstractTemplate:"text",order:9e4},{matcherName:"country",predicate:"http://www.w3.org/2000/10/swap/pim/contact#country",abstractTemplate:"text",order:9e4},{matcherName:"street",predicate:"http://www.w3.org/2000/10/swap/pim/contact#street",abstractTemplate:"text",order:9e4},{matcherName:"street2",predicate:"http://www.w3.org/2000/10/swap/pim/contact#street2",abstractTemplate:"text",order:9e4},{matcherName:"postalCode",predicate:"http://www.w3.org/2000/10/swap/pim/contact#postalCode",abstractTemplate:"text",order:9e4},{matcherName:"janMeanC",predicate:"http://dbpedia.org/property/janMeanC",abstractTemplate:"text",templateVariable:"jan",order:9e6},{matcherName:"febMeanC",predicate:"http://dbpedia.org/property/febMeanC",abstractTemplate:"text",templateVariable:"feb",order:9e6},{matcherName:"marMeanC",predicate:"http://dbpedia.org/property/marMeanC",abstractTemplate:"text",templateVariable:"mar",order:9e6},{matcherName:"aprMeanC",predicate:"http://dbpedia.org/property/aprMeanC",abstractTemplate:"text",templateVariable:"apr",order:9e6},{matcherName:"mayMeanC",predicate:"http://dbpedia.org/property/mayMeanC",abstractTemplate:"text",templateVariable:"may",order:9e6},{matcherName:"junMeanC",predicate:"http://dbpedia.org/property/junMeanC",abstractTemplate:"text",templateVariable:"jun",order:9e6},{matcherName:"julMeanC",predicate:"http://dbpedia.org/property/julMeanC",abstractTemplate:"text",templateVariable:"jul",order:9e6},{matcherName:"augMeanC",predicate:"http://dbpedia.org/property/augMeanC",abstractTemplate:"text",templateVariable:"aug",order:9e6},{matcherName:"sepMeanC",predicate:"http://dbpedia.org/property/sepMeanC",abstractTemplate:"text",templateVariable:"sep",order:9e6},{matcherName:"octMeanC",predicate:"http://dbpedia.org/property/octMeanC",abstractTemplate:"text",templateVariable:"oct",order:9e6},{matcherName:"novMeanC",predicate:"http://dbpedia.org/property/novMeanC",abstractTemplate:"text",templateVariable:"nov",order:9e6},{matcherName:"decMeanC",predicate:"http://dbpedia.org/property/decMeanC",abstractTemplate:"text",templateVariable:"dec",order:9e6},{matcherName:"janHighC",predicate:"http://dbpedia.org/property/janHighC",abstractTemplate:"text",templateVariable:"jan",order:9e6},{matcherName:"febHighC",predicate:"http://dbpedia.org/property/febHighC",abstractTemplate:"text",templateVariable:"feb",order:9e6},{matcherName:"marHighC",predicate:"http://dbpedia.org/property/marHighC",abstractTemplate:"text",templateVariable:"mar",order:9e6},{matcherName:"aprHighC",predicate:"http://dbpedia.org/property/aprHighC",abstractTemplate:"text",templateVariable:"apr",order:9e6},{matcherName:"mayHighC",predicate:"http://dbpedia.org/property/mayHighC",abstractTemplate:"text",templateVariable:"may",order:9e6},{matcherName:"junHighC",predicate:"http://dbpedia.org/property/junHighC",abstractTemplate:"text",templateVariable:"jun",order:9e6},{matcherName:"julHighC",predicate:"http://dbpedia.org/property/julHighC",abstractTemplate:"text",templateVariable:"jul",order:9e6},{matcherName:"augHighC",predicate:"http://dbpedia.org/property/augHighC",abstractTemplate:"text",templateVariable:"aug",order:9e6},{matcherName:"sepHighC",predicate:"http://dbpedia.org/property/sepHighC",abstractTemplate:"text",templateVariable:"sep",order:9e6},{matcherName:"octHighC",predicate:"http://dbpedia.org/property/octHighC",abstractTemplate:"text",templateVariable:"oct",order:9e6},{matcherName:"novHighC",predicate:"http://dbpedia.org/property/novHighC",abstractTemplate:"text",templateVariable:"nov",order:9e6},{matcherName:"decHighC",predicate:"http://dbpedia.org/property/decHighC",abstractTemplate:"text",templateVariable:"dec",order:9e6},{matcherName:"janLowC",predicate:"http://dbpedia.org/property/janLowC",abstractTemplate:"text",templateVariable:"jan",order:9e6},{matcherName:"febLowC",predicate:"http://dbpedia.org/property/febLowC",abstractTemplate:"text",templateVariable:"feb",order:9e6},{matcherName:"marLowC",predicate:"http://dbpedia.org/property/marLowC",abstractTemplate:"text",templateVariable:"mar",order:9e6},{matcherName:"aprLowC",predicate:"http://dbpedia.org/property/aprLowC",abstractTemplate:"text",templateVariable:"apr",order:9e6},{matcherName:"mayLowC",predicate:"http://dbpedia.org/property/mayLowC",abstractTemplate:"text",templateVariable:"may",order:9e6},{matcherName:"junLowC",predicate:"http://dbpedia.org/property/junLowC",abstractTemplate:"text",templateVariable:"jun",order:9e6},{matcherName:"julLowC",predicate:"http://dbpedia.org/property/julLowC",abstractTemplate:"text",templateVariable:"jul",order:9e6},{matcherName:"augLowC",predicate:"http://dbpedia.org/property/augLowC",abstractTemplate:"text",templateVariable:"aug",order:9e6},{matcherName:"sepLowC",predicate:"http://dbpedia.org/property/sepLowC",abstractTemplate:"text",templateVariable:"sep",order:9e6},{matcherName:"octLowC",predicate:"http://dbpedia.org/property/octLowC",abstractTemplate:"text",templateVariable:"oct",order:9e6},{matcherName:"novLowC",predicate:"http://dbpedia.org/property/novLowC",abstractTemplate:"text",templateVariable:"nov",order:9e6},{matcherName:"decLowC",predicate:"http://dbpedia.org/property/decLowC",abstractTemplate:"text",templateVariable:"dec",order:9e6},{matcherName:"janHumidity",predicate:"http://dbpedia.org/property/janHumidity",abstractTemplate:"text",templateVariable:"jan",order:9e6},{matcherName:"febHumidity",predicate:"http://dbpedia.org/property/febHumidity",abstractTemplate:"text",templateVariable:"feb",order:9e6},{matcherName:"marHumidity",predicate:"http://dbpedia.org/property/marHumidity",abstractTemplate:"text",templateVariable:"mar",order:9e6},{matcherName:"aprHumidity",predicate:"http://dbpedia.org/property/aprHumidity",abstractTemplate:"text",templateVariable:"apr",order:9e6},{matcherName:"mayHumidity",predicate:"http://dbpedia.org/property/mayHumidity",abstractTemplate:"text",templateVariable:"may",order:9e6},{matcherName:"junHumidity",predicate:"http://dbpedia.org/property/junHumidity",abstractTemplate:"text",templateVariable:"jun",order:9e6},{matcherName:"julHumidity",predicate:"http://dbpedia.org/property/julHumidity",abstractTemplate:"text",templateVariable:"jul",order:9e6},{matcherName:"augHumidity",predicate:"http://dbpedia.org/property/augHumidity",abstractTemplate:"text",templateVariable:"aug",order:9e6},{matcherName:"sepHumidity",predicate:"http://dbpedia.org/property/sepHumidity",abstractTemplate:"text",templateVariable:"sep",order:9e6},{matcherName:"octHumidity",predicate:"http://dbpedia.org/property/octHumidity",abstractTemplate:"text",templateVariable:"oct",order:9e6},{matcherName:"novHumidity",predicate:"http://dbpedia.org/property/novHumidity",abstractTemplate:"text",templateVariable:"nov",order:9e6},{matcherName:"decHumidity",predicate:"http://dbpedia.org/property/decHumidity",abstractTemplate:"text",templateVariable:"dec",order:9e6}]}}]);
//# sourceMappingURL=14.bundle.js.map