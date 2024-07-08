import Array "mo:base/Array";
import Debug "mo:base/Debug";

actor {
    type Singer = {
        id: Nat;
        name: Text;
        year: Nat;
        photo: Text;
        album: Text;
    };

    public func updateFavorites(prevFavs: [Singer], singerToAdd: Singer): async [Singer] {
        Debug.print("SingerID: ");
        Debug.print(debug_show(singerToAdd.id));

        var found: Bool = false;

        let newFavs = Array.map<Singer, Singer>(prevFavs, func(fav: Singer): Singer {
            if (fav.id == singerToAdd.id) {
                found := true;
                return singerToAdd;
            } else {
                return fav;
            }
        });

        if (not found) {
            return Array.append<Singer>(newFavs, [singerToAdd]);
        } else {
            return newFavs;
        }
    };

    public func removeFromFavorites(prevFavs: [Singer], singerId: Nat): async [Singer] {
        return Array.filter<Singer>(prevFavs, func(singer: Singer): Bool {
            singer.id != singerId;
        });
    }
}
