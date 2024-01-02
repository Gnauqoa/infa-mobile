import { MapMarker, MapShape } from "expo-leaflet";

export const circle: MapShape = {
  shapeType: "circle",
  color: "#123123",
  id: "1",
  center: { lat: 34.225727, lng: -77.94471 },
  radius: 2000,
};

export const circleMarker: MapShape = {
  shapeType: "circle",
  color: "red",
  id: "2",
  center: { lat: 38.437424, lng: -78.867912 },
  radius: 15,
};

export const polygon: MapShape = {
  shapeType: "polygon",
  color: "blue",
  id: "3",
  positions: [
    { lat: 38.80118939192329, lng: -74.69604492187501 },
    { lat: 38.19502155795575, lng: -74.65209960937501 },
    { lat: 39.07890809706475, lng: -71.46606445312501 },
  ],
};

export const multiPolygon: MapShape = {
  shapeType: "polygon",
  color: "violet",
  id: "4",
  positions: [
    [
      { lat: 37.13842453422676, lng: -74.28955078125001 },
      { lat: 36.4433803110554, lng: -74.26208496093751 },
      { lat: 36.43896124085948, lng: -73.00964355468751 },
      { lat: 36.43896124085948, lng: -73.00964355468751 },
    ],
    [
      { lat: 37.505368263398104, lng: -72.38891601562501 },
      { lat: 37.309014074275915, lng: -71.96594238281251 },
      { lat: 36.69044623523481, lng: -71.87805175781251 },
      { lat: 36.58024660149866, lng: -72.75146484375001 },
      { lat: 37.36579146999664, lng: -72.88330078125001 },
    ],
  ],
};

export const polyline: MapShape = {
  shapeType: "polyline",
  color: "orange",
  id: "5",
  positions: [
    { lat: 35.411438052435486, lng: -78.67858886718751 },
    { lat: 35.9602229692967, lng: -79.18945312500001 },
    { lat: 35.97356075349624, lng: -78.30505371093751 },
  ],
};

export const multiPolyline: MapShape = {
  shapeType: "polyline",
  color: "purple",
  id: "5a",
  positions: [
    [
      { lat: 36.36822190085111, lng: -79.26086425781251 },
      { lat: 36.659606226479696, lng: -79.28833007812501 },
      { lat: 36.721273880045004, lng: -79.81018066406251 },
    ],
    [
      { lat: 35.43381992014202, lng: -79.79370117187501 },
      { lat: 35.44277092585766, lng: -81.23840332031251 },
      { lat: 35.007502842952896, lng: -80.837402343750017 },
    ],
  ],
};

export const rectangle: MapShape = {
  shapeType: "rectangle",
  color: "yellow",
  id: "6",
  bounds: [
    [36.5, -75.7],
    [38.01, -73.13],
  ],
};

export const mapShapes: Array<MapShape> = [
  // {
  //   shapeType: 'circle',
  //   color: '#123123',
  //   id: '1',
  //   center: { lat: 34.225727, lng: -77.94471 },
  //   radius: 2000,
  // },
  // {
  //   shapeType: 'circleMarker',
  //   color: '#dd2245',
  //   id: '2',
  //   center: { lat: 38.437424, lng: -78.867912 },
  //   radius: 15,
  // },
  {
    shapeType: "polygon",
    color: "#4545dd",
    id: "1",
    positions: [
      { lat: 10.746394852210859, lng: 106.68571650981904 },
      { lat: 10.746521340286174, lng: 106.68597400188447 },
      { lat: 10.746231471701819, lng: 106.68616175651552 },
      { lat: 10.746089172476735, lng: 106.68590426445009 },
    ],
  },
  {
    shapeType: "polygon",
    color: "#dd2245",
    id: "2",
    positions: [
      { lat: 10.746173497951547, lng: 106.68630123138429 },
      { lat: 10.746347419168954, lng: 106.6867357492447 },
      { lat: 10.746126064874861, lng: 106.68681621551515 },
      { lat: 10.745936332493589, lng: 106.68643534183504 },
    ],
  },
  {
    shapeType: "polygon",
    color: "#25cc25",
    id: "3",
    positions: [
      { lat: 10.747214388591425, lng: 106.68486893177034 },
      { lat: 10.747330335681054, lng: 106.68506205081941 },
      { lat: 10.74694296682112, lng: 106.6852042078972 },
      { lat: 10.746834925077655, lng: 106.68504863977434 },
    ],
  },
  {
    shapeType: "polygon",
    color: "#FF9800",
    id: "4",
    positions: [
      { lat: 10.748271086557002, lng: 106.68550729751588 },
      { lat: 10.748502979879902, lng: 106.68603837490083 },
      { lat: 10.748276356861767, lng: 106.68613493442537 },
      { lat: 10.748049733673499, lng: 106.68560922145845 },
    ],
  },
  {
    shapeType: "polygon",
    color: "#5F8670",
    id: "5",
    positions: [
      { lat: 10.747095806294613, lng: 106.68586134910585 },
      { lat: 10.747301348912822, lng: 106.68631732463838 },
      { lat: 10.74707472499253, lng: 106.68640315532686 },
      { lat: 10.746842830572403, lng: 106.6859418153763 },
    ],
  },
  // {
  //   shapeType: 'polygon',
  //   color: '#25cc25',
  //   id: '4',
  //   positions: [
  //     [
  //       { lat: 37.13842453422676, lng: -74.28955078125001 },
  //       { lat: 36.4433803110554, lng: -74.26208496093751 },
  //       { lat: 36.43896124085948, lng: -73.00964355468751 },
  //       { lat: 36.43896124085948, lng: -73.00964355468751 },
  //     ],
  //     [
  //       { lat: 37.505368263398104, lng: -72.38891601562501 },
  //       { lat: 37.309014074275915, lng: -71.96594238281251 },
  //       { lat: 36.69044623523481, lng: -71.87805175781251 },
  //       { lat: 36.58024660149866, lng: -72.75146484375001 },
  //       { lat: 37.36579146999664, lng: -72.88330078125001 },
  //     ],
  //   ],
  // },
  // {
  //   shapeType: 'polyline',
  //   color: 'orange',
  //   id: '5',
  //   positions: [
  //     { lat: 35.411438052435486, lng: -78.67858886718751 },
  //     { lat: 35.9602229692967, lng: -79.18945312500001 },
  //     { lat: 35.97356075349624, lng: -78.30505371093751 },
  //   ],
  // },
  // {
  //   shapeType: 'polyline',
  //   color: 'purple',
  //   id: '6',
  //   positions: [
  //     [
  //       { lat: 36.36822190085111, lng: -79.26086425781251 },
  //       { lat: 36.659606226479696, lng: -79.28833007812501 },
  //       { lat: 36.721273880045004, lng: -79.81018066406251 },
  //     ],
  //     [
  //       { lat: 35.43381992014202, lng: -79.79370117187501 },
  //       { lat: 35.44277092585766, lng: -81.23840332031251 },
  //       { lat: 35.007502842952896, lng: -80.837402343750017 },
  //     ],
  //   ],
  // },
  // {
  //   shapeType: 'rectangle',
  //   color: 'yellow',
  //   id: '6',
  //   bounds: [
  //     [10.770405554608004, 106.68823242187501],
  //     [10.770389744853786, 10.770389744853786],
  //   ],
  // },
];

export const getPlantData = (id: string) => {
  return plantData.find((item) => item.id.toString() === id.toString());
};
const plantData = [
  {
    id: "1",
    title: "Nhà xưởng Bình Dương",
    position: { lat: 10.74627890476194, lng: 106.68595254421236 },
    area: "250m2",
  },
  {
    id: "2",
    title: "Nhà xưởng Biên Hoà",
    position: { lat: 10.74614187590125, lng: 106.6865748167038 },
    area: "350m2",
  },
  {
    id: "3",
    title: "Nhà xưởng Long Thành",
    area: "450m2",
    position: { lat: 10.747090535969226, lng: 106.68500840663911 },
  },
  {
    id: "4",
    title: "Nhà xưởng Dầu Dây",
    area: "550m2",
    position: { lat: 10.748281627166456, lng: 106.6857808828354 },
  },
  {
    id: "5",
    title: "Nhà xưởng Củ Chi",
    area: "650m2",
    position: { lat: 10.748281627166456, lng: 106.6857808828354 },
  },
];
export const mapMarkers: MapMarker[] = [
  {
    id: "1", // The ID attached to the marker. It will be returned when onMarkerClicked is called
    position: { lat: 10.74627890476194, lng: 106.68595254421236 },
    // HTML element that will be displayed as the marker.  It can also be text or an SVG string.
    icon: "<span>🏭</span>",
    size: [24, 24],
  },
  {
    id: "2", // The ID attached to the marker. It will be returned when onMarkerClicked is called
    position: { lat: 10.74614187590125, lng: 106.6865748167038 },
    // HTML element that will be displayed as the marker.  It can also be text or an SVG string.
    icon: "<span>🏭</span>",
    size: [24, 24],
  },
  {
    id: "3", // The ID attached to the marker. It will be returned when onMarkerClicked is called
    position: { lat: 10.747090535969226, lng: 106.68500840663911 },
    // HTML element that will be displayed as the marker.  It can also be text or an SVG string.
    icon: "<span>🏭</span>",
    size: [24, 24],
  },
  {
    id: "4", // The ID attached to the marker. It will be returned when onMarkerClicked is called
    position: { lat: 10.748281627166456, lng: 106.6857808828354 },
    // HTML element that will be displayed as the marker.  It can also be text or an SVG string.
    icon: "<span>🏠</span>",
    size: [24, 24],
  },
  {
    id: "5", // The ID attached to the marker. It will be returned when onMarkerClicked is called
    position: { lat: 10.748281627166456, lng: 106.6857808828354 },
    // HTML element that will be displayed as the marker.  It can also be text or an SVG string.
    icon: "<span>🏠</span>",
    size: [24, 24],
  },
];
