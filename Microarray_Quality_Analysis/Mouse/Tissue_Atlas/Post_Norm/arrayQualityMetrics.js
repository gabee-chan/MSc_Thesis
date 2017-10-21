// (C) Wolfgang Huber 2010-2011

// Script parameters - these are set up by R in the function 'writeReport' when copying the 
//   template for this script from arrayQualityMetrics/inst/scripts into the report.

var highlightInitial = [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ];
var arrayMetadata    = [ [ "1", "Diaph_1", "GSM252064.CEL.gz", "GSM252064", "Diaph", "Diaph_1", "12/01/04 10:40:13" ], [ "2", "Diaph_2", "GSM252065.CEL.gz", "GSM252065", "Diaph", "Diaph_2", "12/01/04 10:51:26" ], [ "3", "Diaph_3", "GSM252066.CEL.gz", "GSM252066", "Diaph", "Diaph_3", "12/01/04 10:28:58" ], [ "4", "Splee_1", "GSM252067.CEL.gz", "GSM252067", "Splee", "Splee_1", "04/06/05 10:58:14" ], [ "5", "Splee_2", "GSM252068.CEL.gz", "GSM252068", "Splee", "Splee_2", "04/06/05 11:10:09" ], [ "6", "Splee_3", "GSM252069.CEL.gz", "GSM252069", "Splee", "Splee_3", "04/06/05 11:21:43" ], [ "7", "Muscl_1", "GSM252070.CEL.gz", "GSM252070", "Muscl", "Muscl_1", "06/29/06 10:38:44" ], [ "8", "Muscl_2", "GSM252071.CEL.gz", "GSM252071", "Muscl", "Muscl_2", "06/29/06 10:48:10" ], [ "9", "Muscl_3", "GSM252072.CEL.gz", "GSM252072", "Muscl", "Muscl_3", "06/29/06 10:58:03" ], [ "10", "Muscl_4", "GSM252073.CEL.gz", "GSM252073", "Muscl", "Muscl_4", "06/29/06 11:07:22" ], [ "11", "Liver_1", "GSM252074.CEL.gz", "GSM252074", "Liver", "Liver_1", "12/16/04 10:43:42" ], [ "12", "Liver_2", "GSM252075.CEL.gz", "GSM252075", "Liver", "Liver_2", "12/16/04 10:56:30" ], [ "13", "Liver_3", "GSM252076.CEL.gz", "GSM252076", "Liver", "Liver_3", "12/16/04 11:07:46" ], [ "14", "Brain_1", "GSM252077.CEL.gz", "GSM252077", "Brain", "Brain_1", "12/16/04 15:25:47" ], [ "15", "Brain_2", "GSM252078.CEL.gz", "GSM252078", "Brain", "Brain_2", "12/16/04 15:37:06" ], [ "16", "Brain_3", "GSM252079.CEL.gz", "GSM252079", "Brain", "Brain_3", "12/16/04 15:48:16" ], [ "17", "Lung_1", "GSM252080.CEL.gz", "GSM252080", "Lung", "Lung_1", "01/25/05 11:27:33" ], [ "18", "Lung_2", "GSM252081.CEL.gz", "GSM252081", "Lung", "Lung_2", "01/25/05 11:39:35" ], [ "19", "Lung_3", "GSM252082.CEL.gz", "GSM252082", "Lung", "Lung_3", "01/25/05 11:51:02" ], [ "20", "Kidn_1", "GSM252083.CEL.gz", "GSM252083", "Kidn", "Kidn_1", "01/25/05 14:39:22" ], [ "21", "Kidn_2", "GSM252084.CEL.gz", "GSM252084", "Kidn", "Kidn_2", "01/25/05 14:50:46" ], [ "22", "Kidn_3", "GSM252085.CEL.gz", "GSM252085", "Kidn", "Kidn_3", "01/25/05 15:01:57" ], [ "23", "Adrn_1", "GSM252086.CEL.gz", "GSM252086", "Adrn", "Adrn_1", "02/09/07 11:59:22" ], [ "24", "Adrn_2", "GSM252087.CEL.gz", "GSM252087", "Adrn", "Adrn_2", "02/09/07 12:08:31" ], [ "25", "Adrn_3", "GSM252088.CEL.gz", "GSM252088", "Adrn", "Adrn_3", "06/01/05 11:11:13" ], [ "26", "Bmarr_1", "GSM252089.CEL.gz", "GSM252089", "Bmarr", "Bmarr_1", "08/03/06 14:59:21" ], [ "27", "Bmarr_2", "GSM252090.CEL.gz", "GSM252090", "Bmarr", "Bmarr_2", "08/03/06 15:08:39" ], [ "28", "Bmarr_3", "GSM252091.CEL.gz", "GSM252091", "Bmarr", "Bmarr_3", "08/03/06 15:21:39" ], [ "29", "Bmarr_4", "GSM252092.CEL.gz", "GSM252092", "Bmarr", "Bmarr_4", "08/03/06 15:31:19" ], [ "30", "Adip_1", "GSM252093.CEL.gz", "GSM252093", "Adip", "Adip_1", "04/15/05 11:10:54" ], [ "31", "Adip_2", "GSM252094.CEL.gz", "GSM252094", "Adip", "Adip_2", "08/10/05 14:39:41" ], [ "32", "Adip_3", "GSM252095.CEL.gz", "GSM252095", "Adip", "Adip_3", "08/10/05 14:52:04" ], [ "33", "P_glan_1", "GSM252096.CEL.gz", "GSM252096", "P_glan", "P_glan_1", "05/20/05 10:21:56" ], [ "34", "P_glan_2", "GSM252097.CEL.gz", "GSM252097", "P_glan", "P_glan_2", "05/20/05 10:33:57" ], [ "35", "P_glan_3", "GSM252098.CEL.gz", "GSM252098", "P_glan", "P_glan_3", "06/01/05 14:36:13" ], [ "36", "P_glan_4", "GSM252099.CEL.gz", "GSM252099", "P_glan", "P_glan_4", "07/14/05 10:21:02" ], [ "37", "P_glan_5", "GSM252100.CEL.gz", "GSM252100", "P_glan", "P_glan_5", "07/14/05 10:09:02" ], [ "38", "Sal_glan_1", "GSM252101.CEL.gz", "GSM252101", "Sal_glan", "Sal_glan_1", "03/15/06 10:44:23" ], [ "39", "Sal_glan_2", "GSM252102.CEL.gz", "GSM252102", "Sal_glan", "Sal_glan_2", "03/15/06 11:04:48" ], [ "40", "Sal_glan_3", "GSM252103.CEL.gz", "GSM252103", "Sal_glan", "Sal_glan_3", "03/15/06 11:14:35" ], [ "41", "Sem_glan_1", "GSM252104.CEL.gz", "GSM252104", "Sem_glan", "Sem_glan_1", "07/14/06 12:36:14" ], [ "42", "Sem_glan_2", "GSM252105.CEL.gz", "GSM252105", "Sem_glan", "Sem_glan_2", "07/14/06 12:45:57" ], [ "43", "Sem_glan_3", "GSM252106.CEL.gz", "GSM252106", "Sem_glan", "Sem_glan_3", "07/14/06 12:55:26" ], [ "44", "Thymus_1", "GSM252107.CEL.gz", "GSM252107", "Thymus", "Thymus_1", "07/27/06 10:29:41" ], [ "45", "Thymus_2", "GSM252108.CEL.gz", "GSM252108", "Thymus", "Thymus_2", "07/27/06 10:39:16" ], [ "46", "Thymus_3", "GSM252109.CEL.gz", "GSM252109", "Thymus", "Thymus_3", "07/27/06 10:50:09" ], [ "47", "Testes_1", "GSM252110.CEL.gz", "GSM252110", "Testes", "Testes_1", "02/09/07 10:44:18" ], [ "48", "Testes_2", "GSM252111.CEL.gz", "GSM252111", "Testes", "Testes_2", "02/09/07 10:53:33" ], [ "49", "Testes_3", "GSM252112.CEL.gz", "GSM252112", "Testes", "Testes_3", "02/14/07 10:16:28" ], [ "50", "Heart_1", "GSM252113.CEL.gz", "GSM252113", "Heart", "Heart_1", "07/27/06 14:49:03" ], [ "51", "Heart_2", "GSM252114.CEL.gz", "GSM252114", "Heart", "Heart_2", "07/27/06 14:58:37" ], [ "52", "Heart_3", "GSM252115.CEL.gz", "GSM252115", "Heart", "Heart_3", "07/27/06 15:08:05" ], [ "53", "S_inte_1", "GSM252116.CEL.gz", "GSM252116", "S_inte", "S_inte_1", "07/14/06 10:27:38" ], [ "54", "S_inte_2", "GSM252117.CEL.gz", "GSM252117", "S_inte", "S_inte_2", "07/14/06 10:37:32" ], [ "55", "S_inte_3", "GSM252118.CEL.gz", "GSM252118", "S_inte", "S_inte_3", "07/28/06 10:10:09" ], [ "56", "Eye_1", "GSM252119.CEL.gz", "GSM252119", "Eye", "Eye_1", "07/28/06 10:32:40" ], [ "57", "Eye_2", "GSM252120.CEL.gz", "GSM252120", "Eye", "Eye_2", "07/28/06 10:45:55" ], [ "58", "Eye_3", "GSM252121.CEL.gz", "GSM252121", "Eye", "Eye_3", "07/28/06 10:56:13" ], [ "59", "ES_cell_1", "GSM252122.CEL.gz", "GSM252122", "ES_cell", "ES_cell_1", "12/13/06 11:43:12" ], [ "60", "ES_cell_2", "GSM252123.CEL.gz", "GSM252123", "ES_cell", "ES_cell_2", "12/13/06 11:52:27" ], [ "61", "ES_cell_3", "GSM252124.CEL.gz", "GSM252124", "ES_cell", "ES_cell_3", "12/13/06 12:01:46" ], [ "62", "Placent_1", "GSM252125.CEL.gz", "GSM252125", "Placent", "Placent_1", "06/29/07 12:23:19" ], [ "63", "Placent_2", "GSM252126.CEL.gz", "GSM252126", "Placent", "Placent_2", "06/29/07 12:32:35" ], [ "64", "Placent_3", "GSM252127.CEL.gz", "GSM252127", "Placent", "Placent_3", "06/29/07 12:41:49" ], [ "65", "Ovary_1", "GSM252128.CEL.gz", "GSM252128", "Ovary", "Ovary_1", "12/05/07 11:27:33" ], [ "66", "Ovary_2", "GSM252129.CEL.gz", "GSM252129", "Ovary", "Ovary_2", "12/05/07 11:11:33" ], [ "67", "Ovary_3", "GSM252130.CEL.gz", "GSM252130", "Ovary", "Ovary_3", "12/05/07 11:02:06" ] ];
var svgObjectNames   = [ "pca", "dens" ];

var cssText = ["stroke-width:1; stroke-opacity:0.4",
               "stroke-width:3; stroke-opacity:1" ];

// Global variables - these are set up below by 'reportinit'
var tables;             // array of all the associated ('tooltips') tables on the page
var checkboxes;         // the checkboxes
var ssrules;


function reportinit() 
{
 
    var a, i, status;

    /*--------find checkboxes and set them to start values------*/
    checkboxes = document.getElementsByName("ReportObjectCheckBoxes");
    if(checkboxes.length != highlightInitial.length)
	throw new Error("checkboxes.length=" + checkboxes.length + "  !=  "
                        + " highlightInitial.length="+ highlightInitial.length);
    
    /*--------find associated tables and cache their locations------*/
    tables = new Array(svgObjectNames.length);
    for(i=0; i<tables.length; i++) 
    {
        tables[i] = safeGetElementById("Tab:"+svgObjectNames[i]);
    }

    /*------- style sheet rules ---------*/
    var ss = document.styleSheets[0];
    ssrules = ss.cssRules ? ss.cssRules : ss.rules; 

    /*------- checkboxes[a] is (expected to be) of class HTMLInputElement ---*/
    for(a=0; a<checkboxes.length; a++)
    {
	checkboxes[a].checked = highlightInitial[a];
        status = checkboxes[a].checked; 
        setReportObj(a+1, status, false);
    }

}


function safeGetElementById(id)
{
    res = document.getElementById(id);
    if(res == null)
        throw new Error("Id '"+ id + "' not found.");
    return(res)
}

/*------------------------------------------------------------
   Highlighting of Report Objects 
 ---------------------------------------------------------------*/
function setReportObj(reportObjId, status, doTable)
{
    var i, j, plotObjIds, selector;

    if(doTable) {
	for(i=0; i<svgObjectNames.length; i++) {
	    showTipTable(i, reportObjId);
	} 
    }

    /* This works in Chrome 10, ssrules will be null; we use getElementsByClassName and loop over them */
    if(ssrules == null) {
	elements = document.getElementsByClassName("aqm" + reportObjId); 
	for(i=0; i<elements.length; i++) {
	    elements[i].style.cssText = cssText[0+status];
	}
    } else {
    /* This works in Firefox 4 */
	var success = false;
	i = 0; 
	/* Some of this looping could already be cached in reportInit() */
	while( (!success) & (i < ssrules.length) ) {
	    selector = ssrules[i].selectorText;  // The selector 
            if (!selector) 
		continue; // Skip @import and other nonstyle rules
            if (selector == (".aqm" + reportObjId)) {
		success = true; 
		ssrules[i].style.cssText = cssText[0+status];
	    } else {
		i++;
	    }
	}
    }

}

/*------------------------------------------------------------
   Display of the Metadata Table
  ------------------------------------------------------------*/
function showTipTable(tableIndex, reportObjId)
{
    var rows = tables[tableIndex].rows;
    var a = reportObjId - 1;

    if(rows.length != arrayMetadata[a].length)
	throw new Error("rows.length=" + rows.length+"  !=  arrayMetadata[array].length=" + arrayMetadata[a].length);

    for(i=0; i<rows.length; i++) 
 	rows[i].cells[1].innerHTML = arrayMetadata[a][i];
}

function hideTipTable(tableIndex)
{
    var rows = tables[tableIndex].rows;

    for(i=0; i<rows.length; i++) 
 	rows[i].cells[1].innerHTML = "";
}


/*------------------------------------------------------------
  From module 'name' (e.g. 'density'), find numeric index in the 
  'svgObjectNames' array.
  ------------------------------------------------------------*/
function getIndexFromName(name) 
{
    var i;
    for(i=0; i<svgObjectNames.length; i++)
        if(svgObjectNames[i] == name)
	    return i;

    throw new Error("Did not find '" + name + "'.");
}


/*------------------------------------------------------------
  SVG plot object callbacks
  ------------------------------------------------------------*/
function plotObjRespond(what, reportObjId, name)
{

    var a, i, status;

    switch(what) {
    case "show":
	i = getIndexFromName(name);
	showTipTable(i, reportObjId);
	break;
    case "hide":
	i = getIndexFromName(name);
	hideTipTable(i);
	break;
    case "click":
        a = reportObjId - 1;
	status = !checkboxes[a].checked;
	checkboxes[a].checked = status;
	setReportObj(reportObjId, status, true);
	break;
    default:
	throw new Error("Invalid 'what': "+what)
    }
}

/*------------------------------------------------------------
  checkboxes 'onchange' event
------------------------------------------------------------*/
function checkboxEvent(reportObjId)
{
    var a = reportObjId - 1;
    var status = checkboxes[a].checked;
    setReportObj(reportObjId, status, true);
}


/*------------------------------------------------------------
  toggle visibility
------------------------------------------------------------*/
function toggle(id){
  var head = safeGetElementById(id + "-h");
  var body = safeGetElementById(id + "-b");
  var hdtxt = head.innerHTML;
  var dsp;
  switch(body.style.display){
    case 'none':
      dsp = 'block';
      hdtxt = '-' + hdtxt.substr(1);
      break;
    case 'block':
      dsp = 'none';
      hdtxt = '+' + hdtxt.substr(1);
      break;
  }  
  body.style.display = dsp;
  head.innerHTML = hdtxt;
}
