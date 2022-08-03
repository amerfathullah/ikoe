import { Injectable } from '@angular/core';
import { VENUES } from "./mock-venues";

@Injectable({
  providedIn: 'root'
})

export class VenueProvider {
    venues: any;
    type: any;
    favoriteCounter: number = 0;
    favorites: Array<any> = [];
    bookingCounter: number = 0;
    bookings: Array<any> = [];

    constructor() {
        this.venues = VENUES;
    }

    getAll() {
        return this.venues;
    }

    getItem(id) {
        for (var i = 0; i < this.venues.length; i++) {
            if (this.venues[i].id === parseInt(id)) {
                return this.venues[i];
            }
        }
        return null;
    }

    getRoom(venueID, roomID) {
        let venue = this.getItem(venueID);

        for (let i = 0; i < venue.rooms.length; i++) {
            if (venue.rooms[i].id === parseInt(roomID)) {
                return venue.rooms[i];
            }
        }

        return null;
    }

    remove(item) {
        this.venues.splice(this.venues.indexOf(item), 1);
    }

    /////
    //For Search and Favorites
    ////
    findAll() {
        return Promise.resolve(this.venues);
    }

    findById(id) {
        return Promise.resolve(this.venues[id - 1]);
    }

    findByName(searchKey: string) {
        let key: string = searchKey.toUpperCase();
        return Promise.resolve(this.venues.filter((property: any) =>
            (property.title + property.description).toUpperCase().indexOf(key) > -1));
    }

    getFavorites() {
        return Promise.resolve(this.favorites);
    }

    getBookings() {
        return Promise.resolve(this.bookings);
    }

    favorite(venue) {
        this.favoriteCounter = this.favoriteCounter + 1;
        let exist = false;

        if (this.favorites && this.favorites.length > 0) {
            this.favorites.forEach((val, i) => {
                if (val.venue.id === venue.id) {
                    exist = true;
                }
            });
        }

        if (!exist) {
            this.favorites.push({ id: this.favoriteCounter, venue: venue });
        }

        return Promise.resolve();
    }

    booking(venue) {
        this.bookingCounter = this.bookingCounter + 1;
        let existb = false;

        if (this.bookings && this.bookings.length > 0) {
            this.bookings.forEach((val, i) => {
                if (val.venue.id === venue.id) {
                    existb = true
                }
            });
        }

        if (!existb) {
            this.bookings.push({ id: this.bookingCounter, venue: venue });
        }

        return Promise.resolve();
    }

    unfavorite(favorite) {
        let index = this.favorites.indexOf(favorite);
        if (index > -1) {
            this.favorites.splice(index, 1);
        }
        return Promise.resolve();
    }
}