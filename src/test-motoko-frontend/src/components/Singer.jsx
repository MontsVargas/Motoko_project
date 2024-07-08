import { test_motoko_backend } from 'declarations/test-motoko-backend';
import useAdd from '../hooks/useAdd.jsx';
import { singers } from '../mocks/singer.js';

export default function Singer() {
    const { myFavs, setMyFavs } = useAdd();

    const handleClick = async (e) => {
        const favToAdd = singers[e.target.id - 1];
        favToAdd.amount = 1;
        if (favToAdd) {
            const updatedFavs = await test_motoko_backend.updateFavorites([...myFavs], favToAdd);
            setMyFavs(updatedFavs);
        }
    }

    return (
        <div className="w-3/4 mx-auto p-6 bg-gray-800">
            <h1 className="text-5xl font-bold text-center my-12 text-slate-50">Albums top list</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    singers.map(element => (
                        <div key={element.id} className="bg-violet-600 shadow-md rounded-lg p-6">
                            <h2 className="text-3xl font-bold mb-4">{element.name}</h2>
                            <h2 className="text-xl font-semibold mb-4">{element.album}</h2>
                            <img src={element.photo} alt={element.name} className="w-full object-cover rounded-md mb-4" />
                            <p className='text-lg text-justify my-4 font-semibold shadow-2xl'>{element.description}</p>
                            <p className="text-black font-bold">{element.year}</p>
                            <div className='flex space-x-8'>
                                <button className='rounded-xl bg-white font-bold text-black py-2 px-4' id={element.id} onClick={handleClick}>Add</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
