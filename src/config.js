var config = {
  style: 'mapbox://styles/alastairotter/cl3lqp5at006o16mr2eb0j6b3',
  accessToken:
    'pk.eyJ1IjoiYWxhc3RhaXJvdHRlciIsImEiOiJjaWc1NjM1dGYwYXV6djJtNjc5dGNqZThrIn0.SWLrLlYJWBdLvyIURec3FA',
  showMarkers: true,
  markerColor: 'red',

  //projection: 'equirectangular',
  //Read more about available projections here
  //https://docs.mapbox.com/mapbox-gl-js/example/projections/
  inset: false,
  theme: 'dark',
  use3dTerrain: true, //set true for enabling 3D maps.
  // title: "China's investment in Africa",
  // subtitle: 'A descriptive and interesting subtitle to draw in the reader',
  // byline: 'By a Digital Storyteller',
  footer:
    'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
  chapters: [
    {
      id: 'start',
      alignment: 'center',
      hidden: true,
      title: 'Home',
      // image: 'https://hosted.mediahack.co.za/flags/ng.svg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      location: {
        center: [0, 0],
        zoom: 3,
        pitch: 20,
        bearing: 0,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'energyprojects',
          opacity: 1,
          duration: 5000,
        },
      ],
      onChapterExit: [
        {
          layer: 'energyprojects',
          opacity: 0,
          duration: 5000,
        },
      ],
    },
    {
      id: 'angola1',
      alignment: 'left',
      hidden: false,
      title: 'Angola',
      image: './images/angola.png',
      description:
        '<p>China has spent by far the most money in Angola – over $52-billion, 25% of the amount spent in the whole of Africa, according to AidData’s research.</p><p>The bulk of the money to Angola ($21-billion)  has gone into energy projects: $12-billion has gone to Angola’s state oil company Sonangol, a $19-million loan went to the the Lobito refinery and other oil and gas projects, and  a $1.2-billion loan went towards an offshore oilfield development project.</p>      <p>Angola is Africa’s second-largest producer of oil, according to Opec. </p>    <p>The bulk of the rest of the Chinese financing  is shared between five hydro-electric power projects. </p><p>There are more than 300 projects listed in Angola in the dataset released by AidData in September 2021, including multiple ports, road and railways, airports, oil field and refinery projects.</p>       ',
      location: {
        center: [13.2833199, -11.1799557],
        zoom: 5.5,
        pitch: 20,
        bearing: 0,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        // {
        //     layer: 'layer-name',
        //     opacity: 1,
        //     duration: 5000
        // }
      ],
      onChapterExit: [
        // {
        //     layer: 'layer-name',
        //     opacity: 0
        // }
      ],
    },
    {
      id: 'nigeria1',
      alignment: 'right',
      hidden: false,
      title: 'Nigeria',
      image: './images/nigeria.png',
      description: 'General description',

      location: {
        center: [3.1438749, 6.5480357],
        zoom: 5,
        pitch: 0,
        bearing: 0,
        // flyTo additional controls-
        // These options control the flight curve, making it move
        // slowly and zoom out almost completely before starting
        // to pan.
        //speed: 2, // make the flying slow
        //curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: 'nigeria2',
      alignment: 'right',
      hidden: false,
      title: 'Zungeru Hydroelectric Power Plant',
      image: './images/nigeria-dam.png',
      description:
        'This project is scheduled to be completed this year (2022). Unit one was commissioned on 28 March 2022, first part of the project in operation according to Facebook announcement by Buhari’s spokesperson, Wakil Jiddo Muhammad. (See pic below of Zungeru dam wall from this FB account.      ',
      location: {
        center: [6.2932451, 9.9005702],
        zoom: 16,
        pitch: 60,
        bearing: 0,
        // flyTo additional controls-
        // These options control the flight curve, making it move
        // slowly and zoom out almost completely before starting
        // to pan.
        //speed: 2, // make the flying slow
        //curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: 'equitorialguinea1',
      alignment: 'right',
      hidden: false,
      title: 'Equatorial Guinea',
      image: './images/Equatorialguinea.png',
      description: 'General description',

      location: {
        center: [9.9484786, 1.4504894],
        zoom: 5,
        pitch: 0,
        bearing: 0,
        // flyTo additional controls-
        // These options control the flight curve, making it move
        // slowly and zoom out almost completely before starting
        // to pan.
        //speed: 2, // make the flying slow
        //curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: [],
    },

    {
      id: 'equitorialguinea2',
      alignment: 'right',
      hidden: false,
      title: 'Bata Port',
      // image: './images/Equatorialguinea.png',
      description:
        '<p>In 2007, China Eximbank and the Government of Equatorial Guinea signed a subsidiary buyer’s credit loan agreement for the Bata Port Rehabilitation and Expansion Project. The proceeds of the loan were used by the borrower to finance an EUR 315 million commercial (EPC) contract with CCCC First Harbor Engineering Co. Ltd. This project involved the restoration of an existing wharf, the construction of a new wharf and breakwater, and the acquisition and installation of machinery at the Port of Bata, according to AidData.</p><p>China is reportedly negotiating with local authorities to build a naval base in Bata, which is upsetting the US. This is similar to what happened in Djibouti with Doraleh port. https://china.aiddata.org/projects/59375/, says Ammar Malik or AidData. In December 2021, WSJ published a story “China seeks first Military Base on Africa’s Atlantic Coast, US Intelligence Finds.”</p> ',

      location: {
        center: [9.7368403, 1.8236817],
        zoom: 16,
        pitch: 60,
        bearing: 0,
        // flyTo additional controls-
        // These options control the flight curve, making it move
        // slowly and zoom out almost completely before starting
        // to pan.
        //speed: 2, // make the flying slow
        //curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: [],
    },

    {
      id: 'algeria1',
      alignment: 'right',
      hidden: false,
      title: "Opéra d'Alger",
      image: './images/algeriaopera.png',
      description:
        'The Algerian government got a $57.14-million grant from the China Ministry of Commerce for a 1,400 seat opera house 12km from Algiers. It was a “symbol of friendship”.        ',

      location: {
        center: [2.9303258, 36.7368171],
        zoom: 20,
        pitch: 60,
        bearing: 0,
        // flyTo additional controls-
        // These options control the flight curve, making it move
        // slowly and zoom out almost completely before starting
        // to pan.
        //speed: 2, // make the flying slow
        //curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: [],
    },

    {
      id: 'kenya1',
      alignment: 'right',
      hidden: false,
      title: 'Mombasa-Nairobi Railway line',
      // image: './images/algeriaopera.png',
      description:
        'This project cost $4.9-billion according to AidData, linking Nairobi to the country’s main. It is reportedly Kenya’s most expensive infrastructure project since independence and it has been controversial because of the debt incurred by Kenya and that the project was built by Chinese companies. The first passengers travelled on the new railway line in 2017. What has been its impact on Kenyans since then?    ',

      location: {
        center: [39.66008611, -4.05769119],
        zoom: 15,
        pitch: 60,
        bearing: 0,
        // flyTo additional controls-
        // These options control the flight curve, making it move
        // slowly and zoom out almost completely before starting
        // to pan.
        //speed: 2, // make the flying slow
        //curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: 'sa1',
      alignment: 'right',
      hidden: false,
      title: 'Medupi Power Station',
      // image: './images/algeriaopera.png',
      description:
        'Huarong Energy provided a $2-bn loan to Eskom, the state electricity utility,  for power station upgrades, which came up at the Zondo Zondo Commission of Inquiry into State Capture. Two massive coal-power stations were built, Medupi and Kusile. South Africa is experiencing a spate of rolling blackouts (euphemistically known as loadshedding) because of years of mismanagement and lack of maintenance at Eskom. This is affecting economic growth. Would be interesting to know what impact Medupi has had on the people living in Lephalale.         ',

      location: {
        center: [27.5610361, -23.7049107],
        zoom: 15,
        pitch: 60,
        bearing: 0,
        // flyTo additional controls-
        // These options control the flight curve, making it move
        // slowly and zoom out almost completely before starting
        // to pan.
        //speed: 2, // make the flying slow
        //curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: [],
    },
  ],
}
