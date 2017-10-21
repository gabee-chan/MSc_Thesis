// (C) Wolfgang Huber 2010-2011

// Script parameters - these are set up by R in the function 'writeReport' when copying the 
//   template for this script from arrayQualityMetrics/inst/scripts into the report.

var highlightInitial = [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, false, true, true, false, false, true, true, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ];
var arrayMetadata    = [ [ "1", "Kidney 1", "GSM279060.CEL.gz", "kidney_GSE11045", "A", "02/27/08 11:46:47" ], [ "2", "Kidney 2", "GSM279061.CEL.gz", "kidney_GSE11045", "A", "02/27/08 11:58:00" ], [ "3", "Kidney 3", "GSM279062.CEL.gz", "kidney_GSE11045", "A", "02/27/08 12:09:05" ], [ "4", "T84 control", "GSM286608.CEL.gz", "colon_GSE11345", "B", "08/14/07 12:16:05" ], [ "5", "T84 IL22", "GSM286609.CEL.gz", "colon_GSE11345", "B", "08/14/07 12:40:54" ], [ "6", "T84 IL17", "GSM286610.CEL.gz", "colon_GSE11345", "B", "08/14/07 12:27:14" ], [ "7", "Subject 1; two months before the beginning of heating experiment", "GSM313315.CEL.gz", "muscle_GSE12474", "C", "05/18/07 12:00:20" ], [ "8", "Subject 2; two months before the beginning of heating experiment", "GSM313316.CEL.gz", "muscle_GSE12474", "C", "05/18/07 12:13:42" ], [ "9", "Subject 4; two months before the beginning of heating experiment", "GSM313317.CEL.gz", "muscle_GSE12474", "C", "05/19/07 11:34:36" ], [ "10", "Subject 5; two months before the beginning of heating experiment", "GSM313318.CEL.gz", "muscle_GSE12474", "C", "05/19/07 11:47:20" ], [ "11", "Subject 1; 1 day after the end of heating experiment", "GSM313319.CEL.gz", "muscle_GSE12474", "C", "05/18/07 12:25:53" ], [ "12", "Subject 2; 1 day after the end of heating experiment", "GSM313320.CEL.gz", "muscle_GSE12474", "C", "05/18/07 12:38:52" ], [ "13", "Subject 3; 1 day after the end of heating experiment", "GSM313321.CEL.gz", "muscle_GSE12474", "C", "05/18/07 13:42:52" ], [ "14", "Subject 4; 1 day after the end of heating experiment", "GSM313322.CEL.gz", "muscle_GSE12474", "C", "05/19/07 11:58:56" ], [ "15", "Subject 5; 1 day after the end of heating experiment", "GSM313323.CEL.gz", "muscle_GSE12474", "C", "05/19/07 12:10:59" ], [ "16", "Subject 3; two months before the beginning of heating experiment", "GSM313324.CEL.gz", "muscle_GSE12474", "C", "05/18/07 13:31:04" ], [ "17", "liver 1", "GSM339557.CEL.gz", "liver_GSE13471", "D", "01/25/05 10:58:27" ], [ "18", "liver 2", "GSM339558.CEL.gz", "liver_GSE13471", "D", "01/25/05 11:36:29" ], [ "19", "liver 3", "GSM339559.CEL.gz", "liver_GSE13471", "D", "01/27/05 12:01:24" ], [ "20", "liver 4", "GSM339560.CEL.gz", "liver_GSE13471", "D", "01/27/05 12:26:27" ], [ "21", "liver 5", "GSM339561.CEL.gz", "liver_GSE13471", "D", "01/05/05 13:18:08" ], [ "22", "Insulin resistant patient 1 - subcutaneous adipose tissue", "GSM395774.CEL.gz", "adipose_GSE15773", "E", "11/10/05 12:25:21" ], [ "23", "Insulin resistant patient 3 - subcutaneous adipose tissue", "GSM395775.CEL.gz", "adipose_GSE15773", "E", "06/13/06 14:47:39" ], [ "24", "Insulin resistant patient 4 - subcutaneous adipose tissue", "GSM395776.CEL.gz", "adipose_GSE15773", "E", "10/02/07 11:43:17" ], [ "25", "Insulin resistant patient 5 - subcutaneous adipose tissue", "GSM395777.CEL.gz", "adipose_GSE15773", "E", "10/02/07 11:31:49" ], [ "26", "Insulin sensitive patient 1 - subcutaneous adipose tissue", "GSM395778.CEL.gz", "adipose_GSE15773", "E", "05/26/06 14:15:43" ], [ "27", "Insulin sensitive patient 2 - subcutaneous adipose tissue", "GSM395779.CEL.gz", "adipose_GSE15773", "E", "10/02/07 11:09:20" ], [ "28", "Insulin sensitive patient 3 - subcutaneous adipose tissue", "GSM395780.CEL.gz", "adipose_GSE15773", "E", "10/02/07 10:21:04" ], [ "29", "Insulin sensitive patient 4 - subcutaneous adipose tissue", "GSM395781.CEL.gz", "adipose_GSE15773", "E", "10/02/07 12:08:00" ], [ "30", "Insulin sensitive patient 5 - subcutaneous adipose tissue", "GSM395782.CEL.gz", "adipose_GSE15773", "E", "10/03/07 11:34:31" ], [ "31", "Insulin resistant patient 1 - omental adipose tissue", "GSM395783.CEL.gz", "adipose_GSE15773", "E", "11/10/05 12:00:26" ], [ "32", "Insulin resistant patient 2 - omental adipose tissue", "GSM395784.CEL.gz", "adipose_GSE15773", "E", "06/13/06 13:30:48" ], [ "33", "Insulin resistant patient 3 - omental adipose tissue", "GSM395785.CEL.gz", "adipose_GSE15773", "E", "06/13/06 14:35:00" ], [ "34", "Insulin resistant patient 4 - omental adipose tissue", "GSM395786.CEL.gz", "adipose_GSE15773", "E", "09/28/07 14:10:08" ], [ "35", "Insulin resistant patient 5 - omental adipose tissue", "GSM395787.CEL.gz", "adipose_GSE15773", "E", "09/28/07 12:30:56" ], [ "36", "Insulin sensitive patient 1 - omental adipose tissue", "GSM395788.CEL.gz", "adipose_GSE15773", "E", "05/26/06 14:03:13" ], [ "37", "Insulin sensitive patient 2 - omental adipose tissue", "GSM395789.CEL.gz", "adipose_GSE15773", "E", "09/28/07 13:07:30" ], [ "38", "Insulin sensitive patient 3 - omental adipose tissue", "GSM395790.CEL.gz", "adipose_GSE15773", "E", "09/28/07 13:54:09" ], [ "39", "Insulin sensitive patient 4 - omental adipose tissue", "GSM395791.CEL.gz", "adipose_GSE15773", "E", "09/28/07 11:32:10" ], [ "40", "Insulin sensitive patient 5 - omental adipose tissue", "GSM395792.CEL.gz", "adipose_GSE15773", "E", "10/03/07 11:57:46" ], [ "41", "normal human bronchial epithelial cell line treated with 5-AZA rep 1", "GSM459743.CEL.gz", "lung_GSE18454", "F", "07/31/07 12:18:10" ], [ "42", "normal human bronchial epithelial cell line treated with 5-AZA rep 2", "GSM459744.CEL.gz", "lung_GSE18454", "F", "07/31/07 11:22:10" ], [ "43", "normal human bronchial epithelial cell line treated with 5-AZA rep 3", "GSM459745.CEL.gz", "lung_GSE18454", "F", "07/31/07 13:46:06" ], [ "44", "normal human bronchial epithelial cell line control rep 1", "GSM459746.CEL.gz", "lung_GSE18454", "F", "07/31/07 11:55:52" ], [ "45", "normal human bronchial epithelial cell line control rep 2", "GSM459747.CEL.gz", "lung_GSE18454", "F", "07/31/07 11:33:30" ], [ "46", "normal human bronchial epithelial cell line control rep 3", "GSM459748.CEL.gz", "lung_GSE18454", "F", "07/31/07 12:52:05" ], [ "47", "normal human small airway epithelial cell line treated with 5-AZA rep 1", "GSM459749.CEL.gz", "lung_GSE18454", "F", "07/31/07 13:03:17" ], [ "48", "normal human small airway epithelial cell line treated with 5-AZA rep 2", "GSM459750.CEL.gz", "lung_GSE18454", "F", "07/31/07 11:10:52" ], [ "49", "normal human small airway epithelial cell line treated with 5-AZA rep 3", "GSM459751.CEL.gz", "lung_GSE18454", "F", "07/31/07 12:29:21" ], [ "50", "normal human small airway epithelial cell line control rep 1", "GSM459752.CEL.gz", "lung_GSE18454", "F", "07/31/07 11:44:38" ], [ "51", "normal human small airway epithelial cell line control rep 2", "GSM459753.CEL.gz", "lung_GSE18454", "F", "07/31/07 12:40:44" ], [ "52", "normal human small airway epithelial cell line control rep 3", "GSM459754.CEL.gz", "lung_GSE18454", "F", "07/31/07 12:06:57" ], [ "53", "DLBCL ECs, case 1", "GSM497078_0064-1.CEL.gz", "lymph_GSE19882", "G", "06/25/05 12:49:33" ], [ "54", "DLBCL ECs, case 2", "GSM497079_0064-2.CEL.gz", "lymph_GSE19882", "G", "09/30/05 10:36:55" ], [ "55", "reactive lymph node-derived ECs, case1", "GSM497080_0064-3.CEL.gz", "lymph_GSE19882", "G", "08/17/05 11:26:27" ], [ "56", "PTL ECs", "GSM497081_0064-4.CEL.gz", "lymph_GSE19882", "G", "08/17/05 12:11:28" ], [ "57", "reactive lymph node-derived ECs, case2", "GSM497082_0064-5.CEL.gz", "lymph_GSE19882", "G", "09/30/05 10:51:12" ], [ "58", "thyroid_normal_1", "GSM85215.CEL.gz", "thyroid_GSE3678", "H", "04/13/04 09:45:42" ], [ "59", "thyroid_normal_3", "GSM85216.CEL.gz", "thyroid_GSE3678", "H", "06/11/04 12:49:10" ], [ "60", "thyroid_normal_5", "GSM85217.CEL.gz", "thyroid_GSE3678", "H", "06/30/04 09:55:38" ], [ "61", "thyroid_normal_7", "GSM85218.CEL.gz", "thyroid_GSE3678", "H", "09/03/04 12:02:39" ], [ "62", "thyroid_tumor_2", "GSM85219.CEL.gz", "thyroid_GSE3678", "H", "09/14/04 13:35:41" ], [ "63", "thyroid_tumor_4", "GSM85220.CEL.gz", "thyroid_GSE3678", "H", "09/03/04 12:46:36" ], [ "64", "thyroid_tumor_6", "GSM85221.CEL.gz", "thyroid_GSE3678", "H", "09/03/04 14:11:11" ], [ "65", "thyroid_normal_1_dup", "GSM85222.CEL.gz", "thyroid_GSE3678", "H", "04/13/04 09:31:13" ], [ "66", "thyroid_normal_3_dup", "GSM85223.CEL.gz", "thyroid_GSE3678", "H", "06/15/04 12:29:18" ], [ "67", "thyroid_normal_5_dup", "GSM85224.CEL.gz", "thyroid_GSE3678", "H", "06/30/04 10:07:57" ], [ "68", "thyroid_normal_7_dup", "GSM85225.CEL.gz", "thyroid_GSE3678", "H", "09/03/04 12:31:02" ], [ "69", "thyroid_tumor_2_dup", "GSM85226.CEL.gz", "thyroid_GSE3678", "H", "09/03/04 12:18:11" ], [ "70", "thyroid_tumor_4_dup", "GSM85227.CEL.gz", "thyroid_GSE3678", "H", "09/03/04 13:58:30" ], [ "71", "thyroid_tumor_6_dup", "GSM85228.CEL.gz", "thyroid_GSE3678", "H", "09/14/04 13:22:42" ], [ "72", "Cumulus cells from oocyte at MII stage , biological rep1", "GSM992854_CCMII1.CEL.gz", "ovary_GSE40400", "I", "2011-12-02T05:45:08Z" ], [ "73", "Cumulus cells from oocyte at MII stage , biological rep2", "GSM992855_CCMII2.CEL.gz", "ovary_GSE40400", "I", "2011-12-02T03:51:58Z" ], [ "74", "Cumulus cells from oocyte at MII stage , biological rep3", "GSM992856_CCMII3.CEL.gz", "ovary_GSE40400", "I", "2011-12-02T05:00:12Z" ], [ "75", "Cumulus cells from oocyte at MI stage , biological rep1", "GSM992857_CCMI1.CEL.gz", "ovary_GSE40400", "I", "2011-12-31T02:22:48Z" ], [ "76", "Cumulus cells from oocyte at MI stage , biological rep2", "GSM992858_CCMI2.CEL.gz", "ovary_GSE40400", "I", "2011-12-31T02:33:54Z" ], [ "77", "Cumulus cells from oocyte at MI stage , biological rep3", "GSM992859_CCMI3.CEL.gz", "ovary_GSE40400", "I", "2011-12-31T02:44:53Z" ], [ "78", "Acromegaly case A2", "GSM100888.CEL.gz", "blood_GSE4488", "J", "11/30/05 11:03:24" ], [ "79", "Acromegaly case A8", "GSM100889.CEL.gz", "blood_GSE4488", "J", "12/16/05 11:21:58" ], [ "80", "Acromegaly case A16", "GSM100890.CEL.gz", "blood_GSE4488", "J", "12/01/05 12:28:17" ], [ "81", "Acromegaly case A20", "GSM100891.CEL.gz", "blood_GSE4488", "J", "11/30/05 11:41:57" ], [ "82", "Acromegaly control C2", "GSM100892.CEL.gz", "blood_GSE4488", "J", "12/01/05 12:40:46" ], [ "83", "Acromegaly control C4", "GSM100893.CEL.gz", "blood_GSE4488", "J", "12/01/05 12:16:09" ], [ "84", "Acromegaly case A22", "GSM100894.CEL.gz", "blood_GSE4488", "J", "11/30/05 10:50:31" ], [ "85", "Acromegaly control C8", "GSM100895.CEL.gz", "blood_GSE4488", "J", "11/30/05 11:16:19" ], [ "86", "Acromegaly case A2_dup", "GSM100896.CEL.gz", "blood_GSE4488", "J", "11/30/05 10:37:38" ], [ "87", "Acromegaly case A8_dup", "GSM100897.CEL.gz", "blood_GSE4488", "J", "12/01/05 12:03:40" ], [ "88", "Acromegaly case A16_dup", "GSM100898.CEL.gz", "blood_GSE4488", "J", "12/16/05 11:09:37" ], [ "89", "Acromegaly case A20_dup", "GSM100899.CEL.gz", "blood_GSE4488", "J", "11/30/05 11:29:06" ], [ "90", "Acromegaly control C2_dup", "GSM100900.CEL.gz", "blood_GSE4488", "J", "12/16/05 10:19:13" ], [ "91", "Acromegaly control C4_dup", "GSM100901.CEL.gz", "blood_GSE4488", "J", "12/01/05 13:24:46" ], [ "92", "Acromegaly case A22_dup", "GSM100902.CEL.gz", "blood_GSE4488", "J", "12/16/05 10:32:09" ], [ "93", "Acromegaly control C8_dup", "GSM100903.CEL.gz", "blood_GSE4488", "J", "12/16/05 10:57:18" ], [ "94", "Control matched sample pair brain dorsolateral prefrontal cortex BA9_M #1", "GSM1319050_1-c.CEL.gz", "brain_GSE54567", "K", "11/10/09 13:23:46" ], [ "95", "Control matched sample pair brain dorsolateral prefrontal cortex BA9_M #2", "GSM1319051_2-c.CEL.gz", "brain_GSE54567", "K", "11/10/09 13:12:49" ], [ "96", "Control matched sample pair brain dorsolateral prefrontal cortex BA9_M #4", "GSM1319052_4-c.CEL.gz", "brain_GSE54567", "K", "11/10/09 14:08:36" ], [ "97", "Control matched sample pair brain dorsolateral prefrontal cortex BA9_M #7", "GSM1319053_7-c.CEL.gz", "brain_GSE54567", "K", "11/13/09 11:04:57" ], [ "98", "Control matched sample pair brain dorsolateral prefrontal cortex BA9_M #11", "GSM1319054_11-c.CEL.gz", "brain_GSE54567", "K", "11/18/09 15:37:02" ], [ "99", "Control matched sample pair brain dorsolateral prefrontal cortex BA9_M #15", "GSM1319055_15-c.CEL.gz", "brain_GSE54567", "K", "11/17/09 14:15:51" ], [ "100", "Control matched sample pair brain dorsolateral prefrontal cortex BA9_M #18", "GSM1319056_18-c.CEL.gz", "brain_GSE54567", "K", "11/13/09 11:27:24" ], [ "101", "Control matched sample pair brain dorsolateral prefrontal cortex BA9_M #20", "GSM1319057_20-c.CEL.gz", "brain_GSE54567", "K", "11/18/09 11:17:46" ], [ "102", "Control matched sample pair brain dorsolateral prefrontal cortex BA9_M #22", "GSM1319058_22-c.CEL.gz", "brain_GSE54567", "K", "11/26/09 14:57:29" ], [ "103", "Control matched sample pair brain dorsolateral prefrontal cortex BA9_M #25", "GSM1319059_25-c.CEL.gz", "brain_GSE54567", "K", "11/19/09 17:02:00" ], [ "104", "Control matched sample pair brain dorsolateral prefrontal cortex BA9_M #26", "GSM1319060_26-c.CEL.gz", "brain_GSE54567", "K", "11/24/09 14:21:18" ], [ "105", "Control matched sample pair brain dorsolateral prefrontal cortex BA9_M #27", "GSM1319061_27-c.CEL.gz", "brain_GSE54567", "K", "11/26/09 12:16:44" ], [ "106", "Control matched sample pair brain dorsolateral prefrontal cortex BA9_M #29", "GSM1319062_29-c.CEL.gz", "brain_GSE54567", "K", "11/26/09 11:31:10" ], [ "107", "Control matched sample pair brain dorsolateral prefrontal cortex BA9_M #30", "GSM1319063_30-c.CEL.gz", "brain_GSE54567", "K", "11/24/09 16:03:40" ], [ "108", "MDD matched sample pair brain dorsolateral prefrontal cortex BA9_M #1", "GSM1319064_1-d.CEL.gz", "brain_GSE54567", "K", "11/10/09 12:03:38" ], [ "109", "MDD matched sample pair brain dorsolateral prefrontal cortex BA9_M #2", "GSM1319065_2-d.CEL.gz", "brain_GSE54567", "K", "11/17/09 16:24:15" ], [ "110", "MDD matched sample pair brain dorsolateral prefrontal cortex BA9_M #4", "GSM1319066_4-d.CEL.gz", "brain_GSE54567", "K", "11/10/09 10:56:28" ], [ "111", "MDD matched sample pair brain dorsolateral prefrontal cortex BA9_M #7", "GSM1319067_7-d.CEL.gz", "brain_GSE54567", "K", "11/19/09 12:11:32" ], [ "112", "MDD matched sample pair brain dorsolateral prefrontal cortex BA9_M #11", "GSM1319068_11-d.CEL.gz", "brain_GSE54567", "K", "11/17/09 11:00:45" ], [ "113", "MDD matched sample pair brain dorsolateral prefrontal cortex BA9_M #15", "GSM1319069_15-d.CEL.gz", "brain_GSE54567", "K", "11/18/09 11:56:19" ], [ "114", "MDD matched sample pair brain dorsolateral prefrontal cortex BA9_M #18", "GSM1319070_18-d.CEL.gz", "brain_GSE54567", "K", "12/01/09 11:07:37" ], [ "115", "MDD matched sample pair brain dorsolateral prefrontal cortex BA9_M #20", "GSM1319071_20-d.CEL.gz", "brain_GSE54567", "K", "11/19/09 13:31:27" ], [ "116", "MDD matched sample pair brain dorsolateral prefrontal cortex BA9_M #22", "GSM1319072_22-d.CEL.gz", "brain_GSE54567", "K", "11/24/09 12:09:45" ], [ "117", "MDD matched sample pair brain dorsolateral prefrontal cortex BA9_M #25", "GSM1319073_25-d.CEL.gz", "brain_GSE54567", "K", "11/24/09 15:18:12" ], [ "118", "MDD matched sample pair brain dorsolateral prefrontal cortex BA9_M #26", "GSM1319074_26-d.CEL.gz", "brain_GSE54567", "K", "11/26/09 12:28:08" ], [ "119", "MDD matched sample pair brain dorsolateral prefrontal cortex BA9_M #27", "GSM1319075_27-d.CEL.gz", "brain_GSE54567", "K", "12/01/09 10:56:08" ], [ "120", "MDD matched sample pair brain dorsolateral prefrontal cortex BA9_M #29", "GSM1319076_29-d.CEL.gz", "brain_GSE54567", "K", "11/24/09 11:58:37" ], [ "121", "MDD matched sample pair brain dorsolateral prefrontal cortex BA9_M #30", "GSM1319077_30-d.CEL.gz", "brain_GSE54567", "K", "11/26/09 12:05:22" ], [ "122", "patients with coronary heart disease, biological rep1", "GSM1830987_120720-120038C_2-1_HG-U133_Plus_2_.CEL.gz", "heart_GSE71226", "L", "2012-07-20T17:58:21Z" ], [ "123", "patients with coronary heart disease, biological rep2", "GSM1830988_120315-120038A_2-2_HG-U133_Plus_2_.CEL.gz", "heart_GSE71226", "L", "2012-03-15T20:22:48Z" ], [ "124", "patients with coronary heart disease, biological rep3", "GSM1830989_120720-120038C_2-3_HG-U133_Plus_2_.CEL.gz", "heart_GSE71226", "L", "2012-07-20T18:09:31Z" ], [ "125", "healthy people, biological rep1", "GSM1830990_120315-120038A_3-1_HG-U133_Plus_2_.CEL.gz", "heart_GSE71226", "L", "2012-03-15T20:11:33Z" ], [ "126", "healthy people, biological rep2", "GSM1830991_120315-120038A_3-2_HG-U133_Plus_2_.CEL.gz", "heart_GSE71226", "L", "2012-03-15T20:34:09Z" ], [ "127", "healthy people, biological rep3", "GSM1830992_120315-120038A_3-3_HG-U133_Plus_2_.CEL.gz", "heart_GSE71226", "L", "2012-03-15T21:22:41Z" ], [ "128", "Involution_1", "GSM2063253_af1c1269-25-involhuman-041107.CEL.gz", "breast_GSE77978", "M", "11/05/07 14:44:05" ], [ "129", "Involution_2", "GSM2063254_af1c2550-33-2-080210.CEL.gz", "breast_GSE77978", "M", "02/09/10 11:19:45" ], [ "130", "Involution_3", "GSM2063255_af1c2550-34-3-080210.CEL.gz", "breast_GSE77978", "M", "02/09/10 11:30:56" ], [ "131", "Involution_4", "GSM2063256_af1c2550-35-4-080210.CEL.gz", "breast_GSE77978", "M", "02/09/10 11:42:15" ], [ "132", "Mastitis", "GSM2063257_af1c2550-36-5-080210.CEL.gz", "breast_GSE77978", "M", "02/09/10 11:53:21" ], [ "133", "Involution_5", "GSM2063258_af1c718-1-involution-170806.CEL.gz", "breast_GSE77978", "M", "08/18/06 11:32:03" ], [ "134", "Lactation_1", "GSM2063259_af1c718-2-mastitis-170806.CEL.gz", "breast_GSE77978", "M", "08/18/06 11:43:15" ], [ "135", "Colostrum_1", "GSM2063260_af1c718-3-colostrum-170806.CEL.gz", "breast_GSE77978", "M", "08/18/06 11:54:28" ], [ "136", "Lactation_2", "GSM2063261_af1c718-4-milk-170806.CEL.gz", "breast_GSE77978", "M", "08/18/06 12:05:34" ], [ "137", "Lactation_3", "GSM2063262_AFFS320-1-milk-070705.CEL.gz", "breast_GSE77978", "M", "07/07/05 11:58:32" ], [ "138", "Colostrum_2", "GSM2063263_AFFS320-2-colostrum-070705.CEL.gz", "breast_GSE77978", "M", "07/07/05 12:33:58" ], [ "139", "Cadmium_00hr_rep1", "GSM251620.CEL.gz", "prostate_GSE9951", "N", "09/22/05 14:35:07" ], [ "140", "Cadmium_00hr_rep2", "GSM251621.CEL.gz", "prostate_GSE9951", "N", "09/22/05 14:52:54" ], [ "141", "cadmium_04hr_rep1", "GSM251622.CEL.gz", "prostate_GSE9951", "N", "09/22/05 15:10:48" ], [ "142", "cadmium_08hr_rep1", "GSM251623.CEL.gz", "prostate_GSE9951", "N", "09/22/05 16:00:37" ], [ "143", "cadmium_08hr_rep2", "GSM251624.CEL.gz", "prostate_GSE9951", "N", "09/22/05 16:13:57" ], [ "144", "cadmium_16hr_rep1", "GSM251625.CEL.gz", "prostate_GSE9951", "N", "09/22/05 16:27:31" ], [ "145", "cadmium_16hr_rep2", "GSM251626.CEL.gz", "prostate_GSE9951", "N", "09/22/05 19:08:32" ], [ "146", "cadmium_32hr_rep1", "GSM251627.CEL.gz", "prostate_GSE9951", "N", "09/22/05 16:43:56" ], [ "147", "cadmium_32hr_rep2", "GSM251629.CEL.gz", "prostate_GSE9951", "N", "09/22/05 19:39:32" ], [ "148", "control_00hr_rep1", "GSM251630.CEL.gz", "prostate_GSE9951", "N", "09/22/05 19:53:33" ], [ "149", "control_00hr_rep2", "GSM251633.CEL.gz", "prostate_GSE9951", "N", "09/22/05 20:06:38" ], [ "150", "control_04hr_rep1", "GSM251635.CEL.gz", "prostate_GSE9951", "N", "09/23/05 12:18:51" ], [ "151", "control_04hr_rep2", "GSM251636.CEL.gz", "prostate_GSE9951", "N", "09/23/05 12:31:41" ], [ "152", "control_08hr_rep1", "GSM251637.CEL.gz", "prostate_GSE9951", "N", "09/23/05 11:53:27" ], [ "153", "control_08hr_rep2", "GSM251638.CEL.gz", "prostate_GSE9951", "N", "09/23/05 15:05:58" ], [ "154", "control_16hr_rep1", "GSM251639.CEL.gz", "prostate_GSE9951", "N", "09/23/05 15:20:12" ], [ "155", "control_16hr_rep2", "GSM251640.CEL.gz", "prostate_GSE9951", "N", "09/23/05 15:35:48" ], [ "156", "control_32hr_rep1", "GSM251649.CEL.gz", "prostate_GSE9951", "N", "09/23/05 12:48:38" ], [ "157", "control_32hr_rep2", "GSM251686.CEL.gz", "prostate_GSE9951", "N", "09/23/05 15:58:23" ] ];
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
