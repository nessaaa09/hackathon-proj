/* Sample data: barangays, report types, pins, announcements */
const BRGY={"San Isidro":[150,120],"San Roque":[330,90],"Poblacion":[290,250],"Riverside":[470,190],"Hilltop":[110,320]};
const TYPES={shortage:{c:"#e53935",l:"No water supply"},low:{c:"#f5a623",l:"Low water pressure"},contam:{c:"#1e7be0",l:"Contaminated water"},source:{c:"#2e9e5b",l:"Water source"}};
const SEED=[{id:1,type:"shortage",brgy:"San Isidro",desc:"No water since Monday morning.",when:"2h ago"},
 {id:2,type:"low",brgy:"San Roque",desc:"Very weak pressure in the evenings.",when:"6h ago"},
 {id:3,type:"contam",brgy:"Poblacion",desc:"Water looks brown and smells of chlorine.",when:"8h ago"},
 {id:4,type:"source",brgy:"Riverside",desc:"Public refilling station. Open 6am–6pm.",when:"Active"},
 {id:5,type:"source",brgy:"Poblacion",desc:"Barangay hall distribution point.",when:"Active"}];
const ANNS=[{c:"bad",t:"Water interruption in San Isidro",d:"Sep 29",b:"Pipe repair on the main line. Expect no water from 8am to 4pm. Store water ahead of time."},
 {c:"warn",t:"Emergency distribution schedule",d:"Sep 28",b:"Water trucks visit San Roque at 7am and Riverside at 1pm. Bring clean containers."},
 {c:"",t:"Reservoir levels back to normal",d:"Sep 26",b:"Recent rains raised the main tank to 78%. Please keep conserving water."}];
