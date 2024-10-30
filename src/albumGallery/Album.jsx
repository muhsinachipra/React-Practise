const Album = ({ albumId, photos, setSelectedAlbum }) => {
    return (
        <div className="album" onClick={() => setSelectedAlbum(albumId)}>
            <h2>Album {albumId}</h2>
            <p>{photos.length} Photos</p>
        </div>
    );
};

export default Album;
