const data = {
  practicas: [
    {
      id: 1,
      nombre: "ACTO BIOQUÍMICO",
      ub: 20,
    },
    {
      id: 2,
      nombre: "ACETONURIA.",
      ub: 1,
    },
    {
      id: 4,
      nombre: "ACIDIMETRIA GASTRICA , CURVA DE",
      ub: 3,
    },
    {
      id: 5,
      nombre: "ÁCIDO BASE, Estado Ácido Base (EAB).",
      ub: 15,
    },
    {
      id: 6,
      nombre: "ACTH - HORMONA ADRENOCORTICOTROFINA.",
      ub: 12,
    },
    {
      id: 7,
      nombre: "ADDIS, RECUENTO DE",
      ub: 2,
    },
    {
      id: 9,
      nombre: "ADRENALINA, plasmática (CATECOLAMINA plasmática)",
      ub: 25,
    },
    {
      id: 10,
      nombre: "ADRENALINA, urinaria  (CATECOLAMINA urinaria)",
      ub: 25,
    },
    {
      id: 14,
      nombre: "AGLUTININAS del SISTEMAS ABO.",
      ub: 3,
    },
    {
      id: 15,
      nombre: "ALBUMINA - sérica",
      ub: 1.5,
    },
    {
      id: 16,
      nombre: "ALCOHOL DEHIDROGENASA, ADH.",
      ub: 10,
    },
    {
      id: 17,
      nombre: "ALCOHOL ETÍLICO - sangre (ALCOHOLEMIA)",
      ub: 10,
    },
    {
      id: 18,
      nombre: "ALDOLASA (Ald)",
      ub: 6,
    },
    {
      id: 19,
      nombre: "ALDOSTERONA.",
      ub: 15,
    },
    {
      id: 20,
      nombre: "ALFA FETO PROTEINA (AFP)",
      ub: 10,
    },
    {
      id: 22,
      nombre: "AMILASA - SÉRICA.",
      ub: 4,
    },
    {
      id: 23,
      nombre: "AMILASA - urinaria.",
      ub: 4,
    },
    {
      id: 25,
      nombre:
        "AMINOÁCIDOS FRACCIONADOS (Cromatografía - por fracción) -cualitativo",
      ub: 12.5,
    },
    {
      id: 27,
      nombre:
        "AMINOACIDURIA FRACCIONADA (Cromatografía - por fracción) -cualitativo",
      ub: 12.5,
    },
    {
      id: 28,
      nombre: "AMNIOTICO, LÍQUIDO CELULAS NARANJAS.",
      ub: 1,
    },
    {
      id: 29,
      nombre: "AMNIOTICO, LÍQUIDO (Espectrofotometría - Test de Lisley)",
      ub: 5,
    },
    {
      id: 30,
      nombre: "AMNIOTICO, LÍQUIDO LECITINA - ESFINGOMIELINA.",
      ub: 5,
    },
    {
      id: 31,
      nombre: "AMONEMIA.",
      ub: 20,
    },
    {
      id: 33,
      nombre: "ANGIOTENSINA I",
      ub: 30,
    },
    {
      id: 35,
      nombre: "ANTIBIOGRAMA (ATBG)",
      ub: 6,
    },
    {
      id: 36,
      nombre: "ANTIBIOGRAMA BACILO DE KOCH (7) siete antibióticos.",
      ub: 60,
    },
    {
      id: 40,
      nombre: "ANTICUERPOS ANTIGLOMERULAR , (IFI)",
      ub: 6,
    },
    {
      id: 41,
      nombre: "ANTICUERPOS ANTIMEMBRANA BASAL, (IFI)",
      ub: 6,
    },
    {
      id: 42,
      nombre: "ANTICUERPO ANTIMUSCULO LISO (ASMA), (IFI)",
      ub: 7,
    },
    {
      id: 46,
      nombre: "ANTICUERPOS ANTITIROGLOBULINA (ATG)",
      ub: 10,
    },
    {
      id: 49,
      nombre: "ANTIDESIXIRRIBONUCLEASA - ADNEASA – Anti-DNA.",
      ub: 9,
    },
    {
      id: 51,
      nombre: 'ANTIESTREPTOLISINAS "O" (ASO / ASTO / AELO), cuantitativa',
      ub: 6,
    },
    {
      id: 53,
      nombre: "ANTIFÚNGICOS - PRUEBA DE SENSIBILIDAD",
      ub: 15,
    },
    {
      id: 55,
      nombre: "ANTIMITOCONDRIALES , ANTICUERPOS (AMA)",
      ub: 7,
    },
    {
      id: 56,
      nombre: "ANTINUCLEARES ANTICUERPOS (FAN / ANA / AAN)",
      ub: 7,
    },
    {
      id: 57,
      nombre:
        "ANTITRIPSINA, Alfa 1 (a1 AT) - Líq. Pleural o Mat. Fecal o Sérica - C/U - (por I.D.-Cuantitativa)",
      ub: 10,
    },
    {
      id: 58,
      nombre: "ANTITROMBINA III - con calibración de tres (3) puntos.",
      ub: 15,
    },
    {
      id: 59,
      nombre: "ARSENICO (As) - sérico o urinario.",
      ub: 20,
    },
    {
      id: 60,
      nombre: "ASCORBICO, ÁCIDO  (VITAMINA C)",
      ub: 30,
    },
    {
      id: 63,
      nombre: "ANTICUERPOS ANTI- HIV Y AG P24-HIV AG/AC",
      ub: 11,
    },
    {
      id: 101,
      nombre: "BACILOSCOPIA DIRECTA - ZIEHL NEELSEN (por muestra)",
      ub: 4,
    },
    {
      id: 102,
      nombre: "BACILOSCOPIA, DIRECTA y CULTIVO (por muestra)",
      ub: 10,
    },
    {
      id: 103,
      nombre: "BACILOSCOPIA, (IFI - por muestra)",
      ub: 10,
    },
    {
      id: 104,
      nombre: "BACTERIOLOGIA, DIRECTA (Coloración de Gram)",
      ub: 2,
    },
    {
      id: 105,
      nombre: "BACTERIOLOGICO, DIRECTO-CULTIVO e IDENTIFICACIÓN del GÉRMEN",
      ub: 7,
    },
    {
      id: 107,
      nombre: "BARBITÚRICOS - urinarios.",
      ub: 17.5,
    },
    {
      id: 108,
      nombre: "BENCE- JONES, PROTEINAS de (HPLC / IMF)",
      ub: 30,
    },
    {
      id: 109,
      nombre: "BICARBONATO.",
      ub: 0,
    },
    {
      id: 110,
      nombre: "BILIRRUBINEMIA TOTAL, DIRECTA E INDIRECTA.",
      ub: 1.5,
    },
    {
      id: 111,
      nombre: "BILIRRUBINURIA.",
      ub: 1.5,
    },
    {
      id: 120,
      nombre: "C3 - COMPLEMENTO ",
      ub: 5,
    },
    {
      id: 121,
      nombre: "C4 - COMPLEMENTO",
      ub: 5,
    },
    {
      id: 130,
      nombre: "CADENA LIVIANA KAPPA Y LAMBDA - sérico (IMF)",
      ub: 40,
    },
    {
      id: 131,
      nombre: "CADENA LIVIANA KAPPA Y LAMBDA - urinario (IMF)",
      ub: 40,
    },
    {
      id: 132,
      nombre: "CADMIO (Cd) - urinario.",
      ub: 20,
    },
    {
      id: 133,
      nombre: "CALCEMIA TOTAL (CA)",
      ub: 1.5,
    },
    {
      id: 134,
      nombre: "CALCIO IONICO.",
      ub: 4,
    },
    {
      id: 136,
      nombre: "CALCIO - urinario.",
      ub: 2,
    },
    {
      id: 137,
      nombre: "CALCITONINA - sérica.",
      ub: 16,
    },
    {
      id: 138,
      nombre: "CALCULO - urinario.",
      ub: 12,
    },
    {
      id: 139,
      nombre: "CARBONICO, ANDHIDRICO - (PCO2)",
      ub: 0,
    },
    {
      id: 140,
      nombre: "CARIOTIPO, MAPA CROMOSOMICO.",
      ub: 107,
    },
    {
      id: 141,
      nombre: "CAROTENO BETA - sérico.",
      ub: 22,
    },
    {
      id: 144,
      nombre: "CEA - ANTÍGENO CARCINOEMBRIOGENICO.",
      ub: 12.5,
    },
    {
      id: 148,
      nombre: "CELULAS NEOPLASICAS - líquidos, exudados, trasudados.",
      ub: 9,
    },
    {
      id: 150,
      nombre: "CEREBROSIDOS (Cromatográfico).",
      ub: 0,
    },
    {
      id: 151,
      nombre: "CERULOPLASMINA.",
      ub: 6,
    },
    {
      id: 152,
      nombre: "CETOGENOESTEROIDES - urinarios.",
      ub: 5,
    },
    {
      id: 154,
      nombre: "CETONEMIA.",
      ub: 1.5,
    },
    {
      id: 164,
      nombre: "CITOLOGIA EXFOLIATIVA - VAGINAL HORMONAL (por cada muestra)",
      ub: 5,
    },
    {
      id: 167,
      nombre: "CITRICO, ÁCIDO - líquido seminal (ESTUDIO DEL SEMEN)",
      ub: 10,
    },
    {
      id: 168,
      nombre: "CLORO (Cl) - sérico.",
      ub: 2,
    },
    {
      id: 169,
      nombre: "COAGULACION, TIEMPO DE",
      ub: 1,
    },
    {
      id: 170,
      nombre: "COAGULO, RETRACCION DEL",
      ub: 1,
    },
    {
      id: 171,
      nombre: "COAGULOGRAMA",
      ub: 6,
    },
    {
      id: 172,
      nombre: "COBRE (Cu) - sérico.",
      ub: 20,
    },
    {
      id: 173,
      nombre: "COCAINA (Inmunocromatografía/Cromatográfico)",
      ub: 17.5,
    },
    {
      id: 174,
      nombre: "COLESTEROL TOTAL",
      ub: 1.5,
    },
    {
      id: 176,
      nombre: "COLONIAS, RECUENTO DE.",
      ub: 2,
    },
    {
      id: 177,
      nombre: "COMPATIBILIDAD - sangre materna.",
      ub: 6,
    },
    {
      id: 178,
      nombre: "COMPATIBILIDAD MATRIMONIAL - sanguínea en cónyuges.",
      ub: 5,
    },
    {
      id: 179,
      nombre: "COMPLEMENTO, ACTIVIDAD TOTAL.- COMPLEMENTO 50% LISIS (CH-50)",
      ub: 9,
    },
    {
      id: 181,
      nombre: "CONCENTRACIÓN DE LIQUIDOS BIOLÓGICOS.",
      ub: 28,
    },
    {
      id: 183,
      nombre: "COOMBS DIRECTA MONOESPECÍFICA, PRUEBA DE (c/u)",
      ub: 2,
    },
    {
      id: 184,
      nombre: "COOMBS DIRECTA POLIESPECÍFICA, PRUEBA DE",
      ub: 2,
    },
    {
      id: 186,
      nombre: "COOMBS INDIRECTA",
      ub: 12,
    },
    {
      id: 187,
      nombre: "COPROCULTIVO.",
      ub: 10,
    },
    {
      id: 188,
      nombre: "COPROPORFIRINAS o PORFIRINAS - materia fecal",
      ub: 15,
    },
    {
      id: 189,
      nombre: "CORTISOL.",
      ub: 10,
    },
    {
      id: 190,
      nombre: "CREATINQUINASA - CPK.",
      ub: 3,
    },
    {
      id: 191,
      nombre: "CREATININA - en orina",
      ub: 2,
    },
    {
      id: 192,
      nombre: "CREATININA - en sangre",
      ub: 2,
    },
    {
      id: 193,
      nombre: "CREATININA, CLEARENCE DE DEPURACION.",
      ub: 5,
    },
    {
      id: 194,
      nombre: "CRIOAGLUTININA.",
      ub: 1,
    },
    {
      id: 195,
      nombre: "CRIOGLOBULINAS.",
      ub: 1,
    },
    {
      id: 241,
      nombre: "CHAGAS (AD)",
      ub: 3,
    },
    {
      id: 242,
      nombre: "CHAGAS (HAI)",
      ub: 3,
    },
    {
      id: 243,
      nombre: "CHAGAS, Ac. Totales / IgG (IFI / ELISA / QL)",
      ub: 8,
    },
    {
      id: 244,
      nombre: "CHAGAS, PARASITEMIA.",
      ub: 6,
    },
    {
      id: 245,
      nombre: "CHAGAS, SEROLOGÍA - CONFIRMATORIO",
      ub: 11,
    },
    {
      id: 262,
      nombre: "DEHIDROEPIANDROSTERONA, SULFATO - DHEA-S.",
      ub: 11,
    },
    {
      id: 264,
      nombre: "DESCARTABLE, MATERIAL COMPLEMENTARIO (DMC).",
      ub: 1,
    },
    {
      id: 268,
      nombre: "DIGOXIN (DIGOXINA)",
      ub: 15,
    },
    {
      id: 269,
      nombre: "DISACARIDASAS.",
      ub: 0,
    },
    {
      id: 272,
      nombre: "DOMICILIO EN RADIO URBANO - HASTA DOS (2) Kms.",
      ub: 10,
    },
    {
      id: 273,
      nombre: "DOMICILIO A MAS DE DOS (2) Kms. - ADICIONAL por c/Km.",
      ub: 3,
    },
    {
      id: 293,
      nombre: "EMBARAZO, REACCIÓN INMUNOLÓGICA PARA",
      ub: 3.5,
    },
    {
      id: 295,
      nombre: "EOSINÓFILOS, RECUENTO de (en moco nasal)",
      ub: 1,
    },
    {
      id: 297,
      nombre: "ERITROSEDIMENTACION",
      ub: 1,
    },
    {
      id: 298,
      nombre: "ESPERMOGRAMA BASICO (EIVE)",
      ub: 28,
    },
    {
      id: 299,
      nombre: "ESTRICNINA - líquidos biológicos.",
      ub: 0,
    },
    {
      id: 300,
      nombre: "ESTRADIOL (E2) - SÉRICO",
      ub: 10,
    },
    {
      id: 301,
      nombre: "ESTRIOL - urinario.",
      ub: 13,
    },
    {
      id: 302,
      nombre: "ESTRIOL - sérico.",
      ub: 13,
    },
    {
      id: 305,
      nombre: "ESTRONA - sérica.",
      ub: 15,
    },
    {
      id: 307,
      nombre: "ETANOL, ALCOHOL ETÍLICO - urinario. (ALCOLURIA)",
      ub: 10,
    },
    {
      id: 308,
      nombre: "EUGLOBULINAS, TEST DE",
      ub: 3,
    },
    {
      id: 309,
      nombre: "EXUDADO NASOFARINGEO, CULTIVO.",
      ub: 5,
    },
    {
      id: 331,
      nombre: "FACTOR DE COAGULACION V.",
      ub: 12,
    },
    {
      id: 332,
      nombre: "FACTOR DE COAGULACION VII.",
      ub: 24,
    },
    {
      id: 333,
      nombre: "FACTOR DE COAGULACION VIII.",
      ub: 20,
    },
    {
      id: 334,
      nombre: "FACTOR DE COAGULACION IX.",
      ub: 20,
    },
    {
      id: 335,
      nombre: "FACTOR DE COAGULACION X.",
      ub: 12,
    },
    {
      id: 336,
      nombre: "FACTOR DE MIGRACION LINFOCITARIA - MIF.",
      ub: 0,
    },
    {
      id: 337,
      nombre: "FENILALANINA CONFIRMATORIO (HPLC)",
      ub: 30,
    },
    {
      id: 338,
      nombre: "FENILALANINA, NEONATAL (PKU)",
      ub: 7,
    },
    {
      id: 340,
      nombre: "FENILPIRUVICO, ÁCIDO - urinario (cualitativo)",
      ub: 10,
    },
    {
      id: 342,
      nombre: "FENOTIAZINAS.",
      ub: 15,
    },
    {
      id: 343,
      nombre: "FERREMIA (Fe)",
      ub: 2,
    },
    {
      id: 344,
      nombre: "FIBRINOGENO, PRODUCTOS DE DEGRADACION - PDF - plasmático.",
      ub: 30,
    },
    {
      id: 345,
      nombre: "FIBRINOGENO - sangre.",
      ub: 4,
    },
    {
      id: 349,
      nombre: "FISICO QUIMICO - Examen de Exudados, Trasudados.",
      ub: 10,
    },
    {
      id: 350,
      nombre: "FLUOREMIA (F)",
      ub: 10,
    },
    {
      id: 351,
      nombre: "FLUORURIA.",
      ub: 10,
    },
    {
      id: 352,
      nombre: "FOLICO, ÁCIDO.",
      ub: 11,
    },
    {
      id: 353,
      nombre: "FONDO OSCURO.",
      ub: 4,
    },
    {
      id: 354,
      nombre: "FORMULA LEUCOCITARIA.",
      ub: 1.5,
    },
    {
      id: 355,
      nombre: "FOSFATASA ACIDA PROSTATICA (EFM).",
      ub: 5,
    },
    {
      id: 356,
      nombre: "FOSFATASA ACIDA TOTAL (EFM).",
      ub: 3,
    },
    {
      id: 357,
      nombre: "FOSFATASA ALCALINA (FAL)",
      ub: 1.5,
    },
    {
      id: 360,
      nombre: "FOSFATASA ALCALINA TERMOESTABLE.",
      ub: 15,
    },
    {
      id: 361,
      nombre: "FOSFATASA ALCALINA - ISOENZIMAS.",
      ub: 15,
    },
    {
      id: 362,
      nombre: "FOSFATEMIA (P)",
      ub: 1.5,
    },
    {
      id: 363,
      nombre: "FOSFATURIA (P)",
      ub: 1.5,
    },
    {
      id: 366,
      nombre: "FOSFORO CLEARENCE DEPURACION.",
      ub: 3,
    },
    {
      id: 370,
      nombre: "FSH - HORMONA FOLÍCULO ESTIMULANTE.",
      ub: 10,
    },
    {
      id: 371,
      nombre: "FTA/ ABS (IFI - ELISA) SIFILIS y TPHA.",
      ub: 8,
    },
    {
      id: 373,
      nombre: "FUNCIONAL, EXAMEN DE MATERIA FECAL - básico",
      ub: 30,
    },
    {
      id: 402,
      nombre: "GALACTOSEMIA.",
      ub: 8,
    },
    {
      id: 404,
      nombre: "GASES EN SANGRE, PCO2 y PO2.",
      ub: 10,
    },
    {
      id: 405,
      nombre: "GASTRINA, sérica.",
      ub: 15,
    },
    {
      id: 408,
      nombre: "GLOBULOS BLANCOS, RECUENTO y FORMULA - materia fecal.",
      ub: 3,
    },
    {
      id: 409,
      nombre: "GLOBULOS BLANCOS, RECUENTO DE",
      ub: 1,
    },
    {
      id: 410,
      nombre: "GLOBULOS ROJOS, RECUENTO DE",
      ub: 1,
    },
    {
      id: 411,
      nombre: "GLUCAGON.",
      ub: 0,
    },
    {
      id: 412,
      nombre: "GLUCEMIA (C/U)",
      ub: 1.5,
    },
    {
      id: 413,
      nombre: "GLUCEMIA,PRUEBA DE SOBRECARGA (2-DOS DET)ERMINACIONES)",
      ub: 4.5,
    },
    {
      id: 416,
      nombre: "GLUCOPROTEINOGRAMA.",
      ub: 0,
    },
    {
      id: 417,
      nombre: "GLUCOSA en orina (C/U)",
      ub: 1.5,
    },
    {
      id: 418,
      nombre: "GLUCOSA 6-FOSFATO ISOMERASA",
      ub: 13,
    },
    {
      id: 420,
      nombre: "GLUTAMIL TRANSPEPTIDASA. Gamma-",
      ub: 2.5,
    },
    {
      id: 430,
      nombre: "GRAHAM, TEST DE",
      ub: 3,
    },
    {
      id: 432,
      nombre: "GRASAS, CUANTITATIVO (Van de Kamer) - materia fecal",
      ub: 15,
    },
    {
      id: 433,
      nombre: "GRUPO SANGUÍNEO y FACTOR Rho - Du / Dµ",
      ub: 5,
    },
    {
      id: 463,
      nombre: "HAPTOGLOBINA.",
      ub: 9,
    },
    {
      id: 464,
      nombre: "HEINZ, CUERPOS DE (tinción)",
      ub: 3,
    },
    {
      id: 465,
      nombre:
        "HEMATIES, RESISTENCIA GLOBULAR OSMOTICA (CURVA DE FRAGILIDAD OSMOTICA DE ERITROCITOS)",
      ub: 10,
    },
    {
      id: 466,
      nombre: "HEMATOCRITO.",
      ub: 1,
    },
    {
      id: 468,
      nombre: "HEMOCULTIVO AEROBIOS (c/u)",
      ub: 10,
    },
    {
      id: 470,
      nombre: "HEMOGLOBINA, DOSAJE DE (Hb)",
      ub: 1,
    },
    {
      id: 471,
      nombre: "HEMOGLOBINA, ELECTROFORESIS.",
      ub: 11,
    },
    {
      id: 472,
      nombre: "HEMOGLOBINA - plasmática",
      ub: 4,
    },
    {
      id: 475,
      nombre: "HEMOGRAMA.",
      ub: 3,
    },
    {
      id: 479,
      nombre: "HEMOSIDERINA - urinaria",
      ub: 9,
    },
    {
      id: 480,
      nombre: "HEPARINA, RESISTENCIA A LA (In Vitro)",
      ub: 15,
    },
    {
      id: 481,
      nombre: "HEPATOGRAMA.",
      ub: 6,
    },
    {
      id: 483,
      nombre: "HIDATIDOSIS (HAI)",
      ub: 4,
    },
    {
      id: 484,
      nombre: "HIDATIDOSIS, Ac. IgG ó Totales Anti- (IFI)",
      ub: 10,
    },
    {
      id: 487,
      nombre: "HIDROXINDOLACETICO, ÁCIDO.",
      ub: 10,
    },
    {
      id: 488,
      nombre: "HIDROXIPROLINA - urinaria.",
      ub: 12,
    },
    {
      id: 489,
      nombre: "HIPERHEPARINEMIA.",
      ub: 0,
    },
    {
      id: 494,
      nombre: "HUDDLESSON, REACCION DE (ROSA DE BENGALA - BRUCELOSIS).",
      ub: 2,
    },
    {
      id: 531,
      nombre: "MYCOBACTERIUM, IDENTIFICACION.",
      ub: 10,
    },
    {
      id: 532,
      nombre: "IDENTIFICACION SEROLÓGICA DE GERMENES.",
      ub: 6,
    },
    {
      id: 535,
      nombre: "INMUNOELECTROFORESIS.",
      ub: 10,
    },
    {
      id: 536,
      nombre: "INMUNOELECTROFORESIS LIQUIDOS BIOLOGICOS.",
      ub: 20,
    },
    {
      id: 537,
      nombre: "INMUNOGLOBULINA A (IgA)",
      ub: 5,
    },
    {
      id: 538,
      nombre: "INMUNOGLOBULINA D (IgD)",
      ub: 15,
    },
    {
      id: 539,
      nombre: "INMUNOGLOBULINA E (IgE)",
      ub: 10,
    },
    {
      id: 540,
      nombre: "INMUNOGLOBULINA G (IgG)",
      ub: 5,
    },
    {
      id: 541,
      nombre: "INMUNOGLOBULINA M (IgM)",
      ub: 5,
    },
    {
      id: 543,
      nombre: "INSULINA.",
      ub: 11,
    },
    {
      id: 546,
      nombre: "IONOGRAMA - SÉRICO.",
      ub: 3.5,
    },
    {
      id: 547,
      nombre: "IONOGRAMA - urinario.",
      ub: 3.5,
    },
    {
      id: 548,
      nombre: "ISOCITRICO DEHIDROGENASA.",
      ub: 0,
    },
    {
      id: 591,
      nombre: "LACTAMINICO, ÁCIDO.",
      ub: 0,
    },
    {
      id: 592,
      nombre: "LÁCTICO, ÁCIDO ENZIMATICO.",
      ub: 10,
    },
    {
      id: 593,
      nombre: "LÁCTICO, ÁCIDO - materia fecal.",
      ub: 10,
    },
    {
      id: 594,
      nombre: "LÁCTICO DEHIDROGENASA - LDH",
      ub: 3,
    },
    {
      id: 596,
      nombre: "LÁCTICO DEHIDROGENASA ISOENZIMAS - LDH Isoenzimas.",
      ub: 6,
    },
    {
      id: 597,
      nombre: "LACTOGENO PLACENTARIO / SOMATOMAMOTROFINA",
      ub: 20,
    },
    {
      id: 598,
      nombre: "FACTOR REUMATOIDEO - ARTRITIS REUMATOIDE",
      ub: 5,
    },
    {
      id: 600,
      nombre:
        "LEPTOSPIRAS, INVESTIGACIÓN DE (fondo oscuro o coloraciones) - urinaria",
      ub: 12,
    },
    {
      id: 602,
      nombre: "TRICHINOSIS, INVESTIGACIÓN DE",
      ub: 30,
    },
    {
      id: 603,
      nombre: "LAZO, PRUEBA DEL",
      ub: 1,
    },
    {
      id: 606,
      nombre: "LEUCINAMINOPEPTIDASA (LAP)",
      ub: 10,
    },
    {
      id: 610,
      nombre: "LEVULINICO, ÁCIDO DELTA-AMINO",
      ub: 10,
    },
    {
      id: 611,
      nombre: "LEVULINICO, DELTA DEHIDRATASA",
      ub: 10,
    },
    {
      id: 612,
      nombre: "LH - HORMONA LUTEINIZANTE",
      ub: 10,
    },
    {
      id: 613,
      nombre: "LIPASA, sérica.",
      ub: 5,
    },
    {
      id: 615,
      nombre: "LIPIDOGRAMA (Electroforético).",
      ub: 7,
    },
    {
      id: 619,
      nombre: "LIQUIDO CEFALORRAQUIDEO, Fco-Qco - Citológico.",
      ub: 15,
    },
    {
      id: 620,
      nombre: "LIQUIDO DE PUNCION, Examen Fco-Qco - Citológico.",
      ub: 15,
    },
    {
      id: 622,
      nombre: "LISTERIAS, Ac. Anti - (IFI - ELISA)",
      ub: 9,
    },
    {
      id: 623,
      nombre:
        "LITIO (Li) (ISE - Ión selectivo - Fotometría de llama o fotometría de emisión)",
      ub: 6,
    },
    {
      id: 624,
      nombre: "LITIO (Li) (por Absorción Atómica - A.A.)",
      ub: 20,
    },
    {
      id: 653,
      nombre: "MAGNESIO (Mg) - sérico.",
      ub: 2.5,
    },
    {
      id: 654,
      nombre: "MAGNESIO (Mg) - urinario.",
      ub: 2.5,
    },
    {
      id: 656,
      nombre: "MANTOUX, INTRADERMO-REACCION DE (PPD)",
      ub: 20,
    },
    {
      id: 657,
      nombre: "MEDULOGRAMA.",
      ub: 9,
    },
    {
      id: 660,
      nombre: "MERCURIO (Hg) - sérico o urinario.",
      ub: 15,
    },
    {
      id: 662,
      nombre: "METANEFRINAS FRACCIONADAS URINARIAS",
      ub: 25,
    },
    {
      id: 663,
      nombre: "METANOL - urinario.",
      ub: 15,
    },
    {
      id: 664,
      nombre: "MICOLOGIA (Directo - Coloración).",
      ub: 4,
    },
    {
      id: 665,
      nombre: "MICOLOGIA (Cultivo e Identificación).",
      ub: 10,
    },
    {
      id: 667,
      nombre: "MOCO CERVICAL, CRISTALIZACION",
      ub: 2,
    },
    {
      id: 668,
      nombre: "MOCO NASAL, PH - CITOLOGICO.",
      ub: 2,
    },
    {
      id: 669,
      nombre: "MONONUCLEOSIS (Aglutinación - Test de Látex o Monotest).",
      ub: 3,
    },
    {
      id: 670,
      nombre: "MONONUCLEOSIS HEMOAGLUTINACION (Paul Bunnell)",
      ub: 3,
    },
    {
      id: 671,
      nombre: "MONONUCLEOSIS.",
      ub: 3,
    },
    {
      id: 672,
      nombre: "MONÓXIDO de CARBONO.",
      ub: 5,
    },
    {
      id: 673,
      nombre: "MORFINA OPIACEOS, DERIVADOS - líquidos biológicos.",
      ub: 12,
    },
    {
      id: 684,
      nombre: "MULTIRRESISTENCIA, VIGILANCIA DE BACTERIAS RESISTENTES",
      ub: 26,
    },
    {
      id: 695,
      nombre: "NORADRENALINA, sérica - CATECOLAMINA ",
      ub: 25,
    },
    {
      id: 696,
      nombre: "NORADRENALINA, urinaria  - CATECOLAMINA",
      ub: 25,
    },
    {
      id: 702,
      nombre: "NUCLEOTIDASA - 5' N",
      ub: 4,
    },
    {
      id: 711,
      nombre: "ORINA COMPLETA.",
      ub: 3,
    },
    {
      id: 714,
      nombre: "OSMOLARIDAD - CLEARENCE (sangre - orina)",
      ub: 5,
    },
    {
      id: 715,
      nombre: "OSMOLARIDAD - suero.",
      ub: 2.5,
    },
    {
      id: 716,
      nombre: "OXIGENO, PO2 - sangre arterial.",
      ub: 0,
    },
    {
      id: 732,
      nombre: "PAPANICOLAOU ENDOCERVICAL",
      ub: 9,
    },
    {
      id: 734,
      nombre: "PAPANICOLAOU EXOCERVICAL",
      ub: 9,
    },
    {
      id: 736,
      nombre: "PARASITOLOGICO en MATERIA FECAL.",
      ub: 4,
    },
    {
      id: 737,
      nombre: "PARASITOS HEMATICOS.",
      ub: 6,
    },
    {
      id: 738,
      nombre: "PARASITOS SUPERIORES.",
      ub: 4,
    },
    {
      id: 739,
      nombre: "PARATHORMONA - PTH",
      ub: 13.5,
    },
    {
      id: 740,
      nombre: "PEROXIDASAS, TINCION",
      ub: 5,
    },
    {
      id: 741,
      nombre: "PH - líquidos biológicos.",
      ub: 2,
    },
    {
      id: 742,
      nombre: "PH - sanguíneo",
      ub: 0,
    },
    {
      id: 743,
      nombre: "PIRUVATO- QUINASA",
      ub: 0,
    },
    {
      id: 744,
      nombre: "PIRUVICO, ÁCIDO ENZIMATICO",
      ub: 0,
    },
    {
      id: 745,
      nombre: "PLAQUETARIOS, FACTORES",
      ub: 10,
    },
    {
      id: 746,
      nombre: "PLAQUETAS, RECUENTO DE",
      ub: 1,
    },
    {
      id: 747,
      nombre: "PLASMA RECALCIFICADO, TIEMPO DE",
      ub: 1,
    },
    {
      id: 748,
      nombre: "PLASMINOGENO (IDR)",
      ub: 5,
    },
    {
      id: 749,
      nombre: "PLOMO (Pb) - sérico o urinario.",
      ub: 20,
    },
    {
      id: 751,
      nombre: "PORFIRINAS o UROPORFIRINAS - urinarias",
      ub: 15,
    },
    {
      id: 752,
      nombre: "PORFOBILINOGENO (cualitativo) - urinario.",
      ub: 12,
    },
    {
      id: 753,
      nombre: "POTASEMIA.",
      ub: 0,
    },
    {
      id: 754,
      nombre: "POTASURIA.",
      ub: 0,
    },
    {
      id: 758,
      nombre: "PROGESTERONA - Pg.",
      ub: 11,
    },
    {
      id: 759,
      nombre: "PROLACTINA (Prl)",
      ub: 10,
    },
    {
      id: 761,
      nombre: "PROTEINA C REACTIVA - PCR",
      ub: 5,
    },
    {
      id: 763,
      nombre: "PROTEINA TOTALES.",
      ub: 1.5,
    },
    {
      id: 764,
      nombre: "PROTEINOGRAMA ELECTROFORÉTICO, EN SUERO",
      ub: 5,
    },
    {
      id: 765,
      nombre: "PROTEINOGRAMA ELECTROFORÉTICO - LCR",
      ub: 33,
    },
    {
      id: 766,
      nombre: "PROTEINOGRAMA - líquidos biológicos",
      ub: 5,
    },
    {
      id: 767,
      nombre: "PROTEINURIA.",
      ub: 1.5,
    },
    {
      id: 768,
      nombre: "PROTOPORFIRINAS - eritrocitaria",
      ub: 12,
    },
    {
      id: 769,
      nombre: "PROTROMBINA, CONSUMO DE",
      ub: 2,
    },
    {
      id: 770,
      nombre: "PROTROMBINA, RIN",
      ub: 3,
    },
    {
      id: 771,
      nombre: "PROTROMBINA, TIEMPO DE (TP)",
      ub: 2,
    },
    {
      id: 772,
      nombre: "PSEUDOCOLINESTERASA (CHE) o BUTIRILCOLINESTERASA.",
      ub: 4,
    },
    {
      id: 801,
      nombre: "QUIMIOTRIPSINA.",
      ub: 30,
    },
    {
      id: 812,
      nombre: "RENINA - ANGIOTESINA.",
      ub: 18,
    },
    {
      id: 813,
      nombre: "Rho FACTOR - GRUPO SANGUINEO.",
      ub: 0,
    },
    {
      id: 814,
      nombre: "Rho FACTOR C GRANDE",
      ub: 2,
    },
    {
      id: 815,
      nombre: "Rho FACTOR c CHICA",
      ub: 2,
    },
    {
      id: 816,
      nombre: "Rho FACTOR E GRANDE",
      ub: 2,
    },
    {
      id: 817,
      nombre: "Rho FACTOR e CHICA",
      ub: 2,
    },
    {
      id: 818,
      nombre: "RETICULOCITOS, RECUENTO DE",
      ub: 2,
    },
    {
      id: 820,
      nombre: "ROSSE RAGAN, PRUEBA DE (RR)",
      ub: 2.5,
    },
    {
      id: 831,
      nombre: "SALICILATOS.",
      ub: 12.5,
    },
    {
      id: 832,
      nombre: "SALMONELLA, ANTICUERPOS (IFI - ELISA)",
      ub: 6,
    },
    {
      id: 833,
      nombre: "SANGRE OCULTA - materia fecal (SOMF) - inmunológico",
      ub: 8,
    },
    {
      id: 835,
      nombre: "SEROTONINA - sérica.",
      ub: 24,
    },
    {
      id: 837,
      nombre: "SIDEROFILINA, CAPACIDAD de SATURACIÓN.",
      ub: 9,
    },
    {
      id: 838,
      nombre: "SIMS - HUHNER, TEST DE",
      ub: 20,
    },
    {
      id: 839,
      nombre: "SODIO - sérico o urinario.",
      ub: 0,
    },
    {
      id: 841,
      nombre: "SOMATOTROFINA (STH)",
      ub: 12,
    },
    {
      id: 846,
      nombre: "SUBTIPO HEMOGLOBINA A2, DETERMINACION DE (electroforesis)",
      ub: 11,
    },
    {
      id: 847,
      nombre: "SUDOR, TEST DE",
      ub: 15,
    },
    {
      id: 862,
      nombre: "TALIO (Tl) - urinario.",
      ub: 20,
    },
    {
      id: 863,
      nombre: "TESTOSTERONA - TOTAL",
      ub: 11,
    },
    {
      id: 864,
      nombre: "THORN, PRUEBA DE",
      ub: 0,
    },
    {
      id: 865,
      nombre: "TIROTROFINA - TSH",
      ub: 9,
    },
    {
      id: 866,
      nombre: "TIROXINA TOTAL - T4",
      ub: 9,
    },
    {
      id: 867,
      nombre: "TIROXINA EFECTIVA - LIBRE (FT4 / T4L)",
      ub: 9,
    },
    {
      id: 870,
      nombre: "ANTIC. ANTI TOXOPLASMOSIS IGG (IFI)",
      ub: 4,
    },
    {
      id: 871,
      nombre: "ANTIC.ANTI TOXOPLASMOSIS IGG",
      ub: 6,
    },
    {
      id: 873,
      nombre: "TRANSAMINASA, GLUTAMICO OXALACETICA (GOT / AST)",
      ub: 1.5,
    },
    {
      id: 874,
      nombre: "TRANSAMINASA, GLUTAMICO PIRUVICA (GPT / AGT)",
      ub: 1.5,
    },
    {
      id: 875,
      nombre: "TRANSFERRINA",
      ub: 6,
    },
    {
      id: 876,
      nombre: "TRIGLICERIDOS (Tg)",
      ub: 2.5,
    },
    {
      id: 878,
      nombre: "TRIIODOTIRONINA TOTAL - T3",
      ub: 9,
    },
    {
      id: 879,
      nombre: "TROMBINA, PRUEBA DE GENERACIÓN DE LA",
      ub: 3,
    },
    {
      id: 880,
      nombre: "TROMBINA, TIEMPO DE",
      ub: 3,
    },
    {
      id: 887,
      nombre: "TROMBOPLASTINA, TIEMPO DE (KPTT / TTPC / KT)",
      ub: 2,
    },
    {
      id: 901,
      nombre: "UREA, CLEARENCE DE",
      ub: 3,
    },
    {
      id: 902,
      nombre: "UREA, sérica.",
      ub: 1.5,
    },
    {
      id: 903,
      nombre: "URETRAL, EXUDADO (Directo y Cultivo).",
      ub: 11,
    },
    {
      id: 904,
      nombre: "ÚRICO, ÁCIDO - sérico.",
      ub: 1.5,
    },
    {
      id: 905,
      nombre: "ÚRICO, ÁCIDO - urinario.",
      ub: 1.5,
    },
    {
      id: 907,
      nombre: "UROCITOGRAMA",
      ub: 4,
    },
    {
      id: 911,
      nombre: "UROCULTIVO (MODULO)",
      ub: 15,
    },
    {
      id: 923,
      nombre: "UROPROTEINOGRAMA",
      ub: 33,
    },
    {
      id: 931,
      nombre: "VAGINAL, EXUDADO o FLUJO (Directo y Cultivo).",
      ub: 16,
    },
    {
      id: 932,
      nombre: "VAINILLIN MANDELICO, ÁCIDO - urinario (AVM) (HPLC)",
      ub: 15,
    },
    {
      id: 933,
      nombre: "V D R L / USR",
      ub: 4,
    },
    {
      id: 935,
      nombre: "VARIANTE BACTERIANA.",
      ub: 0,
    },
    {
      id: 936,
      nombre: "VERONAL, PRUEBA DEL",
      ub: 0,
    },
    {
      id: 937,
      nombre: "VITAMINA A.",
      ub: 37,
    },
    {
      id: 938,
      nombre: "VITAMINA B12.",
      ub: 15,
    },
    {
      id: 939,
      nombre: "VITAMINA E.",
      ub: 37,
    },
    {
      id: 940,
      nombre: "VOLEMIA RADIOQUÍMICO.",
      ub: 0,
    },
    {
      id: 953,
      nombre: "WIDAL, REACCION DE",
      ub: 4,
    },
    {
      id: 981,
      nombre: "ZINC ERITROCITARIO - PROTOPORFIRINA.",
      ub: 12,
    },
    {
      id: 982,
      nombre: "ZINC (ZN) - SÉRICO.",
      ub: 12,
    },
    {
      id: 1000,
      nombre: "ANTIGENO PROSTATICO ESPECÍFICO TOTAL - PSA-T",
      ub: 18,
    },
    {
      id: 1001,
      nombre: "ACTO BIOQUÍMICO DE INTERNACION - (ABI)",
      ub: 6,
    },
    {
      id: 1011,
      nombre: "CD4 - SUB POBLACIÓN DE LINFOCITOS CD4",
      ub: 35,
    },
    {
      id: 1015,
      nombre: "CD8 - SUB POBLACIÓN LINFOCITARIA por Citom. de flujo",
      ub: 35,
    },
    {
      id: 1020,
      nombre: "CHLAMYDIAS PNEUMONIAE, Ac. Anti- IgG",
      ub: 18,
    },
    {
      id: 1025,
      nombre: "CITOMEGALOVIRUS, AC. IGG ANTI- (CMV-IGG)",
      ub: 15,
    },
    {
      id: 1030,
      nombre: "CITOMEGALOVIRUS, Ac. IgM Anti- (CMV-IgM)",
      ub: 20,
    },
    {
      id: 1035,
      nombre: "COLESTEROL HDL (HDL-C)",
      ub: 3,
    },
    {
      id: 1040,
      nombre: "COLESTEROL LDL (LDL-C)",
      ub: 4,
    },
    {
      id: 1045,
      nombre: "CREATINFOSFOQUINASA, ISOENZIMA MB (CKMB / CPKMB)",
      ub: 10,
    },
    {
      id: 1050,
      nombre: "DROGAS de ABUSO SCREENING (c/u)",
      ub: 17.5,
    },
    {
      id: 1055,
      nombre: "EPSTEIN BARR, Ac. IgG/Totales Anti- (VEB / VCA IgG)",
      ub: 15,
    },
    {
      id: 1060,
      nombre: "EPSTEIN BARR, Ac. IgM Anti- (VEB / VCA IgM)",
      ub: 20,
    },
    {
      id: 1065,
      nombre: "FRUCTOSAMINA.",
      ub: 15,
    },
    {
      id: 1070,
      nombre: "HEMOGLOBINA GLICOSILADA (HB A1C)",
      ub: 15,
    },
    {
      id: 1075,
      nombre: "HEPATITIS A, Ac. IgM Anti- (HAV IgM)",
      ub: 15,
    },
    {
      id: 1080,
      nombre: 'HEPATITIS B, Ac. Anti- "Core" IgG (HBc -IgG )',
      ub: 15,
    },
    {
      id: 1085,
      nombre: "HEPATITIS B, Antígeno e (Ag.HBe)",
      ub: 15,
    },
    {
      id: 1086,
      nombre: "HEPATITIS B, Antígeno de Superficie (Ag.HBs )",
      ub: 12,
    },
    {
      id: 1090,
      nombre: "HEPATITIS B, AC. DE SUPERFICIE ANTI- (HBSAC)",
      ub: 20,
    },
    {
      id: 1095,
      nombre: "HEPATITIS C, Ac. IgG Anti- (HCV Ac IgG)",
      ub: 20,
    },
    {
      id: 1100,
      nombre: "HIDATIDOSIS, Ac. IgG ó Totales Anti- (IFI)",
      ub: 22,
    },
    {
      id: 1105,
      nombre: "HIV -CARGA VIRAL (PCR)",
      ub: 160,
    },
    {
      id: 1110,
      nombre: "HIV, WESTERN- BLOT",
      ub: 100,
    },
    {
      id: 1115,
      nombre: "MARCADOR TUMORAL DE OVARIO (CA 125)",
      ub: 20,
    },
    {
      id: 1120,
      nombre: "MARCADOR TUMORAL de MAMA (CA 15. 3)",
      ub: 20,
    },
    {
      id: 1125,
      nombre: "MARCADOR TUMORAL CA 19. 9",
      ub: 20,
    },
    {
      id: 1130,
      nombre: "MICROALBUMINURIA / ALBUMINA URINARIA",
      ub: 12.5,
    },
    {
      id: 1135,
      nombre:
        "MONITOREO de FARMACOS para ENF. CRONICAS I (Anticonvulsivantes I)",
      ub: 15,
    },
    {
      id: 1136,
      nombre:
        "MONITOREO de FARMACOS para ENF. CRONICAS II (Anticonvulsivantes II)",
      ub: 24,
    },
    {
      id: 1137,
      nombre:
        "MONITOREO de FARMACOS para ENF. CRONICAS III (Anticonvulsivantes III)",
      ub: 60,
    },
    {
      id: 1140,
      nombre: "MYCOPLASMA PNEUMONIAE Ac Anti-IgG",
      ub: 18,
    },
    {
      id: 1142,
      nombre: "PREPARACIÓN DE SANGRE A TRANSFUNDIR (MÓDULO TRANSFUSIONAL)",
      ub: 118,
    },
    {
      id: 1145,
      nombre: "RUBEOLA, AC. IGG ANTI-",
      ub: 15,
    },
    {
      id: 1150,
      nombre: "RUBEOLA, Ac. IgM Anti-",
      ub: 15,
    },
    {
      id: 1160,
      nombre:
        "TORCH (Toxoplasmosis , Rubeola, Citomegalovirus y Herpes 1 y 2 )",
      ub: 50,
    },
    {
      id: 1170,
      nombre:
        "SUBUNIDAD BETA de GONADOTROFINA CORIONICA (cualitativa) - HCG o ß-HCG - Sub ß",
      ub: 8,
    },
    {
      id: 1175,
      nombre:
        "SUBUNIDAD BETA de GONADOTROFINA CORIONICA (cuantitativa) -  HCG o ß-HCG - Sub ß",
      ub: 14,
    },
    {
      id: 1180,
      nombre: 'TEST RAPIDO:STREPTOCOCCUS ß-HEM GRUPO "A"',
      ub: 12.5,
    },
    {
      id: 1185,
      nombre: "TESTOSTERONA BIODISPONIBLE",
      ub: 25,
    },
    {
      id: 1196,
      nombre:
        "SCREENING NEONATAL x 6 (TSH, FENIL ALANINA y TIR -BIOTINIDASA, GALACTOSEMIA y 17-HO-PROGESTERONA - Neonatales)",
      ub: 43,
    },
    {
      id: 1200,
      nombre: "URGENCIAS.-",
      ub: 3,
    },
    {
      id: 2001,
      nombre: "ABC - ACTO BIOQUÍMICO COMPLEMENTARIO",
      ub: 3,
    },
    {
      id: 2008,
      nombre: "ACANTHAMOEBA SPP.",
      ub: 15,
    },
    {
      id: 2009,
      nombre: "ACANTHAMOEBA - PCR",
      ub: 90,
    },
    {
      id: 2011,
      nombre: "ÁCAROS y ARTRÓPODOS, Investigación de vectores",
      ub: 10,
    },
    {
      id: 2017,
      nombre: "ACETILCOLINA",
      ub: 25,
    },
    {
      id: 2025,
      nombre: "ACETILCOLINA, Ac. Anti- RECEPTORES (ACRA)",
      ub: 100,
    },
    {
      id: 2034,
      nombre: "ACETILCOLINESTERASA ERITROCITARIA (ACHE)",
      ub: 12,
    },
    {
      id: 2051,
      nombre: "ACETONA CUANTITATIVA - sérica",
      ub: 19,
    },
    {
      id: 2059,
      nombre: "ACETONA CUANTITATIVA - urinaria",
      ub: 19,
    },
    {
      id: 2068,
      nombre: "ÁCIDO 3 METIL-INDOL",
      ub: 35,
    },
    {
      id: 2085,
      nombre: "ÁCIDO 5 HIDROX-INDOL ACÉTICO (HPLC)",
      ub: 23,
    },
    {
      id: 2093,
      nombre: "ÁCIDO ACETOACÉTICO",
      ub: 17,
    },
    {
      id: 2102,
      nombre: "ÁCIDO ALFA CETÓNICO",
      ub: 12,
    },
    {
      id: 2111,
      nombre: "ÁCIDO BETA HIDROXIBUTÍRICO",
      ub: 19,
    },
    {
      id: 2119,
      nombre: "ÁCIDO CÍTRICO - plasmático",
      ub: 15,
    },
    {
      id: 2120,
      nombre: "ÁCIDO CÍTRICO - urinario",
      ub: 15,
    },
    {
      id: 2128,
      nombre: "ÁCIDO FENIL ACÉTICO (AFA)",
      ub: 19,
    },
    {
      id: 2136,
      nombre: "ÁCIDO FENIL GLIOXÍLICO",
      ub: 16,
    },
    {
      id: 2153,
      nombre: "ÁCIDO FOLICO - intraeritrocitario.",
      ub: 14,
    },
    {
      id: 2162,
      nombre: "ÁCIDO FÓRMICO",
      ub: 16,
    },
    {
      id: 2170,
      nombre: "ÁCIDO FOSFATÍDICO, Ac. IgG Anti-",
      ub: 30,
    },
    {
      id: 2179,
      nombre: "ÁCIDO FOSFATÍDICO, Ac. IgM Anti-",
      ub: 30,
    },
    {
      id: 2181,
      nombre: "ÁCIDO FUROICO",
      ub: 16,
    },
    {
      id: 2182,
      nombre: "ÁCIDO GAMMA-AMINOBUTÍRICO (GABA)",
      ub: 70,
    },
    {
      id: 2183,
      nombre: "ÁCIDO GLUTÁMICO",
      ub: 30,
    },
    {
      id: 2184,
      nombre: "ÁCIDO GUANIDINACÉTICO.",
      ub: 110,
    },
    {
      id: 2187,
      nombre: "ÁCIDO HIPÚRICO - urinario",
      ub: 15,
    },
    {
      id: 2205,
      nombre: "ÁCIDO HOMOVANÍLICO - HVA",
      ub: 20,
    },
    {
      id: 2222,
      nombre: "ÁCIDO INDOLACETICO, 5 HIDROXI -3-METIL",
      ub: 19,
    },
    {
      id: 2236,
      nombre: "ÁCIDO LÁCTICO - LCR",
      ub: 19,
    },
    {
      id: 2239,
      nombre: "ÁCIDO LÁCTICO - urinario",
      ub: 19,
    },
    {
      id: 2247,
      nombre: "ÁCIDO LISÉRGICO (LSD)",
      ub: 19,
    },
    {
      id: 2252,
      nombre: "ÁCIDO MÁLICO",
      ub: 60,
    },
    {
      id: 2256,
      nombre: "ÁCIDO MANDÉLICO",
      ub: 19,
    },
    {
      id: 2264,
      nombre: "ÁCIDO METIL HIPÚRICO",
      ub: 19,
    },
    {
      id: 2273,
      nombre: "ÁCIDO METIL MALÓNICO",
      ub: 19,
    },
    {
      id: 2277,
      nombre: "ÁCIDO MUCÓNICO",
      ub: 19,
    },
    {
      id: 2281,
      nombre: "ÁCIDO ORÓTICO",
      ub: 104,
    },
    {
      id: 2296,
      nombre: "ÁCIDO OXALICO - sérico",
      ub: 22,
    },
    {
      id: 2299,
      nombre: "ÁCIDO OXALICO - urinario (2/ 12 / 24 hs. - c/u)",
      ub: 15,
    },
    {
      id: 2307,
      nombre: "ÁCIDO PERCLÓRICO",
      ub: 0,
    },
    {
      id: 2316,
      nombre: "ÁCIDO PIRUVICO - sérico",
      ub: 13,
    },
    {
      id: 2328,
      nombre: "ÁCIDO SALICÍLICO - sérico",
      ub: 12,
    },
    {
      id: 2330,
      nombre: "ÁCIDO SALICÍLICO - urinario",
      ub: 12,
    },
    {
      id: 2341,
      nombre: "ÁCIDO SIALICO",
      ub: 19,
    },
    {
      id: 2346,
      nombre: "ÁCIDO SUCCÍNICO",
      ub: 60,
    },
    {
      id: 2350,
      nombre: "ÁCIDO TIOGLICÓLICO",
      ub: 19,
    },
    {
      id: 2358,
      nombre: "ÁCIDO TRICLOROACÉTICO",
      ub: 18,
    },
    {
      id: 2367,
      nombre: "ÁCIDOS BILIARES - séricos.",
      ub: 30,
    },
    {
      id: 2375,
      nombre: "ÁCIDOS GRASOS DE CADENA MUY LARGA",
      ub: 122,
    },
    {
      id: 2379,
      nombre: "ÁCIDOS GRASOS NO ESTERIFICADOS (NEFA)",
      ub: 10,
    },
    {
      id: 2393,
      nombre: "ÁCIDOS ORGÁNICOS - urinarios",
      ub: 122,
    },
    {
      id: 2401,
      nombre: "ACIL CARNITINAS - plasmáticos",
      ub: 120,
    },
    {
      id: 2405,
      nombre: "ACTINA AC (AAC) - IFI",
      ub: 0,
    },
    {
      id: 2410,
      nombre: "ACUAPORINA 4 - Neuromielitis Optica–Ac. IgG (NMO-Ac. IgG)",
      ub: 100,
    },
    {
      id: 2417,
      nombre: "ADENOSIN DEAMINASA - LCR",
      ub: 24,
    },
    {
      id: 2418,
      nombre: "ADENOSIN DEAMINASA - líquido pleural",
      ub: 24,
    },
    {
      id: 2427,
      nombre: "ADENOVIRUS, Ac. IgG o Totales, Anti-",
      ub: 18,
    },
    {
      id: 2435,
      nombre: "ADENOVIRUS, Ac. IgM, Anti-",
      ub: 18,
    },
    {
      id: 2444,
      nombre: "ADENOVIRUS, Ag.",
      ub: 24,
    },
    {
      id: 2446,
      nombre: "ADENOVIRUS - PCR",
      ub: 90,
    },
    {
      id: 2448,
      nombre: "ADENOVIRUS - Carga viral ",
      ub: 150,
    },
    {
      id: 2452,
      nombre: "ADRENAL, Ac. Totales Anti-",
      ub: 65,
    },
    {
      id: 2461,
      nombre: "ALDOSTERONA - urinaria",
      ub: 15,
    },
    {
      id: 2469,
      nombre: "ALDRIN",
      ub: 60,
    },
    {
      id: 2495,
      nombre:
        "Alfa 1 ANTITRIPSINA, CLEARENCE de (a1 AT - Clearence) - M.F. / sérica.",
      ub: 20,
    },
    {
      id: 2508,
      nombre: "Alfa 1 GLUCOPROTEINA ACIDA (OROSOMUCOIDE)",
      ub: 0,
    },
    {
      id: 2521,
      nombre: "Alfa 2 ANTIPLASMINA",
      ub: 40,
    },
    {
      id: 2538,
      nombre:
        "Alfa-BHC (a-HCH) - alfa-HEXACLORURO de BENCENO -  alfa-HEXACLORAN - alfa-LINDANO - a-1,2,3,4,5,6-HEXACLOROCICLOHEXANO.",
      ub: 60,
    },
    {
      id: 2547,
      nombre: "Alfa GALACTOSIDASA (Fabry)",
      ub: 130,
    },
    {
      id: 2555,
      nombre: "Alfa GLUCOSIDASA NEUTRA - semen",
      ub: 25,
    },
    {
      id: 2559,
      nombre: "Alfa L IDURONIDASA",
      ub: 110,
    },
    {
      id: 2561,
      nombre: "Alfa MANOSIDASA",
      ub: 0,
    },
    {
      id: 2563,
      nombre: "Alfa NITROSO BETA NAFTOL, PRUEBA de",
      ub: 9,
    },
    {
      id: 2572,
      nombre: "ALPRAZOLAM",
      ub: 25,
    },
    {
      id: 2587,
      nombre: "ALUMINIO - pelo",
      ub: 30,
    },
    {
      id: 2589,
      nombre: "ALUMINIO - sérico",
      ub: 22,
    },
    {
      id: 2591,
      nombre: "ALUMINIO - urinario",
      ub: 22,
    },
    {
      id: 2598,
      nombre: "AMETRYN",
      ub: 60,
    },
    {
      id: 2606,
      nombre: "AMIKACINA",
      ub: 22,
    },
    {
      id: 2620,
      nombre: "AMINOÁCIDOS - LCR (Cromatografía cuantitativa)",
      ub: 150,
    },
    {
      id: 2623,
      nombre: "AMINOÁCIDOS - sérico (Cromatografía cuantitativa)",
      ub: 150,
    },
    {
      id: 2624,
      nombre:
        "AMINOÁCIDOS - sangre seca en papel de filtro - SSPF (cuantitativo)",
      ub: 150,
    },
    {
      id: 2627,
      nombre: "AMINOÁCIDOS - urinarios (Cromatografía cuantitativa)",
      ub: 150,
    },
    {
      id: 2630,
      nombre: "AMINOÁCIDOS - urinarios (Cualitativo)",
      ub: 22,
    },
    {
      id: 2645,
      nombre: "PERFIL LIPÍDICO",
      ub: 11,
    },
    {
      id: 2649,
      nombre: "AMONIO - urinario",
      ub: 20,
    },
    {
      id: 2657,
      nombre: "ANAEROBIOS (Cultivo).",
      ub: 30,
    },
    {
      id: 2666,
      nombre: "ANDROSTENEDIOL GLUCURÓNIDO (ALFA DIOL GLUCURONIDO)",
      ub: 25,
    },
    {
      id: 2675,
      nombre: "ANDROSTENEDIONA, DELTA 4- (?4)",
      ub: 12,
    },
    {
      id: 2688,
      nombre: "ANFETAMINAS / METANFETAMINAS, confirmatorio",
      ub: 120,
    },
    {
      id: 2700,
      nombre: "ANGELMAN, SÍNDROME de",
      ub: 330,
    },
    {
      id: 2704,
      nombre: "ANION GAP",
      ub: 1,
    },
    {
      id: 2706,
      nombre: "ANTIBIOGRAMA - AUTOMATIZADO ",
      ub: 50,
    },
    {
      id: 2709,
      nombre: "ANTICOAGULANTE LÚPICO",
      ub: 30,
    },
    {
      id: 2712,
      nombre: "ANTIDIURÉTICA, HORMONA (HAD) -VASOPRESINA",
      ub: 80,
    },
    {
      id: 2713,
      nombre:
        "ANTIDIURÉTICA, HORMONA - urinaria (HAD u) - VASOPRESINA urinaria",
      ub: 80,
    },
    {
      id: 2717,
      nombre:
        "ANTIGENOS BACTERIANOS, screening (Haemof..infl, Neis. mening., Strept. Pneum.) ",
      ub: 80,
    },
    {
      id: 2730,
      nombre: "ANTÍGENO PROSTÁTICO ESPECÍFICO, COMPLEJADO (PSA c)",
      ub: 25,
    },
    {
      id: 2734,
      nombre: "ANTÍGENO PROSTÁTICO ESPECÍFICO, LIBRE+TOTAL (PSA-L+T)",
      ub: 36,
    },
    {
      id: 2739,
      nombre:
        "ANTIGENOS - PANEL GINECOLÓGICO - PCR (Chamydia trachomatis / Mycoplasma  hominis / Mycoplasma genitalium / Ureaplasma urealyticum / Neisseria gonorrho",
      ub: 150,
    },
    {
      id: 2743,
      nombre: "ANTIGENOS VIRALES - PANEL de DIARREICOS - PCR ",
      ub: 150,
    },
    {
      id: 2745,
      nombre: "ANTIGENOS VIRALES - PANEL de RESPIRATORIOS - BÁSICO",
      ub: 90,
    },
    {
      id: 2749,
      nombre: "ANTIGENOS VIRALES - PANEL de RESPIRATORIOS  - PCR BÁSICO",
      ub: 180,
    },
    {
      id: 2751,
      nombre: "ANTIGENOS VIRALES - PANEL de RESPIRATORIOS  - PCR EXTENDIDO ",
      ub: 230,
    },
    {
      id: 2769,
      nombre: "ANTIMICOGRAMA LEVADURAS, Screening",
      ub: 30,
    },
    {
      id: 2780,
      nombre: "ANTIMONIO - sérico",
      ub: 18,
    },
    {
      id: 2782,
      nombre: "ANTIMONIO - urinario",
      ub: 18,
    },
    {
      id: 2790,
      nombre: "ANTIMULLERIANA, HORMONA (HAM)",
      ub: 75,
    },
    {
      id: 2803,
      nombre: "ANTITROMBINA III FUNCIONAL",
      ub: 25,
    },
    {
      id: 2810,
      nombre: "APOLIPOPROTEINA A (APOA)",
      ub: 11,
    },
    {
      id: 2811,
      nombre: "APOLIPOPROTEINA B (APOB)",
      ub: 11,
    },
    {
      id: 2815,
      nombre: "APOLIPOPROTEINA E, GENOTIPO (Apo E)",
      ub: 176,
    },
    {
      id: 2820,
      nombre: "ARILSULTASA A - en leucocitos",
      ub: 150,
    },
    {
      id: 2822,
      nombre: "ARILSULTASA A - sérica",
      ub: 150,
    },
    {
      id: 2834,
      nombre: "ARSÉNICO - pelo",
      ub: 30,
    },
    {
      id: 2837,
      nombre: "ARSÉNICO - uña",
      ub: 30,
    },
    {
      id: 2846,
      nombre: "ASPERGILLIUS, Ac. Anti-",
      ub: 24,
    },
    {
      id: 2850,
      nombre: "ATRAZINA",
      ub: 60,
    },
    {
      id: 2852,
      nombre: "AUTOHEMÓLISIS, PRUEBA DE",
      ub: 4,
    },
    {
      id: 2854,
      nombre: "BACILUS ANTHRACIS, Cultivo y Tipificación",
      ub: 20,
    },
    {
      id: 2858,
      nombre: "BACTERIAS RESISTENTES A CARBAPENEMES - PCR o similar",
      ub: 95,
    },
    {
      id: 2863,
      nombre: "BANDAS OLIGOCLONALES, en L.C.R. / Suero",
      ub: 220,
    },
    {
      id: 2888,
      nombre: "BARBITURATOS, Confirmatorio.",
      ub: 120,
    },
    {
      id: 2896,
      nombre: "BARIO - sérico.",
      ub: 22,
    },
    {
      id: 2897,
      nombre: "BARIO - urinario",
      ub: 22,
    },
    {
      id: 2912,
      nombre: "BARTONELLA HENSELAE, Ac. IgG Anti-",
      ub: 50,
    },
    {
      id: 2914,
      nombre: "BARTONELLA HENSELAE, Ac. IgM Anti-",
      ub: 50,
    },
    {
      id: 2931,
      nombre: "BENCENO-ETILBENCENO-TOLUENO-XILENO (BETX)",
      ub: 60,
    },
    {
      id: 2945,
      nombre: "BENZODIAZEPINAS, Confirmatorio.",
      ub: 120,
    },
    {
      id: 2963,
      nombre: "BERILIO - sérico",
      ub: 22,
    },
    {
      id: 2965,
      nombre: "BERILIO - urinario",
      ub: 22,
    },
    {
      id: 2980,
      nombre: "Beta 2 GLICOPROTEÍNA, Ac. IgA Anti-",
      ub: 30,
    },
    {
      id: 2982,
      nombre: "BETA 2 GLICOPROTEÍNA, AC. IGG ANTI-",
      ub: 30,
    },
    {
      id: 2984,
      nombre: "BETA 2 GLICOPROTEÍNA, AC. IGM ANTI-",
      ub: 30,
    },
    {
      id: 3016,
      nombre:
        "Beta-BHC (ß-HCH) - beta-HEXACLORURO de BENCENO -  beta-HEXACLORAN - beta-LINDANO - beta-1,2,3,4,5,6-HEXACLOROCICLOHEXANO.",
      ub: 60,
    },
    {
      id: 3025,
      nombre: "BETA CROSS LAPS - TELOPÉPTIDO C TERMINAL",
      ub: 32,
    },
    {
      id: 3034,
      nombre: "Beta GALACTOSIDASA",
      ub: 130,
    },
    {
      id: 3042,
      nombre: "Beta GLUCOCEREBROSIDASA ",
      ub: 130,
    },
    {
      id: 3051,
      nombre: "Beta LACTAMASA",
      ub: 10,
    },
    {
      id: 3056,
      nombre: "Beta Libre hCG",
      ub: 38,
    },
    {
      id: 3062,
      nombre: "Beta MANOSIDASA",
      ub: 0,
    },
    {
      id: 3065,
      nombre: "BICARBONATO, en orina",
      ub: 10,
    },
    {
      id: 3067,
      nombre: "BIOTINA ",
      ub: 120,
    },
    {
      id: 3068,
      nombre: "BIOTINIDAZA, CONFIRMATORIO.",
      ub: 120,
    },
    {
      id: 3076,
      nombre: "BLADER TEST ANTÍGENO - NMP22 (B.T.A.)",
      ub: 0,
    },
    {
      id: 3085,
      nombre: "BLASTOMYCES DERMATITIDIS, Ac (Fase Lev)",
      ub: 35,
    },
    {
      id: 3093,
      nombre: "BNP (FACTOR NATRIURÉTICO)",
      ub: 95,
    },
    {
      id: 3102,
      nombre: "BORDETELLA PERTUSIS, Ac. IgG Anti-",
      ub: 35,
    },
    {
      id: 3110,
      nombre: "BORDETELLA PERTUSIS, Ac. IgM Anti-",
      ub: 37,
    },
    {
      id: 3119,
      nombre: "BORDETELLA PERTUSIS, Ag.",
      ub: 40,
    },
    {
      id: 3120,
      nombre: "BORDETELLA PERTUSIS -  PCR",
      ub: 90,
    },
    {
      id: 3128,
      nombre: "BORRELLIA BUGDORFERI, Ac. IgG Anti-",
      ub: 35,
    },
    {
      id: 3136,
      nombre: "BORRELLIA BUGDORFERI, Ac. IgM Anti-",
      ub: 37,
    },
    {
      id: 3141,
      nombre: "BRCA 1 BRCA 2, GRANDES DELECCIONES Y DUPLICACIONES (MLPA)",
      ub: 1000,
    },
    {
      id: 3143,
      nombre: "BRCA 1 BRCA 2, SECUENCIACIÓN COMPLETA ",
      ub: 2000,
    },
    {
      id: 3145,
      nombre: "BRCA 1-2, PANEL ASHKENAZI",
      ub: 375,
    },
    {
      id: 3147,
      nombre: "BRCA 1-2, PANEL ASHKENAZI - SEFARADI",
      ub: 450,
    },
    {
      id: 3153,
      nombre: "BROMURO - sérico",
      ub: 20,
    },
    {
      id: 3158,
      nombre: "BRUCELLAS, TEST DE WRIGHT",
      ub: 10,
    },
    {
      id: 3159,
      nombre: "BRUCELLAS, TEST DE WRIGHT, con 2-Mercaptoetanol (W-2ME)",
      ub: 12,
    },
    {
      id: 3162,
      nombre: "BRUCELOSIS (IFI)",
      ub: 12,
    },
    {
      id: 3170,
      nombre: "BRUCELOSIS (Fijación de Complemento)",
      ub: 5,
    },
    {
      id: 3179,
      nombre: "BRUCELOSIS, Ac. IgG ó Totales Anti-",
      ub: 12,
    },
    {
      id: 3187,
      nombre: "BRUCELOSIS, Ac. IgM Anti-",
      ub: 12,
    },
    {
      id: 3190,
      nombre: "BRUCELOSIS, Ac. Incompletos Anti-",
      ub: 15,
    },
    {
      id: 3230,
      nombre: "C1 INHIBIDOR (C1 INHIBIDOR INMUNOLÓGICO)",
      ub: 30,
    },
    {
      id: 3239,
      nombre: "CA 21-1 (MARCADOR TUMORAL de PULMÓN) - CYFRA 21-1",
      ub: 60,
    },
    {
      id: 3247,
      nombre: "CA 72-4 (MARCADOR TUMORAL GÁSTRICO)",
      ub: 50,
    },
    {
      id: 3254,
      nombre: "CADENA LIVIANA KAPPA LIBRE  - sérica (Nefelometría)",
      ub: 100,
    },
    {
      id: 3257,
      nombre: "CADENA LIVIANA LAMBDA, LIBRE - urinario (Nefelometría)",
      ub: 100,
    },
    {
      id: 3259,
      nombre: "CADENAS PESADAS EN SANGRE Y ORINA C/U",
      ub: 40,
    },
    {
      id: 3262,
      nombre: "CADMIO (Cd) - pelo",
      ub: 25,
    },
    {
      id: 3264,
      nombre: "CADMIO (Cd) - sanguíneo",
      ub: 22,
    },
    {
      id: 3273,
      nombre: "CALCIDIOIDEMICOSIS - Inmunodif.",
      ub: 0,
    },
    {
      id: 3290,
      nombre: "CALCIO (Ca) - pelo",
      ub: 25,
    },
    {
      id: 3292,
      nombre: "CALCIO (Ca) - saliva",
      ub: 25,
    },
    {
      id: 3307,
      nombre:
        "CÁLCULO - biliar, salival, urinario - Estudio Cristalográfico (C/U)",
      ub: 20,
    },
    {
      id: 3310,
      nombre: "CALPROTECTINA (CPMF)",
      ub: 100,
    },
    {
      id: 3316,
      nombre: "CAMPYLOBACTER SPP, Cultivo",
      ub: 0,
    },
    {
      id: 3318,
      nombre: "CAMPYLOBACTER SPP, Directo (ELISA)",
      ub: 20,
    },
    {
      id: 3320,
      nombre: "CAMPYLOBACTER SPP, Directo (Microscopía)",
      ub: 12,
    },
    {
      id: 3324,
      nombre: "CANDIDA ALBICANS, Ac. Totales",
      ub: 15,
    },
    {
      id: 3333,
      nombre: "CANDIDA, ELECTROFORESIS DE CAMP",
      ub: 0,
    },
    {
      id: 3350,
      nombre: "CANNABINOIDES EN ORINA",
      ub: 120,
    },
    {
      id: 3375,
      nombre: "CARBOXIHEMOGLOBINA",
      ub: 15,
    },
    {
      id: 3384,
      nombre: "CARDIOLIPINAS, Ac. IgA Anti-",
      ub: 20,
    },
    {
      id: 3392,
      nombre: "CARDIOLIPINAS, AC. IGG ANTI-",
      ub: 18,
    },
    {
      id: 3401,
      nombre: "CARDIOLIPINAS, AC. IGM ANTI-",
      ub: 18,
    },
    {
      id: 3427,
      nombre: "CARIOTIPO con BANDEO - Alta Resolución (Alta Sensibilidad)",
      ub: 230,
    },
    {
      id: 3430,
      nombre: "CARIOTIPO, con BANDEO",
      ub: 140,
    },
    {
      id: 3435,
      nombre: "CARIOTIPO - líquido anmiótico",
      ub: 350,
    },
    {
      id: 3440,
      nombre: "CARIOTIPO - material de aborto",
      ub: 200,
    },
    {
      id: 3443,
      nombre: "CARIOTIPO - médula ósea (Citogenético de MO)",
      ub: 140,
    },
    {
      id: 3446,
      nombre: "CARIOTIPO - vellosidades coriónicas",
      ub: 350,
    },
    {
      id: 3461,
      nombre: "CARNITINA, Libre y Total - suero",
      ub: 160,
    },
    {
      id: 3463,
      nombre: "CARNITINA, Libre y Total - urinario",
      ub: 160,
    },
    {
      id: 3478,
      nombre: "CATECOLAMINAS - LCR",
      ub: 25,
    },
    {
      id: 3495,
      nombre: "CD34 POSITIVAS - Citometría de Flujo",
      ub: 35,
    },
    {
      id: 3504,
      nombre: "CD10/CD19 - Citom. de Flujo",
      ub: 35,
    },
    {
      id: 3512,
      nombre: "CD3/CD16+56, CÉLULAS NATURAL KILLER (NK) - Citom. de Flujo",
      ub: 35,
    },
    {
      id: 3521,
      nombre: "CD25 RECEPTOR SOLUBLE DE INTERLUKINA 2 - Citom. de Flujo",
      ub: 35,
    },
    {
      id: 3529,
      nombre: "CD69/CD56",
      ub: 35,
    },
    {
      id: 3538,
      nombre: "CD, SUBPOBLACION LINFOCITARIA - Citometría de Flujo (C/U)",
      ub: 35,
    },
    {
      id: 3543,
      nombre: "CELULARIDAD en lágrimas",
      ub: 10,
    },
    {
      id: 3546,
      nombre: "CELULAS LE",
      ub: 7,
    },
    {
      id: 3563,
      nombre: "CENTROMERO, Ac. Anti-",
      ub: 22,
    },
    {
      id: 3571,
      nombre: "CHAGAS, Ac. IgM Anti- (ELISA)",
      ub: 14,
    },
    {
      id: 3572,
      nombre: "CHAGAS, Ac. IgM Anti- (IFI)",
      ub: 14,
    },
    {
      id: 3576,
      nombre: "CHAGAS, (PCR)",
      ub: 90,
    },
    {
      id: 3582,
      nombre: "CHIKUNGUNYA , virus (PCR)",
      ub: 90,
    },
    {
      id: 3585,
      nombre: "CHITOTRIOSIDASA - sanguínea.",
      ub: 110,
    },
    {
      id: 3586,
      nombre: "CHITOTRIOSIDASA - sanguínea/soporte-papel (Fluorométrico)",
      ub: 110,
    },
    {
      id: 3589,
      nombre: "CHLAMYDIA PNEUMONIAE, Ac. IgM Anti-",
      ub: 20,
    },
    {
      id: 3591,
      nombre: "CHLAMYDIA PNEUMONIAE - PCR",
      ub: 90,
    },
    {
      id: 3598,
      nombre: "CHLAMYDIA PSITACCI, Ac. IgG Anti-",
      ub: 18,
    },
    {
      id: 3606,
      nombre: "CHLAMYDIA PSITACCI, Ac. IgM Anti-",
      ub: 20,
    },
    {
      id: 3609,
      nombre: "CHLAMYDIA PSITACCI - PCR",
      ub: 90,
    },
    {
      id: 3623,
      nombre: "CHLAMYDIA TRACHOMATIS, Ac. IgG Anti-",
      ub: 18,
    },
    {
      id: 3632,
      nombre: "CHLAMYDIA TRACHOMATIS, Ac. IgM Anti-",
      ub: 20,
    },
    {
      id: 3640,
      nombre: "CHLAMYDIA TRACHOMATIS, Ag.",
      ub: 20,
    },
    {
      id: 3649,
      nombre: "CHLAMYDIA TRACHOMATIS, Ag. PCR",
      ub: 90,
    },
    {
      id: 3650,
      nombre: "CHLAMYDIA TRACHOMATIS, cultivo celular",
      ub: 95,
    },
    {
      id: 3651,
      nombre: "CHLAMYDIA TRACHOMATIS - LCR",
      ub: 0,
    },
    {
      id: 3657,
      nombre: "CHOLERAE VIBRIO, CULTIVO",
      ub: 0,
    },
    {
      id: 3666,
      nombre: "CIANUROS",
      ub: 22,
    },
    {
      id: 3674,
      nombre: "CICLOSPORINA A - sérica",
      ub: 30,
    },
    {
      id: 3683,
      nombre: "CISTINA",
      ub: 15,
    },
    {
      id: 3717,
      nombre: "CITOMEGALOVIRUS, ANTIGENEMIA (CMV - PP65)",
      ub: 45,
    },
    {
      id: 3720,
      nombre: "CITOMEGALOVIRUS, detección cuantitativa - PCR",
      ub: 150,
    },
    {
      id: 3722,
      nombre: "CITOMEGALOVIRUS, detección cualitativa - PCR",
      ub: 70,
    },
    {
      id: 3734,
      nombre: "CITOPLASMA DE NEUTROFILO, AC. ANTI- C/U (ANCA C, P - C/U)",
      ub: 28,
    },
    {
      id: 3751,
      nombre: "CLEMENTS, Prueba de",
      ub: 12,
    },
    {
      id: 3756,
      nombre: "CLORPIRIFOS ETIL",
      ub: 60,
    },
    {
      id: 3760,
      nombre: "CLOSTRIDIUM DIFFICILE, Toxina A - materia fecal.",
      ub: 80,
    },
    {
      id: 3762,
      nombre:
        "CLOSTRIDIUM DIFFICILE, Toxinas (A + B) - Materia Fecal (Inmunocromatografía)",
      ub: 100,
    },
    {
      id: 3786,
      nombre: "COBALTO - plasmático",
      ub: 20,
    },
    {
      id: 3788,
      nombre: "COBALTO - urinario",
      ub: 20,
    },
    {
      id: 3814,
      nombre: "COBRE - eritrocitario",
      ub: 20,
    },
    {
      id: 3820,
      nombre: "COBRE - urinario",
      ub: 20,
    },
    {
      id: 3828,
      nombre: "COCAÍNA, GC-MS - Confirmatorio.",
      ub: 120,
    },
    {
      id: 3837,
      nombre: "COCCIDIOIDES INMITIS, Ac. Anti- BANDA F",
      ub: 0,
    },
    {
      id: 3845,
      nombre: "COCCIDIOIDES INMITIS, Ac. Anti- BANDA TP",
      ub: 0,
    },
    {
      id: 3854,
      nombre: "COCCIDIOIDES INMITIS, Ac. Anti- CIE",
      ub: 0,
    },
    {
      id: 3860,
      nombre: "COCCIDIOIDES INMITIS, Ac. Ig Totales Anti-",
      ub: 40,
    },
    {
      id: 3862,
      nombre: "COCCIDIOIDES INMITIS, Ac. IgG Anti-",
      ub: 28,
    },
    {
      id: 3871,
      nombre: "COCCIDIOIDES INMITIS, Ac. IgM Anti-",
      ub: 28,
    },
    {
      id: 3880,
      nombre: "COCLEARES, Ac. Anti- (Anti- P68 KDA) (Western Blot)",
      ub: 150,
    },
    {
      id: 3888,
      nombre: "CODEÍNA - sérica",
      ub: 50,
    },
    {
      id: 3890,
      nombre: "CODEÍNA - urinaria",
      ub: 50,
    },
    {
      id: 3905,
      nombre: "COFACTOR DE RISTOCETINA",
      ub: 60,
    },
    {
      id: 3910,
      nombre: "COLESTEROL NO HDL",
      ub: 5.5,
    },
    {
      id: 3922,
      nombre: "COMPLEMENTO C1Q (PROTEINA 11S)",
      ub: 28,
    },
    {
      id: 3926,
      nombre: "COMPLEMENTO C2",
      ub: 0,
    },
    {
      id: 3939,
      nombre: "CONCENTRACIÓN BACTERICIDA MÍNIMA (CBM)",
      ub: 28,
    },
    {
      id: 3948,
      nombre: "CONCENTRACION INHIBITORIA MINIMA (CIM)",
      ub: 28,
    },
    {
      id: 3953,
      nombre:
        "CONEXINA 26 -  MUTACIONES 35delG (GJB2) o Cx26 - PCR Para sordera hereditaria no sindrómica",
      ub: 77,
    },
    {
      id: 3955,
      nombre: "CONEXINA 26 - SECUENCIACIÓN - PCR",
      ub: 115,
    },
    {
      id: 3960,
      nombre: "COPROPORFIRINAS - eritrocitarias",
      ub: 15,
    },
    {
      id: 3974,
      nombre: "COREA DE HUNTINGTON - PCR",
      ub: 500,
    },
    {
      id: 3982,
      nombre: "CORPÚSCULOS METACROMÁTICOS - urinario",
      ub: 10,
    },
    {
      id: 3994,
      nombre: "CORRECCIÓN C/PLASMA NORMAL - aPTT",
      ub: 25,
    },
    {
      id: 3996,
      nombre: "CORRECCIÓN C/PLASMA NORMAL - TP",
      ub: 25,
    },
    {
      id: 4002,
      nombre: "CORTEX ADRENAL, Ac. ANTI- (A.A.C.A) ",
      ub: 0,
    },
    {
      id: 4008,
      nombre: "CORTISOL LIBRE - urinario (CLU)",
      ub: 12,
    },
    {
      id: 4012,
      nombre: "CORTISOL - salival",
      ub: 12,
    },
    {
      id: 4033,
      nombre: "COTININA - sérica",
      ub: 25,
    },
    {
      id: 4035,
      nombre: "COTININA - urinaria",
      ub: 25,
    },
    {
      id: 4050,
      nombre: "COXIELLA BURNETTI, Ac. IgG Anti-",
      ub: 30,
    },
    {
      id: 4059,
      nombre: "COXIELLA BURNETTI, Ac. IgM Anti-",
      ub: 30,
    },
    {
      id: 4068,
      nombre: "COXSACKIE VIRUS A, 2-7-9, Ac. Anti- (c/u)",
      ub: 19,
    },
    {
      id: 4076,
      nombre: "COXSACKIE VIRUS B, 1-2-3-4-5-6, Ag. (c/u)",
      ub: 19,
    },
    {
      id: 4085,
      nombre: "COXSACKIE VIRUS B, 1-2-3-4-5-6, Ac. Anti- (pool)",
      ub: 19,
    },
    {
      id: 4093,
      nombre: "COXSACKIE VIRUS B, 1-2-3-4-5-6, Ac. Anti- (c/u)",
      ub: 19,
    },
    {
      id: 4102,
      nombre: "COXSACKIE VIRUS B, 1-2-3-4-5-6, Ac. IgM Anti- (c/u)",
      ub: 23,
    },
    {
      id: 4105,
      nombre: "CREATINA - sérica",
      ub: 10,
    },
    {
      id: 4106,
      nombre: "CREATINA - urinaria",
      ub: 10,
    },
    {
      id: 4110,
      nombre: "CRIOCRITO",
      ub: 10,
    },
    {
      id: 4119,
      nombre: "CRIOFIBRINÓGENO",
      ub: 10,
    },
    {
      id: 4125,
      nombre: "CRISTALIZACIÓN en lágrimas ",
      ub: 7,
    },
    {
      id: 4132,
      nombre: "CROMO (Cr)- pelo",
      ub: 22,
    },
    {
      id: 4134,
      nombre: "CROMO (Cr) - sérico",
      ub: 20,
    },
    {
      id: 4136,
      nombre: "CROMO (Cr) - urinario",
      ub: 20,
    },
    {
      id: 4141,
      nombre: "CROMOGRANINA A",
      ub: 150,
    },
    {
      id: 4143,
      nombre: "CROMOSOMA, ALTERACIONES del (c/u) Delección Cromosoma 13 (FISH)",
      ub: 410,
    },
    {
      id: 4144,
      nombre: "CROMOSOMA, ALTERACIONES del (c/u) - Delección 17 P53 - (FISH)",
      ub: 410,
    },
    {
      id: 4145,
      nombre:
        "CROMOSOMA, ALTERACIONES del (c/u) Delección cromosoma 6 MYB (FISH)",
      ub: 410,
    },
    {
      id: 4146,
      nombre:
        "CROMOSOMA, ALTERACIONES del (c/u) Delección C11 ATM-5q-7q - gen ATM (FISH)",
      ub: 410,
    },
    {
      id: 4147,
      nombre:
        "CROMOSOMA, ALTERACIONES del (c/u) TRISOMÍA 12 - CENTRÓMERO 12 (FISH)",
      ub: 410,
    },
    {
      id: 4150,
      nombre: "CROMOSOMA FILADELFIA - PCR - LMC -",
      ub: 220,
    },
    {
      id: 4155,
      nombre: "CROMOSOMA X, FRAGILIDAD - PCR",
      ub: 250,
    },
    {
      id: 4160,
      nombre: "CROMOSOMA X, FISH",
      ub: 250,
    },
    {
      id: 4165,
      nombre: "CROMOSOMA Y, DELECCIONES del",
      ub: 275,
    },
    {
      id: 4187,
      nombre: "CROSS MATCH, AUTÓLOGO - Citom. de Flujo",
      ub: 210,
    },
    {
      id: 4190,
      nombre: "CROSS MATCH, AUTÓLOGO - Linfotoxicidad.",
      ub: 55,
    },
    {
      id: 4196,
      nombre: "CROSS MATCH, CONTRA PANEL",
      ub: 65,
    },
    {
      id: 4204,
      nombre: "CROSS MATCH, DONANTE - Citom. de Flujo",
      ub: 230,
    },
    {
      id: 4213,
      nombre: "CROSS MATCH, DONANTE - Linfotoxicidad.",
      ub: 65,
    },
    {
      id: 4221,
      nombre: "CROSS MATCH, DTT",
      ub: 65,
    },
    {
      id: 4230,
      nombre: "CROSS MATCH, MATRIMONIAL - Citometría de Flujo",
      ub: 300,
    },
    {
      id: 4240,
      nombre: "CROSS MATCH, PACIENTE HIPERSENSIBILIZADO",
      ub: 110,
    },
    {
      id: 4256,
      nombre: "CRYPTOSPORIDIUM Sp,",
      ub: 15,
    },
    {
      id: 4264,
      nombre: "CRYPTOCOCCUS NEOFORMANS, Ag.",
      ub: 40,
    },
    {
      id: 4266,
      nombre: "CRYPTOCOCCUS NEOFORMANS, Ag. (Microscopía - Tinta china)",
      ub: 8,
    },
    {
      id: 4290,
      nombre: "CUERPOS REDUCTORES",
      ub: 7,
    },
    {
      id: 4307,
      nombre: "4,4' -DDD (p,p' -DDD) - 4,4'-DICLORODIFENILDICLOROETANO",
      ub: 60,
    },
    {
      id: 4315,
      nombre: "4,4' -DDE (p,p' - DDE) - 4,4'-DICLORODIFENILDICLOROETILENO",
      ub: 60,
    },
    {
      id: 4324,
      nombre: "4,4' -DDT (p,p' -DDT) - 4,4'-DICLORODIFENILTRICLOROETANO",
      ub: 60,
    },
    {
      id: 4333,
      nombre: "DEGRANULACIÓN DE BASÓFILOS - TEST DE ACTIVACIÓN DE BASÓFILOS",
      ub: 50,
    },
    {
      id: 4340,
      nombre: "DEHIDROEPIANDROSTERONA",
      ub: 20,
    },
    {
      id: 4350,
      nombre:
        "Delta-BHC (d-HCH) - delta-HEXACLORURO de BENCENO - delta-HEXACLORAN - delta-LINDANO - delta-1,2,3,4,5,6-HEXACLOROCICLOHEXANO.",
      ub: 60,
    },
    {
      id: 4361,
      nombre: "DENGUE, Ac. Anti- IgG",
      ub: 35,
    },
    {
      id: 4363,
      nombre: "DENGUE, Ac. Anti- IgM",
      ub: 35,
    },
    {
      id: 4365,
      nombre: "DENGUE, Acs. Anti- IgG e IgM (Cualitativo)",
      ub: 35,
    },
    {
      id: 4367,
      nombre: "DENGUE, Ag. - ELISA",
      ub: 35,
    },
    {
      id: 4369,
      nombre: "DENGUE - PCR",
      ub: 110,
    },
    {
      id: 4370,
      nombre: "DENGUE - SEROTIPIFICACIÓN",
      ub: 130,
    },
    {
      id: 4375,
      nombre: "DEOXIPIRIDINOLINAS (DPD)",
      ub: 28,
    },
    {
      id: 4384,
      nombre: "DESIPRAMINA",
      ub: 24,
    },
    {
      id: 4387,
      nombre: "DESMOGLEINA, Ac. Anti- Ag. 1 y 3 IgG",
      ub: 110,
    },
    {
      id: 4388,
      nombre: "DIAZINÓN",
      ub: 60,
    },
    {
      id: 4392,
      nombre: "DIELDRIN",
      ub: 60,
    },
    {
      id: 4418,
      nombre: "DIMERO-D",
      ub: 35,
    },
    {
      id: 4435,
      nombre: "DIMETOATO",
      ub: 60,
    },
    {
      id: 4444,
      nombre: "DIMETOXIFENILETILAMINA, 3,4- (DMFA)",
      ub: 19,
    },
    {
      id: 4452,
      nombre: "DISULFOTÓN",
      ub: 60,
    },
    {
      id: 4461,
      nombre: "DNA, SS - CADENA SIMPLE (DNAss)",
      ub: 35,
    },
    {
      id: 4469,
      nombre: "DNA, DESNATURALIZADO, Ac. Anti -",
      ub: 40,
    },
    {
      id: 4478,
      nombre: "DNA, Muestra Forense",
      ub: 1400,
    },
    {
      id: 4503,
      nombre: "DOPAMINA, TOTAL - sérica",
      ub: 20,
    },
    {
      id: 4512,
      nombre: "DOPAMINA LIBRE - urinaria",
      ub: 20,
    },
    {
      id: 4521,
      nombre: "DOXEPINA",
      ub: 25,
    },
    {
      id: 4546,
      nombre: "ECHINOCOCCUS GRANULOSOS, Ac. IgG Anti-",
      ub: 23,
    },
    {
      id: 4549,
      nombre: "ECHINOCOCCUS GRANULOSOS, Ac. IgM Anti-",
      ub: 25,
    },
    {
      id: 4563,
      nombre: "ECHO COXSACKIE, 1-6 Ac. IgG Anti-",
      ub: 24,
    },
    {
      id: 4566,
      nombre: "ECHO COXSACKIE, 1-6 IgM",
      ub: 28,
    },
    {
      id: 4580,
      nombre: "ECHOVIRUS, Ac. IgG Anti-",
      ub: 30,
    },
    {
      id: 4583,
      nombre: "ECHOVIRUS, Ac. IgM Anti-",
      ub: 30,
    },
    {
      id: 4590,
      nombre: "ECTOPARÁSITOS, Búsqueda e identificación.",
      ub: 25,
    },
    {
      id: 4600,
      nombre: "ELASTASA PANCREÁTICA",
      ub: 120,
    },
    {
      id: 4615,
      nombre: "EMBRIOTOXICIDAD, BIOENSAYO.",
      ub: 0,
    },
    {
      id: 4623,
      nombre:
        "ENA, Ac. Anti- (ANTÍGENOS NUCLEARES EXTRAÍDOS, Ac. Anti- ) - (SSA, SSB, Sm, RNP o U1RNP)",
      ub: 50,
    },
    {
      id: 4632,
      nombre: "ANTICUERPOS ANTI GLIADINA ",
      ub: 14,
    },
    {
      id: 4640,
      nombre: "ENDOMISIO, AC. IGG ANTI- (EMA IGG-IGA)",
      ub: 14,
    },
    {
      id: 4648,
      nombre: "ENDOSULFAN I",
      ub: 60,
    },
    {
      id: 4649,
      nombre: "ENDOSULFAN II",
      ub: 60,
    },
    {
      id: 4652,
      nombre: "ENDOSULFAN SULFATO",
      ub: 60,
    },
    {
      id: 4666,
      nombre: "ENDRIN",
      ub: 60,
    },
    {
      id: 4668,
      nombre: "ENDRIN ALDEHIDO",
      ub: 0,
    },
    {
      id: 4674,
      nombre: "ENTAMOEBA HISTOLYTICA, Ac. IgG Anti-",
      ub: 40,
    },
    {
      id: 4677,
      nombre: "ENTAMOEBA HISTOLYTICA, Ac. IgM Anti-",
      ub: 40,
    },
    {
      id: 4682,
      nombre: "ENTEROCOCOS VANCOMICINA RESISTENTE - PCR",
      ub: 95,
    },
    {
      id: 4691,
      nombre: "ENTEROVIRUS - PCR",
      ub: 90,
    },
    {
      id: 4700,
      nombre: "ENZIMA CONVERTIDORA de ANGIOTENSINA (ECA)",
      ub: 40,
    },
    {
      id: 4709,
      nombre:
        "EPSTEIN BARR, Anti- EBNA (Epstein Barr Nuclear Associated Antigen)",
      ub: 40,
    },
    {
      id: 4717,
      nombre: "EPSTEIN BARR, detección cuantitativa - PCR",
      ub: 150,
    },
    {
      id: 4726,
      nombre: "EPSTEIN BARR, Early Antig. Ac.",
      ub: 30,
    },
    {
      id: 4728,
      nombre: "EPSTEIN BARR, detección cualitativa - PCR",
      ub: 90,
    },
    {
      id: 4734,
      nombre: "ERITROPOYETINA (EPO)",
      ub: 45,
    },
    {
      id: 4738,
      nombre: "ESCHERICHIA COLI - ENTEROPATÓGENA - PCR",
      ub: 95,
    },
    {
      id: 4749,
      nombre: "ESPERMA, Ac. Anti- ESPERMATOZOIDES (DIRECTO)",
      ub: 15,
    },
    {
      id: 4755,
      nombre: "ESPERMA, Ac. Anti- ESPERMATOZOIDES (INDIRECTO)",
      ub: 15,
    },
    {
      id: 4775,
      nombre: "ESPERMA, CÉLULAS REDONDAS CON DIFERENCIACIÓN DE PEROXIDASAS",
      ub: 10,
    },
    {
      id: 4778,
      nombre: "ESPERMA, CÉLULAS REDONDAS TOTALES EN SEMEN",
      ub: 5,
    },
    {
      id: 4793,
      nombre:
        "ESPERMA, CONDENSACIÓN NUCLEAR DE LA CROMATINA (Azul Anilina, Tinción)",
      ub: 25,
    },
    {
      id: 4811,
      nombre: "ESPERMA, DIGESTIÓN EN GELATINA ACROSÓMICA",
      ub: 20,
    },
    {
      id: 4823,
      nombre: "ESPERMA, ESPERMATOZOIDES EN ORINA, ESTUDIO DE  RETROEYACULACIÓN",
      ub: 10,
    },
    {
      id: 4825,
      nombre:
        "ESPERMA, ESPERMATOZOIDES DE ORINA, RECUPERACIÓN PARA SELECCIÓN  DIAGNÓSTICA",
      ub: 60,
    },
    {
      id: 4827,
      nombre:
        "ESPERMA, ESPERMATOZOIDES DE ORINA, RECUPERACIÓN PARA SELECCIÓN  EN INSEMINACIÓN",
      ub: 120,
    },
    {
      id: 4838,
      nombre: "ESPERMA, HETEROGENEIDAD CROMATÍNICA (NARANJA DE ACRIDINA)",
      ub: 20,
    },
    {
      id: 4846,
      nombre: "ESPERMA, INDICE DE TERATOZOOSPERMIA",
      ub: 20,
    },
    {
      id: 4858,
      nombre: "ESPERMOGRAMA COMPLETO",
      ub: 49,
    },
    {
      id: 4860,
      nombre: "ESPERMA - MODULO II",
      ub: 107,
    },
    {
      id: 4868,
      nombre:
        "ESPERMA, MORFOLOGÍA CRITERIO ESTRICTO (OMS 2010 - MORFOLOGÍA KRUGER)",
      ub: 10,
    },
    {
      id: 4878,
      nombre: "ESPERMA, PRUEBA DE SOBREVIDA ESPERMÁTICA",
      ub: 10,
    },
    {
      id: 4889,
      nombre: "ESPERMA, RECUENTO DE ESPERMATOZOIDES",
      ub: 6,
    },
    {
      id: 4923,
      nombre: "ESPERMA, SELECCIÓN DE GRADIENTES (DIAGNÓSTICO)",
      ub: 60,
    },
    {
      id: 4930,
      nombre: "ESPERMA, SELECCIÓN DE GRADIENTES (INSEMINACIÓN)",
      ub: 100,
    },
    {
      id: 4941,
      nombre: "ESPERMA, SWIM UP (DIAGNÓSTICO)",
      ub: 60,
    },
    {
      id: 4949,
      nombre: "ESPERMA, SWIM UP (INSEMINACIÓN)",
      ub: 100,
    },
    {
      id: 4964,
      nombre: "ESPERMA, TEST DE FRAGMENTACIÓN DE ADN ESPERMÁTICO",
      ub: 110,
    },
    {
      id: 4971,
      nombre: "ESPERMA, TEST DE HIPERACTIVACIÓN",
      ub: 22,
    },
    {
      id: 4978,
      nombre: "ESPERMA, TEST DE MOST",
      ub: 75,
    },
    {
      id: 4985,
      nombre: "ESPERMA, TEST HIPOSMÓTICO",
      ub: 8,
    },
    {
      id: 4999,
      nombre: "ESTEATOCRITO (Grasas - materia fecal)",
      ub: 9,
    },
    {
      id: 5008,
      nombre: "ESTIRENO",
      ub: 16,
    },
    {
      id: 5016,
      nombre: "ESTRADIOL BIODISPONIBLE (E2 Biodisponible)",
      ub: 25,
    },
    {
      id: 5033,
      nombre: "ESTRIOL LIBRE - sérico.",
      ub: 35,
    },
    {
      id: 5043,
      nombre: "ETIÓN",
      ub: 60,
    },
    {
      id: 5050,
      nombre: "EUGLOBULINAS, LISIS de (pre y post-isquemia)",
      ub: 15,
    },
    {
      id: 5053,
      nombre: "EVEROLIMUS",
      ub: 90,
    },
    {
      id: 5055,
      nombre: "EXTASIS - MDMA (Inmunoensayo)",
      ub: 45,
    },
    {
      id: 5059,
      nombre: "FACTOR de COAGULACIÓN II",
      ub: 35,
    },
    {
      id: 5067,
      nombre: "FACTOR de COAGULACIÓN XI",
      ub: 35,
    },
    {
      id: 5076,
      nombre: "FACTOR de COAGULACIÓN XII",
      ub: 35,
    },
    {
      id: 5077,
      nombre: "FACTOR de COAGULACIÓN XIII",
      ub: 35,
    },
    {
      id: 5085,
      nombre: "FACTOR INTRÍNSECO, Ac. Anti-",
      ub: 55,
    },
    {
      id: 5093,
      nombre: "FACTOR REUMATOIDEO (Nefelometría)",
      ub: 16,
    },
    {
      id: 5102,
      nombre: "FACTOR V LEIDEN - PCR",
      ub: 75,
    },
    {
      id: 5116,
      nombre: "FACTOR VON WILLEBRAND, Funcional",
      ub: 70,
    },
    {
      id: 5119,
      nombre: "FACTOR VON WILLEBRAND (Inmunológico)",
      ub: 60,
    },
    {
      id: 5127,
      nombre: "FAMPHUR (FAMFUR)",
      ub: 60,
    },
    {
      id: 5132,
      nombre: "FELBAMATO",
      ub: 0,
    },
    {
      id: 5136,
      nombre: "FENCICLIDINA - FENILCICLOHEXILPIPERIDINA -PCP (IFP)",
      ub: 20,
    },
    {
      id: 5144,
      nombre: "FENETILAMINA - F.E.A.",
      ub: 25,
    },
    {
      id: 5204,
      nombre: "FENITOTRIÓN",
      ub: 60,
    },
    {
      id: 5213,
      nombre: "FENOLES - urinarios",
      ub: 19,
    },
    {
      id: 5222,
      nombre: "FENTANILO - urinario",
      ub: 50,
    },
    {
      id: 5230,
      nombre: "FERRITINA",
      ub: 15,
    },
    {
      id: 5238,
      nombre: "FIBRINÓGENO, PRODUCTOS DE DEGRADACIÓN (P.D.F.) - urinario",
      ub: 30,
    },
    {
      id: 5247,
      nombre: "FIBROSIS QUÍSTICA, 19 MUTACIONES - PCR",
      ub: 310,
    },
    {
      id: 5255,
      nombre: "FIBROSIS QUÍSTICA, 29 MUTACIONES - PCR",
      ub: 450,
    },
    {
      id: 5258,
      nombre: "FIBROSIS QUÍSTICA, 32 MUTACIONES - PCR",
      ub: 465,
    },
    {
      id: 5265,
      nombre: "FIBROSIS QUISTICA, DF508",
      ub: 100,
    },
    {
      id: 5273,
      nombre: "FILIACIÓN ESTUDIO DNA EXTRA (por cada uno agregado)",
      ub: 200,
    },
    {
      id: 5281,
      nombre: "FILIACIÓN ESTUDIO DNA HASTA 3",
      ub: 700,
    },
    {
      id: 5290,
      nombre: "FISH WILLIAMS",
      ub: 410,
    },
    {
      id: 5298,
      nombre: "FK - 506 - Tacrolimus",
      ub: 60,
    },
    {
      id: 5300,
      nombre: "FLAVIVIRUS",
      ub: 90,
    },
    {
      id: 5307,
      nombre: "FORATO",
      ub: 60,
    },
    {
      id: 5319,
      nombre: "FOSFATASA ÁCIDA LEUCOCITARIA",
      ub: 15,
    },
    {
      id: 5324,
      nombre: "FOSFATASA ACIDA PROSTATICA (RIA)",
      ub: 19,
    },
    {
      id: 5332,
      nombre: "FOSFATASA ÁCIDA TARTRATO RESISTENTE",
      ub: 8,
    },
    {
      id: 5335,
      nombre: "FOSFATASA ÁCIDA TARTRATO RESISTENTE LEUC.",
      ub: 12,
    },
    {
      id: 5349,
      nombre: "FOSFATASA ALCALINA OSEA (RIA)",
      ub: 25,
    },
    {
      id: 5375,
      nombre: "FOSFATIDIL COLINA, Ac. IgG Anti-",
      ub: 18,
    },
    {
      id: 5378,
      nombre: "FOSFATIDIL COLINA, Ac. IgM Anti-",
      ub: 18,
    },
    {
      id: 5392,
      nombre: "FOSFATIDIL GLICEROL, Ac. IgG Anti-",
      ub: 20,
    },
    {
      id: 5409,
      nombre: "FOSFATIDIL INOSITOL, Ac. IgG Anti-",
      ub: 18,
    },
    {
      id: 5412,
      nombre: "FOSFATIDIL INOSITOL, Ac. IgM Anti-",
      ub: 18,
    },
    {
      id: 5424,
      nombre: "FOSFATIDIL SERINA, Ac. IgA Anti-",
      ub: 35,
    },
    {
      id: 5426,
      nombre: "FOSFATIDIL SERINA, Ac. IgG ó Ac. Totales Anti-",
      ub: 25,
    },
    {
      id: 5428,
      nombre: "FOSFATIDIL SERINA, Ac. IgM Anti-",
      ub: 25,
    },
    {
      id: 5443,
      nombre: "FOSFOHEXOSA ISOMERASA, Sérica - PHI",
      ub: 6,
    },
    {
      id: 5452,
      nombre: "FOSFOLIPIDOS, Ac. IgG Anti-",
      ub: 20,
    },
    {
      id: 5461,
      nombre: "FOSFOLIPIDOS, Ac. IgM Anti-",
      ub: 20,
    },
    {
      id: 5465,
      nombre: "FOSFOLIPIDOS, Ac. Totales Anti- (IgA, IgG, IgM)",
      ub: 25,
    },
    {
      id: 5469,
      nombre: "FREE ANDROGEN INDEX-FAI",
      ub: 30,
    },
    {
      id: 5472,
      nombre: "FRIEDRICH, ATAXIA DE",
      ub: 450,
    },
    {
      id: 5478,
      nombre: "FRUCTOSA, líquido seminal o sérica o urinaria",
      ub: 10,
    },
    {
      id: 5486,
      nombre: "FSH, Urinaria (HORMONA FOLÍCULO ESTIMULANTE - Urinaria)",
      ub: 0,
    },
    {
      id: 5494,
      nombre: "GABAPENTINA",
      ub: 0,
    },
    {
      id: 5503,
      nombre:
        "GAD, Ac. Anti- Glutamico Acid Decarboxilase (ÁCIDO GLUTÁMICO DESCARBOXILASA, Ac. Anti-)",
      ub: 45,
    },
    {
      id: 5508,
      nombre: "GALACTOMANANO de ASPERGILLUS, Ag.",
      ub: 100,
    },
    {
      id: 5512,
      nombre: "GALACTOSA 1-URIDIL FOSFOTRANSFERASA",
      ub: 75,
    },
    {
      id: 5520,
      nombre:
        "Gamma-BHC (?-HCH) - gamma-HEXACLORURO de BENCENO - gamma-HEXACLORAN - gamma-LINDANO - gamma-1,2,3,4,5,6-HEXACLOROCICLOHEXANO",
      ub: 60,
    },
    {
      id: 5529,
      nombre: "GANGLIOSIDO ASIALO GM1, Ac. Anti-",
      ub: 200,
    },
    {
      id: 5533,
      nombre: "GANGLIOSIDO GD 1B, Ac. Anti-",
      ub: 150,
    },
    {
      id: 5537,
      nombre: "GANGLIOSIDO GM1, Ac. (IgG + IgM) Anti-",
      ub: 150,
    },
    {
      id: 5541,
      nombre: "GANGLIOSIDO QUADROSIALO, GQ1b Ac. IgG",
      ub: 200,
    },
    {
      id: 5546,
      nombre:
        "GANGLIOSIDOS PANEL, Ac. (IgG + IgM) GM1 Asialo, GM2, GD1A, GD1b, GQ1b",
      ub: 300,
    },
    {
      id: 5555,
      nombre: "GENOTIPO de Rho (c/u)",
      ub: 15,
    },
    {
      id: 5563,
      nombre: "GENTAMICINA",
      ub: 25,
    },
    {
      id: 5576,
      nombre: "GLIADINA, AC. IGA ANTI- PÉPTIDO DEAMIDADO DE (DGP-IGA ANTI-)",
      ub: 24,
    },
    {
      id: 5583,
      nombre: "GLIADINA, AC. IGG ANTI- PÉPTIDO DEAMIDADO DE (DGP-IGG ANTI-)",
      ub: 24,
    },
    {
      id: 5589,
      nombre: "GLICEROL, sérico.",
      ub: 0,
    },
    {
      id: 5597,
      nombre: "GLICINA (HPLC)",
      ub: 0,
    },
    {
      id: 5606,
      nombre: "GLICOFORINA, Citometría de Flujo",
      ub: 30,
    },
    {
      id: 5621,
      nombre: "GLICOSAMINOGLICANOS, cuantitativo",
      ub: 70,
    },
    {
      id: 5632,
      nombre: "GLOBULINA LIGADORA DE ANDROGENOS Y ESTROGENOS (GLAE / SHBG)",
      ub: 22,
    },
    {
      id: 5640,
      nombre: "GLOBULINA LIGADORA DE CORTICOIDES (CBG)",
      ub: 0,
    },
    {
      id: 5644,
      nombre: "GLOBULINA TRANSPORTADORA DE TIROXINA (TBG)",
      ub: 42,
    },
    {
      id: 5649,
      nombre: "GLUCOCEREBROSIDASA",
      ub: 140,
    },
    {
      id: 5666,
      nombre: "GLUTATIÓN PEROXIDASA (GPO)",
      ub: 25,
    },
    {
      id: 5685,
      nombre: "HAEMOPHILUS INFLUENZA, Ac. IgG Anti-",
      ub: 40,
    },
    {
      id: 5687,
      nombre: "HAEMOPHILUS INFLUENZA, Ac. IgM Anti-",
      ub: 40,
    },
    {
      id: 5691,
      nombre: "HAEMOPHILUS INFLUENZAE B, Ag. - plasmático",
      ub: 25,
    },
    {
      id: 5694,
      nombre: "HAEMOPHILUS INFLUENZAE B, Ag. - urinario",
      ub: 25,
    },
    {
      id: 5708,
      nombre: "HALOPERIDOL",
      ub: 30,
    },
    {
      id: 5715,
      nombre: "HAM, PRUEBA DE",
      ub: 10,
    },
    {
      id: 5724,
      nombre: "HANTAVIRUS, Ac. IgG Anti-",
      ub: 60,
    },
    {
      id: 5726,
      nombre: "HANTAVIRUS, Ac. IgM Anti-",
      ub: 60,
    },
    {
      id: 5743,
      nombre: "HELICOBACTER PYLORI, Ac. IgA Anti-",
      ub: 22,
    },
    {
      id: 5751,
      nombre: "HELICOBACTER PYLORI, Ac. IgG Anti-",
      ub: 16,
    },
    {
      id: 5760,
      nombre: "HELICOBACTER PYLORI, Ac. IgM Anti-",
      ub: 16,
    },
    {
      id: 5768,
      nombre: "HELICOBACTER PYLORI, Aire espirado",
      ub: 0,
    },
    {
      id: 5777,
      nombre: "HELICOBACTER PYLORI (Cultivo - Tipificación).",
      ub: 28,
    },
    {
      id: 5780,
      nombre: "HEMATÍES, PRUEBA ELUSIÓN ÁCIDA DE",
      ub: 8,
    },
    {
      id: 5785,
      nombre:
        "HEMOCROMATOSIS, Gen HH - PCR (HEMOCROMATOSIS HEREDITARIA HH - Gen HFE-CROMOSOMA 6)",
      ub: 80,
    },
    {
      id: 5787,
      nombre: "HEMOCROMATOSIS, MUTACIÓN Gen C282Y - PCR",
      ub: 80,
    },
    {
      id: 5789,
      nombre: "HEMOCROMATOSIS, MUTACIÓN Gen H63D - PCR",
      ub: 80,
    },
    {
      id: 5791,
      nombre: "HEMOCROMATOSIS, MUTACIÓN Gen S65C - PCR",
      ub: 80,
    },
    {
      id: 5797,
      nombre: "HEMOCULTIVO AEROBIOS AUTOMATIZADO (c/u)",
      ub: 25,
    },
    {
      id: 5802,
      nombre: "HEMOGLOBINA A1 (Hb-A1) Electroforesis",
      ub: 12,
    },
    {
      id: 5811,
      nombre: "HEMOGLOBINA A2 (HbA2) (Cromatografía/Intercambio Iónico)",
      ub: 20,
    },
    {
      id: 5820,
      nombre: "HEMOGLOBINA FETAL",
      ub: 10,
    },
    {
      id: 5828,
      nombre: "HEMOGLOBINA S",
      ub: 9,
    },
    {
      id: 5837,
      nombre:
        "HEMOGLOBINURIA PAROXÍSTICA NOCTURNA, DETECCIÓN de -  por Citometría de Flujo",
      ub: 175,
    },
    {
      id: 5845,
      nombre: "HEMOPEXINA",
      ub: 0,
    },
    {
      id: 5854,
      nombre: "HEMOSIDERINURIA",
      ub: 9,
    },
    {
      id: 5868,
      nombre: "HEPARINA, Ac. Anti- (PFA4)",
      ub: 0,
    },
    {
      id: 5871,
      nombre:
        "HEPARINA, ACTIVIDAD ANTI XA de la (LMWH) - HEPARINA de BAJO PESO MOLECULAR (HBPM).",
      ub: 40,
    },
    {
      id: 5879,
      nombre: "HEPÁTICOS, AUTOANTICUERPOS (panel)",
      ub: 0,
    },
    {
      id: 5888,
      nombre:
        "HEPATITIS A, Ac. Anti- IgG (HVA IgG) o Ac. Totales (RIA o ELISA)",
      ub: 15,
    },
    {
      id: 5896,
      nombre: 'HEPATITIS B, Ac. Anti- "e" (HBe Ac)',
      ub: 15,
    },
    {
      id: 5905,
      nombre: 'HEPATITIS B, Ac. Anti- "Core" IgM (HBcM) - (RIA o ELISA)',
      ub: 18,
    },
    {
      id: 5914,
      nombre: "HEPATITIS B, Carga viral",
      ub: 185,
    },
    {
      id: 5931,
      nombre: "HEPATITIS B, DNA viral (HBV-DNA) (PCR - Cualitativo)",
      ub: 80,
    },
    {
      id: 5939,
      nombre: "HEPATITIS C, Ac. Anti- IgM",
      ub: 60,
    },
    {
      id: 5945,
      nombre: "HEPATITIS C, Antígeno ",
      ub: 60,
    },
    {
      id: 5956,
      nombre: "HEPATITIS C, Carga viral (PCR)",
      ub: 185,
    },
    {
      id: 5965,
      nombre: "HEPATITIS C, Genotipificación (PCR)",
      ub: 135,
    },
    {
      id: 5973,
      nombre: "HEPATITIS C, LIA",
      ub: 150,
    },
    {
      id: 5982,
      nombre: "HEPATITIS C, RNA Cualitativo - PCR",
      ub: 120,
    },
    {
      id: 5990,
      nombre: "HEPATITIS DELTA, Ac. IgG ó Totales Anti-",
      ub: 48,
    },
    {
      id: 5993,
      nombre: "HEPATITIS DELTA, Ac. IgM Anti-",
      ub: 50,
    },
    {
      id: 6008,
      nombre: "HEPATITIS E, Ac. IgG Anti-",
      ub: 30,
    },
    {
      id: 6011,
      nombre: "HEPATITIS E - PCR",
      ub: 125,
    },
    {
      id: 6016,
      nombre: "HEPTACLORO",
      ub: 60,
    },
    {
      id: 6019,
      nombre: "HEPTACLORO HEPOXIDE",
      ub: 60,
    },
    {
      id: 6028,
      nombre: "HER 2 / neu - ErbB2",
      ub: 500,
    },
    {
      id: 6034,
      nombre: "HERPES SIMPLEX, 1 / 2 - Antic. Totales (IFI)",
      ub: 30,
    },
    {
      id: 6037,
      nombre: "HERPES SIMPLEX, 1 / 2 - PCR",
      ub: 90,
    },
    {
      id: 6038,
      nombre: "HERPES SIMPLEX, 1 / 2 - TIPIFICACIÓN - PCR",
      ub: 130,
    },
    {
      id: 6040,
      nombre: "HERPES SIMPLEX 1, Ac. IgA Anti-",
      ub: 22,
    },
    {
      id: 6042,
      nombre: "HERPES SIMPLEX 1, Ac. IgG ó Totales Anti-",
      ub: 19,
    },
    {
      id: 6050,
      nombre: "HERPES SIMPLEX 1, Ac. IgM Anti-",
      ub: 19,
    },
    {
      id: 6059,
      nombre: "HERPES SIMPLEX 2, Ac. IgA Anti-",
      ub: 22,
    },
    {
      id: 6067,
      nombre: "HERPES SIMPLEX 2, Ac. IgG ó Totales Anti-",
      ub: 19,
    },
    {
      id: 6076,
      nombre: "HERPES SIMPLEX 2, Ac. IgM Anti-",
      ub: 19,
    },
    {
      id: 6084,
      nombre: "HERPES SIMPLEX, Ag.",
      ub: 25,
    },
    {
      id: 6093,
      nombre: "HERPES VIRUS 6 HUMAN, Ac. IgG (HHV6-IgG) Anti-",
      ub: 37,
    },
    {
      id: 6096,
      nombre: "HERPES VIRUS 6 HUMAN, Ac. IgM (HHV6-IgM) Anti-",
      ub: 37,
    },
    {
      id: 6098,
      nombre: "HERPES VIRUS 6 HUMAN - PCR",
      ub: 90,
    },
    {
      id: 6100,
      nombre: "HERPES VIRUS 6 HUMAN - Carga Viral",
      ub: 150,
    },
    {
      id: 6110,
      nombre: "HERPES VIRUS 7, Ac. IgG Anti- HHV",
      ub: 45,
    },
    {
      id: 6113,
      nombre: "HERPES VIRUS 7, Ac. IgM Anti- HHV",
      ub: 45,
    },
    {
      id: 6117,
      nombre: "HERPES VIRUS 8 - Ac. IgG Anti- HHV",
      ub: 60,
    },
    {
      id: 6118,
      nombre: "HERPES VIRUS 8 - Ac. IgM Anti- HHV",
      ub: 60,
    },
    {
      id: 6120,
      nombre: "HERPES VIRUS 8 - PCR",
      ub: 90,
    },
    {
      id: 6136,
      nombre: "HEXANO",
      ub: 16,
    },
    {
      id: 6144,
      nombre: "HEXANODIONA, (2,5-)",
      ub: 20,
    },
    {
      id: 6153,
      nombre: "HEXOSAMINIDASA TOTAL, A y B",
      ub: 300,
    },
    {
      id: 6170,
      nombre: "HIDATIDOSIS, Ac. IgM Anti- (ELISA)",
      ub: 25,
    },
    {
      id: 6173,
      nombre: "HIDATIDOSIS, Ac. IgM Anti- (IFI)",
      ub: 20,
    },
    {
      id: 6183,
      nombre: "HIDROCARBUROS ALIFÁTICOS",
      ub: 16,
    },
    {
      id: 6187,
      nombre: "HIDROCARBUROS AROMÁTICOS",
      ub: 16,
    },
    {
      id: 6196,
      nombre: "HIDROLASAS ÁCIDAS EN LEUCOCITOS",
      ub: 0,
    },
    {
      id: 6204,
      nombre: "HIDROXIPIRENO",
      ub: 20,
    },
    {
      id: 6209,
      nombre: "HIERRO, Médula Osea (MO) - TINCIÓN DE PERLS.",
      ub: 12,
    },
    {
      id: 6211,
      nombre: "HIERRO, TINCIÓN DE",
      ub: 8,
    },
    {
      id: 6213,
      nombre: "HIERRO - Urinario",
      ub: 4,
    },
    {
      id: 6222,
      nombre: "HISTAMINA - Plasmática",
      ub: 38,
    },
    {
      id: 6225,
      nombre: "HISTAMINA - Urinaria",
      ub: 38,
    },
    {
      id: 6238,
      nombre: "HISTONA, Ac. Anti-",
      ub: 30,
    },
    {
      id: 6247,
      nombre: "HISTOPLASMA CAPSULATUM, Ac. IgG Anti-",
      ub: 24,
    },
    {
      id: 6255,
      nombre: "HISTOPLASMA CAPSULATUM, Ac. IgM Anti-",
      ub: 24,
    },
    {
      id: 6264,
      nombre: "HIV - PCR Cualitativo",
      ub: 80,
    },
    {
      id: 6272,
      nombre: "HIV 1 ANTI-P-24 (core)",
      ub: 34,
    },
    {
      id: 6275,
      nombre: "HIV - P-24 (Antigenemia)",
      ub: 25,
    },
    {
      id: 6278,
      nombre: "HIV - P-24 - HIV 1 y 2 (Combo)",
      ub: 20,
    },
    {
      id: 6281,
      nombre: "HIV - RESISTENCIA A ANTIRETROVIRALES",
      ub: 400,
    },
    {
      id: 6284,
      nombre: "HIV - RESISTENCIA A  INHIBIDORES DE INTEGRASA ",
      ub: 150,
    },
    {
      id: 6300,
      nombre: "HLA A, Molecular",
      ub: 150,
    },
    {
      id: 6303,
      nombre: "HLA B, Molecular",
      ub: 150,
    },
    {
      id: 6332,
      nombre: "HLA B 27 Molecular",
      ub: 80,
    },
    {
      id: 6337,
      nombre: "HLA-B 5701 GENOTIPO, ABACAVIR HIPERSENSIBILIDAD, sangre",
      ub: 200,
    },
    {
      id: 6341,
      nombre: "HLA C Molecular",
      ub: 140,
    },
    {
      id: 6401,
      nombre: "HLA DQ Molecular",
      ub: 160,
    },
    {
      id: 6409,
      nombre: "HLA DR Citometría Flujo",
      ub: 100,
    },
    {
      id: 6426,
      nombre: "HLA DR Molecular",
      ub: 150,
    },
    {
      id: 6443,
      nombre: "HLA DQA1, DQB1 (DIABETES) PCR",
      ub: 160,
    },
    {
      id: 6445,
      nombre: "HLA DQ2-DQ8 (CELIAQUIA) PCR",
      ub: 160,
    },
    {
      id: 6452,
      nombre: "HOMOCISTEINA",
      ub: 30,
    },
    {
      id: 6455,
      nombre: "HOMOCISTINA, Orina",
      ub: 15,
    },
    {
      id: 6486,
      nombre: "HOWELL, TEST (Plasma recalcificado, tiempo de-)",
      ub: 5,
    },
    {
      id: 6529,
      nombre: "HTLV-1 Ac",
      ub: 25,
    },
    {
      id: 6533,
      nombre: "HTLV-1 PCR",
      ub: 100,
    },
    {
      id: 6537,
      nombre: "HTLV-I/II (Partículas o ELISA)",
      ub: 23,
    },
    {
      id: 6540,
      nombre: "HTLV, Confirmatorio (Western Blot)",
      ub: 100,
    },
    {
      id: 6554,
      nombre: "Hu (ANNA-1) Ac. Anti-",
      ub: 100,
    },
    {
      id: 6560,
      nombre: "IA 2, Ac. Anti- (Ac. Anti- TIROSINFOSFATASA 2)",
      ub: 50,
    },
    {
      id: 6570,
      nombre: "IDENTIFICACIÓN MICROBIOLÓGICA AUTOMATIZADA.",
      ub: 50,
    },
    {
      id: 6572,
      nombre: "IDENTIFICACIÓN MICROBIOLÓGICA POR PCR. ",
      ub: 50,
    },
    {
      id: 6585,
      nombre:
        "IgA BC - lágrima - INMUNOGLOBULINA A Baja Concentración en lágrima.",
      ub: 20,
    },
    {
      id: 6587,
      nombre:
        "IgA BC - LCR - INMUNOGLOBULINA A Baja Concentración en Líquido Céfalo Raquídeo.",
      ub: 6,
    },
    {
      id: 6589,
      nombre:
        "IgA BC - saliva - INMUNOGLOBULINA A Baja Concentración en saliva.",
      ub: 6,
    },
    {
      id: 6597,
      nombre: "IgE BC - INMUNOGLOBULINA E Baja Concentración.",
      ub: 12,
    },
    {
      id: 6600,
      nombre:
        "IgE BC - lágrimas - INMUNOGLOBULINA E Baja Concentración en lágrima.",
      ub: 20,
    },
    {
      id: 6602,
      nombre:
        "IgE BC - LCR - INMUNOGLOBULINA E Baja Concentración en Líquido Céfalo Raquídeo.",
      ub: 12,
    },
    {
      id: 6606,
      nombre: "IGE ESPECÍFICA - INMUNOGLOBULINA E ESPECÍFICA.",
      ub: 13,
    },
    {
      id: 6614,
      nombre:
        "IgE RAST - INMUNOGLOBULINA E - para antibióticos (incluye Penicilinas)",
      ub: 20,
    },
    {
      id: 6634,
      nombre: "IgG - INMUNOGLOBULINA G, ASOCIADA A PLAQUETAS.",
      ub: 0,
    },
    {
      id: 6640,
      nombre: "IgG - INMUNOGLOBULINA G, Índice de (LCR/Sérica)",
      ub: 28,
    },
    {
      id: 6648,
      nombre: "IgG - LCR - INMUNOGLOBULINA G en Líquido Céfalo Raquídeo.",
      ub: 20,
    },
    {
      id: 6652,
      nombre: "IgG - INMUNOGLUBULINA G, INTOLERANCIA ALIMENTICIA (c/u)",
      ub: 10,
    },
    {
      id: 6657,
      nombre: "SUBCLASES DE INMUNOGLOBULINA G (IGG1, IGG2, IGG3, IGG4)",
      ub: 110,
    },
    {
      id: 6666,
      nombre: "IgM - INMUNOGLOBULINA M, ASOCIADA A PLAQUETAS.",
      ub: 0,
    },
    {
      id: 6674,
      nombre: "IgM, LCR - INMUNOGLOBULINA M, en Líquido Céfalo Raquídeo.",
      ub: 12,
    },
    {
      id: 6676,
      nombre: "IgM - INMUNOGLOBULINA M Baja Concentración, en saliva",
      ub: 12,
    },
    {
      id: 6691,
      nombre: "IL2-R - CD25 receptor soluble",
      ub: 0,
    },
    {
      id: 6700,
      nombre: "INDICAN",
      ub: 5,
    },
    {
      id: 6708,
      nombre: "INDICE de INSULINO RESISTENCIA",
      ub: 13.5,
    },
    {
      id: 6711,
      nombre: "INDICE de FUNCIÓN RENAL",
      ub: 3,
    },
    {
      id: 6713,
      nombre: "INDICE ABUMINA / CREATININA - RAC",
      ub: 15.5,
    },
    {
      id: 6714,
      nombre: "INDICE de LESIÓN RENAL (PROTEINAS / CREATININA) - urinario",
      ub: 4.5,
    },
    {
      id: 6717,
      nombre: "INDICE de PRODUCCIÓN RETICULOCITARIA",
      ub: 5,
    },
    {
      id: 6720,
      nombre: "INDICE de RESORCIÓN OSEA",
      ub: 5,
    },
    {
      id: 6722,
      nombre: "INDICE de RIESGO CARDIOVACULAR ",
      ub: 2,
    },
    {
      id: 6725,
      nombre: "INFLUENZA A, ANTÍGENO (Ag.)",
      ub: 20,
    },
    {
      id: 6728,
      nombre:
        "INFLUENZA A, ANTIGENOS (Ags.) - Material: hisopado nasal / faríngeo / aspirados - PCR",
      ub: 95,
    },
    {
      id: 6730,
      nombre:
        "INFLUENZA A, ANTIGENOS (Ags.) Suptipo H1N1 - Material: hisopado nasal / faríngeo / aspirados",
      ub: 20,
    },
    {
      id: 6732,
      nombre:
        "INFLUENZA A, ANTIGENOS (Ags.) Suptipo H1N1 - Material: hisopado nasal / faríngeo / aspirados - PCR",
      ub: 95,
    },
    {
      id: 6734,
      nombre: "INFLUENZA A, Ac. IgG Anti-",
      ub: 16,
    },
    {
      id: 6742,
      nombre: "INFLUENZA A, Ac. IgM Anti-",
      ub: 18,
    },
    {
      id: 6751,
      nombre: "INFLUENZA B, Ac. IgG Anti-",
      ub: 16,
    },
    {
      id: 6760,
      nombre: "INFLUENZA B, Ac. IgM Anti-",
      ub: 18,
    },
    {
      id: 6768,
      nombre: "INFLUENZA B, ANTÍGENO (Ag.)",
      ub: 20,
    },
    {
      id: 6788,
      nombre: "INHIBINA B - sérica",
      ub: 100,
    },
    {
      id: 6819,
      nombre: "INMUNOCOMPLEJOS CIRCULANTES (CIC)",
      ub: 30,
    },
    {
      id: 6848,
      nombre: "INMUNOFIJACIÓN - LCR",
      ub: 50,
    },
    {
      id: 6850,
      nombre: "INMUNOFIJACIÓN - sérica",
      ub: 50,
    },
    {
      id: 6852,
      nombre: "INMUNOFIJACIÓN - urinaria",
      ub: 50,
    },
    {
      id: 6856,
      nombre: "INMUNOMARCACIÓN EN SANGRE PERIFÉRICA.",
      ub: 0,
    },
    {
      id: 6862,
      nombre: "INSULINA, Ac. Anti- (Ac. Anti- IAA)",
      ub: 35,
    },
    {
      id: 6871,
      nombre: "INTERFERON GAMMA",
      ub: 100,
    },
    {
      id: 6879,
      nombre: "INTERLEUQUINA (c/u)",
      ub: 100,
    },
    {
      id: 6888,
      nombre: "IODO-AZIDA Prueba de",
      ub: 9,
    },
    {
      id: 6896,
      nombre: "IONOGRAMA - materia fecal",
      ub: 7,
    },
    {
      id: 6898,
      nombre: "IRREGULARES ANTICUERPOS, Identificación. ",
      ub: 15,
    },
    {
      id: 6905,
      nombre: "ISLOTE LANGERHANS PANCREÁTICOS, Ac. Anti- (ICA)",
      ub: 25,
    },
    {
      id: 6912,
      nombre: "JO-1, Ac. Anti-",
      ub: 25,
    },
    {
      id: 6919,
      nombre: "KETAMINA - urinaria",
      ub: 50,
    },
    {
      id: 6925,
      nombre: "KREMER, TEST DE",
      ub: 25,
    },
    {
      id: 6930,
      nombre: "LA, AC. ANTI- (LA/SSB)",
      ub: 15,
    },
    {
      id: 6932,
      nombre: "LACTOCRITO",
      ub: 8,
    },
    {
      id: 6936,
      nombre: "LACTOFERRINA.",
      ub: 14,
    },
    {
      id: 6939,
      nombre: "LACTOSA, TOLERANCIA A LA",
      ub: 7.5,
    },
    {
      id: 6947,
      nombre: "LC-1, Ac. Anti- ",
      ub: 20,
    },
    {
      id: 6956,
      nombre: "LEGIONELLA PNEUMOPHILA, Ac. IgG Anti-",
      ub: 20,
    },
    {
      id: 6958,
      nombre: "LEGIONELLA PNEUMOPHILA, Ac. IgM Anti-",
      ub: 20,
    },
    {
      id: 6970,
      nombre: "LEGIONELLA PNEUMOPHILA, Ag.",
      ub: 0,
    },
    {
      id: 6975,
      nombre: "LEISHMANIA, Ac. Anti-",
      ub: 25,
    },
    {
      id: 6978,
      nombre: "LEISHMANIA - PCR",
      ub: 95,
    },
    {
      id: 6982,
      nombre: "LEPTINA",
      ub: 50,
    },
    {
      id: 6990,
      nombre: "LEPTOSPIRA, Ac. Anti- (ELISA / IFI)",
      ub: 19,
    },
    {
      id: 6999,
      nombre: "LEPTOSPIRA, Ac. Anti- (HAI / macroaglutinación)",
      ub: 20,
    },
    {
      id: 7007,
      nombre: "LEPTOSPIRA, Ac. IgM Anti-",
      ub: 30,
    },
    {
      id: 7010,
      nombre: "LEPTOSPIRA (Confirmatorio - Microaglutinación)",
      ub: 28,
    },
    {
      id: 7013,
      nombre: "LEPTOSPIRA (cultivo)",
      ub: 20,
    },
    {
      id: 7027,
      nombre:
        "LEUCINA - sérica (AA) (incluida en el perfil de AA en diferentes matrices - Cromatografía de AA)",
      ub: 0,
    },
    {
      id: 7059,
      nombre: "LEVADURAS SENSIBILIDAD - SCREENING",
      ub: 0,
    },
    {
      id: 7064,
      nombre: "LEVADURAS TIPIFICACIÓN",
      ub: 30,
    },
    {
      id: 7076,
      nombre: "LEVODOPA - sérica",
      ub: 28,
    },
    {
      id: 7079,
      nombre: "LEVODOPA - urinaria",
      ub: 28,
    },
    {
      id: 7093,
      nombre: "LEVULOSA - semen",
      ub: 0,
    },
    {
      id: 7096,
      nombre: "LEVULOSA - sérica",
      ub: 0,
    },
    {
      id: 7099,
      nombre: "LEVULOSA - urinaria",
      ub: 0,
    },
    {
      id: 7119,
      nombre: "LINDANE",
      ub: 60,
    },
    {
      id: 7127,
      nombre: "LINFOCITARIO, CULTIVO MIXTO",
      ub: 0,
    },
    {
      id: 7153,
      nombre: 'LINFOCITOS PERIFÉRICOS "SRY"',
      ub: 0,
    },
    {
      id: 7170,
      nombre: "LIPASA - urinaria (Lipasuria)",
      ub: 4,
    },
    {
      id: 7187,
      nombre: "LIPOPROTEINA A - LP(A)",
      ub: 20,
    },
    {
      id: 7210,
      nombre: "LISOZIMA",
      ub: 20,
    },
    {
      id: 7230,
      nombre: "LISTERIA, CULTIVO",
      ub: 12,
    },
    {
      id: 7240,
      nombre: "LISTERIA, Ac. IgM Anti-",
      ub: 12,
    },
    {
      id: 7242,
      nombre: "LISTERIA - PCR",
      ub: 80,
    },
    {
      id: 7260,
      nombre: "LIXITOL",
      ub: 60,
    },
    {
      id: 7262,
      nombre: "LKM, Ac. Anti-",
      ub: 20,
    },
    {
      id: 7270,
      nombre: "LYNCH, SINDROME DE - GEN MLH1 (MYH)",
      ub: 2300,
    },
    {
      id: 7271,
      nombre: "LYNCH, SINDROME DE - GEN MSH2 SECUENCIACIÓN COMPLETA (M2Y)",
      ub: 1600,
    },
    {
      id: 7273,
      nombre: "LYNCH, SINDROME DE - GEN MSH6 (M6Y)",
      ub: 1800,
    },
    {
      id: 7274,
      nombre: "LYNCH, SINDROME DE - GEN PMS2 (M3Y)",
      ub: 1850,
    },
    {
      id: 7275,
      nombre: "LYNCH, SINDROME DE - GEN (MLH1, MSH2, MSH6, PMS2)",
      ub: 5700,
    },
    {
      id: 7278,
      nombre: "MACROAMILASA",
      ub: 25,
    },
    {
      id: 7284,
      nombre: "MACRO CK",
      ub: 14,
    },
    {
      id: 7289,
      nombre: "MACROPROLACTINEMIA",
      ub: 30,
    },
    {
      id: 7300,
      nombre: "MAGNESIO - eritrocitario",
      ub: 20,
    },
    {
      id: 7304,
      nombre: "MAGNESIO - pelo",
      ub: 30,
    },
    {
      id: 7315,
      nombre: "MAG-SGPG, Ac. IgM",
      ub: 120,
    },
    {
      id: 7319,
      nombre: "MALATION",
      ub: 60,
    },
    {
      id: 7324,
      nombre: "MALÓN DIALDEHIDO - TBARS",
      ub: 19,
    },
    {
      id: 7338,
      nombre: "MANGANESO - pelo",
      ub: 30,
    },
    {
      id: 7341,
      nombre: "MANGANESO - sérico",
      ub: 20,
    },
    {
      id: 7343,
      nombre: "MANGANESO - urinario",
      ub: 20,
    },
    {
      id: 7349,
      nombre: "MAO plaquetario",
      ub: 60,
    },
    {
      id: 7353,
      nombre: "MARCADORES PRONOSTICOS de LLC (Citometría de flujo)",
      ub: 154,
    },
    {
      id: 7366,
      nombre: "MEMBRANA BASAL, Ac. Anti-",
      ub: 8,
    },
    {
      id: 7375,
      nombre: "MERCURIO - pelo (Hg-pelo)",
      ub: 35,
    },
    {
      id: 7392,
      nombre: "METACUALONA",
      ub: 24,
    },
    {
      id: 7401,
      nombre: "METADONA (FPIA)",
      ub: 22,
    },
    {
      id: 7409,
      nombre: "METAHEMOGLOBINA",
      ub: 10,
    },
    {
      id: 7426,
      nombre: "METANEFRINAS LIBRES - plasmáticas",
      ub: 25,
    },
    {
      id: 7435,
      nombre: "METANOL - sangre",
      ub: 25,
    },
    {
      id: 7439,
      nombre: "METAPNEUMOVIRUS HUMANO, Ag. (hMPV)",
      ub: 40,
    },
    {
      id: 7440,
      nombre: "METAPNEUMOVIRUS HUMANO, Ag. (hMPV) - PCR",
      ub: 95,
    },
    {
      id: 7443,
      nombre: "METIL ETIL CETONA",
      ub: 25,
    },
    {
      id: 7449,
      nombre: "METIL PARATHION",
      ub: 60,
    },
    {
      id: 7454,
      nombre: "METIL-TRITIÓN",
      ub: 60,
    },
    {
      id: 7460,
      nombre: "METILENTETRAHIDROFOLATO REDUCTASA (MTHRT)- PCR",
      ub: 75,
    },
    {
      id: 7469,
      nombre: "METILNICOTINAMIDA",
      ub: 0,
    },
    {
      id: 7477,
      nombre: "METIONINA - PRUEBA DE SOBRECARGA (dos determinaciones)",
      ub: 40,
    },
    {
      id: 7486,
      nombre: "METOTREXATO",
      ub: 40,
    },
    {
      id: 7489,
      nombre:
        "MICOLOGÍA, CULTIVO DE HONGOS PRODUCTORES DE MICOSIS PROFUNDAS O SISTÉMICAS.",
      ub: 15,
    },
    {
      id: 7490,
      nombre:
        "MICOLOGÍA, IDENTIFICACIÓN DE HONGOS PRODUCTORES DE MICOSIS PROFUNDAS O SISTÉMICAS.",
      ub: 15,
    },
    {
      id: 7491,
      nombre: "MICOLOGÍA, PRUEBA DE SENSIBILIDAD A ANTIFÚNGICOS.",
      ub: 15,
    },
    {
      id: 7495,
      nombre: "MICROAGREGADO PLAQUETARIOS",
      ub: 0,
    },
    {
      id: 7499,
      nombre: "MICROARRAYS - ESTUDIO GENETICO",
      ub: 0,
    },
    {
      id: 7503,
      nombre: "MICROGLOBULINA BETA 2",
      ub: 18,
    },
    {
      id: 7520,
      nombre: "MICROSPORIDIA INVESTIGACIÓN",
      ub: 15,
    },
    {
      id: 7527,
      nombre: "MIELOPEROXIDASA, Ac. Ant- (Inmunológica)",
      ub: 70,
    },
    {
      id: 7529,
      nombre: "MIELOPEROXIDASA, (Citoquímica)  ",
      ub: 15,
    },
    {
      id: 7537,
      nombre: "MIOCARDIO, Ac. Anti-",
      ub: 8,
    },
    {
      id: 7546,
      nombre: "MIOGLOBINA - sérica",
      ub: 13,
    },
    {
      id: 7550,
      nombre: "MIOGLOBINA - urinaria",
      ub: 15,
    },
    {
      id: 7571,
      nombre: "MITOCONDRIAL M2, Ac. Anti- (AMA M2)",
      ub: 27,
    },
    {
      id: 7580,
      nombre: "MONOSACÁRIDOS (Cromatografía)",
      ub: 25,
    },
    {
      id: 7597,
      nombre: "MOPEG (3-METOXI, 4-HIDROXI- FENIL ETIL GLICOL)",
      ub: 20,
    },
    {
      id: 7606,
      nombre: "MUCOPOLISACARIDOS - urinarios (cuantitativo)",
      ub: 65,
    },
    {
      id: 7614,
      nombre: "MUCOSA GÁSTRICA, Ac. Anti- (CELULAS PARIETALES Ac. Anti- (IFI)",
      ub: 19,
    },
    {
      id: 7621,
      nombre: "MUCOSEMEN CRUZADO (método microscópico)",
      ub: 26,
    },
    {
      id: 7631,
      nombre: "MUSCULO ESTRIADO, Ac. Anti-",
      ub: 12,
    },
    {
      id: 7636,
      nombre: "MuSK, Ac. Anti-",
      ub: 220,
    },
    {
      id: 7640,
      nombre: "MUTACIONES EN EL DOMINIO TK DEL TRANSCRIPTO BCR-AB",
      ub: 500,
    },
    {
      id: 7648,
      nombre: "MYCOAVIUM COMPLEX - PCR",
      ub: 0,
    },
    {
      id: 7657,
      nombre: "MYCOBACTERIA Sp, HEMOCULTIVO",
      ub: 17,
    },
    {
      id: 7660,
      nombre: "MYCOBACTERIA ATÍPICA - PCR",
      ub: 90,
    },
    {
      id: 7669,
      nombre: "MYCOBACTERIUM TUBERCULOSIS, DNA - PCR",
      ub: 70,
    },
    {
      id: 7674,
      nombre: "MYCOBACTERIUM TUBERCULOSIS, en LCR",
      ub: 0,
    },
    {
      id: 7691,
      nombre: "MYCOPLASMA - UREAPLASMA, Ac. Anti-",
      ub: 35,
    },
    {
      id: 7700,
      nombre: "MYCOPLASMA - UREAPLASMA, CULTIVO",
      ub: 25,
    },
    {
      id: 7708,
      nombre: "MYCOPLASMA HOMINIS, CULTIVO - Aislamiento",
      ub: 25,
    },
    {
      id: 7717,
      nombre: "MYCOPLASMA PNEUMONIAE, Ac. IgM Anti-",
      ub: 18,
    },
    {
      id: 7725,
      nombre: "MYCOPLASMA PNEUMONIAE, ANTÍGENO (Ag)",
      ub: 20,
    },
    {
      id: 7734,
      nombre: "MYCOPLASMA PNEUMONIAE, cultivo",
      ub: 0,
    },
    {
      id: 7736,
      nombre: "MYCOPLASMA PNEUMONIAE - PCR",
      ub: 90,
    },
    {
      id: 7742,
      nombre: "N,N-DIMETILTRIPTAMINA",
      ub: 24,
    },
    {
      id: 7751,
      nombre: "NEONATAL, 17-HIDROXIPROGESTERONA (17-HO-Pg-Neo)",
      ub: 9,
    },
    {
      id: 7759,
      nombre: "NEONATAL, BIOTINIDASA",
      ub: 7,
    },
    {
      id: 7768,
      nombre: "NEONATAL, GALACTOSEMIA",
      ub: 7,
    },
    {
      id: 7773,
      nombre: "NEONATAL, LEUCINA",
      ub: 12,
    },
    {
      id: 7775,
      nombre:
        "NEONATAL SCREENENG AMPLIADO POR ESPECTROMETRIA DE MASA EN TANDEM  ",
      ub: 0,
    },
    {
      id: 7777,
      nombre: "NEONATAL, T.I.R. (TRIPSINA INMUNOREATIVA)",
      ub: 8,
    },
    {
      id: 7785,
      nombre: "NEONATAL, T.S.H.",
      ub: 7,
    },
    {
      id: 7794,
      nombre: "NEUMOCOCO, Ac. Anti-",
      ub: 100,
    },
    {
      id: 7802,
      nombre: "NEURON SPECIFIC ENOLASE - NSE",
      ub: 39,
    },
    {
      id: 7810,
      nombre: "NEUTRÓFILOS, ACTIVIDAD FAGOCITARIA",
      ub: 0,
    },
    {
      id: 7828,
      nombre: "NIQUEL URINARIO (Ni urinario)",
      ub: 20,
    },
    {
      id: 7836,
      nombre: "NITRÓGENO NO PROTEICO",
      ub: 3,
    },
    {
      id: 7840,
      nombre: "NMDA, Ac.  IgG Anti- RECEPTOR - LCR",
      ub: 80,
    },
    {
      id: 7841,
      nombre: "NMDA, Ac.  IgG Anti- RECEPTOR - sangre",
      ub: 80,
    },
    {
      id: 7845,
      nombre: "NORMETANEFRINA - urinaria",
      ub: 25,
    },
    {
      id: 7849,
      nombre: "NOROVIRUS",
      ub: 111,
    },
    {
      id: 7853,
      nombre: "NORTRIPTILINA - sérica",
      ub: 19,
    },
    {
      id: 7862,
      nombre: "N TELOPÉPTIDOS - COLÁGENO TIPO I (NTX)",
      ub: 30,
    },
    {
      id: 7871,
      nombre: "NUCLEOLO, Ac. Anti-",
      ub: 15,
    },
    {
      id: 7882,
      nombre: "OPIACEOS - CONFIRMATORIO",
      ub: 120,
    },
    {
      id: 7905,
      nombre: "ORTO CRESOL (2-metilfenol)",
      ub: 20,
    },
    {
      id: 7913,
      nombre: "ORTO METIL BUFOTENINA",
      ub: 24,
    },
    {
      id: 7919,
      nombre: "ORTO,O,O - TIETILFOSFOROTOATO",
      ub: 60,
    },
    {
      id: 7926,
      nombre: "OSMOLALIDAD - urinaria",
      ub: 5,
    },
    {
      id: 7939,
      nombre: "OSTEOCALCINA",
      ub: 25,
    },
    {
      id: 7947,
      nombre: "OVARIO, Ac. Anti-",
      ub: 80,
    },
    {
      id: 7964,
      nombre: "OXICODON A - urinaria",
      ub: 40,
    },
    {
      id: 7973,
      nombre: "p53 Ac.",
      ub: 0,
    },
    {
      id: 7982,
      nombre: "p53 mutante",
      ub: 0,
    },
    {
      id: 7999,
      nombre: "PANEL HEPÁTICO INMUNOLÓGICO",
      ub: 150,
    },
    {
      id: 8009,
      nombre: "PAPILOMA VIRUS HUMANO - HPV (Carga viral)",
      ub: 160,
    },
    {
      id: 8011,
      nombre:
        "PAPILOMA VIRUS HUMANO - HPV (Genotipificación - PCR + Hibridización)",
      ub: 110,
    },
    {
      id: 8018,
      nombre: "PAPP-A (PROTEÍNA A PLASMÁTICA ASOCIADA A EMBARAZO)",
      ub: 40,
    },
    {
      id: 8024,
      nombre: "PARA AMINOFENOL",
      ub: 0,
    },
    {
      id: 8110,
      nombre: "PARACOCCIDIOIDES BRASILIENSIS, Ac. IgG Anti-",
      ub: 0,
    },
    {
      id: 8115,
      nombre: "PARACOCCIDIOIDES BRASILIENSIS, Ac. IgM Anti-",
      ub: 0,
    },
    {
      id: 8127,
      nombre: "PARACOCCIDIOIDES SPP, Ac. Anti- Totales",
      ub: 29,
    },
    {
      id: 8135,
      nombre: "PARAINFLUENZA I, Ac. Anti-",
      ub: 18,
    },
    {
      id: 8137,
      nombre: "PARAINFLUENZA I, Ac. IgM Anti-",
      ub: 18,
    },
    {
      id: 8139,
      nombre: "PARAINFLUENZA I, Ag.",
      ub: 20,
    },
    {
      id: 8142,
      nombre: "PARAINFLUENZA II, Ac. Anti-",
      ub: 18,
    },
    {
      id: 8144,
      nombre: "PARAINFLUENZA II, Ac. IgM Anti-",
      ub: 18,
    },
    {
      id: 8146,
      nombre: "PARAINFLUENZA II, Ag.",
      ub: 20,
    },
    {
      id: 8149,
      nombre: "PARAINFLUENZA III, Ac. Anti-",
      ub: 18,
    },
    {
      id: 8151,
      nombre: "PARAINFLUENZA III, Ac. IgM Anti-",
      ub: 18,
    },
    {
      id: 8153,
      nombre: "PARAINFLUENZA III, Ag.",
      ub: 20,
    },
    {
      id: 8156,
      nombre: "PARANITROFENOL",
      ub: 20,
    },
    {
      id: 8158,
      nombre: "PARÁSITOS - biopsias o líquidos de punción",
      ub: 25,
    },
    {
      id: 8161,
      nombre: "PARATHORMONA (PTH) (MOLECULA MEDIA)",
      ub: 19,
    },
    {
      id: 8170,
      nombre: "PARATIÓN",
      ub: 60,
    },
    {
      id: 8178,
      nombre: "PAROTIDITIS, Ac. IgG Anti-",
      ub: 15,
    },
    {
      id: 8187,
      nombre: "PAROTIDITIS, Ac. IgM Anti-",
      ub: 16,
    },
    {
      id: 8195,
      nombre: "PAROTIDITIS, Ac. especif. por FC",
      ub: 20,
    },
    {
      id: 8204,
      nombre: "PAROTIDITIS, Ac. solubles",
      ub: 0,
    },
    {
      id: 8212,
      nombre: "PAROTIDITIS, Ag.",
      ub: 0,
    },
    {
      id: 8221,
      nombre: "PAROTIDITIS, Ag. en LCR",
      ub: 0,
    },
    {
      id: 8229,
      nombre: "PARVOVIRUS, Ac. IgG Anti-",
      ub: 40,
    },
    {
      id: 8238,
      nombre: "PARVOVIRUS, Ac. IgM Anti-",
      ub: 45,
    },
    {
      id: 8241,
      nombre: "PARVOVIRUS B19 - PCR",
      ub: 90,
    },
    {
      id: 8250,
      nombre: "PENFIGOIDE Ac. Anti- (MEMBRANA BASAL EN PIEL Ac. Anti-)",
      ub: 60,
    },
    {
      id: 8272,
      nombre: "PENTACLOROFENOL",
      ub: 18,
    },
    {
      id: 8281,
      nombre: "PEPTIDO C",
      ub: 18,
    },
    {
      id: 8284,
      nombre:
        "PÉPTIDO CITRULINADO CICLICO - Ac. Anti- IgG (Ac. Anti- CCP / PCC)",
      ub: 50,
    },
    {
      id: 8286,
      nombre: "PEPTIDO INTESTINAL VASOACTIVO (VIP)",
      ub: 220,
    },
    {
      id: 8289,
      nombre: "PÉPTIDO PROCOLÁGENO",
      ub: 18,
    },
    {
      id: 8304,
      nombre: "PERFIL MINERAL - en cabello",
      ub: 200,
    },
    {
      id: 8306,
      nombre: "PERFIL MINERAL - en orina",
      ub: 200,
    },
    {
      id: 8315,
      nombre: "PEROXIDASA TIROIDEO, AC. ANTI- (ATPO / TPO)",
      ub: 12,
    },
    {
      id: 8327,
      nombre: "PESTICIDAS NITROGENADOS - c/u",
      ub: 60,
    },
    {
      id: 8332,
      nombre: "PESTICIDAS ORGANOCLORADOS (plaguicidas), urinarios",
      ub: 60,
    },
    {
      id: 8337,
      nombre:
        "PESTICIDAS ORGANOFOSFORADOS (plaguicidas - parathion) - plasmáticos",
      ub: 60,
    },
    {
      id: 8348,
      nombre: "PIRIDINOLINA",
      ub: 28,
    },
    {
      id: 8358,
      nombre: "PLAQUETARIA ADHESIVIDAD",
      ub: 20,
    },
    {
      id: 8366,
      nombre: "PLAQUETARIA AGREGACION (con 6 inductores)",
      ub: 18,
    },
    {
      id: 8375,
      nombre: "PLAQUETAS, Ac. Anti-",
      ub: 0,
    },
    {
      id: 8379,
      nombre: "PLASMA RICO EN PLAQUETAS, PREPARACIÓN DE (PRP)",
      ub: 120,
    },
    {
      id: 8383,
      nombre: "PLASMINÓGENO",
      ub: 38,
    },
    {
      id: 8385,
      nombre:
        "PLASMINÓGENO, ACTIVADOR TISULAR de - t-PA (Biológico-Inmunológico)             : t-PA",
      ub: 75,
    },
    {
      id: 8387,
      nombre:
        "PLASMINÓGENO, INHIBIDOR del ACTIVADOR TISULAR del (PAI - AIP) (Molecular)           : PAI  4G/5G",
      ub: 90,
    },
    {
      id: 8393,
      nombre: "PLASMODIUM SP, Antígeno.",
      ub: 16,
    },
    {
      id: 8397,
      nombre: "PLATA (Ag) - sérica",
      ub: 20,
    },
    {
      id: 8400,
      nombre: "PLATA (Ag) - urinaria",
      ub: 20,
    },
    {
      id: 8409,
      nombre: "PLOMO (Pb) - pelo",
      ub: 30,
    },
    {
      id: 8418,
      nombre: "PM-1, Ac. Anti-",
      ub: 0,
    },
    {
      id: 8426,
      nombre: "PNEUMOCYSTIS CARINII, IFD",
      ub: 15,
    },
    {
      id: 8435,
      nombre: "PODER BACTERICIDA DEL SUERO (PBS)",
      ub: 20,
    },
    {
      id: 8440,
      nombre: "PODER INHIBITORIO DEL SUERO (P.I.S.)",
      ub: 20,
    },
    {
      id: 8446,
      nombre: "POLICLOROBIFENILOS",
      ub: 45,
    },
    {
      id: 8450,
      nombre: "POLIMORFISMO IL 28B",
      ub: 311,
    },
    {
      id: 8460,
      nombre: "POLIMORFONUCLEARES, Quimiotáxis",
      ub: 35,
    },
    {
      id: 8463,
      nombre: "POLIOMAVIRUS BK, Carga viral - sangre u orina",
      ub: 150,
    },
    {
      id: 8464,
      nombre: "POLIOMAVIRUS BK, PCR - sangre u orina",
      ub: 110,
    },
    {
      id: 8466,
      nombre: "POLIOMAVIRUS JC, Carga viral - sangre u orina",
      ub: 150,
    },
    {
      id: 8467,
      nombre: "POLIOMAVIRUS JC,  PCR - LCR",
      ub: 106,
    },
    {
      id: 8469,
      nombre: "POLIQUISTOSIS RENAL - PCR",
      ub: 0,
    },
    {
      id: 8486,
      nombre: "PORFIRINAS - séricas",
      ub: 12,
    },
    {
      id: 8489,
      nombre: "PORFIRINAS, INDICE de - plasmáticas",
      ub: 25,
    },
    {
      id: 8493,
      nombre: "PORFIRINAS TOTALES - eritrocitarias",
      ub: 15,
    },
    {
      id: 8529,
      nombre: "PORFOBILINÓGENO (Cuantitativo) - urinario",
      ub: 18,
    },
    {
      id: 8537,
      nombre: "POTASIO - eritrocitario",
      ub: 0,
    },
    {
      id: 8546,
      nombre: "PREALBÚMINA",
      ub: 10,
    },
    {
      id: 8554,
      nombre:
        "PRO BNP - PROHORMONA PEPTIDO NATRIURÉTICO CEREBRAL N-TERMINAL (NT-PROBNP)",
      ub: 95,
    },
    {
      id: 8563,
      nombre: "PROCALCITONINA",
      ub: 75,
    },
    {
      id: 8571,
      nombre: "PROINSULINA - plasmática",
      ub: 0,
    },
    {
      id: 8580,
      nombre: "PROGESTERONA 17-HIDROXI (17-OH-PG)",
      ub: 15,
    },
    {
      id: 8584,
      nombre: "PROMETRYN",
      ub: 60,
    },
    {
      id: 8588,
      nombre: "PROPAZINA",
      ub: 60,
    },
    {
      id: 8597,
      nombre: "PROPOXIFENO - NORPROPOXIFENO",
      ub: 23,
    },
    {
      id: 8606,
      nombre: "PROTEÍNA BÁSICA de MIELINA",
      ub: 120,
    },
    {
      id: 8614,
      nombre: "PROTEÍNA C FUNCIONAL - Cromogénico",
      ub: 45,
    },
    {
      id: 8623,
      nombre: "PROTEÍNA C REACTIVA - ULTRASENSIBLE (PCRus)",
      ub: 12,
    },
    {
      id: 8627,
      nombre: "PROTEÍNA del EPIDÍDIMO HUMANO 4 (HE4)",
      ub: 0,
    },
    {
      id: 8631,
      nombre: "PROTEÍNA S Libre = Inmunoturbidimétrio",
      ub: 45,
    },
    {
      id: 8640,
      nombre: "PROTEÍNA S Total",
      ub: 45,
    },
    {
      id: 8648,
      nombre: "PROTEÍNA S Funcional = coagulométrico",
      ub: 85,
    },
    {
      id: 8656,
      nombre: "PROTEINASA 3 (PR3), Ac. Anti-",
      ub: 50,
    },
    {
      id: 8682,
      nombre:
        "PROTOPORFIRINA ERITROCITARIA LIBRE (FEP), ZINC PROTOPORFIRINA (ZPP o ZP)",
      ub: 12,
    },
    {
      id: 8691,
      nombre: "PROTROMBINA 20.210",
      ub: 75,
    },
    {
      id: 8710,
      nombre: "PSEUDOMONAS, Ac. Anti-",
      ub: 70,
    },
    {
      id: 8734,
      nombre: "QUERATINOCITOS (PIEL) Ac. Anti-",
      ub: 90,
    },
    {
      id: 8768,
      nombre: "QUINIDINA",
      ub: 20,
    },
    {
      id: 8780,
      nombre: "REARREGLO DEL IGH/FGFR3, Estudio para (FISH)",
      ub: 410,
    },
    {
      id: 8783,
      nombre: "REARREGLO DEL IGH/MAF, Estudio para (FISH)",
      ub: 410,
    },
    {
      id: 8794,
      nombre: "REARREGLO DEL TcR (citrometría de flujo)",
      ub: 300,
    },
    {
      id: 8800,
      nombre: "RECEPTOR de FSH, Ac. Anti- (RFSH)",
      ub: 120,
    },
    {
      id: 8802,
      nombre: "RECEPTOR de TSH, Ac. Anti- (TRAB's o TRAB o TBII)",
      ub: 40,
    },
    {
      id: 8813,
      nombre: "RECEPTORES HORMONALES INDICE DE PROLIFERACIÓN",
      ub: 50,
    },
    {
      id: 8816,
      nombre: "RECEPTOR SOLUBLE DE TRANSFERRINA (sTRF)",
      ub: 39,
    },
    {
      id: 8819,
      nombre: "RENINA-ANGIOTENSINA / RENINA ACTIVA",
      ub: 18,
    },
    {
      id: 8828,
      nombre: "RESISTENCIA a la PROTEÍNA C ACTIVADA",
      ub: 35,
    },
    {
      id: 8836,
      nombre: "RETICULINA, Ac. Anti- (ARA)",
      ub: 10,
    },
    {
      id: 8845,
      nombre: "RETINA, Ac. Anti-",
      ub: 0,
    },
    {
      id: 8853,
      nombre: "Ri (ANNA-2), Ac. Anti- (NEURONAL NUCLEAR-2)",
      ub: 100,
    },
    {
      id: 8860,
      nombre: "RIBOSOMAL, Ac. Anti- Proteina P (Anti-Riv P)",
      ub: 45,
    },
    {
      id: 8870,
      nombre: "RICKETTSIAS PROWAZEKII, Ac. IgG Anti-",
      ub: 45,
    },
    {
      id: 8874,
      nombre: "RICKETTSIAS TYPHI, Ac. IgG Anti-",
      ub: 45,
    },
    {
      id: 8878,
      nombre: "RINOVIRUS, Ag.",
      ub: 22,
    },
    {
      id: 8882,
      nombre: "RISPERIDONA",
      ub: 60,
    },
    {
      id: 8888,
      nombre: "RNA, Ac. Anti-",
      ub: 0,
    },
    {
      id: 8896,
      nombre: "RNP, Ac. Anti- (RIBONUCLEOPROTEINAS)",
      ub: 16,
    },
    {
      id: 8905,
      nombre: "RO, AC. ANTI- (RO/SSA)",
      ub: 15,
    },
    {
      id: 8918,
      nombre: "ROSA de BENGALA",
      ub: 8,
    },
    {
      id: 8930,
      nombre: "ROTAVIRUS - AG -AC- MN (ELISA)",
      ub: 32,
    },
    {
      id: 8934,
      nombre: "ROTAVIRUS - AcC-",
      ub: 40,
    },
    {
      id: 8939,
      nombre: "ROTAVIRUS, Ag.",
      ub: 22,
    },
    {
      id: 8947,
      nombre: "SACAROSA",
      ub: 12,
    },
    {
      id: 8954,
      nombre: "SACCHAROMYSES CEREVISIAE, Ac. Anti- IgA (ASCA)",
      ub: 50,
    },
    {
      id: 8956,
      nombre: "SACCHAROMYSES CEREVISIAE, Ac. Anti- IgG (ASCA)",
      ub: 50,
    },
    {
      id: 8964,
      nombre: "SALIVA, Ex. Físico-Químico",
      ub: 0,
    },
    {
      id: 8977,
      nombre: "SANGRIA, TIEMPO DE - Método de Ivy",
      ub: 8,
    },
    {
      id: 8982,
      nombre: "SARAMPION, Ac. IgG Anti-",
      ub: 15,
    },
    {
      id: 8990,
      nombre: "SARAMPION, Ac. IgM Anti-",
      ub: 16,
    },
    {
      id: 8999,
      nombre: "SCLERODERMIA - SCL 70, Ac. Anti-",
      ub: 20,
    },
    {
      id: 9007,
      nombre: "SCORE de MOCO",
      ub: 10,
    },
    {
      id: 9016,
      nombre: "SELENIO (AA) - SÉRICO",
      ub: 20,
    },
    {
      id: 9019,
      nombre: "SELENIO - urinario",
      ub: 20,
    },
    {
      id: 9026,
      nombre: "SENSIBILIDAD ALIMENTARIA, PANEL de Ac. IgG Anti-  ",
      ub: 80,
    },
    {
      id: 9030,
      nombre: "SERINA - plasmática",
      ub: 50,
    },
    {
      id: 9032,
      nombre: "SERINA - plasmática - (PANEO COMPLETO)",
      ub: 220,
    },
    {
      id: 9039,
      nombre: "SEROTONINA, GEN TRANSPORTADOR de",
      ub: 97,
    },
    {
      id: 9041,
      nombre: "SEROTONINA - plaquetaria",
      ub: 120,
    },
    {
      id: 9045,
      nombre: "SEROTONINA - urinaria",
      ub: 24,
    },
    {
      id: 9054,
      nombre: "SIFILIS (ELISA)",
      ub: 0,
    },
    {
      id: 9055,
      nombre: "SIFILIS (ELISA RECOMBINANTE)",
      ub: 0,
    },
    {
      id: 9058,
      nombre: "SILICIO - esputo",
      ub: 20,
    },
    {
      id: 9067,
      nombre: "SIMANZINA",
      ub: 60,
    },
    {
      id: 9076,
      nombre: "SINCICIAL RESPIRATORIO, Ac. IgG Anti-",
      ub: 17,
    },
    {
      id: 9084,
      nombre: "SINCICIAL RESPIRATORIO, Ac. IgM Anti-",
      ub: 17,
    },
    {
      id: 9093,
      nombre: "SINCICIAL RESPIRATORIO, ANTIGENO (Ag.)",
      ub: 22,
    },
    {
      id: 9101,
      nombre:
        "SÍNDROMES LINFOPROLIFERATIVOS - FENOTIPIFICACIÓN (Inmunotipificación)",
      ub: 300,
    },
    {
      id: 9102,
      nombre:
        "SÍNDROMES MIELOPROLIFERATIVOS - FENOTIPIFICACIÓN.- Jak 2 (JANUS QUINASA 2) - mutación: V617F",
      ub: 300,
    },
    {
      id: 9103,
      nombre:
        "SÍNDROMES MIELOPROLIFERATIVOS - FENOTIPIFICACIÓN.- Jak 2 (JANUS QUINASA 2) – secuenciación exón 12",
      ub: 300,
    },
    {
      id: 9104,
      nombre:
        "SÍNDROMES MIELOPROLIFERATIVOS - FENOTIPIFICACIÓN.- MPL (cada mutación)",
      ub: 300,
    },
    {
      id: 9105,
      nombre: "SIROLIMUS, DROGA CITOSTÁTICA - RAPAMICINA",
      ub: 70,
    },
    {
      id: 9110,
      nombre: "SM, Ac. Anti-",
      ub: 15,
    },
    {
      id: 9118,
      nombre: "SOMATOMEDINA C- IGFB1",
      ub: 35,
    },
    {
      id: 9120,
      nombre:
        "SOMATOMEDINA - IGFBP-3 - (Insulin Like Growth Factor Bind, Prot 3)",
      ub: 60,
    },
    {
      id: 9127,
      nombre: "STREPTOCOCCUS BETA-HEMOLÍTICO GRUPO B - PRENATAL (ANAL/VAGINAL)",
      ub: 18,
    },
    {
      id: 9129,
      nombre: "STAPHYLOCOCCUS AUREUS METICILINO RESISTENTE - PCR o similar",
      ub: 90,
    },
    {
      id: 9132,
      nombre: "STREPTOCOCCUS GRUPO B, Ag. - sérico",
      ub: 25,
    },
    {
      id: 9135,
      nombre: "STREPTOCOCCUS GRUPO B, Ag. - urinario",
      ub: 25,
    },
    {
      id: 9157,
      nombre: "STREPTOCOCCUS PNEUMONIAE, Ag. - esputo",
      ub: 25,
    },
    {
      id: 9161,
      nombre: "STREPTOCOCCUS PNEUMONIAE, Ag. - sérico",
      ub: 25,
    },
    {
      id: 9164,
      nombre: "STREPTOCOCCUS PNEUMONIAE, Ag. - urinario",
      ub: 25,
    },
    {
      id: 9170,
      nombre: "STREPTOCOCCUS PNEUMONIAE - PCR",
      ub: 90,
    },
    {
      id: 9180,
      nombre: "STREPTOZYME, TEST (ESTREPTOZIMA)",
      ub: 15,
    },
    {
      id: 9187,
      nombre: "SUBUNIDAD Alfa HIPOFISIARIA",
      ub: 0,
    },
    {
      id: 9195,
      nombre: "SUCCINIL ACETONA - urinaria",
      ub: 0,
    },
    {
      id: 9204,
      nombre: "SUCCINIL PURINAS",
      ub: 150,
    },
    {
      id: 9212,
      nombre: "SUCROSA, TEST DE",
      ub: 10,
    },
    {
      id: 9223,
      nombre: "SUDOR, TEST CONFIRMATORIO.",
      ub: 50,
    },
    {
      id: 9229,
      nombre: "SULFAHEMOGLOBINA POR COOXIMETRIA",
      ub: 0,
    },
    {
      id: 9238,
      nombre: "SULFATOS - urinarios",
      ub: 15,
    },
    {
      id: 9246,
      nombre: "SULFOTEP",
      ub: 60,
    },
    {
      id: 9255,
      nombre: "SUPERÓXIDO DISMUTASA (S.O.D.) - sérica",
      ub: 30,
    },
    {
      id: 9265,
      nombre: "SUSTANCIA INTERCELULAR Ac Anti",
      ub: 60,
    },
    {
      id: 9270,
      nombre: "TAENIA SOLIUM - Ac. Anti- IgG",
      ub: 50,
    },
    {
      id: 9281,
      nombre: "TALASEMIAS, Beta-Mutaciones",
      ub: 0,
    },
    {
      id: 9293,
      nombre: "TALIO - pelo",
      ub: 0,
    },
    {
      id: 9306,
      nombre: "Tdt - Citometría de Flujo",
      ub: 30,
    },
    {
      id: 9309,
      nombre: "TERBUITRYN",
      ub: 60,
    },
    {
      id: 9311,
      nombre: "TERBUTHYLAZINA",
      ub: 60,
    },
    {
      id: 9314,
      nombre: "TEST de DESENSIBILIZACIÓN TESTICULAR",
      ub: 110,
    },
    {
      id: 9332,
      nombre: "TEST de NITRO BLUE TETRAZOLIUM con Estimulación (Test - NBTS)",
      ub: 34,
    },
    {
      id: 9349,
      nombre: "TEST DE NITRO BLUE TETRAZOLIUM (Test - NBT)",
      ub: 34,
    },
    {
      id: 9358,
      nombre: "TEST DE NUGENT - sérico",
      ub: 0,
    },
    {
      id: 9366,
      nombre: "TESTOSTERONA DEHIDRO (DHT)",
      ub: 25,
    },
    {
      id: 9375,
      nombre: "TESTOSTERONA LIBRE (To-L)",
      ub: 15,
    },
    {
      id: 9383,
      nombre: "TESTOSTERONA - urinaria",
      ub: 15,
    },
    {
      id: 9409,
      nombre: "TIOCIANATOS - urinarios",
      ub: 12,
    },
    {
      id: 9417,
      nombre: "TIOCIANATOS - séricos",
      ub: 12,
    },
    {
      id: 9426,
      nombre: "TIONACINA",
      ub: 60,
    },
    {
      id: 9434,
      nombre: "TIOSULFATOS - urinarios",
      ub: 8,
    },
    {
      id: 9443,
      nombre: "TIROGLOBULINA (TGs)",
      ub: 15,
    },
    {
      id: 9464,
      nombre: "TIROGLOBULINA - líquido de punción (TG LP)",
      ub: 0,
    },
    {
      id: 9477,
      nombre: "TIROSINA (Aminoácido - A. Ác.)",
      ub: 16,
    },
    {
      id: 9486,
      nombre: "TITULACIÓN de ANTICUERPO VIII (Met..Biol.)",
      ub: 0,
    },
    {
      id: 9494,
      nombre: "TOXINA BOTULÍNICA, Ac.",
      ub: 0,
    },
    {
      id: 9503,
      nombre: "TOXINA SHIGA o VEROTOXINAS - ESCHERICCIA COLI (c/u) - PCR",
      ub: 80,
    },
    {
      id: 9511,
      nombre: "TOXOCARA CANIS, Ac. IgG Anti-",
      ub: 26,
    },
    {
      id: 9514,
      nombre: "TOXOCARA CANIS, Ac. IgM Anti-",
      ub: 30,
    },
    {
      id: 9538,
      nombre: "TOXOIDE TETÁNICO, Ac. Anti-",
      ub: 90,
    },
    {
      id: 9561,
      nombre: "TOXOPLASMOSIS, Ac. IgA Anti-",
      ub: 30,
    },
    {
      id: 9565,
      nombre: "TOXOPLASMOSIS, Ac. IgA ISAGA Anti-",
      ub: 0,
    },
    {
      id: 9571,
      nombre: "TOXOPLASMOSIS, Ac. IgG Anti- (ELISA)",
      ub: 10,
    },
    {
      id: 9575,
      nombre: "TOXOPLASMOSIS, Ac. IgG Anti- (Test de avidez)",
      ub: 30,
    },
    {
      id: 9580,
      nombre: "TOXOPLASMOSIS, Ac. IgM Anti- (ELISA)",
      ub: 14,
    },
    {
      id: 9588,
      nombre: "TOXOPLASMOSIS, AC. IGM ANTI- ",
      ub: 8,
    },
    {
      id: 9591,
      nombre: "TOXOPLASMOSIS - PCR",
      ub: 70,
    },
    {
      id: 9597,
      nombre: "t-PA INMUNOLÓGICO",
      ub: 0,
    },
    {
      id: 9622,
      nombre: "TRANSGLUTAMINASA, AC. IGA ANTI- (TGA)",
      ub: 23,
    },
    {
      id: 9631,
      nombre: "TRANSGLUTAMINASA, AC. IGG ANTI- (TGG)",
      ub: 23,
    },
    {
      id: 9637,
      nombre: "TRANSLOCACIÓN, varias - cualitativa (c/u)",
      ub: 220,
    },
    {
      id: 9642,
      nombre: "TRANSLOCACIÓN, varios - cuantitativa (c/u)",
      ub: 360,
    },
    {
      id: 9644,
      nombre: "TREPONEMA PALLIDUM, FTA ABS, AC. (SIFILIS)",
      ub: 10,
    },
    {
      id: 9647,
      nombre: "TRICHINELLA SPIRALIS, Ac. IgG Anti-/Ac. Totales",
      ub: 35,
    },
    {
      id: 9649,
      nombre: "TRICHINELLA SPIRALIS, Ac. IgM Anti-",
      ub: 35,
    },
    {
      id: 9653,
      nombre: "TRICHOMONAS, Cultivo para-",
      ub: 0,
    },
    {
      id: 9657,
      nombre: "TRICLOROETANOL",
      ub: 12,
    },
    {
      id: 9661,
      nombre: "TRIIODOTIRONINA LIBRE (T3L)",
      ub: 10,
    },
    {
      id: 9672,
      nombre: "TRIPLE TEST",
      ub: 90,
    },
    {
      id: 9682,
      nombre: "TRIPSINA, Ac. Anti-",
      ub: 0,
    },
    {
      id: 9691,
      nombre: "TRIPTOFANO",
      ub: 18,
    },
    {
      id: 9716,
      nombre: "TROMBOFILIA, Panel básico",
      ub: 230,
    },
    {
      id: 9725,
      nombre: "TROPONINA I -TnI",
      ub: 17,
    },
    {
      id: 9734,
      nombre: "TROPONINA T (cualitativo) - TnT-cuali",
      ub: 17,
    },
    {
      id: 9735,
      nombre: "TROPONINA T (cuantitativo) TnT-cuanti",
      ub: 25,
    },
    {
      id: 9747,
      nombre: "TUMOR, Necrosis Factor",
      ub: 0,
    },
    {
      id: 9759,
      nombre: "UREAPLASMA UREALYTICUM (CULTIVO).",
      ub: 0,
    },
    {
      id: 9768,
      nombre: "UROPORFIRINAS - materia fecal",
      ub: 15,
    },
    {
      id: 9780,
      nombre: "VACUNA LINFOCITARIA",
      ub: 0,
    },
    {
      id: 9787,
      nombre: "VAGINAL, BALANCE DEL CONTENIDO (BACOVA)",
      ub: 6,
    },
    {
      id: 9790,
      nombre: "VANADIO, plasmático o uriniario.",
      ub: 20,
    },
    {
      id: 9793,
      nombre: "VANCOMICINA",
      ub: 23,
    },
    {
      id: 9810,
      nombre: "VARICELA ZOSTER, Ac. IgM Anti-",
      ub: 25,
    },
    {
      id: 9819,
      nombre: "VARICELA ZOSTER, Ac. IgG Anti-",
      ub: 17,
    },
    {
      id: 9828,
      nombre: "VARICELA ZOSTER, Ag.",
      ub: 30,
    },
    {
      id: 9834,
      nombre: "VARICELA ZOSTER - DNA (PCR)",
      ub: 70,
    },
    {
      id: 9846,
      nombre: "VIGABATRINA",
      ub: 30,
    },
    {
      id: 9853,
      nombre: "VIRUS-JUNIN, Ac. Anti- IgG (FHA)",
      ub: 30,
    },
    {
      id: 9858,
      nombre: "VIRUS-JUNIN, Ac. Anti- IgM (FHA)",
      ub: 30,
    },
    {
      id: 9870,
      nombre: "VISCOSIDAD PLASMÁTICA",
      ub: 0,
    },
    {
      id: 9879,
      nombre: "VITAMINA B1 (TIAMINA)",
      ub: 30,
    },
    {
      id: 9887,
      nombre: "VITAMINA B6 (PIRIDOXINA)",
      ub: 37,
    },
    {
      id: 9896,
      nombre: "VITAMINA C (líquido seminal)",
      ub: 30,
    },
    {
      id: 9898,
      nombre: "VITAMINA C (plaquetaria)",
      ub: 30,
    },
    {
      id: 9905,
      nombre:
        "VITAMINA D  (1,25-DIHIDROXICOLECALCIFEROL O CALCITRIOL - 1,25-VITAMINA D",
      ub: 75,
    },
    {
      id: 9909,
      nombre: "VITAMINA D (25-HIDROXI VITAMINA D )",
      ub: 40,
    },
    {
      id: 9913,
      nombre: "VITAMINA D3 (25-HIDROXICALCIFEROL O COLECALCIFEROL)",
      ub: 37,
    },
    {
      id: 9930,
      nombre: "VLDL-COLESTEROL, LIPOPROTEINA DE MUY BAJA DENSIDAD.",
      ub: 4,
    },
    {
      id: 9939,
      nombre: "XANTINA",
      ub: 10,
    },
    {
      id: 9947,
      nombre: "YERSINIA ENTEROCOLITICA, CULTIVO",
      ub: 0,
    },
    {
      id: 9960,
      nombre: "Yo (PCA-1), Ac. Anti- ",
      ub: 100,
    },
    {
      id: 9973,
      nombre: "ZAP 70",
      ub: 105,
    },
    {
      id: 9978,
      nombre: "ZIKA, virus (PCR)",
      ub: 100,
    },
    {
      id: 9984,
      nombre: "ZINC - pelo (Zn-pelo)",
      ub: 20,
    },
    {
      id: 9987,
      nombre: "ZINC - semen (Zn-semen)",
      ub: 25,
    },
    {
      id: 9990,
      nombre: "ZINC - urinario (Zn-urinario)",
      ub: 20,
    },
    {
      id: 9991,
      nombre: "ESTUDIO DE PRUEBA",
      ub: 0,
    },
    {
      id: 9997,
      nombre: "LIPIDOGRAMA",
      ub: 0,
    },
    {
      id: 9998,
      nombre: "IMC",
      ub: 0,
    },
    {
      id: 9999,
      nombre: "COLESTEROL VLDL (VLDL-C)",
      ub: 0,
    },
    {
      id: 10000,
      nombre: "COLESTEROL VLDL (VLDL-C)",
      ub: 0,
    },
    {
      id: 10001,
      nombre: "TEST RAPIDO DE ANTIGENO DE COVID ",
      ub: 0,
    },
    {
      id: 10002,
      nombre: "ACIDO VALPROICO (SUERO)",
      ub: 0,
    },
    {
      id: 10003,
      nombre: "DETECCIÓN DEL GENOMA VIRAL SARS-COV-2",
      ub: 0,
    },
    {
      id: 10004,
      nombre: "CLOBAZAN",
      ub: 0,
    },
    {
      id: 10005,
      nombre: "LEVETIRACETAM",
      ub: 0,
    },
    {
      id: 10006,
      nombre: "FENITOINA (DIFENILHIDANTOINA)",
      ub: 0,
    },
  ],
  practicasSeleccionadas: [],
};
export default data;
