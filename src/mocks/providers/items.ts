import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };


  constructor() {
    let items =  [
      {
        "descripcion": "CRIT Estado de México",
        "recursosNecesarios": "81307742.310745",
        "recursosComprometidos": "71032193.818896",
        "porcentajeEsperado": "0.98",
        "ingresoEsperado": "69611549.942518",
        "recursosARecaudar": "11696192.368227",
        "capacidadNinos": "2289",
        "costoAnualPaciente": "35521.075714611",
        "ninosCubrirDonativo": "329.27472304606",
        "profilePic": "assets/img/speakers/cheetah.jpg",
      },
      {
        "descripcion": "CRIT Occidente",
        "recursosNecesarios": "68683578.42824",
        "recursosComprometidos": "46500000",
        "porcentajeEsperado": "0.7",
        "ingresoEsperado": "32550000",
        "recursosARecaudar": "36133578.42824",
        "capacidadNinos": "2180",
        "costoAnualPaciente": "31506.228636807",
        "ninosCubrirDonativo": "1146.8709519243",
        "profilePic": "assets/img/speakers/cheetah.jpg",
      },
      {
        "descripcion": "CRIT Oaxaca",
        "recursosNecesarios": "37779435.921344",
        "recursosComprometidos": "32000000",
        "porcentajeEsperado": "0.8",
        "ingresoEsperado": "25600000",
        "recursosARecaudar": "12179435.921344",
        "capacidadNinos": "981",
        "costoAnualPaciente": "38511.147728179",
        "ninosCubrirDonativo": "316.25741219943",
        "profilePic": "assets/img/speakers/cheetah.jpg",
      },
      {
        "descripcion": "CRIT Aguascalientes",
        "recursosNecesarios": "38460800.7962",
        "recursosComprometidos": "38651000",
        "porcentajeEsperado": "0.8",
        "ingresoEsperado": "30920800",
        "recursosARecaudar": "7540000.7962",
        "capacidadNinos": "981",
        "costoAnualPaciente": "39205.709272375",
        "ninosCubrirDonativo": "192.31894885046",
        "profilePic": "assets/img/speakers/cheetah.jpg",
      },
      {
        "descripcion": "CRIT Guanajuato",
        "recursosNecesarios": "26342045.1564",
        "recursosComprometidos": "21400000",
        "porcentajeEsperado": "0.8",
        "ingresoEsperado": "17120000",
        "recursosARecaudar": "9222045.1564",
        "capacidadNinos": "654",
        "costoAnualPaciente": "40278.356508257",
        "ninosCubrirDonativo": "228.9578313482",
        "profilePic": "assets/img/speakers/cheetah.jpg",
      },
      {
        "descripcion": "CRIT Coahuila",
        "recursosNecesarios": "39974493.531533",
        "recursosComprometidos": "33000000",
        "porcentajeEsperado": "0.8",
        "ingresoEsperado": "26400000",
        "recursosARecaudar": "13574493.531533",
        "capacidadNinos": "981",
        "costoAnualPaciente": "40748.719196262",
        "ninosCubrirDonativo": "333.12687611488",
        "profilePic": "assets/img/speakers/cheetah.jpg",
      },
      {
        "descripcion": "CRIT Hidalgo",
        "recursosNecesarios": "44320493.34",
        "recursosComprometidos": "41553134",
        "porcentajeEsperado": "0.8",
        "ingresoEsperado": "33242507.2",
        "recursosARecaudar": "11077986.14",
        "capacidadNinos": "981",
        "costoAnualPaciente": "45178.892293578",
        "ninosCubrirDonativo": "245.20269483399",
        "profilePic": "assets/img/speakers/cheetah.jpg",
      },
      {
        "descripcion": "CRIT Chihuahua",
        "recursosNecesarios": "39654017.2132",
        "recursosComprometidos": "36994960",
        "porcentajeEsperado": "0.8",
        "ingresoEsperado": "29595968",
        "recursosARecaudar": "10058049.2132",
        "capacidadNinos": "981",
        "costoAnualPaciente": "40422.035895209",
        "ninosCubrirDonativo": "248.82589385836",
        "profilePic": "assets/img/speakers/cheetah.jpg",
      },
      {
        "descripcion": "CRIT Chiapas",
        "recursosNecesarios": "42900151.818644",
        "recursosComprometidos": "39936000",
        "porcentajeEsperado": "0.85",
        "ingresoEsperado": "33945600",
        "recursosARecaudar": "8954551.8186438",
        "capacidadNinos": "981",
        "costoAnualPaciente": "43731.041609219",
        "ninosCubrirDonativo": "204.76420156332",
        "profilePic": "assets/img/speakers/cheetah.jpg",
      },
      {
        "descripcion": "CRIT Nezahualcóyotl",
        "recursosNecesarios": "50861699.152978",
        "recursosComprometidos": "42562606.300091",
        "porcentajeEsperado": "0.85",
        "ingresoEsperado": "36178215.355077",
        "recursosARecaudar": "14683483.797901",
        "capacidadNinos": "1199",
        "costoAnualPaciente": "42420.099376962",
        "ninosCubrirDonativo": "346.14449314268",
        "profilePic": "assets/img/speakers/cheetah.jpg",
      },
      {
        "descripcion": "CRIT Quintana Roo",
        "recursosNecesarios": "49650569.549743",
        "recursosComprometidos": "47489296",
        "porcentajeEsperado": "0.85",
        "ingresoEsperado": "40365901.6",
        "recursosARecaudar": "9284667.9497434",
        "capacidadNinos": "1090",
        "costoAnualPaciente": "45550.981238297",
        "ninosCubrirDonativo": "203.8302512337",
        "profilePic": "assets/img/speakers/cheetah.jpg",
      },
      {
        "descripcion": "CRIT Yucatán",
        "recursosNecesarios": "49650569.549743",
        "recursosComprometidos": "47489296",
        "porcentajeEsperado": "0.3",
        "ingresoEsperado": "14246788.8",
        "recursosARecaudar": "35403780.749743",
        "capacidadNinos": "1090",
        "costoAnualPaciente": "45550.981238297",
        "ninosCubrirDonativo": "777.23420631778",
        "profilePic": "assets/img/speakers/cheetah.jpg",
      },
      {
        "descripcion": "CRIT Tamaulipas",
        "recursosNecesarios": "39448222.171269",
        "recursosComprometidos": "36984000",
        "porcentajeEsperado": "0.85",
        "ingresoEsperado": "31436400",
        "recursosARecaudar": "8011822.1712688",
        "capacidadNinos": "1035.5",
        "costoAnualPaciente": "38095.820542027",
        "ninosCubrirDonativo": "210.30711656231",
        "profilePic": "assets/img/speakers/cheetah.jpg",
      },
      {
        "descripcion": "CRIT Veracruz",
        "recursosNecesarios": "37126957.471583",
        "recursosComprometidos": "48903164",
        "porcentajeEsperado": "0.25",
        "ingresoEsperado": "12225791",
        "recursosARecaudar": "24901166.471583",
        "capacidadNinos": "981",
        "costoAnualPaciente": "37846.032081125",
        "ninosCubrirDonativo": "657.95976757105",
        "profilePic": "assets/img/speakers/cheetah.jpg",
      },
      {
        "descripcion": "CRIT Durango",
        "recursosNecesarios": "38374355.6572",
        "recursosComprometidos": "36110180",
        "porcentajeEsperado": "0.85",
        "ingresoEsperado": "30693653",
        "recursosARecaudar": "7680702.6572",
        "capacidadNinos": "981",
        "costoAnualPaciente": "39117.589864628",
        "ninosCubrirDonativo": "196.34907681634",
        "profilePic": "assets/img/speakers/cheetah.jpg",
      },
      {
        "descripcion": "CRIT Sonora",
        "recursosNecesarios": "41865595.62571",
        "recursosComprometidos": "45511110",
        "porcentajeEsperado": "0.6",
        "ingresoEsperado": "27306666",
        "recursosARecaudar": "14558929.62571",
        "capacidadNinos": "981",
        "costoAnualPaciente": "42676.448140377",
        "ninosCubrirDonativo": "341.14670409826",
        "profilePic": "assets/img/speakers/cheetah.jpg",
      },
      {
        "descripcion": "CRIT Baja California Sur",
        "recursosNecesarios": "44458618.79194",
        "recursosComprometidos": "44521215",
        "porcentajeEsperado": "0.85",
        "ingresoEsperado": "37843032.75",
        "recursosARecaudar": "6615586.0419397",
        "capacidadNinos": "1090",
        "costoAnualPaciente": "40787.72366233",
        "ninosCubrirDonativo": "162.19551982622",
        "profilePic": "assets/img/speakers/cheetah.jpg",
      },
      {
        "descripcion": "CRIT Puebla",
        "recursosNecesarios": "49650569.549743",
        "recursosComprometidos": "50599327",
        "porcentajeEsperado": "0.9",
        "ingresoEsperado": "45539394.3",
        "recursosARecaudar": "4111175.2497434",
        "capacidadNinos": "1100",
        "costoAnualPaciente": "45136.881408858",
        "ninosCubrirDonativo": "91.082394738434",
        "profilePic": "assets/img/speakers/cheetah.jpg",
      },
      {
        "descripcion": "CRIT Ciudad de México",
        "recursosNecesarios": "48636953.328831",
        "recursosComprometidos": "47000000",
        "porcentajeEsperado": "0.85",
        "ingresoEsperado": "39950000",
        "recursosARecaudar": "8686953.3288307",
        "capacidadNinos": "1090",
        "costoAnualPaciente": "44621.058099845",
        "ninosCubrirDonativo": "194.68281790613",
        "profilePic": "assets/img/speakers/cheetah.jpg",
      },
      {
        "descripcion": "CRIT Guerrero",
        "recursosNecesarios": "45682834.029401",
        "recursosComprometidos": "47565822.5277",
        "porcentajeEsperado": "0.85",
        "ingresoEsperado": "40430949.148545",
        "recursosARecaudar": "5251884.8808563",
        "capacidadNinos": "997.35",
        "costoAnualPaciente": "45804.21519968",
        "ninosCubrirDonativo": "114.65942289287",
        "profilePic": "assets/img/speakers/cheetah.jpg",
      },
      {
        "descripcion": "CRIT Michoacán",
        "recursosNecesarios": "37110265.01",
        "recursosComprometidos": "42900000",
        "porcentajeEsperado": "0.25",
        "ingresoEsperado": "10725000",
        "recursosARecaudar": "26385265.01",
        "capacidadNinos": "997.35",
        "costoAnualPaciente": "37208.868511556",
        "ninosCubrirDonativo": "709.11226450774",
        "profilePic": "assets/img/speakers/cheetah.jpg",
      },
      {
        "descripcion": "CRIT Baja California",
        "recursosNecesarios": "47326543.102744",
        "recursosComprometidos": "46278388.8",
        "porcentajeEsperado": "0.9",
        "ingresoEsperado": "41650549.92",
        "recursosARecaudar": "5675993.1827439",
        "capacidadNinos": "997.35",
        "costoAnualPaciente": "47452.291675684",
        "ninosCubrirDonativo": "119.61473265689",
        "profilePic": "assets/img/speakers/cheetah.jpg",
      },
      {
        "descripcion": "Centro Autismo Teletón",
        "recursosNecesarios": "31100000",
        "recursosComprometidos": "25905527",
        "porcentajeEsperado": "0.7",
        "ingresoEsperado": "18133868.9",
        "recursosARecaudar": "12966131.1",
        "capacidadNinos": "220",
        "costoAnualPaciente": "141363.63636364",
        "ninosCubrirDonativo": "91.721827717042",
        "profilePic": "assets/img/speakers/cheetah.jpg",
      },
      {
        "descripcion": "Hospital Infantil de Oncología",
        "recursosNecesarios": "260376034.84461",
        "recursosComprometidos": "114753864",
        "porcentajeEsperado": "0.95",
        "ingresoEsperado": "109016170.8",
        "recursosARecaudar": "151359864.04461",
        "capacidadNinos": "220",
        "costoAnualPaciente": "1183527.4311119",
        "ninosCubrirDonativo": "127.88876714283",
        "profilePic": "assets/img/speakers/cheetah.jpg",
      },
    
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
