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
      title: '',
      image: './images/Angola.png',
      description:
        '<p>China has committed by far the most money in Angola – over $52-billion, a quarter of the amount spent in the whole of Africa, according to AidData’s research.</p><p>The bulk of the money to Angola ($21-billion)  has gone into energy projects: $12-billion to Angola’s state oil company Sonangol, $1.2-billion to an offshore oilfield development project and $19-million to an oil refinery and other oil and gas projects.</p><p>Angola is Africa’s third-largest producer of oil, according to <a href="https://www.opec.org/opec_web/en/about_us/147.htm">Opec’s</a> 2021 figures, which also show that the country’s oil production output has been falling since 2017.China’s loans are often linked to oil sales.</p>',
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
      id: 'angola2',
      alignment: 'left',
      hidden: false,
      title: '',
      description:'<p><div class="flourish-embed flourish-chart" data-src="visualisation/10545142"><script src="https://public.flourish.studio/resources/embed.js"></script></div></p><p>The bulk of the rest of the Chinese financing is shared between five hydro-electric power projects. </p><p>There are more than 300 projects listed in Angola in the dataset released by AidData in September 2021, including multiple ports, roads and railways, airports, an oil field and refinery projects.</p><p>Not only is the country oil-rich but its ports are gateways for raw materials mined in landlocked countries such as the Democratic Republic of Congo (DRC) and Zambia.</p><p>For example, $715-million went towards rehabilitating the 1,350km-long Benguela Railway line that connects Angola’s port of Lobito with Luau on the other side of the country on the border with DRC.</p><p>The railway line facilitates the transportation of cobalt from mines in the DRC and copper from Zambia to the Atlantic port for export around the world.</p>',
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
      id: 'equitorialguinea1',
      alignment: 'right',
      hidden: false,
      title: 'Equatorial Guinea',
      image: './images/Equatorial_Guinea.png',
      description: '<p>Ports are a major part of the Belt and Road initiative, harkening back to the maritime silk road trade route that connected China with Southeast Asia, the Arabian peninsula, Europe and East Africa.</p><p>Ports are a gateway to trade and China has financed the construction or revamping of 21 ports in Africa in the past two decades. China’s imports of resources such as oil, iron ore and copper from Africa are growing.</p><p>Tiny Equatorial Guinea has  oil and thanks to that it has one of the highest GPDs per capita on the continent.</p>',

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
      description:
        '<p><div class="flourish-embed flourish-chart" data-src="visualisation/10545218"><script src="https://public.flourish.studio/resources/embed.js"></script></div></p><p>An oil-backed loan agreement between China’s Eximbank and the government of Equatorial Guinea helped to finance the rehabilitation and modernisation of the port of Bata into a large, deep-water port. It was officially inaugurated in 2019.</p><p>At the end of 2021 the Wall Street Journal reported that China was negotiating with authorities in Equatorial Guinea to build a <a href="https://www.wsj.com/articles/china-seeks-first-military-base-on-africas-atlantic-coast-u-s-intelligence-finds-11638726327" target="_blank">naval base near Bata</a>, which the United States government is not pleased about given Equatorial Guinea’s position on the Atlantic Ocean.</p><p>If the plan were to go ahead, it would be China’s second military base in Africa.</p><p>China also has a naval base in tiny Djibouti, on the East African coast, next to the <a href="https://china.aiddata.org/projects/59375/" target="_blank">Port of Doraleh</a>. Work was also completed at that port in 2017 by Chinese companies with Chinese financing.</p>',
      location: {
        center: [9.7368403, 1.8236817],
        zoom: 12,
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
      id: 'equitorialguinea3',
      alignment: 'right',
      hidden: false,
      image: './images/Port_of_Doraleh.png',
      description:
        '',
      location: {
        center: [9.7368403, 1.8236817],
        zoom: 12,
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
      id: 'nigeria1',
      alignment: 'right',
      hidden: false,
      image: './images/Nigeria.png',
      description: '<p>Nigeria has a shortage of electricity. Just over half of its 200-million people have access to electricity from the national grid, according to the World Bank.</p><p>As a result, the cities hum with the sound of petrol or diesel generators.</p><p>There are between 20-million and 60-million small petrol or diesel generators in Nigeria, which, according to a report by the Access to Energy Institute, have “eight times more capacity than the entire national grid”.</p>',

      location: {
        center: [3.1438749, 6.5480357],
        zoom: 10,
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
      description:
        '<p><div class="flourish-embed flourish-scatter" data-src="visualisation/10545424"><script src="https://public.flourish.studio/resources/embed.js"></script></div></p><p>The <a href="https://www.thisdaylive.com/index.php/2022/03/04/fg-nigerias-installed-electricity-capacity-stands-at-18000mw-generates-8000mw-daily/" target="_blank">energy minister recently stated</a> that the country has 18GW of installed capacity, but typically only 8GW is delivered.</p><p>Nigeria ranks sixth in Africa for the amount of electricity generated in terrawatt hours, a long way behind South Africa and Egypt, according to energy think tank Ember, even though its population is significantly bigger.</p><p>Ironically, oil and natural gas are Nigeria’s <a href="https://nigerianstat.gov.ng/elibrary/read/1241099" target="_blank">top-two export products</a>.  Nigeria is Africa’s largest producer of crude oil and 75% of the country’s export income is from crude oil. Most of the country’s electricity is generated from natural gas. Yet, not enough is being produced to meet the country’s needs</p><p>The country still has to import petrol because of  lack of <a href="https://www.dataphyte.com/latest-reports/development/how-nigerias-high-petrol-importation-and-dead-refineries-affect-its-struggling-economy/#:~:text=Already%2C%20refined%20petroleum%20takes%20the,of%20the%20total%20import%20value." target="_blank">refining capacity</a>. “Motor spirit” or petrol is the country’s biggest import and millions of litres of it is needed to power the generators.</p>',
      location: {
        center: [6.2932451, 9.9005702],
        zoom: 12,
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
      id: 'nigeria3',
      alignment: 'right',
      hidden: false,
      title: 'Zungeru Hydroelectric Power Plant',
      description:
        '<p><div class="flourish-embed flourish-chart" data-src="visualisation/10545564"><script src="https://public.flourish.studio/resources/embed.js"></script></div></p><p>Enter China. The Chinese have already provided finance for two gas power plants in Nigeria.</p><p>But one of its biggest investments in the energy sector is the new 700MW Zungera Hydroelectric dam located in Niger State, which is due to come on stream in 2022. It will meet close to 10% of Nigeria’s total domestic energy needs, according to Nigeria’s <a href="https://www.bpe.gov.ng/zungeru-hydropower-project/" target="_blank">Bureau of Public Enterprise</a></p><p>Zungera is one of 47 hydroelectric power projects China has been involved with in Africa since 2000, according to AidData.</p><p>These projects range in size from the massive 2,172MW Caculo Cabaca Hydroelectric power station in Angola to the 0.64MW Makali plant in Sierra Leone. Together they have a potential generating capacity of close to 12,000MW.</p><p>Zungera is the sixth largest of Chinese-financed dams in Africa.</p>',
      location: {
        center: [6.2932451, 9.9005702],
        zoom: 12,
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
      title: "",
      image: './images/Algeria.png',
      description:
        '<p>Algeria is also one of the top-four oil producers in Africa, but, unlike Angola, Equatorial Guinea and Nigeria, China has not committed money to projects in its energy or transport sector. Financial flows from China to Algeria have been low in comparison to other countries in Africa.</p><p>However, China has been involved in the El Hamdania deep-water container port on the Mediterranean Sea from around 2016, but it appears that no financial commitment has been made, according to AidData. The project was suspended in 2019, but <a href="https://www.express-dz.com/2021/12/14/port-cherchell-achevement-etudes-techniques-procedures-administratives/" target="_blank">construction work on the port</a> is reported to have begun in 2021.</p><p>So far, the two biggest projects between 2000 and 2017 are a building for the foreign ministry and an opera house.</p><p>In 2010, the Algerian government received a $57-million grant from China to build a 1,400 seat opera house near, Algiers. Described as a “<a href="https://news.cgtn.com/news/3d3d414f7a67444e79457a6333566d54/share_p.html" target="_blank">symbol of friendship</a>” between the two countries, the opera house, built by the Beijing Urban Construction Group, opened in 2016.</p><p>The relationship between the two countries has been growing since then. China’s foreign minister, Wang Yi, visited Algeria in 2021 and the two countries reportedly <a href="https://www.silkroadbriefing.com/news/2021/07/27/algeria-to-coordinate-national-development-plans-with-chinas-belt-and-road-initiative/" target="_blank">intend to deepen their cooperation under the BRI framework</a>, which will include road, mining and energy projects.</p>',
      location: {
        center: [2.9303258, 36.7368171],
        zoom: 14,
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
      id: 'algeria2',
      alignment: 'right',
      hidden: false,
      title: "Opéra d'Alger",
      image: './images/Opéra_d_Alger.png',
      description:
        '<p>China has been involved in the construction or rehabilitation of three other theatres in Africa, one in Cote d’Ivoire, one in Ghana and one in Senegal.</p><p>But the leisure activity it has built the most infrastructure for is sport. Football is the most popular sport in Africa. China has financed the construction or rehabilitation of 62 stadiums around the continent over the past two decades, particularly in West Africa.</p>',
      location: {
        center: [2.9303258, 36.7368171],
        zoom: 14,
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
      id: 'algeria3',
      alignment: 'right',
      hidden: false,
      description:
        '<p><div class="flourish-embed flourish-map" data-src="visualisation/10545629"><script src="https://public.flourish.studio/resources/embed.js"></script></div></p><p>China has been involved in the construction or rehabilitation of three other theatres in Africa, one in Cote d’Ivoire, one in Ghana and one in Senegal.</p><p>But the leisure activity it has built the most infrastructure for is sport. Football is the most popular sport in Africa. China has financed the construction or rehabilitation of 62 stadiums around the continent over the past two decades, particularly in West Africa.</p>',
      location: {
        center: [2.9303258, 36.7368171],
        zoom: 14,
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
        zoom: 10,
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
        zoom: 10,
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
