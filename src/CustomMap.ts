export interface Marker {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMap {
  map: google.maps.Map;

  constructor(divId: string) {
    this.map = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(marker: Marker): void {
    const newMarker = new google.maps.Marker({
      map: this.map,
      position: {
        lat: marker.location.lat,
        lng: marker.location.lng,
      },
    });

    newMarker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: marker.markerContent(),
      });

      infoWindow.open(this.map, newMarker);
    });
  }
}
