import { ExpoLeaflet } from "expo-leaflet";
import * as Location from "expo-location";
import type { LatLngLiteral } from "leaflet";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Button,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MapLayer } from "expo-leaflet";
import { getPlantData, mapMarkers, mapShapes } from "../constants/mockData";

const mapLayers: Array<MapLayer> = [
  {
    attribution:
      '&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    baseLayerIsChecked: true,
    baseLayerName: "OpenStreetMap",
    layerType: "TileLayer",
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  },
  {
    baseLayerIsChecked: true,
    baseLayer: true,
    baseLayerName: "Mapbox",
    layerType: "TileLayer",
    url: `https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoid2hlcmVzbXl3YXZlcyIsImEiOiJjanJ6cGZtd24xYmU0M3lxcmVhMDR2dWlqIn0.QQSWbd-riqn1U5ppmyQjRw`,
  },
];

const mapOptions = {
  attributionControl: false,
  zoomControl: Platform.OS === "web",
};

const initialPosition = {
  lat: 10.772830242,
  lng: 106.690497238,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: 60,
    backgroundColor: "dodgerblue",
    paddingHorizontal: 10,
    paddingTop: 30,
    width: "100%",
  },
  headerText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  mapControls: {
    backgroundColor: "rgba(255,255,255,.5)",
    borderRadius: 5,
    bottom: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    left: 0,
    marginHorizontal: 10,
    padding: 7,
    position: "absolute",
    right: 0,
  },
  mapButton: {
    alignItems: "center",
    height: 42,
    justifyContent: "center",
    width: 42,
  },
  mapButtonEmoji: {
    fontSize: 28,
  },
});

export default function App() {
  const [zoom, setZoom] = useState(7);
  const [mapCenterPosition, setMapCenterPosition] = useState(initialPosition);
  const [ownPosition, setOwnPosition] = useState<null | LatLngLiteral>(null);

  useEffect(() => {
    const getLocationAsync = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.warn("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      if (!ownPosition) {
        setOwnPosition({
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        });
      }
    };

    getLocationAsync().catch((error) => {
      console.error(error);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, position: "relative" }}>
        <ExpoLeaflet
          loadingIndicator={() => <ActivityIndicator />}
          mapCenterPosition={mapCenterPosition}
          mapLayers={mapLayers}
          mapMarkers={mapMarkers}
          mapOptions={mapOptions}
          mapShapes={mapShapes}
          maxZoom={20}
          onMessage={(message) => {
            switch (message.tag) {
              case "onMapMarkerClicked":
                console.log(message.mapMarkerId.toString());
                const data = getPlantData(message.mapMarkerId.toString());
                Alert.alert(
                  `Tên ${data?.title}`,
                  `Vị trí: ${data?.position.lat} , ${data?.position.lng} \n Diện tích: ${data?.area}`
                );
                break;
              case "onMapClicked":
                // Alert.alert(
                //   `Map Touched at:`,
                //   `${message.location.lat}, ${message.location.lng}`,
                // )
                console.log(message);
                console.log(
                  `{ lat: ${message.location.lat}, lng: ${message.location.lng} },`
                );
                break;
              // case 'onMoveEnd':
              //   setMapCenterPosition(message.mapCenter)
              //   break
              // case 'onZoomEnd':
              //   setZoom(message.zoom)
              //   break
              default:
                if (["onMove"].includes(message.tag)) {
                  return;
                }
              // console.log(message)
            }
          }}
          zoom={zoom}
        />
      </View>
      <Button
        onPress={() => {
          setMapCenterPosition(initialPosition);
          setZoom(7);
        }}
        title="Reset Map!"
      />
    </SafeAreaView>
  );
}
