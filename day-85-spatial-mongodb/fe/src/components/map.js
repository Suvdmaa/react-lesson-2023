import { useContext } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  CircleMarker,
} from "react-leaflet";
import { RestaurantContext } from "../context/restaurants.context";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { NeighborhoodContext } from "../context/neighborhoods.context";
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function Map() {
  const restaurant = useContext(RestaurantContext);
  const neighborhood = useContext(NeighborhoodContext);
  const redOptions = { color: "red" };
  return (
    <div>
      <h1>My Map</h1>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {restaurant.map((m) => {
          return (
            <Marker position={[m.address.coord[1], m.address.coord[0]]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          );
        })}
        {neighborhood &&
          neighborhood.map((p) => {
            // console.log(p.geometry.coordinates[0][0][0]);
            return (
              <CircleMarker
                center={[
                  p.geometry.coordinates[0][0][1],
                  p.geometry.coordinates[0][0][0],
                ]}
                pathOptions={redOptions}
                radius={20}
              >
                <Popup>Popup in CircleMarker</Popup>
              </CircleMarker>
            );
          })}
      </MapContainer>
    </div>
  );
}
