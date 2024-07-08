import { test_motoko_backend } from 'declarations/test-motoko-backend';
import useAdd from '../hooks/useAdd.jsx';

export default function List() {

    const { myFavs, setMyFavs } = useAdd();

    const handleClick = (e) => {
        const favId = Number(e.target.id);
        const removeFavFromList = async () => {
            const updatedFavs = await test_motoko_backend.removeFromFavorites(myFavs, favId);
            setMyFavs(updatedFavs);
        };
        removeFavFromList();
    };

    return (
        <div className="w-1/4 p-6 mx-auto bg-gray-100 shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-4 text-center">Albums added</h1>
            <div className="space-y-4">
                {myFavs.length > 0 ? (
                    myFavs.map(fav => (
                        <div key={fav.id} className="bg-white p-4 rounded-md shadow-md">
                            <img src={fav.photo} alt="Album" className='w-1/3 mb-8' />
                            <h2 className="text-2xl font-bold">{fav.name}</h2>
                            <h3 className="text-lg font-semibold">{fav.album}</h3>
                            <p className="text-gray-600">{Number(fav.year)}</p>
                            <button
                                id={Number(fav.id)}
                                className='bg-red-700 font-bold px-6 py-3 rounded-lg text-white mt-2'
                                onClick={handleClick}
                            >
                                Remove
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-600">You don't have favorites albums in your list.</p>
                )}
            </div>
        </div>
    );
}
