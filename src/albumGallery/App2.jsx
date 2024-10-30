import { useState, useEffect } from "react";
import Album from "./Album";
import Modal from 'react-modal';

const App2 = () => {
    const [photos, setPhotos] = useState([]);
    const [selectedAlbum, setSelectedAlbum] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        // Fetching the album data from the API
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then(response => response.json())
            .then(data => setPhotos(data.slice(0, 100))) // limit to 100 photos for simplicity
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    const albums = [...new Set(photos.map(photo => photo.albumId))];

    return (
        <div className="App">
            <h1>Albums Gallery</h1>
            <div className="album-list">
                {albums.map(albumId => (
                    <Album
                        key={albumId}
                        albumId={albumId}
                        photos={photos.filter(photo => photo.albumId === albumId)}
                        setSelectedAlbum={setSelectedAlbum}
                    />
                ))}
            </div>

            {selectedAlbum && (
                <div className="thumbnail-list">
                    <h2>Album {selectedAlbum}</h2>
                    {photos
                        .filter(photo => photo.albumId === selectedAlbum)
                        .map(photo => (
                            <img
                                key={photo.id}
                                src={photo.thumbnailUrl}
                                alt={photo.title}
                                onClick={() => setSelectedImage(photo.url)}
                                style={{ cursor: "pointer", margin: "10px" }}
                            />
                        ))}
                </div>
            )}

            {selectedImage && (
                <Modal
                    isOpen={true}
                    onRequestClose={() => setSelectedImage(null)}
                    contentLabel="Image Modal"
                    className="image-modal"
                >
                    <img src={selectedImage} alt="Full size" />
                    <button onClick={() => setSelectedImage(null)}>Close</button>
                </Modal>
            )}
        </div>
    );
};

export default App2;
