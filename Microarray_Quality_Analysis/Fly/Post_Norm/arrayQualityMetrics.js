// (C) Wolfgang Huber 2010-2011

// Script parameters - these are set up by R in the function 'writeReport' when copying the 
//   template for this script from arrayQualityMetrics/inst/scripts into the report.

var highlightInitial = [ false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ];
var arrayMetadata    = [ [ "1", "Hind_Gut_1", "GSM188072.CEL.gz", "Hind_Gut", "Hind_Gut_1", "HindGut", "04/25/06 08:07:18" ], [ "2", "Hind_Gut_2", "GSM188073.CEL.gz", "Hind_Gut", "Hind_Gut_2", "HindGut", "04/25/06 08:00:53" ], [ "3", "Hind_Gut_3", "GSM188074.CEL.gz", "Hind_Gut", "Hind_Gut_3", "HindGut", "04/25/06 08:26:28" ], [ "4", "Hind_Gut_4", "GSM188075.CEL.gz", "Hind_Gut", "Hind_Gut_4", "HindGut", "04/25/06 07:41:46" ], [ "5", "Mid_Gut_1", "GSM188076.CEL.gz", "Mid_Gut", "Mid_Gut_1", "MidGut", "04/25/06 07:48:08" ], [ "6", "Mid_Gut_2", "GSM188077.CEL.gz", "Mid_Gut", "Mid_Gut_2", "MidGut", "04/25/06 07:54:30" ], [ "7", "Mid_Gut_3", "GSM188078.CEL.gz", "Mid_Gut", "Mid_Gut_3", "MidGut", "04/25/06 08:13:41" ], [ "8", "Mid_Gut_4", "GSM188079.CEL.gz", "Mid_Gut", "Mid_Gut_4", "MidGut", "04/25/06 08:20:04" ], [ "9", "Acc_Gland_1", "GSM188080.CEL.gz", "Acc_Gland", "Acc_Gland_1", "AccGland", "11/14/06 12:19:22" ], [ "10", "Acc_Gland_2", "GSM188081.CEL.gz", "Acc_Gland", "Acc_Gland_2", "AccGland", "11/16/06 12:34:00" ], [ "11", "Acc_Gland_3", "GSM188082.CEL.gz", "Acc_Gland", "Acc_Gland_3", "AccGland", "11/16/06 12:21:09" ], [ "12", "Acc_Gland_4", "GSM188083.CEL.gz", "Acc_Gland", "Acc_Gland_4", "AccGland", "11/16/06 12:27:36" ], [ "13", "Brain_1", "GSM188084.CEL.gz", "Brain", "Brain_1", "Brain", "07/31/06 12:57:03" ], [ "14", "Brain_2", "GSM188085.CEL.gz", "Brain", "Brain_2", "Brain", "07/31/06 12:30:45" ], [ "15", "Brain_3", "GSM188086.CEL.gz", "Brain", "Brain_3", "Brain", "07/31/06 14:08:57" ], [ "16", "Brain_4", "GSM188087.CEL.gz", "Brain", "Brain_4", "Brain", "07/31/06 14:15:31" ], [ "17", "Crop_1", "GSM188088.CEL.gz", "Crop", "Crop_1", "Crop", "02/27/07 12:56:11" ], [ "18", "Crop_2", "GSM188089.CEL.gz", "Crop", "Crop_2", "Crop", "02/27/07 13:02:39" ], [ "19", "Crop_3", "GSM188090.CEL.gz", "Crop", "Crop_3", "Crop", "02/27/07 13:09:02" ], [ "20", "Crop_4", "GSM188091.CEL.gz", "Crop", "Crop_4", "Crop", "02/27/07 13:15:32" ], [ "21", "Head_1", "GSM188096.CEL.gz", "Head", "Head_1", "Head", "07/31/06 12:37:18" ], [ "22", "Head_2", "GSM188097.CEL.gz", "Head", "Head_2", "Head", "07/31/06 12:43:54" ], [ "23", "Head_3", "GSM188098.CEL.gz", "Head", "Head_3", "Head", "07/31/06 13:16:38" ], [ "24", "Head_4", "GSM188099.CEL.gz", "Head", "Head_4", "Head", "07/31/06 14:28:42" ], [ "25", "Ovary_1", "GSM188104.CEL.gz", "Ovary", "Ovary_1", "Ovary", "09/14/06 13:49:45" ], [ "26", "Ovary_2", "GSM188105.CEL.gz", "Ovary", "Ovary_2", "Ovary", "09/14/06 15:20:07" ], [ "27", "Ovary_3", "GSM188106.CEL.gz", "Ovary", "Ovary_3", "Ovary", "09/14/06 14:30:02" ], [ "28", "Ovary_4", "GSM188107.CEL.gz", "Ovary", "Ovary_4", "Ovary", "09/14/06 14:23:28" ], [ "29", "Whole_1", "GSM188112.CEL.gz", "Whole", "Whole_1", "Whole", "07/31/06 12:50:33" ], [ "30", "Whole_2", "GSM188113.CEL.gz", "Whole", "Whole_2", "Whole", "07/31/06 13:03:38" ], [ "31", "Whole_3", "GSM188114.CEL.gz", "Whole", "Whole_3", "Whole", "07/31/06 13:10:13" ], [ "32", "Whole_4", "GSM188115.CEL.gz", "Whole", "Whole_4", "Whole", "07/31/06 14:22:07" ], [ "33", "Salv_Gland_1", "GSM301713.CEL.gz", "Salv_Gland", "Salv_Gland_1", "SalvGland", "06/19/08 12:47:01" ], [ "34", "Salv_Gland_2", "GSM301714.CEL.gz", "Salv_Gland", "Salv_Gland_2", "SalvGland", "06/19/08 13:13:58" ], [ "35", "Salv_Gland_3", "GSM301715.CEL.gz", "Salv_Gland", "Salv_Gland_3", "SalvGland", "06/19/08 13:07:25" ], [ "36", "Salv_Gland_4", "GSM301716.CEL.gz", "Salv_Gland", "Salv_Gland_4", "SalvGland", "06/19/08 13:00:53" ], [ "37", "Carcass_1", "GSM348441.CEL.gz", "Carcass", "Carcass_1", "Carcass", "05/15/07 12:56:00" ], [ "38", "Carcass_2", "GSM348442.CEL.gz", "Carcass", "Carcass_2", "Carcass", "05/15/07 13:02:24" ], [ "39", "Carcass_3", "GSM348443.CEL.gz", "Carcass", "Carcass_3", "Carcass", "05/15/07 13:08:49" ], [ "40", "Carcass_4", "GSM348444.CEL.gz", "Carcass", "Carcass_4", "Carcass", "05/15/07 13:15:11" ], [ "41", "Spermat_Mated_1", "GSM348461.CEL.gz", "Spermat_Mated", "Spermat_Mated_1", "SpermatMated", "08/20/08 13:46:31" ], [ "42", "Spermat_Mated_2", "GSM348462.CEL.gz", "Spermat_Mated", "Spermat_Mated_2", "SpermatMated", "08/20/08 12:24:10" ], [ "43", "Spermat_Mated_3", "GSM348463.CEL.gz", "Spermat_Mated", "Spermat_Mated_3", "SpermatMated", "08/20/08 12:31:46" ], [ "44", "Spermat_Mated_4", "GSM348464.CEL.gz", "Spermat_Mated", "Spermat_Mated_4", "SpermatMated", "08/20/08 12:39:25" ], [ "45", "Spermat_Virg_1", "GSM348465.CEL.gz", "Spermat_Virg", "Spermat_Virg_1", "SpermatVirg", "08/20/08 12:47:02" ], [ "46", "Spermat_Virg_2", "GSM348466.CEL.gz", "Spermat_Virg", "Spermat_Virg_2", "SpermatVirg", "08/20/08 13:09:57" ], [ "47", "Spermat_Virg_3", "GSM348467.CEL.gz", "Spermat_Virg", "Spermat_Virg_3", "SpermatVirg", "08/20/08 12:54:36" ], [ "48", "Spermat_Virg_4", "GSM348468.CEL.gz", "Spermat_Virg", "Spermat_Virg_4", "SpermatVirg", "08/20/08 13:02:14" ], [ "49", "Fatbody_1", "GSM460226.CEL.gz", "Fatbody", "Fatbody_1", "Fatbody", "12/10/08 14:42:10" ], [ "50", "Fatbody_2", "GSM460227.CEL.gz", "Fatbody", "Fatbody_2", "Fatbody", "12/10/08 14:48:38" ], [ "51", "Fatbody_3", "GSM460228.CEL.gz", "Fatbody", "Fatbody_3", "Fatbody", "12/10/08 14:55:06" ], [ "52", "Fatbody_4", "GSM460229.CEL.gz", "Fatbody", "Fatbody_4", "Fatbody", "12/10/08 15:01:36" ], [ "53", "Eye_1", "GSM460230.CEL.gz", "Eye", "Eye_1", "Eye", "05/13/09 15:15:15" ], [ "54", "Eye_2", "GSM460231.CEL.gz", "Eye", "Eye_2", "Eye", "05/13/09 15:08:48" ], [ "55", "Eye_3", "GSM460232.CEL.gz", "Eye", "Eye_3", "Eye", "05/13/09 15:02:19" ], [ "56", "Eye_4", "GSM460233.CEL.gz", "Eye", "Eye_4", "Eye", "05/13/09 20:43:48" ], [ "57", "Heart_1", "GSM460234.CEL.gz", "Heart", "Heart_1", "Heart", "05/13/09 13:01:28" ], [ "58", "Heart_2", "GSM460235.CEL.gz", "Heart", "Heart_2", "Heart", "05/13/09 12:54:57" ], [ "59", "Heart_3", "GSM460236.CEL.gz", "Heart", "Heart_3", "Heart", "05/13/09 12:48:25" ], [ "60", "Heart_4", "GSM460237.CEL.gz", "Heart", "Heart_4", "Heart", "05/13/09 12:41:54" ], [ "61", "Ejac_Duct_1", "GSM460238.CEL.gz", "Ejac_Duct", "Ejac_Duct_1", "EjacDuct", "09/29/09 19:36:33" ], [ "62", "Ejac_Duct_2", "GSM460239.CEL.gz", "Ejac_Duct", "Ejac_Duct_2", "EjacDuct", "09/29/09 20:15:17" ], [ "63", "Ejac_Duct_3", "GSM460240.CEL.gz", "Ejac_Duct", "Ejac_Duct_3", "EjacDuct", "09/29/09 20:21:43" ], [ "64", "Ejac_Duct_4", "GSM460241.CEL.gz", "Ejac_Duct", "Ejac_Duct_4", "EjacDuct", "09/29/09 19:55:48" ], [ "65", "Trachea_1", "GSM945129_VC5Dros2adtrac1.CEL.gz", "Trachea", "Trachea_1", "Trachea", "05/18/10 14:20:35" ], [ "66", "Trachea_2", "GSM945130_VC5Dros2adtrac2.CEL.gz", "Trachea", "Trachea_2", "Trachea", "05/18/10 14:13:58" ], [ "67", "Trachea_3", "GSM945131_VC5Dros2adtrac3.CEL.gz", "Trachea", "Trachea_3", "Trachea", "05/18/10 14:27:11" ], [ "68", "Trachea_4", "GSM945132_VC5Dros2adtrac4.CEL.gz", "Trachea", "Trachea_4", "Trachea", "05/18/10 13:54:25" ], [ "69", "Muscle_1", "GSM945133_VC5Dros2adtracmuscle1.CEL.gz", "Muscle", "Muscle_1", "Muscle", "05/18/10 15:57:13" ], [ "70", "Muscle_2", "GSM945134_VC5Dros2adtracmuscle2.CEL.gz", "Muscle", "Muscle_2", "Muscle", "05/18/10 16:03:39" ], [ "71", "Muscle_3", "GSM945135_VC5Dros2adtracmuscle3.CEL.gz", "Muscle", "Muscle_3", "Muscle", "05/18/10 15:50:45" ], [ "72", "Muscle_4", "GSM945136_VC5Dros2adtracmuscle4.CEL.gz", "Muscle", "Muscle_4", "Muscle", "05/18/10 16:10:16" ], [ "73", "Wings_1", "GSM945137_VC5Dros2adwings1.CEL.gz", "Wings", "Wings_1", "Wings", "05/18/10 15:24:46" ], [ "74", "Wings_2", "GSM945138_VC5Dros2adwings2.CEL.gz", "Wings", "Wings_2", "Wings", "05/18/10 15:31:14" ], [ "75", "Wings_3", "GSM945139_VC5Dros2adwings3.CEL.gz", "Wings", "Wings_3", "Wings", "05/18/10 15:44:18" ], [ "76", "Wings_4", "GSM945140_VC5Dros2adwings4.CEL.gz", "Wings", "Wings_4", "Wings", "05/18/10 15:37:45" ], [ "77", "Spermat_Mated_R_1", "GSM945141_VC5Dros2adfmsm1.CEL.gz", "Spermat_Mated_R", "Spermat_Mated_R_1", "SperMatedR", "05/18/10 14:07:25" ], [ "78", "Spermat_Mated_R_2", "GSM945142_VC5Dros2adfmsm2.CEL.gz", "Spermat_Mated_R", "Spermat_Mated_R_2", "SperMatedR", "05/18/10 14:00:51" ], [ "79", "Spermat_Mated_R_3", "GSM945143_VC5Dros2adfmsm3.CEL.gz", "Spermat_Mated_R", "Spermat_Mated_R_3", "SperMatedR", "05/18/10 13:47:51" ], [ "80", "Spermat_Mated_R_4", "GSM945144_VC5Dros2adfmsm4.CEL.gz", "Spermat_Mated_R", "Spermat_Mated_R_4", "SperMatedR", "05/18/10 13:41:14" ] ];
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
