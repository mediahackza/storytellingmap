var config = {
  style: 'mapbox://styles/alastairotter/cl3lqp5at006o16mr2eb0j6b3',
  accessToken:
    'pk.eyJ1IjoiYWxhc3RhaXJvdHRlciIsImEiOiJjaWc1NjM1dGYwYXV6djJtNjc5dGNqZThrIn0.SWLrLlYJWBdLvyIURec3FA',
  showMarkers: false,
  markerColor: 'red',

  //projection: 'equirectangular',
  //Read more about available projections here
  //https://docs.mapbox.com/mapbox-gl-js/example/projections/
  inset: false,
  theme: 'dark',
  use3dTerrain: false, //set true for enabling 3D maps.
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
      id: 'angola',
      alignment: 'left',
      hidden: false,
      title: 'Angola',
      image: 'https://hosted.mediahack.co.za/flags/ng.svg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
        // {
        //   layer: 'energyprojects',
        //   opacity: 1,
        //   duration: 5000,
        // },
      ],
      onChapterExit: [
        // {
        //     layer: 'layer-name',
        //     opacity: 0
        // }
      ],
    },
    {
      id: 'second-identifier',
      alignment: 'right',
      hidden: false,
      title: 'Lagos, Nigeria',
      image: './images/lagos.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      location: {
        center: [3.1438717, 6.5483768],
        zoom: 8.5,
        pitch: 20,
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
      id: 'third-identifier',
      alignment: 'left',
      hidden: false,
      title: 'South Africa',
      image: 'https://hosted.mediahack.co.za/flags/za.svg',
      description: 'Copy these sections to add to your story.',
      location: {
        center: [22.4763321, -30.4278936],
        zoom: 4.52,
        pitch: 8.01,
        bearing: 0.0,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: 'fourth-chapter',
      alignment: 'right',
      hidden: false,
      title: "Eskom's Megawatt Park",
      image: './images/megawattpark.jpeg',
      description: 'Copy these sections to add to your story.',
      location: {
        center: [28.0697402, -26.0323924],
        zoom: 16,
        pitch: 60,
        bearing: 0,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: [],
    },
  ],
}
